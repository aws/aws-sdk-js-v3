// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/models_0";
import { de_ListMissionProfilesCommand, se_ListMissionProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class ListMissionProfilesCommand extends $Command
  .classBuilder<
    ListMissionProfilesCommandInput,
    ListMissionProfilesCommandOutput,
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
  .s("GroundStation", "ListMissionProfiles", {})
  .n("GroundStationClient", "ListMissionProfilesCommand")
  .f(void 0, void 0)
  .ser(se_ListMissionProfilesCommand)
  .de(de_ListMissionProfilesCommand)
  .build() {
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
