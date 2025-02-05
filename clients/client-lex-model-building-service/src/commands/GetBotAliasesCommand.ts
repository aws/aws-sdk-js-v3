// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBotAliasesRequest, GetBotAliasesResponse } from "../models/models_0";
import { de_GetBotAliasesCommand, se_GetBotAliasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandInput extends GetBotAliasesRequest {}
/**
 * @public
 *
 * The output of {@link GetBotAliasesCommand}.
 */
export interface GetBotAliasesCommandOutput extends GetBotAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAliases</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotAliasesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotAliasesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotAliasesRequest
 *   botName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetBotAliasesCommand(input);
 * const response = await client.send(command);
 * // { // GetBotAliasesResponse
 * //   BotAliases: [ // BotAliasMetadataList
 * //     { // BotAliasMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botVersion: "STRING_VALUE",
 * //       botName: "STRING_VALUE",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       checksum: "STRING_VALUE",
 * //       conversationLogs: { // ConversationLogsResponse
 * //         logSettings: [ // LogSettingsResponseList
 * //           { // LogSettingsResponse
 * //             logType: "AUDIO" || "TEXT",
 * //             destination: "CLOUDWATCH_LOGS" || "S3",
 * //             kmsKeyArn: "STRING_VALUE",
 * //             resourceArn: "STRING_VALUE",
 * //             resourcePrefix: "STRING_VALUE",
 * //           },
 * //         ],
 * //         iamRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotAliasesCommandInput - {@link GetBotAliasesCommandInput}
 * @returns {@link GetBotAliasesCommandOutput}
 * @see {@link GetBotAliasesCommandInput} for command's `input` shape.
 * @see {@link GetBotAliasesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @public
 */
export class GetBotAliasesCommand extends $Command
  .classBuilder<
    GetBotAliasesCommandInput,
    GetBotAliasesCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBotAliases", {})
  .n("LexModelBuildingServiceClient", "GetBotAliasesCommand")
  .f(void 0, void 0)
  .ser(se_GetBotAliasesCommand)
  .de(de_GetBotAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotAliasesRequest;
      output: GetBotAliasesResponse;
    };
    sdk: {
      input: GetBotAliasesCommandInput;
      output: GetBotAliasesCommandOutput;
    };
  };
}
