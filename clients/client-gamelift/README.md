<!-- generated file, do not edit directly -->

# @aws-sdk/client-gamelift

## Description

AWS SDK for JavaScript GameLift Client for Node.js, Browser and React Native.

<p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the
cloud, including tools for deploying, operating, and scaling game servers. Built on
Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
high-reliability, low-cost game servers while dynamically scaling your resource usage to
meet player demand. </p>
<p>
<b>About Amazon GameLift solutions</b>
</p>
<p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p>
<ul>
<li>
<p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up
and maintain computing machines for hosting, manage game session and player
session life cycle, and handle security, storage, and performance tracking. You
can use automatic scaling tools to balance player demand and hosting costs,
configure your game session management to minimize player latency, and add
FlexMatch for matchmaking.</p>
</li>
<li>
<p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure
and set up ready-to-go game servers for your game. Realtime Servers provides a game server
framework with core Amazon GameLift infrastructure already built in. Then use the full
range of Amazon GameLift managed hosting features, including FlexMatch, for your
game.</p>
</li>
<li>
<p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2
instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game
hosting, including boosting the viability of low-cost Spot Instances gaming. For
a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p>
</li>
<li>
<p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
customizable matchmaking service for multiplayer games. Use FlexMatch as
integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone
service into your own hosting solution.</p>
</li>
</ul>
<p>
<b>About this API Reference</b>
</p>
<p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
reference. Useful links:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API
operations listed by tasks</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools
and resources</a>
</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-gamelift
using your favorite package manager:

- `npm install @aws-sdk/client-gamelift`
- `yarn add @aws-sdk/client-gamelift`
- `pnpm add @aws-sdk/client-gamelift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GameLiftClient` and
the commands you need, for example `ListAliasesCommand`:

```js
// ES5 example
const { GameLiftClient, ListAliasesCommand } = require("@aws-sdk/client-gamelift");
```

```ts
// ES6+ example
import { GameLiftClient, ListAliasesCommand } from "@aws-sdk/client-gamelift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GameLiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAliasesCommand(params);
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
import * as AWS from "@aws-sdk/client-gamelift";
const client = new AWS.GameLift({ region: "REGION" });

// async/await.
try {
  const data = await client.listAliases(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAliases(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAliases(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-gamelift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptMatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/AcceptMatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/AcceptMatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/AcceptMatchCommandOutput/)

</details>
<details>
<summary>
ClaimGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ClaimGameServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ClaimGameServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ClaimGameServerCommandOutput/)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateAliasCommandOutput/)

</details>
<details>
<summary>
CreateBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateBuildCommandOutput/)

</details>
<details>
<summary>
CreateContainerFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateContainerFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateContainerFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateContainerFleetCommandOutput/)

</details>
<details>
<summary>
CreateContainerGroupDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateContainerGroupDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateContainerGroupDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateContainerGroupDefinitionCommandOutput/)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateFleetCommandOutput/)

</details>
<details>
<summary>
CreateFleetLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateFleetLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateFleetLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateFleetLocationsCommandOutput/)

</details>
<details>
<summary>
CreateGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameServerGroupCommandOutput/)

</details>
<details>
<summary>
CreateGameSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateGameSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameSessionCommandOutput/)

</details>
<details>
<summary>
CreateGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateGameSessionQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameSessionQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateGameSessionQueueCommandOutput/)

</details>
<details>
<summary>
CreateLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateLocationCommandOutput/)

</details>
<details>
<summary>
CreateMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateMatchmakingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateMatchmakingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateMatchmakingConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateMatchmakingRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateMatchmakingRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateMatchmakingRuleSetCommandOutput/)

</details>
<details>
<summary>
CreatePlayerSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreatePlayerSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreatePlayerSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreatePlayerSessionCommandOutput/)

</details>
<details>
<summary>
CreatePlayerSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreatePlayerSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreatePlayerSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreatePlayerSessionsCommandOutput/)

</details>
<details>
<summary>
CreateScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateScriptCommandOutput/)

</details>
<details>
<summary>
CreateVpcPeeringAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateVpcPeeringAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateVpcPeeringAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateVpcPeeringAuthorizationCommandOutput/)

</details>
<details>
<summary>
CreateVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/CreateVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/CreateVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteAliasCommandOutput/)

</details>
<details>
<summary>
DeleteBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteBuildCommandOutput/)

</details>
<details>
<summary>
DeleteContainerFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteContainerFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteContainerFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteContainerFleetCommandOutput/)

</details>
<details>
<summary>
DeleteContainerGroupDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteContainerGroupDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteContainerGroupDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteContainerGroupDefinitionCommandOutput/)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteFleetCommandOutput/)

</details>
<details>
<summary>
DeleteFleetLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteFleetLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteFleetLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteFleetLocationsCommandOutput/)

</details>
<details>
<summary>
DeleteGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteGameServerGroupCommandOutput/)

</details>
<details>
<summary>
DeleteGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteGameSessionQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteGameSessionQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteGameSessionQueueCommandOutput/)

</details>
<details>
<summary>
DeleteLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteLocationCommandOutput/)

</details>
<details>
<summary>
DeleteMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteMatchmakingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteMatchmakingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteMatchmakingConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteMatchmakingRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteMatchmakingRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteMatchmakingRuleSetCommandOutput/)

</details>
<details>
<summary>
DeleteScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteScalingPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteScriptCommandOutput/)

</details>
<details>
<summary>
DeleteVpcPeeringAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteVpcPeeringAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteVpcPeeringAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteVpcPeeringAuthorizationCommandOutput/)

</details>
<details>
<summary>
DeleteVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeleteVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeleteVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
DeregisterCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeregisterComputeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeregisterComputeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeregisterComputeCommandOutput/)

</details>
<details>
<summary>
DeregisterGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DeregisterGameServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeregisterGameServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DeregisterGameServerCommandOutput/)

</details>
<details>
<summary>
DescribeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeAliasCommandOutput/)

</details>
<details>
<summary>
DescribeBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeBuildCommandOutput/)

</details>
<details>
<summary>
DescribeCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeComputeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeComputeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeComputeCommandOutput/)

</details>
<details>
<summary>
DescribeContainerFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeContainerFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeContainerFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeContainerFleetCommandOutput/)

</details>
<details>
<summary>
DescribeContainerGroupDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeContainerGroupDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeContainerGroupDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeContainerGroupDefinitionCommandOutput/)

</details>
<details>
<summary>
DescribeEC2InstanceLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeEC2InstanceLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeEC2InstanceLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeEC2InstanceLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeFleetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeFleetCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetCapacityCommandOutput/)

</details>
<details>
<summary>
DescribeFleetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetDeploymentCommandOutput/)

</details>
<details>
<summary>
DescribeFleetEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetEventsCommandOutput/)

</details>
<details>
<summary>
DescribeFleetLocationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetLocationAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeFleetLocationCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetLocationCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationCapacityCommandOutput/)

</details>
<details>
<summary>
DescribeFleetLocationUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetLocationUtilizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationUtilizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetLocationUtilizationCommandOutput/)

</details>
<details>
<summary>
DescribeFleetPortSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetPortSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetPortSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetPortSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeFleetUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeFleetUtilizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetUtilizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeFleetUtilizationCommandOutput/)

</details>
<details>
<summary>
DescribeGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerCommandOutput/)

</details>
<details>
<summary>
DescribeGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerGroupCommandOutput/)

</details>
<details>
<summary>
DescribeGameServerInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameServerInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameServerInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeGameSessionDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameSessionDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionDetailsCommandOutput/)

</details>
<details>
<summary>
DescribeGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameSessionPlacementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionPlacementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionPlacementCommandOutput/)

</details>
<details>
<summary>
DescribeGameSessionQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameSessionQueuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionQueuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionQueuesCommandOutput/)

</details>
<details>
<summary>
DescribeGameSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeGameSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeGameSessionsCommandOutput/)

</details>
<details>
<summary>
DescribeInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeMatchmakingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingCommandOutput/)

</details>
<details>
<summary>
DescribeMatchmakingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeMatchmakingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeMatchmakingRuleSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeMatchmakingRuleSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingRuleSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeMatchmakingRuleSetsCommandOutput/)

</details>
<details>
<summary>
DescribePlayerSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribePlayerSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribePlayerSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribePlayerSessionsCommandOutput/)

</details>
<details>
<summary>
DescribeRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeRuntimeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeRuntimeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeRuntimeConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeScalingPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeScalingPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeScalingPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeScalingPoliciesCommandOutput/)

</details>
<details>
<summary>
DescribeScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeScriptCommandOutput/)

</details>
<details>
<summary>
DescribeVpcPeeringAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeVpcPeeringAuthorizationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeVpcPeeringAuthorizationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeVpcPeeringAuthorizationsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcPeeringConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/DescribeVpcPeeringConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeVpcPeeringConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/DescribeVpcPeeringConnectionsCommandOutput/)

</details>
<details>
<summary>
GetComputeAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/GetComputeAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetComputeAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetComputeAccessCommandOutput/)

</details>
<details>
<summary>
GetComputeAuthToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/GetComputeAuthTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetComputeAuthTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetComputeAuthTokenCommandOutput/)

</details>
<details>
<summary>
GetGameSessionLogUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/GetGameSessionLogUrlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetGameSessionLogUrlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetGameSessionLogUrlCommandOutput/)

</details>
<details>
<summary>
GetInstanceAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/GetInstanceAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetInstanceAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/GetInstanceAccessCommandOutput/)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListAliasesCommandOutput/)

</details>
<details>
<summary>
ListBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListBuildsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListBuildsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListBuildsCommandOutput/)

</details>
<details>
<summary>
ListCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListComputeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListComputeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListComputeCommandOutput/)

</details>
<details>
<summary>
ListContainerFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListContainerFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerFleetsCommandOutput/)

</details>
<details>
<summary>
ListContainerGroupDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListContainerGroupDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerGroupDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerGroupDefinitionsCommandOutput/)

</details>
<details>
<summary>
ListContainerGroupDefinitionVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListContainerGroupDefinitionVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerGroupDefinitionVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListContainerGroupDefinitionVersionsCommandOutput/)

</details>
<details>
<summary>
ListFleetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListFleetDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListFleetDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListFleetDeploymentsCommandOutput/)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListFleetsCommandOutput/)

</details>
<details>
<summary>
ListGameServerGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListGameServerGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListGameServerGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListGameServerGroupsCommandOutput/)

</details>
<details>
<summary>
ListGameServers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListGameServersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListGameServersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListGameServersCommandOutput/)

</details>
<details>
<summary>
ListLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListLocationsCommandOutput/)

</details>
<details>
<summary>
ListScripts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListScriptsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListScriptsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListScriptsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/PutScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/PutScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/PutScalingPolicyCommandOutput/)

</details>
<details>
<summary>
RegisterCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/RegisterComputeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RegisterComputeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RegisterComputeCommandOutput/)

</details>
<details>
<summary>
RegisterGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/RegisterGameServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RegisterGameServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RegisterGameServerCommandOutput/)

</details>
<details>
<summary>
RequestUploadCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/RequestUploadCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RequestUploadCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/RequestUploadCredentialsCommandOutput/)

</details>
<details>
<summary>
ResolveAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ResolveAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ResolveAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ResolveAliasCommandOutput/)

</details>
<details>
<summary>
ResumeGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ResumeGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ResumeGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ResumeGameServerGroupCommandOutput/)

</details>
<details>
<summary>
SearchGameSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/SearchGameSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/SearchGameSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/SearchGameSessionsCommandOutput/)

</details>
<details>
<summary>
StartFleetActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StartFleetActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartFleetActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartFleetActionsCommandOutput/)

</details>
<details>
<summary>
StartGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StartGameSessionPlacementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartGameSessionPlacementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartGameSessionPlacementCommandOutput/)

</details>
<details>
<summary>
StartMatchBackfill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StartMatchBackfillCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartMatchBackfillCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartMatchBackfillCommandOutput/)

</details>
<details>
<summary>
StartMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StartMatchmakingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartMatchmakingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StartMatchmakingCommandOutput/)

</details>
<details>
<summary>
StopFleetActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StopFleetActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopFleetActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopFleetActionsCommandOutput/)

</details>
<details>
<summary>
StopGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StopGameSessionPlacementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopGameSessionPlacementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopGameSessionPlacementCommandOutput/)

</details>
<details>
<summary>
StopMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/StopMatchmakingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopMatchmakingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/StopMatchmakingCommandOutput/)

</details>
<details>
<summary>
SuspendGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/SuspendGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/SuspendGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/SuspendGameServerGroupCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateAliasCommandOutput/)

</details>
<details>
<summary>
UpdateBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateBuildCommandOutput/)

</details>
<details>
<summary>
UpdateContainerFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateContainerFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateContainerFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateContainerFleetCommandOutput/)

</details>
<details>
<summary>
UpdateContainerGroupDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateContainerGroupDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateContainerGroupDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateContainerGroupDefinitionCommandOutput/)

</details>
<details>
<summary>
UpdateFleetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateFleetAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetAttributesCommandOutput/)

</details>
<details>
<summary>
UpdateFleetCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateFleetCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetCapacityCommandOutput/)

</details>
<details>
<summary>
UpdateFleetPortSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateFleetPortSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetPortSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateFleetPortSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateGameServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameServerCommandOutput/)

</details>
<details>
<summary>
UpdateGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateGameServerGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameServerGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameServerGroupCommandOutput/)

</details>
<details>
<summary>
UpdateGameSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateGameSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameSessionCommandOutput/)

</details>
<details>
<summary>
UpdateGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateGameSessionQueueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameSessionQueueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateGameSessionQueueCommandOutput/)

</details>
<details>
<summary>
UpdateMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateMatchmakingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateMatchmakingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateMatchmakingConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateRuntimeConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateRuntimeConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateRuntimeConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/UpdateScriptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateScriptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/UpdateScriptCommandOutput/)

</details>
<details>
<summary>
ValidateMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/gamelift/command/ValidateMatchmakingRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ValidateMatchmakingRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-gamelift/Interface/ValidateMatchmakingRuleSetCommandOutput/)

</details>
