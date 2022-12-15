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
  CreateHyperParameterTuningJobRequest,
  CreateHyperParameterTuningJobRequestFilterSensitiveLog,
  CreateHyperParameterTuningJobResponse,
  CreateHyperParameterTuningJobResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateHyperParameterTuningJobCommand,
  serializeAws_json1_1CreateHyperParameterTuningJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateHyperParameterTuningJobCommandInput extends CreateHyperParameterTuningJobRequest {}
export interface CreateHyperParameterTuningJobCommandOutput
  extends CreateHyperParameterTuningJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
 *             of a model by running many training jobs on your dataset using the algorithm you choose
 *             and values for hyperparameters within ranges that you specify. It then chooses the
 *             hyperparameter values that result in a model that performs the best, as measured by an
 *             objective metric that you choose.</p>
 *          <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and
 *             trial components for each training job that it runs. You can view these entities in
 *             Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View
 *                 Experiments, Trials, and Trial Components</a>.</p>
 *          <important>
 *             <p>Do not include any security-sensitive information including account access IDs,
 *                 secrets or tokens in any hyperparameter field. If the use of security-sensitive
 *                 credentials are detected, SageMaker will reject your training job request and return an
 *                 exception error.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link CreateHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateHyperParameterTuningJobCommand extends $Command<
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
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

  constructor(readonly input: CreateHyperParameterTuningJobCommandInput) {
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
  ): Handler<CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHyperParameterTuningJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHyperParameterTuningJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateHyperParameterTuningJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHyperParameterTuningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1CreateHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
