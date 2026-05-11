# Package Consolidation - @aws-sdk Non-Client Package Usage

Similar to what was done
in https://github.com/smithy-lang/smithy-typescript/blob/main/packages/core/planning/consolidation.md,
we are planning to consolidate down the overall number of unique NPM packages needed to run the AWS SDK core.

As an initial assessment, the following tables show what packages (non-clients) share the same subset of
client dependents. This creates a natural grouping guide.

This analysis was performed on the package graph as of
2026-05-11 [v3.1045.0](https://github.com/aws/aws-sdk-js-v3/releases/tag/v3.1045.0).

## Group A (Core) — All 425 clients

These can be moved into `core`, except `types`, which will remain standalone.

| Package                                 | Description                                                    |
| --------------------------------------- | -------------------------------------------------------------- |
| @aws-sdk/core                           | Core functions & classes shared by multiple AWS SDK clients    |
| @aws-sdk/types                          | Shared TypeScript types for the AWS SDK                        |
| @aws-sdk/middleware-host-header         | Middleware that sets the Host header on requests               |
| @aws-sdk/middleware-logger              | Middleware that logs successful/failed API calls               |
| @aws-sdk/middleware-recursion-detection | Middleware that detects and marks recursive Lambda invocations |
| @aws-sdk/middleware-user-agent          | Middleware that appends SDK user-agent string to requests      |
| @aws-sdk/util-user-agent-node           | Constructs the user-agent string in Node.js environments       |
| @aws-sdk/util-user-agent-browser        | Constructs the user-agent string in browser environments       |
| @aws-sdk/region-config-resolver         | Resolves region configuration from environment/config files    |
| @aws-sdk/util-endpoints                 | Utilities for endpoint resolution (rules engine)               |
| @aws-sdk/xml-builder                    | XML serialization utilities for AWS request/response bodies    |

## Group B (Nested-Clients) — 424 clients (all except client-sts and client-sso-oidc)

Unexpectedly, middleware-sdk-s3 is pulled into nested-clients due to STS' recently taking a dependency
on signature v4a, which brings sigv4-multi-region and then middleware-sdk-s3.

We should refactor the code so that middleware-sdk-s3 is only used by the S3 service's client group.

Move util-arn-parser into core.

| Package                            | Description                                                         |
| ---------------------------------- | ------------------------------------------------------------------- |
| @aws-sdk/nested-clients            | Lightweight STS/SSO clients used internally by credential providers |
| @aws-sdk/middleware-sdk-s3         | S3-specific middleware (pulled transitively via nested-clients)     |
| @aws-sdk/signature-v4-multi-region | SigV4a signing for multi-region access points                       |
| @aws-sdk/token-providers           | Token providers for bearer-token auth (SSO)                         |
| @aws-sdk/util-arn-parser           | Parses Amazon Resource Names into components                        |

## Group C (Credential Providers) — 423 clients (all except client-sts, client-sso-oidc, client-sso)

We should move all credential providers and token-providers into a single internal package.
Keep in mind however, it should not be `@aws-sdk/credential-providers` because this is the external-facing package.

| Package                                       | Description                                                     |
| --------------------------------------------- | --------------------------------------------------------------- |
| @aws-sdk/credential-provider-node             | Default credential chain for Node.js (aggregates all providers) |
| @aws-sdk/credential-provider-ini              | Reads credentials from ~/.aws/credentials and ~/.aws/config     |
| @aws-sdk/credential-provider-env              | Reads credentials from environment variables                    |
| @aws-sdk/credential-provider-http             | Fetches credentials from HTTP endpoints (ECS/container)         |
| @aws-sdk/credential-provider-login            | Reads credentials from `aws login` cached tokens                |
| @aws-sdk/credential-provider-process          | Runs credential_process commands from AWS config                |
| @aws-sdk/credential-provider-sso              | Exchanges SSO login tokens for temporary credentials            |
| @aws-sdk/credential-provider-web-identity     | Calls STS AssumeRoleWithWebIdentity for credentials             |
| @aws-sdk/credential-provider-cognito-identity | Browser credential provider via Cognito                         |

## Group D (Event Streams) — 8 clients (bedrock-runtime, connecthealth, lex-runtime-v2, polly, qbusiness, rekognitionstreaming, sagemaker-runtime-http2, transcribe-streaming)

Consolidate into `@aws-sdk/middleware-eventstream`?

| Package                           | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| @aws-sdk/eventstream-handler-node | Node.js handler for event-stream (bidirectional streaming) |
| @aws-sdk/middleware-eventstream   | Middleware for event-stream protocol support               |

## Group E — 7 clients (bedrock-runtime, docdb, ec2, neptune, rds, rekognitionstreaming, transcribe-streaming)

Move util-format-url into core.

| Package                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| @aws-sdk/util-format-url | Formats presigned URL objects into URL strings |

## Group F (Endpoint Discovery) — 3 clients (dynamodb, timestream-query, timestream-write)

Consolidate into @aws-sdk/middleware-endpoint-discovery.

| Package                                | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| @aws-sdk/endpoint-cache                | LRU cache for discovered endpoints                       |
| @aws-sdk/middleware-endpoint-discovery | Middleware for endpoint discovery (DynamoDB, Timestream) |

## Group G (RDS) — 3 clients (docdb, neptune, rds)

Leave as-is.

| Package                     | Description                                     |
| --------------------------- | ----------------------------------------------- |
| @aws-sdk/middleware-sdk-rds | RDS-specific middleware (presigned auth tokens) |

## Group H (Event Streams for Browser) — 3 clients (bedrock-runtime, rekognitionstreaming, transcribe-streaming)

Leave as-is.

| Package                       | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| @aws-sdk/middleware-websocket | WebSocket transport middleware (Transcribe streaming) |

## Group I (CRT)

Leave as-is.

| Package                   | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| @aws-sdk/crt-loader       | Loads the AWS Common Runtime native bindings         |
| @aws-sdk/crc64-nvme-crt   | Native CRC64 (optional perf optimization)            |
| @aws-sdk/signature-v4-crt | SigV4/SigV4a signing via AWS Common Runtime (native) |

## Group S3

Consolidate into S3 group (middleware-sdk-s3). After removing middleware-sdk-s3 from group B.
Consolidate into S3 group (middleware-sdk-s3).
However, move checksums related code into `@aws-sdk/checksums` (new package).

| Package                                 | Description                                                 |
| --------------------------------------- | ----------------------------------------------------------- |
| @aws-sdk/middleware-bucket-endpoint     | Resolves S3 bucket-style endpoints (path vs virtual-hosted) |
| @aws-sdk/middleware-sdk-s3-control      | s3-control                                                  |
| @aws-sdk/middleware-expect-continue     | Adds Expect: 100-continue header for large S3 uploads       |
| @aws-sdk/middleware-location-constraint | Sets S3 LocationConstraint on CreateBucket                  |
| @aws-sdk/middleware-ssec                | Handles S3 server-side encryption with customer keys        |

## Group Checksums

| Package                                | Description                                                         |
| -------------------------------------- | ------------------------------------------------------------------- |
| @aws-sdk/crc64-nvme                    | Pure JS implementation of CRC64-NVME checksum                       |
| @aws-sdk/middleware-flexible-checksums | Computes/validates request/response checksums (CRC32, SHA256, etc.) |

## Group K (Glacier) — 1 client (glacier)

Consolidate into middleware-sdk-glacier.

| Package                             | Description                                       |
| ----------------------------------- | ------------------------------------------------- |
| @aws-sdk/body-checksum-browser      | Computes request body checksums in browser        |
| @aws-sdk/body-checksum-node         | Computes request body checksums in Node.js        |
| @aws-sdk/chunked-stream-reader-node | Reads Node.js streams in fixed-size chunks        |
| @aws-sdk/middleware-sdk-glacier     | Glacier-specific middleware (tree-hash checksums) |
| @aws-sdk/sha256-tree-hash           | Computes SHA-256 tree hash (Glacier)              |

## Singletons — 1 client each, unique client set

Leave as-is, but move @aws-sdk/middleware-sdk-s3-control into S3 group.

| Package                                      | Client               | Description                                                  |
| -------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| @aws-sdk/dynamodb-codec                      | dynamodb             | Encodes/decodes DynamoDB AttributeValue format               |
| @aws-sdk/middleware-sdk-api-gateway          | api-gateway          | API Gateway-specific middleware (accepts header)             |
| @aws-sdk/middleware-sdk-ec2                  | ec2                  | EC2-specific middleware (copy-encrypted-snapshot presigning) |
| @aws-sdk/middleware-sdk-machinelearning      | machine-learning     | MachineLearning-specific middleware (predict endpoint)       |
| @aws-sdk/middleware-sdk-route53              | route-53             | Route53-specific middleware (trims hosted zone ID prefix)    |
| @aws-sdk/middleware-sdk-sqs                  | sqs                  | SQS-specific middleware (MD5 checksum validation)            |
| @aws-sdk/middleware-sdk-transcribe-streaming | transcribe-streaming | Transcribe Streaming-specific middleware                     |

## Packages unused by any client

These `@aws-sdk/*` packages are not in any client's transitive dependency closure.

### User-facing utilities (imported directly by users, not client deps)

| Package                          | Description                       |
| -------------------------------- | --------------------------------- |
| @aws-sdk/credential-providers    | Aggregated credential provider    |
| @aws-sdk/lib-dynamodb            | DynamoDB document client          |
| @aws-sdk/lib-storage             | S3 multipart upload helper        |
| @aws-sdk/s3-request-presigner    | S3 presigned URLs                 |
| @aws-sdk/s3-presigned-post       | S3 presigned POST                 |
| @aws-sdk/rds-signer              | RDS IAM auth tokens               |
| @aws-sdk/dsql-signer             | DSQL auth tokens                  |
| @aws-sdk/polly-request-presigner | Polly presigned URLs              |
| @aws-sdk/cloudfront-signer       | CloudFront signed URLs/cookies    |
| @aws-sdk/util-dynamodb           | DynamoDB marshalling utilities    |
| @aws-sdk/xhr-http-handler        | XMLHttpRequest-based HTTP handler |
| @aws-sdk/ec2-metadata-service    | EC2 instance metadata client      |
| @aws-sdk/config                  | Shared config utilities           |
| @aws-sdk/signature-v4a           | JS SigV4a implementation (opt-in) |

### Legacy

| Package                      | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| @aws-sdk/middleware-signing  | Deprecated, replaced by @smithy/core signing          |
| @aws-sdk/middleware-token    | Bearer token middleware                               |
| @aws-sdk/middleware-api-key  | API key auth middleware                               |
| @aws-sdk/protocol-http       | Re-export of @smithy/protocol-http                    |
| @aws-sdk/smithy-client       | Re-export of @smithy/smithy-client                    |
| @aws-sdk/util-create-request | Deprecated presign utility                            |
| @aws-sdk/middleware-sdk-sts  | STS-specific middleware (inlined into nested-clients) |

### Unreleased

| Package                            | Description               |
| ---------------------------------- | ------------------------- |
| @aws-sdk/middleware-http-debug-log | Debug logging, unreleased |
| @aws-sdk/util-dns                  | SRA - never released      |
