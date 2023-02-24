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
  DeploymentStrategy,
  DeploymentStrategyFilterSensitiveLog,
  GetDeploymentStrategyRequest,
  GetDeploymentStrategyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDeploymentStrategyCommand,
  serializeAws_restJson1GetDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";

export interface GetDeploymentStrategyCommandInput extends GetDeploymentStrategyRequest {}
export interface GetDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
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
 * const command = new GetDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
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
      inputFilterSensitiveLog: GetDeploymentStrategyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategyFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeploymentStrategyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1GetDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
