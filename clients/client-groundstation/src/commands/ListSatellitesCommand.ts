// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSatellitesRequest, ListSatellitesResponse } from "../models/models_0";
import { ListSatellites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSatellitesCommand}.
 */
export interface ListSatellitesCommandInput extends ListSatellitesRequest {}
/**
 * @public
 *
 * The output of {@link ListSatellitesCommand}.
 */
export interface ListSatellitesCommandOutput extends ListSatellitesResponse, __MetadataBearer {}

/**
 * Returns a list of satellites.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListSatellitesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListSatellitesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListSatellitesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSatellitesCommand(input);
 * const response = await client.send(command);
 * // { // ListSatellitesResponse
 * //   nextToken: "STRING_VALUE",
 * //   satellites: [ // SatelliteList
 * //     { // SatelliteListItem
 * //       satelliteId: "STRING_VALUE",
 * //       satelliteArn: "STRING_VALUE",
 * //       noradSatelliteID: Number("int"),
 * //       groundStations: [ // GroundStationIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       currentEphemeris: { // EphemerisMetaData
 * //         source: "CUSTOMER_PROVIDED" || "SPACE_TRACK", // required
 * //         ephemerisId: "STRING_VALUE",
 * //         epoch: new Date("TIMESTAMP"),
 * //         name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSatellitesCommandInput - {@link ListSatellitesCommandInput}
 * @returns {@link ListSatellitesCommandOutput}
 * @see {@link ListSatellitesCommandInput} for command's `input` shape.
 * @see {@link ListSatellitesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Dependency encountered an error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link GroundStationServiceException}
 *
 * Base exception class for all service exceptions from GroundStation service.
 *
 * @public
 */
export class ListSatellitesCommand extends command<ListSatellitesCommandInput, ListSatellitesCommandOutput>(
  _ep0,
  _mw0,
  "ListSatellites",
  ListSatellites$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSatellitesRequest;
      output: ListSatellitesResponse;
    };
    sdk: {
      input: ListSatellitesCommandInput;
      output: ListSatellitesCommandOutput;
    };
  };
}
