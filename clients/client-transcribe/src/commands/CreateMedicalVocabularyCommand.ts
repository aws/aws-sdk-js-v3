import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateMedicalVocabularyRequest, CreateMedicalVocabularyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMedicalVocabularyCommand,
  serializeAws_json1_1CreateMedicalVocabularyCommand,
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

export interface CreateMedicalVocabularyCommandInput extends CreateMedicalVocabularyRequest {}
export interface CreateMedicalVocabularyCommandOutput extends CreateMedicalVocabularyResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link CreateMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMedicalVocabularyCommand extends $Command<
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMedicalVocabularyCommandInput) {
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
  ): Handler<CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateMedicalVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMedicalVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMedicalVocabularyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMedicalVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMedicalVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMedicalVocabularyCommandOutput> {
    return deserializeAws_json1_1CreateMedicalVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
