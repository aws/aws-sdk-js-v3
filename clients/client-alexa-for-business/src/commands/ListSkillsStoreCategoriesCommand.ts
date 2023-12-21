// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSkillsStoreCategoriesRequest, ListSkillsStoreCategoriesResponse } from "../models/models_0";
import { de_ListSkillsStoreCategoriesCommand, se_ListSkillsStoreCategoriesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSkillsStoreCategoriesCommand}.
 */
export interface ListSkillsStoreCategoriesCommandInput extends ListSkillsStoreCategoriesRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsStoreCategoriesCommand}.
 */
export interface ListSkillsStoreCategoriesCommandOutput extends ListSkillsStoreCategoriesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists all categories in the Alexa skill store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreCategoriesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSkillsStoreCategoriesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsStoreCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListSkillsStoreCategoriesResponse
 * //   CategoryList: [ // CategoryList
 * //     { // Category
 * //       CategoryId: Number("long"),
 * //       CategoryName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSkillsStoreCategoriesCommandInput - {@link ListSkillsStoreCategoriesCommandInput}
 * @returns {@link ListSkillsStoreCategoriesCommandOutput}
 * @see {@link ListSkillsStoreCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreCategoriesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSkillsStoreCategoriesCommand extends $Command
  .classBuilder<
    ListSkillsStoreCategoriesCommandInput,
    ListSkillsStoreCategoriesCommandOutput,
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
  .s("AlexaForBusiness", "ListSkillsStoreCategories", {})
  .n("AlexaForBusinessClient", "ListSkillsStoreCategoriesCommand")
  .f(void 0, void 0)
  .ser(se_ListSkillsStoreCategoriesCommand)
  .de(de_ListSkillsStoreCategoriesCommand)
  .build() {}
