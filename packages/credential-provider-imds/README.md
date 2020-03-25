# AWS Credential Provider for Node.JS - Instance and Container Metadata

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-imds/beta.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-imds)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-imds.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-imds)

This module provides two `CredentialProvider` factory functions,
`fromContainerMetadata` and `fromInstanceMetadata`, that will create
`CredentialProvider` functions that read from the ECS container metadata service
and the EC2 instance metadata service, respectively.

A `CredentialProvider` function created with `fromContainerMetadata` will return
a promise that will resolve with credentials for the IAM role associated with
containers in an Amazon ECS task. Please see [IAM Roles for Tasks](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)
for more information on using IAM roles with Amazon ECS.

A `CredentialProvider` function created with `fromInstanceMetadata` will return
a promise that will resolve with credentials for the IAM role associated with
an EC2 instance. Please see [IAM Roles for Amazon EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
for more information on using IAM roles with Amazon EC2.

## Supported configuration

You may customize how credentials are resolved by providing an options hash to
the `fromContainerMetadata` and `fromInstanceMetadata` factory functions. The
following options are supported:

- `timeout` - The connection timeout (in milliseconds) to apply to any remote
  requests. If not specified, a default value of `1000` (one second) is used.
- `maxRetries` - The maximum number of times any HTTP connections should be
  retried. If not specified, a default value of `0` will be used.

Additionally, `fromInstanceMetadata` supports the following options:

- `profile` - The configuration profile to use. If not specified, the provider
  will use default profile name associated with the EC2 instance as reported by
  the Instance Metadata Service.
