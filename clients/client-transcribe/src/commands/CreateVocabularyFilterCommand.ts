import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateVocabularyFilterRequest, CreateVocabularyFilterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVocabularyFilterCommand,
  serializeAws_json1_1CreateVocabularyFilterCommand,
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

export interface CreateVocabularyFilterCommandInput extends CreateVocabularyFilterRequest {}
export interface CreateVocabularyFilterCommandOutput extends CreateVocabularyFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of
 *             a transcription job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVocabularyFilterCommand extends $Command<
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVocabularyFilterCommandInput) {
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
  ): Handler<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateVocabularyFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVocabularyFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVocabularyFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVocabularyFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVocabularyFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVocabularyFilterCommandOutput> {
    return deserializeAws_json1_1CreateVocabularyFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
