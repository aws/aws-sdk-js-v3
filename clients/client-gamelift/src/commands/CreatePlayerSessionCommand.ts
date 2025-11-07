// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreatePlayerSessionInput, CreatePlayerSessionOutput } from "../models/models_0";
import { CreatePlayerSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlayerSessionCommand}.
 */
export interface CreatePlayerSessionCommandInput extends CreatePlayerSessionInput {}
/**
 * @public
 *
 * The output of {@link CreatePlayerSessionCommand}.
 */
export interface CreatePlayerSessionCommandOutput extends CreatePlayerSessionOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Reserves an open player slot in a game session for a player. New player sessions can
 *             be created in any game session with an open slot that is in <code>ACTIVE</code> status
 *             and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of
 *             players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p>
 *          <p>To create a player session, specify a game session ID, player ID, and optionally a set
 *             of player data. </p>
 *          <p>If successful, a slot is reserved in the game session for the player and a new
 *                 <code>PlayerSessions</code> object is returned with a player session ID. The player
 *             references the player session ID when sending a connection request to the game session,
 *             and the game server can use it to validate the player reservation with the Amazon GameLift Servers
 *             service. Player sessions cannot be updated. </p>
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
 * import { GameLiftClient, CreatePlayerSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreatePlayerSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreatePlayerSessionInput
 *   GameSessionId: "STRING_VALUE", // required
 *   PlayerId: "STRING_VALUE", // required
 *   PlayerData: "STRING_VALUE",
 * };
 * const command = new CreatePlayerSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlayerSessionOutput
 * //   PlayerSession: { // PlayerSession
 * //     PlayerSessionId: "STRING_VALUE",
 * //     PlayerId: "STRING_VALUE",
 * //     GameSessionId: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     Status: "RESERVED" || "ACTIVE" || "COMPLETED" || "TIMEDOUT",
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlayerData: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePlayerSessionCommandInput - {@link CreatePlayerSessionCommandInput}
 * @returns {@link CreatePlayerSessionCommandOutput}
 * @see {@link CreatePlayerSessionCommandInput} for command's `input` shape.
 * @see {@link CreatePlayerSessionCommandOutput} for command's `response` shape.
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
export class CreatePlayerSessionCommand extends $Command
  .classBuilder<
    CreatePlayerSessionCommandInput,
    CreatePlayerSessionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "CreatePlayerSession", {})
  .n("GameLiftClient", "CreatePlayerSessionCommand")
  .sc(CreatePlayerSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlayerSessionInput;
      output: CreatePlayerSessionOutput;
    };
    sdk: {
      input: CreatePlayerSessionCommandInput;
      output: CreatePlayerSessionCommandOutput;
    };
  };
}
