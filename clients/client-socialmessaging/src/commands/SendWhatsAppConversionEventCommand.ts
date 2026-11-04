// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendWhatsAppConversionEventInput, SendWhatsAppConversionEventOutput } from "../models/models_0";
import { SendWhatsAppConversionEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendWhatsAppConversionEventCommand}.
 */
export interface SendWhatsAppConversionEventCommandInput extends SendWhatsAppConversionEventInput {}
/**
 * @public
 *
 * The output of {@link SendWhatsAppConversionEventCommand}.
 */
export interface SendWhatsAppConversionEventCommandOutput extends SendWhatsAppConversionEventOutput, __MetadataBearer {}

/**
 * Sends a conversion event to Meta's Conversions API for the specified WhatsApp Business Account dataset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, SendWhatsAppConversionEventCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, SendWhatsAppConversionEventCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // SendWhatsAppConversionEventInput
 *   id: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 *   eventData: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new SendWhatsAppConversionEventCommand(input);
 * const response = await client.send(command);
 * // { // SendWhatsAppConversionEventOutput
 * //   requestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendWhatsAppConversionEventCommandInput - {@link SendWhatsAppConversionEventCommandInput}
 * @returns {@link SendWhatsAppConversionEventCommandOutput}
 * @see {@link SendWhatsAppConversionEventCommandInput} for command's `input` shape.
 * @see {@link SendWhatsAppConversionEventCommandOutput} for command's `response` shape.
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
export class SendWhatsAppConversionEventCommand extends command<SendWhatsAppConversionEventCommandInput, SendWhatsAppConversionEventCommandOutput>(
  _ep0,
  _mw0,
  "SendWhatsAppConversionEvent",
  SendWhatsAppConversionEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendWhatsAppConversionEventInput;
      output: SendWhatsAppConversionEventOutput;
    };
    sdk: {
      input: SendWhatsAppConversionEventCommandInput;
      output: SendWhatsAppConversionEventCommandOutput;
    };
  };
}
