// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMediaRequest, GetMediaResponse } from "../models/models_0";
import { GetMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses.
 *
 * For more information, see [Extracting semantic meaning from images and visuals](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/extracting-meaning-from-images.html).
 *
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *
 * You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.
 *
 * @throws {@link MediaTooLargeException} (client fault)
 *
 * The requested media object is too large to be returned.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class GetMediaCommand extends command<GetMediaCommandInput, GetMediaCommandOutput>(
  _ep0,
  _mw0,
  "GetMedia",
  GetMedia$
) {
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
