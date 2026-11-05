// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterKnowledgeBaseReplicaKeyRequest,
  RegisterKnowledgeBaseReplicaKeyResponse,
} from "../models/models_1";
import { RegisterKnowledgeBaseReplicaKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterKnowledgeBaseReplicaKeyCommand}.
 */
export interface RegisterKnowledgeBaseReplicaKeyCommandInput extends RegisterKnowledgeBaseReplicaKeyRequest {}
/**
 * @public
 *
 * The output of {@link RegisterKnowledgeBaseReplicaKeyCommand}.
 */
export interface RegisterKnowledgeBaseReplicaKeyCommandOutput extends RegisterKnowledgeBaseReplicaKeyResponse, __MetadataBearer {}

/**
 * <p>Registers a replica Region KMS key for an Amazon Q in Connect knowledge base. To use this operation, you must have <code>kms:GenerateDataKey</code> permission on the replica key. You must also have <code>kms:CreateGrant</code> permission on the primary key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RegisterKnowledgeBaseReplicaKeyCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RegisterKnowledgeBaseReplicaKeyCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // RegisterKnowledgeBaseReplicaKeyRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   replicaKmsKey: { // ReplicaKmsKey
 *     arn: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RegisterKnowledgeBaseReplicaKeyCommand(input);
 * const response = await client.send(command);
 * // { // RegisterKnowledgeBaseReplicaKeyResponse
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
 * //       replicaKmsKeys: [ // ReplicaKmsKeyList
 * //         { // ReplicaKmsKey
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ingestionStatus: "STRING_VALUE",
 * //     ingestionFailureReasons: [ // FailureReason
 * //       "STRING_VALUE",
 * //     ],
 * //     lastModifiedTime: new Date("TIMESTAMP"),
 * //     lastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterKnowledgeBaseReplicaKeyCommandInput - {@link RegisterKnowledgeBaseReplicaKeyCommandInput}
 * @returns {@link RegisterKnowledgeBaseReplicaKeyCommandOutput}
 * @see {@link RegisterKnowledgeBaseReplicaKeyCommandInput} for command's `input` shape.
 * @see {@link RegisterKnowledgeBaseReplicaKeyCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
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
export class RegisterKnowledgeBaseReplicaKeyCommand extends command<RegisterKnowledgeBaseReplicaKeyCommandInput, RegisterKnowledgeBaseReplicaKeyCommandOutput>(
  _ep0,
  _mw0,
  "RegisterKnowledgeBaseReplicaKey",
  RegisterKnowledgeBaseReplicaKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterKnowledgeBaseReplicaKeyRequest;
      output: RegisterKnowledgeBaseReplicaKeyResponse;
    };
    sdk: {
      input: RegisterKnowledgeBaseReplicaKeyCommandInput;
      output: RegisterKnowledgeBaseReplicaKeyCommandOutput;
    };
  };
}
