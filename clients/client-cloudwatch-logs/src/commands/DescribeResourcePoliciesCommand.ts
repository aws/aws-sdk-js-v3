// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourcePoliciesRequest, DescribeResourcePoliciesResponse } from "../models/models_0";
import { de_DescribeResourcePoliciesCommand, se_DescribeResourcePoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourcePoliciesCommand}.
 */
export interface DescribeResourcePoliciesCommandInput extends DescribeResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePoliciesCommand}.
 */
export interface DescribeResourcePoliciesCommandOutput extends DescribeResourcePoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the resource policies in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeResourcePoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeResourcePoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeResourcePoliciesRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePoliciesResponse
 * //   resourcePolicies: [ // ResourcePolicies
 * //     { // ResourcePolicy
 * //       policyName: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //       lastUpdatedTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourcePoliciesCommandInput - {@link DescribeResourcePoliciesCommandInput}
 * @returns {@link DescribeResourcePoliciesCommandOutput}
 * @see {@link DescribeResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class DescribeResourcePoliciesCommand extends $Command
  .classBuilder<
    DescribeResourcePoliciesCommandInput,
    DescribeResourcePoliciesCommandOutput,
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
  .s("Logs_20140328", "DescribeResourcePolicies", {})
  .n("CloudWatchLogsClient", "DescribeResourcePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourcePoliciesCommand)
  .de(de_DescribeResourcePoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePoliciesRequest;
      output: DescribeResourcePoliciesResponse;
    };
    sdk: {
      input: DescribeResourcePoliciesCommandInput;
      output: DescribeResourcePoliciesCommandOutput;
    };
  };
}
