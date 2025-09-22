// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGeneratedTemplateInput } from "../models/models_0";
import { DeleteGeneratedTemplate } from "../schemas/schemas_26_Generated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGeneratedTemplateCommand}.
 */
export interface DeleteGeneratedTemplateCommandInput extends DeleteGeneratedTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteGeneratedTemplateCommand}.
 */
export interface DeleteGeneratedTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deleted a generated template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteGeneratedTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteGeneratedTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DeleteGeneratedTemplateInput
 *   GeneratedTemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGeneratedTemplateCommandInput - {@link DeleteGeneratedTemplateCommandInput}
 * @returns {@link DeleteGeneratedTemplateCommandOutput}
 * @see {@link DeleteGeneratedTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteGeneratedTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentResourcesLimitExceededException} (client fault)
 *  <p>No more than 5 generated templates can be in an <code>InProgress</code> or <code>Pending</code> status at one
 *    time. This error is also returned if a generated template that is in an <code>InProgress</code> or
 *    <code>Pending</code> status is attempted to be updated or deleted.</p>
 *
 * @throws {@link GeneratedTemplateNotFoundException} (client fault)
 *  <p>The generated template was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @example To delete a generated template
 * ```javascript
 * // This example deletes a generated template
 * const input = {
 *   GeneratedTemplateName: "JazzyTemplate"
 * };
 * const command = new DeleteGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteGeneratedTemplateCommand extends $Command
  .classBuilder<
    DeleteGeneratedTemplateCommandInput,
    DeleteGeneratedTemplateCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DeleteGeneratedTemplate", {})
  .n("CloudFormationClient", "DeleteGeneratedTemplateCommand")
  .sc(DeleteGeneratedTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGeneratedTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteGeneratedTemplateCommandInput;
      output: DeleteGeneratedTemplateCommandOutput;
    };
  };
}
