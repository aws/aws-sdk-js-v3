// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeReservationRequest, DescribeReservationResponse } from "../models/models_0";
import { de_DescribeReservationCommand, se_DescribeReservationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservationCommand}.
 */
export interface DescribeReservationCommandInput extends DescribeReservationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservationCommand}.
 */
export interface DescribeReservationCommandOutput extends DescribeReservationResponse, __MetadataBearer {}

/**
 * Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeReservationCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeReservationCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeReservationRequest
 *   ReservationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeReservationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservationResponse
 * //   Reservation: { // Reservation
 * //     CurrencyCode: "STRING_VALUE", // required
 * //     Duration: Number("int"), // required
 * //     DurationUnits: "MONTHS", // required
 * //     End: "STRING_VALUE", // required
 * //     OfferingArn: "STRING_VALUE", // required
 * //     OfferingDescription: "STRING_VALUE", // required
 * //     PricePerUnit: "STRING_VALUE", // required
 * //     PriceUnits: "HOURLY", // required
 * //     ReservationArn: "STRING_VALUE", // required
 * //     ReservationName: "STRING_VALUE", // required
 * //     ReservationState: "ACTIVE" || "EXPIRED" || "PROCESSING" || "CANCELED", // required
 * //     ResourceSpecification: { // ResourceSpecification
 * //       ReservedBitrate: Number("int"),
 * //       ResourceType: "Mbps_Outbound_Bandwidth", // required
 * //     },
 * //     Start: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReservationCommandInput - {@link DescribeReservationCommandInput}
 * @returns {@link DescribeReservationCommandOutput}
 * @see {@link DescribeReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeReservationCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class DescribeReservationCommand extends $Command
  .classBuilder<
    DescribeReservationCommandInput,
    DescribeReservationCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "DescribeReservation", {})
  .n("MediaConnectClient", "DescribeReservationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservationCommand)
  .de(de_DescribeReservationCommand)
  .build() {}
