# @aws-sdk/credential-provider-assume-role

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-assume-role/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-assume-role)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-assume-role.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-assume-role)

## AWS Credential Provider for Node.js - AssumeRole

This module includes functions which get credentials by calling STS assumeRole\* APIs.

### fromTokenFile

The function `fromTokenFile` returns `CredentialProvider` that reads credentials as follows:

- Reads file location of where the OIDC token is stored from either environment or config file paramters.
- Reads IAM role wanting to be assumed from either environment or config file paramters.
- Reads optional role session name to be used to distinguish sessions from either environment or config file paramters.
  If session name is not defined, it comes up with a role session name.
- Reads OIDC roken from file on disk.
- Calls sts:AssumeRoleWithWebIdentity to get credentials.
- Uses credentials of source_profile to assume the role specified if specified.

| **Environment Variable**    | **Config Variable**     | **Required** | **Description**                                   |
| --------------------------- | ----------------------- | ------------ | ------------------------------------------------- |
| AWS_WEB_IDENTITY_TOKEN_FILE | web_identity_token_file | true         | File location of where the `OIDC` token is stored |
| AWS_IAM_ROLE_ARN            | role_arn                | true         | The IAM role wanting to be assumed                |
| AWS_IAM_ROLE_SESSION_NAME   | role_session_name       | false        | The IAM session name used to distinguish sessions |

#### Supported configuration

The following options are supported:

- `profile` - The configuration profile to use. If not specified, the provider
  will use the value in the `AWS_PROFILE` environment variable or `default` by
  default.
- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or `~/.aws/credentials` by default.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or
  `~/.aws/config` by default.
- `roleAssumer` - A function that assumes a role and returns a promise
  fulfilled with credentials for the assumed role.
- `roleAssumerWithWebIdentity` - A function that assumes a role with web identity
  and returns a promise fulfilled with credentials for the assumed role.
