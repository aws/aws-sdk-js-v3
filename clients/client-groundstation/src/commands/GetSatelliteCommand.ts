// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetSatelliteRequest, GetSatelliteResponse } from "../models/models_0";
import { GetSatellite } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSatelliteCommand}.
 */
export interface GetSatelliteCommandInput extends GetSatelliteRequest {}
/**
 * @public
 *
 * The output of {@link GetSatelliteCommand}.
 */
export interface GetSatelliteCommandOutput extends GetSatelliteResponse, __MetadataBearer {}

/**
 * <p>Returns a satellite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetSatelliteCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetSatelliteCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // GetSatelliteRequest
 *   satelliteId: "STRING_VALUE", // required
 * };
 * const command = new GetSatelliteCommand(input);
 * const response = await client.send(command);
 * // { // GetSatelliteResponse
 * //   satelliteId: "STRING_VALUE",
 * //   satelliteArn: "STRING_VALUE",
 * //   noradSatelliteID: Number("int"),
 * //   groundStations: [ // GroundStationIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   currentEphemeris: { // EphemerisMetaData
 * //     source: "CUSTOMER_PROVIDED" || "SPACE_TRACK", // required
 * //     ephemerisId: "STRING_VALUE",
 * //     epoch: new Date("TIMESTAMP"),
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSatelliteCommandInput - {@link GetSatelliteCommandInput}
 * @returns {@link GetSatelliteCommandOutput}
 * @see {@link GetSatelliteCommandInput} for command's `input` shape.
 * @see {@link GetSatelliteCommandOutput} for command's `response` shape.
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
export class GetSatelliteCommand extends $Command
  .classBuilder<
    GetSatelliteCommandInput,
    GetSatelliteCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "GetSatellite", {})
  .n("GroundStationClient", "GetSatelliteCommand")
  .sc(GetSatellite)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSatelliteRequest;
      output: GetSatelliteResponse;
    };
    sdk: {
      input: GetSatelliteCommandInput;
      output: GetSatelliteCommandOutput;
    };
  };
}
