import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import {
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
  serializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
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

export type AssociateResolverEndpointIpAddressCommandInput = AssociateResolverEndpointIpAddressRequest;
export type AssociateResolverEndpointIpAddressCommandOutput = AssociateResolverEndpointIpAddressResponse &
  __MetadataBearer;

/**
 * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
 * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
 * 		       <p>To remove an IP address from an endpoint, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
 * 		</p>
 */
export class AssociateResolverEndpointIpAddressCommand extends $Command<
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateResolverEndpointIpAddressCommandInput) {
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
  ): Handler<AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "AssociateResolverEndpointIpAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResolverEndpointIpAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverEndpointIpAddressResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateResolverEndpointIpAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput> {
    return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
