// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetKnowledgeBaseRequest, GetKnowledgeBaseResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetKnowledgeBase } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKnowledgeBaseCommand}.
 */
export interface GetKnowledgeBaseCommandInput extends GetKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link GetKnowledgeBaseCommand}.
 */
export interface GetKnowledgeBaseCommandOutput extends GetKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetKnowledgeBaseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetKnowledgeBaseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // GetKnowledgeBaseResponse
 * //   knowledgeBase: { // KnowledgeBaseData
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     knowledgeBaseType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     lastContentModificationTime: new Date("TIMESTAMP"),
 * //     vectorIngestionConfiguration: { // VectorIngestionConfiguration
 * //       chunkingConfiguration: { // ChunkingConfiguration
 * //         chunkingStrategy: "STRING_VALUE", // required
 * //         fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 * //           maxTokens: Number("int"), // required
 * //           overlapPercentage: Number("int"), // required
 * //         },
 * //         hierarchicalChunkingConfiguration: { // HierarchicalChunkingConfiguration
 * //           levelConfigurations: [ // HierarchicalChunkingLevelConfigurations // required
 * //             { // HierarchicalChunkingLevelConfiguration
 * //               maxTokens: Number("int"), // required
 * //             },
 * //           ],
 * //           overlapTokens: Number("int"), // required
 * //         },
 * //         semanticChunkingConfiguration: { // SemanticChunkingConfiguration
 * //           maxTokens: Number("int"), // required
 * //           bufferSize: Number("int"), // required
 * //           breakpointPercentileThreshold: Number("int"), // required
 * //         },
 * //       },
 * //       parsingConfiguration: { // ParsingConfiguration
 * //         parsingStrategy: "STRING_VALUE", // required
 * //         bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfigurationForParsing
 * //           modelArn: "STRING_VALUE", // required
 * //           parsingPrompt: { // ParsingPrompt
 * //             parsingPromptText: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //       appIntegrations: { // AppIntegrationsConfiguration
 * //         appIntegrationArn: "STRING_VALUE", // required
 * //         objectFields: [ // ObjectFieldsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       managedSourceConfiguration: { // ManagedSourceConfiguration Union: only one key present
 * //         webCrawlerConfiguration: { // WebCrawlerConfiguration
 * //           urlConfiguration: { // UrlConfiguration
 * //             seedUrls: [ // SeedUrls
 * //               { // SeedUrl
 * //                 url: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           crawlerLimits: { // WebCrawlerLimits
 * //             rateLimit: Number("int"),
 * //           },
 * //           inclusionFilters: [ // UrlFilterList
 * //             "STRING_VALUE",
 * //           ],
 * //           exclusionFilters: [
 * //             "STRING_VALUE",
 * //           ],
 * //           scope: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     renderingConfiguration: { // RenderingConfiguration
 * //       templateUri: "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ingestionStatus: "STRING_VALUE",
 * //     ingestionFailureReasons: [ // FailureReason
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetKnowledgeBaseCommandInput - {@link GetKnowledgeBaseCommandInput}
 * @returns {@link GetKnowledgeBaseCommandOutput}
 * @see {@link GetKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link GetKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
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
export class GetKnowledgeBaseCommand extends $Command
  .classBuilder<
    GetKnowledgeBaseCommandInput,
    GetKnowledgeBaseCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetKnowledgeBase", {})
  .n("QConnectClient", "GetKnowledgeBaseCommand")
  .sc(GetKnowledgeBase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKnowledgeBaseRequest;
      output: GetKnowledgeBaseResponse;
    };
    sdk: {
      input: GetKnowledgeBaseCommandInput;
      output: GetKnowledgeBaseCommandOutput;
    };
  };
}
