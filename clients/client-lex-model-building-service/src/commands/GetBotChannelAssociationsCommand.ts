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
import {
  GetBotChannelAssociationsRequest,
  GetBotChannelAssociationsResponse,
  GetBotChannelAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBotChannelAssociationsCommand, se_GetBotChannelAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotChannelAssociationsCommand}.
 */
export interface GetBotChannelAssociationsCommandInput extends GetBotChannelAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetBotChannelAssociationsCommand}.
 */
export interface GetBotChannelAssociationsCommandOutput extends GetBotChannelAssociationsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of all of the channels associated with the
 *       specified bot. </p>
 *          <p>The <code>GetBotChannelAssociations</code> operation requires
 *       permissions for the <code>lex:GetBotChannelAssociations</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotChannelAssociationsRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetBotChannelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetBotChannelAssociationsResponse
 * //   botChannelAssociations: [ // BotChannelAssociationList
 * //     { // BotChannelAssociation
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       botAlias: "STRING_VALUE",
 * //       botName: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       type: "Facebook" || "Slack" || "Twilio-Sms" || "Kik",
 * //       botConfiguration: { // ChannelConfigurationMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "IN_PROGRESS" || "CREATED" || "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotChannelAssociationsCommandInput - {@link GetBotChannelAssociationsCommandInput}
 * @returns {@link GetBotChannelAssociationsCommandOutput}
 * @see {@link GetBotChannelAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetBotChannelAssociationsCommand extends $Command
  .classBuilder<
    GetBotChannelAssociationsCommandInput,
    GetBotChannelAssociationsCommandOutput,
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
  .s("AWSDeepSenseModelBuildingService", "GetBotChannelAssociations", {})
  .n("LexModelBuildingServiceClient", "GetBotChannelAssociationsCommand")
  .f(void 0, GetBotChannelAssociationsResponseFilterSensitiveLog)
  .ser(se_GetBotChannelAssociationsCommand)
  .de(de_GetBotChannelAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotChannelAssociationsRequest;
      output: GetBotChannelAssociationsResponse;
    };
    sdk: {
      input: GetBotChannelAssociationsCommandInput;
      output: GetBotChannelAssociationsCommandOutput;
    };
  };
}
