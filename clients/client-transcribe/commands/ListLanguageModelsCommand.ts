import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListLanguageModelsCommand,
  serializeAws_json1_1ListLanguageModelsCommand,
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

export interface ListLanguageModelsCommandInput extends ListLanguageModelsRequest {}
export interface ListLanguageModelsCommandOutput extends ListLanguageModelsResponse, __MetadataBearer {}

/**
 * <p>Provides more information about the custom language models you've created. You can use the information in
 *             this list to find a specific custom language model. You can then use the
 *              operation to get more information about it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListLanguageModelsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListLanguageModelsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListLanguageModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLanguageModelsCommandInput} for command's `input` shape.
 * @see {@link ListLanguageModelsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLanguageModelsCommand extends $Command<
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLanguageModelsCommandInput) {
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
  ): Handler<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListLanguageModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLanguageModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLanguageModelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLanguageModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLanguageModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLanguageModelsCommandOutput> {
    return deserializeAws_json1_1ListLanguageModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
