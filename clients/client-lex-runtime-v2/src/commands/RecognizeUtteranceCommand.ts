import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeUtteranceRequest, RecognizeUtteranceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RecognizeUtteranceCommand,
  serializeAws_restJson1RecognizeUtteranceCommand,
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

type RecognizeUtteranceCommandInputType = Omit<RecognizeUtteranceRequest, "inputStream"> & {
  /**
   * For *`RecognizeUtteranceRequest["inputStream"]`*, see {@link RecognizeUtteranceRequest.inputStream}.
   */
  inputStream?: RecognizeUtteranceRequest["inputStream"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `RecognizeUtteranceRequest` interface. There are more parameters than `inputStream` defined in {@link RecognizeUtteranceRequest}
 */
export interface RecognizeUtteranceCommandInput extends RecognizeUtteranceCommandInputType {}
export interface RecognizeUtteranceCommandOutput extends RecognizeUtteranceResponse, __MetadataBearer {}

/**
 * <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use
 *          this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2
 *          interprets the user input using the machine learning model built for
 *          the bot.</p>
 *          <p>The following request fields must be compressed with gzip and then
 *          base64 encoded before you send them to Amazon Lex V2. </p>
 *          <ul>
 *             <li>
 *                <p>requestAttributes</p>
 *             </li>
 *             <li>
 *                <p>sessionState</p>
 *             </li>
 *          </ul>
 *          <p>The following response fields are compressed using gzip and then
 *          base64 encoded by Amazon Lex V2. Before you can use these fields, you must
 *          decode and decompress them. </p>
 *          <ul>
 *             <li>
 *                <p>inputTranscript</p>
 *             </li>
 *             <li>
 *                <p>interpretations</p>
 *             </li>
 *             <li>
 *                <p>messages</p>
 *             </li>
 *             <li>
 *                <p>requestAttributes</p>
 *             </li>
 *             <li>
 *                <p>sessionState</p>
 *             </li>
 *          </ul>
 *          <p>The example contains a Java application that compresses and encodes
 *          a Java object to send to Amazon Lex V2, and a second that decodes and
 *          decompresses a response from Amazon Lex V2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeUtteranceCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeUtteranceCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeUtteranceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeUtteranceCommandInput} for command's `input` shape.
 * @see {@link RecognizeUtteranceCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RecognizeUtteranceCommand extends $Command<
  RecognizeUtteranceCommandInput,
  RecognizeUtteranceCommandOutput,
  LexRuntimeV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecognizeUtteranceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "RecognizeUtteranceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeUtteranceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RecognizeUtteranceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecognizeUtteranceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RecognizeUtteranceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeUtteranceCommandOutput> {
    return deserializeAws_restJson1RecognizeUtteranceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
