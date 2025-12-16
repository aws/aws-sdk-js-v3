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
import type { DescribeAccountPoliciesRequest, DescribeAccountPoliciesResponse } from "../models/models_0";
import { DescribeAccountPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandInput extends DescribeAccountPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandOutput extends DescribeAccountPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all CloudWatch Logs account policies in the account.</p>
 *          <p>To use this operation, you must be signed on with the correct permissions depending on the
 *       type of policy that you are retrieving information for.</p>
 *          <ul>
 *             <li>
 *                <p>To see data protection policies, you must have the
 *             <code>logs:GetDataProtectionPolicy</code> and <code>logs:DescribeAccountPolicies</code>
 *           permissions.</p>
 *             </li>
 *             <li>
 *                <p>To see subscription filter policies, you must have the
 *             <code>logs:DescribeSubscriptionFilters</code> and
 *             <code>logs:DescribeAccountPolicies</code> permissions.</p>
 *             </li>
 *             <li>
 *                <p>To see transformer policies, you must have the <code>logs:GetTransformer</code> and
 *             <code>logs:DescribeAccountPolicies</code> permissions.</p>
 *             </li>
 *             <li>
 *                <p>To see field index policies, you must have the <code>logs:DescribeIndexPolicies</code>
 *           and <code>logs:DescribeAccountPolicies</code> permissions.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeAccountPoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeAccountPoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeAccountPoliciesRequest
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY", // required
 *   policyName: "STRING_VALUE",
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAccountPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountPoliciesResponse
 * //   accountPolicies: [ // AccountPolicies
 * //     { // AccountPolicy
 * //       policyName: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //       lastUpdatedTime: Number("long"),
 * //       policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY",
 * //       scope: "ALL",
 * //       selectionCriteria: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountPoliciesCommandInput - {@link DescribeAccountPoliciesCommandInput}
 * @returns {@link DescribeAccountPoliciesCommandOutput}
 * @see {@link DescribeAccountPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPoliciesCommandOutput} for command's `response` shape.
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
export class DescribeAccountPoliciesCommand extends $Command
  .classBuilder<
    DescribeAccountPoliciesCommandInput,
    DescribeAccountPoliciesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeAccountPolicies", {})
  .n("CloudWatchLogsClient", "DescribeAccountPoliciesCommand")
  .sc(DescribeAccountPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountPoliciesRequest;
      output: DescribeAccountPoliciesResponse;
    };
    sdk: {
      input: DescribeAccountPoliciesCommandInput;
      output: DescribeAccountPoliciesCommandOutput;
    };
  };
}
