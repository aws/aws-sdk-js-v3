// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWhatsAppMessageMediaInput, GetWhatsAppMessageMediaOutput } from "../models/models_0";
import { GetWhatsAppMessageMedia$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig,
} from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get a media file from the WhatsApp service. On successful completion the media file is
 *          retrieved from Meta and stored in the specified Amazon S3 bucket. Use either
 *             <code>destinationS3File</code> or <code>destinationS3PresignedUrl</code> for the
 *          destination. If both are used then an <code>InvalidParameterException</code> is
 *          returned.</p>
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
export class GetWhatsAppMessageMediaCommand extends $Command
  .classBuilder<
    GetWhatsAppMessageMediaCommandInput,
    GetWhatsAppMessageMediaCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "GetWhatsAppMessageMedia", {})
  .n("SocialMessagingClient", "GetWhatsAppMessageMediaCommand")
  .sc(GetWhatsAppMessageMedia$)
  .build() {
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
