// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGuardrailRequest, GetGuardrailResponse, GetGuardrailResponseFilterSensitiveLog } from "../models/models_1";
import { de_GetGuardrailCommand, se_GetGuardrailCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGuardrailCommand}.
 */
export interface GetGuardrailCommandInput extends GetGuardrailRequest {}
/**
 * @public
 *
 * The output of {@link GetGuardrailCommand}.
 */
export interface GetGuardrailCommandOutput extends GetGuardrailResponse, __MetadataBearer {}

/**
 * <p>Gets details about a guardrail. If you don't specify a version, the response returns details for the <code>DRAFT</code> version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetGuardrailCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetGuardrailCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetGuardrailRequest
 *   guardrailIdentifier: "STRING_VALUE", // required
 *   guardrailVersion: "STRING_VALUE",
 * };
 * const command = new GetGuardrailCommand(input);
 * const response = await client.send(command);
 * // { // GetGuardrailResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   guardrailId: "STRING_VALUE", // required
 * //   guardrailArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "VERSIONING" || "READY" || "FAILED" || "DELETING", // required
 * //   topicPolicy: { // GuardrailTopicPolicy
 * //     topics: [ // GuardrailTopics // required
 * //       { // GuardrailTopic
 * //         name: "STRING_VALUE", // required
 * //         definition: "STRING_VALUE", // required
 * //         examples: [ // GuardrailTopicExamples
 * //           "STRING_VALUE",
 * //         ],
 * //         type: "DENY",
 * //         inputAction: "BLOCK" || "NONE",
 * //         outputAction: "BLOCK" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //     tier: { // GuardrailTopicsTier
 * //       tierName: "CLASSIC" || "STANDARD", // required
 * //     },
 * //   },
 * //   contentPolicy: { // GuardrailContentPolicy
 * //     filters: [ // GuardrailContentFilters
 * //       { // GuardrailContentFilter
 * //         type: "SEXUAL" || "VIOLENCE" || "HATE" || "INSULTS" || "MISCONDUCT" || "PROMPT_ATTACK", // required
 * //         inputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //         outputStrength: "NONE" || "LOW" || "MEDIUM" || "HIGH", // required
 * //         inputModalities: [ // GuardrailModalities
 * //           "TEXT" || "IMAGE",
 * //         ],
 * //         outputModalities: [
 * //           "TEXT" || "IMAGE",
 * //         ],
 * //         inputAction: "BLOCK" || "NONE",
 * //         outputAction: "BLOCK" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //     tier: { // GuardrailContentFiltersTier
 * //       tierName: "CLASSIC" || "STANDARD", // required
 * //     },
 * //   },
 * //   wordPolicy: { // GuardrailWordPolicy
 * //     words: [ // GuardrailWords
 * //       { // GuardrailWord
 * //         text: "STRING_VALUE", // required
 * //         inputAction: "BLOCK" || "NONE",
 * //         outputAction: "BLOCK" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //     managedWordLists: [ // GuardrailManagedWordLists
 * //       { // GuardrailManagedWords
 * //         type: "PROFANITY", // required
 * //         inputAction: "BLOCK" || "NONE",
 * //         outputAction: "BLOCK" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //   },
 * //   sensitiveInformationPolicy: { // GuardrailSensitiveInformationPolicy
 * //     piiEntities: [ // GuardrailPiiEntities
 * //       { // GuardrailPiiEntity
 * //         type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //         action: "BLOCK" || "ANONYMIZE" || "NONE", // required
 * //         inputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 * //         outputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //     regexes: [ // GuardrailRegexes
 * //       { // GuardrailRegex
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         pattern: "STRING_VALUE", // required
 * //         action: "BLOCK" || "ANONYMIZE" || "NONE", // required
 * //         inputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 * //         outputAction: "BLOCK" || "ANONYMIZE" || "NONE",
 * //         inputEnabled: true || false,
 * //         outputEnabled: true || false,
 * //       },
 * //     ],
 * //   },
 * //   contextualGroundingPolicy: { // GuardrailContextualGroundingPolicy
 * //     filters: [ // GuardrailContextualGroundingFilters // required
 * //       { // GuardrailContextualGroundingFilter
 * //         type: "GROUNDING" || "RELEVANCE", // required
 * //         threshold: Number("double"), // required
 * //         action: "BLOCK" || "NONE",
 * //         enabled: true || false,
 * //       },
 * //     ],
 * //   },
 * //   automatedReasoningPolicy: { // GuardrailAutomatedReasoningPolicy
 * //     policies: [ // AutomatedReasoningPolicyArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     confidenceThreshold: Number("double"),
 * //   },
 * //   crossRegionDetails: { // GuardrailCrossRegionDetails
 * //     guardrailProfileId: "STRING_VALUE",
 * //     guardrailProfileArn: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   statusReasons: [ // GuardrailStatusReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   failureRecommendations: [ // GuardrailFailureRecommendations
 * //     "STRING_VALUE",
 * //   ],
 * //   blockedInputMessaging: "STRING_VALUE", // required
 * //   blockedOutputsMessaging: "STRING_VALUE", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGuardrailCommandInput - {@link GetGuardrailCommandInput}
 * @returns {@link GetGuardrailCommandOutput}
 * @see {@link GetGuardrailCommandInput} for command's `input` shape.
 * @see {@link GetGuardrailCommandOutput} for command's `response` shape.
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
export class GetGuardrailCommand extends $Command
  .classBuilder<
    GetGuardrailCommandInput,
    GetGuardrailCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetGuardrail", {})
  .n("BedrockClient", "GetGuardrailCommand")
  .f(void 0, GetGuardrailResponseFilterSensitiveLog)
  .ser(se_GetGuardrailCommand)
  .de(de_GetGuardrailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGuardrailRequest;
      output: GetGuardrailResponse;
    };
    sdk: {
      input: GetGuardrailCommandInput;
      output: GetGuardrailCommandOutput;
    };
  };
}
