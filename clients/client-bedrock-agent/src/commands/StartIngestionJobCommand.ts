// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartIngestionJobRequest, StartIngestionJobResponse } from "../models/models_0";
import { de_StartIngestionJobCommand, se_StartIngestionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartIngestionJobCommand}.
 */
export interface StartIngestionJobCommandInput extends StartIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartIngestionJobCommand}.
 */
export interface StartIngestionJobCommandOutput extends StartIngestionJobResponse, __MetadataBearer {}

/**
 * <p>Begins an ingestion job, in which a data source is added to a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, StartIngestionJobCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, StartIngestionJobCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // StartIngestionJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new StartIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartIngestionJobResponse
 * //   ingestionJob: { // IngestionJob
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     dataSourceId: "STRING_VALUE", // required
 * //     ingestionJobId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
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
 * @param StartIngestionJobCommandInput - {@link StartIngestionJobCommandInput}
 * @returns {@link StartIngestionJobCommandOutput}
 * @see {@link StartIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartIngestionJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartIngestionJobCommand extends $Command
  .classBuilder<
    StartIngestionJobCommandInput,
    StartIngestionJobCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "StartIngestionJob", {})
  .n("BedrockAgentClient", "StartIngestionJobCommand")
  .f(void 0, void 0)
  .ser(se_StartIngestionJobCommand)
  .de(de_StartIngestionJobCommand)
  .build() {}
