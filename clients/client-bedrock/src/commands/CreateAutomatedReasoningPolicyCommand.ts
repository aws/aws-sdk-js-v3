// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAutomatedReasoningPolicyRequest,
  CreateAutomatedReasoningPolicyRequestFilterSensitiveLog,
  CreateAutomatedReasoningPolicyResponse,
  CreateAutomatedReasoningPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateAutomatedReasoningPolicyCommand,
  se_CreateAutomatedReasoningPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutomatedReasoningPolicyCommand}.
 */
export interface CreateAutomatedReasoningPolicyCommandInput extends CreateAutomatedReasoningPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutomatedReasoningPolicyCommand}.
 */
export interface CreateAutomatedReasoningPolicyCommandOutput
  extends CreateAutomatedReasoningPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Automated Reasoning policy for Amazon Bedrock Guardrails. Automated Reasoning policies use mathematical techniques to detect hallucinations, suggest corrections, and highlight unstated assumptions in the responses of your GenAI application.</p> <p>To create a policy, you upload a source document that describes the rules that you're encoding. Automated Reasoning extracts important concepts from the source document that will become variables in the policy and infers policy rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateAutomatedReasoningPolicyCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateAutomatedReasoningPolicyCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateAutomatedReasoningPolicyRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
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
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAutomatedReasoningPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutomatedReasoningPolicyResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   definitionHash: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAutomatedReasoningPolicyCommandInput - {@link CreateAutomatedReasoningPolicyCommandInput}
 * @returns {@link CreateAutomatedReasoningPolicyCommandOutput}
 * @see {@link CreateAutomatedReasoningPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAutomatedReasoningPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateAutomatedReasoningPolicyCommand extends $Command
  .classBuilder<
    CreateAutomatedReasoningPolicyCommandInput,
    CreateAutomatedReasoningPolicyCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicy", {})
  .n("BedrockClient", "CreateAutomatedReasoningPolicyCommand")
  .f(CreateAutomatedReasoningPolicyRequestFilterSensitiveLog, CreateAutomatedReasoningPolicyResponseFilterSensitiveLog)
  .ser(se_CreateAutomatedReasoningPolicyCommand)
  .de(de_CreateAutomatedReasoningPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutomatedReasoningPolicyRequest;
      output: CreateAutomatedReasoningPolicyResponse;
    };
    sdk: {
      input: CreateAutomatedReasoningPolicyCommandInput;
      output: CreateAutomatedReasoningPolicyCommandOutput;
    };
  };
}
