// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import { de_DeleteWebhookCommand, se_DeleteWebhookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebhookCommand}.
 */
export interface DeleteWebhookCommandInput extends DeleteWebhookInput {}
/**
 * @public
 *
 * The output of {@link DeleteWebhookCommand}.
 */
export interface DeleteWebhookCommandOutput extends DeleteWebhookOutput, __MetadataBearer {}

/**
 * <p>Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API
 *             returns successfully when trying to delete a webhook that is already deleted. If a
 *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 *             different URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // DeleteWebhookInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebhookCommandInput - {@link DeleteWebhookCommandInput}
 * @returns {@link DeleteWebhookCommandOutput}
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
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
export class DeleteWebhookCommand extends $Command
  .classBuilder<
    DeleteWebhookCommandInput,
    DeleteWebhookCommandOutput,
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
  .s("CodePipeline_20150709", "DeleteWebhook", {})
  .n("CodePipelineClient", "DeleteWebhookCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWebhookCommand)
  .de(de_DeleteWebhookCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebhookInput;
      output: {};
    };
    sdk: {
      input: DeleteWebhookCommandInput;
      output: DeleteWebhookCommandOutput;
    };
  };
}
