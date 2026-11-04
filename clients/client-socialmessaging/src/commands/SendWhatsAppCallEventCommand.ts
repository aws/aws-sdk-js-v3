// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendWhatsAppCallEventInput, SendWhatsAppCallEventOutput } from "../models/models_0";
import { SendWhatsAppCallEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendWhatsAppCallEventCommand}.
 */
export interface SendWhatsAppCallEventCommandInput extends SendWhatsAppCallEventInput {}
/**
 * @public
 *
 * The output of {@link SendWhatsAppCallEventCommand}.
 */
export interface SendWhatsAppCallEventCommandOutput extends SendWhatsAppCallEventOutput, __MetadataBearer {}

/**
 * Sends a WhatsApp calling event, such as connecting or terminating a call, for a business phone number. This operation passes the event through to Meta. To use this operation, the origination phone number must belong to a WhatsApp Business Account that is linked to your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, SendWhatsAppCallEventCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, SendWhatsAppCallEventCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // SendWhatsAppCallEventInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   metaApiVersion: "STRING_VALUE", // required
 *   callEvent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new SendWhatsAppCallEventCommand(input);
 * const response = await client.send(command);
 * // { // SendWhatsAppCallEventOutput
 * //   callId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendWhatsAppCallEventCommandInput - {@link SendWhatsAppCallEventCommandInput}
 * @returns {@link SendWhatsAppCallEventCommandOutput}
 * @see {@link SendWhatsAppCallEventCommandInput} for command's `input` shape.
 * @see {@link SendWhatsAppCallEventCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
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
export class SendWhatsAppCallEventCommand extends command<SendWhatsAppCallEventCommandInput, SendWhatsAppCallEventCommandOutput>(
  _ep0,
  _mw0,
  "SendWhatsAppCallEvent",
  SendWhatsAppCallEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendWhatsAppCallEventInput;
      output: SendWhatsAppCallEventOutput;
    };
    sdk: {
      input: SendWhatsAppCallEventCommandInput;
      output: SendWhatsAppCallEventCommandOutput;
    };
  };
}
