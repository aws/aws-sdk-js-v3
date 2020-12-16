import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHealthCheckCountRequest, GetHealthCheckCountResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetHealthCheckCountCommand,
  serializeAws_restXmlGetHealthCheckCountCommand,
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

export type GetHealthCheckCountCommandInput = GetHealthCheckCountRequest;
export type GetHealthCheckCountCommandOutput = GetHealthCheckCountResponse & __MetadataBearer;

/**
 * <p>Retrieves the number of health checks that are associated with the current AWS account.</p>
 */
export class GetHealthCheckCountCommand extends $Command<
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHealthCheckCountCommandInput) {
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
  ): Handler<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckCountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckCountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthCheckCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthCheckCountCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
