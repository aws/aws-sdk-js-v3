# @aws-sdk/credential-provider-ini

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-ini/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-ini)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-ini.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-ini)

## AWS Credential Provider for Node.JS - Shared Configuration Files

This module provides a function, `fromIni` that will create
`CredentialProvider` functions that read from a shared credentials file at
`~/.aws/credentials` and a shared configuration file at `~/.aws/config`. Both
files are expected to be INI formatted with section names corresponding to
profiles. Sections in the credentials file are treated as profile names, whereas
profile sections in the config file must have the format of`[profile profile-name]`,
except for the default profile. Please see the [sample
files](#sample-files) below for examples of well-formed configuration and
credentials files.

Profiles that appear in both files will not be merged, and the version that
appears in the credentials file will be given precedence over the profile found
in the config file.

## Supported configuration

You may customize how credentials are resolved by providing an options hash to
the `fromIni` factory function. The following options are supported:

- `profile` - The configuration profile to use. If not specified, the provider
  will use the value in the `AWS_PROFILE` environment variable or a default of
  `default`.
- `filepath` - The path to the shared credentials file. If not specified, the
  provider will use the value in the `AWS_SHARED_CREDENTIALS_FILE` environment
  variable or a default of `~/.aws/credentials`.
- `configFilepath` - The path to the shared config file. If not specified, the
  provider will use the value in the `AWS_CONFIG_FILE` environment variable or a
  default of `~/.aws/config`.
- `mfaCodeProvider` - A function that returns a a promise fulfilled with an
  MFA token code for the provided MFA Serial code. If a profile requires an MFA
  code and `mfaCodeProvider` is not a valid function, the credential provider
  promise will be rejected.
- `roleAssumer` - A function that assumes a role and returns a promise
  fulfilled with credentials for the assumed role. You may call `sts:assumeRole`
  API within this function.
- `roleAssumerWithWebIdentity` - A function that assumes a role with web identity
  and returns a promise fulfilled with credentials for the assumed role. You may call
  `sts:assumeRoleWithWebIdentity` API within this function.

## Sample files

### `~/.aws/credentials`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2

[prod]
aws_access_key_id=foo3
aws_secret_access_key=bar3
```

### `~/.aws/config`

```ini
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[profile dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2

[profile prod]
aws_access_key_id=foo3
aws_secret_access_key=bar3

[profile "testing host"]
aws_access_key_id=foo4
aws_secret_access_key=bar4
```

### profile with source profile

```ini
[second]
aws_access_key_id=foo
aws_secret_access_key=bar

[first]
source_profile=second
role_arn=arn:aws:iam::123456789012:role/example-role-arn
```

### profile with source provider

You can supply `credential_source` options to tell the SDK where to source
credentials for the call to `AssumeRole`. The supported credential providers are
listed bellow:

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = Ec2InstanceMetadata
```

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = Environment
```

```ini
[default]
role_arn=arn:aws:iam::123456789012:role/example-role-arn
credential_source = EcsContainer
```

### profile with web_identity_token_file

```ini
[default]
web_identity_token_file=/temp/token
role_arn=arn:aws:iam::123456789012:role/example-role-arn
```

You can specify another profile(`second`) whose credentials are used to assume
the role by the `role_arn` setting in this profile(`first`).

```ini
[second]
web_identity_token_file=/temp/token
role_arn=arn:aws:iam::123456789012:role/example-role-2

[first]
source_profile=second
role_arn=arn:aws:iam::123456789012:role/example-role
```

### profile with sso credentials

Please refer the the [`sso credential provider package`](https://www.npmjs.com/package/@aws-sdk/credential-provider-sso)
for how to configure the SSO credentials.

```ini
[default]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = SampleRole
sso_start_url = https://d-abc123.awsapps.com/start
```

You can specify another profile(`second`) whose credentials derived from SSO
are used to assume the role by the `role_arn` setting in this profile(`first`).

```ini
[second]
sso_account_id = 012345678901
sso_region = us-east-1
sso_role_name = example-role-2
sso_start_url = https://d-abc123.awsapps.com/start

[first]
source_profile=second
role_arn=arn:aws:iam::123456789012:role/example-role
```
