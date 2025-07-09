// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_6";
import { de_GetCapacityReservationUsageCommand, se_GetCapacityReservationUsageCommand } from "../protocols/Aws_ec2";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetCapacityReservationUsage", {})
  .n("EC2Client", "GetCapacityReservationUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetCapacityReservationUsageCommand)
  .de(de_GetCapacityReservationUsageCommand)
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
