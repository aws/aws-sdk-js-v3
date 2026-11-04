// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostWhatsAppMessageMediaInput, PostWhatsAppMessageMediaOutput } from "../models/models_0";
import { PostWhatsAppMessageMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Upload a media file to the WhatsApp service. Only the specified `originationPhoneNumberId` has the permissions to send the media file when using [SendWhatsAppMessage](https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_SendWhatsAppMessage.html). You must use either `sourceS3File` or `sourceS3PresignedUrl` for the source. If both or neither are specified then an `InvalidParameterException` is returned.
 *
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
export class PostWhatsAppMessageMediaCommand extends command<PostWhatsAppMessageMediaCommandInput, PostWhatsAppMessageMediaCommandOutput>(
  _ep0,
  _mw0,
  "PostWhatsAppMessageMedia",
  PostWhatsAppMessageMedia$
) {
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
