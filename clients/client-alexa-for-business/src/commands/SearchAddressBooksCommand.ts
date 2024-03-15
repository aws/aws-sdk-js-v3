// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchAddressBooksRequest, SearchAddressBooksResponse } from "../models/models_0";
import { de_SearchAddressBooksCommand, se_SearchAddressBooksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchAddressBooksCommand}.
 */
export interface SearchAddressBooksCommandInput extends SearchAddressBooksRequest {}
/**
 * @public
 *
 * The output of {@link SearchAddressBooksCommand}.
 */
export interface SearchAddressBooksCommandOutput extends SearchAddressBooksResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Searches address books and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchAddressBooksCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchAddressBooksCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchAddressBooksRequest
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchAddressBooksCommand(input);
 * const response = await client.send(command);
 * // { // SearchAddressBooksResponse
 * //   AddressBooks: [ // AddressBookDataList
 * //     { // AddressBookData
 * //       AddressBookArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchAddressBooksCommandInput - {@link SearchAddressBooksCommandInput}
 * @returns {@link SearchAddressBooksCommandOutput}
 * @see {@link SearchAddressBooksCommandInput} for command's `input` shape.
 * @see {@link SearchAddressBooksCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchAddressBooksCommand extends $Command
  .classBuilder<
    SearchAddressBooksCommandInput,
    SearchAddressBooksCommandOutput,
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
  .s("AlexaForBusiness", "SearchAddressBooks", {})
  .n("AlexaForBusinessClient", "SearchAddressBooksCommand")
  .f(void 0, void 0)
  .ser(se_SearchAddressBooksCommand)
  .de(de_SearchAddressBooksCommand)
  .build() {}
