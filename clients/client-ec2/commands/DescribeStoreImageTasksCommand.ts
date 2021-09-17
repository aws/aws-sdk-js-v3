import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeStoreImageTasksRequest, DescribeStoreImageTasksResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeStoreImageTasksCommand,
  serializeAws_ec2DescribeStoreImageTasksCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeStoreImageTasksCommandInput extends DescribeStoreImageTasksRequest {}
export interface DescribeStoreImageTasksCommandOutput extends DescribeStoreImageTasksResult, __MetadataBearer {}

/**
 * <p>Describes the progress of the AMI store tasks. You can describe the store tasks for
 *       specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from
 *       the last 31 days.</p>
 *          <p>For each AMI task, the response indicates if the task is <code>InProgress</code>,
 *         <code>Completed</code>, or <code>Failed</code>. For tasks <code>InProgress</code>, the
 *       response shows the estimated progress as a percentage.</p>
 *          <p>Tasks are listed in reverse chronological order. Currently, only tasks from the past 31
 *       days can be viewed.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *     	Amazon S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStoreImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStoreImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeStoreImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStoreImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeStoreImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStoreImageTasksCommand extends $Command<
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStoreImageTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStoreImageTasksCommandInput, DescribeStoreImageTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeStoreImageTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStoreImageTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStoreImageTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStoreImageTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeStoreImageTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStoreImageTasksCommandOutput> {
    return deserializeAws_ec2DescribeStoreImageTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
