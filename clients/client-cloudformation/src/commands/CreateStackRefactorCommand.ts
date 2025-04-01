// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStackRefactorInput, CreateStackRefactorOutput } from "../models/models_0";
import { de_CreateStackRefactorCommand, se_CreateStackRefactorCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStackRefactorCommand}.
 */
export interface CreateStackRefactorCommandInput extends CreateStackRefactorInput {}
/**
 * @public
 *
 * The output of {@link CreateStackRefactorCommand}.
 */
export interface CreateStackRefactorCommandOutput extends CreateStackRefactorOutput, __MetadataBearer {}

/**
 * <p>Creates a refactor across multiple stacks, with the list of stacks and resources that are
 *       affected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackRefactorCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackRefactorCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // CreateStackRefactorInput
 *   Description: "STRING_VALUE",
 *   EnableStackCreation: true || false,
 *   ResourceMappings: [ // ResourceMappings
 *     { // ResourceMapping
 *       Source: { // ResourceLocation
 *         StackName: "STRING_VALUE", // required
 *         LogicalResourceId: "STRING_VALUE", // required
 *       },
 *       Destination: {
 *         StackName: "STRING_VALUE", // required
 *         LogicalResourceId: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   StackDefinitions: [ // StackDefinitions // required
 *     { // StackDefinition
 *       StackName: "STRING_VALUE",
 *       TemplateBody: "STRING_VALUE",
 *       TemplateURL: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateStackRefactorCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackRefactorOutput
 * //   StackRefactorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateStackRefactorCommandInput - {@link CreateStackRefactorCommandInput}
 * @returns {@link CreateStackRefactorCommandOutput}
 * @see {@link CreateStackRefactorCommandInput} for command's `input` shape.
 * @see {@link CreateStackRefactorCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class CreateStackRefactorCommand extends $Command
  .classBuilder<
    CreateStackRefactorCommandInput,
    CreateStackRefactorCommandOutput,
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
  .s("CloudFormation", "CreateStackRefactor", {})
  .n("CloudFormationClient", "CreateStackRefactorCommand")
  .f(void 0, void 0)
  .ser(se_CreateStackRefactorCommand)
  .de(de_CreateStackRefactorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackRefactorInput;
      output: CreateStackRefactorOutput;
    };
    sdk: {
      input: CreateStackRefactorCommandInput;
      output: CreateStackRefactorCommandOutput;
    };
  };
}
