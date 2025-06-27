// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAIPromptsRequest, ListAIPromptsResponse } from "../models/models_0";
import { de_ListAIPromptsCommand, se_ListAIPromptsCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIPromptsCommand}.
 */
export interface ListAIPromptsCommandInput extends ListAIPromptsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIPromptsCommand}.
 */
export interface ListAIPromptsCommandOutput extends ListAIPromptsResponse, __MetadataBearer {}

/**
 * <p>Lists the AI Prompts available on the Amazon Q in Connect assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIPromptsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIPromptsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ListAIPromptsRequest
 *   assistantId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   origin: "STRING_VALUE",
 * };
 * const command = new ListAIPromptsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIPromptsResponse
 * //   aiPromptSummaries: [ // AIPromptSummaryList // required
 * //     { // AIPromptSummary
 * //       name: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       aiPromptId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       aiPromptArn: "STRING_VALUE", // required
 * //       modifiedTime: new Date("TIMESTAMP"),
 * //       templateType: "STRING_VALUE", // required
 * //       modelId: "STRING_VALUE", // required
 * //       apiFormat: "STRING_VALUE", // required
 * //       visibilityStatus: "STRING_VALUE", // required
 * //       origin: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE",
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
 * @param ListAIPromptsCommandInput - {@link ListAIPromptsCommandInput}
 * @returns {@link ListAIPromptsCommandOutput}
 * @see {@link ListAIPromptsCommandInput} for command's `input` shape.
 * @see {@link ListAIPromptsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ListAIPromptsCommand extends $Command
  .classBuilder<
    ListAIPromptsCommandInput,
    ListAIPromptsCommandOutput,
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
  .s("WisdomService", "ListAIPrompts", {})
  .n("QConnectClient", "ListAIPromptsCommand")
  .f(void 0, void 0)
  .ser(se_ListAIPromptsCommand)
  .de(de_ListAIPromptsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIPromptsRequest;
      output: ListAIPromptsResponse;
    };
    sdk: {
      input: ListAIPromptsCommandInput;
      output: ListAIPromptsCommandOutput;
    };
  };
}
