# @aws-sdk/core

This package provides common or core functionality to the AWS SDK for JavaScript (v3).

You do not need to explicitly install this package, since it will be transitively installed by AWS SDK clients.

## Core Submodules

Core submodules are organized for distribution via the `package.json` `exports` field.

`exports` is supported by default by the latest Node.js, webpack, and esbuild. For react-native, it can be
enabled via instructions found at [reactnative.dev/blog](https://reactnative.dev/blog/2023/06/21/package-exports-support).

Each `index.ts` file corresponding to the pattern `./src/submodules/<MODULE_NAME>/index.ts` will be
published as a separate `dist-cjs` bundled submodule index using the inliner build script.
