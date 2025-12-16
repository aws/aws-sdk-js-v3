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
import type { BatchCreateMemoryRecordsInput, BatchCreateMemoryRecordsOutput } from "../models/models_0";
import { BatchCreateMemoryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateMemoryRecordsCommand}.
 */
export interface BatchCreateMemoryRecordsCommandInput extends BatchCreateMemoryRecordsInput {}
/**
 * @public
 *
 * The output of {@link BatchCreateMemoryRecordsCommand}.
 */
export interface BatchCreateMemoryRecordsCommandOutput extends BatchCreateMemoryRecordsOutput, __MetadataBearer {}

/**
 * <p>Creates multiple memory records in a single batch operation for the specified memory with custom content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, BatchCreateMemoryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, BatchCreateMemoryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // BatchCreateMemoryRecordsInput
 *   memoryId: "STRING_VALUE", // required
 *   records: [ // MemoryRecordsCreateInputList // required
 *     { // MemoryRecordCreateInput
 *       requestIdentifier: "STRING_VALUE", // required
 *       namespaces: [ // NamespacesList // required
 *         "STRING_VALUE",
 *       ],
 *       content: { // MemoryContent Union: only one key present
 *         text: "STRING_VALUE",
 *       },
 *       timestamp: new Date("TIMESTAMP"), // required
 *       memoryStrategyId: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchCreateMemoryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateMemoryRecordsOutput
 * //   successfulRecords: [ // MemoryRecordsOutputList // required
 * //     { // MemoryRecordOutput
 * //       memoryRecordId: "STRING_VALUE", // required
 * //       status: "SUCCEEDED" || "FAILED", // required
 * //       requestIdentifier: "STRING_VALUE",
 * //       errorCode: Number("int"),
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRecords: [ // required
 * //     {
 * //       memoryRecordId: "STRING_VALUE", // required
 * //       status: "SUCCEEDED" || "FAILED", // required
 * //       requestIdentifier: "STRING_VALUE",
 * //       errorCode: Number("int"),
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateMemoryRecordsCommandInput - {@link BatchCreateMemoryRecordsCommandInput}
 * @returns {@link BatchCreateMemoryRecordsCommandOutput}
 * @see {@link BatchCreateMemoryRecordsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateMemoryRecordsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
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
export class BatchCreateMemoryRecordsCommand extends $Command
  .classBuilder<
    BatchCreateMemoryRecordsCommandInput,
    BatchCreateMemoryRecordsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "BatchCreateMemoryRecords", {})
  .n("BedrockAgentCoreClient", "BatchCreateMemoryRecordsCommand")
  .sc(BatchCreateMemoryRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateMemoryRecordsInput;
      output: BatchCreateMemoryRecordsOutput;
    };
    sdk: {
      input: BatchCreateMemoryRecordsCommandInput;
      output: BatchCreateMemoryRecordsCommandOutput;
    };
  };
}
