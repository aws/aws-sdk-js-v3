// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccountPolicyRequest } from "../models/models_0";
import { DeleteAccountPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountPolicyCommand}.
 */
export interface DeleteAccountPolicyCommandInput extends DeleteAccountPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPolicyCommand}.
 */
export interface DeleteAccountPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a CloudWatch Logs account policy. This stops the account-wide policy from
 *       applying to log groups or data sources in the account. If you delete a data protection policy
 *       or subscription filter policy, any log-group level policies of those types remain in effect.
 *       This operation supports deletion of data source-based field index policies, including facet
 *       configurations, in addition to log group-based policies.</p>
 *          <p>To use this operation, you must be signed on with the correct permissions depending on the
 *       type of policy that you are deleting.</p>
 *          <ul>
 *             <li>
 *                <p>To delete a data protection policy, you must have the
 *             <code>logs:DeleteDataProtectionPolicy</code> and <code>logs:DeleteAccountPolicy</code>
 *           permissions.</p>
 *             </li>
 *             <li>
 *                <p>To delete a subscription filter policy, you must have the
 *             <code>logs:DeleteSubscriptionFilter</code> and <code>logs:DeleteAccountPolicy</code>
 *           permissions.</p>
 *             </li>
 *             <li>
 *                <p>To delete a transformer policy, you must have the <code>logs:DeleteTransformer</code>
 *           and <code>logs:DeleteAccountPolicy</code> permissions.</p>
 *             </li>
 *             <li>
 *                <p>To delete a field index policy, you must have the <code>logs:DeleteIndexPolicy</code>
 *           and <code>logs:DeleteAccountPolicy</code> permissions.</p>
 *                <p>If you delete a field index policy that included facet configurations, those facets
 *           will no longer be available for interactive exploration in the CloudWatch Logs Insights
 *           console. However, facet data is retained for up to 30 days.</p>
 *             </li>
 *          </ul>
 *          <p>If you delete a field index policy, the indexing of the log events that happened before
 *       you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs
 *       Insights queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteAccountPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteAccountPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteAccountPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY", // required
 * };
 * const command = new DeleteAccountPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPolicyCommandInput - {@link DeleteAccountPolicyCommandInput}
 * @returns {@link DeleteAccountPolicyCommandOutput}
 * @see {@link DeleteAccountPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAccountPolicyCommand extends $Command
  .classBuilder<
    DeleteAccountPolicyCommandInput,
    DeleteAccountPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteAccountPolicy", {})
  .n("CloudWatchLogsClient", "DeleteAccountPolicyCommand")
  .sc(DeleteAccountPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountPolicyCommandInput;
      output: DeleteAccountPolicyCommandOutput;
    };
  };
}
