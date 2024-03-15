// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchRoomsRequest, SearchRoomsResponse } from "../models/models_0";
import { de_SearchRoomsCommand, se_SearchRoomsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchRoomsCommand}.
 */
export interface SearchRoomsCommandInput extends SearchRoomsRequest {}
/**
 * @public
 *
 * The output of {@link SearchRoomsCommand}.
 */
export interface SearchRoomsCommandOutput extends SearchRoomsResponse, __MetadataBearer {}

/**
 * <p>Searches rooms and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchRoomsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchRoomsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchRoomsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "ASC" || "DESC", // required
 *     },
 *   ],
 * };
 * const command = new SearchRoomsCommand(input);
 * const response = await client.send(command);
 * // { // SearchRoomsResponse
 * //   Rooms: [ // RoomDataList
 * //     { // RoomData
 * //       RoomArn: "STRING_VALUE",
 * //       RoomName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ProviderCalendarId: "STRING_VALUE",
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchRoomsCommandInput - {@link SearchRoomsCommandInput}
 * @returns {@link SearchRoomsCommandOutput}
 * @see {@link SearchRoomsCommandInput} for command's `input` shape.
 * @see {@link SearchRoomsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class SearchRoomsCommand extends $Command
  .classBuilder<
    SearchRoomsCommandInput,
    SearchRoomsCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "SearchRooms", {})
  .n("AlexaForBusinessClient", "SearchRoomsCommand")
  .f(void 0, void 0)
  .ser(se_SearchRoomsCommand)
  .de(de_SearchRoomsCommand)
  .build() {}
