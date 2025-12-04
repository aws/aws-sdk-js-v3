// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { RegisterGameServerInput, RegisterGameServerOutput } from "../models/models_0";
import { RegisterGameServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterGameServerCommand}.
 */
export interface RegisterGameServerCommandInput extends RegisterGameServerInput {}
/**
 * @public
 *
 * The output of {@link RegisterGameServerCommand}.
 */
export interface RegisterGameServerCommandOutput extends RegisterGameServerOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2 (FleetIQ)</p>
 *          <p>Creates a new game server
 *             resource and notifies Amazon GameLift Servers FleetIQ that the game server is ready to host gameplay and players.
 *             This operation is called by a game server process that is running on an instance in a
 *             game server group. Registering game servers enables Amazon GameLift Servers FleetIQ to track available game
 *             servers and enables game clients and services to claim a game server for a new game
 *             session. </p>
 *          <p>To register a game server, identify the game server group and instance where the game
 *             server is running, and provide a unique identifier for the game server. You can also
 *             include connection and game server data.</p>
 *          <p>Once a game server is successfully registered, it is put in status
 *                 <code>AVAILABLE</code>. A request to register a game server may fail if the instance
 *             it is running on is in the process of shutting down as part of instance balancing or
 *             scale-down activity. </p>
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
 * import { GameLiftClient, RegisterGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RegisterGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // RegisterGameServerInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   GameServerId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   ConnectionInfo: "STRING_VALUE",
 *   GameServerData: "STRING_VALUE",
 * };
 * const command = new RegisterGameServerCommand(input);
 * const response = await client.send(command);
 * // { // RegisterGameServerOutput
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
 * @param RegisterGameServerCommandInput - {@link RegisterGameServerCommandInput}
 * @returns {@link RegisterGameServerCommandOutput}
 * @see {@link RegisterGameServerCommandInput} for command's `input` shape.
 * @see {@link RegisterGameServerCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
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
export class RegisterGameServerCommand extends $Command
  .classBuilder<
    RegisterGameServerCommandInput,
    RegisterGameServerCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "RegisterGameServer", {})
  .n("GameLiftClient", "RegisterGameServerCommand")
  .sc(RegisterGameServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterGameServerInput;
      output: RegisterGameServerOutput;
    };
    sdk: {
      input: RegisterGameServerCommandInput;
      output: RegisterGameServerCommandOutput;
    };
  };
}
