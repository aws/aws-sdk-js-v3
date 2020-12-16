import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DescribeJournalS3ExportRequest, DescribeJournalS3ExportResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJournalS3ExportCommand,
  serializeAws_restJson1DescribeJournalS3ExportCommand,
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

export type DescribeJournalS3ExportCommandInput = DescribeJournalS3ExportRequest;
export type DescribeJournalS3ExportCommandOutput = DescribeJournalS3ExportResponse & __MetadataBearer;

/**
 * <p>Returns information about a journal export job, including the ledger name, export ID,
 *          when it was created, current status, and its start and end time export parameters.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export Job Expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 *          <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 */
export class DescribeJournalS3ExportCommand extends $Command<
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJournalS3ExportCommandInput) {
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
  ): Handler<DescribeJournalS3ExportCommandInput, DescribeJournalS3ExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "DescribeJournalS3ExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJournalS3ExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJournalS3ExportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJournalS3ExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJournalS3ExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJournalS3ExportCommandOutput> {
    return deserializeAws_restJson1DescribeJournalS3ExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
