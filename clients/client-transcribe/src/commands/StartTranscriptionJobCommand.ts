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
  StartTranscriptionJobRequest,
  StartTranscriptionJobRequestFilterSensitiveLog,
  StartTranscriptionJobResponse,
  StartTranscriptionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartTranscriptionJobCommand,
  serializeAws_json1_1StartTranscriptionJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface StartTranscriptionJobCommandInput extends StartTranscriptionJobRequest {}
export interface StartTranscriptionJobCommandOutput extends StartTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Transcribes the audio from a media file and applies any additional Request Parameters
 *             you choose to include in your request.</p>
 *          <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media
 *             file into an Amazon S3 bucket; you can then specify the Amazon S3
 *             location of the file using the <code>Media</code> parameter.</p>
 *          <p>You must include the following parameters in your <code>StartTranscriptionJob</code>
 *             request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>region</code>: The Amazon Web Services Region where you are making your
 *                     request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and
 *                         quotas</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TranscriptionJobName</code>: A custom name you create for your
 *                     transcription job that is unique within your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location
 *                     of your media file.</p>
 *             </li>
 *             <li>
 *                <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or
 *                         <code>IdentifyMultipleLanguages</code>: If you know the language of your
 *                     media file, specify it using the <code>LanguageCode</code> parameter; you can
 *                     find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
 *                         languages</a> table. If you don't know the languages spoken in your
 *                     media, use either <code>IdentifyLanguage</code> or
 *                         <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify
 *                     the languages for you.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class StartTranscriptionJobCommand extends $Command<
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
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

  constructor(readonly input: StartTranscriptionJobCommandInput) {
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
  ): Handler<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTranscriptionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTranscriptionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartTranscriptionJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTranscriptionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1StartTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
