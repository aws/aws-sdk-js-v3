// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchQuickResponsesRequest, SearchQuickResponsesResponse } from "../models/models_0";
import { SearchQuickResponses$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchQuickResponsesCommand}.
 */
export interface SearchQuickResponsesCommandInput extends SearchQuickResponsesRequest {}
/**
 * @public
 *
 * The output of {@link SearchQuickResponsesCommand}.
 */
export interface SearchQuickResponsesCommandOutput extends SearchQuickResponsesResponse, __MetadataBearer {}

/**
 * <p>Searches existing Wisdom quick responses in a Wisdom knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, SearchQuickResponsesCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, SearchQuickResponsesCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // SearchQuickResponsesRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   searchExpression: { // QuickResponseSearchExpression
 *     queries: [ // QuickResponseQueryFieldList
 *       { // QuickResponseQueryField
 *         name: "STRING_VALUE", // required
 *         values: [ // QuickResponseQueryValueList // required
 *           "STRING_VALUE",
 *         ],
 *         operator: "STRING_VALUE", // required
 *         allowFuzziness: true || false,
 *         priority: "STRING_VALUE",
 *       },
 *     ],
 *     filters: [ // QuickResponseFilterFieldList
 *       { // QuickResponseFilterField
 *         name: "STRING_VALUE", // required
 *         values: [ // QuickResponseFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         operator: "STRING_VALUE", // required
 *         includeNoExistence: true || false,
 *       },
 *     ],
 *     orderOnField: { // QuickResponseOrderField
 *       name: "STRING_VALUE", // required
 *       order: "STRING_VALUE",
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   attributes: { // ContactAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SearchQuickResponsesCommand(input);
 * const response = await client.send(command);
 * // { // SearchQuickResponsesResponse
 * //   results: [ // QuickResponseSearchResultsList // required
 * //     { // QuickResponseSearchResultData
 * //       quickResponseArn: "STRING_VALUE", // required
 * //       quickResponseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       contents: { // QuickResponseContents
 * //         plainText: { // QuickResponseContentProvider Union: only one key present
 * //           content: "STRING_VALUE",
 * //         },
 * //         markdown: {//  Union: only one key present
 * //           content: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       isActive: true || false, // required
 * //       description: "STRING_VALUE",
 * //       groupingConfiguration: { // GroupingConfiguration
 * //         criteria: "STRING_VALUE",
 * //         values: [ // GroupingValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       shortcutKey: "STRING_VALUE",
 * //       lastModifiedBy: "STRING_VALUE",
 * //       channels: [ // Channels
 * //         "STRING_VALUE",
 * //       ],
 * //       language: "STRING_VALUE",
 * //       attributesNotInterpolated: [ // ContactAttributeKeys
 * //         "STRING_VALUE",
 * //       ],
 * //       attributesInterpolated: [
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchQuickResponsesCommandInput - {@link SearchQuickResponsesCommandInput}
 * @returns {@link SearchQuickResponsesCommandOutput}
 * @see {@link SearchQuickResponsesCommandInput} for command's `input` shape.
 * @see {@link SearchQuickResponsesCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request reached the service more than 15 minutes after the date stamp on the request
 *       or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or
 *       the date stamp on the request is more than 15 minutes in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class SearchQuickResponsesCommand extends $Command
  .classBuilder<
    SearchQuickResponsesCommandInput,
    SearchQuickResponsesCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "SearchQuickResponses", {})
  .n("WisdomClient", "SearchQuickResponsesCommand")
  .sc(SearchQuickResponses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchQuickResponsesRequest;
      output: SearchQuickResponsesResponse;
    };
    sdk: {
      input: SearchQuickResponsesCommandInput;
      output: SearchQuickResponsesCommandOutput;
    };
  };
}
