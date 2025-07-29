# @aws-sdk/dsql-signer

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/dsql-signer/latest.svg)](https://www.npmjs.com/package/@aws-sdk/dsql-signer)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/dsql-signer.svg)](https://www.npmjs.com/package/@aws-sdk/dsql-signer)

## Description

This package provides utilities for interacting with Dsql.

## Installation

```console
npm install @aws-sdk/dsql-signer
```

## Getting Started

### Import

ES6 import

```js
import { DsqlSigner } from "@aws-sdk/dsql-signer";
```

Or CommonJS import

```js
const { DsqlSigner } = require("@aws-sdk/dsql-signer");
```

### Generate Authentication Token for Dsql IAM Authentication

```js
import { Hash } from "@smithy/hash-node";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";

const signer = new DsqlSigner({
  /**
   * Required: The hostname of the database to connect to.
   */
  hostname: "foo0bar1baz2quux3quux4.dsql.us-east-1.on.aws",

  /**
   * Optional: The region the database is located in. Uses the region inferred from the runtime if omitted.
   */
  region: "us-east-1",

  /**
   * Optional: The SHA256 hasher constructor to sign the request.
   */
  sha256: Hash.bind(null, "sha256"),

  /**
   * Optional: The amount of time in seconds the generated token is valid
   */
  expiresIn: 3600,

  /**
   * Optional: The AWS credentials to sign requests with. Uses the default credential provider chain if not specified.
   * You can use any credential provider from https://www.npmjs.com/package/@aws-sdk/credential-providers,
   * or provide a credentials object.
   */
  credentials: fromNodeProviderChain(),
});

// Creates auth token.
const authToken = await signer.getDbConnectAuthToken();

// Creates admin auth token.
const adminAuthToken = await signer.getDbConnectAdminAuthToken();

// Use the token as the password for connecting to your Dsql instance.
```
