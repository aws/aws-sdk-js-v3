// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWhatsAppMessageTemplateInput, GetWhatsAppMessageTemplateOutput } from "../models/models_0";
import { GetWhatsAppMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWhatsAppMessageTemplateCommand}.
 */
export interface GetWhatsAppMessageTemplateCommandInput extends GetWhatsAppMessageTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppMessageTemplateCommand}.
 */
export interface GetWhatsAppMessageTemplateCommandOutput extends GetWhatsAppMessageTemplateOutput, __MetadataBearer {}

/**
 * Retrieves a specific WhatsApp message template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppMessageTemplateCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppMessageTemplateCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppMessageTemplateInput
 *   metaTemplateId: "STRING_VALUE",
 *   id: "STRING_VALUE", // required
 *   templateName: "STRING_VALUE",
 *   templateLanguageCode: "STRING_VALUE",
 * };
 * const command = new GetWhatsAppMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppMessageTemplateOutput
 * //   template: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWhatsAppMessageTemplateCommandInput - {@link GetWhatsAppMessageTemplateCommandInput}
 * @returns {@link GetWhatsAppMessageTemplateCommandOutput}
 * @see {@link GetWhatsAppMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppMessageTemplateCommandOutput} for command's `response` shape.
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
export class GetWhatsAppMessageTemplateCommand extends command<GetWhatsAppMessageTemplateCommandInput, GetWhatsAppMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetWhatsAppMessageTemplate",
  GetWhatsAppMessageTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppMessageTemplateInput;
      output: GetWhatsAppMessageTemplateOutput;
    };
    sdk: {
      input: GetWhatsAppMessageTemplateCommandInput;
      output: GetWhatsAppMessageTemplateCommandOutput;
    };
  };
}
