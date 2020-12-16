import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StreamJournalToKinesisCommand,
  serializeAws_restJson1StreamJournalToKinesisCommand,
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

export type StreamJournalToKinesisCommandInput = StreamJournalToKinesisRequest;
export type StreamJournalToKinesisCommandOutput = StreamJournalToKinesisResponse & __MetadataBearer;

/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 */
export class StreamJournalToKinesisCommand extends $Command<
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StreamJournalToKinesisCommandInput) {
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
  ): Handler<StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "StreamJournalToKinesisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StreamJournalToKinesisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StreamJournalToKinesisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamJournalToKinesisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StreamJournalToKinesisCommandOutput> {
    return deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
