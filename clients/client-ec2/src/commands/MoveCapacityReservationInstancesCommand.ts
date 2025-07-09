// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { MoveCapacityReservationInstancesRequest, MoveCapacityReservationInstancesResult } from "../models/models_7";
import {
  de_MoveCapacityReservationInstancesCommand,
  se_MoveCapacityReservationInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MoveCapacityReservationInstancesCommand}.
 */
export interface MoveCapacityReservationInstancesCommandInput extends MoveCapacityReservationInstancesRequest {}
/**
 * @public
 *
 * The output of {@link MoveCapacityReservationInstancesCommand}.
 */
export interface MoveCapacityReservationInstancesCommandOutput
  extends MoveCapacityReservationInstancesResult,
    __MetadataBearer {}

/**
 * <p>Move available capacity from a source Capacity Reservation to a destination Capacity
 * 			Reservation. The source Capacity Reservation and the destination Capacity Reservation
 * 			must be <code>active</code>, owned by your Amazon Web Services account, and share the following: </p>
 *          <ul>
 *             <li>
 *                <p>Instance type</p>
 *             </li>
 *             <li>
 *                <p>Platform</p>
 *             </li>
 *             <li>
 *                <p>Availability Zone</p>
 *             </li>
 *             <li>
 *                <p>Tenancy</p>
 *             </li>
 *             <li>
 *                <p>Placement group</p>
 *             </li>
 *             <li>
 *                <p>Capacity Reservation end time - <code>At specific time</code> or
 * 						<code>Manually</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveCapacityReservationInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveCapacityReservationInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // MoveCapacityReservationInstancesRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   SourceCapacityReservationId: "STRING_VALUE", // required
 *   DestinationCapacityReservationId: "STRING_VALUE", // required
 *   InstanceCount: Number("int"), // required
 * };
 * const command = new MoveCapacityReservationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // MoveCapacityReservationInstancesResult
 * //   SourceCapacityReservation: { // CapacityReservation
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [ // CapacityAllocations
 * //       { // CapacityAllocation
 * //         AllocationType: "used" || "future",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //     ReservationType: "default" || "capacity-block",
 * //     UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //     CommitmentInfo: { // CapacityReservationCommitmentInfo
 * //       CommittedInstanceCount: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     DeliveryPreference: "fixed" || "incremental",
 * //     CapacityBlockId: "STRING_VALUE",
 * //   },
 * //   DestinationCapacityReservation: {
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [
 * //       {
 * //         AllocationType: "used" || "future",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //     ReservationType: "default" || "capacity-block",
 * //     UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //     CommitmentInfo: {
 * //       CommittedInstanceCount: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     DeliveryPreference: "fixed" || "incremental",
 * //     CapacityBlockId: "STRING_VALUE",
 * //   },
 * //   InstanceCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param MoveCapacityReservationInstancesCommandInput - {@link MoveCapacityReservationInstancesCommandInput}
 * @returns {@link MoveCapacityReservationInstancesCommandOutput}
 * @see {@link MoveCapacityReservationInstancesCommandInput} for command's `input` shape.
 * @see {@link MoveCapacityReservationInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class MoveCapacityReservationInstancesCommand extends $Command
  .classBuilder<
    MoveCapacityReservationInstancesCommandInput,
    MoveCapacityReservationInstancesCommandOutput,
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
  .s("AmazonEC2", "MoveCapacityReservationInstances", {})
  .n("EC2Client", "MoveCapacityReservationInstancesCommand")
  .f(void 0, void 0)
  .ser(se_MoveCapacityReservationInstancesCommand)
  .de(de_MoveCapacityReservationInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MoveCapacityReservationInstancesRequest;
      output: MoveCapacityReservationInstancesResult;
    };
    sdk: {
      input: MoveCapacityReservationInstancesCommandInput;
      output: MoveCapacityReservationInstancesCommandOutput;
    };
  };
}
