// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGameServerInstancesInput, DescribeGameServerInstancesOutput } from "../models/models_0";
import { DescribeGameServerInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGameServerInstancesCommand}.
 */
export interface DescribeGameServerInstancesCommandInput extends DescribeGameServerInstancesInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameServerInstancesCommand}.
 */
export interface DescribeGameServerInstancesCommandOutput extends DescribeGameServerInstancesOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2 (FleetIQ)
 *
 * Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift Servers FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.
 *
 * To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of `GameServerInstance` objects is returned.
 *
 * This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.
 *
 * **Learn more**
 *
 * [Amazon GameLift Servers FleetIQ Guide](https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameServerInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameServerInstancesInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   InstanceIds: [ // GameServerInstanceIds
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGameServerInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameServerInstancesOutput
 * //   GameServerInstances: [ // GameServerInstances
 * //     { // GameServerInstance
 * //       GameServerGroupName: "STRING_VALUE",
 * //       GameServerGroupArn: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceStatus: "ACTIVE" || "DRAINING" || "SPOT_TERMINATING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGameServerInstancesCommandInput - {@link DescribeGameServerInstancesCommandInput}
 * @returns {@link DescribeGameServerInstancesCommandOutput}
 * @see {@link DescribeGameServerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerInstancesCommandOutput} for command's `response` shape.
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
export class DescribeGameServerInstancesCommand extends command<DescribeGameServerInstancesCommandInput, DescribeGameServerInstancesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGameServerInstances",
  DescribeGameServerInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGameServerInstancesInput;
      output: DescribeGameServerInstancesOutput;
    };
    sdk: {
      input: DescribeGameServerInstancesCommandInput;
      output: DescribeGameServerInstancesCommandOutput;
    };
  };
}
