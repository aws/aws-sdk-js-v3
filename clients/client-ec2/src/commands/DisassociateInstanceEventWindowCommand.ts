import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateInstanceEventWindowRequest, DisassociateInstanceEventWindowResult } from "../models/models_4";
import {
  deserializeAws_ec2DisassociateInstanceEventWindowCommand,
  serializeAws_ec2DisassociateInstanceEventWindowCommand,
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

export interface DisassociateInstanceEventWindowCommandInput extends DisassociateInstanceEventWindowRequest {}
export interface DisassociateInstanceEventWindowCommandOutput
  extends DisassociateInstanceEventWindowResult,
    __MetadataBearer {}

/**
 * <p>Disassociates one or more targets from an event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link DisassociateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateInstanceEventWindowCommand extends $Command<
  DisassociateInstanceEventWindowCommandInput,
  DisassociateInstanceEventWindowCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateInstanceEventWindowCommandInput) {
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
  ): Handler<DisassociateInstanceEventWindowCommandInput, DisassociateInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateInstanceEventWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateInstanceEventWindowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateInstanceEventWindowResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateInstanceEventWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateInstanceEventWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateInstanceEventWindowCommandOutput> {
    return deserializeAws_ec2DisassociateInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
