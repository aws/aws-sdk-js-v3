// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedInstancesListingsRequest, DescribeReservedInstancesListingsResult } from "../models/models_4";
import {
  de_DescribeReservedInstancesListingsCommand,
  se_DescribeReservedInstancesListingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedInstancesListingsCommand}.
 */
export interface DescribeReservedInstancesListingsCommandInput extends DescribeReservedInstancesListingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedInstancesListingsCommand}.
 */
export interface DescribeReservedInstancesListingsCommandOutput
  extends DescribeReservedInstancesListingsResult,
    __MetadataBearer {}

/**
 * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p>
 *          <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 *          <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p>
 *          <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *          structures, might vary. Applications should not assume the elements appear in a
 *          particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesListingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesListingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeReservedInstancesListingsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ReservedInstancesId: "STRING_VALUE",
 *   ReservedInstancesListingId: "STRING_VALUE",
 * };
 * const command = new DescribeReservedInstancesListingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedInstancesListingsResult
 * //   ReservedInstancesListings: [ // ReservedInstancesListingList
 * //     { // ReservedInstancesListing
 * //       ClientToken: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       InstanceCounts: [ // InstanceCountList
 * //         { // InstanceCount
 * //           InstanceCount: Number("int"),
 * //           State: "available" || "sold" || "cancelled" || "pending",
 * //         },
 * //       ],
 * //       PriceSchedules: [ // PriceScheduleList
 * //         { // PriceSchedule
 * //           Active: true || false,
 * //           CurrencyCode: "USD",
 * //           Price: Number("double"),
 * //           Term: Number("long"),
 * //         },
 * //       ],
 * //       ReservedInstancesId: "STRING_VALUE",
 * //       ReservedInstancesListingId: "STRING_VALUE",
 * //       Status: "active" || "pending" || "cancelled" || "closed",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UpdateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedInstancesListingsCommandInput - {@link DescribeReservedInstancesListingsCommandInput}
 * @returns {@link DescribeReservedInstancesListingsCommandOutput}
 * @see {@link DescribeReservedInstancesListingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesListingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeReservedInstancesListingsCommand extends $Command
  .classBuilder<
    DescribeReservedInstancesListingsCommandInput,
    DescribeReservedInstancesListingsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeReservedInstancesListings", {})
  .n("EC2Client", "DescribeReservedInstancesListingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedInstancesListingsCommand)
  .de(de_DescribeReservedInstancesListingsCommand)
  .build() {}
