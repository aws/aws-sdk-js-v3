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

To install the this package, simply type add or install @aws-sdk/client-gamelift
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/acceptmatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/acceptmatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/acceptmatchcommandoutput.html)

</details>
<details>
<summary>
ClaimGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/claimgameservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/claimgameservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/claimgameservercommandoutput.html)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createaliascommandoutput.html)

</details>
<details>
<summary>
CreateBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createbuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createbuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createbuildcommandoutput.html)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createfleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createfleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createfleetcommandoutput.html)

</details>
<details>
<summary>
CreateFleetLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createfleetlocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createfleetlocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createfleetlocationscommandoutput.html)

</details>
<details>
<summary>
CreateGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/creategameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategameservergroupcommandoutput.html)

</details>
<details>
<summary>
CreateGameSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/creategamesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategamesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategamesessioncommandoutput.html)

</details>
<details>
<summary>
CreateGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/creategamesessionqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategamesessionqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creategamesessionqueuecommandoutput.html)

</details>
<details>
<summary>
CreateLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createlocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createlocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createlocationcommandoutput.html)

</details>
<details>
<summary>
CreateMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/creatematchmakingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creatematchmakingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creatematchmakingconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/creatematchmakingrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creatematchmakingrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/creatematchmakingrulesetcommandoutput.html)

</details>
<details>
<summary>
CreatePlayerSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createplayersessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createplayersessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createplayersessioncommandoutput.html)

</details>
<details>
<summary>
CreatePlayerSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createplayersessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createplayersessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createplayersessionscommandoutput.html)

</details>
<details>
<summary>
CreateScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createscriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createscriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createscriptcommandoutput.html)

</details>
<details>
<summary>
CreateVpcPeeringAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createvpcpeeringauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createvpcpeeringauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createvpcpeeringauthorizationcommandoutput.html)

</details>
<details>
<summary>
CreateVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/createvpcpeeringconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createvpcpeeringconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/createvpcpeeringconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletealiascommandoutput.html)

</details>
<details>
<summary>
DeleteBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletebuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletebuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletebuildcommandoutput.html)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletefleetcommandoutput.html)

</details>
<details>
<summary>
DeleteFleetLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletefleetlocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletefleetlocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletefleetlocationscommandoutput.html)

</details>
<details>
<summary>
DeleteGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletegameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletegameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletegameservergroupcommandoutput.html)

</details>
<details>
<summary>
DeleteGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletegamesessionqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletegamesessionqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletegamesessionqueuecommandoutput.html)

</details>
<details>
<summary>
DeleteLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletelocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletelocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletelocationcommandoutput.html)

</details>
<details>
<summary>
DeleteMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletematchmakingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletematchmakingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletematchmakingconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletematchmakingrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletematchmakingrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletematchmakingrulesetcommandoutput.html)

</details>
<details>
<summary>
DeleteScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletescalingpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletescalingpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletescalingpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletescriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletescriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletescriptcommandoutput.html)

</details>
<details>
<summary>
DeleteVpcPeeringAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletevpcpeeringauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletevpcpeeringauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletevpcpeeringauthorizationcommandoutput.html)

</details>
<details>
<summary>
DeleteVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deletevpcpeeringconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletevpcpeeringconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deletevpcpeeringconnectioncommandoutput.html)

</details>
<details>
<summary>
DeregisterCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deregistercomputecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deregistercomputecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deregistercomputecommandoutput.html)

</details>
<details>
<summary>
DeregisterGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/deregistergameservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deregistergameservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/deregistergameservercommandoutput.html)

</details>
<details>
<summary>
DescribeAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describealiascommandoutput.html)

</details>
<details>
<summary>
DescribeBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describebuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describebuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describebuildcommandoutput.html)

</details>
<details>
<summary>
DescribeCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describecomputecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describecomputecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describecomputecommandoutput.html)

</details>
<details>
<summary>
DescribeEC2InstanceLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describeec2instancelimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeec2instancelimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeec2instancelimitscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetattributescommandoutput.html)

</details>
<details>
<summary>
DescribeFleetCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetcapacitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetcapacitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetcapacitycommandoutput.html)

</details>
<details>
<summary>
DescribeFleetEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleeteventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleeteventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleeteventscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetLocationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetlocationattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationattributescommandoutput.html)

</details>
<details>
<summary>
DescribeFleetLocationCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetlocationcapacitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationcapacitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationcapacitycommandoutput.html)

</details>
<details>
<summary>
DescribeFleetLocationUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetlocationutilizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationutilizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetlocationutilizationcommandoutput.html)

</details>
<details>
<summary>
DescribeFleetPortSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetportsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetportsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetportsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeFleetUtilization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describefleetutilizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetutilizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describefleetutilizationcommandoutput.html)

</details>
<details>
<summary>
DescribeGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegameservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameservercommandoutput.html)

</details>
<details>
<summary>
DescribeGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameservergroupcommandoutput.html)

</details>
<details>
<summary>
DescribeGameServerInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegameserverinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameserverinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegameserverinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeGameSessionDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegamesessiondetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessiondetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessiondetailscommandoutput.html)

</details>
<details>
<summary>
DescribeGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegamesessionplacementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionplacementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionplacementcommandoutput.html)

</details>
<details>
<summary>
DescribeGameSessionQueues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegamesessionqueuescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionqueuescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionqueuescommandoutput.html)

</details>
<details>
<summary>
DescribeGameSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describegamesessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describegamesessionscommandoutput.html)

</details>
<details>
<summary>
DescribeInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describeinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describematchmakingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingcommandoutput.html)

</details>
<details>
<summary>
DescribeMatchmakingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describematchmakingconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribeMatchmakingRuleSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describematchmakingrulesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingrulesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describematchmakingrulesetscommandoutput.html)

</details>
<details>
<summary>
DescribePlayerSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describeplayersessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeplayersessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeplayersessionscommandoutput.html)

</details>
<details>
<summary>
DescribeRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describeruntimeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeruntimeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describeruntimeconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeScalingPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describescalingpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describescalingpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describescalingpoliciescommandoutput.html)

</details>
<details>
<summary>
DescribeScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describescriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describescriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describescriptcommandoutput.html)

</details>
<details>
<summary>
DescribeVpcPeeringAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describevpcpeeringauthorizationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describevpcpeeringauthorizationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describevpcpeeringauthorizationscommandoutput.html)

</details>
<details>
<summary>
DescribeVpcPeeringConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/describevpcpeeringconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describevpcpeeringconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/describevpcpeeringconnectionscommandoutput.html)

</details>
<details>
<summary>
GetComputeAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/getcomputeaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getcomputeaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getcomputeaccesscommandoutput.html)

</details>
<details>
<summary>
GetComputeAuthToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/getcomputeauthtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getcomputeauthtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getcomputeauthtokencommandoutput.html)

</details>
<details>
<summary>
GetGameSessionLogUrl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/getgamesessionlogurlcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getgamesessionlogurlcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getgamesessionlogurlcommandoutput.html)

</details>
<details>
<summary>
GetInstanceAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/getinstanceaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getinstanceaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/getinstanceaccesscommandoutput.html)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listaliasescommandoutput.html)

</details>
<details>
<summary>
ListBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listbuildscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listbuildscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listbuildscommandoutput.html)

</details>
<details>
<summary>
ListCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listcomputecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listcomputecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listcomputecommandoutput.html)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listfleetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listfleetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listfleetscommandoutput.html)

</details>
<details>
<summary>
ListGameServerGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listgameservergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listgameservergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listgameservergroupscommandoutput.html)

</details>
<details>
<summary>
ListGameServers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listgameserverscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listgameserverscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listgameserverscommandoutput.html)

</details>
<details>
<summary>
ListLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listlocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listlocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listlocationscommandoutput.html)

</details>
<details>
<summary>
ListScripts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listscriptscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listscriptscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listscriptscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/putscalingpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/putscalingpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/putscalingpolicycommandoutput.html)

</details>
<details>
<summary>
RegisterCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/registercomputecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/registercomputecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/registercomputecommandoutput.html)

</details>
<details>
<summary>
RegisterGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/registergameservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/registergameservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/registergameservercommandoutput.html)

</details>
<details>
<summary>
RequestUploadCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/requestuploadcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/requestuploadcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/requestuploadcredentialscommandoutput.html)

</details>
<details>
<summary>
ResolveAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/resolvealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/resolvealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/resolvealiascommandoutput.html)

</details>
<details>
<summary>
ResumeGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/resumegameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/resumegameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/resumegameservergroupcommandoutput.html)

</details>
<details>
<summary>
SearchGameSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/searchgamesessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/searchgamesessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/searchgamesessionscommandoutput.html)

</details>
<details>
<summary>
StartFleetActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/startfleetactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startfleetactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startfleetactionscommandoutput.html)

</details>
<details>
<summary>
StartGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/startgamesessionplacementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startgamesessionplacementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startgamesessionplacementcommandoutput.html)

</details>
<details>
<summary>
StartMatchBackfill
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/startmatchbackfillcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startmatchbackfillcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startmatchbackfillcommandoutput.html)

</details>
<details>
<summary>
StartMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/startmatchmakingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startmatchmakingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/startmatchmakingcommandoutput.html)

</details>
<details>
<summary>
StopFleetActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/stopfleetactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopfleetactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopfleetactionscommandoutput.html)

</details>
<details>
<summary>
StopGameSessionPlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/stopgamesessionplacementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopgamesessionplacementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopgamesessionplacementcommandoutput.html)

</details>
<details>
<summary>
StopMatchmaking
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/stopmatchmakingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopmatchmakingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/stopmatchmakingcommandoutput.html)

</details>
<details>
<summary>
SuspendGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/suspendgameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/suspendgameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/suspendgameservergroupcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatealiascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatealiascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatealiascommandoutput.html)

</details>
<details>
<summary>
UpdateBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatebuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatebuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatebuildcommandoutput.html)

</details>
<details>
<summary>
UpdateFleetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatefleetattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetattributescommandoutput.html)

</details>
<details>
<summary>
UpdateFleetCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatefleetcapacitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetcapacitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetcapacitycommandoutput.html)

</details>
<details>
<summary>
UpdateFleetPortSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatefleetportsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetportsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatefleetportsettingscommandoutput.html)

</details>
<details>
<summary>
UpdateGameServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updategameservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategameservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategameservercommandoutput.html)

</details>
<details>
<summary>
UpdateGameServerGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updategameservergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategameservergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategameservergroupcommandoutput.html)

</details>
<details>
<summary>
UpdateGameSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updategamesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategamesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategamesessioncommandoutput.html)

</details>
<details>
<summary>
UpdateGameSessionQueue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updategamesessionqueuecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategamesessionqueuecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updategamesessionqueuecommandoutput.html)

</details>
<details>
<summary>
UpdateMatchmakingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatematchmakingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatematchmakingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatematchmakingconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateRuntimeConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updateruntimeconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updateruntimeconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updateruntimeconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/updatescriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatescriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/updatescriptcommandoutput.html)

</details>
<details>
<summary>
ValidateMatchmakingRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/classes/validatematchmakingrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/validatematchmakingrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-gamelift/interfaces/validatematchmakingrulesetcommandoutput.html)

</details>
