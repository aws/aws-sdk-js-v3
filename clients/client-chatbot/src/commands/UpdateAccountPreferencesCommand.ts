// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountPreferencesRequest, UpdateAccountPreferencesResult } from "../models/models_0";
import { de_UpdateAccountPreferencesCommand, se_UpdateAccountPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountPreferencesCommand}.
 */
export interface UpdateAccountPreferencesCommandInput extends UpdateAccountPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountPreferencesCommand}.
 */
export interface UpdateAccountPreferencesCommandOutput extends UpdateAccountPreferencesResult, __MetadataBearer {}

/**
 * <p>Updates AWS Chatbot account preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, UpdateAccountPreferencesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, UpdateAccountPreferencesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // UpdateAccountPreferencesRequest
 *   UserAuthorizationRequired: true || false,
 *   TrainingDataCollectionEnabled: true || false,
 * };
 * const command = new UpdateAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountPreferencesResult
 * //   AccountPreferences: { // AccountPreferences
 * //     UserAuthorizationRequired: true || false,
 * //     TrainingDataCollectionEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountPreferencesCommandInput - {@link UpdateAccountPreferencesCommandInput}
 * @returns {@link UpdateAccountPreferencesCommandOutput}
 * @see {@link UpdateAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link UpdateAccountPreferencesException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class UpdateAccountPreferencesCommand extends $Command
  .classBuilder<
    UpdateAccountPreferencesCommandInput,
    UpdateAccountPreferencesCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "UpdateAccountPreferences", {})
  .n("ChatbotClient", "UpdateAccountPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountPreferencesCommand)
  .de(de_UpdateAccountPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountPreferencesRequest;
      output: UpdateAccountPreferencesResult;
    };
    sdk: {
      input: UpdateAccountPreferencesCommandInput;
      output: UpdateAccountPreferencesCommandOutput;
    };
  };
}
