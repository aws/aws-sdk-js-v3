import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverEndpointRequest, DeleteResolverEndpointResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteResolverEndpointCommand,
  serializeAws_json1_1DeleteResolverEndpointCommand,
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

export type DeleteResolverEndpointCommandInput = DeleteResolverEndpointRequest;
export type DeleteResolverEndpointCommandOutput = DeleteResolverEndpointResponse & __MetadataBearer;

/**
 * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound
 * 			Resolver endpoint:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <b>Inbound</b>: DNS queries from your network are no longer routed
 * 				to the DNS service for the specified VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p>
 *             </li>
 *          </ul>
 */
export class DeleteResolverEndpointCommand extends $Command<
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResolverEndpointCommandInput) {
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
  ): Handler<DeleteResolverEndpointCommandInput, DeleteResolverEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DeleteResolverEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResolverEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResolverEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResolverEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteResolverEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResolverEndpointCommandOutput> {
    return deserializeAws_json1_1DeleteResolverEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
