// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApplicationStatusCheckRequest, CreateApplicationStatusCheckResult } from "../models/models_0";
import { CreateApplicationStatusCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApplicationStatusCheckCommand}.
 */
export interface CreateApplicationStatusCheckCommandInput extends CreateApplicationStatusCheckRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationStatusCheckCommand}.
 */
export interface CreateApplicationStatusCheckCommandOutput extends CreateApplicationStatusCheckResult, __MetadataBearer {}

/**
 * <p>Creates an application status check for monitoring the health of applications running on your instances. You can configure the protocol, port, path, and thresholds for the health check. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>You can create a maximum of 50 application status checks per account.</p>
 *             </li>
 *             <li>
 *                <p>Health checks do not start until you associate the check with instances or tags using <code>AssociateApplicationStatusCheck</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Timeout</code> value must be less than the <code>Interval</code> value.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Path</code> must start with a forward slash (<code>/</code>). Default: <code>/</code>.</p>
 *             </li>
 *             <li>
 *                <p>If you do not specify <code>Aggregation</code>, it defaults to <code>included</code>, which means the check contributes to the instance-level application status.</p>
 *             </li>
 *             <li>
 *                <p>Default values: <code>Interval</code> is 60 seconds, <code>Timeout</code> is 6 seconds, <code>FailureThreshold</code> is 2, <code>SuccessThreshold</code> is 2, <code>StatusCodeMatcher</code> is <code>200</code>, <code>InitializationGracePeriodSeconds</code> is 300 seconds.</p>
 *             </li>
 *             <li>
 *                <p>You can tag the application status check during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateApplicationStatusCheckCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateApplicationStatusCheckCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateApplicationStatusCheckRequest
 *   HealthCheckPaths: [ // HealthCheckPathRequestList
 *     { // HealthCheckPathRequestObject
 *       Source: { // HealthCheckPathSourceRequestObject
 *         SubnetId: "STRING_VALUE",
 *         SecurityGroupId: "STRING_VALUE",
 *       },
 *       Destinations: [ // HealthCheckPathDestinationRequestSet
 *         { // HealthCheckPathDestinationRequestObject
 *           SubnetId: "STRING_VALUE",
 *           SecurityGroupId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   Aggregation: "included" || "excluded",
 *   Protocol: "http" || "https", // required
 *   Port: Number("int"), // required
 *   Path: "STRING_VALUE",
 *   DeviceIndex: Number("int"),
 *   IpVersion: "ipv4" || "ipv6",
 *   IpScope: "private",
 *   Interval: Number("int"),
 *   Timeout: Number("int"),
 *   FailureThreshold: Number("int"),
 *   SuccessThreshold: Number("int"),
 *   StatusCodeMatcher: "STRING_VALUE",
 *   InitializationGracePeriodSeconds: Number("int"),
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "ipam-internet-registry-association" || "secondary-interface" || "secondary-network" || "secondary-subnet" || "capacity-manager-data-export" || "vpn-concentrator" || "ipam-pool-allocation" || "capacity-reservation-cancellation-quote" || "application-status-check",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CreateApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationStatusCheckResult
 * //   ApplicationStatusCheck: { // ApplicationStatusCheckResponseObject
 * //     ApplicationStatusCheckId: "STRING_VALUE",
 * //     Aggregation: "included" || "excluded",
 * //     HealthCheckPaths: [ // HealthCheckPathResponseList
 * //       { // HealthCheckPathResponseObject
 * //         Source: { // HealthCheckPathSourceResponseObject
 * //           SubnetId: "STRING_VALUE",
 * //           SecurityGroupId: "STRING_VALUE",
 * //         },
 * //         Destinations: [ // HealthCheckPathDestinationResponseList
 * //           { // HealthCheckPathDestinationResponseObject
 * //             SubnetId: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Protocol: "http" || "https",
 * //     Port: Number("int"),
 * //     Path: "STRING_VALUE",
 * //     DeviceIndex: Number("int"),
 * //     IpVersion: "ipv4" || "ipv6",
 * //     IpScope: "private",
 * //     Interval: Number("int"),
 * //     Timeout: Number("int"),
 * //     FailureThreshold: Number("int"),
 * //     SuccessThreshold: Number("int"),
 * //     StatusCodeMatcher: "STRING_VALUE",
 * //     InitializationGracePeriodSeconds: Number("int"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     TargetTagAssociations: [ // CustomKeyValuePairResponseSet
 * //       { // CustomTagKeyValueResponsePair
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModifyTime: new Date("TIMESTAMP"),
 * //     DeletionTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationStatusCheckCommandInput - {@link CreateApplicationStatusCheckCommandInput}
 * @returns {@link CreateApplicationStatusCheckCommandOutput}
 * @see {@link CreateApplicationStatusCheckCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationStatusCheckCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create an application status check
 * ```javascript
 * // This example creates an application status check that monitors HTTP health on port 80.
 * const input = {
 *   Aggregation: "included",
 *   Path: "/health",
 *   Port: 80,
 *   Protocol: "http"
 * };
 * const command = new CreateApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatusCheck: {
 *     Aggregation: "included",
 *     ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *     FailureThreshold: 2,
 *     Interval: 60,
 *     Path: "/health",
 *     Port: 80,
 *     Protocol: "http",
 *     SuccessThreshold: 2,
 *     Timeout: 6
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateApplicationStatusCheckCommand extends command<CreateApplicationStatusCheckCommandInput, CreateApplicationStatusCheckCommandOutput>(
  _ep0,
  _mw0,
  "CreateApplicationStatusCheck",
  CreateApplicationStatusCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationStatusCheckRequest;
      output: CreateApplicationStatusCheckResult;
    };
    sdk: {
      input: CreateApplicationStatusCheckCommandInput;
      output: CreateApplicationStatusCheckCommandOutput;
    };
  };
}
