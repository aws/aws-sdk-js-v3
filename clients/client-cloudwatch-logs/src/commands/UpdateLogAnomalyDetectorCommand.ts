// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLogAnomalyDetectorRequest } from "../models/models_0";
import { UpdateLogAnomalyDetector } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandInput extends UpdateLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an existing log anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateLogAnomalyDetectorRequest
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 *   filterPattern: "STRING_VALUE",
 *   anomalyVisibilityTime: Number("long"),
 *   enabled: true || false, // required
 * };
 * const command = new UpdateLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLogAnomalyDetectorCommandInput - {@link UpdateLogAnomalyDetectorCommandInput}
 * @returns {@link UpdateLogAnomalyDetectorCommandOutput}
 * @see {@link UpdateLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateLogAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class UpdateLogAnomalyDetectorCommand extends $Command
  .classBuilder<
    UpdateLogAnomalyDetectorCommandInput,
    UpdateLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "UpdateLogAnomalyDetector", {})
  .n("CloudWatchLogsClient", "UpdateLogAnomalyDetectorCommand")
  .f(void 0, void 0)
  .sc(UpdateLogAnomalyDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLogAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: UpdateLogAnomalyDetectorCommandInput;
      output: UpdateLogAnomalyDetectorCommandOutput;
    };
  };
}
