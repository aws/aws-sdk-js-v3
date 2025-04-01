// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  UpdateContainerFleetInput,
  UpdateContainerFleetInputFilterSensitiveLog,
  UpdateContainerFleetOutput,
  UpdateContainerFleetOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateContainerFleetCommand, se_UpdateContainerFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerFleetCommand}.
 */
export interface UpdateContainerFleetCommandInput extends UpdateContainerFleetInput {}
/**
 * @public
 *
 * The output of {@link UpdateContainerFleetCommand}.
 */
export interface UpdateContainerFleetCommandOutput extends UpdateContainerFleetOutput, __MetadataBearer {}

/**
 * <p>Updates the properties of a managed container fleet. Depending on the properties being
 *             updated, this operation might initiate a fleet deployment. You can track deployments for
 *             a fleet using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetDeployment.html">https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetDeployment.html</a>.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>As with CreateContainerFleet, many fleet properties use common defaults or are
 *             calculated based on the fleet's container group definitions. </p>
 *          <ul>
 *             <li>
 *                <p>Update fleet properties that result in a fleet deployment. Include only those
 *                     properties that you want to change. Specify deployment configuration
 *                     settings.</p>
 *             </li>
 *             <li>
 *                <p>Update fleet properties that don't result in a fleet deployment. Include only
 *                     those properties that you want to change.</p>
 *             </li>
 *          </ul>
 *          <p>Changes to the following properties initiate a fleet deployment: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>GameServerContainerGroupDefinition</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PerInstanceContainerGroupDefinition</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GameServerContainerGroupsPerInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InstanceInboundPermissions</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InstanceConnectionPortRange</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LogConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, this operation updates the container fleet resource, and might initiate
 *             a new deployment of fleet resources using the deployment configuration provided. A
 *             deployment replaces existing fleet instances with new instances that are deployed with
 *             the updated fleet properties. The fleet is placed in <code>UPDATING</code> status until
 *             the deployment is complete, then return to <code>ACTIVE</code>. </p>
 *          <p>You can have only one update deployment active at a time for a fleet. If a second
 *             update request initiates a deployment while another deployment is in progress, the first
 *             deployment is cancelled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateContainerFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateContainerFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // UpdateContainerFleetInput
 *   FleetId: "STRING_VALUE", // required
 *   GameServerContainerGroupDefinitionName: "STRING_VALUE",
 *   PerInstanceContainerGroupDefinitionName: "STRING_VALUE",
 *   GameServerContainerGroupsPerInstance: Number("int"),
 *   InstanceConnectionPortRange: { // ConnectionPortRange
 *     FromPort: Number("int"), // required
 *     ToPort: Number("int"), // required
 *   },
 *   InstanceInboundPermissionAuthorizations: [ // IpPermissionsList
 *     { // IpPermission
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   InstanceInboundPermissionRevocations: [
 *     {
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   DeploymentConfiguration: { // DeploymentConfiguration
 *     ProtectionStrategy: "WITH_PROTECTION" || "IGNORE_PROTECTION",
 *     MinimumHealthyPercentage: Number("int"),
 *     ImpairmentStrategy: "MAINTAIN" || "ROLLBACK",
 *   },
 *   Description: "STRING_VALUE",
 *   MetricGroups: [ // MetricGroupList
 *     "STRING_VALUE",
 *   ],
 *   NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 *   GameSessionCreationLimitPolicy: { // GameSessionCreationLimitPolicy
 *     NewGameSessionsPerCreator: Number("int"),
 *     PolicyPeriodInMinutes: Number("int"),
 *   },
 *   LogConfiguration: { // LogConfiguration
 *     LogDestination: "NONE" || "CLOUDWATCH" || "S3",
 *     S3BucketName: "STRING_VALUE",
 *     LogGroupArn: "STRING_VALUE",
 *   },
 *   RemoveAttributes: [ // ContainerFleetRemoveAttributeList
 *     "PER_INSTANCE_CONTAINER_GROUP_DEFINITION",
 *   ],
 * };
 * const command = new UpdateContainerFleetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerFleetOutput
 * //   ContainerFleet: { // ContainerFleet
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     FleetRoleArn: "STRING_VALUE",
 * //     GameServerContainerGroupDefinitionName: "STRING_VALUE",
 * //     GameServerContainerGroupDefinitionArn: "STRING_VALUE",
 * //     PerInstanceContainerGroupDefinitionName: "STRING_VALUE",
 * //     PerInstanceContainerGroupDefinitionArn: "STRING_VALUE",
 * //     InstanceConnectionPortRange: { // ConnectionPortRange
 * //       FromPort: Number("int"), // required
 * //       ToPort: Number("int"), // required
 * //     },
 * //     InstanceInboundPermissions: [ // IpPermissionsList
 * //       { // IpPermission
 * //         FromPort: Number("int"), // required
 * //         ToPort: Number("int"), // required
 * //         IpRange: "STRING_VALUE", // required
 * //         Protocol: "TCP" || "UDP", // required
 * //       },
 * //     ],
 * //     GameServerContainerGroupsPerInstance: Number("int"),
 * //     MaximumGameServerContainerGroupsPerInstance: Number("int"),
 * //     InstanceType: "STRING_VALUE",
 * //     BillingType: "ON_DEMAND" || "SPOT",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     MetricGroups: [ // MetricGroupList
 * //       "STRING_VALUE",
 * //     ],
 * //     NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 * //     GameSessionCreationLimitPolicy: { // GameSessionCreationLimitPolicy
 * //       NewGameSessionsPerCreator: Number("int"),
 * //       PolicyPeriodInMinutes: Number("int"),
 * //     },
 * //     Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //     DeploymentDetails: { // DeploymentDetails
 * //       LatestDeploymentId: "STRING_VALUE",
 * //     },
 * //     LogConfiguration: { // LogConfiguration
 * //       LogDestination: "NONE" || "CLOUDWATCH" || "S3",
 * //       S3BucketName: "STRING_VALUE",
 * //       LogGroupArn: "STRING_VALUE",
 * //     },
 * //     LocationAttributes: [ // ContainerFleetLocationAttributesList
 * //       { // ContainerFleetLocationAttributes
 * //         Location: "STRING_VALUE",
 * //         Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateContainerFleetCommandInput - {@link UpdateContainerFleetCommandInput}
 * @returns {@link UpdateContainerFleetCommandOutput}
 * @see {@link UpdateContainerFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link NotReadyException} (client fault)
 *  <p> The operation failed because Amazon GameLift has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class UpdateContainerFleetCommand extends $Command
  .classBuilder<
    UpdateContainerFleetCommandInput,
    UpdateContainerFleetCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "UpdateContainerFleet", {})
  .n("GameLiftClient", "UpdateContainerFleetCommand")
  .f(UpdateContainerFleetInputFilterSensitiveLog, UpdateContainerFleetOutputFilterSensitiveLog)
  .ser(se_UpdateContainerFleetCommand)
  .de(de_UpdateContainerFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContainerFleetInput;
      output: UpdateContainerFleetOutput;
    };
    sdk: {
      input: UpdateContainerFleetCommandInput;
      output: UpdateContainerFleetCommandOutput;
    };
  };
}
