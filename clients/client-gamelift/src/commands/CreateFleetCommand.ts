// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetInput, CreateFleetInputFilterSensitiveLog, CreateFleetOutput } from "../models/models_0";
import { de_CreateFleetCommand, se_CreateFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandInput extends CreateFleetInput {}
/**
 * @public
 *
 * The output of {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandOutput extends CreateFleetOutput, __MetadataBearer {}

/**
 * <p>Creates a fleet of compute resources to host your game servers. Use this operation to
 *             set up the following types of fleets based on compute type: </p>
 *          <p>
 *             <b>Managed EC2 fleet</b>
 *          </p>
 *          <p>An EC2 fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances. Your game server build is
 *             deployed to each fleet instance. Amazon GameLift Servers manages the fleet's instances and controls the
 *             lifecycle of game server processes, which host game sessions for players. EC2 fleets can
 *             have instances in multiple locations. Each instance in the fleet is designated a
 *                 <code>Compute</code>.</p>
 *          <p>To create an EC2 fleet, provide these required parameters:</p>
 *          <ul>
 *             <li>
 *                <p>Either <code>BuildId</code> or <code>ScriptId</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ComputeType</code> set to <code>EC2</code> (the default value)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EC2InboundPermissions</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EC2InstanceType</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FleetType</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Name</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RuntimeConfiguration</code> with at least one <code>ServerProcesses</code>
 *                     configuration</p>
 *             </li>
 *          </ul>
 *          <p>If successful, this operation creates a new fleet resource and places it in
 *                 <code>NEW</code> status while Amazon GameLift Servers initiates the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>. To debug your fleet, fetch logs, view performance
 *             metrics or other actions on the fleet, create a development fleet with port 22/3389
 *             open. As a best practice, we recommend opening ports for remote access only when you
 *             need them and closing them when you're finished. </p>
 *          <p>When the fleet status is ACTIVE, you can adjust capacity settings and turn autoscaling
 *             on/off for each location.</p>
 *          <p>
 *             <b>Anywhere fleet</b>
 *          </p>
 *          <p>An Anywhere fleet represents compute resources that are not owned or managed by
 *             Amazon GameLift Servers. You might create an Anywhere fleet with your local machine for testing, or use
 *             one to host game servers with on-premises hardware or other game hosting solutions. </p>
 *          <p>To create an Anywhere fleet, provide these required parameters:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ComputeType</code> set to <code>ANYWHERE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Locations</code> specifying a custom location</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Name</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If successful, this operation creates a new fleet resource and places it in
 *                 <code>ACTIVE</code> status. You can register computes with a fleet in
 *                 <code>ACTIVE</code> status. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up
 *             fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateFleetInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BuildId: "STRING_VALUE",
 *   ScriptId: "STRING_VALUE",
 *   ServerLaunchPath: "STRING_VALUE",
 *   ServerLaunchParameters: "STRING_VALUE",
 *   LogPaths: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   EC2InstanceType: "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c7a.medium" || "c7a.large" || "c7a.xlarge" || "c7a.2xlarge" || "c7a.4xlarge" || "c7a.8xlarge" || "c7a.12xlarge" || "c7a.16xlarge" || "c7gd.medium" || "c7gd.large" || "c7gd.xlarge" || "c7gd.2xlarge" || "c7gd.4xlarge" || "c7gd.8xlarge" || "c7gd.12xlarge" || "c7gd.16xlarge" || "c7gn.medium" || "c7gn.large" || "c7gn.xlarge" || "c7gn.2xlarge" || "c7gn.4xlarge" || "c7gn.8xlarge" || "c7gn.12xlarge" || "c7gn.16xlarge" || "c7i.large" || "c7i.xlarge" || "c7i.2xlarge" || "c7i.4xlarge" || "c7i.8xlarge" || "c7i.12xlarge" || "c7i.16xlarge" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m7a.medium" || "m7a.large" || "m7a.xlarge" || "m7a.2xlarge" || "m7a.4xlarge" || "m7a.8xlarge" || "m7a.12xlarge" || "m7a.16xlarge" || "m7gd.medium" || "m7gd.large" || "m7gd.xlarge" || "m7gd.2xlarge" || "m7gd.4xlarge" || "m7gd.8xlarge" || "m7gd.12xlarge" || "m7gd.16xlarge" || "m7i.large" || "m7i.xlarge" || "m7i.2xlarge" || "m7i.4xlarge" || "m7i.8xlarge" || "m7i.12xlarge" || "m7i.16xlarge" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r7a.medium" || "r7a.large" || "r7a.xlarge" || "r7a.2xlarge" || "r7a.4xlarge" || "r7a.8xlarge" || "r7a.12xlarge" || "r7a.16xlarge" || "r7gd.medium" || "r7gd.large" || "r7gd.xlarge" || "r7gd.2xlarge" || "r7gd.4xlarge" || "r7gd.8xlarge" || "r7gd.12xlarge" || "r7gd.16xlarge" || "r7i.large" || "r7i.xlarge" || "r7i.2xlarge" || "r7i.4xlarge" || "r7i.8xlarge" || "r7i.12xlarge" || "r7i.16xlarge" || "r7i.24xlarge" || "r7i.48xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c8g.medium" || "c8g.large" || "c8g.xlarge" || "c8g.2xlarge" || "c8g.4xlarge" || "c8g.8xlarge" || "c8g.12xlarge" || "c8g.16xlarge" || "c8g.24xlarge" || "c8g.48xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m8g.medium" || "m8g.large" || "m8g.xlarge" || "m8g.2xlarge" || "m8g.4xlarge" || "m8g.8xlarge" || "m8g.12xlarge" || "m8g.16xlarge" || "m8g.24xlarge" || "m8g.48xlarge" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r8g.medium" || "r8g.large" || "r8g.xlarge" || "r8g.2xlarge" || "r8g.4xlarge" || "r8g.8xlarge" || "r8g.12xlarge" || "r8g.16xlarge" || "r8g.24xlarge" || "r8g.48xlarge" || "m4.16xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6i.32xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "c7a.24xlarge" || "c7a.32xlarge" || "c7a.48xlarge" || "c7i.24xlarge" || "c7i.48xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m7a.24xlarge" || "m7a.32xlarge" || "m7a.48xlarge" || "m7i.24xlarge" || "m7i.48xlarge" || "r7a.24xlarge" || "r7a.32xlarge" || "r7a.48xlarge",
 *   EC2InboundPermissions: [ // IpPermissionsList
 *     { // IpPermission
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 *   RuntimeConfiguration: { // RuntimeConfiguration
 *     ServerProcesses: [ // ServerProcessList
 *       { // ServerProcess
 *         LaunchPath: "STRING_VALUE", // required
 *         Parameters: "STRING_VALUE",
 *         ConcurrentExecutions: Number("int"), // required
 *       },
 *     ],
 *     MaxConcurrentGameSessionActivations: Number("int"),
 *     GameSessionActivationTimeoutSeconds: Number("int"),
 *   },
 *   ResourceCreationLimitPolicy: { // ResourceCreationLimitPolicy
 *     NewGameSessionsPerCreator: Number("int"),
 *     PolicyPeriodInMinutes: Number("int"),
 *   },
 *   MetricGroups: [ // MetricGroupList
 *     "STRING_VALUE",
 *   ],
 *   PeerVpcAwsAccountId: "STRING_VALUE",
 *   PeerVpcId: "STRING_VALUE",
 *   FleetType: "ON_DEMAND" || "SPOT",
 *   InstanceRoleArn: "STRING_VALUE",
 *   CertificateConfiguration: { // CertificateConfiguration
 *     CertificateType: "DISABLED" || "GENERATED", // required
 *   },
 *   Locations: [ // LocationConfigurationList
 *     { // LocationConfiguration
 *       Location: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ComputeType: "EC2" || "ANYWHERE",
 *   AnywhereConfiguration: { // AnywhereConfiguration
 *     Cost: "STRING_VALUE", // required
 *   },
 *   InstanceRoleCredentialsProvider: "SHARED_CREDENTIAL_FILE",
 * };
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetOutput
 * //   FleetAttributes: { // FleetAttributes
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     FleetType: "ON_DEMAND" || "SPOT",
 * //     InstanceType: "t2.micro" || "t2.small" || "t2.medium" || "t2.large" || "c3.large" || "c3.xlarge" || "c3.2xlarge" || "c3.4xlarge" || "c3.8xlarge" || "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "r3.large" || "r3.xlarge" || "r3.2xlarge" || "r3.4xlarge" || "r3.8xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "m3.medium" || "m3.large" || "m3.xlarge" || "m3.2xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "c5d.large" || "c5d.xlarge" || "c5d.2xlarge" || "c5d.4xlarge" || "c5d.9xlarge" || "c5d.12xlarge" || "c5d.18xlarge" || "c5d.24xlarge" || "c6a.large" || "c6a.xlarge" || "c6a.2xlarge" || "c6a.4xlarge" || "c6a.8xlarge" || "c6a.12xlarge" || "c6a.16xlarge" || "c6a.24xlarge" || "c6i.large" || "c6i.xlarge" || "c6i.2xlarge" || "c6i.4xlarge" || "c6i.8xlarge" || "c6i.12xlarge" || "c6i.16xlarge" || "c6i.24xlarge" || "r5d.large" || "r5d.xlarge" || "r5d.2xlarge" || "r5d.4xlarge" || "r5d.8xlarge" || "r5d.12xlarge" || "r5d.16xlarge" || "r5d.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "c6gn.medium" || "c6gn.large" || "c6gn.xlarge" || "c6gn.2xlarge" || "c6gn.4xlarge" || "c6gn.8xlarge" || "c6gn.12xlarge" || "c6gn.16xlarge" || "c7g.medium" || "c7g.large" || "c7g.xlarge" || "c7g.2xlarge" || "c7g.4xlarge" || "c7g.8xlarge" || "c7g.12xlarge" || "c7g.16xlarge" || "r7g.medium" || "r7g.large" || "r7g.xlarge" || "r7g.2xlarge" || "r7g.4xlarge" || "r7g.8xlarge" || "r7g.12xlarge" || "r7g.16xlarge" || "m7g.medium" || "m7g.large" || "m7g.xlarge" || "m7g.2xlarge" || "m7g.4xlarge" || "m7g.8xlarge" || "m7g.12xlarge" || "m7g.16xlarge" || "g5g.xlarge" || "g5g.2xlarge" || "g5g.4xlarge" || "g5g.8xlarge" || "g5g.16xlarge" || "r6i.large" || "r6i.xlarge" || "r6i.2xlarge" || "r6i.4xlarge" || "r6i.8xlarge" || "r6i.12xlarge" || "r6i.16xlarge" || "c6gd.medium" || "c6gd.large" || "c6gd.xlarge" || "c6gd.2xlarge" || "c6gd.4xlarge" || "c6gd.8xlarge" || "c6gd.12xlarge" || "c6gd.16xlarge" || "c6in.large" || "c6in.xlarge" || "c6in.2xlarge" || "c6in.4xlarge" || "c6in.8xlarge" || "c6in.12xlarge" || "c6in.16xlarge" || "c7a.medium" || "c7a.large" || "c7a.xlarge" || "c7a.2xlarge" || "c7a.4xlarge" || "c7a.8xlarge" || "c7a.12xlarge" || "c7a.16xlarge" || "c7gd.medium" || "c7gd.large" || "c7gd.xlarge" || "c7gd.2xlarge" || "c7gd.4xlarge" || "c7gd.8xlarge" || "c7gd.12xlarge" || "c7gd.16xlarge" || "c7gn.medium" || "c7gn.large" || "c7gn.xlarge" || "c7gn.2xlarge" || "c7gn.4xlarge" || "c7gn.8xlarge" || "c7gn.12xlarge" || "c7gn.16xlarge" || "c7i.large" || "c7i.xlarge" || "c7i.2xlarge" || "c7i.4xlarge" || "c7i.8xlarge" || "c7i.12xlarge" || "c7i.16xlarge" || "m6a.large" || "m6a.xlarge" || "m6a.2xlarge" || "m6a.4xlarge" || "m6a.8xlarge" || "m6a.12xlarge" || "m6a.16xlarge" || "m6gd.medium" || "m6gd.large" || "m6gd.xlarge" || "m6gd.2xlarge" || "m6gd.4xlarge" || "m6gd.8xlarge" || "m6gd.12xlarge" || "m6gd.16xlarge" || "m6i.large" || "m6i.xlarge" || "m6i.2xlarge" || "m6i.4xlarge" || "m6i.8xlarge" || "m6i.12xlarge" || "m6i.16xlarge" || "m7a.medium" || "m7a.large" || "m7a.xlarge" || "m7a.2xlarge" || "m7a.4xlarge" || "m7a.8xlarge" || "m7a.12xlarge" || "m7a.16xlarge" || "m7gd.medium" || "m7gd.large" || "m7gd.xlarge" || "m7gd.2xlarge" || "m7gd.4xlarge" || "m7gd.8xlarge" || "m7gd.12xlarge" || "m7gd.16xlarge" || "m7i.large" || "m7i.xlarge" || "m7i.2xlarge" || "m7i.4xlarge" || "m7i.8xlarge" || "m7i.12xlarge" || "m7i.16xlarge" || "r6gd.medium" || "r6gd.large" || "r6gd.xlarge" || "r6gd.2xlarge" || "r6gd.4xlarge" || "r6gd.8xlarge" || "r6gd.12xlarge" || "r6gd.16xlarge" || "r7a.medium" || "r7a.large" || "r7a.xlarge" || "r7a.2xlarge" || "r7a.4xlarge" || "r7a.8xlarge" || "r7a.12xlarge" || "r7a.16xlarge" || "r7gd.medium" || "r7gd.large" || "r7gd.xlarge" || "r7gd.2xlarge" || "r7gd.4xlarge" || "r7gd.8xlarge" || "r7gd.12xlarge" || "r7gd.16xlarge" || "r7i.large" || "r7i.xlarge" || "r7i.2xlarge" || "r7i.4xlarge" || "r7i.8xlarge" || "r7i.12xlarge" || "r7i.16xlarge" || "r7i.24xlarge" || "r7i.48xlarge" || "c5ad.large" || "c5ad.xlarge" || "c5ad.2xlarge" || "c5ad.4xlarge" || "c5ad.8xlarge" || "c5ad.12xlarge" || "c5ad.16xlarge" || "c5ad.24xlarge" || "c5n.large" || "c5n.xlarge" || "c5n.2xlarge" || "c5n.4xlarge" || "c5n.9xlarge" || "c5n.18xlarge" || "r5ad.large" || "r5ad.xlarge" || "r5ad.2xlarge" || "r5ad.4xlarge" || "r5ad.8xlarge" || "r5ad.12xlarge" || "r5ad.16xlarge" || "r5ad.24xlarge" || "c6id.large" || "c6id.xlarge" || "c6id.2xlarge" || "c6id.4xlarge" || "c6id.8xlarge" || "c6id.12xlarge" || "c6id.16xlarge" || "c6id.24xlarge" || "c6id.32xlarge" || "c8g.medium" || "c8g.large" || "c8g.xlarge" || "c8g.2xlarge" || "c8g.4xlarge" || "c8g.8xlarge" || "c8g.12xlarge" || "c8g.16xlarge" || "c8g.24xlarge" || "c8g.48xlarge" || "m5ad.large" || "m5ad.xlarge" || "m5ad.2xlarge" || "m5ad.4xlarge" || "m5ad.8xlarge" || "m5ad.12xlarge" || "m5ad.16xlarge" || "m5ad.24xlarge" || "m5d.large" || "m5d.xlarge" || "m5d.2xlarge" || "m5d.4xlarge" || "m5d.8xlarge" || "m5d.12xlarge" || "m5d.16xlarge" || "m5d.24xlarge" || "m5dn.large" || "m5dn.xlarge" || "m5dn.2xlarge" || "m5dn.4xlarge" || "m5dn.8xlarge" || "m5dn.12xlarge" || "m5dn.16xlarge" || "m5dn.24xlarge" || "m5n.large" || "m5n.xlarge" || "m5n.2xlarge" || "m5n.4xlarge" || "m5n.8xlarge" || "m5n.12xlarge" || "m5n.16xlarge" || "m5n.24xlarge" || "m6id.large" || "m6id.xlarge" || "m6id.2xlarge" || "m6id.4xlarge" || "m6id.8xlarge" || "m6id.12xlarge" || "m6id.16xlarge" || "m6id.24xlarge" || "m6id.32xlarge" || "m6idn.large" || "m6idn.xlarge" || "m6idn.2xlarge" || "m6idn.4xlarge" || "m6idn.8xlarge" || "m6idn.12xlarge" || "m6idn.16xlarge" || "m6idn.24xlarge" || "m6idn.32xlarge" || "m6in.large" || "m6in.xlarge" || "m6in.2xlarge" || "m6in.4xlarge" || "m6in.8xlarge" || "m6in.12xlarge" || "m6in.16xlarge" || "m6in.24xlarge" || "m6in.32xlarge" || "m8g.medium" || "m8g.large" || "m8g.xlarge" || "m8g.2xlarge" || "m8g.4xlarge" || "m8g.8xlarge" || "m8g.12xlarge" || "m8g.16xlarge" || "m8g.24xlarge" || "m8g.48xlarge" || "r5dn.large" || "r5dn.xlarge" || "r5dn.2xlarge" || "r5dn.4xlarge" || "r5dn.8xlarge" || "r5dn.12xlarge" || "r5dn.16xlarge" || "r5dn.24xlarge" || "r5n.large" || "r5n.xlarge" || "r5n.2xlarge" || "r5n.4xlarge" || "r5n.8xlarge" || "r5n.12xlarge" || "r5n.16xlarge" || "r5n.24xlarge" || "r6a.large" || "r6a.xlarge" || "r6a.2xlarge" || "r6a.4xlarge" || "r6a.8xlarge" || "r6a.12xlarge" || "r6a.16xlarge" || "r6a.24xlarge" || "r6a.32xlarge" || "r6a.48xlarge" || "r6id.large" || "r6id.xlarge" || "r6id.2xlarge" || "r6id.4xlarge" || "r6id.8xlarge" || "r6id.12xlarge" || "r6id.16xlarge" || "r6id.24xlarge" || "r6id.32xlarge" || "r6idn.large" || "r6idn.xlarge" || "r6idn.2xlarge" || "r6idn.4xlarge" || "r6idn.8xlarge" || "r6idn.12xlarge" || "r6idn.16xlarge" || "r6idn.24xlarge" || "r6idn.32xlarge" || "r6in.large" || "r6in.xlarge" || "r6in.2xlarge" || "r6in.4xlarge" || "r6in.8xlarge" || "r6in.12xlarge" || "r6in.16xlarge" || "r6in.24xlarge" || "r6in.32xlarge" || "r8g.medium" || "r8g.large" || "r8g.xlarge" || "r8g.2xlarge" || "r8g.4xlarge" || "r8g.8xlarge" || "r8g.12xlarge" || "r8g.16xlarge" || "r8g.24xlarge" || "r8g.48xlarge" || "m4.16xlarge" || "c6a.32xlarge" || "c6a.48xlarge" || "c6i.32xlarge" || "r6i.24xlarge" || "r6i.32xlarge" || "c6in.24xlarge" || "c6in.32xlarge" || "c7a.24xlarge" || "c7a.32xlarge" || "c7a.48xlarge" || "c7i.24xlarge" || "c7i.48xlarge" || "m6a.24xlarge" || "m6a.32xlarge" || "m6a.48xlarge" || "m6i.24xlarge" || "m6i.32xlarge" || "m7a.24xlarge" || "m7a.32xlarge" || "m7a.48xlarge" || "m7i.24xlarge" || "m7i.48xlarge" || "r7a.24xlarge" || "r7a.32xlarge" || "r7a.48xlarge",
 * //     Description: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //     BuildId: "STRING_VALUE",
 * //     BuildArn: "STRING_VALUE",
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     ServerLaunchPath: "STRING_VALUE",
 * //     ServerLaunchParameters: "STRING_VALUE",
 * //     LogPaths: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     NewGameSessionProtectionPolicy: "NoProtection" || "FullProtection",
 * //     OperatingSystem: "WINDOWS_2012" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "WINDOWS_2016" || "AMAZON_LINUX_2023",
 * //     ResourceCreationLimitPolicy: { // ResourceCreationLimitPolicy
 * //       NewGameSessionsPerCreator: Number("int"),
 * //       PolicyPeriodInMinutes: Number("int"),
 * //     },
 * //     MetricGroups: [ // MetricGroupList
 * //       "STRING_VALUE",
 * //     ],
 * //     StoppedActions: [ // FleetActionList
 * //       "AUTO_SCALING",
 * //     ],
 * //     InstanceRoleArn: "STRING_VALUE",
 * //     CertificateConfiguration: { // CertificateConfiguration
 * //       CertificateType: "DISABLED" || "GENERATED", // required
 * //     },
 * //     ComputeType: "EC2" || "ANYWHERE",
 * //     AnywhereConfiguration: { // AnywhereConfiguration
 * //       Cost: "STRING_VALUE", // required
 * //     },
 * //     InstanceRoleCredentialsProvider: "SHARED_CREDENTIAL_FILE",
 * //   },
 * //   LocationStates: [ // LocationStateList
 * //     { // LocationState
 * //       Location: "STRING_VALUE",
 * //       Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateFleetCommandInput - {@link CreateFleetCommandInput}
 * @returns {@link CreateFleetCommandOutput}
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link NotReadyException} (client fault)
 *  <p> The operation failed because Amazon GameLift Servers has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
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
 *
 * @public
 */
export class CreateFleetCommand extends $Command
  .classBuilder<
    CreateFleetCommandInput,
    CreateFleetCommandOutput,
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
  .s("GameLift", "CreateFleet", {})
  .n("GameLiftClient", "CreateFleetCommand")
  .f(CreateFleetInputFilterSensitiveLog, void 0)
  .ser(se_CreateFleetCommand)
  .de(de_CreateFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetInput;
      output: CreateFleetOutput;
    };
    sdk: {
      input: CreateFleetCommandInput;
      output: CreateFleetCommandOutput;
    };
  };
}
