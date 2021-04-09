# @aws-sdk/credential-provider-web-identity

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/credential-provider-web-identity/latest.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-web-identity)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/credential-provider-web-identity.svg)](https://www.npmjs.com/package/@aws-sdk/credential-provider-web-identity)

## AWS Credential Provider for Node.js - AssumeRole

This module includes functions which get credentials by calling STS assumeRoleWithWebIdentity API.

## fromWebToken

The function `fromWebToken` returns `CredentialProvider` that get credentials calling sts:assumeRoleWithWebIdentity
API via `roleAssumerWithWebIdentity`.

### Supported configuration

This configuration supports all the input parameters from
[sts:AssumeWithWebIdentity](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sts/modules/assumerolewithwebidentityrequest.html) API. The following options are supported:

- `roleArn` - The Amazon Resource Name (ARN) of the role that the caller is assuming.
- `webIdentityToken` - The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider.
- `roleSessionName` - An identifier for the assumed role session.
- `providerId` - The fully qualified host component of the domain name of the identity provider. Do not specify this
  value for OpenID Connect ID tokens.
- `policyArns` - The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session
  policies.
- `policy` - An IAM policy in JSON format that you want to use as an inline session policy.
- `durationSeconds` - The duration, in seconds, of the role session. Default to 3600.
- `roleAssumerWithWebIdentity` - A function that assumes a role with web identity
  and returns a promise fulfilled with credentials for the assumed role. You may call
  `sts:assumeRoleWithWebIdentity` API within this function.

### Examples

You can directly configure individual identity providers to access AWS resources using web identity federation. AWS
currently supports authenticating users using web identity federation through several identity providers:

- [Login with Amazon](https://login.amazon.com/)

- [Facebook Login](https://developers.facebook.com/docs/facebook-login/web/)

- [Google Sign-in](https://developers.google.com/identity/)

You must first register your application with the providers that your application supports. Next, create an IAM role and
set up permissions for it. The IAM role you create is then used to grant the permissions you configured for it through
the respective identity provider. For example, you can set up a role that allows users who logged in through Facebook
to have read access to a specific Amazon S3 bucket you control.

After you have both an IAM role with configured privileges and an application registered with your chosen identity
providers, you can set up the SDK to get credentials for the IAM role using helper code, as follows:

```javascript
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromWebToken } from "@aws-sdk/credential-provider-web-identity";

const dynamodb = new DynamoDBClient({
  region,
  credentials: fromWebToken({
    roleArn: 'arn:aws:iam::<AWS_ACCOUNT_ID>/:role/<WEB_IDENTITY_ROLE_NAME>',
    providerId: 'graph.facebook.com|www.amazon.com', // this is null for Google
    webIdentityToken: ACCESS_TOKEN // from OpenID token identity provider
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(),
  })
});

```

The value in the ProviderId parameter depends on the specified identity provider. The value in the WebIdentityToken
parameter is the access token retrieved from a successful login with the identity provider. For more information on how
to configure and retrieve access tokens for each identity provider, see the documentation for the identity provider.

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
import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";

const client = new FooClient({
  credentials: fromTokenFile({
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity()
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
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity()
  });
});
```
