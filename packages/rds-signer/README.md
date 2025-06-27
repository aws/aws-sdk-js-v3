# @aws-sdk/rds-signer

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/rds-signer/latest.svg)](https://www.npmjs.com/package/@aws-sdk/rds-signer)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/rds-signer.svg)](https://www.npmjs.com/package/@aws-sdk/rds-signer)

## Description

This package provides utilities for interacting with RDS.

## Installation

```console
npm install @aws-sdk/rds-signer
```

## Getting Started

### Import

ES6 import

```js
import { Signer } from "@aws-sdk/rds-signer";
```

Or CommonJS import

```js
const { Signer } = require("@aws-sdk/rds-signer");
```

### Generate Authentication Token for RDS IAM Authentication

```js
const signer = new Signer({
  /**
   * Required. The hostname of the database to connect to.
   */
  hostname: "db.us-east-1.rds.amazonaws.com",
  /**
   * Required. The port number the database is listening on.
   */
  port: 8000,
  /**
   * Required. The username to login as.
   */
  username: "user1",
  /**
   * Optional. The AWS credentials to sign requests with. Uses the default credential provider chain if not specified.
   */
  credentials: fromNodeCredentialProvider(),
  /**
   * Optional. The region the database is located in. Uses the region inferred from the runtime if omitted.
   */
  region: "us-east-1",
  /**
   * Optional. The SHA256 hasher constructor to sign the request.
   */
  sha256: HashCtor,
});

const token = await signer.getAuthToken();
// Use this token as the password for connecting to your RDS instance
```

For more details and examples, refer to the following resources. Usage is similar across DB engines.

- [Connecting to your DB instance using IAM authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Connecting.html)
- [IAM database authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html)
- [Using IAM authentication to connect with pgAdmin Amazon Aurora PostgreSQL or Amazon RDS for PostgreSQL](https://aws.amazon.com/blogs/database/using-iam-authentication-to-connect-with-pgadmin-amazon-aurora-postgresql-or-amazon-rds-for-postgresql/)
- [Use IAM authentication to connect with SQL Workbench/J to Amazon Aurora MySQL or Amazon RDS for MySQL](https://aws.amazon.com/blogs/database/use-iam-authentication-to-connect-with-sql-workbenchj-to-amazon-aurora-mysql-or-amazon-rds-for-mysql/)
- [AWS CLI v2 rds generate-db-auth-token Documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/generate-db-auth-token.html)
