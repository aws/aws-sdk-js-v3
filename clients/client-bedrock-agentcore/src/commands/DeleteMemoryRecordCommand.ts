// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMemoryRecordInput, DeleteMemoryRecordOutput } from "../models/models_0";
import { DeleteMemoryRecord } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMemoryRecordCommand}.
 */
export interface DeleteMemoryRecordCommandInput extends DeleteMemoryRecordInput {}
/**
 * @public
 *
 * The output of {@link DeleteMemoryRecordCommand}.
 */
export interface DeleteMemoryRecordCommandOutput extends DeleteMemoryRecordOutput, __MetadataBearer {}

/**
 * <p>Deletes a memory record from an AgentCore Memory resource. When you delete a memory record, it is permanently removed.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:DeleteMemoryRecord</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeleteMemoryRecordCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeleteMemoryRecordCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeleteMemoryRecordInput
 *   memoryId: "STRING_VALUE", // required
 *   memoryRecordId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMemoryRecordCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMemoryRecordOutput
 * //   memoryRecordId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteMemoryRecordCommandInput - {@link DeleteMemoryRecordCommandInput}
 * @returns {@link DeleteMemoryRecordCommandOutput}
 * @see {@link DeleteMemoryRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteMemoryRecordCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The service encountered an internal error. Try your request again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class DeleteMemoryRecordCommand extends $Command
  .classBuilder<
    DeleteMemoryRecordCommandInput,
    DeleteMemoryRecordCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "DeleteMemoryRecord", {})
  .n("BedrockAgentCoreClient", "DeleteMemoryRecordCommand")
  .sc(DeleteMemoryRecord)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMemoryRecordInput;
      output: DeleteMemoryRecordOutput;
    };
    sdk: {
      input: DeleteMemoryRecordCommandInput;
      output: DeleteMemoryRecordCommandOutput;
    };
  };
}
