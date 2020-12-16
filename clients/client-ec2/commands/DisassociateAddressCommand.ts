import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateAddressRequest } from "../models/models_3";
import {
  deserializeAws_ec2DisassociateAddressCommand,
  serializeAws_ec2DisassociateAddressCommand,
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

export type DisassociateAddressCommandInput = DisassociateAddressRequest;
export type DisassociateAddressCommandOutput = __MetadataBearer;

/**
 * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p>
 * 			      <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
 * 				Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
 */
export class DisassociateAddressCommand extends $Command<
  DisassociateAddressCommandInput,
  DisassociateAddressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateAddressCommandInput) {
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
  ): Handler<DisassociateAddressCommandInput, DisassociateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateAddressCommandOutput> {
    return deserializeAws_ec2DisassociateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
