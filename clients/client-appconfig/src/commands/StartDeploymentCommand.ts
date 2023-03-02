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
  Deployment,
  DeploymentFilterSensitiveLog,
  StartDeploymentRequest,
  StartDeploymentRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartDeploymentCommand,
  serializeAws_restJson1StartDeploymentCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link StartDeploymentCommand}.
 */
export interface StartDeploymentCommandInput extends StartDeploymentRequest {}
/**
 * The output of {@link StartDeploymentCommand}.
 */
export interface StartDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Starts a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StartDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StartDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @example To start a configuration deployment
 * ```javascript
 * // The following start-deployment example starts a deployment to the application using the specified environment, deployment strategy, and configuration profile.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ConfigurationVersion": "1",
 *   "DeploymentStrategyId": "1225qzk",
 *   "Description": "",
 *   "EnvironmentId": "54j1r29",
 *   "Tags": {}
 * };
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationLocationUri": "ssm-parameter://Example-Parameter",
 *   "ConfigurationName": "Example-Configuration-Profile",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ConfigurationVersion": "1",
 *   "DeploymentDurationInMinutes": 15,
 *   "DeploymentNumber": 1,
 *   "DeploymentStrategyId": "1225qzk",
 *   "EnvironmentId": "54j1r29",
 *   "EventLog": [
 *     {
 *       "Description": "Deployment started",
 *       "EventType": "DEPLOYMENT_STARTED",
 *       "OccurredAt": "2021-09-17T21:43:54.205000+00:00",
 *       "TriggeredBy": "USER"
 *     }
 *   ],
 *   "FinalBakeTimeInMinutes": 0,
 *   "GrowthFactor": 25,
 *   "GrowthType": "LINEAR",
 *   "PercentageComplete": 1,
 *   "StartedAt": "2021-09-17T21:43:54.205000+00:00",
 *   "State": "DEPLOYING"
 * }
 * *\/
 * ```
 *
 */
export class StartDeploymentCommand extends $Command<
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
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

  constructor(readonly input: StartDeploymentCommandInput) {
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
  ): Handler<StartDeploymentCommandInput, StartDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "StartDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeploymentFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeploymentCommandOutput> {
    return deserializeAws_restJson1StartDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
