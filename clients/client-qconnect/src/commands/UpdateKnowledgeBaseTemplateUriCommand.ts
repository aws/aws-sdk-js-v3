// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateKnowledgeBaseTemplateUriRequest,
  UpdateKnowledgeBaseTemplateUriResponse,
  UpdateKnowledgeBaseTemplateUriResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_UpdateKnowledgeBaseTemplateUriCommand,
  se_UpdateKnowledgeBaseTemplateUriCommand,
} from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandInput extends UpdateKnowledgeBaseTemplateUriRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandOutput
  extends UpdateKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
 *       of type EXTERNAL. Include a single variable in <code>$\{variable\}</code> format; this
 *       interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce
 *       article, it has an <code>Id</code> value, and you can set the template URI to
 *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$\{Id\}*\/view</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QConnectClient(config);
 * const input = { // UpdateKnowledgeBaseTemplateUriRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   templateUri: "STRING_VALUE", // required
 * };
 * const command = new UpdateKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseTemplateUriResponse
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
 * @param UpdateKnowledgeBaseTemplateUriCommandInput - {@link UpdateKnowledgeBaseTemplateUriCommandInput}
 * @returns {@link UpdateKnowledgeBaseTemplateUriCommandOutput}
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class UpdateKnowledgeBaseTemplateUriCommand extends $Command
  .classBuilder<
    UpdateKnowledgeBaseTemplateUriCommandInput,
    UpdateKnowledgeBaseTemplateUriCommandOutput,
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
  .s("WisdomService", "UpdateKnowledgeBaseTemplateUri", {})
  .n("QConnectClient", "UpdateKnowledgeBaseTemplateUriCommand")
  .f(void 0, UpdateKnowledgeBaseTemplateUriResponseFilterSensitiveLog)
  .ser(se_UpdateKnowledgeBaseTemplateUriCommand)
  .de(de_UpdateKnowledgeBaseTemplateUriCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBaseTemplateUriRequest;
      output: UpdateKnowledgeBaseTemplateUriResponse;
    };
    sdk: {
      input: UpdateKnowledgeBaseTemplateUriCommandInput;
      output: UpdateKnowledgeBaseTemplateUriCommandOutput;
    };
  };
}
