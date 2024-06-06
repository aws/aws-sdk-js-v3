// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/models_0";
import {
  de_CancelReservedInstancesListingCommand,
  se_CancelReservedInstancesListingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelReservedInstancesListingCommand}.
 */
export interface CancelReservedInstancesListingCommandInput extends CancelReservedInstancesListingRequest {}
/**
 * @public
 *
 * The output of {@link CancelReservedInstancesListingCommand}.
 */
export interface CancelReservedInstancesListingCommandOutput
  extends CancelReservedInstancesListingResult,
    __MetadataBearer {}

/**
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelReservedInstancesListingRequest
 *   ReservedInstancesListingId: "STRING_VALUE", // required
 * };
 * const command = new CancelReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * // { // CancelReservedInstancesListingResult
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
 * @param CancelReservedInstancesListingCommandInput - {@link CancelReservedInstancesListingCommandInput}
 * @returns {@link CancelReservedInstancesListingCommandOutput}
 * @see {@link CancelReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CancelReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CancelReservedInstancesListingCommand extends $Command
  .classBuilder<
    CancelReservedInstancesListingCommandInput,
    CancelReservedInstancesListingCommandOutput,
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
  .s("AmazonEC2", "CancelReservedInstancesListing", {})
  .n("EC2Client", "CancelReservedInstancesListingCommand")
  .f(void 0, void 0)
  .ser(se_CancelReservedInstancesListingCommand)
  .de(de_CancelReservedInstancesListingCommand)
  .build() {}
