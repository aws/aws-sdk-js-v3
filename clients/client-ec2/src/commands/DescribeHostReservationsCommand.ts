// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHostReservationsRequest, DescribeHostReservationsResult } from "../models/models_4";
import { DescribeHostReservations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHostReservationsCommand}.
 */
export interface DescribeHostReservationsCommandInput extends DescribeHostReservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostReservationsCommand}.
 */
export interface DescribeHostReservationsCommandOutput extends DescribeHostReservationsResult, __MetadataBearer {}

/**
 * <p>Describes reservations that are associated with Dedicated Hosts in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeHostReservationsRequest
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   HostReservationIdSet: [ // HostReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHostReservationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostReservationsResult
 * //   HostReservationSet: [ // HostReservationSet
 * //     { // HostReservation
 * //       Count: Number("int"),
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       End: new Date("TIMESTAMP"),
 * //       HostIdSet: [ // ResponseHostIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       HostReservationId: "STRING_VALUE",
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       Start: new Date("TIMESTAMP"),
 * //       State: "active" || "expired" || "cancelled" || "scheduled" || "pending" || "failed" || "delayed" || "unsupported" || "payment-pending" || "payment-failed" || "retired",
 * //       UpfrontPrice: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHostReservationsCommandInput - {@link DescribeHostReservationsCommandInput}
 * @returns {@link DescribeHostReservationsCommandOutput}
 * @see {@link DescribeHostReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeHostReservationsCommand extends $Command
  .classBuilder<
    DescribeHostReservationsCommandInput,
    DescribeHostReservationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeHostReservations", {})
  .n("EC2Client", "DescribeHostReservationsCommand")
  .sc(DescribeHostReservations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHostReservationsRequest;
      output: DescribeHostReservationsResult;
    };
    sdk: {
      input: DescribeHostReservationsCommandInput;
      output: DescribeHostReservationsCommandOutput;
    };
  };
}
