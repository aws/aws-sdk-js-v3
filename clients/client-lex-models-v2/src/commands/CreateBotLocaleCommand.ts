// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotLocaleRequest, CreateBotLocaleResponse } from "../models/models_0";
import { CreateBotLocale } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBotLocaleCommand}.
 */
export interface CreateBotLocaleCommandInput extends CreateBotLocaleRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotLocaleCommand}.
 */
export interface CreateBotLocaleCommandOutput extends CreateBotLocaleResponse, __MetadataBearer {}

/**
 * <p>Creates a locale in the bot. The locale contains the intents and
 *          slot types that the bot uses in conversations with users in the
 *          specified language and locale. You must add a locale to a bot before
 *          you can add intents and slot types to the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateBotLocaleRequest
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
 * };
 * const command = new CreateBotLocaleCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotLocaleResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeName: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   nluIntentConfidenceThreshold: Number("double"),
 * //   voiceSettings: { // VoiceSettings
 * //     voiceId: "STRING_VALUE", // required
 * //     engine: "standard" || "neural" || "long-form" || "generative",
 * //   },
 * //   botLocaleStatus: "Creating" || "Building" || "Built" || "ReadyExpressTesting" || "Failed" || "Deleting" || "NotBuilt" || "Importing" || "Processing",
 * //   creationDateTime: new Date("TIMESTAMP"),
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
 * @param CreateBotLocaleCommandInput - {@link CreateBotLocaleCommandInput}
 * @returns {@link CreateBotLocaleCommandOutput}
 * @see {@link CreateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link CreateBotLocaleCommandOutput} for command's `response` shape.
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
export class CreateBotLocaleCommand extends $Command
  .classBuilder<
    CreateBotLocaleCommandInput,
    CreateBotLocaleCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "CreateBotLocale", {})
  .n("LexModelsV2Client", "CreateBotLocaleCommand")
  .sc(CreateBotLocale)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBotLocaleRequest;
      output: CreateBotLocaleResponse;
    };
    sdk: {
      input: CreateBotLocaleCommandInput;
      output: CreateBotLocaleCommandOutput;
    };
  };
}
