# @aws-sdk/client-dynamodb-v2-node

## Description

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the AWS Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an AWS region, providing built-in high availability and data durability. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window: 

```
npm install @aws-sdk/client-dynamodb-v2-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commends in CommonJS modules. To send a request, you only need to import the client(`DynamoDBClient`) and the commands you need, for example `BatchGetItemCommand`:

```javascript
//javascript
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb-v2-node/DynamoDBClient');
const { BatchGetItemCommand } = require('@aws-sdk/client-dynamodb-v2-node/BatchGetItemCommand');
```

```javascript
//typescript
const { DynamoDBClient } = import '@aws-sdk/client-dynamodb-v2-node/DynamoDBClient';
const { BatchGetItemCommand } = import '@aws-sdk/client-dynamodb-v2-node/commands/BatchGetItemCommand';
```

### Usage

To send a request, you:

* Initiate client with configurations.(credentials, region). For more information you can refer to the [API reference][].
* Initiate command with input parameters.
* Call `send` operation of client with command object as input.
* If you are using a custom http handler, you may call `destroy()` to close open connections. 

```javascript
const dynamoDB = new DynamoDBClient({region: 'region'});
//clients can be shared by different commands
const params = {
    RequestItems: { /**a map with key of string and value of structure*/ },
};
const batchGetItemCommand = new BatchGetItemCommand(params);
dynamoDB.send(batchGetItemCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

Besides using promise style, there are 2 other ways to send a request:

```javascript
// async/await
try {
    const data = await dynamoDB.send(batchGetItemCommand);
    // do something
} catch(error) {
    // error handling
}
```

```javascript
// callback
dynamoDB.send(batchGetItemCommand, (err, data) => {
    //do something
})
```
 
Besides using `send()`, the SDK can also send requests using the simplified callback style in version 2 of the SDK.

```javascript
import * as AWS from '@aws-sdk/@aws-sdk/client-dynamodb-v2-node/DynamoDB';
const dynamoDB = new AWS.DynamoDB({region: 'region'})
dynamoDB.batchGetItem(params, (err, data) => {
    //do something
})

```

### Troubleshooting 

When the service returns an exception, inpecting the exceptions is always helpful. You can not only access the exception information but also response metadata(i.e request id).

```javascript
try {
    const data = await dynamoDB.send(batchGetItemCommand);
    // do something
} catch(error) {
    const metadata = error.$metadata;
    console.log(
`requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}`
    );
/*
The keys within exceptions are also parsed, you can access them by specifying exception names like below:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with `aws-sdk-js`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing
 
This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-dynamodb-v2-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator

[API reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
