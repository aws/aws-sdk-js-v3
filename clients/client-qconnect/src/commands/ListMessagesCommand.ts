// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMessagesRequest, ListMessagesResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMessagesCommand}.
 */
export interface ListMessagesCommandInput extends ListMessagesRequest {}
/**
 * @public
 *
 * The output of {@link ListMessagesCommand}.
 */
export interface ListMessagesCommandOutput extends ListMessagesResponse, __MetadataBearer {}

/**
 * <p>Lists messages on an Amazon Q in Connect session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListMessagesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListMessagesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListMessagesRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: "STRING_VALUE",
 * };
 * const command = new ListMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListMessagesResponse
 * //   messages: [ // MessageList // required
 * //     { // MessageOutput
 * //       value: { // MessageData Union: only one key present
 * //         text: { // TextMessage
 * //           value: "STRING_VALUE",
 * //           citations: [ // Citations
 * //             { // Citation
 * //               contentId: "STRING_VALUE",
 * //               title: "STRING_VALUE",
 * //               knowledgeBaseId: "STRING_VALUE",
 * //               citationSpan: { // CitationSpan
 * //                 beginOffsetInclusive: Number("int"),
 * //                 endOffsetExclusive: Number("int"),
 * //               },
 * //               sourceURL: "STRING_VALUE",
 * //               referenceType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           aiGuardrailAssessment: { // AIGuardrailAssessment
 * //             blocked: true || false, // required
 * //           },
 * //         },
 * //         toolUseResult: { // ToolUseResultData
 * //           toolUseId: "STRING_VALUE", // required
 * //           toolName: "STRING_VALUE", // required
 * //           toolResult: "DOCUMENT_VALUE", // required
 * //           inputSchema: "DOCUMENT_VALUE",
 * //         },
 * //       },
 * //       messageId: "STRING_VALUE", // required
 * //       participant: "STRING_VALUE", // required
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMessagesCommandInput - {@link ListMessagesCommandInput}
 * @returns {@link ListMessagesCommandOutput}
 * @see {@link ListMessagesCommandInput} for command's `input` shape.
 * @see {@link ListMessagesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListMessagesCommand extends $Command
  .classBuilder<
    ListMessagesCommandInput,
    ListMessagesCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListMessages", {})
  .n("QConnectClient", "ListMessagesCommand")
  .sc(ListMessages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMessagesRequest;
      output: ListMessagesResponse;
    };
    sdk: {
      input: ListMessagesCommandInput;
      output: ListMessagesCommandOutput;
    };
  };
}
