// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
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

import { PutBucketReplicationRequest } from "../models/models_0";
import { de_PutBucketReplicationCommand, se_PutBucketReplicationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <note>
 *             <p>This action creates an Amazon S3 on Outposts bucket's replication configuration. To create
 *             an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a>
 *             in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Creates a replication configuration or replaces an existing one. For information about
 *          S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for
 *             a replication configuration to all S3 on Outposts systems. Therefore, the replication
 *             configuration that's returned by a <code>GET</code> request soon after a
 *                <code>PUT</code> or <code>DELETE</code> request might return a more recent result
 *             than what's on the Outpost. If an Outpost is offline, the delay in updating the
 *             replication configuration on that Outpost can be significant.</p>
 *          </note>
 *          <p>Specify the replication configuration in the request body. In the replication
 *          configuration, you provide the following information:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the destination bucket or buckets where you want S3 on Outposts to
 *                replicate objects</p>
 *             </li>
 *             <li>
 *                <p>The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on
 *                your behalf</p>
 *             </li>
 *             <li>
 *                <p>Other relevant information, such as replication rules</p>
 *             </li>
 *          </ul>
 *          <p>A replication configuration must include at least one rule and can contain a maximum of
 *          100. Each rule identifies a subset of objects to replicate by filtering the objects in
 *          the source Outposts bucket. To choose additional subsets of objects to replicate, add a
 *          rule for each subset.</p>
 *          <p>To specify a subset of the objects in the source Outposts bucket to apply a replication
 *          rule to, add the <code>Filter</code> element as a child of the <code>Rule</code> element.
 *          You can filter objects based on an object key prefix, one or more object tags, or both.
 *          When you add the <code>Filter</code> element in the configuration, you must also add the
 *          following elements: <code>DeleteMarkerReplication</code>, <code>Status</code>, and
 *             <code>Priority</code>.</p>
 *          <p>Using <code>PutBucketReplication</code> on Outposts requires that both the source and
 *          destination buckets must have versioning enabled. For information about enabling versioning
 *          on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsManagingVersioning.html">Managing S3 Versioning
 *             for your S3 on Outposts bucket</a>.</p>
 *          <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Handling Replication of Encrypted Objects</b>
 *          </p>
 *          <p>Outposts buckets are encrypted at all times. All the objects in the source Outposts
 *          bucket are encrypted and can be replicated. Also, all the replicas in the destination
 *          Outposts bucket are encrypted with the same encryption key as the objects in the source
 *          Outposts bucket.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To create a <code>PutBucketReplication</code> request, you must have
 *             <code>s3-outposts:PutReplicationConfiguration</code> permissions for the bucket. The
 *          Outposts bucket owner has this permission by default and can grant it to others. For more
 *          information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with
 *             S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to
 *             S3 on Outposts buckets</a>. </p>
 *          <note>
 *             <p>To perform this operation, the user or role must also have the <code>iam:CreateRole</code> and <code>iam:PassRole</code> permissions.
 *             For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user
 *                permissions to pass a role to an Amazon Web Services service</a>.</p>
 *          </note>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html#API_control_PutBucketReplication_Examples">Examples</a> section.</p>
 *          <p>The following operations are related to <code>PutBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketReplicationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketReplicationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutBucketReplicationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 *   ReplicationConfiguration: { // ReplicationConfiguration
 *     Role: "STRING_VALUE", // required
 *     Rules: [ // ReplicationRules // required
 *       { // ReplicationRule
 *         ID: "STRING_VALUE",
 *         Priority: Number("int"),
 *         Prefix: "STRING_VALUE",
 *         Filter: { // ReplicationRuleFilter
 *           Prefix: "STRING_VALUE",
 *           Tag: { // S3Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *           And: { // ReplicationRuleAndOperator
 *             Prefix: "STRING_VALUE",
 *             Tags: [ // S3TagSet
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
 *           Account: "STRING_VALUE",
 *           Bucket: "STRING_VALUE", // required
 *           ReplicationTime: { // ReplicationTime
 *             Status: "Enabled" || "Disabled", // required
 *             Time: { // ReplicationTimeValue
 *               Minutes: Number("int"),
 *             },
 *           },
 *           AccessControlTranslation: { // AccessControlTranslation
 *             Owner: "Destination", // required
 *           },
 *           EncryptionConfiguration: { // EncryptionConfiguration
 *             ReplicaKmsKeyID: "STRING_VALUE",
 *           },
 *           Metrics: { // Metrics
 *             Status: "Enabled" || "Disabled", // required
 *             EventThreshold: {
 *               Minutes: Number("int"),
 *             },
 *           },
 *           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR",
 *         },
 *         DeleteMarkerReplication: { // DeleteMarkerReplication
 *           Status: "Enabled" || "Disabled", // required
 *         },
 *         Bucket: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
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
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class PutBucketReplicationCommand extends $Command<
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      Bucket: { type: "contextParams", name: "Bucket" },
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
  constructor(readonly input: PutBucketReplicationCommandInput) {
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
  ): Handler<PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketReplicationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutBucketReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "PutBucketReplication",
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
  private serialize(input: PutBucketReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutBucketReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketReplicationCommandOutput> {
    return de_PutBucketReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
