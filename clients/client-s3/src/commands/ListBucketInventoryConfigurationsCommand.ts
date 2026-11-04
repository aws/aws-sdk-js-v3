// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type {
  ListBucketInventoryConfigurationsOutput,
  ListBucketInventoryConfigurationsRequest,
} from "../models/models_0";
import { ListBucketInventoryConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of S3 Inventory configurations for the bucket. You can have up to 1,000 inventory configurations per bucket.
 *
 * This action supports list pagination and does not return more than 100 configurations at a time. Always check the `IsTruncated` element in the response. If there are no more configurations to list, `IsTruncated` is set to false. If there are more configurations to list, `IsTruncated` is set to true, and there is a value in `NextContinuationToken`. You use the `NextContinuationToken` value to continue the pagination of the list by passing the value in continuation-token in the request to `GET` the next page.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have permissions to perform the `s3:GetInventoryConfiguration` action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 *   - **General purpose bucket permissions** - The `s3:GetInventoryConfiguration` permission is required in a policy. For more information about general purpose buckets permissions, see [Using Bucket Policies and User Policies](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html) in the *Amazon S3 User Guide*.
 *   - **Directory bucket permissions** - To grant access to this API operation, you must have the `s3express:GetInventoryConfiguration` permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see [Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region-code.amazonaws.com`.
 *
 * For information about the Amazon S3 inventory feature, see [Amazon S3 Inventory](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)
 *
 * The following operations are related to `ListBucketInventoryConfigurations`:
 *
 * - [GetBucketInventoryConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html)
 * - [DeleteBucketInventoryConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html)
 * - [PutBucketInventoryConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
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
 * //         "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "ObjectLockEventHoldStatus" || "ObjectLockEventHoldDuration" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner" || "LifecycleExpirationDate" || "IntelligentTieringReferenceDate",
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
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class ListBucketInventoryConfigurationsCommand extends command<ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput>(
  _ep3,
  _mw0,
  "ListBucketInventoryConfigurations",
  ListBucketInventoryConfigurations$
) {
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
