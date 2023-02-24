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
  GetCallAnalyticsJobRequest,
  GetCallAnalyticsJobRequestFilterSensitiveLog,
  GetCallAnalyticsJobResponse,
  GetCallAnalyticsJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCallAnalyticsJobCommand,
  serializeAws_json1_1GetCallAnalyticsJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface GetCallAnalyticsJobCommandInput extends GetCallAnalyticsJobRequest {}
export interface GetCallAnalyticsJobCommandOutput extends GetCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified Call Analytics job.</p>
 *          <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status
 *             is <code>COMPLETED</code>, the job is finished. You can find your completed transcript
 *             at the URI specified in <code>TranscriptFileUri</code>. If the status is
 *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
 *             transcription job failed.</p>
 *          <p>If you enabled personally identifiable information (PII) redaction, the redacted
 *             transcript appears at the location specified in
 *             <code>RedactedTranscriptFileUri</code>.</p>
 *          <p>If you chose to redact the audio in your media file, you can find your redacted media
 *             file at the location specified in <code>RedactedMediaFileUri</code>.</p>
 *          <p>To get a list of your Call Analytics jobs, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetCallAnalyticsJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link GetCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class GetCallAnalyticsJobCommand extends $Command<
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
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

  constructor(readonly input: GetCallAnalyticsJobCommandInput) {
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
  ): Handler<GetCallAnalyticsJobCommandInput, GetCallAnalyticsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCallAnalyticsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetCallAnalyticsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCallAnalyticsJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCallAnalyticsJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCallAnalyticsJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCallAnalyticsJobCommandOutput> {
    return deserializeAws_json1_1GetCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
