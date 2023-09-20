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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeploymentStrategy, GetDeploymentStrategyRequest } from "../models/models_0";
import { de_GetDeploymentStrategyCommand, se_GetDeploymentStrategyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentStrategyCommand}.
 */
export interface GetDeploymentStrategyCommandInput extends GetDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentStrategyCommand}.
 */
export interface GetDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a deployment strategy. A deployment strategy defines
 *          important criteria for rolling out your configuration to the designated targets. A
 *          deployment strategy includes the overall duration required, a percentage of targets to
 *          receive the deployment during each interval, an algorithm that defines how percentage
 *          grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetDeploymentStrategyRequest
 *   DeploymentStrategyId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * // { // DeploymentStrategy
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DeploymentDurationInMinutes: Number("int"),
 * //   GrowthType: "LINEAR" || "EXPONENTIAL",
 * //   GrowthFactor: Number("float"),
 * //   FinalBakeTimeInMinutes: Number("int"),
 * //   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 * // };
 *
 * ```
 *
 * @param GetDeploymentStrategyCommandInput - {@link GetDeploymentStrategyCommandInput}
 * @returns {@link GetDeploymentStrategyCommandOutput}
 * @see {@link GetDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To retrieve details of a deployment strategy
 * ```javascript
 * // The following get-deployment-strategy example lists the details of the specified deployment strategy.
 * const input = {
 *   "DeploymentStrategyId": "1225qzk"
 * };
 * const command = new GetDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DeploymentDurationInMinutes": 15,
 *   "FinalBakeTimeInMinutes": 0,
 *   "GrowthFactor": 25,
 *   "GrowthType": "LINEAR",
 *   "Id": "1225qzk",
 *   "Name": "Example-Deployment",
 *   "ReplicateTo": "SSM_DOCUMENT"
 * }
 * *\/
 * // example id: to-retrieve-details-of-a-deployment-strategy-1632266385805
 * ```
 *
 */
export class GetDeploymentStrategyCommand extends $Command<
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: GetDeploymentStrategyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentStrategyCommandInput, GetDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeploymentStrategyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetDeploymentStrategyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "GetDeploymentStrategy",
      },
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
  private serialize(input: GetDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentStrategyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentStrategyCommandOutput> {
    return de_GetDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
