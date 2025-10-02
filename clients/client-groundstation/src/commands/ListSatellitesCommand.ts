// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListSatellitesRequest, ListSatellitesResponse } from "../models/models_0";
import { de_ListSatellitesCommand, se_ListSatellitesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of satellites.</p>
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
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class ListSatellitesCommand extends $Command
  .classBuilder<
    ListSatellitesCommandInput,
    ListSatellitesCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "ListSatellites", {})
  .n("GroundStationClient", "ListSatellitesCommand")
  .f(void 0, void 0)
  .ser(se_ListSatellitesCommand)
  .de(de_ListSatellitesCommand)
  .build() {
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
