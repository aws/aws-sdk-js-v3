// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGuardrailRequest, UpdateGuardrailResponse } from "../models/models_1";
import { UpdateGuardrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGuardrailCommand}.
 */
export interface UpdateGuardrailCommandInput extends UpdateGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGuardrailCommand}.
 */
export interface UpdateGuardrailCommandOutput extends UpdateGuardrailResponse, __MetadataBearer {}

/**
 * Updates a guardrail with the values you specify.
 *
 * - Specify a `name` and optional `description`.
 * - Specify messages for when the guardrail successfully blocks a prompt or a model response in the `blockedInputMessaging` and `blockedOutputsMessaging` fields.
 * - Specify topics for the guardrail to deny in the `topicPolicyConfig` object. Each [GuardrailTopicConfig](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailTopicConfig.html) object in the `topicsConfig` list pertains to one topic.
 *
 *   - Give a `name` and `description` so that the guardrail can properly identify the topic.
 *   - Specify `DENY` in the `type` field.
 *   - (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the `examples` list.
 * - Specify filter strengths for the harmful categories defined in Amazon Bedrock in the `contentPolicyConfig` object. Each [GuardrailContentFilterConfig](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html) object in the `filtersConfig` list pertains to a harmful category. For more information, see [Content filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters). For more information about the fields in a content filter, see [GuardrailContentFilterConfig](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html).
 *
 *   - Specify the category in the `type` field.
 *   - Specify the strength of the filter for prompts in the `inputStrength` field and for model responses in the `strength` field of the [GuardrailContentFilterConfig](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html).
 * - (Optional) For security, include the ARN of a KMS key in the `kmsKeyId` field.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateGuardrailCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateGuardrailCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // UpdateGuardrailRequest
 *   guardrailIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   topicPolicyConfig: { // GuardrailTopicPolicyConfig
 *     topicsConfig: [ // GuardrailTopicsConfig // required
 *       { // GuardrailTopicConfig
 *         name: "STRING_VALUE", // required
 *         definition: "STRING_VALUE", // required
 *         examples: [ // GuardrailTopicExamples
 *           "STRING_VALUE",
 *         ],
 *         type: "DENY", // required
 *         inputAction: "BLOCK" || "NONE",
 *         outputAction: "BLOCK" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *     tierConfig: { // GuardrailTopicsTierConfig
 *       tierName: "CLASSIC" || "STANDARD", // required
 *     },
 *   },
 *   contentPolicyConfig: { // GuardrailContentPolicyConfig
 *     filtersConfig: [ // GuardrailContentFiltersConfig // required
 *       { // GuardrailContentFilterConfig
 *         type: "SEXUAL" || "VIOLENCE" || "HATE" || "INSULTS" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 *         inputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 *         outputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 *         inputModalities: [ // GuardrailModalities
 *           "TEXT" || "IMAGE",
 *         ],
 *         outputModalities: [
 *           "TEXT" || "IMAGE",
 *         ],
 *         inputAction: "BLOCK" || "NONE",
 *         outputAction: "BLOCK" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *     tierConfig: { // GuardrailContentFiltersTierConfig
 *       tierName: "CLASSIC" || "STANDARD", // required
 *     },
 *   },
 *   wordPolicyConfig: { // GuardrailWordPolicyConfig
 *     wordsConfig: [ // GuardrailWordsConfig
 *       { // GuardrailWordConfig
 *         text: "STRING_VALUE", // required
 *         inputAction: "BLOCK" || "NONE",
 *         outputAction: "BLOCK" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *     managedWordListsConfig: [ // GuardrailManagedWordListsConfig
 *       { // GuardrailManagedWordsConfig
 *         type: "PROFANITY", // required
 *         inputAction: "BLOCK" || "NONE",
 *         outputAction: "BLOCK" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *   },
 *   sensitiveInformationPolicyConfig: { // GuardrailSensitiveInformationPolicyConfig
 *     piiEntitiesConfig: [ // GuardrailPiiEntitiesConfig
 *       { // GuardrailPiiEntityConfig
 *         type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 *         action: "BLOCK" || "ANONYMIZE" || "NONE", // required
 *         inputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 *         outputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *     regexesConfig: [ // GuardrailRegexesConfig
 *       { // GuardrailRegexConfig
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         pattern: "STRING_VALUE", // required
 *         action: "BLOCK" || "ANONYMIZE" || "NONE", // required
 *         inputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 *         outputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 *         inputEnabled: true || false,
 *         outputEnabled: true || false,
 *       },
 *     ],
 *   },
 *   contextualGroundingPolicyConfig: { // GuardrailContextualGroundingPolicyConfig
 *     filtersConfig: [ // GuardrailContextualGroundingFiltersConfig // required
 *       { // GuardrailContextualGroundingFilterConfig
 *         type: "GROUNDING" || "RELEVANCE", // required
 *         threshold: Number("double"), // required
 *         action: "BLOCK" || "NONE",
 *         enabled: true || false,
 *       },
 *     ],
 *     tierConfig: { // GuardrailContextualGroundingTierConfig
 *       tierName: "CLASSIC" || "STANDARD", // required
 *     },
 *   },
 *   automatedReasoningPolicyConfig: { // GuardrailAutomatedReasoningPolicyConfig
 *     policies: [ // AutomatedReasoningPolicyArnList // required
 *       "STRING_VALUE",
 *     ],
 *     confidenceThreshold: Number("double"),
 *   },
 *   crossRegionConfig: { // GuardrailCrossRegionConfig
 *     guardrailProfileIdentifier: "STRING_VALUE", // required
 *   },
 *   blockedInputMessaging: "STRING_VALUE", // required
 *   blockedOutputsMessaging: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new UpdateGuardrailCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGuardrailResponse
 * //   guardrailId: "STRING_VALUE", // required
 * //   guardrailArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateGuardrailCommandInput - {@link UpdateGuardrailCommandInput}
 * @returns {@link UpdateGuardrailCommandOutput}
 * @see {@link UpdateGuardrailCommandInput} for command's `input` shape.
 * @see {@link UpdateGuardrailCommandOutput} for command's `response` shape.
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
export class UpdateGuardrailCommand extends command<UpdateGuardrailCommandInput, UpdateGuardrailCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGuardrail",
  UpdateGuardrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGuardrailRequest;
      output: UpdateGuardrailResponse;
    };
    sdk: {
      input: UpdateGuardrailCommandInput;
      output: UpdateGuardrailCommandOutput;
    };
  };
}
