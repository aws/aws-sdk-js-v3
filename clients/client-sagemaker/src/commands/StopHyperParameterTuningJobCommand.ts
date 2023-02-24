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
  StopHyperParameterTuningJobRequest,
  StopHyperParameterTuningJobRequestFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1StopHyperParameterTuningJobCommand,
  serializeAws_json1_1StopHyperParameterTuningJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface StopHyperParameterTuningJobCommandInput extends StopHyperParameterTuningJobRequest {}
export interface StopHyperParameterTuningJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a running hyperparameter tuning job and all running training jobs that the
 *             tuning job launched.</p>
 *          <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
 *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
 *             tuning job moves to the <code>Stopped</code> state, it releases all
 *             reserved
 *             resources for the tuning job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link StopHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class StopHyperParameterTuningJobCommand extends $Command<
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
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

  constructor(readonly input: StopHyperParameterTuningJobCommandInput) {
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
  ): Handler<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopHyperParameterTuningJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopHyperParameterTuningJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopHyperParameterTuningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1StopHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
