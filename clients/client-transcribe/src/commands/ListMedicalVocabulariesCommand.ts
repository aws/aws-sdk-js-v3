import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListMedicalVocabulariesRequest, ListMedicalVocabulariesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListMedicalVocabulariesCommand,
  serializeAws_json1_1ListMedicalVocabulariesCommand,
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

export interface ListMedicalVocabulariesCommandInput extends ListMedicalVocabulariesRequest {}
export interface ListMedicalVocabulariesCommandOutput extends ListMedicalVocabulariesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request
 *             parameters, returns the entire list of vocabularies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListMedicalVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMedicalVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListMedicalVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMedicalVocabulariesCommand extends $Command<
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMedicalVocabulariesCommandInput) {
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
  ): Handler<ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListMedicalVocabulariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMedicalVocabulariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMedicalVocabulariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMedicalVocabulariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMedicalVocabulariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMedicalVocabulariesCommandOutput> {
    return deserializeAws_json1_1ListMedicalVocabulariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
