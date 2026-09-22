// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCapacityReservationDateChangeQuoteRequest,
  CreateCapacityReservationDateChangeQuoteResult,
} from "../models/models_0";
import { CreateCapacityReservationDateChangeQuote$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCapacityReservationDateChangeQuoteCommand}.
 */
export interface CreateCapacityReservationDateChangeQuoteCommandInput extends CreateCapacityReservationDateChangeQuoteRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityReservationDateChangeQuoteCommand}.
 */
export interface CreateCapacityReservationDateChangeQuoteCommandOutput extends CreateCapacityReservationDateChangeQuoteResult, __MetadataBearer {}

/**
 * <p>Generates a quote for changing the start date of a future-dated Capacity Reservation
 * 			that has not yet been delivered. The quote includes the new start date, the resulting
 * 			commitment end date, and a quote ID. Pass the quote ID to
 * 			<code>ModifyCapacityReservation</code> to apply the change.</p>
 *          <p>The cumulative pushout across all changes is limited to 30 days from the Capacity
 * 			Reservation's original start date. Quotes are valid for 24 hours, and always expire at
 * 			least one hour before the start date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationDateChangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationDateChangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateCapacityReservationDateChangeQuoteRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   NewStartDate: new Date("TIMESTAMP"), // required
 *   ClientToken: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "ipam-internet-registry-association" || "secondary-interface" || "secondary-network" || "secondary-subnet" || "capacity-manager-data-export" || "vpn-concentrator" || "ipam-pool-allocation" || "capacity-reservation-cancellation-quote" || "application-status-check" || "capacity-reservation-modification-quote",
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
 * const command = new CreateCapacityReservationDateChangeQuoteCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityReservationDateChangeQuoteResult
 * //   CapacityReservationModificationQuote: { // CapacityReservationModificationQuote
 * //     CapacityReservationModificationQuoteId: "STRING_VALUE",
 * //     CapacityReservationId: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     QuoteState: "active" || "expired",
 * //     CurrentConfiguration: { // ModificationQuoteCurrentConfiguration
 * //       InstanceCount: Number("int"),
 * //       ReservationState: "STRING_VALUE",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       OriginalStartDate: new Date("TIMESTAMP"),
 * //     },
 * //     ModificationTerms: { // ModificationTerms
 * //       ReservationUpdate: { // ModificationReservationUpdate
 * //         NewCommitmentEndDate: new Date("TIMESTAMP"),
 * //         NewStartDate: new Date("TIMESTAMP"),
 * //         NewCommitmentDuration: Number("int"),
 * //       },
 * //     },
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
 * @param CreateCapacityReservationDateChangeQuoteCommandInput - {@link CreateCapacityReservationDateChangeQuoteCommandInput}
 * @returns {@link CreateCapacityReservationDateChangeQuoteCommandOutput}
 * @see {@link CreateCapacityReservationDateChangeQuoteCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationDateChangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateCapacityReservationDateChangeQuoteCommand extends command<CreateCapacityReservationDateChangeQuoteCommandInput, CreateCapacityReservationDateChangeQuoteCommandOutput>(
  _ep0,
  _mw0,
  "CreateCapacityReservationDateChangeQuote",
  CreateCapacityReservationDateChangeQuote$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityReservationDateChangeQuoteRequest;
      output: CreateCapacityReservationDateChangeQuoteResult;
    };
    sdk: {
      input: CreateCapacityReservationDateChangeQuoteCommandInput;
      output: CreateCapacityReservationDateChangeQuoteCommandOutput;
    };
  };
}
