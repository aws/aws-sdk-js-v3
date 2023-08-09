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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { CreateDeploymentStrategyRequest, DeploymentStrategy } from "../models/models_0";
import { de_CreateDeploymentStrategyCommand, se_CreateDeploymentStrategyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandInput extends CreateDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * @public
 * <p>Creates a deployment strategy that defines important criteria for rolling out your
 *          configuration to the designated targets. A deployment strategy includes the overall
 *          duration required, a percentage of targets to receive the deployment during each interval,
 *          an algorithm that defines how percentage grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // CreateDeploymentStrategyRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DeploymentDurationInMinutes: Number("int"), // required
 *   FinalBakeTimeInMinutes: Number("int"),
 *   GrowthFactor: Number("float"), // required
 *   GrowthType: "LINEAR" || "EXPONENTIAL",
 *   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
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
 * @param CreateDeploymentStrategyCommandInput - {@link CreateDeploymentStrategyCommandInput}
 * @returns {@link CreateDeploymentStrategyCommandOutput}
 * @see {@link CreateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To create a deployment strategy
 * ```javascript
 * // The following create-deployment-strategy example creates a deployment strategy called Example-Deployment that takes 15 minutes and deploys the configuration to 25% of the application at a time. The strategy is also copied to an SSM Document.
 * const input = {
 *   "DeploymentDurationInMinutes": 15,
 *   "GrowthFactor": 25,
 *   "Name": "Example-Deployment",
 *   "ReplicateTo": "SSM_DOCUMENT"
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
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
 * // example id: to-create-a-deployment-strategy-1632264783812
 * ```
 *
 */
export class CreateDeploymentStrategyCommand extends $Command<
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
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
  constructor(readonly input: CreateDeploymentStrategyCommandInput) {
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
  ): Handler<CreateDeploymentStrategyCommandInput, CreateDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeploymentStrategyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateDeploymentStrategyCommand";
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
  private serialize(input: CreateDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeploymentStrategyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentStrategyCommandOutput> {
    return de_CreateDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
