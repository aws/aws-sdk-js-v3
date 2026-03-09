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
export abstract class HttpBindingSnapshotResponseSerializer extends SnapshotProtocol {
  protected abstract codec: $Codec<any, any> | null;
  protected abstract serializer: $ShapeSerializer<any>;
  protected abstract deserializer: $ShapeDeserializer<any>;

  public abstract getShapeId(): string;

  public abstract getDefaultContentType(): string;

  public async serializeResponse(operationSchema: StaticOperationSchema, output: any): Promise<HttpResponse> {
    const $output = NormalizedSchema.of(operationSchema[5]);
    const eventStreamMember = $output.getEventStreamMember();
    const { serializer } = this;

    const response: HttpResponse = {
      statusCode: 200,
      headers: {
        "content-type": this.getDefaultContentType(),
        "x-amzn-requestid": "1111amzn-requ-stid-uuid-000000001111",
      },
    };

    let payloadBinding: any = output;
    let $payload: NormalizedSchema = $output;

    for (const [member, $] of $output.structIterator()) {
      const traits = $.getMergedTraits();
      if (traits.httpResponseCode) {
        // generated number is not an appropriate response code, so we skip this.
        // response.statusCode = Number(output[member] ?? 200);
        delete output[member];
      } else if (traits.httpHeader) {
        if (output[member] != null) {
          serializer.write($, output[member]);
          response.headers[traits.httpHeader] = serializer.flush();
        }

        delete output[member];
      } else if (traits.httpPayload) {
        payloadBinding = output[member];
        $payload = $;
      }
    }

    if (eventStreamMember) {
      const eventStreamSerde = this.getEventStreamSerde(serializer, this.deserializer);

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
    } else if (payloadBinding && !$payload.isUnitSchema()) {
      if ($payload.isBlobSchema()) {
        response.body = payloadBinding ?? Readable.from(payloadBinding);
      } else {
        serializer.write($payload, payloadBinding);
        setResponseBody(serializer, response);
      }
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

    const { serializer } = this;

    let payloadBinding: any = output;
    let $payload: NormalizedSchema = $error;

    for (const [member, $] of $error.structIterator()) {
      const traits = $.getMergedTraits();
      if (traits.httpHeader) {
        if (output[member] != null) {
          serializer.write($, output[member]);
          response.headers[traits.httpHeader] = serializer.flush();
        }
        delete output[member];
      } else if (traits.httpPayload) {
        payloadBinding = output[member];
        $payload = $;
      }
    }

    const [$, o] = this.errorTransform($payload, payloadBinding);
    serializer.write($, o);
    setResponseBody(serializer, response);

    return response;
  }

  protected errorTransform($error: NormalizedSchema, output: any): [NormalizedSchema, any] {
    return [$error, output];
  }
}
