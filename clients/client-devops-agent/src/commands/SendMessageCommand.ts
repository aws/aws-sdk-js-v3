// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SendMessageRequest, SendMessageResponse } from "../models/models_0";
import { SendMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * Sends a chat message and streams the response for the specified agent space execution
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, SendMessageCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, SendMessageCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // SendMessageRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   content: "STRING_VALUE", // required
 *   context: { // SendMessageContext
 *     currentPage: "STRING_VALUE",
 *     lastMessage: "STRING_VALUE",
 *     userActionResponse: "STRING_VALUE",
 *   },
 *   userId: "STRING_VALUE",
 * };
 * const command = new SendMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendMessageResponse
 * //   events: { // SendMessageEvents Union: only one key present
 * //     responseCreated: { // SendMessageResponseCreatedEvent
 * //       responseId: "STRING_VALUE",
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     responseInProgress: { // SendMessageResponseInProgressEvent
 * //       responseId: "STRING_VALUE",
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     responseCompleted: { // SendMessageResponseCompletedEvent
 * //       responseId: "STRING_VALUE",
 * //       usage: { // SendMessageUsageInfo
 * //         inputTokens: Number("int"),
 * //         outputTokens: Number("int"),
 * //         totalTokens: Number("int"),
 * //       },
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     responseFailed: { // SendMessageResponseFailedEvent
 * //       responseId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     summary: { // SendMessageSummaryEvent
 * //       content: "STRING_VALUE",
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     heartbeat: {},
 * //     contentBlockStart: { // SendMessageContentBlockStartEvent
 * //       index: Number("int"),
 * //       type: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       parentId: "STRING_VALUE",
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     contentBlockDelta: { // SendMessageContentBlockDeltaEvent
 * //       index: Number("int"),
 * //       delta: { // SendMessageContentBlockDelta Union: only one key present
 * //         textDelta: { // SendMessageTextDelta
 * //           text: "STRING_VALUE",
 * //         },
 * //         jsonDelta: { // SendMessageJsonDelta
 * //           partialJson: "STRING_VALUE",
 * //         },
 * //       },
 * //       sequenceNumber: Number("int"),
 * //     },
 * //     contentBlockStop: { // SendMessageContentBlockStopEvent
 * //       index: Number("int"),
 * //       type: "STRING_VALUE",
 * //       text: "STRING_VALUE",
 * //       last: true || false,
 * //       sequenceNumber: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SendMessageCommandInput - {@link SendMessageCommandInput}
 * @returns {@link SendMessageCommandOutput}
 * @see {@link SendMessageCommandInput} for command's `input` shape.
 * @see {@link SendMessageCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class SendMessageCommand extends $Command
  .classBuilder<
    SendMessageCommandInput,
    SendMessageCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "SendMessage", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("DevOpsAgentClient", "SendMessageCommand")
  .sc(SendMessage$)
  .build() {
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
