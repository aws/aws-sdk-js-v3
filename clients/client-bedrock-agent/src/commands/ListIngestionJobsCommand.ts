// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListIngestionJobsRequest, ListIngestionJobsResponse } from "../models/models_0";
import { ListIngestionJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the data ingestion jobs for a data source. The list also includes information about each job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListIngestionJobsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListIngestionJobsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
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
 * //       status: "STARTING" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       statistics: { // IngestionJobStatistics
 * //         numberOfDocumentsScanned: Number("long"),
 * //         numberOfMetadataDocumentsScanned: Number("long"),
 * //         numberOfNewDocumentsIndexed: Number("long"),
 * //         numberOfModifiedDocumentsIndexed: Number("long"),
 * //         numberOfMetadataDocumentsModified: Number("long"),
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
export class ListIngestionJobsCommand extends $Command
  .classBuilder<
    ListIngestionJobsCommandInput,
    ListIngestionJobsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListIngestionJobs", {})
  .n("BedrockAgentClient", "ListIngestionJobsCommand")
  .sc(ListIngestionJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionJobsRequest;
      output: ListIngestionJobsResponse;
    };
    sdk: {
      input: ListIngestionJobsCommandInput;
      output: ListIngestionJobsCommandOutput;
    };
  };
}
