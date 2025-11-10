// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotAliasRequest, UpdateBotAliasResponse } from "../models/models_1";
import { UpdateBotAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBotAliasCommand}.
 */
export interface UpdateBotAliasCommandInput extends UpdateBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBotAliasCommand}.
 */
export interface UpdateBotAliasCommandOutput extends UpdateBotAliasResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateBotAliasRequest
 *   botAliasId: "STRING_VALUE", // required
 *   botAliasName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   botAliasLocaleSettings: { // BotAliasLocaleSettingsMap
 *     "<keys>": { // BotAliasLocaleSettings
 *       enabled: true || false, // required
 *       codeHookSpecification: { // CodeHookSpecification
 *         lambdaCodeHook: { // LambdaCodeHook
 *           lambdaARN: "STRING_VALUE", // required
 *           codeHookInterfaceVersion: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   conversationLogSettings: { // ConversationLogSettings
 *     textLogSettings: [ // TextLogSettingsList
 *       { // TextLogSetting
 *         enabled: true || false, // required
 *         destination: { // TextLogDestination
 *           cloudWatch: { // CloudWatchLogGroupLogDestination
 *             cloudWatchLogGroupArn: "STRING_VALUE", // required
 *             logPrefix: "STRING_VALUE", // required
 *           },
 *         },
 *         selectiveLoggingEnabled: true || false,
 *       },
 *     ],
 *     audioLogSettings: [ // AudioLogSettingsList
 *       { // AudioLogSetting
 *         enabled: true || false, // required
 *         destination: { // AudioLogDestination
 *           s3Bucket: { // S3BucketLogDestination
 *             kmsKeyArn: "STRING_VALUE",
 *             s3BucketArn: "STRING_VALUE", // required
 *             logPrefix: "STRING_VALUE", // required
 *           },
 *         },
 *         selectiveLoggingEnabled: true || false,
 *       },
 *     ],
 *   },
 *   sentimentAnalysisSettings: { // SentimentAnalysisSettings
 *     detectSentiment: true || false, // required
 *   },
 *   botId: "STRING_VALUE", // required
 * };
 * const command = new UpdateBotAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBotAliasResponse
 * //   botAliasId: "STRING_VALUE",
 * //   botAliasName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botAliasLocaleSettings: { // BotAliasLocaleSettingsMap
 * //     "<keys>": { // BotAliasLocaleSettings
 * //       enabled: true || false, // required
 * //       codeHookSpecification: { // CodeHookSpecification
 * //         lambdaCodeHook: { // LambdaCodeHook
 * //           lambdaARN: "STRING_VALUE", // required
 * //           codeHookInterfaceVersion: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   conversationLogSettings: { // ConversationLogSettings
 * //     textLogSettings: [ // TextLogSettingsList
 * //       { // TextLogSetting
 * //         enabled: true || false, // required
 * //         destination: { // TextLogDestination
 * //           cloudWatch: { // CloudWatchLogGroupLogDestination
 * //             cloudWatchLogGroupArn: "STRING_VALUE", // required
 * //             logPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         selectiveLoggingEnabled: true || false,
 * //       },
 * //     ],
 * //     audioLogSettings: [ // AudioLogSettingsList
 * //       { // AudioLogSetting
 * //         enabled: true || false, // required
 * //         destination: { // AudioLogDestination
 * //           s3Bucket: { // S3BucketLogDestination
 * //             kmsKeyArn: "STRING_VALUE",
 * //             s3BucketArn: "STRING_VALUE", // required
 * //             logPrefix: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         selectiveLoggingEnabled: true || false,
 * //       },
 * //     ],
 * //   },
 * //   sentimentAnalysisSettings: { // SentimentAnalysisSettings
 * //     detectSentiment: true || false, // required
 * //   },
 * //   botAliasStatus: "Creating" || "Available" || "Deleting" || "Failed",
 * //   botId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateBotAliasCommandInput - {@link UpdateBotAliasCommandInput}
 * @returns {@link UpdateBotAliasCommandOutput}
 * @see {@link UpdateBotAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateBotAliasCommandOutput} for command's `response` shape.
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
export class UpdateBotAliasCommand extends $Command
  .classBuilder<
    UpdateBotAliasCommandInput,
    UpdateBotAliasCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateBotAlias", {})
  .n("LexModelsV2Client", "UpdateBotAliasCommand")
  .sc(UpdateBotAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBotAliasRequest;
      output: UpdateBotAliasResponse;
    };
    sdk: {
      input: UpdateBotAliasCommandInput;
      output: UpdateBotAliasCommandOutput;
    };
  };
}
