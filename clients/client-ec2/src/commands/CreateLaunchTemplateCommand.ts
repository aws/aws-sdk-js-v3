import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateRequest, CreateLaunchTemplateResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateLaunchTemplateCommand,
  serializeAws_ec2CreateLaunchTemplateCommand,
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

export interface CreateLaunchTemplateCommandInput extends CreateLaunchTemplateRequest {}
export interface CreateLaunchTemplateCommandOutput extends CreateLaunchTemplateResult, __MetadataBearer {}

/**
 * <p>Creates a launch template. A launch template contains the parameters to launch an
 *             instance. When you launch an instance using <a>RunInstances</a>, you can
 *             specify a launch template instead of providing the launch parameters in the request. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a
 *                 launch template</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLaunchTemplateCommand extends $Command<
  CreateLaunchTemplateCommandInput,
  CreateLaunchTemplateCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLaunchTemplateCommandInput) {
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
  ): Handler<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLaunchTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchTemplateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLaunchTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateLaunchTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchTemplateCommandOutput> {
    return deserializeAws_ec2CreateLaunchTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
