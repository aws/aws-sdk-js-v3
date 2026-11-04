// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReservationsRequest, ListReservationsResponse } from "../models/models_1";
import { ListReservations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandInput extends ListReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandOutput extends ListReservationsResponse, __MetadataBearer {}

/**
 * Displays a list of all reservations that have been purchased by this account in the current Amazon Web Services Region. This list includes all reservations in all states (such as active and expired).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListReservationsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListReservationsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListReservationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListReservationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Reservations: [ // __listOfReservation
 * //     { // Reservation
 * //       CurrencyCode: "STRING_VALUE", // required
 * //       Duration: Number("int"), // required
 * //       DurationUnits: "MONTHS", // required
 * //       End: "STRING_VALUE", // required
 * //       OfferingArn: "STRING_VALUE", // required
 * //       OfferingDescription: "STRING_VALUE", // required
 * //       PricePerUnit: "STRING_VALUE", // required
 * //       PriceUnits: "HOURLY", // required
 * //       ReservationArn: "STRING_VALUE", // required
 * //       ReservationName: "STRING_VALUE", // required
 * //       ReservationState: "ACTIVE" || "EXPIRED" || "PROCESSING" || "CANCELED", // required
 * //       ResourceSpecification: { // ResourceSpecification
 * //         ReservedBitrate: Number("int"),
 * //         ResourceType: "Mbps_Outbound_Bandwidth", // required
 * //       },
 * //       Start: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReservationsCommandInput - {@link ListReservationsCommandInput}
 * @returns {@link ListReservationsCommandOutput}
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
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
export class ListReservationsCommand extends command<ListReservationsCommandInput, ListReservationsCommandOutput>(
  _ep0,
  _mw0,
  "ListReservations",
  ListReservations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReservationsRequest;
      output: ListReservationsResponse;
    };
    sdk: {
      input: ListReservationsCommandInput;
      output: ListReservationsCommandOutput;
    };
  };
}
