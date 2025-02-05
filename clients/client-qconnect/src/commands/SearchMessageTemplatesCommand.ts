// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SearchMessageTemplatesRequest,
  SearchMessageTemplatesResponse,
  SearchMessageTemplatesResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_SearchMessageTemplatesCommand, se_SearchMessageTemplatesCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchMessageTemplatesCommand}.
 */
export interface SearchMessageTemplatesCommandInput extends SearchMessageTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link SearchMessageTemplatesCommand}.
 */
export interface SearchMessageTemplatesCommandOutput extends SearchMessageTemplatesResponse, __MetadataBearer {}

/**
 * <p>Searches for Amazon Q in Connect message templates in the specified knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, SearchMessageTemplatesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, SearchMessageTemplatesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QConnectClient(config);
 * const input = { // SearchMessageTemplatesRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   searchExpression: { // MessageTemplateSearchExpression
 *     queries: [ // MessageTemplateQueryFieldList
 *       { // MessageTemplateQueryField
 *         name: "STRING_VALUE", // required
 *         values: [ // MessageTemplateQueryValueList // required
 *           "STRING_VALUE",
 *         ],
 *         operator: "STRING_VALUE", // required
 *         allowFuzziness: true || false,
 *         priority: "STRING_VALUE",
 *       },
 *     ],
 *     filters: [ // MessageTemplateFilterFieldList
 *       { // MessageTemplateFilterField
 *         name: "STRING_VALUE", // required
 *         values: [ // MessageTemplateFilterValueList
 *           "STRING_VALUE",
 *         ],
 *         operator: "STRING_VALUE", // required
 *         includeNoExistence: true || false,
 *       },
 *     ],
 *     orderOnField: { // MessageTemplateOrderField
 *       name: "STRING_VALUE", // required
 *       order: "STRING_VALUE",
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchMessageTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // SearchMessageTemplatesResponse
 * //   results: [ // MessageTemplateSearchResultsList // required
 * //     { // MessageTemplateSearchResultData
 * //       messageTemplateArn: "STRING_VALUE", // required
 * //       messageTemplateId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       channelSubtype: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE", // required
 * //       isActive: true || false,
 * //       versionNumber: Number("long"),
 * //       description: "STRING_VALUE",
 * //       groupingConfiguration: { // GroupingConfiguration
 * //         criteria: "STRING_VALUE",
 * //         values: [ // GroupingValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       language: "STRING_VALUE",
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
 * @param SearchMessageTemplatesCommandInput - {@link SearchMessageTemplatesCommandInput}
 * @returns {@link SearchMessageTemplatesCommandOutput}
 * @see {@link SearchMessageTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchMessageTemplatesCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class SearchMessageTemplatesCommand extends $Command
  .classBuilder<
    SearchMessageTemplatesCommandInput,
    SearchMessageTemplatesCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "SearchMessageTemplates", {})
  .n("QConnectClient", "SearchMessageTemplatesCommand")
  .f(void 0, SearchMessageTemplatesResponseFilterSensitiveLog)
  .ser(se_SearchMessageTemplatesCommand)
  .de(de_SearchMessageTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchMessageTemplatesRequest;
      output: SearchMessageTemplatesResponse;
    };
    sdk: {
      input: SearchMessageTemplatesCommandInput;
      output: SearchMessageTemplatesCommandOutput;
    };
  };
}
