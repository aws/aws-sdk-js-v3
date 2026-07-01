// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGroundStationReservationsRequest, ListGroundStationReservationsResponse } from "../models/models_0";
import { ListGroundStationReservations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGroundStationReservationsCommand}.
 */
export interface ListGroundStationReservationsCommandInput extends ListGroundStationReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListGroundStationReservationsCommand}.
 */
export interface ListGroundStationReservationsCommandOutput extends ListGroundStationReservationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of reservations for a specified ground station.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListGroundStationReservationsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListGroundStationReservationsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListGroundStationReservationsRequest
 *   groundStationId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   reservationTypes: [ // ReservationTypeFilterList
 *     "MAINTENANCE" || "CONTACT",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGroundStationReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroundStationReservationsResponse
 * //   reservationList: [ // GroundStationReservationList // required
 * //     { // GroundStationReservationListItem
 * //       reservationType: "MAINTENANCE" || "CONTACT", // required
 * //       groundStationId: "STRING_VALUE", // required
 * //       antennaName: "STRING_VALUE", // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //       reservationDetails: { // ReservationDetails Union: only one key present
 * //         maintenance: { // MaintenanceReservationDetails
 * //           maintenanceType: "PLANNED" || "UNPLANNED", // required
 * //         },
 * //         contact: { // ContactReservationDetails
 * //           contactId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroundStationReservationsCommandInput - {@link ListGroundStationReservationsCommandInput}
 * @returns {@link ListGroundStationReservationsCommandOutput}
 * @see {@link ListGroundStationReservationsCommandInput} for command's `input` shape.
 * @see {@link ListGroundStationReservationsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class ListGroundStationReservationsCommand extends command<ListGroundStationReservationsCommandInput, ListGroundStationReservationsCommandOutput>(
  _ep0,
  _mw0,
  "ListGroundStationReservations",
  ListGroundStationReservations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroundStationReservationsRequest;
      output: ListGroundStationReservationsResponse;
    };
    sdk: {
      input: ListGroundStationReservationsCommandInput;
      output: ListGroundStationReservationsCommandOutput;
    };
  };
}
