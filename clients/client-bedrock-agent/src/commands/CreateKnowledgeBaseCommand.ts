// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKnowledgeBaseRequest, CreateKnowledgeBaseResponse } from "../models/models_1";
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
 * Creates a knowledge base. A knowledge base contains your data sources so that Large Language Models (LLMs) can use your data. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see [Set up a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowlege-base-prereq.html).
 *
 * > **Note:** To create a managed knowledge base, provide a `managedKnowledgeBaseConfiguration` during creation. For more information, see [Build a managed knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-build-managed.html).
 *
 * - Provide the `name` and an optional `description`.
 * - Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the `roleArn` field.
 * - For managed knowledge bases, set `embeddingModelType` to `MANAGED` to use the service-managed embedding model, or `CUSTOM` with an `embeddingModelArn` to use your own. To use your own KMS key for encryption, provide the ARN in `serverSideEncryptionConfiguration`. No vector store configuration is required for managed knowledge bases.
 * - For self-managed knowledge bases, provide the embedding model to use in the `embeddingModelArn` field in the `knowledgeBaseConfiguration` object.
 * - For self-managed knowledge bases, provide the configuration for your vector store in the `storageConfiguration` object.
 *
 *   - For an Amazon OpenSearch Service database, use the `opensearchServerlessConfiguration` object. For more information, see [Create a vector store in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html).
 *   - For an Amazon Aurora database, use the `RdsConfiguration` object. For more information, see [Create a vector store in Amazon Aurora](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
 *   - For a Pinecone database, use the `pineconeConfiguration` object. For more information, see [Create a vector store in Pinecone](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html).
 *   - For a Redis Enterprise Cloud database, use the `redisEnterpriseCloudConfiguration` object. For more information, see [Create a vector store in Redis Enterprise Cloud](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-redis.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateKnowledgeBaseRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   knowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 *     type: "VECTOR" || "KENDRA" || "SQL" || "MANAGED", // required
 *     vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 *       embeddingModelArn: "STRING_VALUE", // required
 *       embeddingModelConfiguration: { // EmbeddingModelConfiguration
 *         bedrockEmbeddingModelConfiguration: { // BedrockEmbeddingModelConfiguration
 *           dimensions: Number("int"),
 *           embeddingDataType: "FLOAT32" || "BINARY",
 *           audio: [ // AudioConfigurations
 *             { // AudioConfiguration
 *               segmentationConfiguration: { // AudioSegmentationConfiguration
 *                 fixedLengthDuration: Number("int"), // required
 *               },
 *             },
 *           ],
 *           video: [ // VideoConfigurations
 *             { // VideoConfiguration
 *               segmentationConfiguration: { // VideoSegmentationConfiguration
 *                 fixedLengthDuration: Number("int"), // required
 *               },
 *             },
 *           ],
 *           modelConfiguration: "DOCUMENT_VALUE",
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
 *     managedKnowledgeBaseConfiguration: { // ManagedKnowledgeBaseConfiguration
 *       embeddingModelType: "CUSTOM" || "MANAGED",
 *       embeddingModelArn: "STRING_VALUE",
 *       embeddingModelConfiguration: {
 *         bedrockEmbeddingModelConfiguration: {
 *           dimensions: Number("int"),
 *           embeddingDataType: "FLOAT32" || "BINARY",
 *           audio: [
 *             {
 *               segmentationConfiguration: {
 *                 fixedLengthDuration: Number("int"), // required
 *               },
 *             },
 *           ],
 *           video: [
 *             {
 *               segmentationConfiguration: {
 *                 fixedLengthDuration: Number("int"), // required
 *               },
 *             },
 *           ],
 *           modelConfiguration: "DOCUMENT_VALUE",
 *         },
 *       },
 *       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *         kmsKeyArn: "STRING_VALUE",
 *       },
 *       supplementalDataStorageConfiguration: {
 *         storageLocations: [ // required
 *           {
 *             type: "S3", // required
 *             s3Location: {
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
 * //       type: "VECTOR" || "KENDRA" || "SQL" || "MANAGED", // required
 * //       vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 * //         embeddingModelArn: "STRING_VALUE", // required
 * //         embeddingModelConfiguration: { // EmbeddingModelConfiguration
 * //           bedrockEmbeddingModelConfiguration: { // BedrockEmbeddingModelConfiguration
 * //             dimensions: Number("int"),
 * //             embeddingDataType: "FLOAT32" || "BINARY",
 * //             audio: [ // AudioConfigurations
 * //               { // AudioConfiguration
 * //                 segmentationConfiguration: { // AudioSegmentationConfiguration
 * //                   fixedLengthDuration: Number("int"), // required
 * //                 },
 * //               },
 * //             ],
 * //             video: [ // VideoConfigurations
 * //               { // VideoConfiguration
 * //                 segmentationConfiguration: { // VideoSegmentationConfiguration
 * //                   fixedLengthDuration: Number("int"), // required
 * //                 },
 * //               },
 * //             ],
 * //             modelConfiguration: "DOCUMENT_VALUE",
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
 * //       managedKnowledgeBaseConfiguration: { // ManagedKnowledgeBaseConfiguration
 * //         embeddingModelType: "CUSTOM" || "MANAGED",
 * //         embeddingModelArn: "STRING_VALUE",
 * //         embeddingModelConfiguration: {
 * //           bedrockEmbeddingModelConfiguration: {
 * //             dimensions: Number("int"),
 * //             embeddingDataType: "FLOAT32" || "BINARY",
 * //             audio: [
 * //               {
 * //                 segmentationConfiguration: {
 * //                   fixedLengthDuration: Number("int"), // required
 * //                 },
 * //               },
 * //             ],
 * //             video: [
 * //               {
 * //                 segmentationConfiguration: {
 * //                   fixedLengthDuration: Number("int"), // required
 * //                 },
 * //               },
 * //             ],
 * //             modelConfiguration: "DOCUMENT_VALUE",
 * //           },
 * //         },
 * //         serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //           kmsKeyArn: "STRING_VALUE",
 * //         },
 * //         supplementalDataStorageConfiguration: {
 * //           storageLocations: [ // required
 * //             {
 * //               type: "S3", // required
 * //               s3Location: {
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
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED" || "DELETE_UNSUCCESSFUL" || "UPDATE_UNSUCCESSFUL", // required
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
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
