// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTemplateInput, GetTemplateOutput } from "../models/models_0";
import { GetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandInput extends GetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandOutput extends GetTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns the template body for a specified stack. You can get the template for running or
 *       deleted stacks.</p>
 *          <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after
 *       the stack has been deleted.</p>
 *          <note>
 *             <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // GetTemplateInput
 *   StackName: "STRING_VALUE",
 *   ChangeSetName: "STRING_VALUE",
 *   TemplateStage: "Original" || "Processed",
 * };
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateOutput
 * //   TemplateBody: "STRING_VALUE",
 * //   StagesAvailable: [ // StageList
 * //     "Original" || "Processed",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTemplateCommandInput - {@link GetTemplateCommandInput}
 * @returns {@link GetTemplateCommandOutput}
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class GetTemplateCommand extends $Command
  .classBuilder<
    GetTemplateCommandInput,
    GetTemplateCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "GetTemplate", {})
  .n("CloudFormationClient", "GetTemplateCommand")
  .sc(GetTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateInput;
      output: GetTemplateOutput;
    };
    sdk: {
      input: GetTemplateCommandInput;
      output: GetTemplateCommandOutput;
    };
  };
}
