// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/models_0";
import { de_SearchProfilesCommand, se_SearchProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchProfilesCommand}.
 */
export interface SearchProfilesCommandInput extends SearchProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchProfilesCommand}.
 */
export interface SearchProfilesCommandOutput extends SearchProfilesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches room profiles and lists the ones that meet a set of filter
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchProfilesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchProfilesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchProfilesRequest
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
 * const command = new SearchProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchProfilesResponse
 * //   Profiles: [ // ProfileDataList
 * //     { // ProfileData
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       Address: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       DistanceUnit: "METRIC" || "IMPERIAL",
 * //       TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 * //       WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 * //       Locale: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchProfilesCommandInput - {@link SearchProfilesCommandInput}
 * @returns {@link SearchProfilesCommandOutput}
 * @see {@link SearchProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchProfilesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchProfilesCommand extends $Command
  .classBuilder<
    SearchProfilesCommandInput,
    SearchProfilesCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "SearchProfiles", {})
  .n("AlexaForBusinessClient", "SearchProfilesCommand")
  .f(void 0, void 0)
  .ser(se_SearchProfilesCommand)
  .de(de_SearchProfilesCommand)
  .build() {}
