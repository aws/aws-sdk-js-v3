// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAIPromptVersionsRequest, ListAIPromptVersionsResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListAIPromptVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIPromptVersionsCommand}.
 */
export interface ListAIPromptVersionsCommandInput extends ListAIPromptVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIPromptVersionsCommand}.
 */
export interface ListAIPromptVersionsCommandOutput extends ListAIPromptVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists AI Prompt versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIPromptVersionsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIPromptVersionsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListAIPromptVersionsRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   origin: "STRING_VALUE",
 * };
 * const command = new ListAIPromptVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIPromptVersionsResponse
 * //   aiPromptVersionSummaries: [ // AIPromptVersionSummariesList // required
 * //     { // AIPromptVersionSummary
 * //       aiPromptSummary: { // AIPromptSummary
 * //         name: "STRING_VALUE", // required
 * //         assistantId: "STRING_VALUE", // required
 * //         assistantArn: "STRING_VALUE", // required
 * //         aiPromptId: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         aiPromptArn: "STRING_VALUE", // required
 * //         modifiedTime: new Date("TIMESTAMP"),
 * //         templateType: "STRING_VALUE", // required
 * //         modelId: "STRING_VALUE", // required
 * //         apiFormat: "STRING_VALUE", // required
 * //         visibilityStatus: "STRING_VALUE", // required
 * //         origin: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         tags: { // Tags
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       versionNumber: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIPromptVersionsCommandInput - {@link ListAIPromptVersionsCommandInput}
 * @returns {@link ListAIPromptVersionsCommandOutput}
 * @see {@link ListAIPromptVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAIPromptVersionsCommandOutput} for command's `response` shape.
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
export class ListAIPromptVersionsCommand extends $Command
  .classBuilder<
    ListAIPromptVersionsCommandInput,
    ListAIPromptVersionsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListAIPromptVersions", {})
  .n("QConnectClient", "ListAIPromptVersionsCommand")
  .sc(ListAIPromptVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIPromptVersionsRequest;
      output: ListAIPromptVersionsResponse;
    };
    sdk: {
      input: ListAIPromptVersionsCommandInput;
      output: ListAIPromptVersionsCommandOutput;
    };
  };
}
