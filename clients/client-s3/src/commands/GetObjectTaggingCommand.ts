// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { GetObjectTaggingOutput, GetObjectTaggingRequest } from "../models/models_0";
import { GetObjectTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetObjectTaggingCommand}.
 */
export interface GetObjectTaggingCommandInput extends GetObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectTaggingCommand}.
 */
export interface GetObjectTaggingCommandOutput extends GetObjectTaggingOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object.
 *
 * To use this operation, you must have permission to perform the `s3:GetObjectTagging` action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the `s3:GetObjectVersionTagging` action.
 *
 * By default, the bucket owner has this permission and can grant this permission to others.
 *
 * For information about the Amazon S3 object tagging feature, see [Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html).
 *
 * The following actions are related to `GetObjectTagging`:
 *
 * - [DeleteObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html)
 * - [GetObjectAttributes](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)
 * - [PutObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   RequestPayer: "requester",
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
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
 * @param GetObjectTaggingCommandInput - {@link GetObjectTaggingCommandInput}
 * @returns {@link GetObjectTaggingCommandOutput}
 * @see {@link GetObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link GetObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To retrieve tag set of a specific object version
 * ```javascript
 * // The following example retrieves tag set of an object. The request specifies object version.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "exampleobject",
 *   VersionId: "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagSet: [
 *     {
 *       Key: "Key1",
 *       Value: "Value1"
 *     }
 *   ],
 *   VersionId: "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * }
 * *\/
 * ```
 *
 * @example To retrieve tag set of an object
 * ```javascript
 * // The following example retrieves tag set of an object.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagSet: [
 *     {
 *       Key: "Key4",
 *       Value: "Value4"
 *     },
 *     {
 *       Key: "Key3",
 *       Value: "Value3"
 *     }
 *   ],
 *   VersionId: "null"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetObjectTaggingCommand extends command<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput>(
  _ep5,
  _mw0,
  "GetObjectTagging",
  GetObjectTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectTaggingRequest;
      output: GetObjectTaggingOutput;
    };
    sdk: {
      input: GetObjectTaggingCommandInput;
      output: GetObjectTaggingCommandOutput;
    };
  };
}
