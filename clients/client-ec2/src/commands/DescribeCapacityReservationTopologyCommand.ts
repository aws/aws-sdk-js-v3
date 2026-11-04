// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeCapacityReservationTopologyRequest,
  DescribeCapacityReservationTopologyResult,
} from "../models/models_3";
import { DescribeCapacityReservationTopology$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationTopologyCommand}.
 */
export interface DescribeCapacityReservationTopologyCommandInput extends DescribeCapacityReservationTopologyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationTopologyCommand}.
 */
export interface DescribeCapacityReservationTopologyCommandOutput extends DescribeCapacityReservationTopologyResult, __MetadataBearer {}

/**
 * Describes a tree-based hierarchy that represents the physical host placement of your pending or active Capacity Reservations within an Availability Zone or Local Zone. You can use this information to determine the relative proximity of your capacity within the Amazon Web Services network before it is launched and use this information to allocate capacity together to support your tightly coupled workloads.
 *
 * Capacity Reservation topology is supported for specific instance types only. For more information, see [Prerequisites for Amazon EC2 instance topology](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology-prerequisites.html) in the *Amazon EC2 User Guide*.
 *
 * > **Note:** The Amazon EC2 API follows an eventual consistency model due to the distributed nature of the system supporting it. As a result, when you call the DescribeCapacityReservationTopology API command immediately after launching instances, the response might return a `null` value for `capacityBlockId` because the data might not have fully propagated across all subsystems. For more information, see [Eventual consistency in the Amazon EC2 API](https://docs.aws.amazon.com/ec2/latest/devguide/eventual-consistency.html) in the *Amazon EC2 Developer Guide*.
 *
 * For more information, see [Amazon EC2 topology](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationTopologyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationTopologyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityReservationTopologyRequest
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CapacityReservationIds: [ // CapacityReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeCapacityReservationTopologyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityReservationTopologyResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservations: [ // CapacityReservationTopologySet
 * //     { // CapacityReservationTopology
 * //       CapacityReservationId: "STRING_VALUE",
 * //       CapacityBlockId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       NetworkNodes: [ // NetworkNodeSet
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCapacityReservationTopologyCommandInput - {@link DescribeCapacityReservationTopologyCommandInput}
 * @returns {@link DescribeCapacityReservationTopologyCommandOutput}
 * @see {@link DescribeCapacityReservationTopologyCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationTopologyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeCapacityReservationTopologyCommand extends command<DescribeCapacityReservationTopologyCommandInput, DescribeCapacityReservationTopologyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCapacityReservationTopology",
  DescribeCapacityReservationTopology$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityReservationTopologyRequest;
      output: DescribeCapacityReservationTopologyResult;
    };
    sdk: {
      input: DescribeCapacityReservationTopologyCommandInput;
      output: DescribeCapacityReservationTopologyCommandOutput;
    };
  };
}
