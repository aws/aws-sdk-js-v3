// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateCustomerGatewayRequest,
  CreateCustomerGatewayRequestFilterSensitiveLog,
  CreateCustomerGatewayResult,
  CreateCustomerGatewayResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateCustomerGatewayCommand,
  serializeAws_ec2CreateCustomerGatewayCommand,
} from "../protocols/Aws_ec2";

export interface CreateCustomerGatewayCommandInput extends CreateCustomerGatewayRequest {}
export interface CreateCustomerGatewayCommandOutput extends CreateCustomerGatewayResult, __MetadataBearer {}

/**
 * <p>Provides information to Amazon Web Services about your customer gateway device. The
 *             customer gateway device is the appliance at your end of the VPN connection. You
 *             must provide the IP address of the customer gateway device’s external
 *             interface. The IP address must be static and can be behind a device performing network
 *             address translation (NAT).</p>
 *          <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
 *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network.
 *             If you don't have an ASN already, you can use a private ASN. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html">Customer gateway
 *                 options for your Site-to-Site VPN connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 *          <p>To create more than one customer gateway with the same VPN type, IP address, and
 *             BGP ASN, specify a unique device name for each customer gateway. An identical request
 *             returns information about the existing customer gateway; it doesn't create a new customer
 *             gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateCustomerGatewayCommand extends $Command<
  CreateCustomerGatewayCommandInput,
  CreateCustomerGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomerGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCustomerGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomerGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomerGatewayResultFilterSensitiveLog,
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
