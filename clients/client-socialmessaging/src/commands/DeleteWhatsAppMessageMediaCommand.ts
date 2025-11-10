// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWhatsAppMessageMediaInput, DeleteWhatsAppMessageMediaOutput } from "../models/models_0";
import { DeleteWhatsAppMessageMedia } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a media object from the WhatsApp service. If the object is still in an Amazon S3 bucket you should delete it from there too.</p>
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
export class DeleteWhatsAppMessageMediaCommand extends $Command
  .classBuilder<
    DeleteWhatsAppMessageMediaCommandInput,
    DeleteWhatsAppMessageMediaCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "DeleteWhatsAppMessageMedia", {})
  .n("SocialMessagingClient", "DeleteWhatsAppMessageMediaCommand")
  .sc(DeleteWhatsAppMessageMedia)
  .build() {
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
