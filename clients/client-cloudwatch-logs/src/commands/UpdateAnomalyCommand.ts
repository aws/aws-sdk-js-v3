// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnomalyRequest } from "../models/models_0";
import { UpdateAnomaly } from "../schemas/schemas_14_Anomaly";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandInput extends UpdateAnomalyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandOutput extends __MetadataBearer {}

/**
 * <p>Use this operation to <i>suppress</i> anomaly detection for a specified
 *       anomaly or pattern. If you suppress an anomaly, CloudWatch Logs won't report new
 *       occurrences of that anomaly and won't update that anomaly with new data. If you suppress a
 *       pattern, CloudWatch Logs won't report any anomalies related to that pattern.</p>
 *          <p>You must specify either <code>anomalyId</code> or <code>patternId</code>, but you can't
 *       specify both parameters in the same operation.</p>
 *          <p>If you have previously used this operation to suppress detection of a pattern or anomaly,
 *       you can use it again to cause CloudWatch Logs to end the suppression. To do this, use this
 *       operation and specify the anomaly or pattern to stop suppressing, and omit the
 *         <code>suppressionType</code> and <code>suppressionPeriod</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateAnomalyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateAnomalyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateAnomalyRequest
 *   anomalyId: "STRING_VALUE",
 *   patternId: "STRING_VALUE",
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   suppressionType: "LIMITED" || "INFINITE",
 *   suppressionPeriod: { // SuppressionPeriod
 *     value: Number("int"),
 *     suppressionUnit: "SECONDS" || "MINUTES" || "HOURS",
 *   },
 *   baseline: true || false,
 * };
 * const command = new UpdateAnomalyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAnomalyCommandInput - {@link UpdateAnomalyCommandInput}
 * @returns {@link UpdateAnomalyCommandOutput}
 * @see {@link UpdateAnomalyCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class UpdateAnomalyCommand extends $Command
  .classBuilder<
    UpdateAnomalyCommandInput,
    UpdateAnomalyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "UpdateAnomaly", {})
  .n("CloudWatchLogsClient", "UpdateAnomalyCommand")
  .sc(UpdateAnomaly)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnomalyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAnomalyCommandInput;
      output: UpdateAnomalyCommandOutput;
    };
  };
}
