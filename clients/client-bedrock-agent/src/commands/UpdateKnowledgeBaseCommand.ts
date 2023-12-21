// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateKnowledgeBaseRequest, UpdateKnowledgeBaseResponse } from "../models/models_0";
import { de_UpdateKnowledgeBaseCommand, se_UpdateKnowledgeBaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Update an existing knowledge base
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateKnowledgeBaseCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateKnowledgeBaseCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   knowledgeBaseConfiguration: { // KnowledgeBaseConfiguration
 *     type: "VECTOR", // required
 *     vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 *       embeddingModelArn: "STRING_VALUE", // required
 *     },
 *   },
 *   storageConfiguration: { // StorageConfiguration
 *     type: "OPENSEARCH_SERVERLESS" || "PINECONE" || "REDIS_ENTERPRISE_CLOUD" || "RDS", // required
 *     opensearchServerlessConfiguration: { // OpenSearchServerlessConfiguration
 *       collectionArn: "STRING_VALUE", // required
 *       vectorIndexName: "STRING_VALUE", // required
 *       fieldMapping: { // OpenSearchServerlessFieldMapping
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
 *       },
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
 * //       type: "VECTOR", // required
 * //       vectorKnowledgeBaseConfiguration: { // VectorKnowledgeBaseConfiguration
 * //         embeddingModelArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     storageConfiguration: { // StorageConfiguration
 * //       type: "OPENSEARCH_SERVERLESS" || "PINECONE" || "REDIS_ENTERPRISE_CLOUD" || "RDS", // required
 * //       opensearchServerlessConfiguration: { // OpenSearchServerlessConfiguration
 * //         collectionArn: "STRING_VALUE", // required
 * //         vectorIndexName: "STRING_VALUE", // required
 * //         fieldMapping: { // OpenSearchServerlessFieldMapping
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
 * //         },
 * //       },
 * //     },
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING" || "FAILED", // required
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class UpdateKnowledgeBaseCommand extends $Command
  .classBuilder<
    UpdateKnowledgeBaseCommandInput,
    UpdateKnowledgeBaseCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateKnowledgeBase", {})
  .n("BedrockAgentClient", "UpdateKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKnowledgeBaseCommand)
  .de(de_UpdateKnowledgeBaseCommand)
  .build() {}
