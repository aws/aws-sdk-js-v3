// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/models_0";
import { ListMissionProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMissionProfilesCommand}.
 */
export interface ListMissionProfilesCommandInput extends ListMissionProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListMissionProfilesCommand}.
 */
export interface ListMissionProfilesCommandOutput extends ListMissionProfilesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of mission profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListMissionProfilesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListMissionProfilesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListMissionProfilesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMissionProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListMissionProfilesResponse
 * //   nextToken: "STRING_VALUE",
 * //   missionProfileList: [ // MissionProfileList
 * //     { // MissionProfileListItem
 * //       missionProfileId: "STRING_VALUE",
 * //       missionProfileArn: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMissionProfilesCommandInput - {@link ListMissionProfilesCommandInput}
 * @returns {@link ListMissionProfilesCommandOutput}
 * @see {@link ListMissionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListMissionProfilesCommandOutput} for command's `response` shape.
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
export class ListMissionProfilesCommand extends command<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListMissionProfiles",
  ListMissionProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMissionProfilesRequest;
      output: ListMissionProfilesResponse;
    };
    sdk: {
      input: ListMissionProfilesCommandInput;
      output: ListMissionProfilesCommandOutput;
    };
  };
}
