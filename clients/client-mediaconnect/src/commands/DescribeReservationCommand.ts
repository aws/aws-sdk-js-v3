// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeReservationRequest, DescribeReservationResponse } from "../models/models_0";
import { DescribeReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeReservationCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeReservationCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class DescribeReservationCommand extends command<DescribeReservationCommandInput, DescribeReservationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeReservation",
  DescribeReservation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservationRequest;
      output: DescribeReservationResponse;
    };
    sdk: {
      input: DescribeReservationCommandInput;
      output: DescribeReservationCommandOutput;
    };
  };
}
