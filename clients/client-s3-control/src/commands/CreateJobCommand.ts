// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateJobRequest, CreateJobResult } from "../models/models_0";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResult, __MetadataBearer {}

/**
 * <p>This operation creates an S3 Batch Operations job.</p>
 *          <p>You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects.
 *          Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>For information about permissions required to use the Batch Operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-iam-role-policies.html">Granting permissions for S3 Batch Operations</a> in the <i>Amazon S3
 *                      User Guide</i>.</p>
 *             </dd>
 *          </dl>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_JobOperation.html">JobOperation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateJobCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateJobCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateJobRequest
 *   AccountId: "STRING_VALUE",
 *   ConfirmationRequired: true || false,
 *   Operation: { // JobOperation
 *     LambdaInvoke: { // LambdaInvokeOperation
 *       FunctionArn: "STRING_VALUE",
 *       InvocationSchemaVersion: "STRING_VALUE",
 *       UserArguments: { // UserArguments
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     S3PutObjectCopy: { // S3CopyObjectOperation
 *       TargetResource: "STRING_VALUE",
 *       CannedAccessControlList: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *       AccessControlGrants: [ // S3GrantList
 *         { // S3Grant
 *           Grantee: { // S3Grantee
 *             TypeIdentifier: "id" || "emailAddress" || "uri",
 *             Identifier: "STRING_VALUE",
 *             DisplayName: "STRING_VALUE",
 *           },
 *           Permission: "FULL_CONTROL" || "READ" || "WRITE" || "READ_ACP" || "WRITE_ACP",
 *         },
 *       ],
 *       MetadataDirective: "COPY" || "REPLACE",
 *       ModifiedSinceConstraint: new Date("TIMESTAMP"),
 *       NewObjectMetadata: { // S3ObjectMetadata
 *         CacheControl: "STRING_VALUE",
 *         ContentDisposition: "STRING_VALUE",
 *         ContentEncoding: "STRING_VALUE",
 *         ContentLanguage: "STRING_VALUE",
 *         UserMetadata: { // S3UserMetadata
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ContentLength: Number("long"),
 *         ContentMD5: "STRING_VALUE",
 *         ContentType: "STRING_VALUE",
 *         HttpExpiresDate: new Date("TIMESTAMP"),
 *         RequesterCharged: true || false,
 *         SSEAlgorithm: "AES256" || "KMS",
 *       },
 *       NewObjectTagging: [ // S3TagSet
 *         { // S3Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       RedirectLocation: "STRING_VALUE",
 *       RequesterPays: true || false,
 *       StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "GLACIER" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 *       UnModifiedSinceConstraint: new Date("TIMESTAMP"),
 *       SSEAwsKmsKeyId: "STRING_VALUE",
 *       TargetKeyPrefix: "STRING_VALUE",
 *       ObjectLockLegalHoldStatus: "OFF" || "ON",
 *       ObjectLockMode: "COMPLIANCE" || "GOVERNANCE",
 *       ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *       BucketKeyEnabled: true || false,
 *       ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *     },
 *     S3PutObjectAcl: { // S3SetObjectAclOperation
 *       AccessControlPolicy: { // S3AccessControlPolicy
 *         AccessControlList: { // S3AccessControlList
 *           Owner: { // S3ObjectOwner
 *             ID: "STRING_VALUE",
 *             DisplayName: "STRING_VALUE",
 *           },
 *           Grants: [
 *             {
 *               Grantee: {
 *                 TypeIdentifier: "id" || "emailAddress" || "uri",
 *                 Identifier: "STRING_VALUE",
 *                 DisplayName: "STRING_VALUE",
 *               },
 *               Permission: "FULL_CONTROL" || "READ" || "WRITE" || "READ_ACP" || "WRITE_ACP",
 *             },
 *           ],
 *         },
 *         CannedAccessControlList: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *       },
 *     },
 *     S3PutObjectTagging: { // S3SetObjectTaggingOperation
 *       TagSet: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     S3DeleteObjectTagging: {},
 *     S3InitiateRestoreObject: { // S3InitiateRestoreObjectOperation
 *       ExpirationInDays: Number("int"),
 *       GlacierJobTier: "BULK" || "STANDARD",
 *     },
 *     S3PutObjectLegalHold: { // S3SetObjectLegalHoldOperation
 *       LegalHold: { // S3ObjectLockLegalHold
 *         Status: "OFF" || "ON", // required
 *       },
 *     },
 *     S3PutObjectRetention: { // S3SetObjectRetentionOperation
 *       BypassGovernanceRetention: true || false,
 *       Retention: { // S3Retention
 *         RetainUntilDate: new Date("TIMESTAMP"),
 *         Mode: "COMPLIANCE" || "GOVERNANCE",
 *       },
 *     },
 *     S3ReplicateObject: {},
 *   },
 *   Report: { // JobReport
 *     Bucket: "STRING_VALUE",
 *     Format: "Report_CSV_20180820",
 *     Enabled: true || false, // required
 *     Prefix: "STRING_VALUE",
 *     ReportScope: "AllTasks" || "FailedTasksOnly",
 *   },
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Manifest: { // JobManifest
 *     Spec: { // JobManifestSpec
 *       Format: "S3BatchOperations_CSV_20180820" || "S3InventoryReport_CSV_20161130", // required
 *       Fields: [ // JobManifestFieldList
 *         "Ignore" || "Bucket" || "Key" || "VersionId",
 *       ],
 *     },
 *     Location: { // JobManifestLocation
 *       ObjectArn: "STRING_VALUE", // required
 *       ObjectVersionId: "STRING_VALUE",
 *       ETag: "STRING_VALUE", // required
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Priority: Number("int"), // required
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ManifestGenerator: { // JobManifestGenerator Union: only one key present
 *     S3JobManifestGenerator: { // S3JobManifestGenerator
 *       ExpectedBucketOwner: "STRING_VALUE",
 *       SourceBucket: "STRING_VALUE", // required
 *       ManifestOutputLocation: { // S3ManifestOutputLocation
 *         ExpectedManifestBucketOwner: "STRING_VALUE",
 *         Bucket: "STRING_VALUE", // required
 *         ManifestPrefix: "STRING_VALUE",
 *         ManifestEncryption: { // GeneratedManifestEncryption
 *           SSES3: {},
 *           SSEKMS: { // SSEKMSEncryption
 *             KeyId: "STRING_VALUE", // required
 *           },
 *         },
 *         ManifestFormat: "S3InventoryReport_CSV_20211130", // required
 *       },
 *       Filter: { // JobManifestGeneratorFilter
 *         EligibleForReplication: true || false,
 *         CreatedAfter: new Date("TIMESTAMP"),
 *         CreatedBefore: new Date("TIMESTAMP"),
 *         ObjectReplicationStatuses: [ // ReplicationStatusFilterList
 *           "COMPLETED" || "FAILED" || "REPLICA" || "NONE",
 *         ],
 *         KeyNameConstraint: { // KeyNameConstraint
 *           MatchAnyPrefix: [ // NonEmptyMaxLength1024StringList
 *             "STRING_VALUE",
 *           ],
 *           MatchAnySuffix: [
 *             "STRING_VALUE",
 *           ],
 *           MatchAnySubstring: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ObjectSizeGreaterThanBytes: Number("long"),
 *         ObjectSizeLessThanBytes: Number("long"),
 *         MatchAnyStorageClass: [ // StorageClassList
 *           "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "GLACIER" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 *         ],
 *       },
 *       EnableManifestOutput: true || false, // required
 *     },
 *   },
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResult
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p></p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "CreateJob", {})
  .n("S3ControlClient", "CreateJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateJobCommand)
  .de(de_CreateJobCommand)
  .build() {}
