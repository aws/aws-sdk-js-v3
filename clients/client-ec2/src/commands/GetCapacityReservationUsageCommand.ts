// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_5";
import { GetCapacityReservationUsage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandInput extends GetCapacityReservationUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandOutput extends GetCapacityReservationUsageResult, __MetadataBearer {}

/**
 * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is
 * 			shared, it shows usage information for the Capacity Reservation owner and each Amazon Web Services account that is currently using the shared capacity. If the Capacity
 * 			Reservation is not shared, it shows only the Capacity Reservation owner's usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityReservationUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetCapacityReservationUsageRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityReservationUsageResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservationId: "STRING_VALUE",
 * //   InstanceType: "STRING_VALUE",
 * //   TotalInstanceCount: Number("int"),
 * //   AvailableInstanceCount: Number("int"),
 * //   State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported" || "unavailable",
 * //   InstanceUsages: [ // InstanceUsageSet
 * //     { // InstanceUsage
 * //       AccountId: "STRING_VALUE",
 * //       UsedInstanceCount: Number("int"),
 * //     },
 * //   ],
 * //   Interruptible: true || false,
 * //   InterruptibleCapacityAllocation: { // InterruptibleCapacityAllocation
 * //     InstanceCount: Number("int"),
 * //     TargetInstanceCount: Number("int"),
 * //     Status: "pending" || "active" || "updating" || "canceling" || "canceled" || "failed",
 * //     InterruptibleCapacityReservationId: "STRING_VALUE",
 * //     InterruptionType: "adhoc",
 * //   },
 * //   InterruptionInfo: { // InterruptionInfo
 * //     SourceCapacityReservationId: "STRING_VALUE",
 * //     InterruptionType: "adhoc",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityReservationUsageCommandInput - {@link GetCapacityReservationUsageCommandInput}
 * @returns {@link GetCapacityReservationUsageCommandOutput}
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetCapacityReservationUsageCommand extends $Command
  .classBuilder<
    GetCapacityReservationUsageCommandInput,
    GetCapacityReservationUsageCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetCapacityReservationUsage", {})
  .n("EC2Client", "GetCapacityReservationUsageCommand")
  .sc(GetCapacityReservationUsage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityReservationUsageRequest;
      output: GetCapacityReservationUsageResult;
    };
    sdk: {
      input: GetCapacityReservationUsageCommandInput;
      output: GetCapacityReservationUsageCommandOutput;
    };
  };
}
