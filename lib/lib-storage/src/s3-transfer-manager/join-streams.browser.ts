import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { isBlob, isReadableStream, sdkStreamMixin } from "@smithy/util-stream";

// check all types. needs to join nodejs and browser together
export function joinStreams(streams: StreamingBlobPayloadOutputTypes[]): StreamingBlobPayloadOutputTypes {
  console.log("Is Readable Stream: ");
  console.log(isReadableStream(streams[0]));

  if (streams.length === 1) {
    return streams[0];
  } else if (isReadableStream(streams[0]) || isBlob(streams[0])) {
    const newReadableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of iterateStreams(streams)) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    });
    return sdkStreamMixin(newReadableStream);
  } else {
    throw new Error("Unknown stream type");
  }
}

export async function* iterateStreams(
  streams: StreamingBlobPayloadOutputTypes[]
): AsyncIterable<StreamingBlobPayloadOutputTypes, void, void> {
  for (const stream of streams) {
    if (isReadableStream(stream)) {
      const reader = (stream as ReadableStream).getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          yield value;
        }
      } finally {
        reader.releaseLock();
      }
    }
  }
}
