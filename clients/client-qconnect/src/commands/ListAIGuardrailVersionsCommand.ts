// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAIGuardrailVersionsRequest, ListAIGuardrailVersionsResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListAIGuardrailVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIGuardrailVersionsCommand}.
 */
export interface ListAIGuardrailVersionsCommandInput extends ListAIGuardrailVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIGuardrailVersionsCommand}.
 */
export interface ListAIGuardrailVersionsCommandOutput extends ListAIGuardrailVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists AI Guardrail versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIGuardrailVersionsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIGuardrailVersionsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListAIGuardrailVersionsRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiGuardrailId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAIGuardrailVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIGuardrailVersionsResponse
 * //   aiGuardrailVersionSummaries: [ // AIGuardrailVersionSummariesList // required
 * //     { // AIGuardrailVersionSummary
 * //       aiGuardrailSummary: { // AIGuardrailSummary
 * //         name: "STRING_VALUE", // required
 * //         assistantId: "STRING_VALUE", // required
 * //         assistantArn: "STRING_VALUE", // required
 * //         aiGuardrailId: "STRING_VALUE", // required
 * //         aiGuardrailArn: "STRING_VALUE", // required
 * //         modifiedTime: new Date("TIMESTAMP"),
 * //         visibilityStatus: "STRING_VALUE", // required
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
 * @param ListAIGuardrailVersionsCommandInput - {@link ListAIGuardrailVersionsCommandInput}
 * @returns {@link ListAIGuardrailVersionsCommandOutput}
 * @see {@link ListAIGuardrailVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAIGuardrailVersionsCommandOutput} for command's `response` shape.
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
export class ListAIGuardrailVersionsCommand extends $Command
  .classBuilder<
    ListAIGuardrailVersionsCommandInput,
    ListAIGuardrailVersionsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListAIGuardrailVersions", {})
  .n("QConnectClient", "ListAIGuardrailVersionsCommand")
  .sc(ListAIGuardrailVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIGuardrailVersionsRequest;
      output: ListAIGuardrailVersionsResponse;
    };
    sdk: {
      input: ListAIGuardrailVersionsCommandInput;
      output: ListAIGuardrailVersionsCommandOutput;
    };
  };
}
