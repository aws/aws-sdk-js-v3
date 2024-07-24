// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGeneratedTemplateInput, UpdateGeneratedTemplateOutput } from "../models/models_1";
import { de_UpdateGeneratedTemplateCommand, se_UpdateGeneratedTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGeneratedTemplateCommand}.
 */
export interface UpdateGeneratedTemplateCommandInput extends UpdateGeneratedTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateGeneratedTemplateCommand}.
 */
export interface UpdateGeneratedTemplateCommandOutput extends UpdateGeneratedTemplateOutput, __MetadataBearer {}

/**
 * <p>Updates a generated template. This can be used to change the name, add and remove resources, refresh resources,
 *    and change the <code>DeletionPolicy</code> and <code>UpdateReplacePolicy</code> settings. You can check the status of
 *    the update to the generated template using the <code>DescribeGeneratedTemplate</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateGeneratedTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateGeneratedTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // UpdateGeneratedTemplateInput
 *   GeneratedTemplateName: "STRING_VALUE", // required
 *   NewGeneratedTemplateName: "STRING_VALUE",
 *   AddResources: [ // ResourceDefinitions
 *     { // ResourceDefinition
 *       ResourceType: "STRING_VALUE", // required
 *       LogicalResourceId: "STRING_VALUE",
 *       ResourceIdentifier: { // ResourceIdentifierProperties // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   RemoveResources: [ // JazzLogicalResourceIds
 *     "STRING_VALUE",
 *   ],
 *   RefreshAllResources: true || false,
 *   TemplateConfiguration: { // TemplateConfiguration
 *     DeletionPolicy: "DELETE" || "RETAIN",
 *     UpdateReplacePolicy: "DELETE" || "RETAIN",
 *   },
 * };
 * const command = new UpdateGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGeneratedTemplateOutput
 * //   GeneratedTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGeneratedTemplateCommandInput - {@link UpdateGeneratedTemplateCommandInput}
 * @returns {@link UpdateGeneratedTemplateCommandOutput}
 * @see {@link UpdateGeneratedTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateGeneratedTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link GeneratedTemplateNotFoundException} (client fault)
 *  <p>The generated template was not found.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class UpdateGeneratedTemplateCommand extends $Command
  .classBuilder<
    UpdateGeneratedTemplateCommandInput,
    UpdateGeneratedTemplateCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "UpdateGeneratedTemplate", {})
  .n("CloudFormationClient", "UpdateGeneratedTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGeneratedTemplateCommand)
  .de(de_UpdateGeneratedTemplateCommand)
  .build() {}
