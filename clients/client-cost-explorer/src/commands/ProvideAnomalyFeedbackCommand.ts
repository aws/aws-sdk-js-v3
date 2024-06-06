// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvideAnomalyFeedbackRequest, ProvideAnomalyFeedbackResponse } from "../models/models_0";
import { de_ProvideAnomalyFeedbackCommand, se_ProvideAnomalyFeedbackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvideAnomalyFeedbackCommand}.
 */
export interface ProvideAnomalyFeedbackCommandInput extends ProvideAnomalyFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link ProvideAnomalyFeedbackCommand}.
 */
export interface ProvideAnomalyFeedbackCommandOutput extends ProvideAnomalyFeedbackResponse, __MetadataBearer {}

/**
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ProvideAnomalyFeedbackCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ProvideAnomalyFeedbackCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ProvideAnomalyFeedbackRequest
 *   AnomalyId: "STRING_VALUE", // required
 *   Feedback: "YES" || "NO" || "PLANNED_ACTIVITY", // required
 * };
 * const command = new ProvideAnomalyFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // ProvideAnomalyFeedbackResponse
 * //   AnomalyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ProvideAnomalyFeedbackCommandInput - {@link ProvideAnomalyFeedbackCommandInput}
 * @returns {@link ProvideAnomalyFeedbackCommandOutput}
 * @see {@link ProvideAnomalyFeedbackCommandInput} for command's `input` shape.
 * @see {@link ProvideAnomalyFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class ProvideAnomalyFeedbackCommand extends $Command
  .classBuilder<
    ProvideAnomalyFeedbackCommandInput,
    ProvideAnomalyFeedbackCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "ProvideAnomalyFeedback", {})
  .n("CostExplorerClient", "ProvideAnomalyFeedbackCommand")
  .f(void 0, void 0)
  .ser(se_ProvideAnomalyFeedbackCommand)
  .de(de_ProvideAnomalyFeedbackCommand)
  .build() {}
