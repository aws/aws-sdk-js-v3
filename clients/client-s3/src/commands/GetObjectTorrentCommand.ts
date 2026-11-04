// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep5, _mw4, command } from "../commandBuilder";
import type { GetObjectTorrentOutput, GetObjectTorrentRequest } from "../models/models_0";
import { GetObjectTorrent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing large files.
 *
 * > **Note:** You can get torrent only for objects that are less than 5 GB in size, and that are not encrypted using server-side encryption with a customer-provided encryption key.
 *
 * To use GET, you must have READ access to the object.
 *
 * This functionality is not supported for Amazon S3 on Outposts.
 *
 * The following action is related to `GetObjectTorrent`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
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
 *
 * Base exception class for all service exceptions from S3 service.
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
export class GetObjectTorrentCommand extends command<GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput>(
  _ep5,
  _mw4,
  "GetObjectTorrent",
  GetObjectTorrent$
) {
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
