import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  ListWebsiteAuthorizationProvidersRequest,
  ListWebsiteAuthorizationProvidersResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
  serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
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

export type ListWebsiteAuthorizationProvidersCommandInput = ListWebsiteAuthorizationProvidersRequest;
export type ListWebsiteAuthorizationProvidersCommandOutput = ListWebsiteAuthorizationProvidersResponse &
  __MetadataBearer;

/**
 * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
 */
export class ListWebsiteAuthorizationProvidersCommand extends $Command<
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWebsiteAuthorizationProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "ListWebsiteAuthorizationProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWebsiteAuthorizationProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWebsiteAuthorizationProvidersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWebsiteAuthorizationProvidersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput> {
    return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
