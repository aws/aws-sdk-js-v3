// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeJobRequest, DescribeJobResult } from "../models/models_0";
import { de_DescribeJobCommand, se_DescribeJobCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends DescribeJobResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
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
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DescribeJobCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DescribeJobCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DescribeJobRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobResult
 * //   Job: { // JobDescriptor
 * //     JobId: "STRING_VALUE",
 * //     ConfirmationRequired: true || false,
 * //     Description: "STRING_VALUE",
 * //     JobArn: "STRING_VALUE",
 * //     Status: "Active" || "Cancelled" || "Cancelling" || "Complete" || "Completing" || "Failed" || "Failing" || "New" || "Paused" || "Pausing" || "Preparing" || "Ready" || "Suspended",
 * //     Manifest: { // JobManifest
 * //       Spec: { // JobManifestSpec
 * //         Format: "S3BatchOperations_CSV_20180820" || "S3InventoryReport_CSV_20161130", // required
 * //         Fields: [ // JobManifestFieldList
 * //           "Ignore" || "Bucket" || "Key" || "VersionId",
 * //         ],
 * //       },
 * //       Location: { // JobManifestLocation
 * //         ObjectArn: "STRING_VALUE", // required
 * //         ObjectVersionId: "STRING_VALUE",
 * //         ETag: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Operation: { // JobOperation
 * //       LambdaInvoke: { // LambdaInvokeOperation
 * //         FunctionArn: "STRING_VALUE",
 * //       },
 * //       S3PutObjectCopy: { // S3CopyObjectOperation
 * //         TargetResource: "STRING_VALUE",
 * //         CannedAccessControlList: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 * //         AccessControlGrants: [ // S3GrantList
 * //           { // S3Grant
 * //             Grantee: { // S3Grantee
 * //               TypeIdentifier: "id" || "emailAddress" || "uri",
 * //               Identifier: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //             },
 * //             Permission: "FULL_CONTROL" || "READ" || "WRITE" || "READ_ACP" || "WRITE_ACP",
 * //           },
 * //         ],
 * //         MetadataDirective: "COPY" || "REPLACE",
 * //         ModifiedSinceConstraint: new Date("TIMESTAMP"),
 * //         NewObjectMetadata: { // S3ObjectMetadata
 * //           CacheControl: "STRING_VALUE",
 * //           ContentDisposition: "STRING_VALUE",
 * //           ContentEncoding: "STRING_VALUE",
 * //           ContentLanguage: "STRING_VALUE",
 * //           UserMetadata: { // S3UserMetadata
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ContentLength: Number("long"),
 * //           ContentMD5: "STRING_VALUE",
 * //           ContentType: "STRING_VALUE",
 * //           HttpExpiresDate: new Date("TIMESTAMP"),
 * //           RequesterCharged: true || false,
 * //           SSEAlgorithm: "AES256" || "KMS",
 * //         },
 * //         NewObjectTagging: [ // S3TagSet
 * //           { // S3Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         RedirectLocation: "STRING_VALUE",
 * //         RequesterPays: true || false,
 * //         StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "GLACIER" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "GLACIER_IR",
 * //         UnModifiedSinceConstraint: new Date("TIMESTAMP"),
 * //         SSEAwsKmsKeyId: "STRING_VALUE",
 * //         TargetKeyPrefix: "STRING_VALUE",
 * //         ObjectLockLegalHoldStatus: "OFF" || "ON",
 * //         ObjectLockMode: "COMPLIANCE" || "GOVERNANCE",
 * //         ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 * //         BucketKeyEnabled: true || false,
 * //         ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * //       },
 * //       S3PutObjectAcl: { // S3SetObjectAclOperation
 * //         AccessControlPolicy: { // S3AccessControlPolicy
 * //           AccessControlList: { // S3AccessControlList
 * //             Owner: { // S3ObjectOwner
 * //               ID: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //             },
 * //             Grants: [
 * //               {
 * //                 Grantee: {
 * //                   TypeIdentifier: "id" || "emailAddress" || "uri",
 * //                   Identifier: "STRING_VALUE",
 * //                   DisplayName: "STRING_VALUE",
 * //                 },
 * //                 Permission: "FULL_CONTROL" || "READ" || "WRITE" || "READ_ACP" || "WRITE_ACP",
 * //               },
 * //             ],
 * //           },
 * //           CannedAccessControlList: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 * //         },
 * //       },
 * //       S3PutObjectTagging: { // S3SetObjectTaggingOperation
 * //         TagSet: [
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       S3DeleteObjectTagging: {},
 * //       S3InitiateRestoreObject: { // S3InitiateRestoreObjectOperation
 * //         ExpirationInDays: Number("int"),
 * //         GlacierJobTier: "BULK" || "STANDARD",
 * //       },
 * //       S3PutObjectLegalHold: { // S3SetObjectLegalHoldOperation
 * //         LegalHold: { // S3ObjectLockLegalHold
 * //           Status: "OFF" || "ON", // required
 * //         },
 * //       },
 * //       S3PutObjectRetention: { // S3SetObjectRetentionOperation
 * //         BypassGovernanceRetention: true || false,
 * //         Retention: { // S3Retention
 * //           RetainUntilDate: new Date("TIMESTAMP"),
 * //           Mode: "COMPLIANCE" || "GOVERNANCE",
 * //         },
 * //       },
 * //       S3ReplicateObject: {},
 * //     },
 * //     Priority: Number("int"),
 * //     ProgressSummary: { // JobProgressSummary
 * //       TotalNumberOfTasks: Number("long"),
 * //       NumberOfTasksSucceeded: Number("long"),
 * //       NumberOfTasksFailed: Number("long"),
 * //       Timers: { // JobTimers
 * //         ElapsedTimeInActiveSeconds: Number("long"),
 * //       },
 * //     },
 * //     StatusUpdateReason: "STRING_VALUE",
 * //     FailureReasons: [ // JobFailureList
 * //       { // JobFailure
 * //         FailureCode: "STRING_VALUE",
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Report: { // JobReport
 * //       Bucket: "STRING_VALUE",
 * //       Format: "Report_CSV_20180820",
 * //       Enabled: true || false, // required
 * //       Prefix: "STRING_VALUE",
 * //       ReportScope: "AllTasks" || "FailedTasksOnly",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationDate: new Date("TIMESTAMP"),
 * //     RoleArn: "STRING_VALUE",
 * //     SuspendedDate: new Date("TIMESTAMP"),
 * //     SuspendedCause: "STRING_VALUE",
 * //     ManifestGenerator: { // JobManifestGenerator Union: only one key present
 * //       S3JobManifestGenerator: { // S3JobManifestGenerator
 * //         ExpectedBucketOwner: "STRING_VALUE",
 * //         SourceBucket: "STRING_VALUE", // required
 * //         ManifestOutputLocation: { // S3ManifestOutputLocation
 * //           ExpectedManifestBucketOwner: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE", // required
 * //           ManifestPrefix: "STRING_VALUE",
 * //           ManifestEncryption: { // GeneratedManifestEncryption
 * //             SSES3: {},
 * //             SSEKMS: { // SSEKMSEncryption
 * //               KeyId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           ManifestFormat: "S3InventoryReport_CSV_20211130", // required
 * //         },
 * //         Filter: { // JobManifestGeneratorFilter
 * //           EligibleForReplication: true || false,
 * //           CreatedAfter: new Date("TIMESTAMP"),
 * //           CreatedBefore: new Date("TIMESTAMP"),
 * //           ObjectReplicationStatuses: [ // ReplicationStatusFilterList
 * //             "COMPLETED" || "FAILED" || "REPLICA" || "NONE",
 * //           ],
 * //         },
 * //         EnableManifestOutput: true || false, // required
 * //       },
 * //     },
 * //     GeneratedManifestDescriptor: { // S3GeneratedManifestDescriptor
 * //       Format: "S3InventoryReport_CSV_20211130",
 * //       Location: {
 * //         ObjectArn: "STRING_VALUE", // required
 * //         ObjectVersionId: "STRING_VALUE",
 * //         ETag: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p></p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class DescribeJobCommand extends $Command<
  DescribeJobCommandInput,
  DescribeJobCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobCommandInput, DescribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DescribeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "DescribeJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobCommandOutput> {
    return de_DescribeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
