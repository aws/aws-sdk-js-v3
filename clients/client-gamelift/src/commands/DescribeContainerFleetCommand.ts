// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeContainerFleetInput,
  DescribeContainerFleetOutput,
  DescribeContainerFleetOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeContainerFleetCommand, se_DescribeContainerFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *             <b>This API works with the following fleet types:</b> Container</p>
 *          <p>Retrieves the properties for a container fleet. When requesting attributes for
 *             multiple fleets, use the pagination parameters to retrieve results as a set of
 *             sequential pages.  </p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get container fleet properties for a single fleet. Provide either the fleet ID or ARN value. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, a <code>ContainerFleet</code> object is returned. This object includes
 *             the fleet properties, including information about the most recent deployment.</p>
 *          <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If
 *                 a request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *          </note>
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
 * @param DescribeContainerFleetCommandInput - {@link DescribeContainerFleetCommandInput}
 * @returns {@link DescribeContainerFleetCommandOutput}
 * @see {@link DescribeContainerFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
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
export class DescribeContainerFleetCommand extends $Command
  .classBuilder<
    DescribeContainerFleetCommandInput,
    DescribeContainerFleetCommandOutput,
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
  .s("GameLift", "DescribeContainerFleet", {})
  .n("GameLiftClient", "DescribeContainerFleetCommand")
  .f(void 0, DescribeContainerFleetOutputFilterSensitiveLog)
  .ser(se_DescribeContainerFleetCommand)
  .de(de_DescribeContainerFleetCommand)
  .build() {
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
