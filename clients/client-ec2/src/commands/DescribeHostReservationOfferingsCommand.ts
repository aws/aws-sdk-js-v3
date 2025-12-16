// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeHostReservationOfferingsRequest,
  DescribeHostReservationOfferingsResult,
} from "../models/models_3";
import { DescribeHostReservationOfferings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHostReservationOfferingsCommand}.
 */
export interface DescribeHostReservationOfferingsCommandInput extends DescribeHostReservationOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostReservationOfferingsCommand}.
 */
export interface DescribeHostReservationOfferingsCommandOutput
  extends DescribeHostReservationOfferingsResult,
    __MetadataBearer {}

/**
 * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
 *          <p>The results describe all of the Dedicated Host reservation offerings, including
 *             offerings that might not match the instance family and Region of your Dedicated Hosts.
 *             When purchasing an offering, ensure that the instance family and Region of the offering
 *             matches that of the Dedicated Hosts with which it is to be associated. For more
 *             information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts</a>
 *             in the <i>Amazon EC2 User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeHostReservationOfferingsRequest
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxDuration: Number("int"),
 *   MaxResults: Number("int"),
 *   MinDuration: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   OfferingId: "STRING_VALUE",
 * };
 * const command = new DescribeHostReservationOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostReservationOfferingsResult
 * //   NextToken: "STRING_VALUE",
 * //   OfferingSet: [ // HostOfferingSet
 * //     { // HostOffering
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       UpfrontPrice: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHostReservationOfferingsCommandInput - {@link DescribeHostReservationOfferingsCommandInput}
 * @returns {@link DescribeHostReservationOfferingsCommandOutput}
 * @see {@link DescribeHostReservationOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeHostReservationOfferingsCommand extends $Command
  .classBuilder<
    DescribeHostReservationOfferingsCommandInput,
    DescribeHostReservationOfferingsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeHostReservationOfferings", {})
  .n("EC2Client", "DescribeHostReservationOfferingsCommand")
  .sc(DescribeHostReservationOfferings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHostReservationOfferingsRequest;
      output: DescribeHostReservationOfferingsResult;
    };
    sdk: {
      input: DescribeHostReservationOfferingsCommandInput;
      output: DescribeHostReservationOfferingsCommandOutput;
    };
  };
}
