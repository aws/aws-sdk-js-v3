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
  StopPipelineExecutionRequest,
  StopPipelineExecutionRequestFilterSensitiveLog,
  StopPipelineExecutionResponse,
  StopPipelineExecutionResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1StopPipelineExecutionCommand,
  serializeAws_json1_1StopPipelineExecutionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface StopPipelineExecutionCommandInput extends StopPipelineExecutionRequest {}
export interface StopPipelineExecutionCommandOutput extends StopPipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Stops a pipeline execution.</p>
 *          <p>
 *             <b>Callback Step</b>
 *          </p>
 *          <p>A pipeline execution won't stop while a callback step is running.
 *         When you call <code>StopPipelineExecution</code>
 *         on a pipeline execution with a running callback step, SageMaker Pipelines sends an
 *         additional Amazon SQS message to the specified SQS queue. The body of the SQS message
 *         contains a "Status" field which is set to "Stopping".</p>
 *          <p>You should add logic to your Amazon SQS message consumer to take any needed action (for
 *         example, resource cleanup) upon receipt of the message followed by a call to
 *         <code>SendPipelineExecutionStepSuccess</code> or
 *         <code>SendPipelineExecutionStepFailure</code>.</p>
 *          <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p>
 *          <p>
 *             <b>Lambda Step</b>
 *          </p>
 *          <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda
 *         function invoked by the lambda step can't be stopped. If you attempt to stop the execution
 *         while the Lambda function is running, the pipeline waits for the Lambda function to finish
 *         or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function
 *         finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit
 *         the pipeline execution status is <code>Failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class StopPipelineExecutionCommand extends $Command<
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
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

  constructor(readonly input: StopPipelineExecutionCommandInput) {
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
  ): Handler<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopPipelineExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopPipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopPipelineExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopPipelineExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopPipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopPipelineExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopPipelineExecutionCommandOutput> {
    return deserializeAws_json1_1StopPipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
