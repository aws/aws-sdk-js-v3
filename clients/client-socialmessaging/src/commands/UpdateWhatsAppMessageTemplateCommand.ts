// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWhatsAppMessageTemplateInput, UpdateWhatsAppMessageTemplateOutput } from "../models/models_0";
import { UpdateWhatsAppMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateWhatsAppMessageTemplateCommandOutput extends UpdateWhatsAppMessageTemplateOutput, __MetadataBearer {}

/**
 * Updates an existing WhatsApp message template.
 *
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
 *   metaTemplateId: "STRING_VALUE",
 *   templateName: "STRING_VALUE",
 *   templateLanguageCode: "STRING_VALUE",
 *   parameterFormat: "STRING_VALUE",
 *   templateCategory: "STRING_VALUE",
 *   templateComponents: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   ctaUrlLinkTrackingOptedOut: true || false,
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
export class UpdateWhatsAppMessageTemplateCommand extends command<UpdateWhatsAppMessageTemplateCommandInput, UpdateWhatsAppMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWhatsAppMessageTemplate",
  UpdateWhatsAppMessageTemplate$
) {
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
