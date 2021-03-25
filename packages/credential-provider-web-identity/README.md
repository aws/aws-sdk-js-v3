# @aws-sdk/credential-provider-web-identity

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-web-identity/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-web-identity)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-web-identity.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-web-identity)

## AWS Credential Provider for Node.js - AssumeRole

This module includes functions which get credentials by calling STS assumeRoleWithWebIdentity API.

## fromTokenFile

The function `fromTokenFile` returns `CredentialProvider` that reads credentials as follows:

- Reads file location of where the OIDC token is stored from either provided option `webIdentityTokenFile` or environment variable `AWS_WEB_IDENTITY_TOKEN_FILE`.
- Reads IAM role wanting to be assumed from either provided option `roleArn` or environment variable `AWS_ROLE_ARN`.
- Reads optional role session name to be used to distinguish sessions from provided option `roleSessionName` or environment variable `AWS_ROLE_SESSION_NAME`.
  If session name is not defined, it comes up with a role session name.
- Reads OIDC token from file on disk.
- Calls sts:AssumeRoleWithWebIdentity via `roleAssumerWithWebIdentity` option to get credentials.

| **Configuration Key** | **Environment Variable**    | **Required** | **Description**                                   |
| --------------------- | --------------------------- | ------------ | ------------------------------------------------- |
| webIdentityTokenFile  | AWS_WEB_IDENTITY_TOKEN_FILE | true         | File location of where the `OIDC` token is stored |
| roleArn               | AWS_IAM_ROLE_ARN            | true         | The IAM role wanting to be assumed                |
| roleSessionName       | AWS_IAM_ROLE_SESSION_NAME   | false        | The IAM session name used to distinguish sessions |

### Supported configuration

The following options are supported:

- `roleAssumerWithWebIdentity` - A function that assumes a role with web identity
  and returns a promise fulfilled with credentials for the assumed role. You may call
  `sts:assumeRoleWithWebIdentity` API within this function.

### Examples

A basic example of using fromTokenFile:

```js
import { STSClient, AssumeRoleWithWebIdentityCommand } from "@aws-sdk/client-sts";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";

const stsClient = new STSClient({});

const roleAssumerWithWebIdentity = async (params) => {
  const { Credentials } = await stsClient.send(
    new AssumeRoleWithWebIdentityCommand(params)
  );
  if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
    throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
  }
  return {
    accessKeyId: Credentials.AccessKeyId,
    secretAccessKey: Credentials.SecretAccessKey,
    sessionToken: Credentials.SessionToken,
    expiration: Credentials.Expiration,
  };
};

const client = new FooClient({
  credentials: fromTokenFile({
    roleAssumerWithWebIdentity
  });
});
```

#### Values in environment variables

The values can be defined in environment variables as follows:

```console
$ node
> Object.fromEntries(Object.entries(process.env).filter(([key, value]) => key.startsWith("AWS_")));
{
  AWS_WEB_IDENTITY_TOKEN_FILE: '/temp/token',
  AWS_ROLE_ARN: 'arn:aws:iam::123456789012:role/example-role-arn'
}
```

#### Values in configuration keys

The values can be defined in configuration keys as follows:

```js
...
const client = new FooClient({
  credentials: fromTokenFile({
    webIdentityTokenFile: "/temp/token",
    roleArn: "arn:aws:iam::123456789012:role/example-role-arn",
    roleAssumerWithWebIdentity
  });
});
```
