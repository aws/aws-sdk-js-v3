// smithy-typescript generated code
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

import { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVocabularyCommand,
  serializeAws_json1_1CreateVocabularyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface CreateVocabularyCommandInput extends CreateVocabularyRequest {}
export interface CreateVocabularyCommandOutput extends CreateVocabularyResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom vocabulary.</p>
 *         <p>When creating a new medical vocabulary, you can either upload a text file that
 *             contains your new entries, phrases, and terms into an S3 bucket or include a list of
 *             terms directly in your request using the <code>Phrases</code> flag.</p>
 *         <p>For more information on creating a custom vocabulary, see
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary-create.html">Creating a custom
 *                 vocabulary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVocabularyCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class CreateVocabularyCommand extends $Command<
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVocabularyCommandInput) {
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
  ): Handler<CreateVocabularyCommandInput, CreateVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVocabularyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVocabularyCommandOutput> {
    return deserializeAws_json1_1CreateVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
