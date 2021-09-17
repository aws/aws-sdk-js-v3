import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRestoreImageTaskRequest, CreateRestoreImageTaskResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateRestoreImageTaskCommand,
  serializeAws_ec2CreateRestoreImageTaskCommand,
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

export interface CreateRestoreImageTaskCommandInput extends CreateRestoreImageTaskRequest {}
export interface CreateRestoreImageTaskCommandOutput extends CreateRestoreImageTaskResult, __MetadataBearer {}

/**
 * <p>Starts a task that restores an AMI from an Amazon S3 object that was previously created by using
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *     	Amazon S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRestoreImageTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRestoreImageTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRestoreImageTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRestoreImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreImageTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRestoreImageTaskCommand extends $Command<
  CreateRestoreImageTaskCommandInput,
  CreateRestoreImageTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRestoreImageTaskCommandInput) {
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
  ): Handler<CreateRestoreImageTaskCommandInput, CreateRestoreImageTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateRestoreImageTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRestoreImageTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRestoreImageTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRestoreImageTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateRestoreImageTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRestoreImageTaskCommandOutput> {
    return deserializeAws_ec2CreateRestoreImageTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
