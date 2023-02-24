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
  CreateNotebookInstanceInput,
  CreateNotebookInstanceInputFilterSensitiveLog,
  CreateNotebookInstanceOutput,
  CreateNotebookInstanceOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateNotebookInstanceCommand,
  serializeAws_json1_1CreateNotebookInstanceCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateNotebookInstanceCommandInput extends CreateNotebookInstanceInput {}
export interface CreateNotebookInstanceCommandOutput extends CreateNotebookInstanceOutput, __MetadataBearer {}

/**
 * <p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML)
 *             compute instance running on a Jupyter notebook. </p>
 *          <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
 *             instance that you want to run. SageMaker launches the instance, installs common libraries
 *             that you can use to explore datasets for model training, and attaches an ML storage
 *             volume to the notebook instance. </p>
 *          <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
 *             use SageMaker with a specific algorithm or with a machine learning framework. </p>
 *          <p>After receiving the request, SageMaker does the following:</p>
 *          <ol>
 *             <li>
 *                <p>Creates a network interface in the SageMaker VPC.</p>
 *             </li>
 *             <li>
 *                <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network
 *                     interface in your own VPC, which is inferred from the subnet ID that you provide
 *                     in the input. When creating this network interface, SageMaker attaches the security
 *                     group that you specified in the request to the network interface that it creates
 *                     in your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Launches an EC2 instance of the type specified in the request in the SageMaker
 *                     VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both
 *                     network interfaces when launching this instance. This enables inbound traffic
 *                     from your own VPC to the notebook instance, assuming that the security groups
 *                     allow it.</p>
 *             </li>
 *          </ol>
 *          <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN).
 *             You can't change the name of a notebook instance after you create it.</p>
 *          <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and
 *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
 *             can use for model training, train a model, host models by creating SageMaker endpoints, and
 *             validate hosted models. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateNotebookInstanceCommand extends $Command<
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotebookInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateNotebookInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotebookInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNotebookInstanceOutputFilterSensitiveLog,
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
