// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSpansRequest } from "../models/models_0";
import type { ListSpansResponse } from "../models/models_1";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListSpans } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSpansCommand}.
 */
export interface ListSpansCommandInput extends ListSpansRequest {}
/**
 * @public
 *
 * The output of {@link ListSpansCommand}.
 */
export interface ListSpansCommandOutput extends ListSpansResponse, __MetadataBearer {}

/**
 * <p>Retrieves AI agent execution traces for a session, providing granular visibility into agent orchestration flows, LLM interactions, and tool invocations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListSpansCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListSpansCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListSpansRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSpansCommand(input);
 * const response = await client.send(command);
 * // { // ListSpansResponse
 * //   spans: [ // SpanList // required
 * //     { // Span
 * //       spanId: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       parentSpanId: "STRING_VALUE",
 * //       spanName: "STRING_VALUE", // required
 * //       spanType: "STRING_VALUE", // required
 * //       startTimestamp: new Date("TIMESTAMP"), // required
 * //       endTimestamp: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       requestId: "STRING_VALUE", // required
 * //       attributes: { // SpanAttributes
 * //         operationName: "STRING_VALUE",
 * //         providerName: "STRING_VALUE",
 * //         errorType: "STRING_VALUE",
 * //         agentId: "STRING_VALUE",
 * //         instanceArn: "STRING_VALUE",
 * //         contactId: "STRING_VALUE",
 * //         initialContactId: "STRING_VALUE",
 * //         sessionName: "STRING_VALUE",
 * //         aiAgentArn: "STRING_VALUE",
 * //         aiAgentType: "STRING_VALUE",
 * //         aiAgentName: "STRING_VALUE",
 * //         aiAgentId: "STRING_VALUE",
 * //         aiAgentVersion: Number("int"),
 * //         aiAgentInvoker: "STRING_VALUE",
 * //         aiAgentOrchestratorUseCase: "STRING_VALUE",
 * //         requestModel: "STRING_VALUE",
 * //         requestMaxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         responseModel: "STRING_VALUE",
 * //         responseFinishReasons: [ // SpanFinishReasonList
 * //           "STRING_VALUE",
 * //         ],
 * //         usageInputTokens: Number("int"),
 * //         usageOutputTokens: Number("int"),
 * //         usageTotalTokens: Number("int"),
 * //         cacheReadInputTokens: Number("int"),
 * //         cacheWriteInputTokens: Number("int"),
 * //         inputMessages: [ // SpanMessageList
 * //           { // SpanMessage
 * //             messageId: "STRING_VALUE", // required
 * //             participant: "STRING_VALUE", // required
 * //             timestamp: new Date("TIMESTAMP"), // required
 * //             values: [ // SpanMessageValueList // required
 * //               { // SpanMessageValue Union: only one key present
 * //                 text: { // SpanTextValue
 * //                   value: "STRING_VALUE", // required
 * //                   citations: [ // SpanCitationList
 * //                     { // SpanCitation
 * //                       contentId: "STRING_VALUE",
 * //                       title: "STRING_VALUE",
 * //                       knowledgeBaseId: "STRING_VALUE",
 * //                       knowledgeBaseArn: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   aiGuardrailAssessment: { // AIGuardrailAssessment
 * //                     blocked: true || false, // required
 * //                   },
 * //                 },
 * //                 toolUse: { // SpanToolUseValue
 * //                   toolUseId: "STRING_VALUE", // required
 * //                   name: "STRING_VALUE", // required
 * //                   arguments: "DOCUMENT_VALUE", // required
 * //                 },
 * //                 toolResult: { // SpanToolResultValue
 * //                   toolUseId: "STRING_VALUE", // required
 * //                   values: [ // required
 * //                     {//  Union: only one key present
 * //                       text: {
 * //                         value: "STRING_VALUE", // required
 * //                         citations: [
 * //                           {
 * //                             contentId: "STRING_VALUE",
 * //                             title: "STRING_VALUE",
 * //                             knowledgeBaseId: "STRING_VALUE",
 * //                             knowledgeBaseArn: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                         aiGuardrailAssessment: {
 * //                           blocked: true || false, // required
 * //                         },
 * //                       },
 * //                       toolUse: {
 * //                         toolUseId: "STRING_VALUE", // required
 * //                         name: "STRING_VALUE", // required
 * //                         arguments: "DOCUMENT_VALUE", // required
 * //                       },
 * //                       toolResult: {
 * //                         toolUseId: "STRING_VALUE", // required
 * //                         values: "<SpanMessageValueList>", // required
 * //                         error: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   ],
 * //                   error: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         outputMessages: [
 * //           {
 * //             messageId: "STRING_VALUE", // required
 * //             participant: "STRING_VALUE", // required
 * //             timestamp: new Date("TIMESTAMP"), // required
 * //             values: "<SpanMessageValueList>", // required
 * //           },
 * //         ],
 * //         systemInstructions: "<SpanMessageValueList>",
 * //         promptArn: "STRING_VALUE",
 * //         promptId: "STRING_VALUE",
 * //         promptType: "STRING_VALUE",
 * //         promptName: "STRING_VALUE",
 * //         promptVersion: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpansCommandInput - {@link ListSpansCommandInput}
 * @returns {@link ListSpansCommandOutput}
 * @see {@link ListSpansCommandInput} for command's `input` shape.
 * @see {@link ListSpansCommandOutput} for command's `response` shape.
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
export class ListSpansCommand extends $Command
  .classBuilder<
    ListSpansCommandInput,
    ListSpansCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListSpans", {})
  .n("QConnectClient", "ListSpansCommand")
  .sc(ListSpans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpansRequest;
      output: ListSpansResponse;
    };
    sdk: {
      input: ListSpansCommandInput;
      output: ListSpansCommandOutput;
    };
  };
}
