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
import { GetContainerServiceDeploymentsRequest, GetContainerServiceDeploymentsResult } from "../models/models_0";
import {
  de_GetContainerServiceDeploymentsCommand,
  se_GetContainerServiceDeploymentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContainerServiceDeploymentsCommand}.
 */
export interface GetContainerServiceDeploymentsCommandInput extends GetContainerServiceDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServiceDeploymentsCommand}.
 */
export interface GetContainerServiceDeploymentsCommandOutput
  extends GetContainerServiceDeploymentsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the deployments for your Amazon Lightsail container service</p>
 *          <p>A deployment specifies the settings, such as the ports and launch command, of containers
 *       that are deployed to your container service.</p>
 *          <p>The deployments are ordered by version in ascending order. The newest version is listed at
 *       the top of the response.</p>
 *          <note>
 *             <p>A set number of deployments are kept before the oldest one is replaced with the newest
 *         one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail
 *           endpoints and quotas</a> in the <i>Amazon Web Services General
 *           Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceDeploymentsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceDeploymentsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetContainerServiceDeploymentsRequest
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new GetContainerServiceDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServiceDeploymentsResult
 * //   deployments: [ // ContainerServiceDeploymentList
 * //     { // ContainerServiceDeployment
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: { // ContainerMap
 * //         "<keys>": { // Container
 * //           image: "STRING_VALUE",
 * //           command: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: { // Environment
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: { // PortMap
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: { // ContainerServiceEndpoint
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: { // ContainerServiceHealthCheckConfig
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServiceDeploymentsCommandInput - {@link GetContainerServiceDeploymentsCommandInput}
 * @returns {@link GetContainerServiceDeploymentsCommandOutput}
 * @see {@link GetContainerServiceDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceDeploymentsCommandOutput} for command's `response` shape.
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
export class GetContainerServiceDeploymentsCommand extends $Command<
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
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
  constructor(readonly input: GetContainerServiceDeploymentsCommandInput) {
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
  ): Handler<GetContainerServiceDeploymentsCommandInput, GetContainerServiceDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerServiceDeploymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceDeploymentsCommand";
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
    input: GetContainerServiceDeploymentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetContainerServiceDeploymentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServiceDeploymentsCommandOutput> {
    return de_GetContainerServiceDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
