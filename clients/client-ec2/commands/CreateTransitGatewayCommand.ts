import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRequest, CreateTransitGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayCommand,
  serializeAws_ec2CreateTransitGatewayCommand,
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

export type CreateTransitGatewayCommandInput = CreateTransitGatewayRequest;
export type CreateTransitGatewayCommandOutput = CreateTransitGatewayResult & __MetadataBearer;

/**
 * <p>Creates a transit gateway.</p>
 *          <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks.
 *           After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN
 *           connections to the transit gateway.</p>
 *          <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p>
 *          <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer
 *          gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to
 *          <a>CreateVpnConnection</a>.</p>
 *          <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table
 *          and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create
 *          additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table.
 *          You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource
 *          attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
 */
export class CreateTransitGatewayCommand extends $Command<
  CreateTransitGatewayCommandInput,
  CreateTransitGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayCommandInput) {
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
  ): Handler<CreateTransitGatewayCommandInput, CreateTransitGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransitGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTransitGatewayCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
