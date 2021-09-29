import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { SendPipelineExecutionStepSuccessRequest, SendPipelineExecutionStepSuccessResponse } from "../models/models_2";
import {
  deserializeAws_json1_1SendPipelineExecutionStepSuccessCommand,
  serializeAws_json1_1SendPipelineExecutionStepSuccessCommand,
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

export interface SendPipelineExecutionStepSuccessCommandInput extends SendPipelineExecutionStepSuccessRequest {}
export interface SendPipelineExecutionStepSuccessCommandOutput
  extends SendPipelineExecutionStepSuccessResponse,
    __MetadataBearer {}

/**
 * <p>Notifies the pipeline that the execution of a callback step succeeded and provides a
 *         list of the step's output parameters. When a callback step is run, the pipeline generates
 *         a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SendPipelineExecutionStepSuccessCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SendPipelineExecutionStepSuccessCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new SendPipelineExecutionStepSuccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendPipelineExecutionStepSuccessCommandInput} for command's `input` shape.
 * @see {@link SendPipelineExecutionStepSuccessCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendPipelineExecutionStepSuccessCommand extends $Command<
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendPipelineExecutionStepSuccessCommandInput) {
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
  ): Handler<SendPipelineExecutionStepSuccessCommandInput, SendPipelineExecutionStepSuccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SendPipelineExecutionStepSuccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendPipelineExecutionStepSuccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendPipelineExecutionStepSuccessResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SendPipelineExecutionStepSuccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SendPipelineExecutionStepSuccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendPipelineExecutionStepSuccessCommandOutput> {
    return deserializeAws_json1_1SendPipelineExecutionStepSuccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
