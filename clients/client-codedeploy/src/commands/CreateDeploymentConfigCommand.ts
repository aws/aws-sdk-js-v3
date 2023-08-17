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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/models_0";
import { de_CreateDeploymentConfigCommand, se_CreateDeploymentConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentConfigCommand}.
 */
export interface CreateDeploymentConfigCommandInput extends CreateDeploymentConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentConfigCommand}.
 */
export interface CreateDeploymentConfigCommandOutput extends CreateDeploymentConfigOutput, __MetadataBearer {}

/**
 * @public
 * <p> Creates a deployment configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // CreateDeploymentConfigInput
 *   deploymentConfigName: "STRING_VALUE", // required
 *   minimumHealthyHosts: { // MinimumHealthyHosts
 *     type: "HOST_COUNT" || "FLEET_PERCENT",
 *     value: Number("int"),
 *   },
 *   trafficRoutingConfig: { // TrafficRoutingConfig
 *     type: "TimeBasedCanary" || "TimeBasedLinear" || "AllAtOnce",
 *     timeBasedCanary: { // TimeBasedCanary
 *       canaryPercentage: Number("int"),
 *       canaryInterval: Number("int"),
 *     },
 *     timeBasedLinear: { // TimeBasedLinear
 *       linearPercentage: Number("int"),
 *       linearInterval: Number("int"),
 *     },
 *   },
 *   computePlatform: "Server" || "Lambda" || "ECS",
 * };
 * const command = new CreateDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentConfigOutput
 * //   deploymentConfigId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentConfigCommandInput - {@link CreateDeploymentConfigCommandInput}
 * @returns {@link CreateDeploymentConfigCommandOutput}
 * @see {@link CreateDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentConfigAlreadyExistsException} (client fault)
 *  <p>A deployment configuration with the specified name with the IAM user or
 *                 Amazon Web Services account already exists.</p>
 *
 * @throws {@link DeploymentConfigLimitExceededException} (client fault)
 *  <p>The deployment configurations limit was exceeded.</p>
 *
 * @throws {@link DeploymentConfigNameRequiredException} (client fault)
 *  <p>The deployment configuration name was not specified.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidMinimumHealthyHostValueException} (client fault)
 *  <p>The minimum healthy instance value was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *  <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class CreateDeploymentConfigCommand extends $Command<
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: CreateDeploymentConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeploymentConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "CreateDeploymentConfigCommand";
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
  private serialize(input: CreateDeploymentConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeploymentConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentConfigCommandOutput> {
    return de_CreateDeploymentConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
