// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DescribeFleetUtilizationInput, DescribeFleetUtilizationOutput } from "../models/models_0";
import { DescribeFleetUtilization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Container</p>
 *          <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a
 *             snapshot of how the fleet's hosting resources are currently being used. For fleets with
 *             remote locations, this operation retrieves data for the fleet's home Region only. See
 *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a
 *             fleet's remote locations.</p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To get utilization data for one or more specific fleets, provide a list of
 *                     fleet IDs or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                <p>To get utilization data for all fleets, do not provide a fleet identifier.
 *                 </p>
 *             </li>
 *          </ul>
 *          <p>When requesting multiple fleets, use the pagination parameters to retrieve results as
 *             a set of sequential pages. </p>
 *          <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the
 *             fleet identifier is not found. Each fleet utilization object includes a
 *                 <code>Location</code> property, which is set to the fleet's home Region. </p>
 *          <note>
 *             <p>Some API operations may limit the number of fleet IDs allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message includes the
 *                 maximum allowed.</p>
 *          </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Servers
 *                 Fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a>
 *          </p>
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
export class DescribeFleetUtilizationCommand extends $Command
  .classBuilder<
    DescribeFleetUtilizationCommandInput,
    DescribeFleetUtilizationCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeFleetUtilization", {})
  .n("GameLiftClient", "DescribeFleetUtilizationCommand")
  .sc(DescribeFleetUtilization$)
  .build() {
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
