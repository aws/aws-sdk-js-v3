<!-- generated file, do not edit directly -->

# @aws-sdk/client-wafv2

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-wafv2/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-wafv2)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-wafv2.svg)](https://www.npmjs.com/package/@aws-sdk/client-wafv2)

## Description

AWS SDK for JavaScript WAFV2 Client for Node.js, Browser and React Native.

<fullname>WAF</fullname>
<note>

<p>This is the latest version of the <b>WAF</b> API,
released in November, 2019. The names of the entities that you use to access this API,
like endpoints and namespaces, all have the versioning information added, like "V2" or
"v2", to distinguish from the prior version. We recommend migrating your resources to
this version, because it has a number of significant improvements.</p>
<p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
WAF resources that you created before. You can access your old rules, web ACLs, and
other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
have retained the prior names, endpoints, and namespaces. </p>
<p>For information, including how to migrate your WAF resources to this version,
see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
</note>
<p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync
GraphQL API, or an Amazon Cognito user pool. WAF also lets you control access to your content. Based on conditions that
you specify, such as the IP addresses that requests originate from or the values of query
strings, the Amazon API Gateway REST API, CloudFront distribution, the Application Load Balancer, the AppSync GraphQL
API, or the Amazon Cognito user pool responds to requests either with the requested content or with an HTTP 403 status code
(Forbidden). You also can configure CloudFront to return a custom error page when a request is
blocked.</p>
<p>This API guide is for developers who need detailed information about WAF API actions,
data types, and errors. For detailed information about WAF features and an overview of
how to use WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
Guide</a>.</p>
<p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
<ul>
<li>
<p>For regional applications, you can use any of the endpoints in the list.
A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool. </p>
</li>
<li>
<p>For Amazon CloudFront applications, you must use the API endpoint listed for
US East (N. Virginia): us-east-1.</p>
</li>
</ul>
<p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
<p>We currently provide two versions of the WAF API: this API and the prior versions,
the classic WAF APIs. This new API provides the same functionality as the older versions,
with the following major improvements:</p>
<ul>
<li>
<p>You use one API for both global and regional applications. Where you need to
distinguish the scope, you specify a <code>Scope</code> parameter and set it to
<code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
</li>
<li>
<p>You can define a web ACL or rule group with a single call, and update it with a
single call. You define all rule specifications in JSON format, and pass them to your
rule group or web ACL calls.</p>
</li>
<li>
<p>The limits WAF places on the use of rules more closely reflects the cost of
running each type of rule. Rule groups include capacity settings, so you know the
maximum cost of a rule group when you use it.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-wafv2
using your favorite package manager:

- `npm install @aws-sdk/client-wafv2`
- `yarn add @aws-sdk/client-wafv2`
- `pnpm add @aws-sdk/client-wafv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WAFV2Client` and
the commands you need, for example `AssociateWebACLCommand`:

```js
// ES5 example
const { WAFV2Client, AssociateWebACLCommand } = require("@aws-sdk/client-wafv2");
```

```ts
// ES6+ example
import { WAFV2Client, AssociateWebACLCommand } from "@aws-sdk/client-wafv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WAFV2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateWebACLCommand(params);
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
import * as AWS from "@aws-sdk/client-wafv2";
const client = new AWS.WAFV2({ region: "REGION" });

// async/await.
try {
  const data = await client.associateWebACL(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateWebACL(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateWebACL(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-wafv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
