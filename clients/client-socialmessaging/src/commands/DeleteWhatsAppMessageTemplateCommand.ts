// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWhatsAppMessageTemplateInput, DeleteWhatsAppMessageTemplateOutput } from "../models/models_0";
import { DeleteWhatsAppMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteWhatsAppMessageTemplateCommandOutput extends DeleteWhatsAppMessageTemplateOutput, __MetadataBearer {}

/**
 * <p>Deletes a WhatsApp message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DeleteWhatsAppMessageTemplateCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DeleteWhatsAppMessageTemplateCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
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
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DeleteWhatsAppMessageTemplateCommand extends command<DeleteWhatsAppMessageTemplateCommandInput, DeleteWhatsAppMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWhatsAppMessageTemplate",
  DeleteWhatsAppMessageTemplate$
) {
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
