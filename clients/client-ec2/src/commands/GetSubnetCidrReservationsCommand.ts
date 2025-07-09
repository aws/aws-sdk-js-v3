// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSubnetCidrReservationsRequest, GetSubnetCidrReservationsResult } from "../models/models_7";
import { de_GetSubnetCidrReservationsCommand, se_GetSubnetCidrReservationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubnetCidrReservationsCommand}.
 */
export interface GetSubnetCidrReservationsCommandInput extends GetSubnetCidrReservationsRequest {}
/**
 * @public
 *
 * The output of {@link GetSubnetCidrReservationsCommand}.
 */
export interface GetSubnetCidrReservationsCommandOutput extends GetSubnetCidrReservationsResult, __MetadataBearer {}

/**
 * <p>Gets information about the subnet CIDR reservations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSubnetCidrReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSubnetCidrReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSubnetCidrReservationsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SubnetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetSubnetCidrReservationsCommand(input);
 * const response = await client.send(command);
 * // { // GetSubnetCidrReservationsResult
 * //   SubnetIpv4CidrReservations: [ // SubnetCidrReservationList
 * //     { // SubnetCidrReservation
 * //       SubnetCidrReservationId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       ReservationType: "prefix" || "explicit",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   SubnetIpv6CidrReservations: [
 * //     {
 * //       SubnetCidrReservationId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       ReservationType: "prefix" || "explicit",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: [
 * //         {
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
 * @param GetSubnetCidrReservationsCommandInput - {@link GetSubnetCidrReservationsCommandInput}
 * @returns {@link GetSubnetCidrReservationsCommandOutput}
 * @see {@link GetSubnetCidrReservationsCommandInput} for command's `input` shape.
 * @see {@link GetSubnetCidrReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetSubnetCidrReservationsCommand extends $Command
  .classBuilder<
    GetSubnetCidrReservationsCommandInput,
    GetSubnetCidrReservationsCommandOutput,
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
  .s("AmazonEC2", "GetSubnetCidrReservations", {})
  .n("EC2Client", "GetSubnetCidrReservationsCommand")
  .f(void 0, void 0)
  .ser(se_GetSubnetCidrReservationsCommand)
  .de(de_GetSubnetCidrReservationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubnetCidrReservationsRequest;
      output: GetSubnetCidrReservationsResult;
    };
    sdk: {
      input: GetSubnetCidrReservationsCommandInput;
      output: GetSubnetCidrReservationsCommandOutput;
    };
  };
}
