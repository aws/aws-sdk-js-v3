// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWhatsAppMessageTemplateInput, CreateWhatsAppMessageTemplateOutput } from "../models/models_0";
import { CreateWhatsAppMessageTemplate } from "../schemas/schemas_1_App";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWhatsAppMessageTemplateCommand}.
 */
export interface CreateWhatsAppMessageTemplateCommandInput extends CreateWhatsAppMessageTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppMessageTemplateCommand}.
 */
export interface CreateWhatsAppMessageTemplateCommandOutput
  extends CreateWhatsAppMessageTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new WhatsApp message template from a custom definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, CreateWhatsAppMessageTemplateCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, CreateWhatsAppMessageTemplateCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // CreateWhatsAppMessageTemplateInput
 *   templateDefinition: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new CreateWhatsAppMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatsAppMessageTemplateOutput
 * //   metaTemplateId: "STRING_VALUE",
 * //   templateStatus: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatsAppMessageTemplateCommandInput - {@link CreateWhatsAppMessageTemplateCommandInput}
 * @returns {@link CreateWhatsAppMessageTemplateCommandOutput}
 * @see {@link CreateWhatsAppMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateWhatsAppMessageTemplateCommandOutput} for command's `response` shape.
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
export class CreateWhatsAppMessageTemplateCommand extends $Command
  .classBuilder<
    CreateWhatsAppMessageTemplateCommandInput,
    CreateWhatsAppMessageTemplateCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "CreateWhatsAppMessageTemplate", {})
  .n("SocialMessagingClient", "CreateWhatsAppMessageTemplateCommand")
  .sc(CreateWhatsAppMessageTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatsAppMessageTemplateInput;
      output: CreateWhatsAppMessageTemplateOutput;
    };
    sdk: {
      input: CreateWhatsAppMessageTemplateCommandInput;
      output: CreateWhatsAppMessageTemplateCommandOutput;
    };
  };
}
