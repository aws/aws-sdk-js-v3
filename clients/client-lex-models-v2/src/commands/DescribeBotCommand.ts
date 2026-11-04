// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBotRequest, DescribeBotResponse } from "../models/models_0";
import { DescribeBot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBotCommand}.
 */
export interface DescribeBotCommandInput extends DescribeBotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotCommand}.
 */
export interface DescribeBotCommandOutput extends DescribeBotResponse, __MetadataBearer {}

/**
 * Provides metadata information about a bot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotRequest
 *   botId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotResponse
 * //   botId: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   dataPrivacy: { // DataPrivacy
 * //     childDirected: true || false, // required
 * //   },
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   botType: "Bot" || "BotNetwork",
 * //   botMembers: [ // BotMembers
 * //     { // BotMember
 * //       botMemberId: "STRING_VALUE", // required
 * //       botMemberName: "STRING_VALUE", // required
 * //       botMemberAliasId: "STRING_VALUE", // required
 * //       botMemberAliasName: "STRING_VALUE", // required
 * //       botMemberVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   errorLogSettings: { // ErrorLogSettings
 * //     enabled: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBotCommandInput - {@link DescribeBotCommandInput}
 * @returns {@link DescribeBotCommandOutput}
 * @see {@link DescribeBotCommandInput} for command's `input` shape.
 * @see {@link DescribeBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
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
export class DescribeBotCommand extends command<DescribeBotCommandInput, DescribeBotCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBot",
  DescribeBot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBotRequest;
      output: DescribeBotResponse;
    };
    sdk: {
      input: DescribeBotCommandInput;
      output: DescribeBotCommandOutput;
    };
  };
}
