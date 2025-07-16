// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMemoryRecordInput,
  GetMemoryRecordOutput,
  GetMemoryRecordOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMemoryRecordCommand, se_GetMemoryRecordCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMemoryRecordCommand}.
 */
export interface GetMemoryRecordCommandInput extends GetMemoryRecordInput {}
/**
 * @public
 *
 * The output of {@link GetMemoryRecordCommand}.
 */
export interface GetMemoryRecordCommandOutput extends GetMemoryRecordOutput, __MetadataBearer {}

/**
 * <p>Retrieves a specific memory record from a memory store.</p> <p>To use this operation, you must have the <code>genesismemory:GetMemoryRecord</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetMemoryRecordCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetMemoryRecordCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetMemoryRecordInput
 *   memoryId: "STRING_VALUE", // required
 *   memoryRecordId: "STRING_VALUE", // required
 * };
 * const command = new GetMemoryRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetMemoryRecordOutput
 * //   memoryRecord: { // MemoryRecord
 * //     memoryRecordId: "STRING_VALUE", // required
 * //     content: { // MemoryContent Union: only one key present
 * //       text: "STRING_VALUE",
 * //     },
 * //     memoryStrategyId: "STRING_VALUE", // required
 * //     namespaces: [ // NamespacesList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMemoryRecordCommandInput - {@link GetMemoryRecordCommandInput}
 * @returns {@link GetMemoryRecordCommandOutput}
 * @see {@link GetMemoryRecordCommandInput} for command's `input` shape.
 * @see {@link GetMemoryRecordCommandOutput} for command's `response` shape.
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
export class GetMemoryRecordCommand extends $Command
  .classBuilder<
    GetMemoryRecordCommandInput,
    GetMemoryRecordCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "GetMemoryRecord", {})
  .n("BedrockAgentCoreClient", "GetMemoryRecordCommand")
  .f(void 0, GetMemoryRecordOutputFilterSensitiveLog)
  .ser(se_GetMemoryRecordCommand)
  .de(de_GetMemoryRecordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMemoryRecordInput;
      output: GetMemoryRecordOutput;
    };
    sdk: {
      input: GetMemoryRecordCommandInput;
      output: GetMemoryRecordCommandOutput;
    };
  };
}
