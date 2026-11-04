// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterGameServerInput } from "../models/models_0";
import { DeregisterGameServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2 (FleetIQ)
 *
 * Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers.
 *
 * To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers FleetIQ Guide](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html)
 *
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DeregisterGameServerCommand extends command<DeregisterGameServerCommandInput, DeregisterGameServerCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterGameServer",
  DeregisterGameServer$
) {
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
