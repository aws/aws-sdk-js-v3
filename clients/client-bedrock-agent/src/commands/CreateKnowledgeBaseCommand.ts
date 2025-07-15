// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateKnowledgeBaseRequest,
  CreateKnowledgeBaseRequestFilterSensitiveLog,
  CreateKnowledgeBaseResponse,
  CreateKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_CreateKnowledgeBaseCommand, se_CreateKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

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
 * <p>Creates a knowledge base. A knowledge base contains your data sources so that Large Language Models (LLMs) can use your data. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowlege-base-prereq.html">Set up a knowledge base</a>.</p> <note> <p>If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create">Create a knowledge base</a>.</p> </note> <ul> <li> <p>Provide the <code>name</code> and an optional <code>description</code>.</p> </li> <li> <p>Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the <code>roleArn</code> field.</p> </li> <li> <p>Provide the embedding model to use in the <code>embeddingModelArn</code> field in the <code>knowledgeBaseConfiguration</code> object.</p> </li> <li> <p>Provide the configuration for your vector store in the <code>storageConfiguration</code> object.</p> <ul> <li> <p>For an Amazon OpenSearch Service database, use the <code>opensearchServerlessConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html">Create a vector store in Amazon OpenSearch Service</a>.</p> </li> <li> <p>For an Amazon Aurora database, use the <code>RdsConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html">Create a vector store in Amazon Aurora</a>.</p> </li> <li> <p>For a Pinecone database, use the <code>pineconeConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html">Create a vector store in Pinecone</a>.</p> </li> <li> <p>For a Redis Enterprise Cloud database, use the <code>redisEnterpriseCloudConfiguration</code> object. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-redis.html">Create a vector store in Redis Enterprise Cloud</a>.</p> </li> </ul> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateKnowledgeBaseRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   knowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 *     type: "VECTOR" || "KENDRA" || "SQL", // required
 *     vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 *       embeddingModelArn: "STRING_VALUE", // required
 *       embeddingModelConfiguration: { // EmbeddingModelConfiguration
 *         bedrockEmbeddingModelConfiguration: { // BedrockEmbeddingModelConfiguration
 *           dimensions: Number("int"),
 *           embeddingDataType: "FLOAT32" || "BINARY",
 *         },
 *       },
 *       supplementalDataStorageConfiguration: { // SupplementalDataStorageConfiguration
 *         storageLocations: [ // SupplementalDataStorageLocations // required
 *           { // SupplementalDataStorageLocation
 *             type: "S3", // required
 *             s3Location: { // S3Location
 *               uri: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     kendraKnowledgeBaseConfiguration: { // KendraKnowledgeBaseConfiguration
 *       kendraIndexArn: "STRING_VALUE", // required
 *     },
 *     sqlKnowledgeBaseConfiguration: { // SqlKnowledgeBaseConfiguration
 *       type: "REDSHIFT", // required
 *       redshiftConfiguration: { // RedshiftConfiguration
 *         storageConfigurations: [ // RedshiftQueryEngineStorageConfigurations // required
 *           { // RedshiftQueryEngineStorageConfiguration
 *             type: "REDSHIFT" || "AWS_DATA_CATALOG", // required
 *             awsDataCatalogConfiguration: { // RedshiftQueryEngineAwsDataCatalogStorageConfiguration
 *               tableNames: [ // AwsDataCatalogTableNames // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             redshiftConfiguration: { // RedshiftQueryEngineRedshiftStorageConfiguration
 *               databaseName: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *         queryEngineConfiguration: { // RedshiftQueryEngineConfiguration
 *           type: "SERVERLESS" || "PROVISIONED", // required
 *           serverlessConfiguration: { // RedshiftServerlessConfiguration
 *             workgroupArn: "STRING_VALUE", // required
 *             authConfiguration: { // RedshiftServerlessAuthConfiguration
 *               type: "IAM" || "USERNAME_PASSWORD", // required
 *               usernamePasswordSecretArn: "STRING_VALUE",
 *             },
 *           },
 *           provisionedConfiguration: { // RedshiftProvisionedConfiguration
 *             clusterIdentifier: "STRING_VALUE", // required
 *             authConfiguration: { // RedshiftProvisionedAuthConfiguration
 *               type: "IAM" || "USERNAME_PASSWORD" || "USERNAME", // required
 *               databaseUser: "STRING_VALUE",
 *               usernamePasswordSecretArn: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         queryGenerationConfiguration: { // QueryGenerationConfiguration
 *           executionTimeoutSeconds: Number("int"),
 *           generationContext: { // QueryGenerationContext
 *             tables: [ // QueryGenerationTables
 *               { // QueryGenerationTable
 *                 name: "STRING_VALUE", // required
 *                 description: "STRING_VALUE",
 *                 inclusion: "INCLUDE" || "EXCLUDE",
 *                 columns: [ // QueryGenerationColumns
 *                   { // QueryGenerationColumn
 *                     name: "STRING_VALUE",
 *                     description: "STRING_VALUE",
 *                     inclusion: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 ],
 *               },
 *             ],
 *             curatedQueries: [ // CuratedQueries
 *               { // CuratedQuery
 *                 naturalLanguage: "STRING_VALUE", // required
 *                 sql: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 *   storageConfiguration: { // StorageConfiguration
 *     type: "OPENSEARCH_SERVERLESS" || "PINECONE" || "REDIS_ENTERPRISE_CLOUD" || "RDS" || "MONGO_DB_ATLAS" || "NEPTUNE_ANALYTICS" || "OPENSEARCH_MANAGED_CLUSTER" || "S3_VECTORS", // required
 *     opensearchServerlessConfiguration: { // OpenSearchServerlessConfiguration
 *       collectionArn: "STRING_VALUE", // required
 *       vectorIndexName: "STRING_VALUE", // required
 *       fieldMapping: { // OpenSearchServerlessFieldMapping
 *         vectorField: "STRING_VALUE", // required
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *     },
 *     opensearchManagedClusterConfiguration: { // OpenSearchManagedClusterConfiguration
 *       domainEndpoint: "STRING_VALUE", // required
 *       domainArn: "STRING_VALUE", // required
 *       vectorIndexName: "STRING_VALUE", // required
 *       fieldMapping: { // OpenSearchManagedClusterFieldMapping
 *         vectorField: "STRING_VALUE", // required
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *     },
 *     pineconeConfiguration: { // PineconeConfiguration
 *       connectionString: "STRING_VALUE", // required
 *       credentialsSecretArn: "STRING_VALUE", // required
 *       namespace: "STRING_VALUE",
 *       fieldMapping: { // PineconeFieldMapping
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *     },
 *     redisEnterpriseCloudConfiguration: { // RedisEnterpriseCloudConfiguration
 *       endpoint: "STRING_VALUE", // required
 *       vectorIndexName: "STRING_VALUE", // required
 *       credentialsSecretArn: "STRING_VALUE", // required
 *       fieldMapping: { // RedisEnterpriseCloudFieldMapping
 *         vectorField: "STRING_VALUE", // required
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *     },
 *     rdsConfiguration: { // RdsConfiguration
 *       resourceArn: "STRING_VALUE", // required
 *       credentialsSecretArn: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *       tableName: "STRING_VALUE", // required
 *       fieldMapping: { // RdsFieldMapping
 *         primaryKeyField: "STRING_VALUE", // required
 *         vectorField: "STRING_VALUE", // required
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *         customMetadataField: "STRING_VALUE",
 *       },
 *     },
 *     mongoDbAtlasConfiguration: { // MongoDbAtlasConfiguration
 *       endpoint: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *       collectionName: "STRING_VALUE", // required
 *       vectorIndexName: "STRING_VALUE", // required
 *       credentialsSecretArn: "STRING_VALUE", // required
 *       fieldMapping: { // MongoDbAtlasFieldMapping
 *         vectorField: "STRING_VALUE", // required
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *       endpointServiceName: "STRING_VALUE",
 *       textIndexName: "STRING_VALUE",
 *     },
 *     neptuneAnalyticsConfiguration: { // NeptuneAnalyticsConfiguration
 *       graphArn: "STRING_VALUE", // required
 *       fieldMapping: { // NeptuneAnalyticsFieldMapping
 *         textField: "STRING_VALUE", // required
 *         metadataField: "STRING_VALUE", // required
 *       },
 *     },
 *     s3VectorsConfiguration: { // S3VectorsConfiguration
 *       vectorBucketArn: "STRING_VALUE",
 *       indexArn: "STRING_VALUE",
 *       indexName: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateKnowledgeBaseResponse
 * //   knowledgeBase: { // KnowledgeBase
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE", // required
 * //     knowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 * //       type: "VECTOR" || "KENDRA" || "SQL", // required
 * //       vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 * //         embeddingModelArn: "STRING_VALUE", // required
 * //         embeddingModelConfiguration: { // EmbeddingModelConfiguration
 * //           bedrockEmbeddingModelConfiguration: { // BedrockEmbeddingModelConfiguration
 * //             dimensions: Number("int"),
 * //             embeddingDataType: "FLOAT32" || "BINARY",
 * //           },
 * //         },
 * //         supplementalDataStorageConfiguration: { // SupplementalDataStorageConfiguration
 * //           storageLocations: [ // SupplementalDataStorageLocations // required
 * //             { // SupplementalDataStorageLocation
 * //               type: "S3", // required
 * //               s3Location: { // S3Location
 * //                 uri: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       kendraKnowledgeBaseConfiguration: { // KendraKnowledgeBaseConfiguration
 * //         kendraIndexArn: "STRING_VALUE", // required
 * //       },
 * //       sqlKnowledgeBaseConfiguration: { // SqlKnowledgeBaseConfiguration
 * //         type: "REDSHIFT", // required
 * //         redshiftConfiguration: { // RedshiftConfiguration
 * //           storageConfigurations: [ // RedshiftQueryEngineStorageConfigurations // required
 * //             { // RedshiftQueryEngineStorageConfiguration
 * //               type: "REDSHIFT" || "AWS_DATA_CATALOG", // required
 * //               awsDataCatalogConfiguration: { // RedshiftQueryEngineAwsDataCatalogStorageConfiguration
 * //                 tableNames: [ // AwsDataCatalogTableNames // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               redshiftConfiguration: { // RedshiftQueryEngineRedshiftStorageConfiguration
 * //                 databaseName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //           queryEngineConfiguration: { // RedshiftQueryEngineConfiguration
 * //             type: "SERVERLESS" || "PROVISIONED", // required
 * //             serverlessConfiguration: { // RedshiftServerlessConfiguration
 * //               workgroupArn: "STRING_VALUE", // required
 * //               authConfiguration: { // RedshiftServerlessAuthConfiguration
 * //                 type: "IAM" || "USERNAME_PASSWORD", // required
 * //                 usernamePasswordSecretArn: "STRING_VALUE",
 * //               },
 * //             },
 * //             provisionedConfiguration: { // RedshiftProvisionedConfiguration
 * //               clusterIdentifier: "STRING_VALUE", // required
 * //               authConfiguration: { // RedshiftProvisionedAuthConfiguration
 * //                 type: "IAM" || "USERNAME_PASSWORD" || "USERNAME", // required
 * //                 databaseUser: "STRING_VALUE",
 * //                 usernamePasswordSecretArn: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           queryGenerationConfiguration: { // QueryGenerationConfiguration
 * //             executionTimeoutSeconds: Number("int"),
 * //             generationContext: { // QueryGenerationContext
 * //               tables: [ // QueryGenerationTables
 * //                 { // QueryGenerationTable
 * //                   name: "STRING_VALUE", // required
 * //                   description: "STRING_VALUE",
 * //                   inclusion: "INCLUDE" || "EXCLUDE",
 * //                   columns: [ // QueryGenerationColumns
 * //                     { // QueryGenerationColumn
 * //                       name: "STRING_VALUE",
 * //                       description: "STRING_VALUE",
 * //                       inclusion: "INCLUDE" || "EXCLUDE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               curatedQueries: [ // CuratedQueries
 * //                 { // CuratedQuery
 * //                   naturalLanguage: "STRING_VALUE", // required
 * //                   sql: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     storageConfiguration: { // StorageConfiguration
 * //       type: "OPENSEARCH_SERVERLESS" || "PINECONE" || "REDIS_ENTERPRISE_CLOUD" || "RDS" || "MONGO_DB_ATLAS" || "NEPTUNE_ANALYTICS" || "OPENSEARCH_MANAGED_CLUSTER" || "S3_VECTORS", // required
 * //       opensearchServerlessConfiguration: { // OpenSearchServerlessConfiguration
 * //         collectionArn: "STRING_VALUE", // required
 * //         vectorIndexName: "STRING_VALUE", // required
 * //         fieldMapping: { // OpenSearchServerlessFieldMapping
 * //           vectorField: "STRING_VALUE", // required
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       opensearchManagedClusterConfiguration: { // OpenSearchManagedClusterConfiguration
 * //         domainEndpoint: "STRING_VALUE", // required
 * //         domainArn: "STRING_VALUE", // required
 * //         vectorIndexName: "STRING_VALUE", // required
 * //         fieldMapping: { // OpenSearchManagedClusterFieldMapping
 * //           vectorField: "STRING_VALUE", // required
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       pineconeConfiguration: { // PineconeConfiguration
 * //         connectionString: "STRING_VALUE", // required
 * //         credentialsSecretArn: "STRING_VALUE", // required
 * //         namespace: "STRING_VALUE",
 * //         fieldMapping: { // PineconeFieldMapping
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       redisEnterpriseCloudConfiguration: { // RedisEnterpriseCloudConfiguration
 * //         endpoint: "STRING_VALUE", // required
 * //         vectorIndexName: "STRING_VALUE", // required
 * //         credentialsSecretArn: "STRING_VALUE", // required
 * //         fieldMapping: { // RedisEnterpriseCloudFieldMapping
 * //           vectorField: "STRING_VALUE", // required
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       rdsConfiguration: { // RdsConfiguration
 * //         resourceArn: "STRING_VALUE", // required
 * //         credentialsSecretArn: "STRING_VALUE", // required
 * //         databaseName: "STRING_VALUE", // required
 * //         tableName: "STRING_VALUE", // required
 * //         fieldMapping: { // RdsFieldMapping
 * //           primaryKeyField: "STRING_VALUE", // required
 * //           vectorField: "STRING_VALUE", // required
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //           customMetadataField: "STRING_VALUE",
 * //         },
 * //       },
 * //       mongoDbAtlasConfiguration: { // MongoDbAtlasConfiguration
 * //         endpoint: "STRING_VALUE", // required
 * //         databaseName: "STRING_VALUE", // required
 * //         collectionName: "STRING_VALUE", // required
 * //         vectorIndexName: "STRING_VALUE", // required
 * //         credentialsSecretArn: "STRING_VALUE", // required
 * //         fieldMapping: { // MongoDbAtlasFieldMapping
 * //           vectorField: "STRING_VALUE", // required
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //         endpointServiceName: "STRING_VALUE",
 * //         textIndexName: "STRING_VALUE",
 * //       },
 * //       neptuneAnalyticsConfiguration: { // NeptuneAnalyticsConfiguration
 * //         graphArn: "STRING_VALUE", // required
 * //         fieldMapping: { // NeptuneAnalyticsFieldMapping
 * //           textField: "STRING_VALUE", // required
 * //           metadataField: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       s3VectorsConfiguration: { // S3VectorsConfiguration
 * //         vectorBucketArn: "STRING_VALUE",
 * //         indexArn: "STRING_VALUE",
 * //         indexName: "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED" || "DELETE_UNSUCCESSFUL", // required
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
 * @param CreateKnowledgeBaseCommandInput - {@link CreateKnowledgeBaseCommandInput}
 * @returns {@link CreateKnowledgeBaseCommandOutput}
 * @see {@link CreateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link CreateKnowledgeBaseCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateKnowledgeBaseCommand extends $Command
  .classBuilder<
    CreateKnowledgeBaseCommandInput,
    CreateKnowledgeBaseCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "CreateKnowledgeBase", {})
  .n("BedrockAgentClient", "CreateKnowledgeBaseCommand")
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
