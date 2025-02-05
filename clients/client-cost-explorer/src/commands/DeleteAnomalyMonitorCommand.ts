// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnomalyMonitorRequest, DeleteAnomalyMonitorResponse } from "../models/models_0";
import { de_DeleteAnomalyMonitorCommand, se_DeleteAnomalyMonitorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnomalyMonitorCommand}.
 */
export interface DeleteAnomalyMonitorCommandInput extends DeleteAnomalyMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnomalyMonitorCommand}.
 */
export interface DeleteAnomalyMonitorCommandOutput extends DeleteAnomalyMonitorResponse, __MetadataBearer {}

/**
 * <p>Deletes a cost anomaly monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CostExplorerClient(config);
 * const input = { // DeleteAnomalyMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnomalyMonitorCommandInput - {@link DeleteAnomalyMonitorCommandInput}
 * @returns {@link DeleteAnomalyMonitorCommandOutput}
 * @see {@link DeleteAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyMonitorCommandOutput} for command's `response` shape.
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
export class DeleteAnomalyMonitorCommand extends $Command
  .classBuilder<
    DeleteAnomalyMonitorCommandInput,
    DeleteAnomalyMonitorCommandOutput,
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
  .s("AWSInsightsIndexService", "DeleteAnomalyMonitor", {})
  .n("CostExplorerClient", "DeleteAnomalyMonitorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnomalyMonitorCommand)
  .de(de_DeleteAnomalyMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnomalyMonitorRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnomalyMonitorCommandInput;
      output: DeleteAnomalyMonitorCommandOutput;
    };
  };
}
