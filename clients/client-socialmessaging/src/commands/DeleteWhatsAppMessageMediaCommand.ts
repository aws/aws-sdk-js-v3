// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWhatsAppMessageMediaInput, DeleteWhatsAppMessageMediaOutput } from "../models/models_0";
import { DeleteWhatsAppMessageMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWhatsAppMessageMediaCommand}.
 */
export interface DeleteWhatsAppMessageMediaCommandInput extends DeleteWhatsAppMessageMediaInput {}
/**
 * @public
 *
 * The output of {@link DeleteWhatsAppMessageMediaCommand}.
 */
export interface DeleteWhatsAppMessageMediaCommandOutput extends DeleteWhatsAppMessageMediaOutput, __MetadataBearer {}

/**
 * Delete a media object from the WhatsApp service. If the object is still in an Amazon S3 bucket you should delete it from there too.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, DeleteWhatsAppMessageMediaCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, DeleteWhatsAppMessageMediaCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // DeleteWhatsAppMessageMediaInput
 *   mediaId: "STRING_VALUE", // required
 *   originationPhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatsAppMessageMediaCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWhatsAppMessageMediaOutput
 * //   success: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteWhatsAppMessageMediaCommandInput - {@link DeleteWhatsAppMessageMediaCommandInput}
 * @returns {@link DeleteWhatsAppMessageMediaCommandOutput}
 * @see {@link DeleteWhatsAppMessageMediaCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatsAppMessageMediaCommandOutput} for command's `response` shape.
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
export class DeleteWhatsAppMessageMediaCommand extends command<DeleteWhatsAppMessageMediaCommandInput, DeleteWhatsAppMessageMediaCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWhatsAppMessageMedia",
  DeleteWhatsAppMessageMedia$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatsAppMessageMediaInput;
      output: DeleteWhatsAppMessageMediaOutput;
    };
    sdk: {
      input: DeleteWhatsAppMessageMediaCommandInput;
      output: DeleteWhatsAppMessageMediaCommandOutput;
    };
  };
}
