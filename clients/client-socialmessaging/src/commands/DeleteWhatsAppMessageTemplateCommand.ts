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
 * Deletes a WhatsApp message template.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Thrown when performing an action because a dependency would be broken.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request contains an invalid parameter value.
 *
 * @throws {@link SocialMessagingServiceException}
 *
 * Base exception class for all service exceptions from SocialMessaging service.
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
