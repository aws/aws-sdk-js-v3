// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  SearchContactsRequest,
  SearchContactsResponse,
  SearchContactsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchContactsCommand, se_SearchContactsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandInput extends SearchContactsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandOutput extends SearchContactsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Searches contacts and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchContactsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchContactsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchContactsRequest
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
 * const command = new SearchContactsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactsResponse
 * //   Contacts: [ // ContactDataList
 * //     { // ContactData
 * //       ContactArn: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //       PhoneNumbers: [ // PhoneNumberList
 * //         { // PhoneNumber
 * //           Number: "STRING_VALUE", // required
 * //           Type: "MOBILE" || "WORK" || "HOME", // required
 * //         },
 * //       ],
 * //       SipAddresses: [ // SipAddressList
 * //         { // SipAddress
 * //           Uri: "STRING_VALUE", // required
 * //           Type: "WORK", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchContactsCommandInput - {@link SearchContactsCommandInput}
 * @returns {@link SearchContactsCommandOutput}
 * @see {@link SearchContactsCommandInput} for command's `input` shape.
 * @see {@link SearchContactsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchContactsCommand extends $Command
  .classBuilder<
    SearchContactsCommandInput,
    SearchContactsCommandOutput,
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
  .s("AlexaForBusiness", "SearchContacts", {})
  .n("AlexaForBusinessClient", "SearchContactsCommand")
  .f(void 0, SearchContactsResponseFilterSensitiveLog)
  .ser(se_SearchContactsCommand)
  .de(de_SearchContactsCommand)
  .build() {}
