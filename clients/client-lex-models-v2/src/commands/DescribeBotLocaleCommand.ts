// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotLocaleRequest, DescribeBotLocaleResponse } from "../models/models_1";
import { DescribeBotLocale } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotLocaleCommand}.
 */
export interface DescribeBotLocaleCommandInput extends DescribeBotLocaleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotLocaleCommand}.
 */
export interface DescribeBotLocaleCommandOutput extends DescribeBotLocaleResponse, __MetadataBearer {}

/**
 * <p>Describes the settings that a bot has for a specific locale. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotLocaleRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotLocaleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotLocaleResponse
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
 * //   intentsCount: Number("int"),
 * //   slotTypesCount: Number("int"),
 * //   botLocaleStatus: "Creating" || "Building" || "Built" || "ReadyExpressTesting" || "Failed" || "Deleting" || "NotBuilt" || "Importing" || "Processing",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   lastBuildSubmittedDateTime: new Date("TIMESTAMP"),
 * //   botLocaleHistoryEvents: [ // BotLocaleHistoryEventsList
 * //     { // BotLocaleHistoryEvent
 * //       event: "STRING_VALUE", // required
 * //       eventDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
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
 * // };
 *
 * ```
 *
 * @param DescribeBotLocaleCommandInput - {@link DescribeBotLocaleCommandInput}
 * @returns {@link DescribeBotLocaleCommandOutput}
 * @see {@link DescribeBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DescribeBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class DescribeBotLocaleCommand extends $Command
  .classBuilder<
    DescribeBotLocaleCommandInput,
    DescribeBotLocaleCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeBotLocale", {})
  .n("LexModelsV2Client", "DescribeBotLocaleCommand")
  .sc(DescribeBotLocale)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBotLocaleRequest;
      output: DescribeBotLocaleResponse;
    };
    sdk: {
      input: DescribeBotLocaleCommandInput;
      output: DescribeBotLocaleCommandOutput;
    };
  };
}
