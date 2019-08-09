# @aws-sdk/client-elastic-load-balancing-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-elastic-load-balancing-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-elastic-load-balancing-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-elastic-load-balancing-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-elastic-load-balancing-browser)

## Description

<fullname>Elastic Load Balancing</fullname> <p>A load balancer can distribute incoming traffic across your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered instances and ensures that it routes traffic only to healthy instances. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer and a protocol and port number for connections from the load balancer to the instances.</p> <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers. You can select a load balancer based on your application needs. For more information, see the <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers. The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p> <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>. Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p> <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK response code.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-elastic-load-balancing-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ElasticLoadBalancingClient`) and the commands you need, for example `AddTagsCommand`:

```javascript
//javascript
const {
  ElasticLoadBalancingClient
} = require("@aws-sdk/client-elastic-load-balancing-browser/ElasticLoadBalancingClient");
const {
  AddTagsCommand
} = require("@aws-sdk/client-elastic-load-balancing-browser/commands/AddTagsCommand");
```

```javascript
//typescript
const { ElasticLoadBalancingClient } = import '@aws-sdk/client-elastic-load-balancing-browser/ElasticLoadBalancingClient';
const { AddTagsCommand } = import '@aws-sdk/client-elastic-load-balancing-browser/commands/AddTagsCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const elasticLoadBalancing = new ElasticLoadBalancingClient({
  region: "region"
});
//clients can be shared by different commands
const params = {
  LoadBalancerNames: [
    /**a list of string*/
  ],
  Tags: [
    /**a list of structure*/
  ]
};
const addTagsCommand = new AddTagsCommand(params);
elasticLoadBalancing
  .send(addTagsCommand)
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
  const data = await elasticLoadBalancing.send(addTagsCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
elasticLoadBalancing.send(addTagsCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-elastic-load-balancing-browser/ElasticLoadBalancing";
const elasticLoadBalancing = new AWS.ElasticLoadBalancing({ region: "region" });
elasticLoadBalancing.addTags(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await elasticLoadBalancing.send(addTagsCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-elastic-load-balancing-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
