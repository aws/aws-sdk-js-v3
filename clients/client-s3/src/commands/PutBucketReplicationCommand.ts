// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { PutBucketReplicationRequest } from "../models/models_0";
import { PutBucketReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketReplicationCommand}.
 */
export interface PutBucketReplicationCommandInput extends PutBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketReplicationCommand}.
 */
export interface PutBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Creates a replication configuration or replaces an existing one. For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
 *
 * Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. You can invoke this request for a specific Amazon Web Services Region by using the [`aws:RequestedRegion`](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requestedregion) condition key.
 *
 * A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset.
 *
 * To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: `DeleteMarkerReplication`, `Status`, and `Priority`.
 *
 * > **Note:** If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
 *
 * For information about enabling versioning on a bucket, see [Using Versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html).
 *
 * - **Handling Replication of Encrypted Objects**
 *
 *   By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: `SourceSelectionCriteria`, `SseKmsEncryptedObjects`, `Status`, `EncryptionConfiguration`, and `ReplicaKmsKeyID`. For information about replication configuration, see [Replicating Objects Created with SSE Using KMS keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-config-for-kms-objects.html).
 *
 *   For information on `PutBucketReplication` errors, see [List of replication-related error codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList)
 *
 * - **Permissions**
 *
 *   To create a `PutBucketReplication` request, you must have `s3:PutReplicationConfiguration` permissions for the bucket.
 *
 *   By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 *   > **Note:** To perform this operation, the user or role performing the action must have the [iam:PassRole](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html) permission.
 *
 * The following operations are related to `PutBucketReplication`:
 *
 * - [GetBucketReplication](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html)
 * - [DeleteBucketReplication](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketReplicationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketReplicationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketReplicationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ReplicationConfiguration: { // ReplicationConfiguration
 *     Role: "STRING_VALUE", // required
 *     Rules: [ // ReplicationRules // required
 *       { // ReplicationRule
 *         ID: "STRING_VALUE",
 *         Priority: Number("int"),
 *         Prefix: "STRING_VALUE",
 *         Filter: { // ReplicationRuleFilter
 *           Prefix: "STRING_VALUE",
 *           Tag: { // Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *           And: { // ReplicationRuleAndOperator
 *             Prefix: "STRING_VALUE",
 *             Tags: [ // TagSet
 *               {
 *                 Key: "STRING_VALUE", // required
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *         Status: "Enabled" || "Disabled", // required
 *         SourceSelectionCriteria: { // SourceSelectionCriteria
 *           SseKmsEncryptedObjects: { // SseKmsEncryptedObjects
 *             Status: "Enabled" || "Disabled", // required
 *           },
 *           ReplicaModifications: { // ReplicaModifications
 *             Status: "Enabled" || "Disabled", // required
 *           },
 *         },
 *         ExistingObjectReplication: { // ExistingObjectReplication
 *           Status: "Enabled" || "Disabled", // required
 *         },
 *         Destination: { // Destination
 *           Bucket: "STRING_VALUE", // required
 *           Account: "STRING_VALUE",
 *           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 *           AccessControlTranslation: { // AccessControlTranslation
 *             Owner: "Destination", // required
 *           },
 *           EncryptionConfiguration: { // EncryptionConfiguration
 *             ReplicaKmsKeyID: "STRING_VALUE",
 *           },
 *           ReplicationTime: { // ReplicationTime
 *             Status: "Enabled" || "Disabled", // required
 *             Time: { // ReplicationTimeValue
 *               Minutes: Number("int"),
 *             },
 *           },
 *           Metrics: { // Metrics
 *             Status: "Enabled" || "Disabled", // required
 *             EventThreshold: {
 *               Minutes: Number("int"),
 *             },
 *           },
 *         },
 *         DeleteMarkerReplication: { // DeleteMarkerReplication
 *           Status: "Enabled" || "Disabled",
 *         },
 *       },
 *     ],
 *   },
 *   Token: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketReplicationCommandInput - {@link PutBucketReplicationCommandInput}
 * @returns {@link PutBucketReplicationCommandOutput}
 * @see {@link PutBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link PutBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example Set replication configuration on a bucket
 * ```javascript
 * // The following example sets replication configuration on a bucket.
 * const input = {
 *   Bucket: "examplebucket",
 *   ReplicationConfiguration: {
 *     Role: "arn:aws:iam::123456789012:role/examplerole",
 *     Rules: [
 *       {
 *         Destination: {
 *           Bucket: "arn:aws:s3:::destinationbucket",
 *           StorageClass: "STANDARD"
 *         },
 *         Prefix: "",
 *         Status: "Enabled"
 *       }
 *     ]
 *   }
 * };
 * const command = new PutBucketReplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutBucketReplicationCommand extends command<PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput>(
  _ep3,
  _mw3,
  "PutBucketReplication",
  PutBucketReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketReplicationRequest;
      output: {};
    };
    sdk: {
      input: PutBucketReplicationCommandInput;
      output: PutBucketReplicationCommandOutput;
    };
  };
}
