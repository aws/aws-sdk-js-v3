import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetMedicalTranscriptionJobRequest, GetMedicalTranscriptionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetMedicalTranscriptionJobCommand,
  serializeAws_json1_1GetMedicalTranscriptionJobCommand,
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

export interface GetMedicalTranscriptionJobCommandInput extends GetMedicalTranscriptionJobRequest {}
export interface GetMedicalTranscriptionJobCommandOutput extends GetMedicalTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the
 *             <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You
 *             find the results of the completed job in the <code>TranscriptFileUri</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link GetMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMedicalTranscriptionJobCommand extends $Command<
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMedicalTranscriptionJobCommandInput) {
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
  ): Handler<GetMedicalTranscriptionJobCommandInput, GetMedicalTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetMedicalTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMedicalTranscriptionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMedicalTranscriptionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMedicalTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMedicalTranscriptionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMedicalTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1GetMedicalTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
