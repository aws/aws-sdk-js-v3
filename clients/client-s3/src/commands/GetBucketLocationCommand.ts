// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/models_0";
import { GetBucketLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandInput extends GetBucketLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLocationCommand}.
 */
export interface GetBucketLocationCommandOutput extends GetBucketLocationOutput, __MetadataBearer {}

/**
 * > **Important:** Using the `GetBucketLocation` operation is no longer a best practice. To return the Region that a bucket resides in, we recommend that you use the [HeadBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html) operation instead. For backward compatibility, Amazon S3 continues to support the `GetBucketLocation` operation.
 *
 * Returns the Region the bucket resides in. You set the bucket's Region using the `LocationConstraint` request parameter in a `CreateBucket` request. For more information, see [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html).
 *
 * > **Note:** In a bucket's home Region, calls to the `GetBucketLocation` operation are governed by the bucket's policy. In other Regions, the bucket policy doesn't apply, which means that cross-account access won't be authorized. However, calls to the `HeadBucket` operation always return the bucket’s location through an HTTP response header, whether access to the bucket is authorized or not. Therefore, we recommend using the `HeadBucket` operation for bucket Region discovery and to avoid using the `GetBucketLocation` operation.
 *
 * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
 *
 * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
 *
 * > **Note:** This operation is not supported for directory buckets.
 *
 * The following operations are related to `GetBucketLocation`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLocationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLocationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketLocationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLocationOutput
 * //   LocationConstraint: "af-south-1" || "ap-east-1" || "ap-east-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ap-southeast-6" || "ap-southeast-7" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "EU" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "mx-central-1" || "sa-east-1" || "us-east-2" || "us-gov-east-1" || "us-gov-west-1" || "us-west-1" || "us-west-2",
 * // };
 *
 * ```
 *
 * @param GetBucketLocationCommandInput - {@link GetBucketLocationCommandInput}
 * @returns {@link GetBucketLocationCommandOutput}
 * @see {@link GetBucketLocationCommandInput} for command's `input` shape.
 * @see {@link GetBucketLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get bucket location
 * ```javascript
 * // The following example returns bucket location.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketLocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LocationConstraint: "us-west-2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketLocationCommand extends command<GetBucketLocationCommandInput, GetBucketLocationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketLocation",
  GetBucketLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketLocationRequest;
      output: GetBucketLocationOutput;
    };
    sdk: {
      input: GetBucketLocationCommandInput;
      output: GetBucketLocationCommandOutput;
    };
  };
}
