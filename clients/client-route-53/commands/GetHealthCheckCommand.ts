import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckRequest, GetHealthCheckResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetHealthCheckCommand,
  serializeAws_restXmlGetHealthCheckCommand,
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

export type GetHealthCheckCommandInput = GetHealthCheckRequest;
export type GetHealthCheckCommandOutput = GetHealthCheckResponse & __MetadataBearer;

/**
 * <p>Gets information about a specified health check.</p>
 */
export class GetHealthCheckCommand extends $Command<
  GetHealthCheckCommandInput,
  GetHealthCheckCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHealthCheckCommandInput) {
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
  ): Handler<GetHealthCheckCommandInput, GetHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthCheckCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
