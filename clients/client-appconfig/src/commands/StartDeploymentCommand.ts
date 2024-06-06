// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Deployment, StartDeploymentRequest } from "../models/models_0";
import { de_StartDeploymentCommand, se_StartDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDeploymentCommand}.
 */
export interface StartDeploymentCommandInput extends StartDeploymentRequest {}
/**
 * @public
 *
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
 * const input = { // StartDeploymentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EnvironmentId: "STRING_VALUE", // required
 *   DeploymentStrategyId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   ConfigurationVersion: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KmsKeyIdentifier: "STRING_VALUE",
 *   DynamicExtensionParameters: { // DynamicParameterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartDeploymentCommand(input);
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
 * @param StartDeploymentCommandInput - {@link StartDeploymentCommandInput}
 * @returns {@link StartDeploymentCommandOutput}
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 * @public
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
 * // example id: to-start-a-configuration-deployment-1632328956790
 * ```
 *
 */
export class StartDeploymentCommand extends $Command
  .classBuilder<
    StartDeploymentCommandInput,
    StartDeploymentCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "StartDeployment", {})
  .n("AppConfigClient", "StartDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_StartDeploymentCommand)
  .de(de_StartDeploymentCommand)
  .build() {}
