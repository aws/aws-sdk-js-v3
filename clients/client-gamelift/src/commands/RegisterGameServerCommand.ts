// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterGameServerInput, RegisterGameServerOutput } from "../models/models_0";
import { RegisterGameServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2 (FleetIQ)
 *
 * Creates a new game server resource and notifies Amazon GameLift Servers FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift Servers FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session.
 *
 * To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.
 *
 * Once a game server is successfully registered, it is put in status `AVAILABLE`. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers FleetIQ Guide](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html)
 *
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
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
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
export class RegisterGameServerCommand extends command<RegisterGameServerCommandInput, RegisterGameServerCommandOutput>(
  _ep0,
  _mw0,
  "RegisterGameServer",
  RegisterGameServer$
) {
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
