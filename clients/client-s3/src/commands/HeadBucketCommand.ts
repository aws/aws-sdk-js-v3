// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HeadBucketOutput, HeadBucketRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { HeadBucket } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandInput extends HeadBucketRequest {}
/**
 * @public
 *
 * The output of {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandOutput extends HeadBucketOutput, __MetadataBearer {}

/**
 * <p>You can use this operation to determine if a bucket exists and if you have permission to access it.
 *       The action returns a <code>200 OK</code> HTTP status code if the bucket exists and you have
 *       permission to access it. You can make a <code>HeadBucket</code> call on any bucket name to any
 *       Region in the partition, and regardless of the permissions on the bucket, you will receive a
 *       response header with the correct bucket location so that you can then make a proper, signed request
 *       to the appropriate Regional endpoint.</p>
 *          <note>
 *             <p>If the bucket doesn't exist or you don't have permission to access it, the <code>HEAD</code>
 *         request returns a generic <code>400 Bad Request</code>, <code>403 Forbidden</code>, or
 *         <code>404 Not Found</code> HTTP status code. A message body isn't included, so you can't determine
 *         the exception beyond these HTTP response codes.</p>
 *          </note>
 *          <dl>
 *             <dt>Authentication and authorization</dt>
 *             <dd>
 *                <p>
 *                   <b>General purpose buckets</b> - Request to public buckets that
 *             grant the s3:ListBucket permission publicly do not need to be signed. All other
 *               <code>HeadBucket</code> requests must be authenticated and signed by using IAM credentials
 *             (access key ID and secret access key for the IAM identities). All headers with the
 *               <code>x-amz-</code> prefix, including <code>x-amz-copy-source</code>, must be signed. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
 *                <p>
 *                   <b>Directory buckets</b> - You must use IAM credentials to
 *             authenticate and authorize your access to the <code>HeadBucket</code> API operation, instead of
 *             using the temporary security credentials through the <code>CreateSession</code> API
 *             operation.</p>
 *                <p>Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.</p>
 *             </dd>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p></p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - To use this
 *                 operation, you must have permissions to perform the <code>s3:ListBucket</code> action. The
 *                 bucket owner has this permission by default and can grant this permission to others. For more
 *                 information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing access permissions to your
 *                   Amazon S3 resources</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - You must have the
 *                   <b>
 *                            <code>s3express:CreateSession</code>
 *                         </b> permission in the
 *                   <code>Action</code> element of a policy. By default, the session is in the
 *                   <code>ReadWrite</code> mode. If you want to restrict the access, you can explicitly set the
 *                   <code>s3express:SessionMode</code> condition key to <code>ReadOnly</code> on the
 *                 bucket.</p>
 *                      <p>For more information about example bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html">Example
 *                   bucket policies for S3 Express One Zone</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-identity-policies.html">Amazon Web Services
 *                   Identity and Access Management (IAM) identity-based policies for S3 Express One Zone</a> in the
 *                   <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>
 *                      <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>.</p>
 *                <note>
 *                   <p>You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported. For more information about endpoints in Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html">Regional and Zonal endpoints for directory buckets in Availability Zones</a> in the
 *     <i>Amazon S3 User Guide</i>. For more information about endpoints in Local Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html">Concepts for directory buckets in Local Zones</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *                </note>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // HeadBucketRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * // { // HeadBucketOutput
 * //   BucketArn: "STRING_VALUE",
 * //   BucketLocationType: "AvailabilityZone" || "LocalZone",
 * //   BucketLocationName: "STRING_VALUE",
 * //   BucketRegion: "STRING_VALUE",
 * //   AccessPointAlias: true || false,
 * // };
 *
 * ```
 *
 * @param HeadBucketCommandInput - {@link HeadBucketCommandInput}
 * @returns {@link HeadBucketCommandOutput}
 * @see {@link HeadBucketCommandInput} for command's `input` shape.
 * @see {@link HeadBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *  <p>The specified content does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To determine if bucket exists
 * ```javascript
 * // This operation checks to see if a bucket exists.
 * const input = {
 *   Bucket: "acl1"
 * };
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class HeadBucketCommand extends $Command
  .classBuilder<
    HeadBucketCommandInput,
    HeadBucketCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config)];
  })
  .s("AmazonS3", "HeadBucket", {})
  .n("S3Client", "HeadBucketCommand")
  .sc(HeadBucket)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HeadBucketRequest;
      output: HeadBucketOutput;
    };
    sdk: {
      input: HeadBucketCommandInput;
      output: HeadBucketCommandOutput;
    };
  };
}
