# @aws-sdk/client-budgets-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-budgets-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-budgets-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-budgets-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-budgets-node)

## Description

<p>The AWS Budgets API enables you to use AWS Budgets to plan your service usage, service costs, and instance reservations. The API reference provides descriptions, syntax, and usage examples for each of the actions and data types for AWS Budgets. </p> <p>Budgets provide you with a way to see the following information:</p> <ul> <li> <p>How close your plan is to your budgeted amount or to the free tier limits</p> </li> <li> <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p> </li> <li> <p>Your current estimated charges from AWS, and how much your predicted usage will accrue in charges by the end of the month</p> </li> <li> <p>How much of your budget has been used</p> </li> </ul> <p>AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p> <ul> <li> <p> <b>Cost budgets</b> - Plan how much you want to spend on a service.</p> </li> <li> <p> <b>Usage budgets</b> - Plan how much you want to use one or more services.</p> </li> <li> <p> <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p> </li> <li> <p> <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p> </li> </ul> <p>Service Endpoint</p> <p>The AWS Budgets API provides the following endpoint:</p> <ul> <li> <p>https://budgets.amazonaws.com</p> </li> </ul> <p>For information about costs that are associated with the AWS Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-budgets-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`BudgetsClient`) and the commands you need, for example `CreateBudgetCommand`:

```javascript
//javascript
const { BudgetsClient } = require("@aws-sdk/client-budgets-node/BudgetsClient");
const {
  CreateBudgetCommand
} = require("@aws-sdk/client-budgets-node/commands/CreateBudgetCommand");
```

```javascript
//typescript
const { BudgetsClient } = import '@aws-sdk/client-budgets-node/BudgetsClient';
const { CreateBudgetCommand } = import '@aws-sdk/client-budgets-node/commands/CreateBudgetCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const budgets = new BudgetsClient({region: 'region'});
//clients can be shared by different commands
const params = {
  AccountId: /**a string value*/,
  Budget: { /**an object specifying Budget*/ },
};
const createBudgetCommand = new CreateBudgetCommand(params);
budgets.send(createBudgetCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await budgets.send(createBudgetCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
budgets.send(createBudgetCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-budgets-node/Budgets";
const budgets = new AWS.Budgets({ region: "region" });
budgets.createBudget(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await budgets.send(createBudgetCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-budgets-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
