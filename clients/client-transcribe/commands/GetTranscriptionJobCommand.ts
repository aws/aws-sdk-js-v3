import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetTranscriptionJobRequest, GetTranscriptionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetTranscriptionJobCommand,
  serializeAws_json1_1GetTranscriptionJobCommand,
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

export interface GetTranscriptionJobCommandInput extends GetTranscriptionJobRequest {}
export interface GetTranscriptionJobCommandOutput extends GetTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a transcription job. To see the status of the job, check the
 *             <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and
 *             you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content
 *             redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetTranscriptionJobCommand extends $Command<
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTranscriptionJobCommandInput) {
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
  ): Handler<GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTranscriptionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTranscriptionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTranscriptionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1GetTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
