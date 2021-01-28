import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";
import { ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAssociatedAttributeGroupsCommand,
  serializeAws_restJson1ListAssociatedAttributeGroupsCommand,
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

export type ListAssociatedAttributeGroupsCommandInput = ListAssociatedAttributeGroupsRequest;
export type ListAssociatedAttributeGroupsCommandOutput = ListAssociatedAttributeGroupsResponse & __MetadataBearer;

/**
 * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
 */
export class ListAssociatedAttributeGroupsCommand extends $Command<
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedAttributeGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "ListAssociatedAttributeGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedAttributeGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedAttributeGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedAttributeGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedAttributeGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedAttributeGroupsCommandOutput> {
    return deserializeAws_restJson1ListAssociatedAttributeGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
