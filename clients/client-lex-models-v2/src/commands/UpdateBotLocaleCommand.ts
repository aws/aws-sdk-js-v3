// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotLocaleRequest, UpdateBotLocaleResponse } from "../models/models_1";
import { UpdateBotLocale } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBotLocaleCommand}.
 */
export interface UpdateBotLocaleCommandInput extends UpdateBotLocaleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBotLocaleCommand}.
 */
export interface UpdateBotLocaleCommandOutput extends UpdateBotLocaleResponse, __MetadataBearer {}

/**
 * <p>Updates the settings that a bot has for a specific locale.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateBotLocaleRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nluIntentConfidenceThreshold: Number("double"), // required
 *   voiceSettings: { // VoiceSettings
 *     voiceId: "STRING_VALUE", // required
 *     engine: "standard" || "neural" || "long-form" || "generative",
 *   },
 *   generativeAISettings: { // GenerativeAISettings
 *     runtimeSettings: { // RuntimeSettings
 *       slotResolutionImprovement: { // SlotResolutionImprovementSpecification
 *         enabled: true || false, // required
 *         bedrockModelSpecification: { // BedrockModelSpecification
 *           modelArn: "STRING_VALUE", // required
 *           guardrail: { // BedrockGuardrailConfiguration
 *             identifier: "STRING_VALUE", // required
 *             version: "STRING_VALUE", // required
 *           },
 *           traceStatus: "ENABLED" || "DISABLED",
 *           customPrompt: "STRING_VALUE",
 *         },
 *       },
 *       nluImprovement: { // NluImprovementSpecification
 *         enabled: true || false, // required
 *         assistedNluMode: "Primary" || "Fallback",
 *         intentDisambiguationSettings: { // IntentDisambiguationSettings
 *           enabled: true || false, // required
 *           maxDisambiguationIntents: Number("int"),
 *           customDisambiguationMessage: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     buildtimeSettings: { // BuildtimeSettings
 *       descriptiveBotBuilder: { // DescriptiveBotBuilderSpecification
 *         enabled: true || false, // required
 *         bedrockModelSpecification: {
 *           modelArn: "STRING_VALUE", // required
 *           guardrail: {
 *             identifier: "STRING_VALUE", // required
 *             version: "STRING_VALUE", // required
 *           },
 *           traceStatus: "ENABLED" || "DISABLED",
 *           customPrompt: "STRING_VALUE",
 *         },
 *       },
 *       sampleUtteranceGeneration: { // SampleUtteranceGenerationSpecification
 *         enabled: true || false, // required
 *         bedrockModelSpecification: {
 *           modelArn: "STRING_VALUE", // required
 *           guardrail: {
 *             identifier: "STRING_VALUE", // required
 *             version: "STRING_VALUE", // required
 *           },
 *           traceStatus: "ENABLED" || "DISABLED",
 *           customPrompt: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   speechDetectionSensitivity: "Default" || "HighNoiseTolerance" || "MaximumNoiseTolerance",
 * };
 * const command = new UpdateBotLocaleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBotLocaleResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   localeName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   nluIntentConfidenceThreshold: Number("double"),
 * //   voiceSettings: { // VoiceSettings
 * //     voiceId: "STRING_VALUE", // required
 * //     engine: "standard" || "neural" || "long-form" || "generative",
 * //   },
 * //   botLocaleStatus: "Creating" || "Building" || "Built" || "ReadyExpressTesting" || "Failed" || "Deleting" || "NotBuilt" || "Importing" || "Processing",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   recommendedActions: [ // RecommendedActions
 * //     "STRING_VALUE",
 * //   ],
 * //   generativeAISettings: { // GenerativeAISettings
 * //     runtimeSettings: { // RuntimeSettings
 * //       slotResolutionImprovement: { // SlotResolutionImprovementSpecification
 * //         enabled: true || false, // required
 * //         bedrockModelSpecification: { // BedrockModelSpecification
 * //           modelArn: "STRING_VALUE", // required
 * //           guardrail: { // BedrockGuardrailConfiguration
 * //             identifier: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //           },
 * //           traceStatus: "ENABLED" || "DISABLED",
 * //           customPrompt: "STRING_VALUE",
 * //         },
 * //       },
 * //       nluImprovement: { // NluImprovementSpecification
 * //         enabled: true || false, // required
 * //         assistedNluMode: "Primary" || "Fallback",
 * //         intentDisambiguationSettings: { // IntentDisambiguationSettings
 * //           enabled: true || false, // required
 * //           maxDisambiguationIntents: Number("int"),
 * //           customDisambiguationMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     buildtimeSettings: { // BuildtimeSettings
 * //       descriptiveBotBuilder: { // DescriptiveBotBuilderSpecification
 * //         enabled: true || false, // required
 * //         bedrockModelSpecification: {
 * //           modelArn: "STRING_VALUE", // required
 * //           guardrail: {
 * //             identifier: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //           },
 * //           traceStatus: "ENABLED" || "DISABLED",
 * //           customPrompt: "STRING_VALUE",
 * //         },
 * //       },
 * //       sampleUtteranceGeneration: { // SampleUtteranceGenerationSpecification
 * //         enabled: true || false, // required
 * //         bedrockModelSpecification: {
 * //           modelArn: "STRING_VALUE", // required
 * //           guardrail: {
 * //             identifier: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //           },
 * //           traceStatus: "ENABLED" || "DISABLED",
 * //           customPrompt: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   speechDetectionSensitivity: "Default" || "HighNoiseTolerance" || "MaximumNoiseTolerance",
 * // };
 *
 * ```
 *
 * @param UpdateBotLocaleCommandInput - {@link UpdateBotLocaleCommandInput}
 * @returns {@link UpdateBotLocaleCommandOutput}
 * @see {@link UpdateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link UpdateBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateBotLocaleCommand extends $Command
  .classBuilder<
    UpdateBotLocaleCommandInput,
    UpdateBotLocaleCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateBotLocale", {})
  .n("LexModelsV2Client", "UpdateBotLocaleCommand")
  .sc(UpdateBotLocale)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBotLocaleRequest;
      output: UpdateBotLocaleResponse;
    };
    sdk: {
      input: UpdateBotLocaleCommandInput;
      output: UpdateBotLocaleCommandOutput;
    };
  };
}
