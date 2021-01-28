import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListIncomingTypedLinksRequest, ListIncomingTypedLinksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIncomingTypedLinksCommand,
  serializeAws_restJson1ListIncomingTypedLinksCommand,
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

export type ListIncomingTypedLinksCommandInput = ListIncomingTypedLinksRequest;
export type ListIncomingTypedLinksCommandOutput = ListIncomingTypedLinksResponse & __MetadataBearer;

/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 */
export class ListIncomingTypedLinksCommand extends $Command<
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIncomingTypedLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIncomingTypedLinksCommandInput, ListIncomingTypedLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListIncomingTypedLinksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIncomingTypedLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIncomingTypedLinksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIncomingTypedLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIncomingTypedLinksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIncomingTypedLinksCommandOutput> {
    return deserializeAws_restJson1ListIncomingTypedLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
