// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetObjectTorrentOutput, GetObjectTorrentRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectTorrent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectTorrentCommand}.
 */
export interface GetObjectTorrentCommandInput extends GetObjectTorrentRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectTorrentCommand}.
 */
export interface GetObjectTorrentCommandOutput extends Omit<GetObjectTorrentOutput, "Body">, __MetadataBearer {
  Body?: StreamingBlobPayloadOutputTypes;
}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing
 *       large files.</p>
 *          <note>
 *             <p>You can get torrent only for objects that are less than 5 GB in size, and that are not encrypted
 *         using server-side encryption with a customer-provided encryption key.</p>
 *          </note>
 *          <p>To use GET, you must have READ access to the object.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectTorrent</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTorrentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTorrentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectTorrentRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectTorrentCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetObjectTorrentOutput
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param GetObjectTorrentCommandInput - {@link GetObjectTorrentCommandInput}
 * @returns {@link GetObjectTorrentCommandOutput}
 * @see {@link GetObjectTorrentCommandInput} for command's `input` shape.
 * @see {@link GetObjectTorrentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To retrieve torrent files for an object
 * ```javascript
 * // The following example retrieves torrent files of an object.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new GetObjectTorrentCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetObjectTorrentCommand extends $Command
  .classBuilder<
    GetObjectTorrentCommandInput,
    GetObjectTorrentCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonS3", "GetObjectTorrent", {})
  .n("S3Client", "GetObjectTorrentCommand")
  .sc(GetObjectTorrent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectTorrentRequest;
      output: GetObjectTorrentOutput;
    };
    sdk: {
      input: GetObjectTorrentCommandInput;
      output: GetObjectTorrentCommandOutput;
    };
  };
}
