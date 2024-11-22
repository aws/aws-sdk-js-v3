// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateToConfigurationRequest, AssociateToConfigurationResult } from "../models/models_0";
import { de_AssociateToConfigurationCommand, se_AssociateToConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateToConfigurationCommand}.
 */
export interface AssociateToConfigurationCommandInput extends AssociateToConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateToConfigurationCommand}.
 */
export interface AssociateToConfigurationCommandOutput extends AssociateToConfigurationResult, __MetadataBearer {}

/**
 * <p>Links a resource (for example, a custom action) to a channel configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, AssociateToConfigurationCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, AssociateToConfigurationCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // AssociateToConfigurationRequest
 *   Resource: "STRING_VALUE", // required
 *   ChatConfiguration: "STRING_VALUE", // required
 * };
 * const command = new AssociateToConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateToConfigurationCommandInput - {@link AssociateToConfigurationCommandInput}
 * @returns {@link AssociateToConfigurationCommandOutput}
 * @see {@link AssociateToConfigurationCommandInput} for command's `input` shape.
 * @see {@link AssociateToConfigurationCommandOutput} for command's `response` shape.
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
 */
export class AssociateToConfigurationCommand extends $Command
  .classBuilder<
    AssociateToConfigurationCommandInput,
    AssociateToConfigurationCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "AssociateToConfiguration", {})
  .n("ChatbotClient", "AssociateToConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_AssociateToConfigurationCommand)
  .de(de_AssociateToConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateToConfigurationRequest;
      output: {};
    };
    sdk: {
      input: AssociateToConfigurationCommandInput;
      output: AssociateToConfigurationCommandOutput;
    };
  };
}
