import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCustomerGatewayRequest, CreateCustomerGatewayResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateCustomerGatewayCommand,
  serializeAws_ec2CreateCustomerGatewayCommand,
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

export type CreateCustomerGatewayCommandInput = CreateCustomerGatewayRequest;
export type CreateCustomerGatewayCommandOutput = CreateCustomerGatewayResult & __MetadataBearer;

/**
 * <p>Provides information to AWS about your VPN customer gateway device. The customer
 *             gateway is the appliance at your end of the VPN connection. (The device on the AWS side
 *             of the VPN connection is the virtual private gateway.) You must provide the
 *             internet-routable IP address of the customer gateway's external interface. The IP
 *             address must be static and can be behind a device performing network address translation
 *             (NAT).</p>
 *         <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
 *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your
 *             network. If you don't have an ASN already, you can use a private ASN (in the 64512 -
 *             65534 range).</p>
 *         <note>
 *             <p>Amazon EC2 supports all 4-byte ASN numbers in the range of 1 - 2147483647, with the
 *                 exception of the following:</p>
 *                 <ul>
 *                <li>
 *                   <p>7224 - reserved in the <code>us-east-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>9059 - reserved in the <code>eu-west-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>17943 - reserved in the <code>ap-southeast-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>10124 - reserved in the <code>ap-northeast-1</code> Region</p>
 *                </li>
 *             </ul>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 *         <important>
 *             <p>To create more than one customer gateway with the same VPN type, IP address, and
 *                 BGP ASN, specify a unique device name for each customer gateway. Identical requests
 *                 return information about the existing customer gateway and do not create new
 *                 customer gateways.</p>
 *         </important>
 */
export class CreateCustomerGatewayCommand extends $Command<
  CreateCustomerGatewayCommandInput,
  CreateCustomerGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomerGatewayCommandInput) {
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
  ): Handler<CreateCustomerGatewayCommandInput, CreateCustomerGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCustomerGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomerGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomerGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateCustomerGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomerGatewayCommandOutput> {
    return deserializeAws_ec2CreateCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
