// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotVersionRequest, DescribeBotVersionResponse } from "../models/models_1";
import { de_DescribeBotVersionCommand, se_DescribeBotVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotVersionCommand}.
 */
export interface DescribeBotVersionCommandInput extends DescribeBotVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotVersionCommand}.
 */
export interface DescribeBotVersionCommandOutput extends DescribeBotVersionResponse, __MetadataBearer {}

/**
 * <p>Provides metadata about a version of a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotVersionRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotVersionResponse
 * //   botId: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   dataPrivacy: { // DataPrivacy
 * //     childDirected: true || false, // required
 * //   },
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   parentBotNetworks: [ // ParentBotNetworks
 * //     { // ParentBotNetwork
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
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
 * // };
 *
 * ```
 *
 * @param DescribeBotVersionCommandInput - {@link DescribeBotVersionCommandInput}
 * @returns {@link DescribeBotVersionCommandOutput}
 * @see {@link DescribeBotVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeBotVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeBotVersionCommand extends $Command
  .classBuilder<
    DescribeBotVersionCommandInput,
    DescribeBotVersionCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "DescribeBotVersion", {})
  .n("LexModelsV2Client", "DescribeBotVersionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBotVersionCommand)
  .de(de_DescribeBotVersionCommand)
  .build() {}
