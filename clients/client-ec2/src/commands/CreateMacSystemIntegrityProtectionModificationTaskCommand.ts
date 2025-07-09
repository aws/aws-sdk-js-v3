// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMacSystemIntegrityProtectionModificationTaskRequest,
  CreateMacSystemIntegrityProtectionModificationTaskRequestFilterSensitiveLog,
  CreateMacSystemIntegrityProtectionModificationTaskResult,
} from "../models/models_2";
import {
  de_CreateMacSystemIntegrityProtectionModificationTaskCommand,
  se_CreateMacSystemIntegrityProtectionModificationTaskCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMacSystemIntegrityProtectionModificationTaskCommand}.
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskCommandInput
  extends CreateMacSystemIntegrityProtectionModificationTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateMacSystemIntegrityProtectionModificationTaskCommand}.
 */
export interface CreateMacSystemIntegrityProtectionModificationTaskCommandOutput
  extends CreateMacSystemIntegrityProtectionModificationTaskResult,
    __MetadataBearer {}

/**
 * <p>Creates a System Integrity Protection (SIP) modification task to configure the SIP settings
 *          for an x86 Mac instance or Apple silicon Mac instance. For more information, see
 *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mac-sip-settings.html#mac-sip-configure">
 *             Configure SIP for Amazon EC2 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you configure the SIP settings for your instance, you can either enable
 *          or disable all SIP settings, or you can specify a custom SIP configuration that
 *          selectively enables or disables specific SIP settings.</p>
 *          <note>
 *             <p>If you implement a custom configuration, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mac-sip-settings.html#mac-sip-check-settings">
 *                connect to the instance and verify the settings</a> to ensure that your
 *             requirements are properly implemented and functioning as intended.</p>
 *             <p>SIP configurations might change with macOS updates. We recommend that you
 *             review custom SIP settings after any macOS version upgrade to ensure
 *             continued compatibility and proper functionality of your security configurations.</p>
 *          </note>
 *          <p>To enable or disable all SIP settings, use the <b>MacSystemIntegrityProtectionStatus</b>
 *          parameter only. For example, to enable all SIP settings, specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>MacSystemIntegrityProtectionStatus=enabled</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To specify a custom configuration that selectively enables or disables specific SIP
 *          settings, use the <b>MacSystemIntegrityProtectionStatus</b>
 *          parameter to enable or disable all SIP settings, and then use the
 *          <b>MacSystemIntegrityProtectionConfiguration</b> parameter
 *          to specify exceptions. In this case, the exceptions you specify for <b>MacSystemIntegrityProtectionConfiguration</b> override the value
 *          you specify for <b>MacSystemIntegrityProtectionStatus</b>.
 *          For example, to enable all SIP settings, except <code>NvramProtections</code>,
 *          specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>MacSystemIntegrityProtectionStatus=enabled</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MacSystemIntegrityProtectionConfigurationRequest "NvramProtections=disabled"</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateMacSystemIntegrityProtectionModificationTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateMacSystemIntegrityProtectionModificationTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateMacSystemIntegrityProtectionModificationTaskRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   MacCredentials: "STRING_VALUE",
 *   MacSystemIntegrityProtectionConfiguration: { // MacSystemIntegrityProtectionConfigurationRequest
 *     AppleInternal: "enabled" || "disabled",
 *     BaseSystem: "enabled" || "disabled",
 *     DebuggingRestrictions: "enabled" || "disabled",
 *     DTraceRestrictions: "enabled" || "disabled",
 *     FilesystemProtections: "enabled" || "disabled",
 *     KextSigning: "enabled" || "disabled",
 *     NvramProtections: "enabled" || "disabled",
 *   },
 *   MacSystemIntegrityProtectionStatus: "enabled" || "disabled", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateMacSystemIntegrityProtectionModificationTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateMacSystemIntegrityProtectionModificationTaskResult
 * //   MacModificationTask: { // MacModificationTask
 * //     InstanceId: "STRING_VALUE",
 * //     MacModificationTaskId: "STRING_VALUE",
 * //     MacSystemIntegrityProtectionConfig: { // MacSystemIntegrityProtectionConfiguration
 * //       AppleInternal: "enabled" || "disabled",
 * //       BaseSystem: "enabled" || "disabled",
 * //       DebuggingRestrictions: "enabled" || "disabled",
 * //       DTraceRestrictions: "enabled" || "disabled",
 * //       FilesystemProtections: "enabled" || "disabled",
 * //       KextSigning: "enabled" || "disabled",
 * //       NvramProtections: "enabled" || "disabled",
 * //       Status: "enabled" || "disabled",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TaskState: "successful" || "failed" || "in-progress" || "pending",
 * //     TaskType: "sip-modification" || "volume-ownership-delegation",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMacSystemIntegrityProtectionModificationTaskCommandInput - {@link CreateMacSystemIntegrityProtectionModificationTaskCommandInput}
 * @returns {@link CreateMacSystemIntegrityProtectionModificationTaskCommandOutput}
 * @see {@link CreateMacSystemIntegrityProtectionModificationTaskCommandInput} for command's `input` shape.
 * @see {@link CreateMacSystemIntegrityProtectionModificationTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateMacSystemIntegrityProtectionModificationTaskCommand extends $Command
  .classBuilder<
    CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateMacSystemIntegrityProtectionModificationTask", {})
  .n("EC2Client", "CreateMacSystemIntegrityProtectionModificationTaskCommand")
  .f(CreateMacSystemIntegrityProtectionModificationTaskRequestFilterSensitiveLog, void 0)
  .ser(se_CreateMacSystemIntegrityProtectionModificationTaskCommand)
  .de(de_CreateMacSystemIntegrityProtectionModificationTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMacSystemIntegrityProtectionModificationTaskRequest;
      output: CreateMacSystemIntegrityProtectionModificationTaskResult;
    };
    sdk: {
      input: CreateMacSystemIntegrityProtectionModificationTaskCommandInput;
      output: CreateMacSystemIntegrityProtectionModificationTaskCommandOutput;
    };
  };
}
