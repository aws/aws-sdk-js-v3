// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
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
 * <p>Updates configurations for a data source.</p>
 *          <important>
 *             <p>You can't change the <code>chunkingConfiguration</code> after you create the data source. Specify the existing <code>chunkingConfiguration</code>.</p>
 *          </important>
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
 *     type: "S3", // required
 *     s3Configuration: { // S3DataSourceConfiguration
 *       bucketArn: "STRING_VALUE", // required
 *       inclusionPrefixes: [ // S3Prefixes
 *         "STRING_VALUE",
 *       ],
 *       bucketOwnerAccountId: "STRING_VALUE",
 *     },
 *   },
 *   dataDeletionPolicy: "RETAIN" || "DELETE",
 *   serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 *   vectorIngestionConfiguration: { // VectorIngestionConfiguration
 *     chunkingConfiguration: { // ChunkingConfiguration
 *       chunkingStrategy: "FIXED_SIZE" || "NONE", // required
 *       fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 *         maxTokens: Number("int"), // required
 *         overlapPercentage: Number("int"), // required
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
 * //       type: "S3", // required
 * //       s3Configuration: { // S3DataSourceConfiguration
 * //         bucketArn: "STRING_VALUE", // required
 * //         inclusionPrefixes: [ // S3Prefixes
 * //           "STRING_VALUE",
 * //         ],
 * //         bucketOwnerAccountId: "STRING_VALUE",
 * //       },
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //     vectorIngestionConfiguration: { // VectorIngestionConfiguration
 * //       chunkingConfiguration: { // ChunkingConfiguration
 * //         chunkingStrategy: "FIXED_SIZE" || "NONE", // required
 * //         fixedSizeChunkingConfiguration: { // FixedSizeChunkingConfiguration
 * //           maxTokens: Number("int"), // required
 * //           overlapPercentage: Number("int"), // required
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateDataSource", {})
  .n("BedrockAgentClient", "UpdateDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataSourceCommand)
  .de(de_UpdateDataSourceCommand)
  .build() {}
