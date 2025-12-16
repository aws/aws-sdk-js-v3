// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DescribeFleetLocationUtilizationInput, DescribeFleetLocationUtilizationOutput } from "../models/models_0";
import { DescribeFleetLocationUtilization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetLocationUtilizationCommand}.
 */
export interface DescribeFleetLocationUtilizationCommandInput extends DescribeFleetLocationUtilizationInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetLocationUtilizationCommand}.
 */
export interface DescribeFleetLocationUtilizationCommandOutput
  extends DescribeFleetLocationUtilizationOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Retrieves current usage data for a fleet location. Utilization data provides a
 *             snapshot of current game hosting activity at the requested location. Use this operation
 *             to retrieve utilization information for a fleet's remote location or home Region (you
 *             can also retrieve home Region utilization by calling
 *                 <code>DescribeFleetUtilization</code>).</p>
 *          <p>To retrieve utilization data, identify a fleet and location. </p>
 *          <p>If successful, a <code>FleetUtilization</code> object is returned for the requested
 *             fleet location. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Servers
 *                 fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html"> Amazon GameLift Servers service locations</a> for managed hosting</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationUtilizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationUtilizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetLocationUtilizationInput
 *   FleetId: "STRING_VALUE", // required
 *   Location: "STRING_VALUE", // required
 * };
 * const command = new DescribeFleetLocationUtilizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetLocationUtilizationOutput
 * //   FleetUtilization: { // FleetUtilization
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     ActiveServerProcessCount: Number("int"),
 * //     ActiveGameSessionCount: Number("int"),
 * //     CurrentPlayerSessionCount: Number("int"),
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     Location: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFleetLocationUtilizationCommandInput - {@link DescribeFleetLocationUtilizationCommandInput}
 * @returns {@link DescribeFleetLocationUtilizationCommandOutput}
 * @see {@link DescribeFleetLocationUtilizationCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationUtilizationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DescribeFleetLocationUtilizationCommand extends $Command
  .classBuilder<
    DescribeFleetLocationUtilizationCommandInput,
    DescribeFleetLocationUtilizationCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeFleetLocationUtilization", {})
  .n("GameLiftClient", "DescribeFleetLocationUtilizationCommand")
  .sc(DescribeFleetLocationUtilization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetLocationUtilizationInput;
      output: DescribeFleetLocationUtilizationOutput;
    };
    sdk: {
      input: DescribeFleetLocationUtilizationCommandInput;
      output: DescribeFleetLocationUtilizationCommandOutput;
    };
  };
}
