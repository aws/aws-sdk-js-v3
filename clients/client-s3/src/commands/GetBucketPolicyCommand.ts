// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { GetBucketPolicyOutput, GetBucketPolicyRequest } from "../models/models_0";
import { GetBucketPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketPolicyCommand}.
 */
export interface GetBucketPolicyCommandInput extends GetBucketPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketPolicyCommand}.
 */
export interface GetBucketPolicyCommandOutput extends GetBucketPolicyOutput, __MetadataBearer {}

/**
 * Returns the policy of a specified bucket.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the `GetBucketPolicy` permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.
 *
 *   If you don't have `GetBucketPolicy` permissions, Amazon S3 returns a `403 Access Denied` error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a `405 Method Not Allowed` error.
 *
 *   > **Important:** To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the `GetBucketPolicy`, `PutBucketPolicy`, and `DeleteBucketPolicy` API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.
 *
 *   - **General purpose bucket permissions** - The `s3:GetBucketPolicy` permission is required in a policy. For more information about general purpose buckets bucket policies, see [Using Bucket Policies and User Policies](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html) in the *Amazon S3 User Guide*.
 *   - **Directory bucket permissions** - To grant access to this API operation, you must have the `s3express:GetBucketPolicy` permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see [Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 * - **Example bucket policies**
 *
 *   **General purpose buckets example bucket policies** - See [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.
 *
 *   **Directory bucket example bucket policies** - See [Example bucket policies for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region-code.amazonaws.com`.
 *
 * The following action is related to `GetBucketPolicy`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketPolicyRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketPolicyOutput
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBucketPolicyCommandInput - {@link GetBucketPolicyCommandInput}
 * @returns {@link GetBucketPolicyCommandOutput}
 * @see {@link GetBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get bucket policy
 * ```javascript
 * // The following example returns bucket policy associated with a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Policy: `{"Version":"2008-10-17",&TCX5-2025-waiver;"Id":"LogPolicy","Statement":[{"Sid":"Enables the log delivery group to publish logs to your bucket ","Effect":"Allow","Principal":{"AWS":"111122223333"},"Action":["s3:GetBucketAcl","s3:GetObjectAcl","s3:PutObject"],"Resource":["arn:aws:s3:::policytest1/*","arn:aws:s3:::policytest1"]}]}`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketPolicyCommand extends command<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput>(
  _ep3,
  _mw4,
  "GetBucketPolicy",
  GetBucketPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketPolicyRequest;
      output: GetBucketPolicyOutput;
    };
    sdk: {
      input: GetBucketPolicyCommandInput;
      output: GetBucketPolicyCommandOutput;
    };
  };
}
