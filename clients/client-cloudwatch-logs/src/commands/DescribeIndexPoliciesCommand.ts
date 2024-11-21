// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIndexPoliciesRequest, DescribeIndexPoliciesResponse } from "../models/models_0";
import { de_DescribeIndexPoliciesCommand, se_DescribeIndexPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIndexPoliciesCommand}.
 */
export interface DescribeIndexPoliciesCommandInput extends DescribeIndexPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexPoliciesCommand}.
 */
export interface DescribeIndexPoliciesCommandOutput extends DescribeIndexPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns the field index policies of
 *       one or more log groups. For more information about field index policies, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
 *          <p>If a specified log group has a log-group level index policy, that policy is returned by this operation.</p>
 *          <p>If a specified log group doesn't have a log-group level index policy, but an account-wide index policy applies to it,
 *       that account-wide policy is returned by this operation.</p>
 *          <p>To find information about only account-level policies, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeAccountPolicies.html">DescribeAccountPolicies</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeIndexPoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeIndexPoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeIndexPoliciesRequest
 *   logGroupIdentifiers: [ // DescribeIndexPoliciesLogGroupIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeIndexPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIndexPoliciesResponse
 * //   indexPolicies: [ // IndexPolicies
 * //     { // IndexPolicy
 * //       logGroupIdentifier: "STRING_VALUE",
 * //       lastUpdateTime: Number("long"),
 * //       policyDocument: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       source: "ACCOUNT" || "LOG_GROUP",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIndexPoliciesCommandInput - {@link DescribeIndexPoliciesCommandInput}
 * @returns {@link DescribeIndexPoliciesCommandOutput}
 * @see {@link DescribeIndexPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
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
 * @public
 */
export class DescribeIndexPoliciesCommand extends $Command
  .classBuilder<
    DescribeIndexPoliciesCommandInput,
    DescribeIndexPoliciesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DescribeIndexPolicies", {})
  .n("CloudWatchLogsClient", "DescribeIndexPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIndexPoliciesCommand)
  .de(de_DescribeIndexPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIndexPoliciesRequest;
      output: DescribeIndexPoliciesResponse;
    };
    sdk: {
      input: DescribeIndexPoliciesCommandInput;
      output: DescribeIndexPoliciesCommandOutput;
    };
  };
}
