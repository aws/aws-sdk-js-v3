// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListKnowledgeBasesRequest, ListKnowledgeBasesResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListKnowledgeBases } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandInput extends ListKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandOutput extends ListKnowledgeBasesResponse, __MetadataBearer {}

/**
 * <p>Lists the knowledge bases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListKnowledgeBasesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListKnowledgeBasesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListKnowledgeBasesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBasesResponse
 * //   knowledgeBaseSummaries: [ // KnowledgeBaseList // required
 * //     { // KnowledgeBaseSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       knowledgeBaseType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //         appIntegrations: { // AppIntegrationsConfiguration
 * //           appIntegrationArn: "STRING_VALUE", // required
 * //           objectFields: [ // ObjectFieldsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         managedSourceConfiguration: { // ManagedSourceConfiguration Union: only one key present
 * //           webCrawlerConfiguration: { // WebCrawlerConfiguration
 * //             urlConfiguration: { // UrlConfiguration
 * //               seedUrls: [ // SeedUrls
 * //                 { // SeedUrl
 * //                   url: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //             crawlerLimits: { // WebCrawlerLimits
 * //               rateLimit: Number("int"),
 * //             },
 * //             inclusionFilters: [ // UrlFilterList
 * //               "STRING_VALUE",
 * //             ],
 * //             exclusionFilters: [
 * //               "STRING_VALUE",
 * //             ],
 * //             scope: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       vectorIngestionConfiguration: { // VectorIngestionConfiguration
 * //         chunkingConfiguration: { // ChunkingConfiguration
 * //           chunkingStrategy: "STRING_VALUE", // required
 * //           fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 * //             maxTokens: Number("int"), // required
 * //             overlapPercentage: Number("int"), // required
 * //           },
 * //           hierarchicalChunkingConfiguration: { // HierarchicalChunkingConfiguration
 * //             levelConfigurations: [ // HierarchicalChunkingLevelConfigurations // required
 * //               { // HierarchicalChunkingLevelConfiguration
 * //                 maxTokens: Number("int"), // required
 * //               },
 * //             ],
 * //             overlapTokens: Number("int"), // required
 * //           },
 * //           semanticChunkingConfiguration: { // SemanticChunkingConfiguration
 * //             maxTokens: Number("int"), // required
 * //             bufferSize: Number("int"), // required
 * //             breakpointPercentileThreshold: Number("int"), // required
 * //           },
 * //         },
 * //         parsingConfiguration: { // ParsingConfiguration
 * //           parsingStrategy: "STRING_VALUE", // required
 * //           bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfigurationForParsing
 * //             modelArn: "STRING_VALUE", // required
 * //             parsingPrompt: { // ParsingPrompt
 * //               parsingPromptText: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       renderingConfiguration: { // RenderingConfiguration
 * //         templateUri: "STRING_VALUE",
 * //       },
 * //       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBasesCommandInput - {@link ListKnowledgeBasesCommandInput}
 * @returns {@link ListKnowledgeBasesCommandOutput}
 * @see {@link ListKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBasesCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ListKnowledgeBasesCommand extends $Command
  .classBuilder<
    ListKnowledgeBasesCommandInput,
    ListKnowledgeBasesCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListKnowledgeBases", {})
  .n("QConnectClient", "ListKnowledgeBasesCommand")
  .sc(ListKnowledgeBases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKnowledgeBasesRequest;
      output: ListKnowledgeBasesResponse;
    };
    sdk: {
      input: ListKnowledgeBasesCommandInput;
      output: ListKnowledgeBasesCommandOutput;
    };
  };
}
