// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAnomalySubscriptionRequest, DeleteAnomalySubscriptionResponse } from "../models/models_0";
import { DeleteAnomalySubscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnomalySubscriptionCommand}.
 */
export interface DeleteAnomalySubscriptionCommandInput extends DeleteAnomalySubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnomalySubscriptionCommand}.
 */
export interface DeleteAnomalySubscriptionCommandOutput extends DeleteAnomalySubscriptionResponse, __MetadataBearer {}

/**
 * <p>Deletes a cost anomaly subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // DeleteAnomalySubscriptionRequest
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnomalySubscriptionCommandInput - {@link DeleteAnomalySubscriptionCommandInput}
 * @returns {@link DeleteAnomalySubscriptionCommandOutput}
 * @see {@link DeleteAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link UnknownSubscriptionException} (client fault)
 *  <p>The cost anomaly subscription does not exist for the account. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class DeleteAnomalySubscriptionCommand extends $Command
  .classBuilder<
    DeleteAnomalySubscriptionCommandInput,
    DeleteAnomalySubscriptionCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "DeleteAnomalySubscription", {})
  .n("CostExplorerClient", "DeleteAnomalySubscriptionCommand")
  .sc(DeleteAnomalySubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnomalySubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnomalySubscriptionCommandInput;
      output: DeleteAnomalySubscriptionCommandOutput;
    };
  };
}
