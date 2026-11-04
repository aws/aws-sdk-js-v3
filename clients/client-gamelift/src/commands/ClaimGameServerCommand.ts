// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ClaimGameServerInput, ClaimGameServerOutput } from "../models/models_0";
import { ClaimGameServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2 (FleetIQ)
 *
 * Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift Servers FleetIQ locates an available game server, places it in `CLAIMED` status for 60 seconds, and returns connection information that players can use to connect to the game server.
 *
 * To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift Servers FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. Add filter options to further restrict how a game server is chosen, such as only allowing game servers on `ACTIVE` instances to be claimed.
 *
 * When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains `AVAILABLE` while the claim status is set to `CLAIMED` for up to 60 seconds. This time period gives the game server time to update its status to `UTILIZED` after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.
 *
 * If you try to claim a specific game server, this request will fail in the following cases:
 *
 * - If the game server utilization status is `UTILIZED`.
 * - If the game server claim status is `CLAIMED`.
 * - If the game server is running on an instance in `DRAINING` status and the provided filter option does not allow placing on `DRAINING` instances.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers FleetIQ Guide](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ClaimGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ClaimGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link OutOfCapacityException} (client fault)
 *
 * The specified game server group has no available game servers to fulfill a `ClaimGameServer` request. Clients can retry such requests immediately or after a waiting period.
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
export class ClaimGameServerCommand extends command<ClaimGameServerCommandInput, ClaimGameServerCommandOutput>(
  _ep0,
  _mw0,
  "ClaimGameServer",
  ClaimGameServer$
) {
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
