// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWhatsAppMessageTemplateInput, UpdateWhatsAppMessageTemplateOutput } from "../models/models_0";
import { UpdateWhatsAppMessageTemplate } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig,
} from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWhatsAppMessageTemplateCommand}.
 */
export interface UpdateWhatsAppMessageTemplateCommandInput extends UpdateWhatsAppMessageTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateWhatsAppMessageTemplateCommand}.
 */
export interface UpdateWhatsAppMessageTemplateCommandOutput
  extends UpdateWhatsAppMessageTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Updates an existing WhatsApp message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, UpdateWhatsAppMessageTemplateCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, UpdateWhatsAppMessageTemplateCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // UpdateWhatsAppMessageTemplateInput
 *   id: "STRING_VALUE", // required
 *   metaTemplateId: "STRING_VALUE", // required
 *   templateCategory: "STRING_VALUE",
 *   templateComponents: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateWhatsAppMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWhatsAppMessageTemplateCommandInput - {@link UpdateWhatsAppMessageTemplateCommandInput}
 * @returns {@link UpdateWhatsAppMessageTemplateCommandOutput}
 * @see {@link UpdateWhatsAppMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateWhatsAppMessageTemplateCommandOutput} for command's `response` shape.
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
export class UpdateWhatsAppMessageTemplateCommand extends $Command
  .classBuilder<
    UpdateWhatsAppMessageTemplateCommandInput,
    UpdateWhatsAppMessageTemplateCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "UpdateWhatsAppMessageTemplate", {})
  .n("SocialMessagingClient", "UpdateWhatsAppMessageTemplateCommand")
  .sc(UpdateWhatsAppMessageTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWhatsAppMessageTemplateInput;
      output: {};
    };
    sdk: {
      input: UpdateWhatsAppMessageTemplateCommandInput;
      output: UpdateWhatsAppMessageTemplateCommandOutput;
    };
  };
}
