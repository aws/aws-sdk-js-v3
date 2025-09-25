// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReservedInstancesListingRequest, CreateReservedInstancesListingResult } from "../models/models_2";
import { CreateReservedInstancesListing } from "../schemas/schemas_15_ReservedInstances";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReservedInstancesListingCommand}.
 */
export interface CreateReservedInstancesListingCommandInput extends CreateReservedInstancesListingRequest {}
/**
 * @public
 *
 * The output of {@link CreateReservedInstancesListingCommand}.
 */
export interface CreateReservedInstancesListingCommandOutput
  extends CreateReservedInstancesListingResult,
    __MetadataBearer {}

/**
 * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved
 *       Instance Marketplace. You can submit one Standard Reserved Instance listing at a time. To get
 *       a list of your Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p>
 *          <note>
 *             <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace.
 *         Convertible Reserved Instances cannot be sold.</p>
 *          </note>
 *          <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved
 *       Instance capacity that they no longer need with buyers who want to purchase additional
 *       capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work
 *       like any other Reserved Instances.</p>
 *          <p>To sell your Standard Reserved Instances, you must first register as a seller in the
 *       Reserved Instance Marketplace. After completing the registration process, you can create a
 *       Reserved Instance Marketplace listing of some or all of your Standard Reserved Instances, and
 *       specify the upfront price to receive for them. Your Standard Reserved Instance listings then
 *       become available for purchase. To view the details of your Standard Reserved Instance listing,
 *       you can use the <a>DescribeReservedInstancesListings</a> operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Sell in the Reserved Instance
 *         Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateReservedInstancesListingRequest
 *   ReservedInstancesId: "STRING_VALUE", // required
 *   InstanceCount: Number("int"), // required
 *   PriceSchedules: [ // PriceScheduleSpecificationList // required
 *     { // PriceScheduleSpecification
 *       Term: Number("long"),
 *       Price: Number("double"),
 *       CurrencyCode: "USD",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * // { // CreateReservedInstancesListingResult
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
 * @param CreateReservedInstancesListingCommandInput - {@link CreateReservedInstancesListingCommandInput}
 * @returns {@link CreateReservedInstancesListingCommandOutput}
 * @see {@link CreateReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CreateReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateReservedInstancesListingCommand extends $Command
  .classBuilder<
    CreateReservedInstancesListingCommandInput,
    CreateReservedInstancesListingCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateReservedInstancesListing", {})
  .n("EC2Client", "CreateReservedInstancesListingCommand")
  .sc(CreateReservedInstancesListing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReservedInstancesListingRequest;
      output: CreateReservedInstancesListingResult;
    };
    sdk: {
      input: CreateReservedInstancesListingCommandInput;
      output: CreateReservedInstancesListingCommandOutput;
    };
  };
}
