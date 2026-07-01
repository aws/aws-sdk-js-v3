// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { PutBucketMetricsConfigurationRequest } from "../models/models_0";
import { PutBucketMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketMetricsConfigurationCommand}.
 */
export interface PutBucketMetricsConfigurationCommandInput extends PutBucketMetricsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketMetricsConfigurationCommand}.
 */
export interface PutBucketMetricsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can
 *       have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics
 *       configuration, note that this is a full replacement of the existing metrics configuration. If you don't
 *       include the elements you want to keep, they are erased.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets </b> - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
 *                </code>. Virtual-hosted-style requests aren't supported.
 * For more information about endpoints in Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html">Regional and Zonal endpoints for directory buckets in Availability Zones</a> in the
 *     <i>Amazon S3 User Guide</i>. For more information about endpoints in Local Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html">Concepts for directory buckets in Local Zones</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have permissions to perform the
 *               <code>s3:PutMetricsConfiguration</code> action. The bucket owner has this permission by default. The
 *             bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *               Resources</a>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The
 *                   <code>s3:PutMetricsConfiguration</code> permission is required in a policy. For more information
 *                 about general purpose buckets permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *                   Policies</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - To grant access to
 *                 this API operation, you must have the <code>s3express:PutMetricsConfiguration</code> permission in
 *                 an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource.
 *                 For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region-code</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>For information about CloudWatch request metrics for Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html">Monitoring Metrics with Amazon
 *       CloudWatch</a>.</p>
 *          <p>The following operations are related to <code>PutBucketMetricsConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetricsConfiguration.html">DeleteBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html">GetBucketMetricsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketMetricsConfigurations.html">ListBucketMetricsConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>PutBucketMetricsConfiguration</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>TooManyConfigurations</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: You are attempting to create a new configuration but have already reached the
 *               1,000-configuration limit.</p>
 *                   </li>
 *                   <li>
 *                      <p>HTTP Status Code: HTTP 400 Bad Request</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketMetricsConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketMetricsConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketMetricsConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   MetricsConfiguration: { // MetricsConfiguration
 *     Id: "STRING_VALUE", // required
 *     Filter: { // MetricsFilter Union: only one key present
 *       Prefix: "STRING_VALUE",
 *       Tag: { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       AccessPointArn: "STRING_VALUE",
 *       And: { // MetricsAndOperator
 *         Prefix: "STRING_VALUE",
 *         Tags: [ // TagSet
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         AccessPointArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketMetricsConfigurationCommandInput - {@link PutBucketMetricsConfigurationCommandInput}
 * @returns {@link PutBucketMetricsConfigurationCommandOutput}
 * @see {@link PutBucketMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketMetricsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class PutBucketMetricsConfigurationCommand extends command<PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput>(
  _ep3,
  _mw4,
  "PutBucketMetricsConfiguration",
  PutBucketMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketMetricsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutBucketMetricsConfigurationCommandInput;
      output: PutBucketMetricsConfigurationCommandOutput;
    };
  };
}
