import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import {
  ListJournalKinesisStreamsForLedgerRequest,
  ListJournalKinesisStreamsForLedgerResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand,
  serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand,
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

export type ListJournalKinesisStreamsForLedgerCommandInput = ListJournalKinesisStreamsForLedgerRequest;
export type ListJournalKinesisStreamsForLedgerCommandOutput = ListJournalKinesisStreamsForLedgerResponse &
  __MetadataBearer;

/**
 * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The
 *          output of each stream descriptor includes the same details that are returned by
 *             <code>DescribeJournalKinesisStream</code>.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
 *          multiple times.</p>
 */
export class ListJournalKinesisStreamsForLedgerCommand extends $Command<
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJournalKinesisStreamsForLedgerCommandInput) {
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
  ): Handler<ListJournalKinesisStreamsForLedgerCommandInput, ListJournalKinesisStreamsForLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListJournalKinesisStreamsForLedgerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListJournalKinesisStreamsForLedgerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> {
    return deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
