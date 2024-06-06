// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateGuardrailRequest,
  UpdateGuardrailRequestFilterSensitiveLog,
  UpdateGuardrailResponse,
} from "../models/models_0";
import { de_UpdateGuardrailCommand, se_UpdateGuardrailCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a guardrail with the values you specify.</p>
 *          <ul>
 *             <li>
 *                <p>Specify a <code>name</code> and optional <code>description</code>.</p>
 *             </li>
 *             <li>
 *                <p>Specify messages for when the guardrail successfully blocks a prompt or a model response in the <code>blockedInputMessaging</code> and <code>blockedOutputsMessaging</code> fields.</p>
 *             </li>
 *             <li>
 *                <p>Specify topics for the guardrail to deny in the <code>topicPolicyConfig</code> object. Each <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailTopicConfig.html">GuardrailTopicConfig</a> object in the <code>topicsConfig</code> list pertains to one topic.</p>
 *                <ul>
 *                   <li>
 *                      <p>Give a <code>name</code> and <code>description</code> so that the guardrail can properly identify the topic.</p>
 *                   </li>
 *                   <li>
 *                      <p>Specify <code>DENY</code> in the <code>type</code> field.</p>
 *                   </li>
 *                   <li>
 *                      <p>(Optional) Provide up to five prompts that you would categorize as belonging to the topic in the <code>examples</code> list.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Specify filter strengths for the harmful categories defined in Amazon Bedrock in the <code>contentPolicyConfig</code> object. Each <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html">GuardrailContentFilterConfig</a> object in the <code>filtersConfig</code> list pertains to a harmful category. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters">Content filters</a>. For more information about the fields in a content filter, see <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html">GuardrailContentFilterConfig</a>.</p>
 *                <ul>
 *                   <li>
 *                      <p>Specify the category in the <code>type</code> field.</p>
 *                   </li>
 *                   <li>
 *                      <p>Specify the strength of the filter for prompts in the <code>inputStrength</code> field and for model responses in the <code>strength</code> field of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GuardrailContentFilterConfig.html">GuardrailContentFilterConfig</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>(Optional) For security, include the ARN of a KMS key in the <code>kmsKeyId</code> field.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) Attach any tags to the guardrail in the <code>tags</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging">Tag resources</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateGuardrailCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateGuardrailCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
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
 *       },
 *     ],
 *   },
 *   contentPolicyConfig: { // GuardrailContentPolicyConfig
 *     filtersConfig: [ // GuardrailContentFiltersConfig // required
 *       { // GuardrailContentFilterConfig
 *         type: "SEXUAL" || "VIOLENCE" || "HATE" || "INSULTS" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 *         inputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 *         outputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 *       },
 *     ],
 *   },
 *   wordPolicyConfig: { // GuardrailWordPolicyConfig
 *     wordsConfig: [ // GuardrailWordsConfig
 *       { // GuardrailWordConfig
 *         text: "STRING_VALUE", // required
 *       },
 *     ],
 *     managedWordListsConfig: [ // GuardrailManagedWordListsConfig
 *       { // GuardrailManagedWordsConfig
 *         type: "PROFANITY", // required
 *       },
 *     ],
 *   },
 *   sensitiveInformationPolicyConfig: { // GuardrailSensitiveInformationPolicyConfig
 *     piiEntitiesConfig: [ // GuardrailPiiEntitiesConfig
 *       { // GuardrailPiiEntityConfig
 *         type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 *         action: "BLOCK" || "ANONYMIZE", // required
 *       },
 *     ],
 *     regexesConfig: [ // GuardrailRegexesConfig
 *       { // GuardrailRegexConfig
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         pattern: "STRING_VALUE", // required
 *         action: "BLOCK" || "ANONYMIZE", // required
 *       },
 *     ],
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class UpdateGuardrailCommand extends $Command
  .classBuilder<
    UpdateGuardrailCommandInput,
    UpdateGuardrailCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "UpdateGuardrail", {})
  .n("BedrockClient", "UpdateGuardrailCommand")
  .f(UpdateGuardrailRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateGuardrailCommand)
  .de(de_UpdateGuardrailCommand)
  .build() {}
