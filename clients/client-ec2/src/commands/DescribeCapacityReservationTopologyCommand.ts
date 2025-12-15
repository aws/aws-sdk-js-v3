// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeCapacityReservationTopologyRequest,
  DescribeCapacityReservationTopologyResult,
} from "../models/models_3";
import { DescribeCapacityReservationTopology$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeCapacityReservationTopologyCommandOutput
  extends DescribeCapacityReservationTopologyResult,
    __MetadataBearer {}

/**
 * <p>Describes a tree-based hierarchy that represents the physical host placement of your
 *             pending or active Capacity Reservations within an Availability Zone or Local Zone. You
 *             can use this information to determine the relative proximity of your capacity within the
 *             Amazon Web Services network before it is launched and use this information to allocate capacity
 *             together to support your tightly coupled workloads.</p>
 *          <p>Capacity Reservation topology is supported for specific instance types only. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology-prerequisites.html">Prerequisites
 *                 for Amazon EC2 instance topology</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *          <note>
 *             <p>The Amazon EC2 API follows an eventual consistency model due to the
 *                 distributed nature of the system supporting it. As a result, when you call the
 *                 DescribeCapacityReservationTopology API command immediately after launching
 *                 instances, the response might return a <code>null</code> value for
 *                     <code>capacityBlockId</code> because the data might not have fully propagated
 *                 across all subsystems. For more information, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/eventual-consistency.html">Eventual consistency in the
 *                         Amazon EC2 API</a> in the <i>Amazon EC2 Developer
 *                     Guide</i>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology.html">Amazon EC2 topology</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 *          <p></p>
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
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityReservationTopologyCommand extends $Command
  .classBuilder<
    DescribeCapacityReservationTopologyCommandInput,
    DescribeCapacityReservationTopologyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeCapacityReservationTopology", {})
  .n("EC2Client", "DescribeCapacityReservationTopologyCommand")
  .sc(DescribeCapacityReservationTopology$)
  .build() {
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
