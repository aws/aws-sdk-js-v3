// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInternetGatewayRequest, CreateInternetGatewayResult } from "../models/models_1";
import { de_CreateInternetGatewayCommand, se_CreateInternetGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInternetGatewayCommand}.
 */
export interface CreateInternetGatewayCommandInput extends CreateInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateInternetGatewayCommand}.
 */
export interface CreateInternetGatewayCommandOutput extends CreateInternetGatewayResult, __MetadataBearer {}

/**
 * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway,
 * 			you attach it to a VPC using <a>AttachInternetGateway</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html">Internet gateways</a> in the
 *            <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateInternetGatewayRequest
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
 *   DryRun: true || false,
 * };
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateInternetGatewayResult
 * //   InternetGateway: { // InternetGateway
 * //     Attachments: [ // InternetGatewayAttachmentList
 * //       { // InternetGatewayAttachment
 * //         State: "attaching" || "attached" || "detaching" || "detached",
 * //         VpcId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InternetGatewayId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInternetGatewayCommandInput - {@link CreateInternetGatewayCommandInput}
 * @returns {@link CreateInternetGatewayCommandOutput}
 * @see {@link CreateInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create an Internet gateway
 * ```javascript
 * // This example creates an Internet gateway.
 * const input = { /* empty *\/ };
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InternetGateway: {
 *     Attachments:     [],
 *     InternetGatewayId: "igw-c0a643a9",
 *     Tags:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateInternetGatewayCommand extends $Command
  .classBuilder<
    CreateInternetGatewayCommandInput,
    CreateInternetGatewayCommandOutput,
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
  .s("AmazonEC2", "CreateInternetGateway", {})
  .n("EC2Client", "CreateInternetGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateInternetGatewayCommand)
  .de(de_CreateInternetGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInternetGatewayRequest;
      output: CreateInternetGatewayResult;
    };
    sdk: {
      input: CreateInternetGatewayCommandInput;
      output: CreateInternetGatewayCommandOutput;
    };
  };
}
