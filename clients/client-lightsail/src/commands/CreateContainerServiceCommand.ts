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
import { CreateContainerServiceRequest, CreateContainerServiceResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceCommand,
  serializeAws_json1_1CreateContainerServiceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateContainerServiceCommand}.
 */
export interface CreateContainerServiceCommandInput extends CreateContainerServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerServiceCommand}.
 */
export interface CreateContainerServiceCommandOutput extends CreateContainerServiceResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Lightsail container service.</p>
 *          <p>A Lightsail container service is a compute resource to which you can deploy containers.
 *       For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // CreateContainerServiceRequest
 *   serviceName: "STRING_VALUE", // required
 *   power: "nano" || "micro" || "small" || "medium" || "large" || "xlarge", // required
 *   scale: Number("int"), // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   publicDomainNames: { // ContainerServicePublicDomains
 *     "<keys>": [ // ContainerServicePublicDomainsList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   deployment: { // ContainerServiceDeploymentRequest
 *     containers: { // ContainerMap
 *       "<keys>": { // Container
 *         image: "STRING_VALUE",
 *         command: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         environment: { // Environment
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ports: { // PortMap
 *           "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 *         },
 *       },
 *     },
 *     publicEndpoint: { // EndpointRequest
 *       containerName: "STRING_VALUE", // required
 *       containerPort: Number("int"), // required
 *       healthCheck: { // ContainerServiceHealthCheckConfig
 *         healthyThreshold: Number("int"),
 *         unhealthyThreshold: Number("int"),
 *         timeoutSeconds: Number("int"),
 *         intervalSeconds: Number("int"),
 *         path: "STRING_VALUE",
 *         successCodes: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   privateRegistryAccess: { // PrivateRegistryAccessRequest
 *     ecrImagePullerRole: { // ContainerServiceECRImagePullerRoleRequest
 *       isActive: true || false,
 *     },
 *   },
 * };
 * const command = new CreateContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateContainerServiceCommandInput - {@link CreateContainerServiceCommandInput}
 * @returns {@link CreateContainerServiceCommandOutput}
 * @see {@link CreateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateContainerServiceCommand extends $Command<
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
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
  constructor(readonly input: CreateContainerServiceCommandInput) {
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
  ): Handler<CreateContainerServiceCommandInput, CreateContainerServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContainerServiceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceCommand";
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
  private serialize(input: CreateContainerServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContainerServiceCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
