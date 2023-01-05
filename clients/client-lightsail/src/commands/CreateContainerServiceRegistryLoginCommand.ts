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
  CreateContainerServiceRegistryLoginRequest,
  CreateContainerServiceRegistryLoginRequestFilterSensitiveLog,
  CreateContainerServiceRegistryLoginResult,
  CreateContainerServiceRegistryLoginResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand,
  serializeAws_json1_1CreateContainerServiceRegistryLoginCommand,
} from "../protocols/Aws_json1_1";

export interface CreateContainerServiceRegistryLoginCommandInput extends CreateContainerServiceRegistryLoginRequest {}
export interface CreateContainerServiceRegistryLoginCommandOutput
  extends CreateContainerServiceRegistryLoginResult,
    __MetadataBearer {}

/**
 * <p>Creates a temporary set of log in credentials that you can use to log in to the Docker
 *       process on your local machine. After you're logged in, you can use the native Docker commands
 *       to push your local container images to the container image registry of your Amazon Lightsail
 *       account so that you can use them with your Lightsail container service. The log in
 *       credentials expire 12 hours after they are created, at which point you will need to create a
 *       new set of log in credentials.</p>
 *          <note>
 *             <p>You can only push container images to the container service registry of your Lightsail
 *         account. You cannot pull container images or perform any other container image management
 *         actions on the container service registry.</p>
 *          </note>
 *          <p>After you push your container images to the container image registry of your Lightsail
 *       account, use the <code>RegisterContainerImage</code> action to register the pushed images to a
 *       specific Lightsail container service.</p>
 *          <note>
 *             <p>This action is not required if you install and use the Lightsail Control
 *         (lightsailctl) plugin to push container images to your Lightsail container service. For
 *         more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a>
 *         in the <i>Amazon Lightsail Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceRegistryLoginCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceRegistryLoginCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContainerServiceRegistryLoginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContainerServiceRegistryLoginCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceRegistryLoginCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateContainerServiceRegistryLoginCommand extends $Command<
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
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

  constructor(readonly input: CreateContainerServiceRegistryLoginCommandInput) {
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
  ): Handler<CreateContainerServiceRegistryLoginCommandInput, CreateContainerServiceRegistryLoginCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContainerServiceRegistryLoginCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceRegistryLoginCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContainerServiceRegistryLoginRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContainerServiceRegistryLoginResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateContainerServiceRegistryLoginCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceRegistryLoginCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceRegistryLoginCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
