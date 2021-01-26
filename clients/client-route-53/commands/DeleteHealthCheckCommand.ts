import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteHealthCheckRequest, DeleteHealthCheckResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteHealthCheckCommand,
  serializeAws_restXmlDeleteHealthCheckCommand,
} from "../protocols/Aws_restXml";
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

export type DeleteHealthCheckCommandInput = DeleteHealthCheckRequest;
export type DeleteHealthCheckCommandOutput = DeleteHealthCheckResponse & __MetadataBearer;

/**
 * <p>Deletes a health check.</p>
 * 		       <important>
 * 			         <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more
 * 				resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status
 * 				of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover
 * 				configuration. For more information, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a>
 * 				in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>If you're using AWS Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance,
 * 			you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted
 * 			automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted
 * 			from Route 53. </p>
 */
export class DeleteHealthCheckCommand extends $Command<
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHealthCheckCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHealthCheckCommandOutput> {
    return deserializeAws_restXmlDeleteHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
