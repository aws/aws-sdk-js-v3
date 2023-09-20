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
import { Deployment, GetDeploymentRequest } from "../models/models_0";
import { de_GetDeploymentCommand, se_GetDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a configuration deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetDeploymentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EnvironmentId: "STRING_VALUE", // required
 *   DeploymentNumber: Number("int"), // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // Deployment
 * //   ApplicationId: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   DeploymentStrategyId: "STRING_VALUE",
 * //   ConfigurationProfileId: "STRING_VALUE",
 * //   DeploymentNumber: Number("int"),
 * //   ConfigurationName: "STRING_VALUE",
 * //   ConfigurationLocationUri: "STRING_VALUE",
 * //   ConfigurationVersion: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DeploymentDurationInMinutes: Number("int"),
 * //   GrowthType: "LINEAR" || "EXPONENTIAL",
 * //   GrowthFactor: Number("float"),
 * //   FinalBakeTimeInMinutes: Number("int"),
 * //   State: "BAKING" || "VALIDATING" || "DEPLOYING" || "COMPLETE" || "ROLLING_BACK" || "ROLLED_BACK",
 * //   EventLog: [ // DeploymentEvents
 * //     { // DeploymentEvent
 * //       EventType: "PERCENTAGE_UPDATED" || "ROLLBACK_STARTED" || "ROLLBACK_COMPLETED" || "BAKE_TIME_STARTED" || "DEPLOYMENT_STARTED" || "DEPLOYMENT_COMPLETED",
 * //       TriggeredBy: "USER" || "APPCONFIG" || "CLOUDWATCH_ALARM" || "INTERNAL_ERROR",
 * //       Description: "STRING_VALUE",
 * //       ActionInvocations: [ // ActionInvocations
 * //         { // ActionInvocation
 * //           ExtensionIdentifier: "STRING_VALUE",
 * //           ActionName: "STRING_VALUE",
 * //           Uri: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorCode: "STRING_VALUE",
 * //           InvocationId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OccurredAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   PercentageComplete: Number("float"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   CompletedAt: new Date("TIMESTAMP"),
 * //   AppliedExtensions: [ // AppliedExtensions
 * //     { // AppliedExtension
 * //       ExtensionId: "STRING_VALUE",
 * //       ExtensionAssociationId: "STRING_VALUE",
 * //       VersionNumber: Number("int"),
 * //       Parameters: { // ParameterValueMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   KmsKeyArn: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * //   VersionLabel: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
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
 * @example To retrieve deployment details
 * ```javascript
 * // The following get-deployment example lists details of the deployment to the application in the specified environment and deployment.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "DeploymentNumber": 1,
 *   "EnvironmentId": "54j1r29"
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "CompletedAt": "2021-09-17T21:59:03.888000+00:00",
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
 *       "Description": "Deployment completed",
 *       "EventType": "DEPLOYMENT_COMPLETED",
 *       "OccurredAt": "2021-09-17T21:59:03.888000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
 *     {
 *       "Description": "Deployment bake time started",
 *       "EventType": "BAKE_TIME_STARTED",
 *       "OccurredAt": "2021-09-17T21:58:57.722000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
 *     {
 *       "Description": "Configuration available to 100.00% of clients",
 *       "EventType": "PERCENTAGE_UPDATED",
 *       "OccurredAt": "2021-09-17T21:55:56.816000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
 *     {
 *       "Description": "Configuration available to 75.00% of clients",
 *       "EventType": "PERCENTAGE_UPDATED",
 *       "OccurredAt": "2021-09-17T21:52:56.567000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
 *     {
 *       "Description": "Configuration available to 50.00% of clients",
 *       "EventType": "PERCENTAGE_UPDATED",
 *       "OccurredAt": "2021-09-17T21:49:55.737000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
 *     {
 *       "Description": "Configuration available to 25.00% of clients",
 *       "EventType": "PERCENTAGE_UPDATED",
 *       "OccurredAt": "2021-09-17T21:46:55.187000+00:00",
 *       "TriggeredBy": "APPCONFIG"
 *     },
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
 *   "PercentageComplete": 100,
 *   "StartedAt": "2021-09-17T21:43:54.205000+00:00",
 *   "State": "COMPLETE"
 * }
 * *\/
 * // example id: to-retrieve-deployment-details-1633976766883
 * ```
 *
 */
export class GetDeploymentCommand extends $Command<
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
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
  constructor(readonly input: GetDeploymentCommandInput) {
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
  ): Handler<GetDeploymentCommandInput, GetDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDeploymentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "GetDeployment",
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
  private serialize(input: GetDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentCommandOutput> {
    return de_GetDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
