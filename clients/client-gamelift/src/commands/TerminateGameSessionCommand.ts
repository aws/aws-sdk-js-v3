// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { TerminateGameSessionInput, TerminateGameSessionOutput } from "../models/models_1";
import { TerminateGameSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateGameSessionCommand}.
 */
export interface TerminateGameSessionCommandInput extends TerminateGameSessionInput {}
/**
 * @public
 *
 * The output of {@link TerminateGameSessionCommand}.
 */
export interface TerminateGameSessionCommandOutput extends TerminateGameSessionOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Ends a game session that's currently in progress. Use this action to terminate any
 *             game session that isn't in <code>ERROR</code> status. Terminating a game session is the
 *             most efficient way to free up a server process when it's hosting a game session that's
 *             in a bad state or not ending properly. You can use this action to terminate a game
 *             session that's being hosted on any type of Amazon GameLift Servers fleet compute, including computes for
 *             managed EC2, managed container, and Anywhere fleets. The game server must be integrated
 *             with Amazon GameLift Servers server SDK 5.x or greater.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>Request termination for a single game session. Provide the game session ID and the
 *             termination mode. There are two potential methods for terminating a game session:</p>
 *          <ul>
 *             <li>
 *                <p>Initiate a graceful termination using the normal game session shutdown
 *                     sequence. With this mode, the Amazon GameLift Servers service prompts the server process that's
 *                     hosting the game session by calling the server SDK callback method
 *                         <code>OnProcessTerminate()</code>. The callback implementation is part of
 *                     the custom game server code. It might involve a variety of actions to gracefully
 *                     end a game session, such as notifying players, before stopping the server
 *                     process.</p>
 *             </li>
 *             <li>
 *                <p>Force an immediate game session termination. With this mode, the Amazon GameLift Servers
 *                     service takes action to stop the server process, which ends the game session
 *                     without the normal game session shutdown sequence. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, game session termination is initiated. During this activity, the game
 *             session status is changed to <code>TERMINATING</code>. When completed, the server
 *             process that was hosting the game session has been stopped and replaced with a new
 *             server process that's ready to host a new game session. The old game session's status is
 *             changed to <code>TERMINATED</code> with a status reason that indicates the termination
 *             method used.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html">Add Amazon GameLift Servers to your game server</a>
 *          </p>
 *          <p>Amazon GameLift Servers server SDK 5 reference guide for <code>OnProcessTerminate()</code>
 *             (<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-cpp-initsdk.html">C++</a>)
 *             (<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-csharp-initsdk.html">C#</a>)
 *             (<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk5-unreal-initsdk.html">Unreal</a>)
 *             (<a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-server-sdk-go-initsdk.html">Go</a>)
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, TerminateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, TerminateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // TerminateGameSessionInput
 *   GameSessionId: "STRING_VALUE", // required
 *   TerminationMode: "TRIGGER_ON_PROCESS_TERMINATE" || "FORCE_TERMINATE", // required
 * };
 * const command = new TerminateGameSessionCommand(input);
 * const response = await client.send(command);
 * // { // TerminateGameSessionOutput
 * //   GameSession: { // GameSession
 * //     GameSessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     CurrentPlayerSessionCount: Number("int"),
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //     StatusReason: "INTERRUPTED" || "TRIGGERED_ON_PROCESS_TERMINATE" || "FORCE_TERMINATED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //     CreatorId: "STRING_VALUE",
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //     Location: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateGameSessionCommandInput - {@link TerminateGameSessionCommandInput}
 * @returns {@link TerminateGameSessionCommandOutput}
 * @see {@link TerminateGameSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidGameSessionStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link NotReadyException} (client fault)
 *  <p> The operation failed because Amazon GameLift Servers has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class TerminateGameSessionCommand extends $Command
  .classBuilder<
    TerminateGameSessionCommandInput,
    TerminateGameSessionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "TerminateGameSession", {})
  .n("GameLiftClient", "TerminateGameSessionCommand")
  .sc(TerminateGameSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateGameSessionInput;
      output: TerminateGameSessionOutput;
    };
    sdk: {
      input: TerminateGameSessionCommandInput;
      output: TerminateGameSessionCommandOutput;
    };
  };
}
