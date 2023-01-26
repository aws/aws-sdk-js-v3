// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutBucketReplicationRequest, PutBucketReplicationRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketReplicationCommand,
  serializeAws_restXmlPutBucketReplicationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface PutBucketReplicationCommandInput extends PutBucketReplicationRequest {}
export interface PutBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * <p> Creates a replication configuration or replaces an existing one. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p>Specify the replication configuration in the request body. In the replication
 *          configuration, you provide the name of the destination bucket or buckets where you want
 *          Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your
 *          behalf, and other relevant information.</p>
 *          <p>A replication configuration must include at least one rule, and can contain a maximum of
 *          1,000. Each rule identifies a subset of objects to replicate by filtering the objects in
 *          the source bucket. To choose additional subsets of objects to replicate, add a rule for
 *          each subset.</p>
 *          <p>To specify a subset of the objects in the source bucket to apply a replication rule to,
 *          add the Filter element as a child of the Rule element. You can filter objects based on an
 *          object key prefix, one or more object tags, or both. When you add the Filter element in the
 *          configuration, you must also add the following elements:
 *             <code>DeleteMarkerReplication</code>, <code>Status</code>, and
 *          <code>Priority</code>.</p>
 *          <note>
 *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
 *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
 *          </note>
 *          <p>For information about enabling versioning on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html">Using Versioning</a>.</p>
 *          <p>
 *             <b>Handling Replication of Encrypted Objects</b>
 *          </p>
 *          <p>By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side
 *          encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the
 *          following: <code>SourceSelectionCriteria</code>, <code>SseKmsEncryptedObjects</code>,
 *             <code>Status</code>, <code>EncryptionConfiguration</code>, and
 *             <code>ReplicaKmsKeyID</code>. For information about replication configuration, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-config-for-kms-objects.html">Replicating Objects
 *                Created with SSE Using KMS keys</a>.</p>
 *          <p>For information on <code>PutBucketReplication</code> errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList">List of
 *             replication-related error codes</a>
 *          </p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To create a <code>PutBucketReplication</code> request, you must have <code>s3:PutReplicationConfiguration</code>
 *          permissions for the bucket.
 *          </p>
 *          <p>By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can
 *          perform this operation. The resource owner can also grant others permissions to perform the
 *          operation. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in a Policy</a>
 *          and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your
 *             Amazon S3 Resources</a>.</p>
 *          <note>
 *             <p>To perform this operation, the user or role performing the action must have the
 *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">iam:PassRole</a> permission.</p>
 *          </note>
 *          <p>The following operations are related to <code>PutBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketReplicationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketReplicationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link PutBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class PutBucketReplicationCommand extends $Command<
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketReplicationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketReplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBucketReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketReplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketReplicationCommandOutput> {
    return deserializeAws_restXmlPutBucketReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
