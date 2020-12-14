import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ListLedgersRequest, ListLedgersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListLedgersCommand,
  serializeAws_restJson1ListLedgersCommand,
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

export type ListLedgersCommandInput = ListLedgersRequest;
export type ListLedgersCommandOutput = ListLedgersResponse & __MetadataBearer;

/**
 * <p>Returns an array of ledger summaries that are associated with the current AWS account
 *          and Region.</p>
 *          <p>This action returns a maximum of 100 items and is paginated so that you can
 *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 */
export class ListLedgersCommand extends $Command<
  ListLedgersCommandInput,
  ListLedgersCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLedgersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLedgersCommandInput, ListLedgersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListLedgersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLedgersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLedgersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLedgersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLedgersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLedgersCommandOutput> {
    return deserializeAws_restJson1ListLedgersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
