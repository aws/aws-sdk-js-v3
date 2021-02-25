# @aws-sdk/credential-provider-sso

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-sso/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-sso)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-sso.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-sso)

## AWS Credential Provider for Node.js - AWS Single Sign-On (SSO)

This module provides a function, `fromSSO` that will create `CredentialProvider`
functions that read from [AWS SDKs and Tools shared configuration and credentials files](https://docs.aws.amazon.com/credref/latest/refdocs/creds-config-files.html)(Profile appears
in the credentials file will be given precedence over the profile found in the
config file). This provider will load the _resolved_ access token on local disk,
and then request temporary AWS credentials. For the guidance over AWS Single
Sign-On service, please refer to [the service document](https://aws.amazon.com/single-sign-on/).

## Supported configuration

You may customize how credentials are resolved by providing an options hash to
the `fromSSO` factory function. The following options are supported:

- `profile` - The configuration profile to use. If not specified, the provider
  will use the value in the `AWS_PROFILE` environment variable or `default` by
  default.
- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or `~/.aws/credentials` by default.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or
  `~/.aws/config` by default.
- `ssoClient` - The SSO Client that used to request AWS credentials with the SSO
  access token. If not specified, a default SSO client will be created with the
  region specified in the profile `sso_region` entry.

## SSO Login with AWS CLI

This credential provider relies on [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#sso-configure-profile)
to login to an AWS SSO session. Here's a brief walk-through:

1. Create a new AWS SSO enabled profile using AWS CLI. It will ask you to login
   to your AWS SSO account and prompt for the name of the profile:

```console
$ aws configure sso
...
...
CLI profile name [123456789011_ReadOnly]: my-sso-profile<ENTER>
```

2. Configure you SDK client with the SSO credential provider:

```javascript
import { fromSSO } from "@aws-sdk/credential-provider-sso"; // ES6 example
// const { fromSSO } = require(@aws-sdk/credential-provider-sso") // CommonJS example
//...
const client = new FooClient({ credentials: fromSSO({ profile: "my-sso-profile" });
```

Alternatively, the SSO credential provider is supported in default Node.js credential
provider:

```javascript
import { defaultProvider } from "@aws-sdk/credential-provider-node"; // ES6 example
// const { defaultProvider } = require(@aws-sdk/credential-provider-node") // CommonJS example
//...
const client = new FooClient({ credentials: defaultProvider({ profile: "my-sso-profile" });
```

3. To log out from the current SSO session, use AWS CLI:

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
