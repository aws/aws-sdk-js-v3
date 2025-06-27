// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAIGuardrailsRequest,
  ListAIGuardrailsResponse,
  ListAIGuardrailsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAIGuardrailsCommand, se_ListAIGuardrailsCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIGuardrailsCommand}.
 */
export interface ListAIGuardrailsCommandInput extends ListAIGuardrailsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIGuardrailsCommand}.
 */
export interface ListAIGuardrailsCommandOutput extends ListAIGuardrailsResponse, __MetadataBearer {}

/**
 * <p>Lists the AI Guardrails available on the Amazon Q in Connect assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIGuardrailsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIGuardrailsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ListAIGuardrailsRequest
 *   assistantId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAIGuardrailsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIGuardrailsResponse
 * //   aiGuardrailSummaries: [ // AIGuardrailSummariesList // required
 * //     { // AIGuardrailSummary
 * //       name: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       aiGuardrailId: "STRING_VALUE", // required
 * //       aiGuardrailArn: "STRING_VALUE", // required
 * //       modifiedTime: new Date("TIMESTAMP"),
 * //       visibilityStatus: "STRING_VALUE", // required
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
 * @param ListAIGuardrailsCommandInput - {@link ListAIGuardrailsCommandInput}
 * @returns {@link ListAIGuardrailsCommandOutput}
 * @see {@link ListAIGuardrailsCommandInput} for command's `input` shape.
 * @see {@link ListAIGuardrailsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAIGuardrailsCommand extends $Command
  .classBuilder<
    ListAIGuardrailsCommandInput,
    ListAIGuardrailsCommandOutput,
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
  .s("WisdomService", "ListAIGuardrails", {})
  .n("QConnectClient", "ListAIGuardrailsCommand")
  .f(void 0, ListAIGuardrailsResponseFilterSensitiveLog)
  .ser(se_ListAIGuardrailsCommand)
  .de(de_ListAIGuardrailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIGuardrailsRequest;
      output: ListAIGuardrailsResponse;
    };
    sdk: {
      input: ListAIGuardrailsCommandInput;
      output: ListAIGuardrailsCommandOutput;
    };
  };
}
