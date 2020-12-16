import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { ListConnectorEntitiesRequest, ListConnectorEntitiesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorEntitiesCommand,
  serializeAws_restJson1ListConnectorEntitiesCommand,
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

export type ListConnectorEntitiesCommandInput = ListConnectorEntitiesRequest;
export type ListConnectorEntitiesCommandOutput = ListConnectorEntitiesResponse & __MetadataBearer;

/**
 * <p>
 *   Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
 * </p>
 */
export class ListConnectorEntitiesCommand extends $Command<
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConnectorEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConnectorEntitiesCommandInput, ListConnectorEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "ListConnectorEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectorEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectorEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConnectorEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectorEntitiesCommandOutput> {
    return deserializeAws_restJson1ListConnectorEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
