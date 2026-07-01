// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketInventoryConfigurationOutput, GetBucketInventoryConfigurationRequest } from "../models/models_0";
import { GetBucketInventoryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandInput extends GetBucketInventoryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandOutput extends GetBucketInventoryConfigurationOutput, __MetadataBearer {}

/**
 * <p>Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the
 *       bucket.</p>
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
 *               <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default. The
 *             bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *               Resources</a>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The
 * 	                   <code>s3:GetInventoryConfiguration</code> permission is required in a policy. For more information
 * 	                 about general purpose buckets permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 * 	                   Policies</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - To grant access to
 * 	                 this API operation, you must have the <code>s3express:GetInventoryConfiguration</code> permission in
 * 	                 an IAM identity-based policy instead of a bucket policy.
 * 	                 For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region-code</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <p>The following operations are related to <code>GetBucketInventoryConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketInventoryConfigurationOutput
 * //   InventoryConfiguration: { // InventoryConfiguration
 * //     Destination: { // InventoryDestination
 * //       S3BucketDestination: { // InventoryS3BucketDestination
 * //         AccountId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE", // required
 * //         Format: "CSV" || "ORC" || "Parquet", // required
 * //         Prefix: "STRING_VALUE",
 * //         Encryption: { // InventoryEncryption
 * //           SSES3: {},
 * //           SSEKMS: { // SSEKMS
 * //             KeyId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     IsEnabled: true || false, // required
 * //     Filter: { // InventoryFilter
 * //       Prefix: "STRING_VALUE", // required
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     IncludedObjectVersions: "All" || "Current", // required
 * //     OptionalFields: [ // InventoryOptionalFields
 * //       "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner" || "LifecycleExpirationDate",
 * //     ],
 * //     Schedule: { // InventorySchedule
 * //       Frequency: "Daily" || "Weekly", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketInventoryConfigurationCommandInput - {@link GetBucketInventoryConfigurationCommandInput}
 * @returns {@link GetBucketInventoryConfigurationCommandOutput}
 * @see {@link GetBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketInventoryConfigurationCommand extends command<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketInventoryConfiguration",
  GetBucketInventoryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketInventoryConfigurationRequest;
      output: GetBucketInventoryConfigurationOutput;
    };
    sdk: {
      input: GetBucketInventoryConfigurationCommandInput;
      output: GetBucketInventoryConfigurationCommandOutput;
    };
  };
}
