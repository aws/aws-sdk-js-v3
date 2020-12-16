import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteMedicalVocabularyRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMedicalVocabularyCommand,
  serializeAws_json1_1DeleteMedicalVocabularyCommand,
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

export type DeleteMedicalVocabularyCommandInput = DeleteMedicalVocabularyRequest;
export type DeleteMedicalVocabularyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
 */
export class DeleteMedicalVocabularyCommand extends $Command<
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMedicalVocabularyCommandInput) {
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
  ): Handler<DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "DeleteMedicalVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMedicalVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMedicalVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMedicalVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMedicalVocabularyCommandOutput> {
    return deserializeAws_json1_1DeleteMedicalVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
