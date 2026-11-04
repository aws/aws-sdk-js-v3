// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountPoliciesRequest, DescribeAccountPoliciesResponse } from "../models/models_0";
import { DescribeAccountPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of all CloudWatch Logs account policies in the account.
 *
 * To use this operation, you must be signed on with the correct permissions depending on the type of policy that you are retrieving information for.
 *
 * - To see data protection policies, you must have the `logs:GetDataProtectionPolicy` and `logs:DescribeAccountPolicies` permissions.
 * - To see subscription filter policies, you must have the `logs:DescribeSubscriptionFilters` and `logs:DescribeAccountPolicies` permissions.
 * - To see transformer policies, you must have the `logs:GetTransformer` and `logs:DescribeAccountPolicies` permissions.
 * - To see field index policies, you must have the `logs:DescribeIndexPolicies` and `logs:DescribeAccountPolicies` permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeAccountPoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeAccountPoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeAccountPoliciesRequest
 *   policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY" || "RETENTION_POLICY", // required
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
 * //       policyType: "DATA_PROTECTION_POLICY" || "SUBSCRIPTION_FILTER_POLICY" || "FIELD_INDEX_POLICY" || "TRANSFORMER_POLICY" || "METRIC_EXTRACTION_POLICY" || "RETENTION_POLICY",
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
export class DescribeAccountPoliciesCommand extends command<DescribeAccountPoliciesCommandInput, DescribeAccountPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountPolicies",
  DescribeAccountPolicies$
) {
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
