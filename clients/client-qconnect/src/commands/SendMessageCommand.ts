// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendMessageRequest, SendMessageResponse } from "../models/models_0";
import { SendMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendMessageCommand}.
 */
export interface SendMessageCommandInput extends SendMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendMessageCommand}.
 */
export interface SendMessageCommandOutput extends SendMessageResponse, __MetadataBearer {}

/**
 * Submits a message to the Amazon Q in Connect session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, SendMessageCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, SendMessageCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // SendMessageRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   message: { // MessageInput
 *     value: { // MessageData Union: only one key present
 *       text: { // TextMessage
 *         value: "STRING_VALUE",
 *         citations: [ // Citations
 *           { // Citation
 *             contentId: "STRING_VALUE",
 *             title: "STRING_VALUE",
 *             knowledgeBaseId: "STRING_VALUE",
 *             citationSpan: { // CitationSpan
 *               beginOffsetInclusive: Number("int"),
 *               endOffsetExclusive: Number("int"),
 *             },
 *             sourceURL: "STRING_VALUE",
 *             referenceType: "STRING_VALUE", // required
 *           },
 *         ],
 *         aiGuardrailAssessment: { // AIGuardrailAssessment
 *           blocked: true || false, // required
 *         },
 *       },
 *       toolUseResult: { // ToolUseResultData
 *         toolUseId: "STRING_VALUE", // required
 *         toolName: "STRING_VALUE", // required
 *         toolResult: "DOCUMENT_VALUE", // required
 *         inputSchema: "DOCUMENT_VALUE",
 *       },
 *       data: "DOCUMENT_VALUE",
 *     },
 *   },
 *   aiAgentId: "STRING_VALUE",
 *   conversationContext: { // ConversationContext
 *     selfServiceConversationHistory: [ // SelfServiceConversationHistoryList // required
 *       { // SelfServiceConversationHistory
 *         turnNumber: Number("int"),
 *         inputTranscript: "STRING_VALUE",
 *         botResponse: "STRING_VALUE",
 *         timestamp: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 *   configuration: { // MessageConfiguration
 *     generateFillerMessage: true || false,
 *     generateChunkedMessage: true || false,
 *   },
 *   clientToken: "STRING_VALUE",
 *   orchestratorUseCase: "STRING_VALUE",
 *   metadata: { // MessageMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   originRequestId: "STRING_VALUE",
 * };
 * const command = new SendMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendMessageResponse
 * //   requestMessageId: "STRING_VALUE", // required
 * //   configuration: { // MessageConfiguration
 * //     generateFillerMessage: true || false,
 * //     generateChunkedMessage: true || false,
 * //   },
 * //   nextMessageToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendMessageCommandInput - {@link SendMessageCommandInput}
 * @returns {@link SendMessageCommandOutput}
 * @see {@link SendMessageCommandInput} for command's `input` shape.
 * @see {@link SendMessageCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link DependencyFailedException} (client fault)
 *
 * The request failed because it depends on another request that failed.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request reached the service more than 15 minutes after the date stamp on the request or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or the date stamp on the request is more than 15 minutes in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class SendMessageCommand extends command<SendMessageCommandInput, SendMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendMessage",
  SendMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendMessageRequest;
      output: SendMessageResponse;
    };
    sdk: {
      input: SendMessageCommandInput;
      output: SendMessageCommandOutput;
    };
  };
}
