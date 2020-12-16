import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListAccountIntegrationsRequest, ListAccountIntegrationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccountIntegrationsCommand,
  serializeAws_restJson1ListAccountIntegrationsCommand,
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

export type ListAccountIntegrationsCommandInput = ListAccountIntegrationsRequest;
export type ListAccountIntegrationsCommandOutput = ListAccountIntegrationsResponse & __MetadataBearer;

/**
 * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
 */
export class ListAccountIntegrationsCommand extends $Command<
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountIntegrationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountIntegrationsCommandInput, ListAccountIntegrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListAccountIntegrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountIntegrationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountIntegrationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountIntegrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccountIntegrationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountIntegrationsCommandOutput> {
    return deserializeAws_restJson1ListAccountIntegrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
