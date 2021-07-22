import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateReplaceRootVolumeTaskRequest, CreateReplaceRootVolumeTaskResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateReplaceRootVolumeTaskCommand,
  serializeAws_ec2CreateReplaceRootVolumeTaskCommand,
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

export interface CreateReplaceRootVolumeTaskCommandInput extends CreateReplaceRootVolumeTaskRequest {}
export interface CreateReplaceRootVolumeTaskCommandOutput extends CreateReplaceRootVolumeTaskResult, __MetadataBearer {}

/**
 * <p>Creates a root volume replacement task for an Amazon EC2 instance. The root volume
 *       can either be restored to its initial launch state, or it can be restored using a
 *       specific snapshot.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-restoring-volume.html#replace-root">Replace a root volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReplaceRootVolumeTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReplaceRootVolumeTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReplaceRootVolumeTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplaceRootVolumeTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplaceRootVolumeTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReplaceRootVolumeTaskCommand extends $Command<
  CreateReplaceRootVolumeTaskCommandInput,
  CreateReplaceRootVolumeTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplaceRootVolumeTaskCommandInput) {
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
  ): Handler<CreateReplaceRootVolumeTaskCommandInput, CreateReplaceRootVolumeTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateReplaceRootVolumeTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplaceRootVolumeTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplaceRootVolumeTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplaceRootVolumeTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateReplaceRootVolumeTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplaceRootVolumeTaskCommandOutput> {
    return deserializeAws_ec2CreateReplaceRootVolumeTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
