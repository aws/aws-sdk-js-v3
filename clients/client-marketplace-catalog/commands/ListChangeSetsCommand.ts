import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { ListChangeSetsRequest, ListChangeSetsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListChangeSetsCommand,
  serializeAws_restJson1ListChangeSetsCommand,
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

export type ListChangeSetsCommandInput = ListChangeSetsRequest;
export type ListChangeSetsCommandOutput = ListChangeSetsResponse & __MetadataBearer;

/**
 * <p>Returns the list of change sets owned by the account being used to make the call. You
 *             can filter this list by providing any combination of <code>entityId</code>,
 *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
 *             operation applies a logical AND between the filters.</p>
 *
 *         <p>You can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 */
export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
  MarketplaceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChangeSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "ListChangeSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangeSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChangeSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangeSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChangeSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangeSetsCommandOutput> {
    return deserializeAws_restJson1ListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
