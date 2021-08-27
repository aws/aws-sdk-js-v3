import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVocabularyCommand,
  serializeAws_json1_1UpdateVocabularyCommand,
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

export interface UpdateVocabularyCommandInput extends UpdateVocabularyRequest {}
export interface UpdateVocabularyCommandOutput extends UpdateVocabularyResponse, __MetadataBearer {}

/**
 * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites
 *             all of the existing information with the values that you provide in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateVocabularyCommand extends $Command<
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVocabularyCommandInput) {
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
  ): Handler<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVocabularyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVocabularyCommandOutput> {
    return deserializeAws_json1_1UpdateVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
