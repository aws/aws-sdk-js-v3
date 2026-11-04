// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWhatsAppMessageTemplateInput, CreateWhatsAppMessageTemplateOutput } from "../models/models_0";
import { CreateWhatsAppMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateWhatsAppMessageTemplateCommandOutput extends CreateWhatsAppMessageTemplateOutput, __MetadataBearer {}

/**
 * Creates a new WhatsApp message template from a custom definition.
 *
 * > **Note:** Amazon Web Services End User Messaging Social does not store any WhatsApp message template content.
 *
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
export class CreateWhatsAppMessageTemplateCommand extends command<CreateWhatsAppMessageTemplateCommandInput, CreateWhatsAppMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatsAppMessageTemplate",
  CreateWhatsAppMessageTemplate$
) {
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
