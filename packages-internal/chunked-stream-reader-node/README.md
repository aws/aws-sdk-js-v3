# @aws-sdk/chunked-stream-reader-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/chunked-stream-reader-node/latest.svg)](https://www.npmjs.com/package/@aws-sdk/chunked-stream-reader-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/chunked-stream-reader-node.svg)](https://www.npmjs.com/package/@aws-sdk/chunked-stream-reader-node)

### :warning: Internal API :warning:

> This is an internal package.
> That means this is used as a dependency for other, public packages, but
> should not be taken directly as a dependency in your application's `package.json`.

> If you are updating the version of this package, for example to bring in a
> bug-fix, you should do so by updating your application lockfile with
> e.g. `npm up @scope/package` or equivalent command in another
> package manager, rather than taking a direct dependency.

---

Exports a streamReader function that accepts a readable stream, a function to call on each chunk, and a chunk size in bytes to buffer internally before calling the supplied function.

This package is meant for the AWS SDK for JavaScript to enable reading a stream with consistent chunk sizes.
