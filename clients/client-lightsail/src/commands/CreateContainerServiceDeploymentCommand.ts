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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateContainerServiceDeploymentRequest,
  CreateContainerServiceDeploymentRequestFilterSensitiveLog,
  CreateContainerServiceDeploymentResult,
  CreateContainerServiceDeploymentResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceDeploymentCommand,
  serializeAws_json1_1CreateContainerServiceDeploymentCommand,
} from "../protocols/Aws_json1_1";

export interface CreateContainerServiceDeploymentCommandInput extends CreateContainerServiceDeploymentRequest {}
export interface CreateContainerServiceDeploymentCommandOutput
  extends CreateContainerServiceDeploymentResult,
    __MetadataBearer {}

/**
 * <p>Creates a deployment for your Amazon Lightsail container service.</p>
 *          <p>A deployment specifies the containers that will be launched on the container service and
 *       their settings, such as the ports to open, the environment variables to apply, and the launch
 *       command to run. It also specifies the container that will serve as the public endpoint of the
 *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
 *       configuration.</p>
 *          <p>You can deploy containers to your container service using container images from a public
 *       registry such as Amazon ECR Public, or from your local machine. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceDeploymentCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceDeploymentCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateContainerServiceDeploymentCommand extends $Command<
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: CreateContainerServiceDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContainerServiceDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContainerServiceDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContainerServiceDeploymentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateContainerServiceDeploymentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceDeploymentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceDeploymentCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
