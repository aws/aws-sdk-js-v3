// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAntennasRequest, ListAntennasResponse } from "../models/models_0";
import { ListAntennas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAntennasCommand}.
 */
export interface ListAntennasCommandInput extends ListAntennasRequest {}
/**
 * @public
 *
 * The output of {@link ListAntennasCommand}.
 */
export interface ListAntennasCommandOutput extends ListAntennasResponse, __MetadataBearer {}

/**
 * <p>Returns a list of antennas at a specified ground station.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListAntennasCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListAntennasCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListAntennasRequest
 *   groundStationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAntennasCommand(input);
 * const response = await client.send(command);
 * // { // ListAntennasResponse
 * //   antennaList: [ // AntennaList // required
 * //     { // AntennaListItem
 * //       groundStationName: "STRING_VALUE", // required
 * //       antennaName: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAntennasCommandInput - {@link ListAntennasCommandInput}
 * @returns {@link ListAntennasCommandOutput}
 * @see {@link ListAntennasCommandInput} for command's `input` shape.
 * @see {@link ListAntennasCommandOutput} for command's `response` shape.
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
export class ListAntennasCommand extends command<ListAntennasCommandInput, ListAntennasCommandOutput>(
  _ep0,
  _mw0,
  "ListAntennas",
  ListAntennas$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAntennasRequest;
      output: ListAntennasResponse;
    };
    sdk: {
      input: ListAntennasCommandInput;
      output: ListAntennasCommandOutput;
    };
  };
}
