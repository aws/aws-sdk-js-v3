import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateNotebookInstanceInput, CreateNotebookInstanceOutput } from "../models/models_1";
import {
  deserializeAws_json1_1CreateNotebookInstanceCommand,
  serializeAws_json1_1CreateNotebookInstanceCommand,
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

export type CreateNotebookInstanceCommandInput = CreateNotebookInstanceInput;
export type CreateNotebookInstanceCommandOutput = CreateNotebookInstanceOutput & __MetadataBearer;

/**
 * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML)
 *             compute instance running on a Jupyter notebook. </p>
 *         <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
 *             instance that you want to run. Amazon SageMaker launches the instance, installs common libraries
 *             that you can use to explore datasets for model training, and attaches an ML storage
 *             volume to the notebook instance. </p>
 *         <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
 *             use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p>
 *         <p>After receiving the request, Amazon SageMaker does the following:</p>
 *         <ol>
 *             <li>
 *                 <p>Creates a network interface in the Amazon SageMaker VPC.</p>
 *             </li>
 *             <li>
 *                 <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network
 *                     interface in your own VPC, which is inferred from the subnet ID that you provide
 *                     in the input. When creating this network interface, Amazon SageMaker attaches the security
 *                     group that you specified in the request to the network interface that it creates
 *                     in your VPC.</p>
 *
 *             </li>
 *             <li>
 *                 <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker
 *                     VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both
 *                     network interfaces when launching this instance. This enables inbound traffic
 *                     from your own VPC to the notebook instance, assuming that the security groups
 *                     allow it.</p>
 *             </li>
 *          </ol>
 *
 *         <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).
 *             You can't change the name of a notebook instance after you create it.</p>
 *         <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and
 *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
 *             can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and
 *             validate hosted models. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 */
export class CreateNotebookInstanceCommand extends $Command<
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNotebookInstanceCommandInput) {
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
  ): Handler<CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateNotebookInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotebookInstanceInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNotebookInstanceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNotebookInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNotebookInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotebookInstanceCommandOutput> {
    return deserializeAws_json1_1CreateNotebookInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
