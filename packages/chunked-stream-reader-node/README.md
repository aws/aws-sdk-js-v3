# @aws-sdk/chunked-stream-reader-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/chunked-stream-reader-node/beta.svg)](https://www.npmjs.com/package/@aws-sdk/chunked-stream-reader-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/chunked-stream-reader-node.svg)](https://www.npmjs.com/package/@aws-sdk/chunked-stream-reader-node)

Exports a streamReader function that accepts a readable stream, a function to call on each chunk, and a chunk size in bytes to buffer interally before calling the supplied function.

This package is meant for the AWS SDK for JavaScript to enable reading a stream with consistent chunk sizes.

> An internal package

## Usage

You probably shouldn't, at least directly.
