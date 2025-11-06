// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameServerInput, UpdateGameServerOutput } from "../models/models_1";
import { de_UpdateGameServerCommand, se_UpdateGameServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGameServerCommand}.
 */
export interface UpdateGameServerCommandInput extends UpdateGameServerInput {}
/**
 * @public
 *
 * The output of {@link UpdateGameServerCommand}.
 */
export interface UpdateGameServerCommandOutput extends UpdateGameServerOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2 (FleetIQ)</p>
 *          <p>Updates information about a registered game server to help Amazon GameLift Servers FleetIQ track game server
 *             availability. This operation is called by a game server process that is running on an
 *             instance in a game server group. </p>
 *          <p>Use this operation to update the following types of game server information. You can
 *             make all three types of updates in the same request:</p>
 *          <ul>
 *             <li>
 *                <p>To update the game server's utilization status from <code>AVAILABLE</code>
 *                     (when the game server is available to be claimed) to <code>UTILIZED</code> (when
 *                     the game server is currently hosting games). Identify the game server and game
 *                     server group and specify the new utilization status. You can't change the status
 *                     from to <code>UTILIZED</code> to <code>AVAILABLE</code> .</p>
 *             </li>
 *             <li>
 *                <p>To report health status, identify the game server and game server group and
 *                     set health check to <code>HEALTHY</code>. If a game server does not report
 *                     health status for a certain length of time, the game server is no longer
 *                     considered healthy. As a result, it will be eventually deregistered from the
 *                     game server group to avoid affecting utilization metrics. The best practice is
 *                     to report health every 60 seconds.</p>
 *             </li>
 *             <li>
 *                <p>To change game server metadata, provide updated game server data.</p>
 *             </li>
 *          </ul>
 *          <p>Once a game server is successfully updated, the relevant statuses and timestamps are
 *             updated.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift Servers FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateGameServerInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   GameServerId: "STRING_VALUE", // required
 *   GameServerData: "STRING_VALUE",
 *   UtilizationStatus: "AVAILABLE" || "UTILIZED",
 *   HealthCheck: "HEALTHY",
 * };
 * const command = new UpdateGameServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGameServerOutput
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
 * @param UpdateGameServerCommandInput - {@link UpdateGameServerCommandInput}
 * @returns {@link UpdateGameServerCommandOutput}
 * @see {@link UpdateGameServerCommandInput} for command's `input` shape.
 * @see {@link UpdateGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class UpdateGameServerCommand extends $Command
  .classBuilder<
    UpdateGameServerCommandInput,
    UpdateGameServerCommandOutput,
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
  .s("GameLift", "UpdateGameServer", {})
  .n("GameLiftClient", "UpdateGameServerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGameServerCommand)
  .de(de_UpdateGameServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGameServerInput;
      output: UpdateGameServerOutput;
    };
    sdk: {
      input: UpdateGameServerCommandInput;
      output: UpdateGameServerCommandOutput;
    };
  };
}
