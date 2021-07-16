# @aws-sdk/credential-provider-sso

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-sso/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-sso)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-sso.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-sso)

## AWS Credential Provider for Node.js - AWS Single Sign-On (SSO)

This module provides a function, `fromSSO`, that creates
`CredentialProvider` functions that read from the
_resolved_ access token from local disk then requests temporary AWS
credentials. For guidance on the AWS Single Sign-On service, please
refer to [AWS's Single Sign-On documentation](https://aws.amazon.com/single-sign-on/).

You can create the `CredentialProvider` functions using the inline SSO
parameters(`ssoStartUrl`, `ssoAccountId`, `ssoRegion`, `ssoRoleName`) or load
them from [AWS SDKs and Tools shared configuration and credentials files](https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html).
Profiles in the `credentials` file are given precedence over
profiles in the `config` file.

This credential provider is intended for use with the AWS SDK for Node.js.

This credential provider **ONLY** supports profiles using the SSO credential. If
you have a profile that assumes a role which derived from the SSO credential,
you should use the `@aws-sdk/credential-provider-ini`, or
`@aws-sdk/credential-provider-node` package.

## Supported configuration

You may customize how credentials are resolved by providing an options hash to
the `fromSSO` factory function. The following options are supported:

- `ssoStartUrl`: The URL to the AWS SSO service. Required if any of the `sso*`
  options(except for `ssoClient`) is provided.
- `ssoAccountId`: The ID of the AWS account to use for temporary credentials.
  Required if any of the `sso*` options(except for `ssoClient`) is provided.
- `ssoRegion`: The AWS region to use for temporary credentials. Required if any
  of the `sso*` options(except for `ssoClient`) is provided.
- `ssoRoleName`: The name of the AWS role to assume. Required if any of the
  `sso*` options(except for `ssoClient`) is provided.
- `profile` - The configuration profile to use. If not specified, the provider
  will use the value in the `AWS_PROFILE` environment variable or `default` by
  default.
- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or `~/.aws/credentials` by default.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or
  `~/.aws/config` by default.
- `ssoClient` - The SSO Client used to request AWS credentials with the SSO
  access token. If not specified, a default SSO client will be created with the
  region specified in the profile `sso_region` entry.

## SSO Login with the AWS CLI

This credential provider relies on the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#sso-configure-profile)
to log into an AWS SSO session. Here's a brief walk-through:

1. Create a new AWS SSO enabled profile using the AWS CLI. It will ask you to login
   to your AWS SSO account and prompt for the name of the profile:

```console
$ aws configure sso
...
...
CLI profile name [123456789011_ReadOnly]: my-sso-profile<ENTER>
```

2. Configure your SDK client with the SSO credential provider:

```javascript
import { fromSSO } from "@aws-sdk/credential-provider-sso"; // ES6 example
// const { fromSSO } = require(@aws-sdk/credential-provider-sso") // CommonJS example
//...
const client = new FooClient({ credentials: fromSSO({ profile: "my-sso-profile" });
```

Alternatively, the SSO credential provider is supported as a default
Node.js credential provider:

```javascript
import { defaultProvider } from "@aws-sdk/credential-provider-node"; // ES6 example
// const { defaultProvider } = require(@aws-sdk/credential-provider-node") // CommonJS example
//...
const client = new FooClient({ credentials: defaultProvider({ profile: "my-sso-profile" });
```

3. To log out from the current SSO session, use the AWS CLI:

```console
$ aws sso logout
Successfully signed out of all SSO profiles.
```

## Sample files

This credential provider is only applicable if the profile specified in shared
configuration and credentials files contain ALL of the following entries:

### `~/.aws/credentials`

```ini
[sample-profile]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = SampleRole
sso_start_url = https://d-abc123.awsapps.com/start
```

### `~/.aws/config`

```ini
[profile sample-profile]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = SampleRole
sso_start_url = https://d-abc123.awsapps.com/start
```
