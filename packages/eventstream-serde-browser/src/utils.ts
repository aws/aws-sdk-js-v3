/**
 * Convert ReadableStream into an async iterable.
 * Reference: https://jakearchibald.com/2017/async-iterators-and-generators/#making-streams-iterate
 */
export async function* ReadableStreamtoIterable<T>(
  readableStream: ReadableStream<T>
): AsyncIterable<T> {
  const reader = readableStream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value as T;
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Convert async iterable to a ReadableStream.
 */
export function iterableToReadableStream<T>(
  asyncIterable: AsyncIterable<T>
): ReadableStream<T> {
  const iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    pull(constroller) {
      return iterator.next().then(({ done, value }) => {
        if (done) {
          return constroller.close();
        }
        constroller.enqueue(value);
      });
    }
  });
}
