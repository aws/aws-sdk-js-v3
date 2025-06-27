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
import { GetExecutionFlowSnapshotRequest, GetExecutionFlowSnapshotResponse } from "../models/models_0";
import { de_GetExecutionFlowSnapshotCommand, se_GetExecutionFlowSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExecutionFlowSnapshotCommand}.
 */
export interface GetExecutionFlowSnapshotCommandInput extends GetExecutionFlowSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link GetExecutionFlowSnapshotCommand}.
 */
export interface GetExecutionFlowSnapshotCommandOutput extends GetExecutionFlowSnapshotResponse, __MetadataBearer {}

/**
 * <p>Retrieves the flow definition snapshot used for a flow execution. The snapshot represents the flow metadata and definition as it existed at the time the execution was started. Note that even if the flow is edited after an execution starts, the snapshot connected to the execution remains unchanged.</p> <note> <p>Flow executions is in preview release for Amazon Bedrock and is subject to change.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetExecutionFlowSnapshotCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetExecutionFlowSnapshotCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // GetExecutionFlowSnapshotRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   flowAliasIdentifier: "STRING_VALUE", // required
 *   executionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetExecutionFlowSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetExecutionFlowSnapshotResponse
 * //   flowIdentifier: "STRING_VALUE", // required
 * //   flowAliasIdentifier: "STRING_VALUE", // required
 * //   flowVersion: "STRING_VALUE", // required
 * //   executionRoleArn: "STRING_VALUE", // required
 * //   definition: "STRING_VALUE", // required
 * //   customerEncryptionKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExecutionFlowSnapshotCommandInput - {@link GetExecutionFlowSnapshotCommandInput}
 * @returns {@link GetExecutionFlowSnapshotCommandOutput}
 * @see {@link GetExecutionFlowSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetExecutionFlowSnapshotCommandOutput} for command's `response` shape.
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
export class GetExecutionFlowSnapshotCommand extends $Command
  .classBuilder<
    GetExecutionFlowSnapshotCommandInput,
    GetExecutionFlowSnapshotCommandOutput,
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
  .s("AmazonBedrockAgentRunTimeService", "GetExecutionFlowSnapshot", {})
  .n("BedrockAgentRuntimeClient", "GetExecutionFlowSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_GetExecutionFlowSnapshotCommand)
  .de(de_GetExecutionFlowSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExecutionFlowSnapshotRequest;
      output: GetExecutionFlowSnapshotResponse;
    };
    sdk: {
      input: GetExecutionFlowSnapshotCommandInput;
      output: GetExecutionFlowSnapshotCommandOutput;
    };
  };
}
