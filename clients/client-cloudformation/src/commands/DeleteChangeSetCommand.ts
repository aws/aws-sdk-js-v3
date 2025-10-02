// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChangeSetInput, DeleteChangeSetOutput } from "../models/models_0";
import { de_DeleteChangeSetCommand, se_DeleteChangeSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChangeSetCommand}.
 */
export interface DeleteChangeSetCommandInput extends DeleteChangeSetInput {}
/**
 * @public
 *
 * The output of {@link DeleteChangeSetCommand}.
 */
export interface DeleteChangeSetCommandOutput extends DeleteChangeSetOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the
 *       wrong change set.</p>
 *          <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p>
 *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the
 *       nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong
 *       to the stacks hierarchy and will also delete all change sets for nested stacks with the status
 *       of <code>REVIEW_IN_PROGRESS</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DeleteChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 * };
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChangeSetCommandInput - {@link DeleteChangeSetCommandInput}
 * @returns {@link DeleteChangeSetCommandOutput}
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidChangeSetStatusException} (client fault)
 *  <p>The specified change set can't be used to update the stack. For example, the change set status might be
 *    <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DeleteChangeSetCommand extends $Command
  .classBuilder<
    DeleteChangeSetCommandInput,
    DeleteChangeSetCommandOutput,
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
  .s("CloudFormation", "DeleteChangeSet", {})
  .n("CloudFormationClient", "DeleteChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChangeSetCommand)
  .de(de_DeleteChangeSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChangeSetInput;
      output: {};
    };
    sdk: {
      input: DeleteChangeSetCommandInput;
      output: DeleteChangeSetCommandOutput;
    };
  };
}
