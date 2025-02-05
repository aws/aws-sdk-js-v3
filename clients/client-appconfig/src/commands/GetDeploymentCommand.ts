// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Deployment, GetDeploymentRequest } from "../models/models_0";
import { de_GetDeploymentCommand, se_GetDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about a configuration deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * //   State: "BAKING" || "VALIDATING" || "DEPLOYING" || "COMPLETE" || "ROLLING_BACK" || "ROLLED_BACK" || "REVERTED",
 * //   EventLog: [ // DeploymentEvents
 * //     { // DeploymentEvent
 * //       EventType: "PERCENTAGE_UPDATED" || "ROLLBACK_STARTED" || "ROLLBACK_COMPLETED" || "BAKE_TIME_STARTED" || "DEPLOYMENT_STARTED" || "DEPLOYMENT_COMPLETED" || "REVERT_COMPLETED",
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
 * @public
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
export class GetDeploymentCommand extends $Command
  .classBuilder<
    GetDeploymentCommandInput,
    GetDeploymentCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "GetDeployment", {})
  .n("AppConfigClient", "GetDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_GetDeploymentCommand)
  .de(de_GetDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentRequest;
      output: Deployment;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}
