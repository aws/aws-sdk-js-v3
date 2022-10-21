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
  CreateTransitGatewayRequest,
  CreateTransitGatewayRequestFilterSensitiveLog,
  CreateTransitGatewayResult,
  CreateTransitGatewayResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTransitGatewayCommand,
  serializeAws_ec2CreateTransitGatewayCommand,
} from "../protocols/Aws_ec2";

export interface CreateTransitGatewayCommandInput extends CreateTransitGatewayRequest {}
export interface CreateTransitGatewayCommandOutput extends CreateTransitGatewayResult, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTransitGatewayCommand extends $Command<
  CreateTransitGatewayCommandInput,
  CreateTransitGatewayCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTransitGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayResultFilterSensitiveLog,
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
