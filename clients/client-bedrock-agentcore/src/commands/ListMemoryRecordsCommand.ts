// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMemoryRecordsInput, ListMemoryRecordsOutput } from "../models/models_1";
import { ListMemoryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists memory records in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListMemoryRecords` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListMemoryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListMemoryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListMemoryRecordsInput
 *   memoryId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE",
 *   namespacePath: "STRING_VALUE",
 *   memoryStrategyId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   metadataFilters: [ // MemoryMetadataFilterList
 *     { // MemoryMetadataFilterExpression
 *       left: { // MemoryRecordLeftExpression Union: only one key present
 *         metadataKey: "STRING_VALUE",
 *       },
 *       operator: "EQUALS_TO" || "EXISTS" || "NOT_EXISTS" || "BEFORE" || "AFTER" || "CONTAINS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS", // required
 *       right: { // MemoryRecordRightExpression Union: only one key present
 *         metadataValue: { // MemoryRecordMetadataValue Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           stringListValue: [ // StringValueList
 *             "STRING_VALUE",
 *           ],
 *           numberValue: Number("double"),
 *           dateTimeValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *     },
 *   ],
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
 * //       timestamp: new Date("TIMESTAMP"),
 * //       metadata: { // MemoryRecordMetadataMap
 * //         "<keys>": { // MemoryRecordMetadataValue Union: only one key present
 * //           stringValue: "STRING_VALUE",
 * //           stringListValue: [ // StringValueList
 * //             "STRING_VALUE",
 * //           ],
 * //           numberValue: Number("double"),
 * //           dateTimeValue: new Date("TIMESTAMP"),
 * //         },
 * //       },
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
 *
 * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The service encountered an internal error. Try your request again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
 *
 * @throws {@link BedrockAgentCoreServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCore service.
 *
 * @public
 */
export class ListMemoryRecordsCommand extends command<ListMemoryRecordsCommandInput, ListMemoryRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListMemoryRecords",
  ListMemoryRecords$
) {
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
