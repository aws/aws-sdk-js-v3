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
import type { SearchRegistryRecordsRequest, SearchRegistryRecordsResponse } from "../models/models_0";
import { SearchRegistryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchRegistryRecordsCommand}.
 */
export interface SearchRegistryRecordsCommandInput extends SearchRegistryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link SearchRegistryRecordsCommand}.
 */
export interface SearchRegistryRecordsCommandOutput extends SearchRegistryRecordsResponse, __MetadataBearer {}

/**
 * <p> Searches for registry records using semantic, lexical, or hybrid queries. Returns metadata for matching records ordered by relevance within the specified registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, SearchRegistryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, SearchRegistryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // SearchRegistryRecordsRequest
 *   searchQuery: "STRING_VALUE", // required
 *   registryIds: [ // RegistryIdList // required
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   filters: "DOCUMENT_VALUE",
 * };
 * const command = new SearchRegistryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // SearchRegistryRecordsResponse
 * //   registryRecords: [ // RegistryRecordSummaryList // required
 * //     { // RegistryRecordSummary
 * //       registryArn: "STRING_VALUE", // required
 * //       recordArn: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       descriptorType: "MCP" || "A2A" || "CUSTOM" || "AGENT_SKILLS", // required
 * //       descriptors: { // Descriptors
 * //         mcp: { // McpDescriptor
 * //           server: { // ServerDefinition
 * //             schemaVersion: "STRING_VALUE",
 * //             inlineContent: "STRING_VALUE",
 * //           },
 * //           tools: { // ToolsDefinition
 * //             protocolVersion: "STRING_VALUE",
 * //             inlineContent: "STRING_VALUE",
 * //           },
 * //         },
 * //         a2a: { // A2aDescriptor
 * //           agentCard: { // AgentCardDefinition
 * //             schemaVersion: "STRING_VALUE",
 * //             inlineContent: "STRING_VALUE",
 * //           },
 * //         },
 * //         custom: { // CustomDescriptor
 * //           inlineContent: "STRING_VALUE",
 * //         },
 * //         agentSkills: { // AgentSkillsDescriptor
 * //           skillMd: { // SkillMdDefinition
 * //             inlineContent: "STRING_VALUE",
 * //           },
 * //           skillDefinition: { // SkillDefinition
 * //             schemaVersion: "STRING_VALUE",
 * //             inlineContent: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       version: "STRING_VALUE", // required
 * //       status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchRegistryRecordsCommandInput - {@link SearchRegistryRecordsCommandInput}
 * @returns {@link SearchRegistryRecordsCommandOutput}
 * @see {@link SearchRegistryRecordsCommandInput} for command's `input` shape.
 * @see {@link SearchRegistryRecordsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class SearchRegistryRecordsCommand extends $Command
  .classBuilder<
    SearchRegistryRecordsCommandInput,
    SearchRegistryRecordsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "SearchRegistryRecords", {})
  .n("BedrockAgentCoreClient", "SearchRegistryRecordsCommand")
  .sc(SearchRegistryRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRegistryRecordsRequest;
      output: SearchRegistryRecordsResponse;
    };
    sdk: {
      input: SearchRegistryRecordsCommandInput;
      output: SearchRegistryRecordsCommandOutput;
    };
  };
}
