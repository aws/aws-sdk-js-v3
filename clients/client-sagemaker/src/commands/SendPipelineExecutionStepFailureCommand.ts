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
  SendPipelineExecutionStepFailureRequest,
  SendPipelineExecutionStepFailureRequestFilterSensitiveLog,
  SendPipelineExecutionStepFailureResponse,
  SendPipelineExecutionStepFailureResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1SendPipelineExecutionStepFailureCommand,
  serializeAws_json1_1SendPipelineExecutionStepFailureCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

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
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class SendPipelineExecutionStepFailureCommand extends $Command<
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
  SageMakerClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendPipelineExecutionStepFailureCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SendPipelineExecutionStepFailureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendPipelineExecutionStepFailureRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendPipelineExecutionStepFailureResponseFilterSensitiveLog,
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
