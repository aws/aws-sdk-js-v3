import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ExportJournalToS3Request, ExportJournalToS3Response } from "../models/models_0";
import {
  deserializeAws_restJson1ExportJournalToS3Command,
  serializeAws_restJson1ExportJournalToS3Command,
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

export type ExportJournalToS3CommandInput = ExportJournalToS3Request;
export type ExportJournalToS3CommandOutput = ExportJournalToS3Response & __MetadataBearer;

/**
 * <p>Exports journal contents within a date and time range from a ledger into a specified
 *          Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
 *          throws <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
 *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
 */
export class ExportJournalToS3Command extends $Command<
  ExportJournalToS3CommandInput,
  ExportJournalToS3CommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportJournalToS3CommandInput) {
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
  ): Handler<ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ExportJournalToS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportJournalToS3Request.filterSensitiveLog,
      outputFilterSensitiveLog: ExportJournalToS3Response.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportJournalToS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportJournalToS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportJournalToS3CommandOutput> {
    return deserializeAws_restJson1ExportJournalToS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
