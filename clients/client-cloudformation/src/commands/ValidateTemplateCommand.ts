// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ValidateTemplateInput, ValidateTemplateOutput } from "../models/models_1";
import { ValidateTemplate } from "../schemas/schemas_14_Stack";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateTemplateCommand}.
 */
export interface ValidateTemplateCommandInput extends ValidateTemplateInput {}
/**
 * @public
 *
 * The output of {@link ValidateTemplateCommand}.
 */
export interface ValidateTemplateCommandOutput extends ValidateTemplateOutput, __MetadataBearer {}

/**
 * <p>Validates a specified template. CloudFormation first checks if the template is valid JSON. If
 *       it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail,
 *       CloudFormation returns a template validation error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ValidateTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ValidateTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ValidateTemplateInput
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 * };
 * const command = new ValidateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ValidateTemplateOutput
 * //   Parameters: [ // TemplateParameters
 * //     { // TemplateParameter
 * //       ParameterKey: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       NoEcho: true || false,
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   Capabilities: [ // Capabilities
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //   ],
 * //   CapabilitiesReason: "STRING_VALUE",
 * //   DeclaredTransforms: [ // TransformsList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateTemplateCommandInput - {@link ValidateTemplateCommandInput}
 * @returns {@link ValidateTemplateCommandOutput}
 * @see {@link ValidateTemplateCommandInput} for command's `input` shape.
 * @see {@link ValidateTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ValidateTemplateCommand extends $Command
  .classBuilder<
    ValidateTemplateCommandInput,
    ValidateTemplateCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ValidateTemplate", {})
  .n("CloudFormationClient", "ValidateTemplateCommand")
  .sc(ValidateTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateTemplateInput;
      output: ValidateTemplateOutput;
    };
    sdk: {
      input: ValidateTemplateCommandInput;
      output: ValidateTemplateCommandOutput;
    };
  };
}
