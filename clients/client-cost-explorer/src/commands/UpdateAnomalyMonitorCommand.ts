// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAnomalyMonitorRequest, UpdateAnomalyMonitorResponse } from "../models/models_0";
import { UpdateAnomalyMonitor$ } from "../schemas/schemas_0";

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
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "UpdateAnomalyMonitor", {})
  .n("CostExplorerClient", "UpdateAnomalyMonitorCommand")
  .sc(UpdateAnomalyMonitor$)
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
