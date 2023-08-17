<!-- generated file, do not edit directly -->

# @aws-sdk/client-finspace-data

## Description

AWS SDK for JavaScript FinspaceData Client for Node.js, Browser and React Native.

<p> The FinSpace APIs let you take actions inside the FinSpace.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-finspace-data
using your favorite package manager:

- `npm install @aws-sdk/client-finspace-data`
- `yarn add @aws-sdk/client-finspace-data`
- `pnpm add @aws-sdk/client-finspace-data`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `FinspaceDataClient` and
the commands you need, for example `AssociateUserToPermissionGroupCommand`:

```js
// ES5 example
const { FinspaceDataClient, AssociateUserToPermissionGroupCommand } = require("@aws-sdk/client-finspace-data");
```

```ts
// ES6+ example
import { FinspaceDataClient, AssociateUserToPermissionGroupCommand } from "@aws-sdk/client-finspace-data";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new FinspaceDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateUserToPermissionGroupCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-finspace-data";
const client = new AWS.FinspaceData({ region: "REGION" });

// async/await.
try {
  const data = await client.associateUserToPermissionGroup(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateUserToPermissionGroup(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateUserToPermissionGroup(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-finspace-data` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateUserToPermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/associateusertopermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/associateusertopermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/associateusertopermissiongroupcommandoutput.html)

</details>
<details>
<summary>
CreateChangeset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/createchangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createchangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createchangesetcommandoutput.html)

</details>
<details>
<summary>
CreateDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/createdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createdatasetcommandoutput.html)

</details>
<details>
<summary>
CreateDataView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/createdataviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createdataviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createdataviewcommandoutput.html)

</details>
<details>
<summary>
CreatePermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/createpermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createpermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createpermissiongroupcommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
DeleteDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/deletedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/deletedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/deletedatasetcommandoutput.html)

</details>
<details>
<summary>
DeletePermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/deletepermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/deletepermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/deletepermissiongroupcommandoutput.html)

</details>
<details>
<summary>
DisableUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/disableusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/disableusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/disableusercommandoutput.html)

</details>
<details>
<summary>
DisassociateUserFromPermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/disassociateuserfrompermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/disassociateuserfrompermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/disassociateuserfrompermissiongroupcommandoutput.html)

</details>
<details>
<summary>
EnableUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/enableusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/enableusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/enableusercommandoutput.html)

</details>
<details>
<summary>
GetChangeset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getchangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getchangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getchangesetcommandoutput.html)

</details>
<details>
<summary>
GetDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getdatasetcommandoutput.html)

</details>
<details>
<summary>
GetDataView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getdataviewcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getdataviewcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getdataviewcommandoutput.html)

</details>
<details>
<summary>
GetExternalDataViewAccessDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getexternaldataviewaccessdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getexternaldataviewaccessdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getexternaldataviewaccessdetailscommandoutput.html)

</details>
<details>
<summary>
GetPermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getpermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getpermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getpermissiongroupcommandoutput.html)

</details>
<details>
<summary>
GetProgrammaticAccessCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getprogrammaticaccesscredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getprogrammaticaccesscredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getprogrammaticaccesscredentialscommandoutput.html)

</details>
<details>
<summary>
GetUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getusercommandoutput.html)

</details>
<details>
<summary>
GetWorkingLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/getworkinglocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getworkinglocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/getworkinglocationcommandoutput.html)

</details>
<details>
<summary>
ListChangesets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listchangesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listchangesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listchangesetscommandoutput.html)

</details>
<details>
<summary>
ListDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listdatasetscommandoutput.html)

</details>
<details>
<summary>
ListDataViews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listdataviewscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listdataviewscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listdataviewscommandoutput.html)

</details>
<details>
<summary>
ListPermissionGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listpermissiongroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listpermissiongroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listpermissiongroupscommandoutput.html)

</details>
<details>
<summary>
ListPermissionGroupsByUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listpermissiongroupsbyusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listpermissiongroupsbyusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listpermissiongroupsbyusercommandoutput.html)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listuserscommandoutput.html)

</details>
<details>
<summary>
ListUsersByPermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/listusersbypermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listusersbypermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/listusersbypermissiongroupcommandoutput.html)

</details>
<details>
<summary>
ResetUserPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/resetuserpasswordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/resetuserpasswordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/resetuserpasswordcommandoutput.html)

</details>
<details>
<summary>
UpdateChangeset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/updatechangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatechangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatechangesetcommandoutput.html)

</details>
<details>
<summary>
UpdateDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/updatedatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatedatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatedatasetcommandoutput.html)

</details>
<details>
<summary>
UpdatePermissionGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/updatepermissiongroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatepermissiongroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updatepermissiongroupcommandoutput.html)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/classes/updateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-finspace-data/interfaces/updateusercommandoutput.html)

</details>
