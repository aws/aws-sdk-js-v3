// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStackSetInput, DeleteStackSetOutput } from "../models/models_0";
import { de_DeleteStackSetCommand, se_DeleteStackSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStackSetCommand}.
 */
export interface DeleteStackSetCommandInput extends DeleteStackSetInput {}
/**
 * @public
 *
 * The output of {@link DeleteStackSetCommand}.
 */
export interface DeleteStackSetCommandOutput extends DeleteStackSetOutput, __MetadataBearer {}

/**
 * <p>Deletes a stack set. Before you can delete a stack set, all its member stack instances
 *       must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DeleteStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DeleteStackSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStackSetCommandInput - {@link DeleteStackSetCommandInput}
 * @returns {@link DeleteStackSetCommandOutput}
 * @see {@link DeleteStackSetCommandInput} for command's `input` shape.
 * @see {@link DeleteStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack
 *    set at a given time.</p>
 *
 * @throws {@link StackSetNotEmptyException} (client fault)
 *  <p>You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack
 *    instances from the stack set before deleting the stack set.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DeleteStackSetCommand extends $Command
  .classBuilder<
    DeleteStackSetCommandInput,
    DeleteStackSetCommandOutput,
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
  .s("CloudFormation", "DeleteStackSet", {})
  .n("CloudFormationClient", "DeleteStackSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStackSetCommand)
  .de(de_DeleteStackSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStackSetInput;
      output: {};
    };
    sdk: {
      input: DeleteStackSetCommandInput;
      output: DeleteStackSetCommandOutput;
    };
  };
}
