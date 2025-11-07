// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeMonitorRequest, DescribeMonitorResponse } from "../models/models_0";
import { DescribeMonitor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMonitorCommand}.
 */
export interface DescribeMonitorCommandInput extends DescribeMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMonitorCommand}.
 */
export interface DescribeMonitorCommandOutput extends DescribeMonitorResponse, __MetadataBearer {}

/**
 * <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Baseline</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastEvaluationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastEvaluationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeMonitorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeMonitorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMonitorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMonitorResponse
 * //   MonitorName: "STRING_VALUE",
 * //   MonitorArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   LastEvaluationTime: new Date("TIMESTAMP"),
 * //   LastEvaluationState: "STRING_VALUE",
 * //   Baseline: { // Baseline
 * //     PredictorBaseline: { // PredictorBaseline
 * //       BaselineMetrics: [ // BaselineMetrics
 * //         { // BaselineMetric
 * //           Name: "STRING_VALUE",
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   EstimatedEvaluationTimeRemainingInMinutes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeMonitorCommandInput - {@link DescribeMonitorCommandInput}
 * @returns {@link DescribeMonitorCommandOutput}
 * @see {@link DescribeMonitorCommandInput} for command's `input` shape.
 * @see {@link DescribeMonitorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class DescribeMonitorCommand extends $Command
  .classBuilder<
    DescribeMonitorCommandInput,
    DescribeMonitorCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DescribeMonitor", {})
  .n("ForecastClient", "DescribeMonitorCommand")
  .sc(DescribeMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMonitorRequest;
      output: DescribeMonitorResponse;
    };
    sdk: {
      input: DescribeMonitorCommandInput;
      output: DescribeMonitorCommandOutput;
    };
  };
}
