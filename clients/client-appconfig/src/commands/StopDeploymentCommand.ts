// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Deployment, StopDeploymentRequest } from "../models/models_0";
import { StopDeployment } from "../schemas/schemas_2_Environment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandInput extends StopDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StopDeploymentCommand}.
 */
export interface StopDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Stops a deployment. This API action works only on deployments that have a status of
 *             <code>DEPLOYING</code>, unless an <code>AllowRevert</code> parameter is supplied. If the
 *             <code>AllowRevert</code> parameter is supplied, the status of an in-progress deployment
 *          will be <code>ROLLED_BACK</code>. The status of a completed deployment will be
 *             <code>REVERTED</code>. AppConfig only allows a revert within 72 hours of
 *          deployment completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StopDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StopDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // StopDeploymentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EnvironmentId: "STRING_VALUE", // required
 *   DeploymentNumber: Number("int"), // required
 *   AllowRevert: true || false,
 * };
 * const command = new StopDeploymentCommand(input);
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
 * @param StopDeploymentCommandInput - {@link StopDeploymentCommandInput}
 * @returns {@link StopDeploymentCommandOutput}
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
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
 *
 * @example To stop configuration deployment
 * ```javascript
 * // The following stop-deployment example stops the deployment of an application configuration to the specified environment.
 * const input = {
 *   ApplicationId: "339ohji",
 *   DeploymentNumber: 2,
 *   EnvironmentId: "54j1r29"
 * };
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DeploymentDurationInMinutes: 15,
 *   DeploymentNumber: 2,
 *   FinalBakeTimeInMinutes: 0,
 *   GrowthFactor: 25.0,
 *   PercentageComplete: 1.0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopDeploymentCommand extends $Command
  .classBuilder<
    StopDeploymentCommandInput,
    StopDeploymentCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "StopDeployment", {})
  .n("AppConfigClient", "StopDeploymentCommand")
  .sc(StopDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDeploymentRequest;
      output: Deployment;
    };
    sdk: {
      input: StopDeploymentCommandInput;
      output: StopDeploymentCommandOutput;
    };
  };
}
