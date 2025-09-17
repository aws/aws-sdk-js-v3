// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/models_0";
import { de_DescribeAccountLimitsCommand, se_DescribeAccountLimitsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandInput extends DescribeAccountLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsOutput, __MetadataBearer {}

/**
 * <p>Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you
 *       can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Understand CloudFormation quotas</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeAccountLimitsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountLimitsOutput
 * //   AccountLimits: [ // AccountLimitList
 * //     { // AccountLimit
 * //       Name: "STRING_VALUE",
 * //       Value: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountLimitsCommandInput - {@link DescribeAccountLimitsCommandInput}
 * @returns {@link DescribeAccountLimitsCommandOutput}
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeAccountLimitsCommand extends $Command
  .classBuilder<
    DescribeAccountLimitsCommandInput,
    DescribeAccountLimitsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribeAccountLimits", {})
  .n("CloudFormationClient", "DescribeAccountLimitsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountLimitsCommand)
  .de(de_DescribeAccountLimitsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountLimitsInput;
      output: DescribeAccountLimitsOutput;
    };
    sdk: {
      input: DescribeAccountLimitsCommandInput;
      output: DescribeAccountLimitsCommandOutput;
    };
  };
}
