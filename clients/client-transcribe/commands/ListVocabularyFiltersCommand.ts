import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabularyFiltersRequest, ListVocabularyFiltersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListVocabularyFiltersCommand,
  serializeAws_json1_1ListVocabularyFiltersCommand,
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

export type ListVocabularyFiltersCommandInput = ListVocabularyFiltersRequest;
export type ListVocabularyFiltersCommandOutput = ListVocabularyFiltersResponse & __MetadataBearer;

/**
 * <p>Gets information about vocabulary filters.</p>
 */
export class ListVocabularyFiltersCommand extends $Command<
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVocabularyFiltersCommandInput) {
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
  ): Handler<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListVocabularyFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVocabularyFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVocabularyFiltersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVocabularyFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVocabularyFiltersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVocabularyFiltersCommandOutput> {
    return deserializeAws_json1_1ListVocabularyFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
