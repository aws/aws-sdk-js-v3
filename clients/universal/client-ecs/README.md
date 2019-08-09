# @aws-sdk/client-ecs

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ecs/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-ecs)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ecs.svg)](https://www.npmjs.com/package/@aws-sdk/client-ecs)

## Description

<fullname>Amazon Elastic Container Service</fullname> <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type. For more information about launch types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a>.</p> <p>Amazon ECS lets you launch and stop container-based applications with simple API calls, allows you to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates the need for you to operate your own cluster management and configuration management systems or worry about scaling your management infrastructure.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-ecs
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ECSClient`) and the commands you need, for example `CreateClusterCommand`:

```javascript
//javascript
const { ECSClient } = require("@aws-sdk/client-ecs/ECSClient");
const {
  CreateClusterCommand
} = require("@aws-sdk/client-ecs/commands/CreateClusterCommand");
```

```javascript
//typescript
const { ECSClient } = import '@aws-sdk/client-ecs/ECSClient';
const { CreateClusterCommand } = import '@aws-sdk/client-ecs/commands/CreateClusterCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const eCS = new ECSClient({ region: "region" });
//clients can be shared by different commands
const params = {};
const createClusterCommand = new CreateClusterCommand(params);
eCS
  .send(createClusterCommand)
  .then(data => {
    // do something
  })
  .catch(error => {
    // error handling
  });
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await eCS.send(createClusterCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
eCS.send(createClusterCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-ecs/ECS";
const eCS = new AWS.ECS({ region: "region" });
eCS.createCluster(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await eCS.send(createClusterCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-ecs' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
