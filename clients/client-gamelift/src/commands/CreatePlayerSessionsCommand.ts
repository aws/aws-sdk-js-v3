// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  CreatePlayerSessionsInput,
  CreatePlayerSessionsInputFilterSensitiveLog,
  CreatePlayerSessionsOutput,
  CreatePlayerSessionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreatePlayerSessionsCommand, se_CreatePlayerSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlayerSessionsCommand}.
 */
export interface CreatePlayerSessionsCommandInput extends CreatePlayerSessionsInput {}
/**
 * @public
 *
 * The output of {@link CreatePlayerSessionsCommand}.
 */
export interface CreatePlayerSessionsCommandOutput extends CreatePlayerSessionsOutput, __MetadataBearer {}

/**
 * <p>Reserves open slots in a game session for a group of players. New player sessions can
 *             be created in any game session with an open slot that is in <code>ACTIVE</code> status
 *             and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a
 *             game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a>
 *          </p>
 *          <p>To create player sessions, specify a game session ID and a list of player IDs.
 *             Optionally, provide a set of player data for each player ID. </p>
 *          <p>If successful, a slot is reserved in the game session for each player, and new
 *                 <code>PlayerSession</code> objects are returned with player session IDs. Each player
 *             references their player session ID when sending a connection request to the game
 *             session, and the game server can use it to validate the player reservation with the
 *             Amazon GameLift service. Player sessions cannot be updated.</p>
 *          <p>The maximum number of players per game session is 200. It is not adjustable. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreatePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreatePlayerSessionsInput
 *   GameSessionId: "STRING_VALUE", // required
 *   PlayerIds: [ // PlayerIdList // required
 *     "STRING_VALUE",
 *   ],
 *   PlayerDataMap: { // PlayerDataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlayerSessionsOutput
 * //   PlayerSessions: [ // PlayerSessionList
 * //     { // PlayerSession
 * //       PlayerSessionId: "STRING_VALUE",
 * //       PlayerId: "STRING_VALUE",
 * //       GameSessionId: "STRING_VALUE",
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationTime: new Date("TIMESTAMP"),
 * //       Status: "RESERVED" || "ACTIVE" || "COMPLETED" || "TIMEDOUT",
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       PlayerData: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreatePlayerSessionsCommandInput - {@link CreatePlayerSessionsCommandInput}
 * @returns {@link CreatePlayerSessionsCommandOutput}
 * @see {@link CreatePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link GameSessionFullException} (client fault)
 *  <p>The game instance is currently full and cannot allow the requested player(s) to join.
 *             Clients can retry such requests immediately or after a waiting period.</p>
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
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *  <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
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
export class CreatePlayerSessionsCommand extends $Command
  .classBuilder<
    CreatePlayerSessionsCommandInput,
    CreatePlayerSessionsCommandOutput,
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
  .s("GameLift", "CreatePlayerSessions", {})
  .n("GameLiftClient", "CreatePlayerSessionsCommand")
  .f(CreatePlayerSessionsInputFilterSensitiveLog, CreatePlayerSessionsOutputFilterSensitiveLog)
  .ser(se_CreatePlayerSessionsCommand)
  .de(de_CreatePlayerSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlayerSessionsInput;
      output: CreatePlayerSessionsOutput;
    };
    sdk: {
      input: CreatePlayerSessionsCommandInput;
      output: CreatePlayerSessionsCommandOutput;
    };
  };
}
