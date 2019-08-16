# @aws-sdk/client-workmail-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-workmail-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-workmail-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-workmail-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-workmail-browser)

## Description

<p>Amazon WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-workmail-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`WorkMailClient`) and the commands you need, for example `AssociateDelegateToResourceCommand`:

```javascript
//JavaScript
const {
  WorkMailClient
} = require("@aws-sdk/client-workmail-browser/WorkMailClient");
const {
  AssociateDelegateToResourceCommand
} = require("@aws-sdk/client-workmail-browser/commands/AssociateDelegateToResourceCommand");
```

```javascript
//TypeScript
import { WorkMailClient } from "@aws-sdk/client-workmail-browser/WorkMailClient";
import { AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail-browser/commands/AssociateDelegateToResourceCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const workMail = new WorkMailClient({region: 'region'});
//clients can be shared by different commands
const params = {
  OrganizationId: /**a string value*/,
  ResourceId: /**a string value*/,
  EntityId: /**a string value*/,
};
const associateDelegateToResourceCommand = new AssociateDelegateToResourceCommand(params);
workMail.send(associateDelegateToResourceCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await workMail.send(associateDelegateToResourceCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
workMail.send(associateDelegateToResourceCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-workmail-browser/WorkMail";
const workMail = new AWS.WorkMail({ region: "region" });
workMail.associateDelegateToResource(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await workMail.send(associateDelegateToResourceCommand);
  // do something
} catch (error) {
  const metadata = error.$metadata;
  console.log(
    `requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}`
  );
  /*
The keys within exceptions are also parsed. You can access them by specifying exception names:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`
- Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-workmail-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
