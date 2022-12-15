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
  CreateEndpointConfigInput,
  CreateEndpointConfigInputFilterSensitiveLog,
  CreateEndpointConfigOutput,
  CreateEndpointConfigOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEndpointConfigCommand,
  serializeAws_json1_1CreateEndpointConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateEndpointConfigCommandInput extends CreateEndpointConfigInput {}
export interface CreateEndpointConfigCommandOutput extends CreateEndpointConfigOutput, __MetadataBearer {}

/**
 * <p>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In
 *             the configuration, you identify one or more models, created using the
 *                 <code>CreateModel</code> API, to deploy and the resources that you want SageMaker to
 *             provision. Then you call the <a>CreateEndpoint</a> API.</p>
 *          <note>
 *             <p> Use this API if you want to use SageMaker hosting services to deploy models into
 *                 production. </p>
 *          </note>
 *          <p>In the request, you define a <code>ProductionVariant</code>, for each model that you
 *             want to deploy. Each <code>ProductionVariant</code> parameter also describes the
 *             resources that you want SageMaker to provision. This includes the number and type of ML
 *             compute instances to deploy. </p>
 *          <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to
 *             specify how much traffic you want to allocate to each model. For example, suppose that
 *             you want to host two models, A and B, and you assign traffic weight 2 for model A and 1
 *             for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to
 *             model B. </p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateEndpointConfigCommand extends $Command<
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
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

  constructor(readonly input: CreateEndpointConfigCommandInput) {
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
  ): Handler<CreateEndpointConfigCommandInput, CreateEndpointConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEndpointConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointConfigInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointConfigOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEndpointConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEndpointConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointConfigCommandOutput> {
    return deserializeAws_json1_1CreateEndpointConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
