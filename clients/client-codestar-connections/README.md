<!-- generated file, do not edit directly -->

# @aws-sdk/client-codestar-connections

## Description

AWS SDK for JavaScript CodeStarConnections Client for Node.js, Browser and React Native.

<fullname>AWS CodeStar Connections</fullname>
<p>This Amazon Web Services CodeStar Connections API Reference provides descriptions and usage examples of
the operations and data types for the Amazon Web Services CodeStar Connections API. You can use the
connections API to work with connections and installations.</p>
<p>
<i>Connections</i> are configurations that you use to connect Amazon Web Services
resources to external code repositories. Each connection is a resource that can be given to
services such as CodePipeline to connect to a third-party repository such as Bitbucket. For
example, you can add the connection in CodePipeline so that it triggers your pipeline when a
code change is made to your third-party code repository. Each connection is named and
associated with a unique ARN that is used to reference the connection.</p>
<p>When you create a connection, the console initiates a third-party connection handshake.
<i>Installations</i> are the apps that are used to conduct this handshake. For
example, the installation for the Bitbucket provider type is the Bitbucket app. When you
create a connection, you can choose an existing installation or create one.</p>
<p>When you want to create a connection to an installed provider type such as GitHub
Enterprise Server, you create a <i>host</i> for your connections.</p>
<p>You can work with connections by calling:</p>
<ul>
<li>
<p>
<a>CreateConnection</a>, which creates a uniquely named connection that can be
referenced by services such as CodePipeline.</p>
</li>
<li>
<p>
<a>DeleteConnection</a>, which deletes the specified connection.</p>
</li>
<li>
<p>
<a>GetConnection</a>, which returns information about the connection, including
the connection status.</p>
</li>
<li>
<p>
<a>ListConnections</a>, which lists the connections associated with your
account.</p>
</li>
</ul>
<p>You can work with hosts by calling:</p>
<ul>
<li>
<p>
<a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p>
</li>
<li>
<p>
<a>DeleteHost</a>, which deletes the specified host.</p>
</li>
<li>
<p>
<a>GetHost</a>, which returns information about the host, including
the setup status.</p>
</li>
<li>
<p>
<a>ListHosts</a>, which lists the hosts associated with your
account.</p>
</li>
</ul>
<p>You can work with tags in Amazon Web Services CodeStar Connections by calling the following:</p>
<ul>
<li>
<p>
<a>ListTagsForResource</a>, which gets information about Amazon Web Services tags for a
specified Amazon Resource Name (ARN) in Amazon Web Services CodeStar Connections.</p>
</li>
<li>
<p>
<a>TagResource</a>, which adds or updates tags for a resource in Amazon Web Services CodeStar
Connections.</p>
</li>
<li>
<p>
<a>UntagResource</a>, which removes tags for a resource in Amazon Web Services CodeStar
Connections.</p>
</li>
</ul>
<p>For information about how to use Amazon Web Services CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User
Guide</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-codestar-connections
using your favorite package manager:
- `npm install @aws-sdk/client-codestar-connections`
- `yarn add @aws-sdk/client-codestar-connections`
- `pnpm add @aws-sdk/client-codestar-connections`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeStarConnectionsClient` and
the commands you need, for example `ListHostsCommand`:

```js
// ES5 example
const { CodeStarConnectionsClient, ListHostsCommand } = require("@aws-sdk/client-codestar-connections");
```

```ts
// ES6+ example
import { CodeStarConnectionsClient, ListHostsCommand } from "@aws-sdk/client-codestar-connections";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeStarConnectionsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListHostsCommand(params);
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
import * as AWS from "@aws-sdk/client-codestar-connections";
const client = new AWS.CodeStarConnections({ region: "REGION" });

// async/await.
try {
  const data = await client.listHosts(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listHosts(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listHosts(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codestar-connections` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/CreateConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateConnectionCommandOutput/)
</details>
<details>
<summary>
CreateHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/CreateHostCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateHostCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateHostCommandOutput/)
</details>
<details>
<summary>
CreateRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/CreateRepositoryLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateRepositoryLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateRepositoryLinkCommandOutput/)
</details>
<details>
<summary>
CreateSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/CreateSyncConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateSyncConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/CreateSyncConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/DeleteConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteConnectionCommandOutput/)
</details>
<details>
<summary>
DeleteHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/DeleteHostCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteHostCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteHostCommandOutput/)
</details>
<details>
<summary>
DeleteRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/DeleteRepositoryLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteRepositoryLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteRepositoryLinkCommandOutput/)
</details>
<details>
<summary>
DeleteSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/DeleteSyncConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteSyncConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/DeleteSyncConfigurationCommandOutput/)
</details>
<details>
<summary>
GetConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetConnectionCommandOutput/)
</details>
<details>
<summary>
GetHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetHostCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetHostCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetHostCommandOutput/)
</details>
<details>
<summary>
GetRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetRepositoryLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetRepositoryLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetRepositoryLinkCommandOutput/)
</details>
<details>
<summary>
GetRepositorySyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetRepositorySyncStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetRepositorySyncStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetRepositorySyncStatusCommandOutput/)
</details>
<details>
<summary>
GetResourceSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetResourceSyncStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetResourceSyncStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetResourceSyncStatusCommandOutput/)
</details>
<details>
<summary>
GetSyncBlockerSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetSyncBlockerSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetSyncBlockerSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetSyncBlockerSummaryCommandOutput/)
</details>
<details>
<summary>
GetSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/GetSyncConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetSyncConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/GetSyncConfigurationCommandOutput/)
</details>
<details>
<summary>
ListConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListConnectionsCommandOutput/)
</details>
<details>
<summary>
ListHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListHostsCommandOutput/)
</details>
<details>
<summary>
ListRepositoryLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListRepositoryLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListRepositoryLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListRepositoryLinksCommandOutput/)
</details>
<details>
<summary>
ListRepositorySyncDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListRepositorySyncDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListRepositorySyncDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListRepositorySyncDefinitionsCommandOutput/)
</details>
<details>
<summary>
ListSyncConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListSyncConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListSyncConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListSyncConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/UpdateHostCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateHostCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateHostCommandOutput/)
</details>
<details>
<summary>
UpdateRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/UpdateRepositoryLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateRepositoryLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateRepositoryLinkCommandOutput/)
</details>
<details>
<summary>
UpdateSyncBlocker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/UpdateSyncBlockerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateSyncBlockerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateSyncBlockerCommandOutput/)
</details>
<details>
<summary>
UpdateSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar-connections/command/UpdateSyncConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateSyncConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar-connections/Interface/UpdateSyncConfigurationCommandOutput/)
</details>
