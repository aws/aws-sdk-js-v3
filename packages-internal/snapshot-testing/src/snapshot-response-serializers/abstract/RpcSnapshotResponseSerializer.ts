import { NormalizedSchema } from "@smithy/core/schema";
import { SnapshotProtocol } from "@smithy/snapshot-testing";
import type { $Codec, $ShapeDeserializer, $ShapeSerializer, HttpResponse, StaticOperationSchema } from "@smithy/types";
import { fromUtf8 } from "@smithy/util-utf8";
import { Readable } from "node:stream";

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
      const flushed = serializer.flush();

      if (flushed instanceof Uint8Array) {
        response.body = Readable.from([flushed]);
      } else if (typeof flushed === "string") {
        response.body = Readable.from([fromUtf8(flushed)]);
      }
    }

    if (!response.body) {
      delete response.headers["content-type"];
      response.body = Readable.from("");
    }

    return response;
  }
}
