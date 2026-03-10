import { NormalizedSchema } from "@smithy/core/schema";
import { SnapshotProtocol } from "@smithy/snapshot-testing";
import type {
  $Codec,
  $ShapeDeserializer,
  $ShapeSerializer,
  HttpResponse,
  StaticErrorSchema,
  StaticOperationSchema,
} from "@smithy/types";
import { fromUtf8 } from "@smithy/util-utf8";
import { Readable } from "node:stream";

import { setResponseBody } from "./setResponseBody";

/**
 * @internal
 */
export abstract class RpcSnapshotResponseSerializer extends SnapshotProtocol {
  protected abstract codec: $Codec<any, any> | null;
  protected abstract serializer: $ShapeSerializer<any>;
  protected abstract deserializer: $ShapeDeserializer<any>;

  public abstract getShapeId(): string;

  public abstract getDefaultContentType(): string;

  public async serializeResponse(operationSchema: StaticOperationSchema, output: any): Promise<HttpResponse> {
    const $output = NormalizedSchema.of(operationSchema[5]);
    const eventStreamMember = $output.getEventStreamMember();

    const response: HttpResponse = {
      statusCode: 200,
      headers: {
        "content-type": this.getDefaultContentType(),
        "x-amzn-requestid": "1111amzn-requ-stid-uuid-000000001111",
      },
    };

    if (eventStreamMember) {
      const eventStreamSerde = this.getEventStreamSerde(this.serializer, this.deserializer);

      if (output[eventStreamMember]?.[Symbol.asyncIterator]) {
        response.body = await eventStreamSerde.serializeEventStream({
          eventStream: output[eventStreamMember],
          requestSchema: $output,
        });
      } else {
        response.body = {
          async *[Symbol.asyncIterator]() {},
        };
      }
    } else if (!$output.isUnitSchema()) {
      const { serializer } = this;
      serializer.write($output, output);
      setResponseBody(serializer, response);
    }

    if (!response.body) {
      delete response.headers["content-type"];
      response.body = Readable.from("");
    }

    return response;
  }

  public async serializeErrorResponse(errorSchema: StaticErrorSchema, output: any): Promise<HttpResponse> {
    const $error = NormalizedSchema.of(errorSchema);
    const httpError = $error.getMergedTraits().httpError;
    const status = Number(typeof httpError === "number" ? httpError : 400);

    const response: HttpResponse = {
      statusCode: status,
      headers: {
        "content-type": this.getDefaultContentType(),
      },
    };

    const awsQueryError = $error.getMergedTraits().awsQueryError as
      | { code: string; httpResponseCode?: number }
      | undefined;

    if (awsQueryError) {
      const { code, httpResponseCode } = awsQueryError;
      response.statusCode = httpResponseCode ?? response.statusCode;
      response.headers["x-amzn-query-error"] = `${code};Sender`;
    }

    const { serializer } = this;

    if (this.getDefaultContentType().match(/json|cbor/)) {
      Object.assign(output, {
        __type: $error.getName(true),
      });
    }
    const [$, o] = this.errorTransform($error, output);
    serializer.write($, o);
    setResponseBody(serializer, response);

    return response;
  }

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    return [$error, output];
  }
}
