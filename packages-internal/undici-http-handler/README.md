# @aws-sdk/undici-http-handler

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/undici-http-handler/latest.svg)](https://www.npmjs.com/package/@aws-sdk/undici-http-handler)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/undici-http-handler.svg)](https://www.npmjs.com/package/@aws-sdk/undici-http-handler)

This package re-exports [`@smithy/undici-http-handler`][] which is a smithy-compatible HTTP handler backed by
modern, high performance Node.js [undici][] client.

## When to use this package

If your project uses AWS SDK for JavaScript v3 clients (packages under `@aws-sdk/*`), you can
use this package to keep your request handler dependency within the same `@aws-sdk` scope.

Functionally, this package is identical to [`@smithy/undici-http-handler`][] — it simply
re-exports it. Use whichever scope fits your project's dependency conventions.

[`@smithy/undici-http-handler`]: https://www.npmjs.com/package/@smithy/undici-http-handler
[undici]: https://undici.nodejs.org/
