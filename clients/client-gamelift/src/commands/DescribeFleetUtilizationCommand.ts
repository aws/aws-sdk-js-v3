// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFleetUtilizationInput, DescribeFleetUtilizationOutput } from "../models/models_0";
import { DescribeFleetUtilization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFleetUtilizationCommand}.
 */
export interface DescribeFleetUtilizationCommandInput extends DescribeFleetUtilizationInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetUtilizationCommand}.
 */
export interface DescribeFleetUtilizationCommandOutput extends DescribeFleetUtilizationOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See [DescribeFleetLocationUtilization](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html) to get utilization statistics for a fleet's remote locations.
 *
 * This operation can be used in the following ways:
 *
 * - To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs.
 * - To get utilization data for all fleets, do not provide a fleet identifier.
 *
 * When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * If successful, a [FleetUtilization](https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html) object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a `Location` property, which is set to the fleet's home Region.
 *
 * > **Note:** Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.
 *
 * **Learn more**
 *
 * [Setting up Amazon GameLift Servers Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html)
 *
 * [GameLift Metrics for Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetUtilizationInput
 *   FleetIds: [ // FleetIdOrArnList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetUtilizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetUtilizationOutput
 * //   FleetUtilization: [ // FleetUtilizationList
 * //     { // FleetUtilization
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       ActiveServerProcessCount: Number("int"),
 * //       ActiveGameSessionCount: Number("int"),
 * //       CurrentPlayerSessionCount: Number("int"),
 * //       MaximumPlayerSessionCount: Number("int"),
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetUtilizationCommandInput - {@link DescribeFleetUtilizationCommandInput}
 * @returns {@link DescribeFleetUtilizationCommandOutput}
 * @see {@link DescribeFleetUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetUtilizationCommandOutput} for command's `response` shape.
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
export class DescribeFleetUtilizationCommand extends command<DescribeFleetUtilizationCommandInput, DescribeFleetUtilizationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetUtilization",
  DescribeFleetUtilization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetUtilizationInput;
      output: DescribeFleetUtilizationOutput;
    };
    sdk: {
      input: DescribeFleetUtilizationCommandInput;
      output: DescribeFleetUtilizationCommandOutput;
    };
  };
}
