import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ListJournalS3ExportsForLedgerRequest, ListJournalS3ExportsForLedgerResponse } from "../models/index";
import {
  deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand,
  serializeAws_restJson1ListJournalS3ExportsForLedgerCommand,
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

export type ListJournalS3ExportsForLedgerCommandInput = ListJournalS3ExportsForLedgerRequest;
export type ListJournalS3ExportsForLedgerCommandOutput = ListJournalS3ExportsForLedgerResponse & __MetadataBearer;

export class ListJournalS3ExportsForLedgerCommand extends $Command<
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJournalS3ExportsForLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJournalS3ExportsForLedgerCommandInput, ListJournalS3ExportsForLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJournalS3ExportsForLedgerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJournalS3ExportsForLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJournalS3ExportsForLedgerCommandOutput> {
    return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
