// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWhatsAppBusinessPublicKeyInput, GetWhatsAppBusinessPublicKeyOutput } from "../models/models_0";
import { GetWhatsAppBusinessPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWhatsAppBusinessPublicKeyCommand}.
 */
export interface GetWhatsAppBusinessPublicKeyCommandInput extends GetWhatsAppBusinessPublicKeyInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppBusinessPublicKeyCommand}.
 */
export interface GetWhatsAppBusinessPublicKeyCommandOutput extends GetWhatsAppBusinessPublicKeyOutput, __MetadataBearer {}

/**
 * Retrieves the business public key for a phone number and its signature status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppBusinessPublicKeyCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppBusinessPublicKeyCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppBusinessPublicKeyInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new GetWhatsAppBusinessPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppBusinessPublicKeyOutput
 * //   businessPublicKey: "STRING_VALUE",
 * //   businessPublicKeySignatureStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWhatsAppBusinessPublicKeyCommandInput - {@link GetWhatsAppBusinessPublicKeyCommandInput}
 * @returns {@link GetWhatsAppBusinessPublicKeyCommandOutput}
 * @see {@link GetWhatsAppBusinessPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppBusinessPublicKeyCommandOutput} for command's `response` shape.
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
export class GetWhatsAppBusinessPublicKeyCommand extends command<GetWhatsAppBusinessPublicKeyCommandInput, GetWhatsAppBusinessPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "GetWhatsAppBusinessPublicKey",
  GetWhatsAppBusinessPublicKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppBusinessPublicKeyInput;
      output: GetWhatsAppBusinessPublicKeyOutput;
    };
    sdk: {
      input: GetWhatsAppBusinessPublicKeyCommandInput;
      output: GetWhatsAppBusinessPublicKeyCommandOutput;
    };
  };
}
