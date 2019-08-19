# @aws-sdk/client-application-discovery-service-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-application-discovery-service-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-discovery-service-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-application-discovery-service-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-application-discovery-service-node)

## Description

<fullname>AWS Application Discovery Service</fullname> <p>AWS Application Discovery Service helps you plan application migration projects by automatically identifying servers, virtual machines (VMs), software, and software dependencies running in your on-premises data centers. Application Discovery Service also collects application performance data, which can help you assess the outcome of your migration. The data collected by Application Discovery Service is securely retained in an AWS-hosted and managed database in the cloud. You can export the data as a CSV or XML file into your preferred visualization tool or cloud-migration solution to plan your migration. For more information, see <a href="http://aws.amazon.com/application-discovery/faqs/">AWS Application Discovery Service FAQ</a>.</p> <p>Application Discovery Service offers two modes of operation:</p> <ul> <li> <p> <b>Agentless discovery</b> mode is recommended for environments that use VMware vCenter Server. This mode doesn't require you to install an agent on each host. Agentless discovery gathers server information regardless of the operating systems, which minimizes the time required for initial on-premises infrastructure assessment. Agentless discovery doesn't collect information about software and software dependencies. It also doesn't work in non-VMware environments. </p> </li> <li> <p> <b>Agent-based discovery</b> mode collects a richer set of data than agentless discovery by using the AWS Application Discovery Agent, which you install on one or more hosts in your data center. The agent captures infrastructure and application information, including an inventory of installed software applications, system and process performance, resource utilization, and network dependencies between workloads. The information collected by agents is secured at rest and in transit to the Application Discovery Service database in the cloud. </p> </li> </ul> <p>We recommend that you use agent-based discovery for non-VMware environments and to collect information about software and software dependencies. You can also run agent-based and agentless discovery simultaneously. Use agentless discovery to quickly complete the initial infrastructure assessment and then install agents on select hosts.</p> <p>Application Discovery Service integrates with application discovery solutions from AWS Partner Network (APN) partners. Third-party application discovery tools can query Application Discovery Service and write to the Application Discovery Service database using a public API. You can then import the data into either a visualization tool or cloud-migration solution.</p> <important> <p>Application Discovery Service doesn't gather sensitive information. All data is handled according to the <a href="http://aws.amazon.com/privacy/">AWS Privacy Policy</a>. You can operate Application Discovery Service offline to inspect collected data before it is shared with the service.</p> </important> <p>This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for Application Discovery Service. The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p> <p>This guide is intended for use with the <a href="http://docs.aws.amazon.com/application-discovery/latest/userguide/"> <i>AWS Application Discovery Service User Guide</i> </a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-application-discovery-service-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ApplicationDiscoveryServiceClient`) and the commands you need, for example `AssociateConfigurationItemsToApplicationCommand`:

```javascript
//JavaScript
const {
  ApplicationDiscoveryServiceClient
} = require("@aws-sdk/client-application-discovery-service-node/ApplicationDiscoveryServiceClient");
const {
  AssociateConfigurationItemsToApplicationCommand
} = require("@aws-sdk/client-application-discovery-service-node/commands/AssociateConfigurationItemsToApplicationCommand");
```

```javascript
//TypeScript
import { ApplicationDiscoveryServiceClient } from "@aws-sdk/client-application-discovery-service-node/ApplicationDiscoveryServiceClient";
import { AssociateConfigurationItemsToApplicationCommand } from "@aws-sdk/client-application-discovery-service-node/commands/AssociateConfigurationItemsToApplicationCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const applicationDiscoveryService = new ApplicationDiscoveryServiceClient({region: 'region'});
//clients can be shared by different commands
const params = {
  applicationConfigurationId: /**a string value*/,
  configurationIds: [ /**a list of string*/ ],
};
const associateConfigurationItemsToApplicationCommand = new AssociateConfigurationItemsToApplicationCommand(params);
applicationDiscoveryService.send(associateConfigurationItemsToApplicationCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await applicationDiscoveryService.send(
    associateConfigurationItemsToApplicationCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
applicationDiscoveryService.send(
  associateConfigurationItemsToApplicationCommand,
  (err, data) => {
    //do something
  }
);
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-application-discovery-service-node/ApplicationDiscoveryService";
const applicationDiscoveryService = new AWS.ApplicationDiscoveryService({
  region: "region"
});
applicationDiscoveryService.associateConfigurationItemsToApplication(
  params,
  (err, data) => {
    //do something
  }
);
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await applicationDiscoveryService.send(
    associateConfigurationItemsToApplicationCommand
  );
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-application-discovery-service-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
