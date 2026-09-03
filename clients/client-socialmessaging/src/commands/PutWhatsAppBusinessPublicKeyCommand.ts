// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutWhatsAppBusinessPublicKeyInput, PutWhatsAppBusinessPublicKeyOutput } from "../models/models_0";
import { PutWhatsAppBusinessPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutWhatsAppBusinessPublicKeyCommand}.
 */
export interface PutWhatsAppBusinessPublicKeyCommandInput extends PutWhatsAppBusinessPublicKeyInput {}
/**
 * @public
 *
 * The output of {@link PutWhatsAppBusinessPublicKeyCommand}.
 */
export interface PutWhatsAppBusinessPublicKeyCommandOutput extends PutWhatsAppBusinessPublicKeyOutput, __MetadataBearer {}

/**
 * Sets the business public key used to encrypt the data exchanged with the endpoint of a data exchange Flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, PutWhatsAppBusinessPublicKeyCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, PutWhatsAppBusinessPublicKeyCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // PutWhatsAppBusinessPublicKeyInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   businessPublicKey: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new PutWhatsAppBusinessPublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWhatsAppBusinessPublicKeyCommandInput - {@link PutWhatsAppBusinessPublicKeyCommandInput}
 * @returns {@link PutWhatsAppBusinessPublicKeyCommandOutput}
 * @see {@link PutWhatsAppBusinessPublicKeyCommandInput} for command's `input` shape.
 * @see {@link PutWhatsAppBusinessPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class PutWhatsAppBusinessPublicKeyCommand extends command<PutWhatsAppBusinessPublicKeyCommandInput, PutWhatsAppBusinessPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "PutWhatsAppBusinessPublicKey",
  PutWhatsAppBusinessPublicKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWhatsAppBusinessPublicKeyInput;
      output: {};
    };
    sdk: {
      input: PutWhatsAppBusinessPublicKeyCommandInput;
      output: PutWhatsAppBusinessPublicKeyCommandOutput;
    };
  };
}
