// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeregisterGameServerInput } from "../models/models_0";
import { DeregisterGameServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterGameServerCommand}.
 */
export interface DeregisterGameServerCommandInput extends DeregisterGameServerInput {}
/**
 * @public
 *
 * The output of {@link DeregisterGameServerCommand}.
 */
export interface DeregisterGameServerCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2 (FleetIQ)</p>
 *          <p>Removes the game server from a
 *             game server group. As a result of this operation, the deregistered game server can no
 *             longer be claimed and will not be returned in a list of active game servers. </p>
 *          <p>To deregister a game server, specify the game server group and game server ID. If
 *             successful, this operation emits a CloudWatch event with termination timestamp and
 *             reason.</p>
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
 * import { GameLiftClient, DeregisterGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeregisterGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeregisterGameServerInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   GameServerId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterGameServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterGameServerCommandInput - {@link DeregisterGameServerCommandInput}
 * @returns {@link DeregisterGameServerCommandOutput}
 * @see {@link DeregisterGameServerCommandInput} for command's `input` shape.
 * @see {@link DeregisterGameServerCommandOutput} for command's `response` shape.
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
export class DeregisterGameServerCommand extends $Command
  .classBuilder<
    DeregisterGameServerCommandInput,
    DeregisterGameServerCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeregisterGameServer", {})
  .n("GameLiftClient", "DeregisterGameServerCommand")
  .sc(DeregisterGameServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterGameServerInput;
      output: {};
    };
    sdk: {
      input: DeregisterGameServerCommandInput;
      output: DeregisterGameServerCommandOutput;
    };
  };
}
