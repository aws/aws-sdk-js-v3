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
export { __MetadataBearer, $Command };
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
 * @public
 * Start a new ingestion job
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
 * @param StartIngestionJobCommandInput - {@link StartIngestionJobCommandInput}
 * @returns {@link StartIngestionJobCommandOutput}
 * @see {@link StartIngestionJobCommandInput} for command's `input` shape.
 * @see {@link StartIngestionJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
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
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
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
