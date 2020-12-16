import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import {
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand,
  serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand,
} from "../protocols/Aws_json1_1";
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

export type DisassociateResolverEndpointIpAddressCommandInput = DisassociateResolverEndpointIpAddressRequest;
export type DisassociateResolverEndpointIpAddressCommandOutput = DisassociateResolverEndpointIpAddressResponse &
  __MetadataBearer;

/**
 * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
 * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To add an IP address to an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
 * 		</p>
 */
export class DisassociateResolverEndpointIpAddressCommand extends $Command<
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateResolverEndpointIpAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DisassociateResolverEndpointIpAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResolverEndpointIpAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResolverEndpointIpAddressResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateResolverEndpointIpAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResolverEndpointIpAddressCommandOutput> {
    return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
