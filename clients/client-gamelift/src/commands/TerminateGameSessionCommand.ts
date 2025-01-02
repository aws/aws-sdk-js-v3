// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  TerminateGameSessionInput,
  TerminateGameSessionOutput,
  TerminateGameSessionOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_TerminateGameSessionCommand, se_TerminateGameSessionCommand } from "../protocols/Aws_json1_1";

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
 * <p>Ends a game session that's currently in progress. You can use this action to terminate
 *             any game session that isn't in <code>TERMINATED</code> or <code>TERMINATING</code>
 *             status. Terminating a game session is the most efficient way to free up a server process
 *             when it's hosting a game session that's in a bad state or not ending naturally. You can
 *             use this action to terminate a game session that's being hosted on any type of Amazon GameLift
 *             fleet compute, including computes for managed EC2, managed container, and Anywhere
 *             fleets.</p>
 *          <p>There are two potential methods for terminating a game session:</p>
 *          <ul>
 *             <li>
 *                <p>With a graceful termination, the Amazon GameLift service prompts the server process to initiate its
 *                     normal game session shutdown sequence. This sequence is implemented in the game
 *                     server code and might involve a variety of actions to gracefully end a game
 *                     session, such as notifying players, and stop the server process. </p>
 *             </li>
 *             <li>
 *                <p>With a forceful termination, the Amazon GameLift service takes immediate action to terminate the game
 *                     session by stopping the server process. Termination occurs without the normal
 *                     game session shutdown sequence. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Request termination for a single game session. Provide the game session ID and
 *                     the termination method. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, game session termination is initiated, which includes changing the game
 *             session status to <code>TERMINATING</code>. As a result of this action, and depending on
 *             the implementation of <code>OnProcessTerminate()</code>, the server process either
 *             becomes available to host a new game session, or it's recycled and a new server process
 *             started with availability to host a game session. The game session status is changed to
 *                 <code>TERMINATED</code>, with a status reason that indicates the termination method
 *             used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, TerminateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, TerminateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
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
 *  <p> The operation failed because Amazon GameLift has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "TerminateGameSession", {})
  .n("GameLiftClient", "TerminateGameSessionCommand")
  .f(void 0, TerminateGameSessionOutputFilterSensitiveLog)
  .ser(se_TerminateGameSessionCommand)
  .de(de_TerminateGameSessionCommand)
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
