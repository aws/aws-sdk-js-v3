// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTerminationProtectionInput, UpdateTerminationProtectionOutput } from "../models/models_0";
import { UpdateTerminationProtection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTerminationProtectionCommand}.
 */
export interface UpdateTerminationProtectionCommandInput extends UpdateTerminationProtectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateTerminationProtectionCommand}.
 */
export interface UpdateTerminationProtectionCommandOutput extends UpdateTerminationProtectionOutput, __MetadataBearer {}

/**
 * <p>Updates termination protection for the specified stack. If a user attempts to delete a
 *       stack with termination protection enabled, the operation fails and the stack remains
 *       unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protect a CloudFormation
 *         stack from being deleted</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
 *       termination protection is set on the root stack and can't be changed directly on the nested
 *       stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateTerminationProtectionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateTerminationProtectionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // UpdateTerminationProtectionInput
 *   EnableTerminationProtection: true || false, // required
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new UpdateTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTerminationProtectionOutput
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTerminationProtectionCommandInput - {@link UpdateTerminationProtectionCommandInput}
 * @returns {@link UpdateTerminationProtectionCommandOutput}
 * @see {@link UpdateTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateTerminationProtectionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class UpdateTerminationProtectionCommand extends $Command
  .classBuilder<
    UpdateTerminationProtectionCommandInput,
    UpdateTerminationProtectionCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "UpdateTerminationProtection", {})
  .n("CloudFormationClient", "UpdateTerminationProtectionCommand")
  .sc(UpdateTerminationProtection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTerminationProtectionInput;
      output: UpdateTerminationProtectionOutput;
    };
    sdk: {
      input: UpdateTerminationProtectionCommandInput;
      output: UpdateTerminationProtectionCommandOutput;
    };
  };
}
