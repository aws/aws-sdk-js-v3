// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIngestionJobRequest, GetIngestionJobResponse } from "../models/models_0";
import { de_GetIngestionJobCommand, se_GetIngestionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIngestionJobCommand}.
 */
export interface GetIngestionJobCommandInput extends GetIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestionJobCommand}.
 */
export interface GetIngestionJobCommandOutput extends GetIngestionJobResponse, __MetadataBearer {}

/**
 * @public
 * Get an ingestion job
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetIngestionJobCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetIngestionJobCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetIngestionJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   ingestionJobId: "STRING_VALUE", // required
 * };
 * const command = new GetIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionJobResponse
 * //   ingestionJob: { // IngestionJob
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     dataSourceId: "STRING_VALUE", // required
 * //     ingestionJobId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //     statistics: { // IngestionJobStatistics
 * //       numberOfDocumentsScanned: Number("long"),
 * //       numberOfNewDocumentsIndexed: Number("long"),
 * //       numberOfModifiedDocumentsIndexed: Number("long"),
 * //       numberOfDocumentsDeleted: Number("long"),
 * //       numberOfDocumentsFailed: Number("long"),
 * //     },
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIngestionJobCommandInput - {@link GetIngestionJobCommandInput}
 * @returns {@link GetIngestionJobCommandOutput}
 * @see {@link GetIngestionJobCommandInput} for command's `input` shape.
 * @see {@link GetIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
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
export class GetIngestionJobCommand extends $Command
  .classBuilder<
    GetIngestionJobCommandInput,
    GetIngestionJobCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetIngestionJob", {})
  .n("BedrockAgentClient", "GetIngestionJobCommand")
  .f(void 0, void 0)
  .ser(se_GetIngestionJobCommand)
  .de(de_GetIngestionJobCommand)
  .build() {}
