// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIngestionJobsRequest, ListIngestionJobsResponse } from "../models/models_0";
import { de_ListIngestionJobsCommand, se_ListIngestionJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandInput extends ListIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionJobsCommand}.
 */
export interface ListIngestionJobsCommandOutput extends ListIngestionJobsResponse, __MetadataBearer {}

/**
 * List ingestion jobs
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListIngestionJobsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListIngestionJobsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListIngestionJobsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   filters: [ // IngestionJobFilters
 *     { // IngestionJobFilter
 *       attribute: "STATUS", // required
 *       operator: "EQ", // required
 *       values: [ // IngestionJobFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   sortBy: { // IngestionJobSortBy
 *     attribute: "STATUS" || "STARTED_AT", // required
 *     order: "ASCENDING" || "DESCENDING", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionJobsResponse
 * //   ingestionJobSummaries: [ // IngestionJobSummaries // required
 * //     { // IngestionJobSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       dataSourceId: "STRING_VALUE", // required
 * //       ingestionJobId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       statistics: { // IngestionJobStatistics
 * //         numberOfDocumentsScanned: Number("long"),
 * //         numberOfNewDocumentsIndexed: Number("long"),
 * //         numberOfModifiedDocumentsIndexed: Number("long"),
 * //         numberOfDocumentsDeleted: Number("long"),
 * //         numberOfDocumentsFailed: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionJobsCommandInput - {@link ListIngestionJobsCommandInput}
 * @returns {@link ListIngestionJobsCommandOutput}
 * @see {@link ListIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListIngestionJobsCommand extends $Command
  .classBuilder<
    ListIngestionJobsCommandInput,
    ListIngestionJobsCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListIngestionJobs", {})
  .n("BedrockAgentClient", "ListIngestionJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListIngestionJobsCommand)
  .de(de_ListIngestionJobsCommand)
  .build() {}
