// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSubnetCidrReservationsRequest, GetSubnetCidrReservationsResult } from "../models/models_6";
import { GetSubnetCidrReservations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class GetSubnetCidrReservationsCommand extends command<GetSubnetCidrReservationsCommandInput, GetSubnetCidrReservationsCommandOutput>(
  _ep0,
  _mw0,
  "GetSubnetCidrReservations",
  GetSubnetCidrReservations$
) {
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
