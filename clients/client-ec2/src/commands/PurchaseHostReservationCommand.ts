// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseHostReservationRequest, PurchaseHostReservationResult } from "../models/models_7";
import { de_PurchaseHostReservationCommand, se_PurchaseHostReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseHostReservationCommand}.
 */
export interface PurchaseHostReservationCommandInput extends PurchaseHostReservationRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseHostReservationCommand}.
 */
export interface PurchaseHostReservationCommandOutput extends PurchaseHostReservationResult, __MetadataBearer {}

/**
 * <p>Purchase a reservation with configurations that match those of your Dedicated Host.
 *             You must have active Dedicated Hosts in your account before you purchase a reservation.
 *             This action results in the specified reservation being purchased and charged to your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseHostReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseHostReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // PurchaseHostReservationRequest
 *   ClientToken: "STRING_VALUE",
 *   CurrencyCode: "USD",
 *   HostIdSet: [ // RequestHostIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   LimitPrice: "STRING_VALUE",
 *   OfferingId: "STRING_VALUE", // required
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
 * const command = new PurchaseHostReservationCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseHostReservationResult
 * //   ClientToken: "STRING_VALUE",
 * //   CurrencyCode: "USD",
 * //   Purchase: [ // PurchaseSet
 * //     { // Purchase
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       HostIdSet: [ // ResponseHostIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       HostReservationId: "STRING_VALUE",
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       UpfrontPrice: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalHourlyPrice: "STRING_VALUE",
 * //   TotalUpfrontPrice: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseHostReservationCommandInput - {@link PurchaseHostReservationCommandInput}
 * @returns {@link PurchaseHostReservationCommandOutput}
 * @see {@link PurchaseHostReservationCommandInput} for command's `input` shape.
 * @see {@link PurchaseHostReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class PurchaseHostReservationCommand extends $Command
  .classBuilder<
    PurchaseHostReservationCommandInput,
    PurchaseHostReservationCommandOutput,
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
  .s("AmazonEC2", "PurchaseHostReservation", {})
  .n("EC2Client", "PurchaseHostReservationCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseHostReservationCommand)
  .de(de_PurchaseHostReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseHostReservationRequest;
      output: PurchaseHostReservationResult;
    };
    sdk: {
      input: PurchaseHostReservationCommandInput;
      output: PurchaseHostReservationCommandOutput;
    };
  };
}
