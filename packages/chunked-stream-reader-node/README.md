# chunked-stream-reader-node

Exports a streamReader function that accepts a readable stream, a function to call on each chunk, and a chunk size in bytes to buffer interally before calling the supplied function.

This package is meant for the AWS SDK for JavaScript to enable reading a stream with consistent chunk sizes.