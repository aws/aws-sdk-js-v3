// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIngestionJobRequest } from "../models/models_0";
import { GetIngestionJobResponse } from "../models/models_1";
import { de_GetIngestionJobCommand, se_GetIngestionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetIngestionJobCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetIngestionJobCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
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
 * //     status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //     statistics: { // IngestionJobStatistics
 * //       numberOfDocumentsScanned: Number("long"),
 * //       numberOfMetadataDocumentsScanned: Number("long"),
 * //       numberOfNewDocumentsIndexed: Number("long"),
 * //       numberOfModifiedDocumentsIndexed: Number("long"),
 * //       numberOfMetadataDocumentsModified: Number("long"),
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
export class GetIngestionJobCommand extends $Command
  .classBuilder<
    GetIngestionJobCommandInput,
    GetIngestionJobCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetIngestionJob", {})
  .n("BedrockAgentClient", "GetIngestionJobCommand")
  .f(void 0, void 0)
  .ser(se_GetIngestionJobCommand)
  .de(de_GetIngestionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestionJobRequest;
      output: GetIngestionJobResponse;
    };
    sdk: {
      input: GetIngestionJobCommandInput;
      output: GetIngestionJobCommandOutput;
    };
  };
}
