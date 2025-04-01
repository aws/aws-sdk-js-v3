// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchSessionsRequest, SearchSessionsResponse } from "../models/models_0";
import { de_SearchSessionsCommand, se_SearchSessionsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSessionsCommand}.
 */
export interface SearchSessionsCommandInput extends SearchSessionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchSessionsCommand}.
 */
export interface SearchSessionsCommandOutput extends SearchSessionsResponse, __MetadataBearer {}

/**
 * <p>Searches for sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, SearchSessionsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, SearchSessionsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // SearchSessionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assistantId: "STRING_VALUE", // required
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
 * const command = new SearchSessionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchSessionsResponse
 * //   sessionSummaries: [ // SessionSummaries // required
 * //     { // SessionSummary
 * //       sessionId: "STRING_VALUE", // required
 * //       sessionArn: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSessionsCommandInput - {@link SearchSessionsCommandInput}
 * @returns {@link SearchSessionsCommandOutput}
 * @see {@link SearchSessionsCommandInput} for command's `input` shape.
 * @see {@link SearchSessionsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class SearchSessionsCommand extends $Command
  .classBuilder<
    SearchSessionsCommandInput,
    SearchSessionsCommandOutput,
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
  .s("WisdomService", "SearchSessions", {})
  .n("WisdomClient", "SearchSessionsCommand")
  .f(void 0, void 0)
  .ser(se_SearchSessionsCommand)
  .de(de_SearchSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSessionsRequest;
      output: SearchSessionsResponse;
    };
    sdk: {
      input: SearchSessionsCommandInput;
      output: SearchSessionsCommandOutput;
    };
  };
}
