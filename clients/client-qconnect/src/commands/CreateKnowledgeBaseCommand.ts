// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateKnowledgeBaseRequest,
  CreateKnowledgeBaseRequestFilterSensitiveLog,
  CreateKnowledgeBaseResponse,
  CreateKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateKnowledgeBaseCommand, se_CreateKnowledgeBaseCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a knowledge base.</p>
 *          <note>
 *             <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a>
 *         DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do,
 *         you'll get an <code>InvalidRequestException</code> error. </p>
 *             <p>For example, you're programmatically managing your external knowledge base, and you want
 *         to add or remove one of the fields that is being ingested from Salesforce. Do the
 *         following:</p>
 *             <ol>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p>
 *                </li>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p>
 *                </li>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different
 *             one.</p>
 *                </li>
 *                <li>
 *                   <p>Call CreateKnowledgeBase.</p>
 *                </li>
 *             </ol>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateKnowledgeBaseCommand extends $Command
  .classBuilder<
    CreateKnowledgeBaseCommandInput,
    CreateKnowledgeBaseCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "CreateKnowledgeBase", {})
  .n("QConnectClient", "CreateKnowledgeBaseCommand")
  .f(CreateKnowledgeBaseRequestFilterSensitiveLog, CreateKnowledgeBaseResponseFilterSensitiveLog)
  .ser(se_CreateKnowledgeBaseCommand)
  .de(de_CreateKnowledgeBaseCommand)
  .build() {
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
