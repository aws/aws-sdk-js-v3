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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  CreateDeploymentStrategyRequest,
  CreateDeploymentStrategyRequestFilterSensitiveLog,
  DeploymentStrategy,
  DeploymentStrategyFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeploymentStrategyCommand,
  serializeAws_restJson1CreateDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandInput extends CreateDeploymentStrategyRequest {}
/**
 * The output of {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
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
 * const command = new CreateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      inputFilterSensitiveLog: CreateDeploymentStrategyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategyFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeploymentStrategyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1CreateDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
