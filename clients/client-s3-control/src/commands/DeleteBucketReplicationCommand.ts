// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { DeleteBucketReplicationRequest, DeleteBucketReplicationRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteBucketReplicationCommand,
  serializeAws_restXmlDeleteBucketReplicationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * The input for {@link DeleteBucketReplicationCommand}.
 */
export interface DeleteBucketReplicationCommandInput extends DeleteBucketReplicationRequest {}
/**
 * The output of {@link DeleteBucketReplicationCommand}.
 */
export interface DeleteBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To
 *             delete an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Deletes the replication configuration from the specified S3 on Outposts bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3-outposts:PutReplicationConfiguration</code> action. The Outposts bucket owner
 *          has this permission by default and can grant it to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with
 *             S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to
 *             S3 on Outposts buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for
 *             a replication configuration to all S3 on Outposts systems. Therefore, the replication
 *             configuration that's returned by a <code>GET</code> request soon after a
 *                <code>PUT</code> or <code>DELETE</code> request might return a more recent result
 *             than what's on the Outpost. If an Outpost is offline, the delay in updating the
 *             replication configuration on that Outpost can be significant.</p>
 *          </note>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html#API_control_DeleteBucketReplication_Examples">Examples</a> section.</p>
 *          <p>For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for Amazon Web Services Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following operations are related to <code>DeleteBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteBucketReplicationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteBucketReplicationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteBucketReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 *
 */
export class DeleteBucketReplicationCommand extends $Command<
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
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

  constructor(readonly input: DeleteBucketReplicationCommandInput) {
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
  ): Handler<DeleteBucketReplicationCommandInput, DeleteBucketReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBucketReplicationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DeleteBucketReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBucketReplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBucketReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteBucketReplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketReplicationCommandOutput> {
    return deserializeAws_restXmlDeleteBucketReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
