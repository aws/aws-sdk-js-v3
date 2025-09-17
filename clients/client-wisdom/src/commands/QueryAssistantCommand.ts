// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  QueryAssistantRequest,
  QueryAssistantRequestFilterSensitiveLog,
  QueryAssistantResponse,
  QueryAssistantResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_QueryAssistantCommand, se_QueryAssistantCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandInput extends QueryAssistantRequest {}
/**
 * @public
 *
 * The output of {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandOutput extends QueryAssistantResponse, __MetadataBearer {}

/**
 * <p>Performs a manual search against the specified assistant. To retrieve recommendations for
 *       an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
 *     </p>
 *
 * @deprecated QueryAssistant API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, QueryAssistantCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, QueryAssistantCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // QueryAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 *   queryText: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new QueryAssistantCommand(input);
 * const response = await client.send(command);
 * // { // QueryAssistantResponse
 * //   results: [ // QueryResultsList // required
 * //     { // ResultData
 * //       resultId: "STRING_VALUE", // required
 * //       document: { // Document
 * //         contentReference: { // ContentReference
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           contentArn: "STRING_VALUE",
 * //           contentId: "STRING_VALUE",
 * //         },
 * //         title: { // DocumentText
 * //           text: "STRING_VALUE",
 * //           highlights: [ // Highlights
 * //             { // Highlight
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         excerpt: {
 * //           text: "STRING_VALUE",
 * //           highlights: [
 * //             {
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       relevanceScore: Number("double"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryAssistantCommandInput - {@link QueryAssistantCommandInput}
 * @returns {@link QueryAssistantCommandOutput}
 * @see {@link QueryAssistantCommandInput} for command's `input` shape.
 * @see {@link QueryAssistantCommandOutput} for command's `response` shape.
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
export class QueryAssistantCommand extends $Command
  .classBuilder<
    QueryAssistantCommandInput,
    QueryAssistantCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "QueryAssistant", {})
  .n("WisdomClient", "QueryAssistantCommand")
  .f(QueryAssistantRequestFilterSensitiveLog, QueryAssistantResponseFilterSensitiveLog)
  .ser(se_QueryAssistantCommand)
  .de(de_QueryAssistantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryAssistantRequest;
      output: QueryAssistantResponse;
    };
    sdk: {
      input: QueryAssistantCommandInput;
      output: QueryAssistantCommandOutput;
    };
  };
}
