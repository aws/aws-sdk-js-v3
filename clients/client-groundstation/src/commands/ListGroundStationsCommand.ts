// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListGroundStationsRequest, ListGroundStationsResponse } from "../models/models_0";
import { ListGroundStations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroundStationsCommand}.
 */
export interface ListGroundStationsCommandInput extends ListGroundStationsRequest {}
/**
 * @public
 *
 * The output of {@link ListGroundStationsCommand}.
 */
export interface ListGroundStationsCommandOutput extends ListGroundStationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of ground stations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListGroundStationsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListGroundStationsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListGroundStationsRequest
 *   satelliteId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGroundStationsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroundStationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   groundStationList: [ // GroundStationList
 * //     { // GroundStationData
 * //       groundStationId: "STRING_VALUE",
 * //       groundStationName: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGroundStationsCommandInput - {@link ListGroundStationsCommandInput}
 * @returns {@link ListGroundStationsCommandOutput}
 * @see {@link ListGroundStationsCommandInput} for command's `input` shape.
 * @see {@link ListGroundStationsCommandOutput} for command's `response` shape.
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
export class ListGroundStationsCommand extends $Command
  .classBuilder<
    ListGroundStationsCommandInput,
    ListGroundStationsCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "ListGroundStations", {})
  .n("GroundStationClient", "ListGroundStationsCommand")
  .sc(ListGroundStations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroundStationsRequest;
      output: ListGroundStationsResponse;
    };
    sdk: {
      input: ListGroundStationsCommandInput;
      output: ListGroundStationsCommandOutput;
    };
  };
}
