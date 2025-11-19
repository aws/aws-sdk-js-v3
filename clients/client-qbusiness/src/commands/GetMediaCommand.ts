// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMediaRequest, GetMediaResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { GetMedia } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMediaCommand}.
 */
export interface GetMediaCommandInput extends GetMediaRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaCommand}.
 */
export interface GetMediaCommandOutput extends GetMediaResponse, __MetadataBearer {}

/**
 * <p>Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html">Extracting semantic meaning from images and visuals</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetMediaCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetMediaCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetMediaRequest
 *   applicationId: "STRING_VALUE", // required
 *   conversationId: "STRING_VALUE", // required
 *   messageId: "STRING_VALUE", // required
 *   mediaId: "STRING_VALUE", // required
 * };
 * const command = new GetMediaCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaResponse
 * //   mediaBytes: new Uint8Array(),
 * //   mediaMimeType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMediaCommandInput - {@link GetMediaCommandInput}
 * @returns {@link GetMediaCommandOutput}
 * @see {@link GetMediaCommandInput} for command's `input` shape.
 * @see {@link GetMediaCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
 *
 * @throws {@link MediaTooLargeException} (client fault)
 *  <p>The requested media object is too large to be returned.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class GetMediaCommand extends $Command
  .classBuilder<
    GetMediaCommandInput,
    GetMediaCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "GetMedia", {})
  .n("QBusinessClient", "GetMediaCommand")
  .sc(GetMedia)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaRequest;
      output: GetMediaResponse;
    };
    sdk: {
      input: GetMediaCommandInput;
      output: GetMediaCommandOutput;
    };
  };
}
