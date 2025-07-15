// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetKnowledgeBaseRequest,
  GetKnowledgeBaseResponse,
  GetKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_GetKnowledgeBaseCommand, se_GetKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

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
 * <p>Gets information about a knoweldge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // { // GetKnowledgeBaseResponse
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
 * @param GetKnowledgeBaseCommandInput - {@link GetKnowledgeBaseCommandInput}
 * @returns {@link GetKnowledgeBaseCommandOutput}
 * @see {@link GetKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link GetKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
export class GetKnowledgeBaseCommand extends $Command
  .classBuilder<
    GetKnowledgeBaseCommandInput,
    GetKnowledgeBaseCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetKnowledgeBase", {})
  .n("BedrockAgentClient", "GetKnowledgeBaseCommand")
  .f(void 0, GetKnowledgeBaseResponseFilterSensitiveLog)
  .ser(se_GetKnowledgeBaseCommand)
  .de(de_GetKnowledgeBaseCommand)
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
