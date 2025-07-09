// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_3";
import { de_DescribeCapacityReservationsCommand, se_DescribeCapacityReservationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationsCommand}.
 */
export interface DescribeCapacityReservationsCommandInput extends DescribeCapacityReservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationsCommand}.
 */
export interface DescribeCapacityReservationsCommandOutput
  extends DescribeCapacityReservationsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your Capacity Reservations. The results describe only the
 * 			Capacity Reservations in the Amazon Web Services Region that you're currently
 * 			using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityReservationsRequest
 *   CapacityReservationIds: [ // CapacityReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityReservationsResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservations: [ // CapacityReservationSet
 * //     { // CapacityReservation
 * //       CapacityReservationId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       CapacityReservationArn: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       Tenancy: "default" || "dedicated",
 * //       TotalInstanceCount: Number("int"),
 * //       AvailableInstanceCount: Number("int"),
 * //       EbsOptimized: true || false,
 * //       EphemeralStorage: true || false,
 * //       State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       EndDateType: "unlimited" || "limited",
 * //       InstanceMatchCriteria: "open" || "targeted",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OutpostArn: "STRING_VALUE",
 * //       CapacityReservationFleetId: "STRING_VALUE",
 * //       PlacementGroupArn: "STRING_VALUE",
 * //       CapacityAllocations: [ // CapacityAllocations
 * //         { // CapacityAllocation
 * //           AllocationType: "used" || "future",
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //       ReservationType: "default" || "capacity-block",
 * //       UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //       CommitmentInfo: { // CapacityReservationCommitmentInfo
 * //         CommittedInstanceCount: Number("int"),
 * //         CommitmentEndDate: new Date("TIMESTAMP"),
 * //       },
 * //       DeliveryPreference: "fixed" || "incremental",
 * //       CapacityBlockId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCapacityReservationsCommandInput - {@link DescribeCapacityReservationsCommandInput}
 * @returns {@link DescribeCapacityReservationsCommandOutput}
 * @see {@link DescribeCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityReservationsCommand extends $Command
  .classBuilder<
    DescribeCapacityReservationsCommandInput,
    DescribeCapacityReservationsCommandOutput,
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
  .s("AmazonEC2", "DescribeCapacityReservations", {})
  .n("EC2Client", "DescribeCapacityReservationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityReservationsCommand)
  .de(de_DescribeCapacityReservationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityReservationsRequest;
      output: DescribeCapacityReservationsResult;
    };
    sdk: {
      input: DescribeCapacityReservationsCommandInput;
      output: DescribeCapacityReservationsCommandOutput;
    };
  };
}
