// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw5, command } from "../commandBuilder";
import type { PutObjectTaggingOutput, PutObjectTaggingRequest } from "../models/models_0";
import { PutObjectTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutObjectTaggingCommand}.
 */
export interface PutObjectTaggingCommandInput extends PutObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutObjectTaggingCommand}.
 */
export interface PutObjectTaggingCommandOutput extends PutObjectTaggingOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. For more information, see [Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html).
 *
 * You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html).
 *
 * For tagging-related restrictions related to characters and encodings, see [Tag Restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html). Note that Amazon S3 limits the maximum number of tags to 10 tags per object.
 *
 * To use this operation, you must have permission to perform the `s3:PutObjectTagging` action. By default, the bucket owner has this permission and can grant this permission to others.
 *
 * To put tags of any other version, use the `versionId` query parameter. You also need permission for the `s3:PutObjectVersionTagging` action.
 *
 * `PutObjectTagging` has the following special errors. For more Amazon S3 errors see, [Error Responses](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html).
 *
 * - `InvalidTag` - The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see [Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html).
 * - `MalformedXML` - The XML provided does not match the schema.
 * - `OperationAborted` - A conflicting conditional action is currently in progress against this resource. Please try again.
 * - `InternalError` - The service was unable to apply the provided tag to the object.
 *
 * The following operations are related to `PutObjectTagging`:
 *
 * - [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html)
 * - [DeleteObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   Tagging: { // Tagging
 *     TagSet: [ // TagSet // required
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   RequestPayer: "requester",
 * };
 * const command = new PutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutObjectTaggingCommandInput - {@link PutObjectTaggingCommandInput}
 * @returns {@link PutObjectTaggingCommandOutput}
 * @see {@link PutObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link PutObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To add tags to an existing object
 * ```javascript
 * // The following example adds tags to an existing object.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg",
 *   Tagging: {
 *     TagSet: [
 *       {
 *         Key: "Key3",
 *         Value: "Value3"
 *       },
 *       {
 *         Key: "Key4",
 *         Value: "Value4"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VersionId: "null"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutObjectTaggingCommand extends command<PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput>(
  _ep5,
  _mw5,
  "PutObjectTagging",
  PutObjectTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutObjectTaggingRequest;
      output: PutObjectTaggingOutput;
    };
    sdk: {
      input: PutObjectTaggingCommandInput;
      output: PutObjectTaggingCommandOutput;
    };
  };
}
