// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketReplicationOutput, GetBucketReplicationRequest } from "../models/models_0";
import { GetBucketReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandInput extends GetBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns the replication configuration of a bucket.
 *
 * > **Note:** It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result.
 *
 * For information about replication configuration, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
 *
 * This action requires permissions for the `s3:GetReplicationConfiguration` action. For more information about permissions, see [Using Bucket Policies and User Policies](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html).
 *
 * If you include the `Filter` element in a replication configuration, you must also include the `DeleteMarkerReplication` and `Priority` elements. The response also returns those elements.
 *
 * For information about `GetBucketReplication` errors, see [List of replication-related error codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList)
 *
 * The following operations are related to `GetBucketReplication`:
 *
 * - [PutBucketReplication](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html)
 * - [DeleteBucketReplication](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketReplicationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketReplicationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketReplicationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketReplicationOutput
 * //   ReplicationConfiguration: { // ReplicationConfiguration
 * //     Role: "STRING_VALUE", // required
 * //     Rules: [ // ReplicationRules // required
 * //       { // ReplicationRule
 * //         ID: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         Prefix: "STRING_VALUE",
 * //         Filter: { // ReplicationRuleFilter
 * //           Prefix: "STRING_VALUE",
 * //           Tag: { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //           And: { // ReplicationRuleAndOperator
 * //             Prefix: "STRING_VALUE",
 * //             Tags: [ // TagSet
 * //               {
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Status: "Enabled" || "Disabled", // required
 * //         SourceSelectionCriteria: { // SourceSelectionCriteria
 * //           SseKmsEncryptedObjects: { // SseKmsEncryptedObjects
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //           ReplicaModifications: { // ReplicaModifications
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //         },
 * //         ExistingObjectReplication: { // ExistingObjectReplication
 * //           Status: "Enabled" || "Disabled", // required
 * //         },
 * //         Destination: { // Destination
 * //           Bucket: "STRING_VALUE", // required
 * //           Account: "STRING_VALUE",
 * //           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 * //           AccessControlTranslation: { // AccessControlTranslation
 * //             Owner: "Destination", // required
 * //           },
 * //           EncryptionConfiguration: { // EncryptionConfiguration
 * //             ReplicaKmsKeyID: "STRING_VALUE",
 * //           },
 * //           ReplicationTime: { // ReplicationTime
 * //             Status: "Enabled" || "Disabled", // required
 * //             Time: { // ReplicationTimeValue
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           Metrics: { // Metrics
 * //             Status: "Enabled" || "Disabled", // required
 * //             EventThreshold: {
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //         },
 * //         DeleteMarkerReplication: { // DeleteMarkerReplication
 * //           Status: "Enabled" || "Disabled",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketReplicationCommandInput - {@link GetBucketReplicationCommandInput}
 * @returns {@link GetBucketReplicationCommandOutput}
 * @see {@link GetBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link GetBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get replication configuration set on a bucket
 * ```javascript
 * // The following example returns replication configuration set on a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReplicationConfiguration: {
 *     Role: "arn:aws:iam::acct-id:role/example-role",
 *     Rules: [
 *       {
 *         Destination: {
 *           Bucket: "arn:aws:s3:::destination-bucket"
 *         },
 *         ID: "MWIwNTkwZmItMTE3MS00ZTc3LWJkZDEtNzRmODQwYzc1OTQy",
 *         Prefix: "Tax",
 *         Status: "Enabled"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketReplicationCommand extends command<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketReplication",
  GetBucketReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketReplicationRequest;
      output: GetBucketReplicationOutput;
    };
    sdk: {
      input: GetBucketReplicationCommandInput;
      output: GetBucketReplicationCommandOutput;
    };
  };
}
