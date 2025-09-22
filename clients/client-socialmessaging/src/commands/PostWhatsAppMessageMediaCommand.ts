// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PostWhatsAppMessageMediaInput, PostWhatsAppMessageMediaOutput } from "../models/models_0";
import { PostWhatsAppMessageMedia } from "../schemas/schemas_1_App";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostWhatsAppMessageMediaCommand}.
 */
export interface PostWhatsAppMessageMediaCommandInput extends PostWhatsAppMessageMediaInput {}
/**
 * @public
 *
 * The output of {@link PostWhatsAppMessageMediaCommand}.
 */
export interface PostWhatsAppMessageMediaCommandOutput extends PostWhatsAppMessageMediaOutput, __MetadataBearer {}

/**
 * <p>Upload a media file to the WhatsApp service. Only the specified
 *             <code>originationPhoneNumberId</code> has the permissions to send the media file when
 *          using <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_SendWhatsAppMessage.html">SendWhatsAppMessage</a>. You must use either <code>sourceS3File</code>
 *          or <code>sourceS3PresignedUrl</code> for the source. If both or neither are specified then an
 *             <code>InvalidParameterException</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, PostWhatsAppMessageMediaCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, PostWhatsAppMessageMediaCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // PostWhatsAppMessageMediaInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   sourceS3PresignedUrl: { // S3PresignedUrl
 *     url: "STRING_VALUE", // required
 *     headers: { // Headers // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   sourceS3File: { // S3File
 *     bucketName: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PostWhatsAppMessageMediaCommand(input);
 * const response = await client.send(command);
 * // { // PostWhatsAppMessageMediaOutput
 * //   mediaId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PostWhatsAppMessageMediaCommandInput - {@link PostWhatsAppMessageMediaCommandInput}
 * @returns {@link PostWhatsAppMessageMediaCommandOutput}
 * @see {@link PostWhatsAppMessageMediaCommandInput} for command's `input` shape.
 * @see {@link PostWhatsAppMessageMediaCommandOutput} for command's `response` shape.
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
export class PostWhatsAppMessageMediaCommand extends $Command
  .classBuilder<
    PostWhatsAppMessageMediaCommandInput,
    PostWhatsAppMessageMediaCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "PostWhatsAppMessageMedia", {})
  .n("SocialMessagingClient", "PostWhatsAppMessageMediaCommand")
  .sc(PostWhatsAppMessageMedia)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostWhatsAppMessageMediaInput;
      output: PostWhatsAppMessageMediaOutput;
    };
    sdk: {
      input: PostWhatsAppMessageMediaCommandInput;
      output: PostWhatsAppMessageMediaCommandOutput;
    };
  };
}
