import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateCustomerGatewayCommand,
  serializeAws_restJson1AssociateCustomerGatewayCommand,
} from "../protocols/Aws_restJson1";
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

export type AssociateCustomerGatewayCommandInput = AssociateCustomerGatewayRequest;
export type AssociateCustomerGatewayCommandOutput = AssociateCustomerGatewayResponse & __MetadataBearer;

/**
 * <p>Associates a customer gateway with a device and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *         <p>You can only associate customer gateways that are connected to a VPN attachment on a
 *             transit gateway. The transit gateway must be registered in your global network. When
 *             you register a transit gateway, customer gateways that are connected to the transit
 *             gateway are automatically included in the global network. To list customer gateways
 *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
 *                 <code>transit-gateway-id</code>.</p>
 *         <p>You cannot associate a customer gateway with more than one device and link. </p>
 */
export class AssociateCustomerGatewayCommand extends $Command<
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateCustomerGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "AssociateCustomerGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateCustomerGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateCustomerGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateCustomerGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCustomerGatewayCommandOutput> {
    return deserializeAws_restJson1AssociateCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
