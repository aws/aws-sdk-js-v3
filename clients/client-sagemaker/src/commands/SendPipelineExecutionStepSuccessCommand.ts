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
  SendPipelineExecutionStepSuccessRequest,
  SendPipelineExecutionStepSuccessRequestFilterSensitiveLog,
  SendPipelineExecutionStepSuccessResponse,
  SendPipelineExecutionStepSuccessResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1SendPipelineExecutionStepSuccessCommand,
  serializeAws_json1_1SendPipelineExecutionStepSuccessCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

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
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class SendPipelineExecutionStepSuccessCommand extends $Command<
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendPipelineExecutionStepSuccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SendPipelineExecutionStepSuccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendPipelineExecutionStepSuccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendPipelineExecutionStepSuccessResponseFilterSensitiveLog,
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
