// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountPreferencesRequest, GetAccountPreferencesResult } from "../models/models_0";
import { de_GetAccountPreferencesCommand, se_GetAccountPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountPreferencesCommand}.
 */
export interface GetAccountPreferencesCommandInput extends GetAccountPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountPreferencesCommand}.
 */
export interface GetAccountPreferencesCommandOutput extends GetAccountPreferencesResult, __MetadataBearer {}

/**
 * Get Chatbot account level preferences
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, GetAccountPreferencesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, GetAccountPreferencesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = {};
 * const command = new GetAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountPreferencesResult
 * //   AccountPreferences: { // AccountPreferences
 * //     UserAuthorizationRequired: true || false,
 * //     TrainingDataCollectionEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountPreferencesCommandInput - {@link GetAccountPreferencesCommandInput}
 * @returns {@link GetAccountPreferencesCommandOutput}
 * @see {@link GetAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link GetAccountPreferencesException} (server fault)
 *  We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  Your request input doesn't meet the constraints that AWS Chatbot requires.
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 */
export class GetAccountPreferencesCommand extends $Command
  .classBuilder<
    GetAccountPreferencesCommandInput,
    GetAccountPreferencesCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "GetAccountPreferences", {})
  .n("ChatbotClient", "GetAccountPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountPreferencesCommand)
  .de(de_GetAccountPreferencesCommand)
  .build() {}
