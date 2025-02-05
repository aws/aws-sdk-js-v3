// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  CreateContainerFleetInput,
  CreateContainerFleetInputFilterSensitiveLog,
  CreateContainerFleetOutput,
  CreateContainerFleetOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateContainerFleetCommand, se_CreateContainerFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerFleetCommand}.
 */
export interface CreateContainerFleetCommandInput extends CreateContainerFleetInput {}
/**
 * @public
 *
 * The output of {@link CreateContainerFleetCommand}.
 */
export interface CreateContainerFleetCommandOutput extends CreateContainerFleetOutput, __MetadataBearer {}

/**
 * <p>Creates a managed fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your containerized game
 *             servers. Use this operation to define how to deploy a container architecture onto each
 *             fleet instance and configure fleet settings. You can create a container fleet in any
 *             Amazon Web Services Regions that Amazon GameLift supports for multi-location fleets. A container fleet can be
 *             deployed to a single location or multiple locations. Container fleets are deployed with
 *             Amazon Linux 2023 as the instance operating system.</p>
 *          <p>Define the fleet's container architecture using container group definitions. Each
 *             fleet can have one of the following container group types:</p>
 *          <ul>
 *             <li>
 *                <p>The game server container group runs your game server build and dependent software. Amazon GameLift
 *                     deploys one or more replicas of this container group to each fleet instance. The
 *                     number of replicas depends on the computing capabilities of the fleet instance
 *                     in use. </p>
 *             </li>
 *             <li>
 *                <p>An optional per-instance container group might be used to run other software that only needs
 *                     to run once per instance, such as background services, logging, or test
 *                     processes. One per-instance container group is deployed to each fleet instance. </p>
 *             </li>
 *          </ul>
 *          <p>Each container group can include the definition for one or more containers. A
 *             container definition specifies a container image that is stored in an Amazon Elastic Container Registry (Amazon ECR)
 *             public or private repository.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>Use this operation to make the following types of requests. Most fleet settings have
 *             default values, so you can create a working fleet with a minimal configuration and
 *             default values, which you can customize later.</p>
 *          <ul>
 *             <li>
 *                <p>Create a fleet with no container groups. You can configure a container fleet and then add
 *                     container group definitions later. In this scenario, no fleet instances are
 *                     deployed, and the fleet can't host game sessions until you add a game server
 *                     container group definition. Provide the following required parameter
 *                     values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>FleetRoleArn</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a fleet with a game server container group. Provide the following required parameter
 *                     values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>FleetRoleArn</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>GameServerContainerGroupDefinitionName</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a fleet with a game server container group and a per-instance container group. Provide
 *                     the following required parameter values:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>FleetRoleArn</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>GameServerContainerGroupDefinitionName</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PerInstanceContainerGroupDefinitionName</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, this operation creates a new container fleet resource, places it in
 *                 <code>PENDING</code> status, and initiates the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>. For fleets with container groups, this workflow
 *             starts a fleet deployment and transitions the status to <code>ACTIVE</code>. Fleets
 *             without a container group are placed in <code>CREATED</code> status.</p>
 *          <p>You can update most of the properties of a fleet, including container group
 *             definitions, and deploy the update across all fleet instances. Use a fleet update to
 *             deploy a new game server version update across the container fleet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateContainerFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateContainerFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GameLiftClient(config);
 * const input = { // CreateContainerFleetInput
 *   FleetRoleArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   GameServerContainerGroupDefinitionName: "STRING_VALUE",
 *   PerInstanceContainerGroupDefinitionName: "STRING_VALUE",
 *   InstanceConnectionPortRange: { // ConnectionPortRange
 *     FromPort: Number("int"), // required
 *     ToPort: Number("int"), // required
 *   },
 *   InstanceInboundPermissions: [ // IpPermissionsList
 *     { // IpPermission
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   GameServerContainerGroupsPerInstance: Number("int"),
 *   InstanceType: "STRING_VALUE",
 *   BillingType: "ON_DEMAND" || "SPOT",
 *   Locations: [ // LocationConfigurationList
 *     { // LocationConfiguration
 *       Location: "STRING_VALUE", // required
 *     },
 *   ],
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateContainerFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerFleetOutput
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
 * @param CreateContainerFleetCommandInput - {@link CreateContainerFleetCommandInput}
 * @returns {@link CreateContainerFleetCommandOutput}
 * @see {@link CreateContainerFleetCommandInput} for command's `input` shape.
 * @see {@link CreateContainerFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
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
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
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
 * @public
 */
export class CreateContainerFleetCommand extends $Command
  .classBuilder<
    CreateContainerFleetCommandInput,
    CreateContainerFleetCommandOutput,
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
  .s("GameLift", "CreateContainerFleet", {})
  .n("GameLiftClient", "CreateContainerFleetCommand")
  .f(CreateContainerFleetInputFilterSensitiveLog, CreateContainerFleetOutputFilterSensitiveLog)
  .ser(se_CreateContainerFleetCommand)
  .de(de_CreateContainerFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerFleetInput;
      output: CreateContainerFleetOutput;
    };
    sdk: {
      input: CreateContainerFleetCommandInput;
      output: CreateContainerFleetCommandOutput;
    };
  };
}
