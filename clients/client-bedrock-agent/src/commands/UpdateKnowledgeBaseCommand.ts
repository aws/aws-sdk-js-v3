// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateKnowledgeBaseRequest, UpdateKnowledgeBaseResponse } from "../models/models_1";
import { UpdateKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseCommand}.
 */
export interface UpdateKnowledgeBaseCommandInput extends UpdateKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseCommand}.
 */
export interface UpdateKnowledgeBaseCommandOutput extends UpdateKnowledgeBaseResponse, __MetadataBearer {}

/**
 * Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same.
 *
 * You can change the following fields:
 *
 * - `name`
 * - `description`
 * - `roleArn`
 *
 * You can't change the `knowledgeBaseConfiguration` or `storageConfiguration` fields, so you must specify the same configurations as when you created the knowledge base. You can send a [GetKnowledgeBase](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetKnowledgeBase.html) request and copy the same configurations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseResponse
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
 * @param UpdateKnowledgeBaseCommandInput - {@link UpdateKnowledgeBaseCommandInput}
 * @returns {@link UpdateKnowledgeBaseCommandOutput}
 * @see {@link UpdateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
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
export class UpdateKnowledgeBaseCommand extends command<UpdateKnowledgeBaseCommandInput, UpdateKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKnowledgeBase",
  UpdateKnowledgeBase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKnowledgeBaseRequest;
      output: UpdateKnowledgeBaseResponse;
    };
    sdk: {
      input: UpdateKnowledgeBaseCommandInput;
      output: UpdateKnowledgeBaseCommandOutput;
    };
  };
}
