// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportAutomatedReasoningPolicyVersionRequest,
  ExportAutomatedReasoningPolicyVersionResponse,
} from "../models/models_0";
import { ExportAutomatedReasoningPolicyVersion } from "../schemas/schemas_2_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportAutomatedReasoningPolicyVersionCommand}.
 */
export interface ExportAutomatedReasoningPolicyVersionCommandInput
  extends ExportAutomatedReasoningPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link ExportAutomatedReasoningPolicyVersionCommand}.
 */
export interface ExportAutomatedReasoningPolicyVersionCommandOutput
  extends ExportAutomatedReasoningPolicyVersionResponse,
    __MetadataBearer {}

/**
 * <p>Exports the policy definition for an Automated Reasoning policy version. Returns the complete policy definition including rules, variables, and custom variable types in a structured format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ExportAutomatedReasoningPolicyVersionCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ExportAutomatedReasoningPolicyVersionCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ExportAutomatedReasoningPolicyVersionRequest
 *   policyArn: "STRING_VALUE", // required
 * };
 * const command = new ExportAutomatedReasoningPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // ExportAutomatedReasoningPolicyVersionResponse
 * //   policyDefinition: { // AutomatedReasoningPolicyDefinition
 * //     version: "STRING_VALUE",
 * //     types: [ // AutomatedReasoningPolicyDefinitionTypeList
 * //       { // AutomatedReasoningPolicyDefinitionType
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         values: [ // AutomatedReasoningPolicyDefinitionTypeValueList // required
 * //           { // AutomatedReasoningPolicyDefinitionTypeValue
 * //             value: "STRING_VALUE", // required
 * //             description: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     rules: [ // AutomatedReasoningPolicyDefinitionRuleList
 * //       { // AutomatedReasoningPolicyDefinitionRule
 * //         id: "STRING_VALUE", // required
 * //         expression: "STRING_VALUE", // required
 * //         alternateExpression: "STRING_VALUE",
 * //       },
 * //     ],
 * //     variables: [ // AutomatedReasoningPolicyDefinitionVariableList
 * //       { // AutomatedReasoningPolicyDefinitionVariable
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportAutomatedReasoningPolicyVersionCommandInput - {@link ExportAutomatedReasoningPolicyVersionCommandInput}
 * @returns {@link ExportAutomatedReasoningPolicyVersionCommandOutput}
 * @see {@link ExportAutomatedReasoningPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link ExportAutomatedReasoningPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class ExportAutomatedReasoningPolicyVersionCommand extends $Command
  .classBuilder<
    ExportAutomatedReasoningPolicyVersionCommandInput,
    ExportAutomatedReasoningPolicyVersionCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "ExportAutomatedReasoningPolicyVersion", {})
  .n("BedrockClient", "ExportAutomatedReasoningPolicyVersionCommand")
  .sc(ExportAutomatedReasoningPolicyVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportAutomatedReasoningPolicyVersionRequest;
      output: ExportAutomatedReasoningPolicyVersionResponse;
    };
    sdk: {
      input: ExportAutomatedReasoningPolicyVersionCommandInput;
      output: ExportAutomatedReasoningPolicyVersionCommandOutput;
    };
  };
}
