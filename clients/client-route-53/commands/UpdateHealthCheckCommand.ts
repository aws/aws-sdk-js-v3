import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateHealthCheckRequest, UpdateHealthCheckResponse } from "../models/models_0";
import {
  deserializeAws_restXmlUpdateHealthCheckCommand,
  serializeAws_restXmlUpdateHealthCheckCommand,
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

export type UpdateHealthCheckCommandInput = UpdateHealthCheckRequest;
export type UpdateHealthCheckCommandOutput = UpdateHealthCheckResponse & __MetadataBearer;

/**
 * <p>Updates an existing health check. Note that some values can't be updated. </p>
 * 		       <p>For more information about updating health checks, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 */
export class UpdateHealthCheckCommand extends $Command<
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHealthCheckCommandInput) {
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
  ): Handler<UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHealthCheckCommandOutput> {
    return deserializeAws_restXmlUpdateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
