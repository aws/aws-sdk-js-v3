// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteMemoryRecordsInput, BatchDeleteMemoryRecordsOutput } from "../models/models_0";
import { de_BatchDeleteMemoryRecordsCommand, se_BatchDeleteMemoryRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteMemoryRecordsCommand}.
 */
export interface BatchDeleteMemoryRecordsCommandInput extends BatchDeleteMemoryRecordsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteMemoryRecordsCommand}.
 */
export interface BatchDeleteMemoryRecordsCommandOutput extends BatchDeleteMemoryRecordsOutput, __MetadataBearer {}

/**
 * <p>Deletes multiple memory records in a single batch operation from the specified memory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, BatchDeleteMemoryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, BatchDeleteMemoryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // BatchDeleteMemoryRecordsInput
 *   memoryId: "STRING_VALUE", // required
 *   records: [ // MemoryRecordsDeleteInputList // required
 *     { // MemoryRecordDeleteInput
 *       memoryRecordId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDeleteMemoryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteMemoryRecordsOutput
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
 * @param BatchDeleteMemoryRecordsCommandInput - {@link BatchDeleteMemoryRecordsCommandInput}
 * @returns {@link BatchDeleteMemoryRecordsCommandOutput}
 * @see {@link BatchDeleteMemoryRecordsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteMemoryRecordsCommandOutput} for command's `response` shape.
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
export class BatchDeleteMemoryRecordsCommand extends $Command
  .classBuilder<
    BatchDeleteMemoryRecordsCommandInput,
    BatchDeleteMemoryRecordsCommandOutput,
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
  .s("AmazonBedrockAgentCore", "BatchDeleteMemoryRecords", {})
  .n("BedrockAgentCoreClient", "BatchDeleteMemoryRecordsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteMemoryRecordsCommand)
  .de(de_BatchDeleteMemoryRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteMemoryRecordsInput;
      output: BatchDeleteMemoryRecordsOutput;
    };
    sdk: {
      input: BatchDeleteMemoryRecordsCommandInput;
      output: BatchDeleteMemoryRecordsCommandOutput;
    };
  };
}
