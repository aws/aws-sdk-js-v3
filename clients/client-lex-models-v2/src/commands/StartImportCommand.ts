// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartImportRequest, StartImportResponse } from "../models/models_1";
import { StartImport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * <p>Starts importing a bot, bot locale, or custom vocabulary from a zip
 *          archive that you uploaded to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StartImportRequest
 *   importId: "STRING_VALUE", // required
 *   resourceSpecification: { // ImportResourceSpecification
 *     botImportSpecification: { // BotImportSpecification
 *       botName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       dataPrivacy: { // DataPrivacy
 *         childDirected: true || false, // required
 *       },
 *       errorLogSettings: { // ErrorLogSettings
 *         enabled: true || false, // required
 *       },
 *       idleSessionTTLInSeconds: Number("int"),
 *       botTags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       testBotAliasTags: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     botLocaleImportSpecification: { // BotLocaleImportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *       nluIntentConfidenceThreshold: Number("double"),
 *       voiceSettings: { // VoiceSettings
 *         engine: "standard" || "neural" || "long-form" || "generative",
 *         voiceId: "STRING_VALUE", // required
 *       },
 *       speechRecognitionSettings: { // SpeechRecognitionSettings
 *         speechModelPreference: "Standard" || "Neural" || "Deepgram",
 *         speechModelConfig: { // SpeechModelConfig
 *           deepgramConfig: { // DeepgramSpeechModelConfig
 *             apiTokenSecretArn: "STRING_VALUE", // required
 *             modelId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       speechDetectionSensitivity: "Default" || "HighNoiseTolerance" || "MaximumNoiseTolerance",
 *       unifiedSpeechSettings: { // UnifiedSpeechSettings
 *         speechFoundationModel: { // SpeechFoundationModel
 *           modelArn: "STRING_VALUE", // required
 *           voiceId: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     customVocabularyImportSpecification: { // CustomVocabularyImportSpecification
 *       botId: "STRING_VALUE", // required
 *       botVersion: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *     testSetImportResourceSpecification: { // TestSetImportResourceSpecification
 *       testSetName: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       roleArn: "STRING_VALUE", // required
 *       storageLocation: { // TestSetStorageLocation
 *         s3BucketName: "STRING_VALUE", // required
 *         s3Path: "STRING_VALUE", // required
 *         kmsKeyArn: "STRING_VALUE",
 *       },
 *       importInputLocation: { // TestSetImportInputLocation
 *         s3BucketName: "STRING_VALUE", // required
 *         s3Path: "STRING_VALUE", // required
 *       },
 *       modality: "Text" || "Audio", // required
 *       testSetTags: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   mergeStrategy: "Overwrite" || "FailOnConflict" || "Append", // required
 *   filePassword: "STRING_VALUE",
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   importId: "STRING_VALUE",
 * //   resourceSpecification: { // ImportResourceSpecification
 * //     botImportSpecification: { // BotImportSpecification
 * //       botName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       dataPrivacy: { // DataPrivacy
 * //         childDirected: true || false, // required
 * //       },
 * //       errorLogSettings: { // ErrorLogSettings
 * //         enabled: true || false, // required
 * //       },
 * //       idleSessionTTLInSeconds: Number("int"),
 * //       botTags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       testBotAliasTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     botLocaleImportSpecification: { // BotLocaleImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //       nluIntentConfidenceThreshold: Number("double"),
 * //       voiceSettings: { // VoiceSettings
 * //         engine: "standard" || "neural" || "long-form" || "generative",
 * //         voiceId: "STRING_VALUE", // required
 * //       },
 * //       speechRecognitionSettings: { // SpeechRecognitionSettings
 * //         speechModelPreference: "Standard" || "Neural" || "Deepgram",
 * //         speechModelConfig: { // SpeechModelConfig
 * //           deepgramConfig: { // DeepgramSpeechModelConfig
 * //             apiTokenSecretArn: "STRING_VALUE", // required
 * //             modelId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       speechDetectionSensitivity: "Default" || "HighNoiseTolerance" || "MaximumNoiseTolerance",
 * //       unifiedSpeechSettings: { // UnifiedSpeechSettings
 * //         speechFoundationModel: { // SpeechFoundationModel
 * //           modelArn: "STRING_VALUE", // required
 * //           voiceId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     customVocabularyImportSpecification: { // CustomVocabularyImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     testSetImportResourceSpecification: { // TestSetImportResourceSpecification
 * //       testSetName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE", // required
 * //       storageLocation: { // TestSetStorageLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       importInputLocation: { // TestSetImportInputLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //       },
 * //       modality: "Text" || "Audio", // required
 * //       testSetTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   mergeStrategy: "Overwrite" || "FailOnConflict" || "Append",
 * //   importStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
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
export class StartImportCommand extends $Command
  .classBuilder<
    StartImportCommandInput,
    StartImportCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "StartImport", {})
  .n("LexModelsV2Client", "StartImportCommand")
  .sc(StartImport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportRequest;
      output: StartImportResponse;
    };
    sdk: {
      input: StartImportCommandInput;
      output: StartImportCommandOutput;
    };
  };
}
