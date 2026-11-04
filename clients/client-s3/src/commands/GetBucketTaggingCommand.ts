// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketTaggingOutput, GetBucketTaggingRequest } from "../models/models_0";
import { GetBucketTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketTaggingCommand}.
 */
export interface GetBucketTaggingCommandInput extends GetBucketTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketTaggingCommand}.
 */
export interface GetBucketTaggingCommandOutput extends GetBucketTaggingOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns the tag set associated with the general purpose bucket.
 *
 * To use this operation, you must have permission to perform the `s3:GetBucketTagging` action. By default, the bucket owner has this permission and can grant this permission to others.
 *
 * `GetBucketTagging` has the following special error:
 *
 * - Error code: `NoSuchTagSet`
 *
 *   - Description: There is no tag set associated with the bucket.
 *
 * The following operations are related to `GetBucketTagging`:
 *
 * - [PutBucketTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html)
 * - [DeleteBucketTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketTaggingOutput
 * //   TagSet: [ // TagSet // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketTaggingCommandInput - {@link GetBucketTaggingCommandInput}
 * @returns {@link GetBucketTaggingCommandOutput}
 * @see {@link GetBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get tag set associated with a bucket
 * ```javascript
 * // The following example returns tag set associated with a bucket
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagSet: [
 *     {
 *       Key: "key1",
 *       Value: "value1"
 *     },
 *     {
 *       Key: "key2",
 *       Value: "value2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketTaggingCommand extends command<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketTagging",
  GetBucketTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketTaggingRequest;
      output: GetBucketTaggingOutput;
    };
    sdk: {
      input: GetBucketTaggingCommandInput;
      output: GetBucketTaggingCommandOutput;
    };
  };
}
