# @aws-sdk/client-resource-groups-tagging-api

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-resource-groups-tagging-api/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-resource-groups-tagging-api)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-resource-groups-tagging-api.svg)](https://www.npmjs.com/package/@aws-sdk/client-resource-groups-tagging-api)

## Description

AWS SDK for JavaScript ResourceGroupsTaggingAPI Client for Node.js, Browser and React Native.

<fullname>Resource Groups Tagging API</fullname>

<p>This guide describes the API operations for the resource groups tagging.</p>
<p>A tag is a label that you assign to an AWS resource. A tag consists of a key and a
value, both of which you define. For example, if you have two Amazon EC2 instances, you might
assign both a tag key of "Stack." But the value of "Stack" might be "Testing" for one
and "Production" for the other.</p>
<important>
<p>Do not store personally identifiable information (PII) or other confidential or
sensitive information in tags. We use tags to provide you with billing and
administration services. Tags are not intended to be used for private or sensitive
data.</p>
</important>
<p>Tagging can help you organize your resources and enables you to simplify resource
management, access management and cost allocation. </p>
<p>You can use the resource groups tagging API operations to complete the following
tasks:</p>
<ul>
<li>
<p>Tag and untag supported resources located in the specified Region for the
AWS account.</p>
</li>
<li>
<p>Use tag-based filters to search for resources located in the specified Region
for the AWS account.</p>
</li>
<li>
<p>List all existing tag keys in the specified Region for the AWS
account.</p>
</li>
<li>
<p>List all existing values for the specified key in the specified Region for the
AWS account.</p>
</li>
</ul>
<p>To use resource groups tagging API operations, you must add the following permissions
to your IAM policy:</p>
<ul>
<li>
<p>
<code>tag:GetResources</code>
</p>
</li>
<li>
<p>
<code>tag:TagResources</code>
</p>
</li>
<li>
<p>
<code>tag:UntagResources</code>
</p>
</li>
<li>
<p>
<code>tag:GetTagKeys</code>
</p>
</li>
<li>
<p>
<code>tag:GetTagValues</code>
</p>
</li>
</ul>
<p>You'll also need permissions to access the resources of individual services so that
you can tag and untag those resources.</p>
<p>For more information on IAM policies, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html">Managing IAM
Policies</a> in the <i>IAM User Guide</i>.</p>
<p>
<i>
<b>Services that support the Resource Groups Tagging
API</b>
</i>
</p>
<p>You can use the Resource Groups Tagging API to tag resources for the following AWS
services.</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/a4b">Alexa for Business (a4b)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/apigateway">API Gateway</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/appstream2">Amazon AppStream</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/appsync">AWS AppSync</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/app-mesh">AWS App Mesh</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/athena">Amazon Athena</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide">Amazon
Aurora</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/aws-backup">AWS Backup</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/acm">AWS Certificate Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/acm">AWS Certificate Manager Private
CA</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/clouddirectory">Amazon Cloud
Directory</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloud-map">AWS Cloud Map</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudformation">AWS
CloudFormation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudfront">Amazon CloudFront</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudhsm">AWS CloudHSM</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudtrail">AWS CloudTrail</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudwatch">Amazon CloudWatch (alarms
only)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudwatch/?id=docs_gateway#amazon-cloudwatch-events">Amazon CloudWatch
Events</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudwatch/?id=docs_gateway#amazon-cloudwatch-logs">Amazon CloudWatch
Logs</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cloudwatch">Amazon Cloudwatch
Synthetics</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codebuild">AWS CodeBuild</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codecommit">AWS CodeCommit</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/">AWS CodeGuru
Profiler</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codepipeline">AWS
CodePipeline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codestar">AWS CodeStar</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/">AWS CodeStar Connections</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cognito">Amazon Cognito
Identity</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cognito">Amazon Cognito User
Pools</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/comprehend">Amazon Comprehend</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/config">AWS Config</a>
</p>
</li>
<li>
<p>
<a href="http://aws.amazon.com/connect/resources/?whats-new-cards#Documentation">Amazon Connect</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/data-exchange">AWS Data
Exchange</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/data-pipeline">AWS Data
Pipeline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/dms">AWS Database Migration
Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/datasync">AWS DataSync</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/devicefarm">AWS Device Farm</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/directconnect">AWS Direct
Connect</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/directory-service">AWS Directory
Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/dynamodb">Amazon DynamoDB</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ebs">Amazon EBS</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ec2">Amazon EC2</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/imagebuilder">EC2 Image
Builder</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ecr">Amazon ECR</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ecs">Amazon ECS</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/eks">Amazon EKS</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/elastic-beanstalk">AWS Elastic
Beanstalk</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/efs">Amazon Elastic File
System</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/elasticloadbalancing">Elastic Load
Balancing</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/elastic-inference">Amazon Elastic
Inference</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/elasticache">Amazon
ElastiCache</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/elasticsearch-service">Amazon Elasticsearch
Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/medialive">AWS Elemental
MediaLive</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediapackage">AWS Elemental
MediaPackage</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediapackage">AWS Elemental MediaPackage
VoD</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediatailor">AWS Elemental
MediaTailor</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/emr">Amazon EMR</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/eventbridge">Amazon EventBridge
Schema</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/firewall-manager">AWS Firewall
Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/forecast">Amazon Forecast</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/frauddetector">Amazon Fraud
Detector</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/fsx">Amazon FSx</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/s3/?id=docs_gateway#amazon-s3-glacier">Amazon
S3 Glacier</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/global-accelerator">AWS Global
Accelerator</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ground-station">AWS Ground
Station</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/glue">AWS Glue</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/guardduty">Amazon GuardDuty</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/inspector">Amazon Inspector</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ivs">Amazon Interactive Video Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iotanalytics">AWS IoT
Analytics</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iot">AWS IoT Core</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iot-device-defender">AWS IoT Device
Defender</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iot-device-management">AWS IoT Device
Management</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iotevents">AWS IoT Events</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/greengrass">AWS IoT
Greengrass</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iot-1-click">AWS IoT 1-Click</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/iot-sitewise">AWS IoT
Sitewise</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/thingsgraph">AWS IoT Things
Graph</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/kendra">Amazon Kendra</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/kms">AWS Key Management
Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/kinesis">Amazon Kinesis</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/kinesis/?id=docs_gateway#amazon-kinesis-data-analytics">Amazon Kinesis
Data Analytics</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/kinesis/?id=docs_gateway#amazon-kinesis-data-firehose">Amazon Kinesis
Data Firehose</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/lambda">AWS Lambda</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/lex">Amazon Lex</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/license-manager">AWS License
Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/lightsail">Amazon Lightsail</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/macie">Amazon Macie</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/machine-learning">Amazon Machine
Learning</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/amazon-mq">Amazon MQ</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/msk">Amazon MSK</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/msk">Amazon MSK</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/neptune">Amazon Neptune</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html">AWS Network Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/opsworks">AWS OpsWorks</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/opsworks">AWS OpsWorks CM</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/organizations">AWS
Organizations</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/pinpoint">Amazon Pinpoint</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/qldb">Amazon Quantum Ledger Database
(QLDB)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/rds">Amazon RDS</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/redshift">Amazon Redshift</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ram">AWS Resource Access
Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ARG">AWS Resource Groups</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/robomaker">AWS RoboMaker</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/route53">Amazon Route 53</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/route53">Amazon Route 53
Resolver</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/s3">Amazon S3 (buckets only)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sagemaker">Amazon SageMaker</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/savingsplans">Savings Plans</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/secretsmanager">AWS Secrets
Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/securityhub">AWS Security
Hub</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/servicecatalog">AWS Service
Catalog</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/ses">Amazon Simple Email Service
(SES)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sns">Amazon Simple Notification Service
(SNS)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sqs">Amazon Simple Queue Service
(SQS)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/swf">Amazon Simple Workflow
Service</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/step-functions">AWS Step
Functions</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway">AWS Storage
Gateway</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/systems-manager">AWS Systems
Manager</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/transfer">AWS Transfer for
SFTP</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/vpc">Amazon VPC</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/waf">AWS WAF</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/waf">AWS WAF Regional</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/worklink">Amazon WorkLink</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/workspaces">Amazon WorkSpaces</a>
</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-resource-groups-tagging-api
using your favorite package manager:

- `npm install @aws-sdk/client-resource-groups-tagging-api`
- `yarn add @aws-sdk/client-resource-groups-tagging-api`
- `pnpm add @aws-sdk/client-resource-groups-tagging-api`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ResourceGroupsTaggingAPIClient` and
the commands you need, for example `DescribeReportCreationCommand`:

```js
// ES5 example
const {
  ResourceGroupsTaggingAPIClient,
  DescribeReportCreationCommand,
} = require("@aws-sdk/client-resource-groups-tagging-api");
```

```ts
// ES6+ example
import {
  ResourceGroupsTaggingAPIClient,
  DescribeReportCreationCommand,
} from "@aws-sdk/client-resource-groups-tagging-api";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by difference commands.
const client = new ResourceGroupsTaggingAPIClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DescribeReportCreationCommand(params);
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
  // proccess err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-resource-groups-tagging-api";
const client = new AWS.ResourceGroupsTaggingAPI({ region: "REGION" });

// async/await.
try {
  const data = client.describeReportCreation(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describeReportCreation(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describeReportCreation(params, (err, data) => {
  // proccess err and data.
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
  const { requestId, cfId, extendedRequestId } = error.$metadata;
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-resource-groups-tagging-api` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
