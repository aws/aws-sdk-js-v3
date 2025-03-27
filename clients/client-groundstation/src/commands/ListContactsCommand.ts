// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListContactsRequest, ListContactsResponse } from "../models/models_0";
import { de_ListContactsCommand, se_ListContactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactsCommand}.
 */
export interface ListContactsCommandInput extends ListContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactsCommand}.
 */
export interface ListContactsCommandOutput extends ListContactsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of contacts.</p>
 *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
 *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListContactsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   statusList: [ // StatusList // required
 *     "STRING_VALUE",
 *   ],
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   groundStation: "STRING_VALUE",
 *   satelliteArn: "STRING_VALUE",
 *   missionProfileArn: "STRING_VALUE",
 * };
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactsResponse
 * //   nextToken: "STRING_VALUE",
 * //   contactList: [ // ContactList
 * //     { // ContactData
 * //       contactId: "STRING_VALUE",
 * //       missionProfileArn: "STRING_VALUE",
 * //       satelliteArn: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       prePassStartTime: new Date("TIMESTAMP"),
 * //       postPassEndTime: new Date("TIMESTAMP"),
 * //       groundStation: "STRING_VALUE",
 * //       contactStatus: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       maximumElevation: { // Elevation
 * //         value: Number("double"), // required
 * //         unit: "STRING_VALUE", // required
 * //       },
 * //       region: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       visibilityStartTime: new Date("TIMESTAMP"),
 * //       visibilityEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactsCommandInput - {@link ListContactsCommandInput}
 * @returns {@link ListContactsCommandOutput}
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
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
export class ListContactsCommand extends $Command
  .classBuilder<
    ListContactsCommandInput,
    ListContactsCommandOutput,
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
  .s("GroundStation", "ListContacts", {})
  .n("GroundStationClient", "ListContactsCommand")
  .f(void 0, void 0)
  .ser(se_ListContactsCommand)
  .de(de_ListContactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactsRequest;
      output: ListContactsResponse;
    };
    sdk: {
      input: ListContactsCommandInput;
      output: ListContactsCommandOutput;
    };
  };
}
