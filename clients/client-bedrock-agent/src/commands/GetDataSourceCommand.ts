// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataSourceRequest, GetDataSourceResponse } from "../models/models_0";
import { de_GetDataSourceCommand, se_GetDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetDataSourceCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetDataSourceCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetDataSourceRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceResponse
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
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDataSourceCommand extends $Command
  .classBuilder<
    GetDataSourceCommandInput,
    GetDataSourceCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetDataSource", {})
  .n("BedrockAgentClient", "GetDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_GetDataSourceCommand)
  .de(de_GetDataSourceCommand)
  .build() {}
