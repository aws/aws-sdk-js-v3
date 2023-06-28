// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateContainerServiceRegistryLoginRequest,
  CreateContainerServiceRegistryLoginResult,
} from "../models/models_0";
import {
  de_CreateContainerServiceRegistryLoginCommand,
  se_CreateContainerServiceRegistryLoginCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerServiceRegistryLoginCommand}.
 */
export interface CreateContainerServiceRegistryLoginCommandInput extends CreateContainerServiceRegistryLoginRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerServiceRegistryLoginCommand}.
 */
export interface CreateContainerServiceRegistryLoginCommandOutput
  extends CreateContainerServiceRegistryLoginResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = {};
 * const command = new CreateContainerServiceRegistryLoginCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerServiceRegistryLoginResult
 * //   registryLogin: { // ContainerServiceRegistryLogin
 * //     username: "STRING_VALUE",
 * //     password: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //     registry: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContainerServiceRegistryLoginCommandInput - {@link CreateContainerServiceRegistryLoginCommandInput}
 * @returns {@link CreateContainerServiceRegistryLoginCommandOutput}
 * @see {@link CreateContainerServiceRegistryLoginCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceRegistryLoginCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: CreateContainerServiceRegistryLoginCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateContainerServiceRegistryLoginCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceRegistryLoginCommandOutput> {
    return de_CreateContainerServiceRegistryLoginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
