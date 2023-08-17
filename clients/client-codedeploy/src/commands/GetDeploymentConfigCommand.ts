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
import { GetDeploymentConfigInput, GetDeploymentConfigOutput } from "../models/models_0";
import { de_GetDeploymentConfigCommand, se_GetDeploymentConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentConfigCommand}.
 */
export interface GetDeploymentConfigCommandInput extends GetDeploymentConfigInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentConfigCommand}.
 */
export interface GetDeploymentConfigCommandOutput extends GetDeploymentConfigOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a deployment configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentConfigInput
 *   deploymentConfigName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentConfigOutput
 * //   deploymentConfigInfo: { // DeploymentConfigInfo
 * //     deploymentConfigId: "STRING_VALUE",
 * //     deploymentConfigName: "STRING_VALUE",
 * //     minimumHealthyHosts: { // MinimumHealthyHosts
 * //       type: "HOST_COUNT" || "FLEET_PERCENT",
 * //       value: Number("int"),
 * //     },
 * //     createTime: new Date("TIMESTAMP"),
 * //     computePlatform: "Server" || "Lambda" || "ECS",
 * //     trafficRoutingConfig: { // TrafficRoutingConfig
 * //       type: "TimeBasedCanary" || "TimeBasedLinear" || "AllAtOnce",
 * //       timeBasedCanary: { // TimeBasedCanary
 * //         canaryPercentage: Number("int"),
 * //         canaryInterval: Number("int"),
 * //       },
 * //       timeBasedLinear: { // TimeBasedLinear
 * //         linearPercentage: Number("int"),
 * //         linearInterval: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentConfigCommandInput - {@link GetDeploymentConfigCommandInput}
 * @returns {@link GetDeploymentConfigCommandOutput}
 * @see {@link GetDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *  <p>The deployment configuration does not exist with the IAM user or
 *                 Amazon Web Services account.</p>
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
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class GetDeploymentConfigCommand extends $Command<
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput,
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
  constructor(readonly input: GetDeploymentConfigCommandInput) {
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
  ): Handler<GetDeploymentConfigCommandInput, GetDeploymentConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeploymentConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetDeploymentConfigCommand";
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
  private serialize(input: GetDeploymentConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentConfigCommandOutput> {
    return de_GetDeploymentConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
