// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnomalyMonitorRequest, UpdateAnomalyMonitorResponse } from "../models/models_0";
import { de_UpdateAnomalyMonitorCommand, se_UpdateAnomalyMonitorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyMonitorCommand}.
 */
export interface UpdateAnomalyMonitorCommandInput extends UpdateAnomalyMonitorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyMonitorCommand}.
 */
export interface UpdateAnomalyMonitorCommandOutput extends UpdateAnomalyMonitorResponse, __MetadataBearer {}

/**
 * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 *       doesn't change anomalies detected in the past. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CostExplorerClient(config);
 * const input = { // UpdateAnomalyMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 *   MonitorName: "STRING_VALUE",
 * };
 * const command = new UpdateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnomalyMonitorResponse
 * //   MonitorArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAnomalyMonitorCommandInput - {@link UpdateAnomalyMonitorCommandInput}
 * @returns {@link UpdateAnomalyMonitorCommandOutput}
 * @see {@link UpdateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link UnknownMonitorException} (client fault)
 *  <p>The cost anomaly monitor does not exist for the account. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class UpdateAnomalyMonitorCommand extends $Command
  .classBuilder<
    UpdateAnomalyMonitorCommandInput,
    UpdateAnomalyMonitorCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "UpdateAnomalyMonitor", {})
  .n("CostExplorerClient", "UpdateAnomalyMonitorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAnomalyMonitorCommand)
  .de(de_UpdateAnomalyMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnomalyMonitorRequest;
      output: UpdateAnomalyMonitorResponse;
    };
    sdk: {
      input: UpdateAnomalyMonitorCommandInput;
      output: UpdateAnomalyMonitorCommandOutput;
    };
  };
}
