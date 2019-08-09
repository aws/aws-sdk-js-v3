# @aws-sdk/client-gamelift-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-gamelift-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-gamelift-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-gamelift-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-gamelift-node)

## Description

<fullname>Amazon GameLift Service</fullname> <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing resources and deploy your game servers, (2) run game sessions and get players into games, (3) automatically scale your resources to meet player demand and manage costs, and (4) track in-depth metrics on game server performance and player usage.</p> <p>When setting up hosting resources, you can deploy your custom game server or use the Amazon GameLift Realtime Servers. Realtime Servers gives you the ability to quickly stand up lightweight, efficient game servers with the core Amazon GameLift infrastructure already built in.</p> <p> <b>Get Amazon GameLift Tools and Resources</b> </p> <p>This reference guide describes the low-level service API for Amazon GameLift and provides links to language-specific SDK reference topics. See also <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift Tools and Resources</a>.</p> <p> <b>API Summary</b> </p> <p>The Amazon GameLift service API includes two key sets of actions:</p> <ul> <li> <p>Manage game sessions and player access -- Integrate this functionality into game client services in order to create new game sessions, retrieve information on existing game sessions; reserve a player slot in a game session, request matchmaking, etc.</p> </li> <li> <p>Configure and manage game server resources -- Manage your Amazon GameLift hosting resources, including builds, scripts, fleets, queues, and aliases. Set up matchmakers, configure auto-scaling, retrieve game logs, and get hosting and game metrics.</p> </li> </ul> <p> <b> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html"> Task-based list of API actions</a> </b> </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-gamelift-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`GameLiftClient`) and the commands you need, for example `AcceptMatchCommand`:

```javascript
//javascript
const {
  GameLiftClient
} = require("@aws-sdk/client-gamelift-node/GameLiftClient");
const {
  AcceptMatchCommand
} = require("@aws-sdk/client-gamelift-node/commands/AcceptMatchCommand");
```

```javascript
//typescript
const { GameLiftClient } = import '@aws-sdk/client-gamelift-node/GameLiftClient';
const { AcceptMatchCommand } = import '@aws-sdk/client-gamelift-node/commands/AcceptMatchCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const gameLift = new GameLiftClient({region: 'region'});
//clients can be shared by different commands
const params = {
  TicketId: /**a string value*/,
  PlayerIds: [ /**a list of string*/ ],
  AcceptanceType: /**a string value*/,
};
const acceptMatchCommand = new AcceptMatchCommand(params);
gameLift.send(acceptMatchCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await gameLift.send(acceptMatchCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
gameLift.send(acceptMatchCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-gamelift-node/GameLift";
const gameLift = new AWS.GameLift({ region: "region" });
gameLift.acceptMatch(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await gameLift.send(acceptMatchCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-gamelift-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
