// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeContainerFleetInput, DescribeContainerFleetOutput } from "../models/models_0";
import { DescribeContainerFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContainerFleetCommand}.
 */
export interface DescribeContainerFleetCommandInput extends DescribeContainerFleetInput {}
/**
 * @public
 *
 * The output of {@link DescribeContainerFleetCommand}.
 */
export interface DescribeContainerFleetCommandOutput extends DescribeContainerFleetOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** Container
 *
 * Retrieves the properties for a container fleet. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * **Request options**
 *
 * - Get container fleet properties for a single fleet. Provide either the fleet ID or ARN value.
 *
 * **Results**
 *
 * If successful, a `ContainerFleet` object is returned. This object includes the fleet properties, including information about the most recent deployment.
 *
 * > **Note:** Some API operations limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeContainerFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeContainerFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeContainerFleetInput
 *   FleetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContainerFleetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerFleetOutput
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
 * //     Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING" || "EXPIRED",
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
 * //         Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING" || "EXPIRED",
 * //         PlayerGatewayStatus: "DISABLED" || "ENABLED",
 * //       },
 * //     ],
 * //     PlayerGatewayMode: "DISABLED" || "ENABLED" || "REQUIRED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContainerFleetCommandInput - {@link DescribeContainerFleetCommandInput}
 * @returns {@link DescribeContainerFleetCommandOutput}
 * @see {@link DescribeContainerFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DescribeContainerFleetCommand extends command<DescribeContainerFleetCommandInput, DescribeContainerFleetCommandOutput>(
  _ep0,
  _mw0,
  "DescribeContainerFleet",
  DescribeContainerFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContainerFleetInput;
      output: DescribeContainerFleetOutput;
    };
    sdk: {
      input: DescribeContainerFleetCommandInput;
      output: DescribeContainerFleetCommandOutput;
    };
  };
}
