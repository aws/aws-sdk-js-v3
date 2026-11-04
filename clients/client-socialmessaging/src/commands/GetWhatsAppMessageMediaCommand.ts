// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWhatsAppMessageMediaInput, GetWhatsAppMessageMediaOutput } from "../models/models_0";
import { GetWhatsAppMessageMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWhatsAppMessageMediaCommand}.
 */
export interface GetWhatsAppMessageMediaCommandInput extends GetWhatsAppMessageMediaInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppMessageMediaCommand}.
 */
export interface GetWhatsAppMessageMediaCommandOutput extends GetWhatsAppMessageMediaOutput, __MetadataBearer {}

/**
 * Get a media file from the WhatsApp service. On successful completion the media file is retrieved from Meta and stored in the specified Amazon S3 bucket. Use either `destinationS3File` or `destinationS3PresignedUrl` for the destination. If both are used then an `InvalidParameterException` is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppMessageMediaCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppMessageMediaCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppMessageMediaInput
 *   mediaId: "STRING_VALUE", // required
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   metadataOnly: true || false,
 *   destinationS3PresignedUrl: { // S3PresignedUrl
 *     url: "STRING_VALUE", // required
 *     headers: { // Headers // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   destinationS3File: { // S3File
 *     bucketName: "STRING_VALUE", // required
 *     key: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetWhatsAppMessageMediaCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppMessageMediaOutput
 * //   mimeType: "STRING_VALUE",
 * //   fileSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetWhatsAppMessageMediaCommandInput - {@link GetWhatsAppMessageMediaCommandInput}
 * @returns {@link GetWhatsAppMessageMediaCommandOutput}
 * @see {@link GetWhatsAppMessageMediaCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppMessageMediaCommandOutput} for command's `response` shape.
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
export class GetWhatsAppMessageMediaCommand extends command<GetWhatsAppMessageMediaCommandInput, GetWhatsAppMessageMediaCommandOutput>(
  _ep0,
  _mw0,
  "GetWhatsAppMessageMedia",
  GetWhatsAppMessageMedia$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppMessageMediaInput;
      output: GetWhatsAppMessageMediaOutput;
    };
    sdk: {
      input: GetWhatsAppMessageMediaCommandInput;
      output: GetWhatsAppMessageMediaCommandOutput;
    };
  };
}
