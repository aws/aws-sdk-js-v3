// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountPolicyRequest, DeleteAccountPolicyResponse } from "../models/models_0";
import { DeleteAccountPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteAccountPolicyCommandOutput extends DeleteAccountPolicyResponse, __MetadataBearer {}

/**
 * Deletes a CloudWatch Logs account policy. This stops the account-wide policy from applying to log groups or data sources in the account. If you delete a data protection policy or subscription filter policy, any log-group level policies of those types remain in effect. This operation supports deletion of data source-based field index policies, including facet configurations, in addition to log group-based policies.
 *
 * To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are deleting.
 *
 * - To delete a data protection policy, you must have the `logs:DeleteDataProtectionPolicy` and `logs:DeleteAccountPolicy` permissions.
 * - To delete a subscription filter policy, you must have the `logs:DeleteSubscriptionFilter` and `logs:DeleteAccountPolicy` permissions.
 * - To delete a transformer policy, you must have the `logs:DeleteTransformer` and `logs:DeleteAccountPolicy` permissions.
 * - To delete a field index policy, you must have the `logs:DeleteIndexPolicy` and `logs:DeleteAccountPolicy` permissions.
 *
 *   If you delete a field index policy that included facet configurations, those facets will no longer be available for interactive exploration in the CloudWatch Logs Insights console. However, facet data is retained for up to 30 days.
 *
 * If you delete a field index policy, the indexing of the log events that happened before you deleted the policy will still be used for up to 30 days to improve CloudWatch Logs Insights queries.
 *
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
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY" || "RETENTION_POLICY", // required
 *   dryRun: true || false,
 * };
 * const command = new DeleteAccountPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountPolicyResponse
 * //   dryRunResult: { // DryRunResult
 * //     totalMatchedLogGroups: Number("int"),
 * //     increasedRetentionLogGroupCount: Number("int"),
 * //     decreasedRetentionLogGroupCount: Number("int"),
 * //     unchangedRetentionLogGroupCount: Number("int"),
 * //     failedAnalysisCount: Number("int"),
 * //     topLogGroupsImpacted: [ // LogGroupImpacts
 * //       { // LogGroupImpact
 * //         logGroupName: "STRING_VALUE",
 * //         currentRetention: "STRING_VALUE",
 * //         proposedRetention: "STRING_VALUE",
 * //         storedBytes: Number("long"),
 * //       },
 * //     ],
 * //   },
 * // };
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DeleteAccountPolicyCommand extends command<DeleteAccountPolicyCommandInput, DeleteAccountPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountPolicy",
  DeleteAccountPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountPolicyRequest;
      output: DeleteAccountPolicyResponse;
    };
    sdk: {
      input: DeleteAccountPolicyCommandInput;
      output: DeleteAccountPolicyCommandOutput;
    };
  };
}
