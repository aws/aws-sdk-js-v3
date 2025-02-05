// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrganizationsAccessInput, DescribeOrganizationsAccessOutput } from "../models/models_0";
import { de_DescribeOrganizationsAccessCommand, se_DescribeOrganizationsAccessCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandInput extends DescribeOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationsAccessCommand}.
 */
export interface DescribeOrganizationsAccessCommandOutput extends DescribeOrganizationsAccessOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about the account's <code>OrganizationAccess</code> status. This API
 *       can be called either by the management account or the delegated administrator by using the
 *         <code>CallAs</code> parameter. This API can also be called without the <code>CallAs</code>
 *       parameter by the management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeOrganizationsAccessInput
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationsAccessOutput
 * //   Status: "ENABLED" || "DISABLED" || "DISABLED_PERMANENTLY",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationsAccessCommandInput - {@link DescribeOrganizationsAccessCommandInput}
 * @returns {@link DescribeOrganizationsAccessCommandOutput}
 * @see {@link DescribeOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class DescribeOrganizationsAccessCommand extends $Command
  .classBuilder<
    DescribeOrganizationsAccessCommandInput,
    DescribeOrganizationsAccessCommandOutput,
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
  .s("CloudFormation", "DescribeOrganizationsAccess", {})
  .n("CloudFormationClient", "DescribeOrganizationsAccessCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOrganizationsAccessCommand)
  .de(de_DescribeOrganizationsAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationsAccessInput;
      output: DescribeOrganizationsAccessOutput;
    };
    sdk: {
      input: DescribeOrganizationsAccessCommandInput;
      output: DescribeOrganizationsAccessCommandOutput;
    };
  };
}
