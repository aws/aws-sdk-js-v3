// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetExecutionFlowSnapshotRequest, GetExecutionFlowSnapshotResponse } from "../models/models_0";
import { GetExecutionFlowSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the flow definition snapshot used for a flow execution. The snapshot represents the flow metadata and definition as it existed at the time the execution was started. Note that even if the flow is edited after an execution starts, the snapshot connected to the execution remains unchanged.
 *
 * > **Note:** Flow executions is in preview release for Amazon Bedrock and is subject to change.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetExecutionFlowSnapshotCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetExecutionFlowSnapshotCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
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
 *
 * The request is denied because of missing access permissions. Check your permissions and retry your request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentRuntime service.
 *
 * @public
 */
export class GetExecutionFlowSnapshotCommand extends command<GetExecutionFlowSnapshotCommandInput, GetExecutionFlowSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "GetExecutionFlowSnapshot",
  GetExecutionFlowSnapshot$
) {
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
