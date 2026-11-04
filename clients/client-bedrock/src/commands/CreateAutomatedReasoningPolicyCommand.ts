// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAutomatedReasoningPolicyRequest, CreateAutomatedReasoningPolicyResponse } from "../models/models_0";
import { CreateAutomatedReasoningPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateAutomatedReasoningPolicyCommandOutput extends CreateAutomatedReasoningPolicyResponse, __MetadataBearer {}

/**
 * Creates an Automated Reasoning policy for Amazon Bedrock Guardrails. Automated Reasoning policies use mathematical techniques to detect hallucinations, suggest corrections, and highlight unstated assumptions in the responses of your GenAI application.
 *
 * To create a policy, you upload a source document that describes the rules that you're encoding. Automated Reasoning extracts important concepts from the source document that will become variables in the policy and infers policy rules.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateAutomatedReasoningPolicyCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateAutomatedReasoningPolicyCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
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
 *   kmsKeyId: "STRING_VALUE",
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class CreateAutomatedReasoningPolicyCommand extends command<CreateAutomatedReasoningPolicyCommandInput, CreateAutomatedReasoningPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutomatedReasoningPolicy",
  CreateAutomatedReasoningPolicy$
) {
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
