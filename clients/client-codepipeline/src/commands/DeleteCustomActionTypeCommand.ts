// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomActionTypeInput } from "../models/models_0";
import { de_DeleteCustomActionTypeCommand, se_DeleteCustomActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomActionTypeCommand}.
 */
export interface DeleteCustomActionTypeCommandInput extends DeleteCustomActionTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteCustomActionTypeCommand}.
 */
export interface DeleteCustomActionTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
 *             fails after the action is marked for deletion. Used for custom actions only.</p>
 *          <important>
 *             <p>To re-create a custom action after it has been deleted you must use a string in
 *                 the version field that has never been used before. This string can be an incremented
 *                 version number, for example. To restore a deleted custom action, use a JSON file
 *                 that is identical to the deleted action, including the original string in the
 *                 version field.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // DeleteCustomActionTypeInput
 *   category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomActionTypeCommandInput - {@link DeleteCustomActionTypeCommandInput}
 * @returns {@link DeleteCustomActionTypeCommandOutput}
 * @see {@link DeleteCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class DeleteCustomActionTypeCommand extends $Command
  .classBuilder<
    DeleteCustomActionTypeCommandInput,
    DeleteCustomActionTypeCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "DeleteCustomActionType", {})
  .n("CodePipelineClient", "DeleteCustomActionTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomActionTypeCommand)
  .de(de_DeleteCustomActionTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomActionTypeInput;
      output: {};
    };
    sdk: {
      input: DeleteCustomActionTypeCommandInput;
      output: DeleteCustomActionTypeCommandOutput;
    };
  };
}
