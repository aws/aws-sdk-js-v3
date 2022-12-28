// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  CopySnapshotMessage,
  CopySnapshotMessageFilterSensitiveLog,
  CopySnapshotResult,
  CopySnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryCopySnapshotCommand, serializeAws_queryCopySnapshotCommand } from "../protocols/Aws_query";

export interface CopySnapshotCommandInput extends CopySnapshotMessage {}
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {}

/**
 * <p>Makes a copy of an existing snapshot.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 *          <important>
 *             <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation
 *                 can create their own Amazon S3 buckets and copy snapshots to it.
 *                 To control access to your snapshots, use an IAM policy to control who has the ability to use
 *                 the <code>CopySnapshot</code> operation.
 *                 For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a>
 *                 and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication & Access Control</a>.</p>
 *          </important>
 *          <p>You could receive the following error messages.</p>
 *          <p class="title">
 *             <b>Error Messages</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s is outside of the region.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s does not exist.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s is not owned by the authenticated user.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Create an Amazon S3 bucket in the same region as your snapshot.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b>
 *                     The authenticated user does not have sufficient permissions to perform the desired activity.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Contact your system administrator to get the needed permissions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message:</b>
 *                     The S3 bucket %s already contains an object with key %s.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Give the <code>TargetSnapshotName</code> a new and unique value.
 *                     If exporting a snapshot,
 *                     you could alternatively create a new Amazon S3 bucket
 *                     and use this same value for <code>TargetSnapshotName</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Add List and Read permissions on the bucket.
 *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Add Upload/Delete permissions on the bucket.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Error Message: </b>
 *                     ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p>
 *                <p>
 *                   <b>Solution:</b>
 *                     Add View Permissions on the bucket.
 *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopySnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopySnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class CopySnapshotCommand extends $Command<
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CopySnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopySnapshotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CopySnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopySnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CopySnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopySnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopySnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopySnapshotCommandOutput> {
    return deserializeAws_queryCopySnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
