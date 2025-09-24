// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAutomatedReasoningPolicyRequest, UpdateAutomatedReasoningPolicyResponse } from "../models/models_0";
import { UpdateAutomatedReasoningPolicy } from "../schemas/schemas_2_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutomatedReasoningPolicyCommand}.
 */
export interface UpdateAutomatedReasoningPolicyCommandInput extends UpdateAutomatedReasoningPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutomatedReasoningPolicyCommand}.
 */
export interface UpdateAutomatedReasoningPolicyCommandOutput
  extends UpdateAutomatedReasoningPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Automated Reasoning policy with new rules, variables, or configuration. This creates a new version of the policy while preserving the previous version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateAutomatedReasoningPolicyCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateAutomatedReasoningPolicyCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // UpdateAutomatedReasoningPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 *   policyDefinition: { // AutomatedReasoningPolicyDefinition
 *     version: "STRING_VALUE",
 *     types: [ // AutomatedReasoningPolicyDefinitionTypeList
 *       { // AutomatedReasoningPolicyDefinitionType
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         values: [ // AutomatedReasoningPolicyDefinitionTypeValueList // required
 *           { // AutomatedReasoningPolicyDefinitionTypeValue
 *             value: "STRING_VALUE", // required
 *             description: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     rules: [ // AutomatedReasoningPolicyDefinitionRuleList
 *       { // AutomatedReasoningPolicyDefinitionRule
 *         id: "STRING_VALUE", // required
 *         expression: "STRING_VALUE", // required
 *         alternateExpression: "STRING_VALUE",
 *       },
 *     ],
 *     variables: [ // AutomatedReasoningPolicyDefinitionVariableList
 *       { // AutomatedReasoningPolicyDefinitionVariable
 *         name: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         description: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAutomatedReasoningPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutomatedReasoningPolicyResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   definitionHash: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAutomatedReasoningPolicyCommandInput - {@link UpdateAutomatedReasoningPolicyCommandInput}
 * @returns {@link UpdateAutomatedReasoningPolicyCommandOutput}
 * @see {@link UpdateAutomatedReasoningPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomatedReasoningPolicyCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
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
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
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
export class UpdateAutomatedReasoningPolicyCommand extends $Command
  .classBuilder<
    UpdateAutomatedReasoningPolicyCommandInput,
    UpdateAutomatedReasoningPolicyCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicy", {})
  .n("BedrockClient", "UpdateAutomatedReasoningPolicyCommand")
  .sc(UpdateAutomatedReasoningPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutomatedReasoningPolicyRequest;
      output: UpdateAutomatedReasoningPolicyResponse;
    };
    sdk: {
      input: UpdateAutomatedReasoningPolicyCommandInput;
      output: UpdateAutomatedReasoningPolicyCommandOutput;
    };
  };
}
