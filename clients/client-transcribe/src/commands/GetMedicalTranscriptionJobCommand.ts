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
  GetMedicalTranscriptionJobRequest,
  GetMedicalTranscriptionJobRequestFilterSensitiveLog,
  GetMedicalTranscriptionJobResponse,
  GetMedicalTranscriptionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetMedicalTranscriptionJobCommand,
  serializeAws_json1_1GetMedicalTranscriptionJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface GetMedicalTranscriptionJobCommandInput extends GetMedicalTranscriptionJobRequest {}
export interface GetMedicalTranscriptionJobCommandOutput extends GetMedicalTranscriptionJobResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified medical transcription job.</p>
 *          <p>To view the status of the specified medical transcription job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished. You can find the results at the location specified in
 *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *                 <code>FailureReason</code> provides details on why your transcription job
 *             failed.</p>
 *          <p>To get a list of your medical transcription jobs, use the  operation.</p>
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
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class GetMedicalTranscriptionJobCommand extends $Command<
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMedicalTranscriptionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetMedicalTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMedicalTranscriptionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMedicalTranscriptionJobResponseFilterSensitiveLog,
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
