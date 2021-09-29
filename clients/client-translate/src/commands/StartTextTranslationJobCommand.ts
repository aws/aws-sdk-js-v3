import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { StartTextTranslationJobRequest, StartTextTranslationJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartTextTranslationJobCommand,
  serializeAws_json1_1StartTextTranslationJobCommand,
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

export interface StartTextTranslationJobCommandInput extends StartTextTranslationJobRequest {}
export interface StartTextTranslationJobCommandOutput extends StartTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to
 *       translate large volumes of text across multiple documents at once. For more information, see
 *         <a>async</a>.</p>
 *
 *          <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
 *          <note>
 *             <p>Amazon Translate does not support batch translation of multiple source languages at once.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StartTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StartTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new StartTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StartTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartTextTranslationJobCommand extends $Command<
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTextTranslationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "StartTextTranslationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTextTranslationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTextTranslationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTextTranslationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTextTranslationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTextTranslationJobCommandOutput> {
    return deserializeAws_json1_1StartTextTranslationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
