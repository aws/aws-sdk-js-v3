// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCapacityReservationBillingRequestsRequest,
  DescribeCapacityReservationBillingRequestsResult,
} from "../models/models_3";
import {
  de_DescribeCapacityReservationBillingRequestsCommand,
  se_DescribeCapacityReservationBillingRequestsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationBillingRequestsCommand}.
 */
export interface DescribeCapacityReservationBillingRequestsCommandInput
  extends DescribeCapacityReservationBillingRequestsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationBillingRequestsCommand}.
 */
export interface DescribeCapacityReservationBillingRequestsCommandOutput
  extends DescribeCapacityReservationBillingRequestsResult,
    __MetadataBearer {}

/**
 * <p>Describes a request to assign the billing of the unused capacity of a Capacity
 * 			Reservation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/transfer-billing.html"> Billing assignment for shared
 * 					Amazon EC2 Capacity Reservations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationBillingRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationBillingRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityReservationBillingRequestsRequest
 *   CapacityReservationIds: [ // CapacityReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   Role: "odcr-owner" || "unused-reservation-billing-owner", // required
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
 * const command = new DescribeCapacityReservationBillingRequestsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityReservationBillingRequestsResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservationBillingRequests: [ // CapacityReservationBillingRequestSet
 * //     { // CapacityReservationBillingRequest
 * //       CapacityReservationId: "STRING_VALUE",
 * //       RequestedBy: "STRING_VALUE",
 * //       UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       Status: "pending" || "accepted" || "rejected" || "cancelled" || "revoked" || "expired",
 * //       StatusMessage: "STRING_VALUE",
 * //       CapacityReservationInfo: { // CapacityReservationInfo
 * //         InstanceType: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         Tenancy: "default" || "dedicated",
 * //         AvailabilityZoneId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCapacityReservationBillingRequestsCommandInput - {@link DescribeCapacityReservationBillingRequestsCommandInput}
 * @returns {@link DescribeCapacityReservationBillingRequestsCommandOutput}
 * @see {@link DescribeCapacityReservationBillingRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationBillingRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityReservationBillingRequestsCommand extends $Command
  .classBuilder<
    DescribeCapacityReservationBillingRequestsCommandInput,
    DescribeCapacityReservationBillingRequestsCommandOutput,
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
  .s("AmazonEC2", "DescribeCapacityReservationBillingRequests", {})
  .n("EC2Client", "DescribeCapacityReservationBillingRequestsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityReservationBillingRequestsCommand)
  .de(de_DescribeCapacityReservationBillingRequestsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityReservationBillingRequestsRequest;
      output: DescribeCapacityReservationBillingRequestsResult;
    };
    sdk: {
      input: DescribeCapacityReservationBillingRequestsCommandInput;
      output: DescribeCapacityReservationBillingRequestsCommandOutput;
    };
  };
}
