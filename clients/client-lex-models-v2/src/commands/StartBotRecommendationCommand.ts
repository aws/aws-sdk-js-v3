// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartBotRecommendationRequest, StartBotRecommendationResponse } from "../models/models_1";
import { StartBotRecommendation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBotRecommendationCommand}.
 */
export interface StartBotRecommendationCommandInput extends StartBotRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link StartBotRecommendationCommand}.
 */
export interface StartBotRecommendationCommandOutput extends StartBotRecommendationResponse, __MetadataBearer {}

/**
 * <p>Use this to provide your transcript data, and to start the bot
 *          recommendation process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StartBotRecommendationRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   transcriptSourceSetting: { // TranscriptSourceSetting
 *     s3BucketTranscriptSource: { // S3BucketTranscriptSource
 *       s3BucketName: "STRING_VALUE", // required
 *       pathFormat: { // PathFormat
 *         objectPrefixes: [ // ObjectPrefixes
 *           "STRING_VALUE",
 *         ],
 *       },
 *       transcriptFormat: "Lex", // required
 *       transcriptFilter: { // TranscriptFilter
 *         lexTranscriptFilter: { // LexTranscriptFilter
 *           dateRangeFilter: { // DateRangeFilter
 *             startDateTime: new Date("TIMESTAMP"), // required
 *             endDateTime: new Date("TIMESTAMP"), // required
 *           },
 *         },
 *       },
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   encryptionSetting: { // EncryptionSetting
 *     kmsKeyArn: "STRING_VALUE",
 *     botLocaleExportPassword: "STRING_VALUE",
 *     associatedTranscriptsPassword: "STRING_VALUE",
 *   },
 * };
 * const command = new StartBotRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // StartBotRecommendationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationStatus: "Processing" || "Deleting" || "Deleted" || "Downloading" || "Updating" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   botRecommendationId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   transcriptSourceSetting: { // TranscriptSourceSetting
 * //     s3BucketTranscriptSource: { // S3BucketTranscriptSource
 * //       s3BucketName: "STRING_VALUE", // required
 * //       pathFormat: { // PathFormat
 * //         objectPrefixes: [ // ObjectPrefixes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       transcriptFormat: "Lex", // required
 * //       transcriptFilter: { // TranscriptFilter
 * //         lexTranscriptFilter: { // LexTranscriptFilter
 * //           dateRangeFilter: { // DateRangeFilter
 * //             startDateTime: new Date("TIMESTAMP"), // required
 * //             endDateTime: new Date("TIMESTAMP"), // required
 * //           },
 * //         },
 * //       },
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   encryptionSetting: { // EncryptionSetting
 * //     kmsKeyArn: "STRING_VALUE",
 * //     botLocaleExportPassword: "STRING_VALUE",
 * //     associatedTranscriptsPassword: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBotRecommendationCommandInput - {@link StartBotRecommendationCommandInput}
 * @returns {@link StartBotRecommendationCommandOutput}
 * @see {@link StartBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link StartBotRecommendationCommandOutput} for command's `response` shape.
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
export class StartBotRecommendationCommand extends $Command
  .classBuilder<
    StartBotRecommendationCommandInput,
    StartBotRecommendationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "StartBotRecommendation", {})
  .n("LexModelsV2Client", "StartBotRecommendationCommand")
  .sc(StartBotRecommendation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBotRecommendationRequest;
      output: StartBotRecommendationResponse;
    };
    sdk: {
      input: StartBotRecommendationCommandInput;
      output: StartBotRecommendationCommandOutput;
    };
  };
}
