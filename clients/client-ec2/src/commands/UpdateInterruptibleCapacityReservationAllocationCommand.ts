// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateInterruptibleCapacityReservationAllocationRequest,
  UpdateInterruptibleCapacityReservationAllocationResult,
} from "../models/models_7";
import { UpdateInterruptibleCapacityReservationAllocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInterruptibleCapacityReservationAllocationCommand}.
 */
export interface UpdateInterruptibleCapacityReservationAllocationCommandInput
  extends UpdateInterruptibleCapacityReservationAllocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInterruptibleCapacityReservationAllocationCommand}.
 */
export interface UpdateInterruptibleCapacityReservationAllocationCommandOutput
  extends UpdateInterruptibleCapacityReservationAllocationResult,
    __MetadataBearer {}

/**
 * <p>
 * 			Modifies the number of instances allocated to an interruptible reservation, allowing you to add more capacity or reclaim capacity to your source Capacity Reservation.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateInterruptibleCapacityReservationAllocationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateInterruptibleCapacityReservationAllocationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UpdateInterruptibleCapacityReservationAllocationRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   TargetInstanceCount: Number("int"), // required
 *   DryRun: true || false,
 * };
 * const command = new UpdateInterruptibleCapacityReservationAllocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInterruptibleCapacityReservationAllocationResult
 * //   InterruptibleCapacityReservationId: "STRING_VALUE",
 * //   SourceCapacityReservationId: "STRING_VALUE",
 * //   InstanceCount: Number("int"),
 * //   TargetInstanceCount: Number("int"),
 * //   Status: "pending" || "active" || "updating" || "canceling" || "canceled" || "failed",
 * //   InterruptionType: "adhoc",
 * // };
 *
 * ```
 *
 * @param UpdateInterruptibleCapacityReservationAllocationCommandInput - {@link UpdateInterruptibleCapacityReservationAllocationCommandInput}
 * @returns {@link UpdateInterruptibleCapacityReservationAllocationCommandOutput}
 * @see {@link UpdateInterruptibleCapacityReservationAllocationCommandInput} for command's `input` shape.
 * @see {@link UpdateInterruptibleCapacityReservationAllocationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class UpdateInterruptibleCapacityReservationAllocationCommand extends $Command
  .classBuilder<
    UpdateInterruptibleCapacityReservationAllocationCommandInput,
    UpdateInterruptibleCapacityReservationAllocationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "UpdateInterruptibleCapacityReservationAllocation", {})
  .n("EC2Client", "UpdateInterruptibleCapacityReservationAllocationCommand")
  .sc(UpdateInterruptibleCapacityReservationAllocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInterruptibleCapacityReservationAllocationRequest;
      output: UpdateInterruptibleCapacityReservationAllocationResult;
    };
    sdk: {
      input: UpdateInterruptibleCapacityReservationAllocationCommandInput;
      output: UpdateInterruptibleCapacityReservationAllocationCommandOutput;
    };
  };
}
