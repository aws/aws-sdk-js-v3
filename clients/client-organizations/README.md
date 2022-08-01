<!-- generated file, do not edit directly -->

# @aws-sdk/client-organizations

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-organizations/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-organizations)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-organizations.svg)](https://www.npmjs.com/package/@aws-sdk/client-organizations)

## Description

AWS SDK for JavaScript Organizations Client for Node.js, Browser and React Native.

<p>Organizations is a web service that enables you to consolidate your multiple
Amazon Web Services accounts into an <i>organization</i> and centrally manage your
accounts and their resources.</p>
<p>This guide provides descriptions of the Organizations operations. For more
information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
<p>
<b>Support and feedback for Organizations</b>
</p>
<p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
<p>
<b>Endpoint to call When using the CLI or the Amazon Web Services
SDK</b>
</p>
<p>For the current release of Organizations, specify the <code>us-east-1</code> region
for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
China. If calling from one of the Amazon Web Services Regions in China, then specify
<code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
and commands:</p>
<ul>
<li>
<p>Use the following parameter with each command to specify both the endpoint and
its region:</p>
<p>
<code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>--endpoint-url
https://organizations.cn-northwest-1.amazonaws.com.cn</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
<li>
<p>Use the default endpoint, but configure your default region with this
command:</p>
<p>
<code>aws configure set default.region us-east-1</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>aws configure set default.region cn-northwest-1</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
<li>
<p>Use the following parameter with each command to specify the endpoint:</p>
<p>
<code>--region us-east-1</code>
<i>(from commercial Amazon Web Services Regions outside of China)</i>
</p>
<p>or</p>
<p>
<code>--region cn-northwest-1</code>
<i>(from Amazon Web Services Regions in China)</i>
</p>
</li>
</ul>
<p>
<b>Recording API Requests</b>
</p>
<p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
by CloudTrail, you can determine which requests the Organizations service received, who made the
request and when, and so on. For more about Organizations and its support for CloudTrail, see
<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
Organizations Events with CloudTrail</a> in the <i>Organizations User Guide</i>.
To learn more about CloudTrail, including how to turn it on and find your log files, see the
<a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-organizations
using your favorite package manager:

- `npm install @aws-sdk/client-organizations`
- `yarn add @aws-sdk/client-organizations`
- `pnpm add @aws-sdk/client-organizations`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OrganizationsClient` and
the commands you need, for example `AcceptHandshakeCommand`:

```js
// ES5 example
const { OrganizationsClient, AcceptHandshakeCommand } = require("@aws-sdk/client-organizations");
```

```ts
// ES6+ example
import { OrganizationsClient, AcceptHandshakeCommand } from "@aws-sdk/client-organizations";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OrganizationsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptHandshakeCommand(params);
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
import * as AWS from "@aws-sdk/client-organizations";
const client = new AWS.Organizations({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptHandshake(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptHandshake(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptHandshake(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-organizations` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
