// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListFlowExecutionEventsRequest,
  ListFlowExecutionEventsResponse,
  ListFlowExecutionEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListFlowExecutionEventsCommand, se_ListFlowExecutionEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowExecutionEventsCommand}.
 */
export interface ListFlowExecutionEventsCommandInput extends ListFlowExecutionEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowExecutionEventsCommand}.
 */
export interface ListFlowExecutionEventsCommandOutput extends ListFlowExecutionEventsResponse, __MetadataBearer {}

/**
 * <p>Lists events that occurred during a flow execution. Events provide detailed information about the execution progress, including node inputs and outputs, flow inputs and outputs, condition results, and failure events.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, ListFlowExecutionEventsCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, ListFlowExecutionEventsCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // ListFlowExecutionEventsRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE", // required
 *   executionIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   eventType: "Node" || "Flow", // required
 * };
 * const command = new ListFlowExecutionEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowExecutionEventsResponse
 * //   flowExecutionEvents: [ // FlowExecutionEvents // required
 * //     { // FlowExecutionEvent Union: only one key present
 * //       flowInputEvent: { // FlowExecutionInputEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         fields: [ // FlowInputFields // required
 * //           { // FlowInputField
 * //             name: "STRING_VALUE", // required
 * //             content: { // FlowExecutionContent Union: only one key present
 * //               document: "DOCUMENT_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       flowOutputEvent: { // FlowExecutionOutputEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         fields: [ // FlowOutputFields // required
 * //           { // FlowOutputField
 * //             name: "STRING_VALUE", // required
 * //             content: {//  Union: only one key present
 * //               document: "DOCUMENT_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       nodeInputEvent: { // NodeInputEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         fields: [ // NodeInputFields // required
 * //           { // NodeInputField
 * //             name: "STRING_VALUE", // required
 * //             content: { // NodeExecutionContent Union: only one key present
 * //               document: "DOCUMENT_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       nodeOutputEvent: { // NodeOutputEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         fields: [ // NodeOutputFields // required
 * //           { // NodeOutputField
 * //             name: "STRING_VALUE", // required
 * //             content: {//  Union: only one key present
 * //               document: "DOCUMENT_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       conditionResultEvent: { // ConditionResultEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         satisfiedConditions: [ // SatisfiedConditions // required
 * //           { // SatisfiedCondition
 * //             conditionName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       nodeFailureEvent: { // NodeFailureEvent
 * //         nodeName: "STRING_VALUE", // required
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         errorCode: "VALIDATION" || "DEPENDENCY_FAILED" || "BAD_GATEWAY" || "INTERNAL_SERVER", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //       flowFailureEvent: { // FlowFailureEvent
 * //         timestamp: new Date("TIMESTAMP"), // required
 * //         errorCode: "VALIDATION" || "INTERNAL_SERVER" || "NODE_EXECUTION_FAILED", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowExecutionEventsCommandInput - {@link ListFlowExecutionEventsCommandInput}
 * @returns {@link ListFlowExecutionEventsCommandOutput}
 * @see {@link ListFlowExecutionEventsCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionEventsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class ListFlowExecutionEventsCommand extends $Command
  .classBuilder<
    ListFlowExecutionEventsCommandInput,
    ListFlowExecutionEventsCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "ListFlowExecutionEvents", {})
  .n("BedrockAgentRuntimeClient", "ListFlowExecutionEventsCommand")
  .f(void 0, ListFlowExecutionEventsResponseFilterSensitiveLog)
  .ser(se_ListFlowExecutionEventsCommand)
  .de(de_ListFlowExecutionEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowExecutionEventsRequest;
      output: ListFlowExecutionEventsResponse;
    };
    sdk: {
      input: ListFlowExecutionEventsCommandInput;
      output: ListFlowExecutionEventsCommandOutput;
    };
  };
}
