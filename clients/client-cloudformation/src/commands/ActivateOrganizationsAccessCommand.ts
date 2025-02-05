// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateOrganizationsAccessInput, ActivateOrganizationsAccessOutput } from "../models/models_0";
import { de_ActivateOrganizationsAccessCommand, se_ActivateOrganizationsAccessCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateOrganizationsAccessCommand}.
 */
export interface ActivateOrganizationsAccessCommandInput extends ActivateOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link ActivateOrganizationsAccessCommand}.
 */
export interface ActivateOrganizationsAccessCommandOutput extends ActivateOrganizationsAccessOutput, __MetadataBearer {}

/**
 * <p>Activate trusted access with Organizations. With trusted access between StackSets
 *       and Organizations activated, the management account has permissions to create
 *       and manage StackSets for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ActivateOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ActivateOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = {};
 * const command = new ActivateOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateOrganizationsAccessCommandInput - {@link ActivateOrganizationsAccessCommandInput}
 * @returns {@link ActivateOrganizationsAccessCommandOutput}
 * @see {@link ActivateOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link ActivateOrganizationsAccessCommandOutput} for command's `response` shape.
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
export class ActivateOrganizationsAccessCommand extends $Command
  .classBuilder<
    ActivateOrganizationsAccessCommandInput,
    ActivateOrganizationsAccessCommandOutput,
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
  .s("CloudFormation", "ActivateOrganizationsAccess", {})
  .n("CloudFormationClient", "ActivateOrganizationsAccessCommand")
  .f(void 0, void 0)
  .ser(se_ActivateOrganizationsAccessCommand)
  .de(de_ActivateOrganizationsAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ActivateOrganizationsAccessCommandInput;
      output: ActivateOrganizationsAccessCommandOutput;
    };
  };
}
