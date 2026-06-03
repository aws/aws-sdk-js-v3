// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3/s3";
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListBucketInventoryConfigurationsOutput,
  ListBucketInventoryConfigurationsRequest,
} from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketInventoryConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBucketInventoryConfigurationsCommand}.
 */
export interface ListBucketInventoryConfigurationsCommandInput extends ListBucketInventoryConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketInventoryConfigurationsCommand}.
 */
export interface ListBucketInventoryConfigurationsCommandOutput extends ListBucketInventoryConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of S3 Inventory configurations for the bucket. You can have up to 1,000 inventory
 *       configurations per bucket.</p>
 *          <p>This action supports list pagination and does not return more than 100 configurations at a time.
 *       Always check the <code>IsTruncated</code> element in the response. If there are no more configurations
 *       to list, <code>IsTruncated</code> is set to false. If there are more configurations to list,
 *         <code>IsTruncated</code> is set to true, and there is a value in <code>NextContinuationToken</code>.
 *       You use the <code>NextContinuationToken</code> value to continue the pagination of the list by passing
 *       the value in continuation-token in the request to <code>GET</code> the next page.</p>
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
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>
 *          </p>
 *          <p>The following operations are related to <code>ListBucketInventoryConfigurations</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
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
 * import { S3Client, ListBucketInventoryConfigurationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketInventoryConfigurationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListBucketInventoryConfigurationsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContinuationToken: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new ListBucketInventoryConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketInventoryConfigurationsOutput
 * //   ContinuationToken: "STRING_VALUE",
 * //   InventoryConfigurationList: [ // InventoryConfigurationList
 * //     { // InventoryConfiguration
 * //       Destination: { // InventoryDestination
 * //         S3BucketDestination: { // InventoryS3BucketDestination
 * //           AccountId: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE", // required
 * //           Format: "CSV" || "ORC" || "Parquet", // required
 * //           Prefix: "STRING_VALUE",
 * //           Encryption: { // InventoryEncryption
 * //             SSES3: {},
 * //             SSEKMS: { // SSEKMS
 * //               KeyId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       IsEnabled: true || false, // required
 * //       Filter: { // InventoryFilter
 * //         Prefix: "STRING_VALUE", // required
 * //       },
 * //       Id: "STRING_VALUE", // required
 * //       IncludedObjectVersions: "All" || "Current", // required
 * //       OptionalFields: [ // InventoryOptionalFields
 * //         "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner" || "LifecycleExpirationDate",
 * //       ],
 * //       Schedule: { // InventorySchedule
 * //         Frequency: "Daily" || "Weekly", // required
 * //       },
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   NextContinuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBucketInventoryConfigurationsCommandInput - {@link ListBucketInventoryConfigurationsCommandInput}
 * @returns {@link ListBucketInventoryConfigurationsCommandOutput}
 * @see {@link ListBucketInventoryConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListBucketInventoryConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class ListBucketInventoryConfigurationsCommand extends $Command
  .classBuilder<
    ListBucketInventoryConfigurationsCommandInput,
    ListBucketInventoryConfigurationsCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "ListBucketInventoryConfigurations", {})
  .n("S3Client", "ListBucketInventoryConfigurationsCommand")
  .sc(ListBucketInventoryConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBucketInventoryConfigurationsRequest;
      output: ListBucketInventoryConfigurationsOutput;
    };
    sdk: {
      input: ListBucketInventoryConfigurationsCommandInput;
      output: ListBucketInventoryConfigurationsCommandOutput;
    };
  };
}
