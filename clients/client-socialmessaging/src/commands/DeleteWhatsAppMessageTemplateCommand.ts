// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWhatsAppMessageTemplateInput, DeleteWhatsAppMessageTemplateOutput } from "../models/models_0";
import {
  de_DeleteWhatsAppMessageTemplateCommand,
  se_DeleteWhatsAppMessageTemplateCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWhatsAppMessageTemplateCommand}.
 */
export interface DeleteWhatsAppMessageTemplateCommandInput extends DeleteWhatsAppMessageTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteWhatsAppMessageTemplateCommand}.
 */
export interface DeleteWhatsAppMessageTemplateCommandOutput
  extends DeleteWhatsAppMessageTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a WhatsApp message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DeleteWhatsAppMessageTemplateCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DeleteWhatsAppMessageTemplateCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * const client = new SocialMessagingClient(config);
 * const input = { // DeleteWhatsAppMessageTemplateInput
 *   metaTemplateId: "STRING_VALUE",
 *   deleteAllLanguages: true || false,
 *   id: "STRING_VALUE", // required
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatsAppMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatsAppMessageTemplateCommandInput - {@link DeleteWhatsAppMessageTemplateCommandInput}
 * @returns {@link DeleteWhatsAppMessageTemplateCommandOutput}
 * @see {@link DeleteWhatsAppMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatsAppMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class DeleteWhatsAppMessageTemplateCommand extends $Command
  .classBuilder<
    DeleteWhatsAppMessageTemplateCommandInput,
    DeleteWhatsAppMessageTemplateCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SocialMessaging", "DeleteWhatsAppMessageTemplate", {})
  .n("SocialMessagingClient", "DeleteWhatsAppMessageTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWhatsAppMessageTemplateCommand)
  .de(de_DeleteWhatsAppMessageTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatsAppMessageTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteWhatsAppMessageTemplateCommandInput;
      output: DeleteWhatsAppMessageTemplateCommandOutput;
    };
  };
}
