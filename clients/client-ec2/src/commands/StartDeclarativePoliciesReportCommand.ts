// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDeclarativePoliciesReportRequest, StartDeclarativePoliciesReportResult } from "../models/models_8";
import {
  de_StartDeclarativePoliciesReportCommand,
  se_StartDeclarativePoliciesReportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDeclarativePoliciesReportCommand}.
 */
export interface StartDeclarativePoliciesReportCommandInput extends StartDeclarativePoliciesReportRequest {}
/**
 * @public
 *
 * The output of {@link StartDeclarativePoliciesReportCommand}.
 */
export interface StartDeclarativePoliciesReportCommandOutput
  extends StartDeclarativePoliciesReportResult,
    __MetadataBearer {}

/**
 * <p>Generates an account status report. The report is generated asynchronously, and can
 *             take several hours to complete.</p>
 *          <p>The report provides the current status of all attributes supported by declarative
 *             policies for the accounts within the specified scope. The scope is determined by the
 *             specified <code>TargetId</code>, which can represent an individual account, or all the
 *             accounts that fall under the specified organizational unit (OU) or root (the entire
 *                 Amazon Web Services Organization).</p>
 *          <p>The report is saved to your specified S3 bucket, using the following path structure
 *             (with the <i>italicized placeholders</i> representing your specific
 *             values):</p>
 *          <p>
 *             <code>s3://<i>amzn-s3-demo-bucket</i>/<i>your-optional-s3-prefix</i>/ec2_<i>targetId</i>_<i>reportId</i>_<i>yyyyMMdd</i>T<i>hhmm</i>Z.csv</code>
 *          </p>
 *          <p class="title">
 *             <b>Prerequisites for generating a report</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The <code>StartDeclarativePoliciesReport</code> API can only be called by the
 *                     management account or delegated administrators for the organization.</p>
 *             </li>
 *             <li>
 *                <p>An S3 bucket must be available before generating the report (you can create a
 *                     new one or use an existing one), it must be in the same Region where the report
 *                     generation request is made, and it must have an appropriate bucket policy. For a
 *                     sample S3 policy, see <i>Sample Amazon S3 policy</i> under <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartDeclarativePoliciesReport.html#API_StartDeclarativePoliciesReport_Examples">Examples</a>.</p>
 *             </li>
 *             <li>
 *                <p>Trusted access must be enabled for the service for which the declarative
 *                     policy will enforce a baseline configuration. If you use the Amazon Web Services Organizations
 *                     console, this is done automatically when you enable declarative policies. The
 *                     API uses the following service principal to identify the EC2 service:
 *                         <code>ec2.amazonaws.com</code>. For more information on how to enable
 *                     trusted access with the Amazon Web Services CLI and Amazon Web Services SDKs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Using
 *                         Organizations with other Amazon Web Services services</a> in the
 *                         <i>Amazon Web Services Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Only one report per organization can be generated at a time. Attempting to
 *                     generate a report while another is in progress will result in an error.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, including the required IAM permissions to run this API, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative_status-report.html">Generating the account status report for declarative policies</a> in the
 *                 <i>Amazon Web Services Organizations User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartDeclarativePoliciesReportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartDeclarativePoliciesReportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StartDeclarativePoliciesReportRequest
 *   DryRun: true || false,
 *   S3Bucket: "STRING_VALUE", // required
 *   S3Prefix: "STRING_VALUE",
 *   TargetId: "STRING_VALUE", // required
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
 * const command = new StartDeclarativePoliciesReportCommand(input);
 * const response = await client.send(command);
 * // { // StartDeclarativePoliciesReportResult
 * //   ReportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDeclarativePoliciesReportCommandInput - {@link StartDeclarativePoliciesReportCommandInput}
 * @returns {@link StartDeclarativePoliciesReportCommandOutput}
 * @see {@link StartDeclarativePoliciesReportCommandInput} for command's `input` shape.
 * @see {@link StartDeclarativePoliciesReportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class StartDeclarativePoliciesReportCommand extends $Command
  .classBuilder<
    StartDeclarativePoliciesReportCommandInput,
    StartDeclarativePoliciesReportCommandOutput,
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
  .s("AmazonEC2", "StartDeclarativePoliciesReport", {})
  .n("EC2Client", "StartDeclarativePoliciesReportCommand")
  .f(void 0, void 0)
  .ser(se_StartDeclarativePoliciesReportCommand)
  .de(de_StartDeclarativePoliciesReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeclarativePoliciesReportRequest;
      output: StartDeclarativePoliciesReportResult;
    };
    sdk: {
      input: StartDeclarativePoliciesReportCommandInput;
      output: StartDeclarativePoliciesReportCommandOutput;
    };
  };
}
