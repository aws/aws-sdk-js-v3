import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrainingJobRequest, CreateTrainingJobResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateTrainingJobCommand,
  serializeAws_json1_1CreateTrainingJobCommand,
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

export type CreateTrainingJobCommandInput = CreateTrainingJobRequest;
export type CreateTrainingJobCommandOutput = CreateTrainingJobResponse & __MetadataBearer;

/**
 * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting
 *             model artifacts to an Amazon S3 location that you specify. </p>
 *         <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
 *             model artifacts as part of the model. You can also use the artifacts in a machine
 *             learning service other than Amazon SageMaker, provided that you know how to use them for
 *             inference.
 *
 *         </p>
 *         <p>In the request body, you provide the following: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
 *                     use.
 *                     </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>HyperParameters</code> - Specify these algorithm-specific parameters to
 *                     enable the estimation of model parameters during training. Hyperparameters can
 *                     be tuned to optimize this learning process. For a list of hyperparameters for
 *                     each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3,
 *                     EFS, or FSx location where it is stored.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
 *                     Amazon SageMaker to save the results of model training. </p>
 *                 <p></p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
 *                     instances, and ML storage volumes to deploy for model training. In distributed
 *                     training, you specify more than one instance. </p>
 *
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
 *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
 *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
 *                         Training</a>. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RoleArn</code> - The Amazon Resource Number (ARN) that Amazon SageMaker assumes
 *                     to perform tasks on your behalf during model training.
 *
 *                     You must grant this role the necessary permissions so that Amazon SageMaker can successfully
 *                     complete model training. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>StoppingCondition</code> - To help cap training costs, use
 *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
 *                         <code>MaxWaitTimeInSeconds</code> to specify how long you are willing to
 *                     wait for a managed spot training job to complete. </p>
 *             </li>
 *          </ul>
 *         <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 */
export class CreateTrainingJobCommand extends $Command<
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrainingJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrainingJobResponse.filterSensitiveLog,
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
