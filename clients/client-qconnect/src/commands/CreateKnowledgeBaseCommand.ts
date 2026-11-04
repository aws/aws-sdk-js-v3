// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKnowledgeBaseRequest, CreateKnowledgeBaseResponse } from "../models/models_0";
import { CreateKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateKnowledgeBaseCommand}.
 */
export interface CreateKnowledgeBaseCommandInput extends CreateKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateKnowledgeBaseCommand}.
 */
export interface CreateKnowledgeBaseCommandOutput extends CreateKnowledgeBaseResponse, __MetadataBearer {}

/**
 * Creates a knowledge base.
 *
 * > **Note:**
 * >
 * > When using this API, you cannot reuse [Amazon AppIntegrations](https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html) DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an `InvalidRequestException` error.
 * >
 * > For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:
 * >
 * > 1. Call [DeleteKnowledgeBase](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_DeleteKnowledgeBase.html).
 * > 2. Call [DeleteDataIntegration](https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html).
 * > 3. Call [CreateDataIntegration](https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html) to recreate the DataIntegration or a create different one.
 * > 4. Call CreateKnowledgeBase.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateKnowledgeBaseRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   knowledgeBaseType: "STRING_VALUE", // required
 *   sourceConfiguration: { // SourceConfiguration Union: only one key present
 *     appIntegrations: { // AppIntegrationsConfiguration
 *       appIntegrationArn: "STRING_VALUE", // required
 *       objectFields: [ // ObjectFieldsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     managedSourceConfiguration: { // ManagedSourceConfiguration Union: only one key present
 *       webCrawlerConfiguration: { // WebCrawlerConfiguration
 *         urlConfiguration: { // UrlConfiguration
 *           seedUrls: [ // SeedUrls
 *             { // SeedUrl
 *               url: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *         crawlerLimits: { // WebCrawlerLimits
 *           rateLimit: Number("int"),
 *         },
 *         inclusionFilters: [ // UrlFilterList
 *           "STRING_VALUE",
 *         ],
 *         exclusionFilters: [
 *           "STRING_VALUE",
 *         ],
 *         scope: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   renderingConfiguration: { // RenderingConfiguration
 *     templateUri: "STRING_VALUE",
 *   },
 *   vectorIngestionConfiguration: { // VectorIngestionConfiguration
 *     chunkingConfiguration: { // ChunkingConfiguration
 *       chunkingStrategy: "STRING_VALUE", // required
 *       fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 *         maxTokens: Number("int"), // required
 *         overlapPercentage: Number("int"), // required
 *       },
 *       hierarchicalChunkingConfiguration: { // HierarchicalChunkingConfiguration
 *         levelConfigurations: [ // HierarchicalChunkingLevelConfigurations // required
 *           { // HierarchicalChunkingLevelConfiguration
 *             maxTokens: Number("int"), // required
 *           },
 *         ],
 *         overlapTokens: Number("int"), // required
 *       },
 *       semanticChunkingConfiguration: { // SemanticChunkingConfiguration
 *         maxTokens: Number("int"), // required
 *         bufferSize: Number("int"), // required
 *         breakpointPercentileThreshold: Number("int"), // required
 *       },
 *     },
 *     parsingConfiguration: { // ParsingConfiguration
 *       parsingStrategy: "STRING_VALUE", // required
 *       bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfigurationForParsing
 *         modelArn: "STRING_VALUE", // required
 *         parsingPrompt: { // ParsingPrompt
 *           parsingPromptText: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateKnowledgeBaseResponse
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
 * @param CreateKnowledgeBaseCommandInput - {@link CreateKnowledgeBaseCommandInput}
 * @returns {@link CreateKnowledgeBaseCommandOutput}
 * @see {@link CreateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link CreateKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class CreateKnowledgeBaseCommand extends command<CreateKnowledgeBaseCommandInput, CreateKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateKnowledgeBase",
  CreateKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKnowledgeBaseRequest;
      output: CreateKnowledgeBaseResponse;
    };
    sdk: {
      input: CreateKnowledgeBaseCommandInput;
      output: CreateKnowledgeBaseCommandOutput;
    };
  };
}
