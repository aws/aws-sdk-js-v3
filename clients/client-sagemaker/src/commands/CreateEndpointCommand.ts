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
  CreateEndpointInput,
  CreateEndpointInputFilterSensitiveLog,
  CreateEndpointOutput,
  CreateEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEndpointCommand,
  serializeAws_json1_1CreateEndpointCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateEndpointCommandInput extends CreateEndpointInput {}
export interface CreateEndpointCommandOutput extends CreateEndpointOutput, __MetadataBearer {}

/**
 * <p>Creates an endpoint using the endpoint configuration specified in the request. SageMaker
 *             uses the endpoint to provision resources and deploy models. You create the endpoint
 *             configuration with the <a>CreateEndpointConfig</a> API. </p>
 *          <p> Use this API to deploy models using SageMaker hosting services. </p>
 *          <p>For an example that calls this method when deploying a model to SageMaker hosting services,
 *             see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a>
 *          </p>
 *          <note>
 *             <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint
 *                 that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
 *                 operations are being performed on the endpoint. To update an endpoint, you must
 *                 create a new <code>EndpointConfig</code>.</p>
 *          </note>
 *          <p>The endpoint name must be unique within an Amazon Web Services Region in your
 *                 Amazon Web Services account. </p>
 *          <p>When it receives the request, SageMaker creates the endpoint, launches the resources (ML
 *             compute instances), and deploys the model(s) on them. </p>
 *          <note>
 *             <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to
 *                 verify that your endpoint configuration exists. When you read data from a DynamoDB
 *                 table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html">
 *                   <code>Eventually Consistent Reads</code>
 *                </a>, the response might not
 *                 reflect the results of a recently completed write operation. The response might
 *                 include some stale data. If the dependent entities are not yet in DynamoDB, this
 *                 causes a validation error. If you repeat your read request after a short time, the
 *                 response should return the latest data. So retry logic is recommended to handle
 *                 these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p>
 *          </note>
 *          <p>When SageMaker receives the request, it sets the endpoint status to
 *                 <code>Creating</code>. After it creates the endpoint, it sets the status to
 *                 <code>InService</code>. SageMaker can then process incoming requests for inferences. To
 *             check the status of an endpoint, use the <a>DescribeEndpoint</a>
 *             API.</p>
 *          <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location,
 *             SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the
 *             S3 path you provided. Amazon Web Services STS is activated in your IAM user account by
 *             default. If you previously deactivated Amazon Web Services STS for a region, you need to
 *             reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
 *                     <i>Amazon Web Services Identity and Access Management User
 *                 Guide</i>.</p>
 *          <note>
 *             <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose
 *                 Roles in the left navigation pane. Search the IAM role that you want to grant
 *                 access to use the <a>CreateEndpoint</a> and <a>CreateEndpointConfig</a> API operations, add the following policies to
 *                 the role. </p>
 *             <ul>
 *                <li>
 *                   <p>Option 1: For a full SageMaker access, search and attach the
 *                             <code>AmazonSageMakerFullAccess</code> policy.</p>
 *                </li>
 *                <li>
 *                   <p>Option 2: For granting a limited access to an IAM role, paste the
 *                         following Action elements manually into the JSON file of the IAM role: </p>
 *                   <p>
 *                      <code>"Action": ["sagemaker:CreateEndpoint",
 *                             "sagemaker:CreateEndpointConfig"]</code>
 *                   </p>
 *                   <p>
 *                      <code>"Resource": [</code>
 *                   </p>
 *                   <p>
 *                      <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code>
 *                   </p>
 *                   <p>
 *                      <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code>
 *                   </p>
 *                   <p>
 *                      <code>]</code>
 *                   </p>
 *                   <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">SageMaker API
 *                             Permissions: Actions, Permissions, and Resources
 *                         Reference</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateEndpointCommand extends $Command<
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
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

  constructor(readonly input: CreateEndpointCommandInput) {
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
  ): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointCommandOutput> {
    return deserializeAws_json1_1CreateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
