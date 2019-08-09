# @aws-sdk/client-application-insights-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-application-insights-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-insights-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-application-insights-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-insights-node)

## Description

<fullname>Amazon CloudWatch Application Insights for .NET and SQL Server</fullname> <p> Amazon CloudWatch Application Insights for .NET and SQL Server is a service that helps you detect common problems with your .NET and SQL Server-based applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights for .NET and SQL Server identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-application-insights-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ApplicationInsightsClient`) and the commands you need, for example `CreateApplicationCommand`:

```javascript
//javascript
const {
  ApplicationInsightsClient
} = require("@aws-sdk/client-application-insights-node/ApplicationInsightsClient");
const {
  CreateApplicationCommand
} = require("@aws-sdk/client-application-insights-node/commands/CreateApplicationCommand");
```

```javascript
//typescript
const { ApplicationInsightsClient } = import '@aws-sdk/client-application-insights-node/ApplicationInsightsClient';
const { CreateApplicationCommand } = import '@aws-sdk/client-application-insights-node/commands/CreateApplicationCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const applicationInsights = new ApplicationInsightsClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ResourceGroupName: /**a string value*/,
};
const createApplicationCommand = new CreateApplicationCommand(params);
applicationInsights.send(createApplicationCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await applicationInsights.send(createApplicationCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
applicationInsights.send(createApplicationCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-application-insights-node/ApplicationInsights";
const applicationInsights = new AWS.ApplicationInsights({ region: "region" });
applicationInsights.createApplication(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await applicationInsights.send(createApplicationCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-application-insights-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
