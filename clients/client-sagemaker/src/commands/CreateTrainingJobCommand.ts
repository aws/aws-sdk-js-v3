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
  CreateTrainingJobRequest,
  CreateTrainingJobRequestFilterSensitiveLog,
  CreateTrainingJobResponse,
  CreateTrainingJobResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateTrainingJobCommand,
  serializeAws_json1_1CreateTrainingJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateTrainingJobCommandInput extends CreateTrainingJobRequest {}
export interface CreateTrainingJobCommandOutput extends CreateTrainingJobResponse, __MetadataBearer {}

/**
 * <p>Starts a model training job. After training completes, SageMaker saves the resulting
 *             model artifacts to an Amazon S3 location that you specify. </p>
 *          <p>If you choose to host your model using SageMaker hosting services, you can use the
 *             resulting model artifacts as part of the model. You can also use the artifacts in a
 *             machine learning service other than SageMaker, provided that you know how to use them for
 *             inference.
 *         </p>
 *          <p>In the request body, you provide the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
 *                     use.
 *                     </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HyperParameters</code> - Specify these algorithm-specific parameters to
 *                     enable the estimation of model parameters during training. Hyperparameters can
 *                     be tuned to optimize this learning process. For a list of hyperparameters for
 *                     each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
 *                <important>
 *                   <p>Do not include any security-sensitive information including account access
 *                         IDs, secrets or tokens in any hyperparameter field. If the use of
 *                         security-sensitive credentials are detected, SageMaker will reject your training
 *                         job request and return an exception error.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InputDataConfig</code> - Describes the input required by the training
 *                     job and the Amazon S3, EFS, or FSx location where it is stored.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
 *                     SageMaker to save the results of model training. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
 *                     instances, and ML storage volumes to deploy for model training. In distributed
 *                     training, you specify more than one instance. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
 *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
 *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
 *                         Training</a>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on
 *                     your behalf during model training.
 *
 *                     You must grant this role the necessary permissions so that SageMaker can successfully
 *                     complete model training. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StoppingCondition</code> - To help cap training costs, use
 *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
 *                         <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot
 *                     training job has to complete. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Environment</code> - The environment variables to set in the Docker
 *                     container.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RetryStrategy</code> - The number of times to retry the job when the job
 *                     fails due to an <code>InternalServerError</code>.</p>
 *             </li>
 *          </ul>
 *          <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateTrainingJobCommand extends $Command<
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput,
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

  constructor(readonly input: CreateTrainingJobCommandInput) {
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
  ): Handler<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrainingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrainingJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrainingJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrainingJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrainingJobCommandOutput> {
    return deserializeAws_json1_1CreateTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
