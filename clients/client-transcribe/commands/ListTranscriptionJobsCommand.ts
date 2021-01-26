import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTranscriptionJobsCommand,
  serializeAws_json1_1ListTranscriptionJobsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListTranscriptionJobsCommandInput = ListTranscriptionJobsRequest;
export type ListTranscriptionJobsCommandOutput = ListTranscriptionJobsResponse & __MetadataBearer;

/**
 * <p>Lists transcription jobs with the specified status.</p>
 */
export class ListTranscriptionJobsCommand extends $Command<
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTranscriptionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListTranscriptionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTranscriptionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTranscriptionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTranscriptionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTranscriptionJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTranscriptionJobsCommandOutput> {
    return deserializeAws_json1_1ListTranscriptionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
