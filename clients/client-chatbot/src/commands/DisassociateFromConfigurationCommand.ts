// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateFromConfigurationRequest, DisassociateFromConfigurationResult } from "../models/models_0";
import { DisassociateFromConfiguration$ } from "../schemas/schemas_0";

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
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
 *
 * @example Disassociate a custom action from a configuration
 * ```javascript
 * //
 * const input = {
 *   ChatConfiguration: "arn:aws:chatbot::1234567890:chat-configuration/slack-channel/my-channel",
 *   Resource: "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * };
 * const command = new DisassociateFromConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DisassociateFromConfiguration", {})
  .n("ChatbotClient", "DisassociateFromConfigurationCommand")
  .sc(DisassociateFromConfiguration$)
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
