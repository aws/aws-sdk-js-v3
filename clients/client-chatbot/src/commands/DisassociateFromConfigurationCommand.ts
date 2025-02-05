// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateFromConfigurationRequest, DisassociateFromConfigurationResult } from "../models/models_0";
import {
  de_DisassociateFromConfigurationCommand,
  se_DisassociateFromConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFromConfigurationCommand}.
 */
export interface DisassociateFromConfigurationCommandInput extends DisassociateFromConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromConfigurationCommand}.
 */
export interface DisassociateFromConfigurationCommandOutput
  extends DisassociateFromConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Unlink a resource, for example a custom action, from a channel configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DisassociateFromConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DisassociateFromConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChatbotClient(config);
 * const input = { // DisassociateFromConfigurationRequest
 *   Resource: "STRING_VALUE", // required
 *   ChatConfiguration: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFromConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromConfigurationCommandInput - {@link DisassociateFromConfigurationCommandInput}
 * @returns {@link DisassociateFromConfigurationCommandOutput}
 * @see {@link DisassociateFromConfigurationCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 * @example Disassociate a custom action from a configuration
 * ```javascript
 * //
 * const input = {
 *   "ChatConfiguration": "arn:aws:chatbot::1234567890:chat-configuration/slack-channel/my-channel",
 *   "Resource": "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * };
 * const command = new DisassociateFromConfigurationCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class DisassociateFromConfigurationCommand extends $Command
  .classBuilder<
    DisassociateFromConfigurationCommandInput,
    DisassociateFromConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DisassociateFromConfiguration", {})
  .n("ChatbotClient", "DisassociateFromConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateFromConfigurationCommand)
  .de(de_DisassociateFromConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFromConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DisassociateFromConfigurationCommandInput;
      output: DisassociateFromConfigurationCommandOutput;
    };
  };
}
