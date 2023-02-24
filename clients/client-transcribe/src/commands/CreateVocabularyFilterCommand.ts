// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterRequestFilterSensitiveLog,
  CreateVocabularyFilterResponse,
  CreateVocabularyFilterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateVocabularyFilterCommand,
  serializeAws_json1_1CreateVocabularyFilterCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface CreateVocabularyFilterCommandInput extends CreateVocabularyFilterRequest {}
export interface CreateVocabularyFilterCommandOutput extends CreateVocabularyFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom vocabulary filter.</p>
 *          <p>You can use custom vocabulary filters to mask, delete, or flag specific words from
 *             your transcript. Custom vocabulary filters are commonly used to mask profanity in
 *             transcripts.</p>
 *          <p>Each language has a character set that contains all allowed characters for that
 *             specific language. If you use unsupported characters, your custom vocabulary filter
 *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
 *                 Vocabularies</a> to get the character set for your language.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary
 *             filtering</a>.</p>
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
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class CreateVocabularyFilterCommand extends $Command<
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVocabularyFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateVocabularyFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVocabularyFilterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVocabularyFilterResponseFilterSensitiveLog,
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
