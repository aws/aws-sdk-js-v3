// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBotAliasRequest, UpdateBotAliasResponse } from "../models/models_1";
import { UpdateBotAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration of an existing bot alias.
 *
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
 *
 * The action that you tried to perform couldn't be completed because the resource is in a conflicting state. For example, deleting a bot that is in the CREATING state. Try your request again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * Your request couldn't be completed because one or more request fields aren't valid. Check the fields in your request and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class UpdateBotAliasCommand extends command<UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBotAlias",
  UpdateBotAlias$
) {
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
