// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchContentRequest, SearchContentResponse } from "../models/models_0";
import { de_SearchContentCommand, se_SearchContentCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchContentCommand}.
 */
export interface SearchContentCommandInput extends SearchContentRequest {}
/**
 * @public
 *
 * The output of {@link SearchContentCommand}.
 */
export interface SearchContentCommandOutput extends SearchContentResponse, __MetadataBearer {}

/**
 * <p>Searches for content in a specified knowledge base. Can be used to get a specific content
 *       resource by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, SearchContentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, SearchContentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // SearchContentRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   searchExpression: { // SearchExpression
 *     filters: [ // FilterList // required
 *       { // Filter
 *         field: "STRING_VALUE", // required
 *         operator: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new SearchContentCommand(input);
 * const response = await client.send(command);
 * // { // SearchContentResponse
 * //   contentSummaries: [ // ContentSummaryList // required
 * //     { // ContentSummary
 * //       contentArn: "STRING_VALUE", // required
 * //       contentId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       revisionId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       metadata: { // ContentMetadata // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
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
 * @param SearchContentCommandInput - {@link SearchContentCommandInput}
 * @returns {@link SearchContentCommandOutput}
 * @see {@link SearchContentCommandInput} for command's `input` shape.
 * @see {@link SearchContentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class SearchContentCommand extends $Command
  .classBuilder<
    SearchContentCommandInput,
    SearchContentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "SearchContent", {})
  .n("QConnectClient", "SearchContentCommand")
  .f(void 0, void 0)
  .ser(se_SearchContentCommand)
  .de(de_SearchContentCommand)
  .build() {}
