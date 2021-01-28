import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateNatGatewayCommand,
  serializeAws_ec2CreateNatGatewayCommand,
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

export type CreateNatGatewayCommandInput = CreateNatGatewayRequest;
export type CreateNatGatewayCommandOutput = CreateNatGatewayResult & __MetadataBearer;

/**
 * <p>Creates a NAT gateway in the specified public subnet. This action creates a network
 *             interface in the specified subnet with a private IP address from the IP address range of
 *             the subnet. Internet-bound traffic from a private subnet can be routed to the NAT
 *             gateway, therefore enabling instances in the private subnet to connect to the internet.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateways</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateNatGatewayCommand extends $Command<
  CreateNatGatewayCommandInput,
  CreateNatGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNatGatewayCommandInput) {
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
  ): Handler<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNatGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNatGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNatGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNatGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNatGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNatGatewayCommandOutput> {
    return deserializeAws_ec2CreateNatGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
