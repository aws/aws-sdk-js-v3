// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListMemoryRecordsInput,
  ListMemoryRecordsOutput,
  ListMemoryRecordsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListMemoryRecordsCommand, se_ListMemoryRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMemoryRecordsCommand}.
 */
export interface ListMemoryRecordsCommandInput extends ListMemoryRecordsInput {}
/**
 * @public
 *
 * The output of {@link ListMemoryRecordsCommand}.
 */
export interface ListMemoryRecordsCommandOutput extends ListMemoryRecordsOutput, __MetadataBearer {}

/**
 * <p>Lists memory records in a memory store based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.</p> <p>To use this operation, you must have the <code>genesismemory:ListMemoryRecords</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListMemoryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListMemoryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListMemoryRecordsInput
 *   memoryId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   memoryStrategyId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMemoryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListMemoryRecordsOutput
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
 * @param ListMemoryRecordsCommandInput - {@link ListMemoryRecordsCommandInput}
 * @returns {@link ListMemoryRecordsCommandOutput}
 * @see {@link ListMemoryRecordsCommandInput} for command's `input` shape.
 * @see {@link ListMemoryRecordsCommandOutput} for command's `response` shape.
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
export class ListMemoryRecordsCommand extends $Command
  .classBuilder<
    ListMemoryRecordsCommandInput,
    ListMemoryRecordsCommandOutput,
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
  .s("AmazonBedrockAgentCore", "ListMemoryRecords", {})
  .n("BedrockAgentCoreClient", "ListMemoryRecordsCommand")
  .f(void 0, ListMemoryRecordsOutputFilterSensitiveLog)
  .ser(se_ListMemoryRecordsCommand)
  .de(de_ListMemoryRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemoryRecordsInput;
      output: ListMemoryRecordsOutput;
    };
    sdk: {
      input: ListMemoryRecordsCommandInput;
      output: ListMemoryRecordsCommandOutput;
    };
  };
}
