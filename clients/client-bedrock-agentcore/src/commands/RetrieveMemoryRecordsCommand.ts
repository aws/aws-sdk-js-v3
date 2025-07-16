// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RetrieveMemoryRecordsInput,
  RetrieveMemoryRecordsInputFilterSensitiveLog,
  RetrieveMemoryRecordsOutput,
  RetrieveMemoryRecordsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_RetrieveMemoryRecordsCommand, se_RetrieveMemoryRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetrieveMemoryRecordsCommand}.
 */
export interface RetrieveMemoryRecordsCommandInput extends RetrieveMemoryRecordsInput {}
/**
 * @public
 *
 * The output of {@link RetrieveMemoryRecordsCommand}.
 */
export interface RetrieveMemoryRecordsCommandOutput extends RetrieveMemoryRecordsOutput, __MetadataBearer {}

/**
 * <p>Searches for and retrieves memory records from a memory store based on specified search criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.</p> <p>To use this operation, you must have the <code>genesismemory:RetrieveMemoryRecords</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, RetrieveMemoryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, RetrieveMemoryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // RetrieveMemoryRecordsInput
 *   memoryId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   searchCriteria: { // SearchCriteria
 *     searchQuery: "STRING_VALUE", // required
 *     memoryStrategyId: "STRING_VALUE",
 *     topK: Number("int"),
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new RetrieveMemoryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveMemoryRecordsOutput
 * //   memoryRecordSummaries: [ // MemoryRecordSummaryList // required
 * //     { // MemoryRecordSummary
 * //       memoryRecordId: "STRING_VALUE", // required
 * //       content: { // MemoryContent Union: only one key present
 * //         text: "STRING_VALUE",
 * //       },
 * //       memoryStrategyId: "STRING_VALUE", // required
 * //       namespaces: [ // NamespacesList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       score: Number("double"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetrieveMemoryRecordsCommandInput - {@link RetrieveMemoryRecordsCommandInput}
 * @returns {@link RetrieveMemoryRecordsCommandOutput}
 * @see {@link RetrieveMemoryRecordsCommandInput} for command's `input` shape.
 * @see {@link RetrieveMemoryRecordsCommandOutput} for command's `response` shape.
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
export class RetrieveMemoryRecordsCommand extends $Command
  .classBuilder<
    RetrieveMemoryRecordsCommandInput,
    RetrieveMemoryRecordsCommandOutput,
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
  .s("AmazonBedrockAgentCore", "RetrieveMemoryRecords", {})
  .n("BedrockAgentCoreClient", "RetrieveMemoryRecordsCommand")
  .f(RetrieveMemoryRecordsInputFilterSensitiveLog, RetrieveMemoryRecordsOutputFilterSensitiveLog)
  .ser(se_RetrieveMemoryRecordsCommand)
  .de(de_RetrieveMemoryRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveMemoryRecordsInput;
      output: RetrieveMemoryRecordsOutput;
    };
    sdk: {
      input: RetrieveMemoryRecordsCommandInput;
      output: RetrieveMemoryRecordsCommandOutput;
    };
  };
}
