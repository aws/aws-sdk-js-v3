import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SendDiagnosticInterruptRequest } from "../models/models_5";
import {
  deserializeAws_ec2SendDiagnosticInterruptCommand,
  serializeAws_ec2SendDiagnosticInterruptCommand,
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

export type SendDiagnosticInterruptCommandInput = SendDiagnosticInterruptRequest;
export type SendDiagnosticInterruptCommandOutput = __MetadataBearer;

/**
 * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a
 * 			<i>kernel panic</i> (on Linux instances), or a
 * 			<i>blue screen</i>/<i>stop error</i> (on Windows
 * 			instances). For instances based on Intel and AMD processors, the interrupt is
 * 			received as a <i>non-maskable interrupt</i> (NMI).</p>
 *
 * 		       <p>In general, the operating system crashes and reboots when a kernel panic or stop
 * 			error is triggered. The operating system can also be configured to perform diagnostic
 * 			tasks, such as generating a memory dump file, loading a secondary kernel, or
 * 			obtaining a call trace.</p>
 *
 * 		       <p>Before sending a diagnostic interrupt to your instance, ensure that its operating
 * 			system is configured to perform the required diagnostic tasks.</p>
 *
 * 		       <p>For more information about configuring your operating system to generate a crash dump
 * 			when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a Diagnostic Interrupt</a> (Windows instances).</p>
 */
export class SendDiagnosticInterruptCommand extends $Command<
  SendDiagnosticInterruptCommandInput,
  SendDiagnosticInterruptCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendDiagnosticInterruptCommandInput) {
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
  ): Handler<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SendDiagnosticInterruptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendDiagnosticInterruptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendDiagnosticInterruptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SendDiagnosticInterruptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDiagnosticInterruptCommandOutput> {
    return deserializeAws_ec2SendDiagnosticInterruptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
