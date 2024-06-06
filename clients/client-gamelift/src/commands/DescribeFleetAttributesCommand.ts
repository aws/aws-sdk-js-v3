// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeFleetAttributesInput,
  DescribeFleetAttributesOutput,
  DescribeFleetAttributesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeFleetAttributesCommand, se_DescribeFleetAttributesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAttributesCommand}.
 */
export interface DescribeFleetAttributesCommandInput extends DescribeFleetAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAttributesCommand}.
 */
export interface DescribeFleetAttributesCommandOutput extends DescribeFleetAttributesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.</b>
 *          </p>
 *          <p>Retrieves core fleet-wide properties for fleets in an Amazon Web Services Region. Properties include the computing
 *             hardware and deployment configuration for instances in the fleet.</p>
 *          <p>You can use this operation in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To get attributes for specific fleets, provide a list of fleet IDs or fleet ARNs.</p>
 *             </li>
 *             <li>
 *                <p>To get attributes for all fleets, do not provide a fleet identifier.</p>
 *             </li>
 *          </ul>
 *          <p>When requesting attributes for multiple fleets, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet
 *             requested, unless the fleet identifier is not found. </p>
 *          <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If
 *                 a request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *          </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetAttributesInput
 *   FleetIds: [ // FleetIdOrArnList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAttributesOutput
 * //   FleetAttributes: [ // FleetAttributesList
 * //     { // FleetAttributes
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       FleetType: "ON_DEMAND" || "SPOT",
 * //       InstanceType: "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge",
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationTime: new Date("TIMESTAMP"),
 * //       Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //       BuildId: "STRING_VALUE",
 * //       BuildArn: "STRING_VALUE",
 * //       ScriptId: "STRING_VALUE",
 * //       ScriptArn: "STRING_VALUE",
 * //       ServerLaunchPath: "STRING_VALUE",
 * //       ServerLaunchParameters: "STRING_VALUE",
 * //       LogPaths: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 * //       OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 * //       ResourceCreationLimitPolicy: { // ResourceCreationLimitPolicy
 * //         NewGameSessionsPerCreator: Number("int"),
 * //         PolicyPeriodInMinutes: Number("int"),
 * //       },
 * //       MetricGroups: [ // MetricGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //       StoppedActions: [ // FleetActionList
 * //         "AUTO_SCALING",
 * //       ],
 * //       InstanceRoleArn: "STRING_VALUE",
 * //       CertificateConfiguration: { // CertificateConfiguration
 * //         CertificateType: "DISABLED" || "GENERATED", // required
 * //       },
 * //       ComputeType: "EC2" || "ANYWHERE" || "CONTAINER",
 * //       AnywhereConfiguration: { // AnywhereConfiguration
 * //         Cost: "STRING_VALUE", // required
 * //       },
 * //       InstanceRoleCredentialsProvider: "SHARED_CREDENTIAL_FILE",
 * //       ContainerGroupsAttributes: { // ContainerGroupsAttributes
 * //         ContainerGroupDefinitionProperties: [ // ContainerGroupDefinitionPropertiesList
 * //           { // ContainerGroupDefinitionProperty
 * //             SchedulingStrategy: "REPLICA" || "DAEMON",
 * //             ContainerGroupDefinitionName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ConnectionPortRange: { // ConnectionPortRange
 * //           FromPort: Number("int"), // required
 * //           ToPort: Number("int"), // required
 * //         },
 * //         ContainerGroupsPerInstance: { // ContainerGroupsPerInstance
 * //           DesiredReplicaContainerGroupsPerInstance: Number("int"),
 * //           MaxReplicaContainerGroupsPerInstance: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAttributesCommandInput - {@link DescribeFleetAttributesCommandInput}
 * @returns {@link DescribeFleetAttributesCommandOutput}
 * @see {@link DescribeFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAttributesCommandOutput} for command's `response` shape.
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class DescribeFleetAttributesCommand extends $Command
  .classBuilder<
    DescribeFleetAttributesCommandInput,
    DescribeFleetAttributesCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeFleetAttributes", {})
  .n("GameLiftClient", "DescribeFleetAttributesCommand")
  .f(void 0, DescribeFleetAttributesOutputFilterSensitiveLog)
  .ser(se_DescribeFleetAttributesCommand)
  .de(de_DescribeFleetAttributesCommand)
  .build() {}
