import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand,
  serializeAws_restXmlGetHealthCheckLastFailureReasonCommand,
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

export type GetHealthCheckLastFailureReasonCommandInput = GetHealthCheckLastFailureReasonRequest;
export type GetHealthCheckLastFailureReasonCommandOutput = GetHealthCheckLastFailureReasonResponse & __MetadataBearer;

/**
 * <p>Gets the reason that a specified health check failed most recently.</p>
 */
export class GetHealthCheckLastFailureReasonCommand extends $Command<
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHealthCheckLastFailureReasonCommandInput) {
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
  ): Handler<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckLastFailureReasonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckLastFailureReasonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckLastFailureReasonResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetHealthCheckLastFailureReasonCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckLastFailureReasonCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
