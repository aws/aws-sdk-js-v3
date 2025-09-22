// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListContainerFleetsInput, ListContainerFleetsOutput } from "../models/models_1";
import { ListContainerFleets } from "../schemas/schemas_2_Server";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContainerFleetsCommand}.
 */
export interface ListContainerFleetsCommandInput extends ListContainerFleetsInput {}
/**
 * @public
 *
 * The output of {@link ListContainerFleetsCommand}.
 */
export interface ListContainerFleetsCommandOutput extends ListContainerFleetsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a collection of container fleet resources in an Amazon Web Services Region. For fleets
 *             that have multiple locations, this operation retrieves fleets based on their home Region
 *             only.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Get a list of all fleets. Call this operation without specifying a container
 *                     group definition. </p>
 *             </li>
 *             <li>
 *                <p>Get a list of fleets filtered by container group definition. Provide the
 *                     container group definition name or ARN value.</p>
 *             </li>
 *             <li>
 *                <p>To get a list of all Amazon GameLift Servers Realtime fleets with a specific configuration script,
 *                     provide the script ID. </p>
 *             </li>
 *          </ul>
 *          <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, this operation returns a collection of container fleets that match the request
 *             parameters. A NextToken value is also returned if there are more result pages to
 *             retrieve.</p>
 *          <note>
 *             <p>Fleet IDs are returned in no particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListContainerFleetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListContainerFleetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListContainerFleetsInput
 *   ContainerGroupDefinitionName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContainerFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerFleetsOutput
 * //   ContainerFleets: [ // ContainerFleetList
 * //     { // ContainerFleet
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       FleetRoleArn: "STRING_VALUE",
 * //       GameServerContainerGroupDefinitionName: "STRING_VALUE",
 * //       GameServerContainerGroupDefinitionArn: "STRING_VALUE",
 * //       PerInstanceContainerGroupDefinitionName: "STRING_VALUE",
 * //       PerInstanceContainerGroupDefinitionArn: "STRING_VALUE",
 * //       InstanceConnectionPortRange: { // ConnectionPortRange
 * //         FromPort: Number("int"), // required
 * //         ToPort: Number("int"), // required
 * //       },
 * //       InstanceInboundPermissions: [ // IpPermissionsList
 * //         { // IpPermission
 * //           FromPort: Number("int"), // required
 * //           ToPort: Number("int"), // required
 * //           IpRange: "STRING_VALUE", // required
 * //           Protocol: "TCP" || "UDP", // required
 * //         },
 * //       ],
 * //       GameServerContainerGroupsPerInstance: Number("int"),
 * //       MaximumGameServerContainerGroupsPerInstance: Number("int"),
 * //       InstanceType: "STRING_VALUE",
 * //       BillingType: "ON_DEMAND" || "SPOT",
 * //       Description: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       MetricGroups: [ // MetricGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //       NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 * //       GameSessionCreationLimitPolicy: { // GameSessionCreationLimitPolicy
 * //         NewGameSessionsPerCreator: Number("int"),
 * //         PolicyPeriodInMinutes: Number("int"),
 * //       },
 * //       Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //       DeploymentDetails: { // DeploymentDetails
 * //         LatestDeploymentId: "STRING_VALUE",
 * //       },
 * //       LogConfiguration: { // LogConfiguration
 * //         LogDestination: "NONE" || "CLOUDWATCH" || "S3",
 * //         S3BucketName: "STRING_VALUE",
 * //         LogGroupArn: "STRING_VALUE",
 * //       },
 * //       LocationAttributes: [ // ContainerFleetLocationAttributesList
 * //         { // ContainerFleetLocationAttributes
 * //           Location: "STRING_VALUE",
 * //           Status: "PENDING" || "CREATING" || "CREATED" || "ACTIVATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainerFleetsCommandInput - {@link ListContainerFleetsCommandInput}
 * @returns {@link ListContainerFleetsCommandOutput}
 * @see {@link ListContainerFleetsCommandInput} for command's `input` shape.
 * @see {@link ListContainerFleetsCommandOutput} for command's `response` shape.
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
export class ListContainerFleetsCommand extends $Command
  .classBuilder<
    ListContainerFleetsCommandInput,
    ListContainerFleetsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListContainerFleets", {})
  .n("GameLiftClient", "ListContainerFleetsCommand")
  .sc(ListContainerFleets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerFleetsInput;
      output: ListContainerFleetsOutput;
    };
    sdk: {
      input: ListContainerFleetsCommandInput;
      output: ListContainerFleetsCommandOutput;
    };
  };
}
