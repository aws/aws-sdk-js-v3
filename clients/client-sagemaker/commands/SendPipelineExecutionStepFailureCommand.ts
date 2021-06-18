import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { SendPipelineExecutionStepFailureRequest, SendPipelineExecutionStepFailureResponse } from "../models/models_2";
import {
  deserializeAws_json1_1SendPipelineExecutionStepFailureCommand,
  serializeAws_json1_1SendPipelineExecutionStepFailureCommand,
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

export interface SendPipelineExecutionStepFailureCommandInput extends SendPipelineExecutionStepFailureRequest {}
export interface SendPipelineExecutionStepFailureCommandOutput
  extends SendPipelineExecutionStepFailureResponse,
    __MetadataBearer {}

/**
 * <p>Notifies the pipeline that the execution of a callback step failed, along with a
 *         message describing why. When a callback step is run, the pipeline generates a callback
 *         token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SendPipelineExecutionStepFailureCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SendPipelineExecutionStepFailureCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new SendPipelineExecutionStepFailureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendPipelineExecutionStepFailureCommandInput} for command's `input` shape.
 * @see {@link SendPipelineExecutionStepFailureCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendPipelineExecutionStepFailureCommand extends $Command<
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendPipelineExecutionStepFailureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendPipelineExecutionStepFailureCommandInput, SendPipelineExecutionStepFailureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SendPipelineExecutionStepFailureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendPipelineExecutionStepFailureRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendPipelineExecutionStepFailureResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SendPipelineExecutionStepFailureCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SendPipelineExecutionStepFailureCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendPipelineExecutionStepFailureCommandOutput> {
    return deserializeAws_json1_1SendPipelineExecutionStepFailureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
