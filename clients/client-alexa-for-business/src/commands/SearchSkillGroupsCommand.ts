// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchSkillGroupsRequest, SearchSkillGroupsResponse } from "../models/models_0";
import { de_SearchSkillGroupsCommand, se_SearchSkillGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchSkillGroupsCommand}.
 */
export interface SearchSkillGroupsCommandInput extends SearchSkillGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchSkillGroupsCommand}.
 */
export interface SearchSkillGroupsCommandOutput extends SearchSkillGroupsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches skill groups and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchSkillGroupsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchSkillGroupsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchSkillGroupsRequest
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
 * const command = new SearchSkillGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchSkillGroupsResponse
 * //   SkillGroups: [ // SkillGroupDataList
 * //     { // SkillGroupData
 * //       SkillGroupArn: "STRING_VALUE",
 * //       SkillGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchSkillGroupsCommandInput - {@link SearchSkillGroupsCommandInput}
 * @returns {@link SearchSkillGroupsCommandOutput}
 * @see {@link SearchSkillGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchSkillGroupsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchSkillGroupsCommand extends $Command
  .classBuilder<
    SearchSkillGroupsCommandInput,
    SearchSkillGroupsCommandOutput,
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
  .s("AlexaForBusiness", "SearchSkillGroups", {})
  .n("AlexaForBusinessClient", "SearchSkillGroupsCommand")
  .f(void 0, void 0)
  .ser(se_SearchSkillGroupsCommand)
  .de(de_SearchSkillGroupsCommand)
  .build() {}
