// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ClaimGameServerInput, ClaimGameServerOutput } from "../models/models_0";
import { de_ClaimGameServerCommand, se_ClaimGameServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ClaimGameServerCommand}.
 */
export interface ClaimGameServerCommandInput extends ClaimGameServerInput {}
/**
 * @public
 *
 * The output of {@link ClaimGameServerCommand}.
 */
export interface ClaimGameServerCommandOutput extends ClaimGameServerOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Locates an available game server and
 *             temporarily reserves it to host gameplay and players. This operation is called from a
 *             game client or client service (such as a matchmaker) to request hosting resources for a
 *             new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in
 *                 <code>CLAIMED</code> status for 60 seconds, and returns connection information that
 *             players can use to connect to the game server. </p>
 *          <p>To claim a game server, identify a game server group. You can also specify a game
 *             server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally,
 *             include game data to pass to the game server at the start of a game session, such as a
 *             game map or player information. Add filter options to further restrict how a
 *             game server is chosen, such as only allowing game servers on <code>ACTIVE</code> instances
 *                 to be claimed.</p>
 *          <p>When a game server is successfully claimed, connection information is returned. A
 *             claimed game server's utilization status remains <code>AVAILABLE</code> while the claim
 *             status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the
 *             game server time to update its status to <code>UTILIZED</code> after players join. If
 *             the game server's status is not updated within 60 seconds, the game server reverts to
 *             unclaimed status and is available to be claimed by another request. The claim time
 *             period is a fixed value and is not configurable.</p>
 *          <p>If you try to claim a specific game server, this request will fail in the following
 *             cases:</p>
 *          <ul>
 *             <li>
 *                <p>If the game server utilization status is <code>UTILIZED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the game server claim status is <code>CLAIMED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the game server is running on an instance in <code>DRAINING</code> status and
 *                 the provided filter option does not allow placing on <code>DRAINING</code> instances.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ClaimGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ClaimGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ClaimGameServerInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   GameServerId: "STRING_VALUE",
 *   GameServerData: "STRING_VALUE",
 *   FilterOption: { // ClaimFilterOption
 *     InstanceStatuses: [ // FilterInstanceStatuses
 *       "ACTIVE" || "DRAINING",
 *     ],
 *   },
 * };
 * const command = new ClaimGameServerCommand(input);
 * const response = await client.send(command);
 * // { // ClaimGameServerOutput
 * //   GameServer: { // GameServer
 * //     GameServerGroupName: "STRING_VALUE",
 * //     GameServerGroupArn: "STRING_VALUE",
 * //     GameServerId: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     ConnectionInfo: "STRING_VALUE",
 * //     GameServerData: "STRING_VALUE",
 * //     ClaimStatus: "CLAIMED",
 * //     UtilizationStatus: "AVAILABLE" || "UTILIZED",
 * //     RegistrationTime: new Date("TIMESTAMP"),
 * //     LastClaimTime: new Date("TIMESTAMP"),
 * //     LastHealthCheckTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ClaimGameServerCommandInput - {@link ClaimGameServerCommandInput}
 * @returns {@link ClaimGameServerCommandOutput}
 * @see {@link ClaimGameServerCommandInput} for command's `input` shape.
 * @see {@link ClaimGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link OutOfCapacityException} (client fault)
 *  <p>The specified game server group has no available game servers to fulfill a
 *                 <code>ClaimGameServer</code> request. Clients can retry such requests immediately or
 *             after a waiting period.</p>
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
export class ClaimGameServerCommand extends $Command
  .classBuilder<
    ClaimGameServerCommandInput,
    ClaimGameServerCommandOutput,
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
  .s("GameLift", "ClaimGameServer", {})
  .n("GameLiftClient", "ClaimGameServerCommand")
  .f(void 0, void 0)
  .ser(se_ClaimGameServerCommand)
  .de(de_ClaimGameServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ClaimGameServerInput;
      output: ClaimGameServerOutput;
    };
    sdk: {
      input: ClaimGameServerCommandInput;
      output: ClaimGameServerCommandOutput;
    };
  };
}
