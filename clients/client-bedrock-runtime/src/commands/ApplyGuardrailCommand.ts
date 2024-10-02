// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplyGuardrailRequest, ApplyGuardrailResponse } from "../models/models_0";
import { de_ApplyGuardrailCommand, se_ApplyGuardrailCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApplyGuardrailCommand}.
 */
export interface ApplyGuardrailCommandInput extends ApplyGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link ApplyGuardrailCommand}.
 */
export interface ApplyGuardrailCommandOutput extends ApplyGuardrailResponse, __MetadataBearer {}

/**
 * <p>The action to apply a guardrail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, ApplyGuardrailCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, ApplyGuardrailCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * const client = new BedrockRuntimeClient(config);
 * const input = { // ApplyGuardrailRequest
 *   guardrailIdentifier: "STRING_VALUE", // required
 *   guardrailVersion: "STRING_VALUE", // required
 *   source: "INPUT" || "OUTPUT", // required
 *   content: [ // GuardrailContentBlockList // required
 *     { // GuardrailContentBlock Union: only one key present
 *       text: { // GuardrailTextBlock
 *         text: "STRING_VALUE", // required
 *         qualifiers: [ // GuardrailContentQualifierList
 *           "grounding_source" || "query" || "guard_content",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new ApplyGuardrailCommand(input);
 * const response = await client.send(command);
 * // { // ApplyGuardrailResponse
 * //   usage: { // GuardrailUsage
 * //     topicPolicyUnits: Number("int"), // required
 * //     contentPolicyUnits: Number("int"), // required
 * //     wordPolicyUnits: Number("int"), // required
 * //     sensitiveInformationPolicyUnits: Number("int"), // required
 * //     sensitiveInformationPolicyFreeUnits: Number("int"), // required
 * //     contextualGroundingPolicyUnits: Number("int"), // required
 * //   },
 * //   action: "NONE" || "GUARDRAIL_INTERVENED", // required
 * //   outputs: [ // GuardrailOutputContentList // required
 * //     { // GuardrailOutputContent
 * //       text: "STRING_VALUE",
 * //     },
 * //   ],
 * //   assessments: [ // GuardrailAssessmentList // required
 * //     { // GuardrailAssessment
 * //       topicPolicy: { // GuardrailTopicPolicyAssessment
 * //         topics: [ // GuardrailTopicList // required
 * //           { // GuardrailTopic
 * //             name: "STRING_VALUE", // required
 * //             type: "DENY", // required
 * //             action: "BLOCKED", // required
 * //           },
 * //         ],
 * //       },
 * //       contentPolicy: { // GuardrailContentPolicyAssessment
 * //         filters: [ // GuardrailContentFilterList // required
 * //           { // GuardrailContentFilter
 * //             type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //             confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //             filterStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH",
 * //             action: "BLOCKED", // required
 * //           },
 * //         ],
 * //       },
 * //       wordPolicy: { // GuardrailWordPolicyAssessment
 * //         customWords: [ // GuardrailCustomWordList // required
 * //           { // GuardrailCustomWord
 * //             match: "STRING_VALUE", // required
 * //             action: "BLOCKED", // required
 * //           },
 * //         ],
 * //         managedWordLists: [ // GuardrailManagedWordList // required
 * //           { // GuardrailManagedWord
 * //             match: "STRING_VALUE", // required
 * //             type: "PROFANITY", // required
 * //             action: "BLOCKED", // required
 * //           },
 * //         ],
 * //       },
 * //       sensitiveInformationPolicy: { // GuardrailSensitiveInformationPolicyAssessment
 * //         piiEntities: [ // GuardrailPiiEntityFilterList // required
 * //           { // GuardrailPiiEntityFilter
 * //             match: "STRING_VALUE", // required
 * //             type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //             action: "ANONYMIZED" || "BLOCKED", // required
 * //           },
 * //         ],
 * //         regexes: [ // GuardrailRegexFilterList // required
 * //           { // GuardrailRegexFilter
 * //             name: "STRING_VALUE",
 * //             match: "STRING_VALUE",
 * //             regex: "STRING_VALUE",
 * //             action: "ANONYMIZED" || "BLOCKED", // required
 * //           },
 * //         ],
 * //       },
 * //       contextualGroundingPolicy: { // GuardrailContextualGroundingPolicyAssessment
 * //         filters: [ // GuardrailContextualGroundingFilters
 * //           { // GuardrailContextualGroundingFilter
 * //             type: "GROUNDING" || "RELEVANCE", // required
 * //             threshold: Number("double"), // required
 * //             score: Number("double"), // required
 * //             action: "BLOCKED" || "NONE", // required
 * //           },
 * //         ],
 * //       },
 * //       invocationMetrics: { // GuardrailInvocationMetrics
 * //         guardrailProcessingLatency: Number("long"),
 * //         usage: {
 * //           topicPolicyUnits: Number("int"), // required
 * //           contentPolicyUnits: Number("int"), // required
 * //           wordPolicyUnits: Number("int"), // required
 * //           sensitiveInformationPolicyUnits: Number("int"), // required
 * //           sensitiveInformationPolicyFreeUnits: Number("int"), // required
 * //           contextualGroundingPolicyUnits: Number("int"), // required
 * //         },
 * //         guardrailCoverage: { // GuardrailCoverage
 * //           textCharacters: { // GuardrailTextCharactersCoverage
 * //             guarded: Number("int"),
 * //             total: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   guardrailCoverage: {
 * //     textCharacters: {
 * //       guarded: Number("int"),
 * //       total: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ApplyGuardrailCommandInput - {@link ApplyGuardrailCommandInput}
 * @returns {@link ApplyGuardrailCommandOutput}
 * @see {@link ApplyGuardrailCommandInput} for command's `input` shape.
 * @see {@link ApplyGuardrailCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> to increase the rate or number of tokens you can process.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 * @public
 */
export class ApplyGuardrailCommand extends $Command
  .classBuilder<
    ApplyGuardrailCommandInput,
    ApplyGuardrailCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockFrontendService", "ApplyGuardrail", {})
  .n("BedrockRuntimeClient", "ApplyGuardrailCommand")
  .f(void 0, void 0)
  .ser(se_ApplyGuardrailCommand)
  .de(de_ApplyGuardrailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyGuardrailRequest;
      output: ApplyGuardrailResponse;
    };
    sdk: {
      input: ApplyGuardrailCommandInput;
      output: ApplyGuardrailCommandOutput;
    };
  };
}
