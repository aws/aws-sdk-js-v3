/**
 * Convert ReadableStream into an async iterable.
 */
export async function* ReadableStreamtoIterable<T>(
  readableStream: ReadableStream
): AsyncIterable<T> {
  const reader = readableStream.getReader();
  let done = false;
  while (!done) {
    const { done: end, value } = await reader.read();
    if (end) {
      done = true;
      break;
    }
    if (value) {
      yield value;
    }
  }
}
