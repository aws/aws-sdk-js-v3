// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDataSourceRequest,
  UpdateDataSourceRequestFilterSensitiveLog,
  UpdateDataSourceResponse,
  UpdateDataSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * <p>Updates the configurations for a data source connector.</p> <important> <p>You can't change the <code>chunkingConfiguration</code> after you create the data source connector. Specify the existing <code>chunkingConfiguration</code>.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateDataSourceCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateDataSourceCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateDataSourceRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   dataSourceConfiguration: { // DataSourceConfiguration
 *     type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT" || "CUSTOM" || "REDSHIFT_METADATA", // required
 *     s3Configuration: { // S3DataSourceConfiguration
 *       bucketArn: "STRING_VALUE", // required
 *       inclusionPrefixes: [ // S3Prefixes
 *         "STRING_VALUE",
 *       ],
 *       bucketOwnerAccountId: "STRING_VALUE",
 *     },
 *     webConfiguration: { // WebDataSourceConfiguration
 *       sourceConfiguration: { // WebSourceConfiguration
 *         urlConfiguration: { // UrlConfiguration
 *           seedUrls: [ // SeedUrls
 *             { // SeedUrl
 *               url: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *       crawlerConfiguration: { // WebCrawlerConfiguration
 *         crawlerLimits: { // WebCrawlerLimits
 *           rateLimit: Number("int"),
 *           maxPages: Number("int"),
 *         },
 *         inclusionFilters: [ // FilterList
 *           "STRING_VALUE",
 *         ],
 *         exclusionFilters: [
 *           "STRING_VALUE",
 *         ],
 *         scope: "HOST_ONLY" || "SUBDOMAINS",
 *         userAgent: "STRING_VALUE",
 *         userAgentHeader: "STRING_VALUE",
 *       },
 *     },
 *     confluenceConfiguration: { // ConfluenceDataSourceConfiguration
 *       sourceConfiguration: { // ConfluenceSourceConfiguration
 *         hostUrl: "STRING_VALUE", // required
 *         hostType: "SAAS", // required
 *         authType: "BASIC" || "OAUTH2_CLIENT_CREDENTIALS", // required
 *         credentialsSecretArn: "STRING_VALUE", // required
 *       },
 *       crawlerConfiguration: { // ConfluenceCrawlerConfiguration
 *         filterConfiguration: { // CrawlFilterConfiguration
 *           type: "PATTERN", // required
 *           patternObjectFilter: { // PatternObjectFilterConfiguration
 *             filters: [ // PatternObjectFilterList // required
 *               { // PatternObjectFilter
 *                 objectType: "STRING_VALUE", // required
 *                 inclusionFilters: [
 *                   "STRING_VALUE",
 *                 ],
 *                 exclusionFilters: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *     salesforceConfiguration: { // SalesforceDataSourceConfiguration
 *       sourceConfiguration: { // SalesforceSourceConfiguration
 *         hostUrl: "STRING_VALUE", // required
 *         authType: "OAUTH2_CLIENT_CREDENTIALS", // required
 *         credentialsSecretArn: "STRING_VALUE", // required
 *       },
 *       crawlerConfiguration: { // SalesforceCrawlerConfiguration
 *         filterConfiguration: {
 *           type: "PATTERN", // required
 *           patternObjectFilter: {
 *             filters: [ // required
 *               {
 *                 objectType: "STRING_VALUE", // required
 *                 inclusionFilters: [
 *                   "STRING_VALUE",
 *                 ],
 *                 exclusionFilters: "<FilterList>",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *     sharePointConfiguration: { // SharePointDataSourceConfiguration
 *       sourceConfiguration: { // SharePointSourceConfiguration
 *         tenantId: "STRING_VALUE",
 *         domain: "STRING_VALUE", // required
 *         siteUrls: [ // SharePointSiteUrls // required
 *           "STRING_VALUE",
 *         ],
 *         hostType: "ONLINE", // required
 *         authType: "OAUTH2_CLIENT_CREDENTIALS" || "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS", // required
 *         credentialsSecretArn: "STRING_VALUE", // required
 *       },
 *       crawlerConfiguration: { // SharePointCrawlerConfiguration
 *         filterConfiguration: {
 *           type: "PATTERN", // required
 *           patternObjectFilter: {
 *             filters: [ // required
 *               {
 *                 objectType: "STRING_VALUE", // required
 *                 inclusionFilters: "<FilterList>",
 *                 exclusionFilters: "<FilterList>",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 *   dataDeletionPolicy: "RETAIN" || "DELETE",
 *   serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   vectorIngestionConfiguration: { // VectorIngestionConfiguration
 *     chunkingConfiguration: { // ChunkingConfiguration
 *       chunkingStrategy: "FIXED_SIZE" || "NONE" || "HIERARCHICAL" || "SEMANTIC", // required
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
 *     customTransformationConfiguration: { // CustomTransformationConfiguration
 *       intermediateStorage: { // IntermediateStorage
 *         s3Location: { // S3Location
 *           uri: "STRING_VALUE", // required
 *         },
 *       },
 *       transformations: [ // Transformations // required
 *         { // Transformation
 *           transformationFunction: { // TransformationFunction
 *             transformationLambdaConfiguration: { // TransformationLambdaConfiguration
 *               lambdaArn: "STRING_VALUE", // required
 *             },
 *           },
 *           stepToApply: "POST_CHUNKING", // required
 *         },
 *       ],
 *     },
 *     parsingConfiguration: { // ParsingConfiguration
 *       parsingStrategy: "BEDROCK_FOUNDATION_MODEL" || "BEDROCK_DATA_AUTOMATION", // required
 *       bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfiguration
 *         modelArn: "STRING_VALUE", // required
 *         parsingPrompt: { // ParsingPrompt
 *           parsingPromptText: "STRING_VALUE", // required
 *         },
 *         parsingModality: "MULTIMODAL",
 *       },
 *       bedrockDataAutomationConfiguration: { // BedrockDataAutomationConfiguration
 *         parsingModality: "MULTIMODAL",
 *       },
 *     },
 *     contextEnrichmentConfiguration: { // ContextEnrichmentConfiguration
 *       type: "BEDROCK_FOUNDATION_MODEL", // required
 *       bedrockFoundationModelConfiguration: { // BedrockFoundationModelContextEnrichmentConfiguration
 *         enrichmentStrategyConfiguration: { // EnrichmentStrategyConfiguration
 *           method: "CHUNK_ENTITY_EXTRACTION", // required
 *         },
 *         modelArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourceResponse
 * //   dataSource: { // DataSource
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     dataSourceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     status: "AVAILABLE" || "DELETING" || "DELETE_UNSUCCESSFUL", // required
 * //     description: "STRING_VALUE",
 * //     dataSourceConfiguration: { // DataSourceConfiguration
 * //       type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT" || "CUSTOM" || "REDSHIFT_METADATA", // required
 * //       s3Configuration: { // S3DataSourceConfiguration
 * //         bucketArn: "STRING_VALUE", // required
 * //         inclusionPrefixes: [ // S3Prefixes
 * //           "STRING_VALUE",
 * //         ],
 * //         bucketOwnerAccountId: "STRING_VALUE",
 * //       },
 * //       webConfiguration: { // WebDataSourceConfiguration
 * //         sourceConfiguration: { // WebSourceConfiguration
 * //           urlConfiguration: { // UrlConfiguration
 * //             seedUrls: [ // SeedUrls
 * //               { // SeedUrl
 * //                 url: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         crawlerConfiguration: { // WebCrawlerConfiguration
 * //           crawlerLimits: { // WebCrawlerLimits
 * //             rateLimit: Number("int"),
 * //             maxPages: Number("int"),
 * //           },
 * //           inclusionFilters: [ // FilterList
 * //             "STRING_VALUE",
 * //           ],
 * //           exclusionFilters: [
 * //             "STRING_VALUE",
 * //           ],
 * //           scope: "HOST_ONLY" || "SUBDOMAINS",
 * //           userAgent: "STRING_VALUE",
 * //           userAgentHeader: "STRING_VALUE",
 * //         },
 * //       },
 * //       confluenceConfiguration: { // ConfluenceDataSourceConfiguration
 * //         sourceConfiguration: { // ConfluenceSourceConfiguration
 * //           hostUrl: "STRING_VALUE", // required
 * //           hostType: "SAAS", // required
 * //           authType: "BASIC" || "OAUTH2_CLIENT_CREDENTIALS", // required
 * //           credentialsSecretArn: "STRING_VALUE", // required
 * //         },
 * //         crawlerConfiguration: { // ConfluenceCrawlerConfiguration
 * //           filterConfiguration: { // CrawlFilterConfiguration
 * //             type: "PATTERN", // required
 * //             patternObjectFilter: { // PatternObjectFilterConfiguration
 * //               filters: [ // PatternObjectFilterList // required
 * //                 { // PatternObjectFilter
 * //                   objectType: "STRING_VALUE", // required
 * //                   inclusionFilters: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   exclusionFilters: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //       salesforceConfiguration: { // SalesforceDataSourceConfiguration
 * //         sourceConfiguration: { // SalesforceSourceConfiguration
 * //           hostUrl: "STRING_VALUE", // required
 * //           authType: "OAUTH2_CLIENT_CREDENTIALS", // required
 * //           credentialsSecretArn: "STRING_VALUE", // required
 * //         },
 * //         crawlerConfiguration: { // SalesforceCrawlerConfiguration
 * //           filterConfiguration: {
 * //             type: "PATTERN", // required
 * //             patternObjectFilter: {
 * //               filters: [ // required
 * //                 {
 * //                   objectType: "STRING_VALUE", // required
 * //                   inclusionFilters: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   exclusionFilters: "<FilterList>",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //       sharePointConfiguration: { // SharePointDataSourceConfiguration
 * //         sourceConfiguration: { // SharePointSourceConfiguration
 * //           tenantId: "STRING_VALUE",
 * //           domain: "STRING_VALUE", // required
 * //           siteUrls: [ // SharePointSiteUrls // required
 * //             "STRING_VALUE",
 * //           ],
 * //           hostType: "ONLINE", // required
 * //           authType: "OAUTH2_CLIENT_CREDENTIALS" || "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS", // required
 * //           credentialsSecretArn: "STRING_VALUE", // required
 * //         },
 * //         crawlerConfiguration: { // SharePointCrawlerConfiguration
 * //           filterConfiguration: {
 * //             type: "PATTERN", // required
 * //             patternObjectFilter: {
 * //               filters: [ // required
 * //                 {
 * //                   objectType: "STRING_VALUE", // required
 * //                   inclusionFilters: "<FilterList>",
 * //                   exclusionFilters: "<FilterList>",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //     vectorIngestionConfiguration: { // VectorIngestionConfiguration
 * //       chunkingConfiguration: { // ChunkingConfiguration
 * //         chunkingStrategy: "FIXED_SIZE" || "NONE" || "HIERARCHICAL" || "SEMANTIC", // required
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
 * //       customTransformationConfiguration: { // CustomTransformationConfiguration
 * //         intermediateStorage: { // IntermediateStorage
 * //           s3Location: { // S3Location
 * //             uri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         transformations: [ // Transformations // required
 * //           { // Transformation
 * //             transformationFunction: { // TransformationFunction
 * //               transformationLambdaConfiguration: { // TransformationLambdaConfiguration
 * //                 lambdaArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             stepToApply: "POST_CHUNKING", // required
 * //           },
 * //         ],
 * //       },
 * //       parsingConfiguration: { // ParsingConfiguration
 * //         parsingStrategy: "BEDROCK_FOUNDATION_MODEL" || "BEDROCK_DATA_AUTOMATION", // required
 * //         bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfiguration
 * //           modelArn: "STRING_VALUE", // required
 * //           parsingPrompt: { // ParsingPrompt
 * //             parsingPromptText: "STRING_VALUE", // required
 * //           },
 * //           parsingModality: "MULTIMODAL",
 * //         },
 * //         bedrockDataAutomationConfiguration: { // BedrockDataAutomationConfiguration
 * //           parsingModality: "MULTIMODAL",
 * //         },
 * //       },
 * //       contextEnrichmentConfiguration: { // ContextEnrichmentConfiguration
 * //         type: "BEDROCK_FOUNDATION_MODEL", // required
 * //         bedrockFoundationModelConfiguration: { // BedrockFoundationModelContextEnrichmentConfiguration
 * //           enrichmentStrategyConfiguration: { // EnrichmentStrategyConfiguration
 * //             method: "CHUNK_ENTITY_EXTRACTION", // required
 * //           },
 * //           modelArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     dataDeletionPolicy: "RETAIN" || "DELETE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class UpdateDataSourceCommand extends $Command
  .classBuilder<
    UpdateDataSourceCommandInput,
    UpdateDataSourceCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateDataSource", {})
  .n("BedrockAgentClient", "UpdateDataSourceCommand")
  .f(UpdateDataSourceRequestFilterSensitiveLog, UpdateDataSourceResponseFilterSensitiveLog)
  .ser(se_UpdateDataSourceCommand)
  .de(de_UpdateDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSourceRequest;
      output: UpdateDataSourceResponse;
    };
    sdk: {
      input: UpdateDataSourceCommandInput;
      output: UpdateDataSourceCommandOutput;
    };
  };
}
