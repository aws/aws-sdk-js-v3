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

To install the this package, simply type add or install @aws-sdk/client-codestar-connections
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/createconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createconnectioncommandoutput.html)

</details>
<details>
<summary>
CreateHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/createhostcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createhostcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createhostcommandoutput.html)

</details>
<details>
<summary>
CreateRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/createrepositorylinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createrepositorylinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createrepositorylinkcommandoutput.html)

</details>
<details>
<summary>
CreateSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/createsyncconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createsyncconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/createsyncconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/deleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deleteconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/deletehostcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deletehostcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deletehostcommandoutput.html)

</details>
<details>
<summary>
DeleteRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/deleterepositorylinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deleterepositorylinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deleterepositorylinkcommandoutput.html)

</details>
<details>
<summary>
DeleteSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/deletesyncconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deletesyncconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/deletesyncconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getconnectioncommandoutput.html)

</details>
<details>
<summary>
GetHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/gethostcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/gethostcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/gethostcommandoutput.html)

</details>
<details>
<summary>
GetRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getrepositorylinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getrepositorylinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getrepositorylinkcommandoutput.html)

</details>
<details>
<summary>
GetRepositorySyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getrepositorysyncstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getrepositorysyncstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getrepositorysyncstatuscommandoutput.html)

</details>
<details>
<summary>
GetResourceSyncStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getresourcesyncstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getresourcesyncstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getresourcesyncstatuscommandoutput.html)

</details>
<details>
<summary>
GetSyncBlockerSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getsyncblockersummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getsyncblockersummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getsyncblockersummarycommandoutput.html)

</details>
<details>
<summary>
GetSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/getsyncconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getsyncconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/getsyncconfigurationcommandoutput.html)

</details>
<details>
<summary>
ListConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listconnectionscommandoutput.html)

</details>
<details>
<summary>
ListHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listhostscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listhostscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listhostscommandoutput.html)

</details>
<details>
<summary>
ListRepositoryLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listrepositorylinkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listrepositorylinkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listrepositorylinkscommandoutput.html)

</details>
<details>
<summary>
ListRepositorySyncDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listrepositorysyncdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listrepositorysyncdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listrepositorysyncdefinitionscommandoutput.html)

</details>
<details>
<summary>
ListSyncConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listsyncconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listsyncconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listsyncconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateHost
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/updatehostcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatehostcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatehostcommandoutput.html)

</details>
<details>
<summary>
UpdateRepositoryLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/updaterepositorylinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updaterepositorylinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updaterepositorylinkcommandoutput.html)

</details>
<details>
<summary>
UpdateSyncBlocker
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/updatesyncblockercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatesyncblockercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatesyncblockercommandoutput.html)

</details>
<details>
<summary>
UpdateSyncConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/classes/updatesyncconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatesyncconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codestar-connections/interfaces/updatesyncconfigurationcommandoutput.html)

</details>
