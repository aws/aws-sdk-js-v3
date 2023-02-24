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
  CreateModelInput,
  CreateModelInputFilterSensitiveLog,
  CreateModelOutput,
  CreateModelOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateModelCommand,
  serializeAws_json1_1CreateModelCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateModelCommandInput extends CreateModelInput {}
export interface CreateModelCommandOutput extends CreateModelOutput, __MetadataBearer {}

/**
 * <p>Creates a model in SageMaker. In the request, you name the model and describe a primary
 *             container. For the primary container, you specify the Docker image that
 *             contains inference code, artifacts (from prior training), and a custom environment map
 *             that the inference code uses when you deploy the model for predictions.</p>
 *          <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch
 *             transform job.</p>
 *          <p>To host your model, you create an endpoint configuration with the
 *                 <code>CreateEndpointConfig</code> API, and then create an endpoint with the
 *                 <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you
 *             defined for the model in the hosting environment. </p>
 *          <p>For an example that calls this method when deploying a model to SageMaker hosting services,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a>
 *          </p>
 *          <p>To run a batch transform using your model, you start a job with the
 *                 <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get
 *             inferences which are then saved to a specified S3 location.</p>
 *          <p>In the request, you also provide an IAM role that SageMaker can assume to access model
 *             artifacts and docker image for deployment on ML compute hosting instances or for batch
 *             transform jobs. In addition, you also use the IAM role to manage permissions the
 *             inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateModelCommand extends $Command<
  CreateModelCommandInput,
  CreateModelCommandOutput,
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

  constructor(readonly input: CreateModelCommandInput) {
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
  ): Handler<CreateModelCommandInput, CreateModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateModelOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCommandOutput> {
    return deserializeAws_json1_1CreateModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
