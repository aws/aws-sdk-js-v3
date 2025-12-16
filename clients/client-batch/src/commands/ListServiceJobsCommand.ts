// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceJobsRequest, ListServiceJobsResponse } from "../models/models_0";
import { ListServiceJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceJobsCommand}.
 */
export interface ListServiceJobsCommandInput extends ListServiceJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceJobsCommand}.
 */
export interface ListServiceJobsCommandOutput extends ListServiceJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of service jobs for a specified job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListServiceJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListServiceJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListServiceJobsRequest
 *   jobQueue: "STRING_VALUE",
 *   jobStatus: "SUBMITTED" || "PENDING" || "RUNNABLE" || "SCHEDULED" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // ListJobsFilterList
 *     { // KeyValuesPair
 *       name: "STRING_VALUE",
 *       values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListServiceJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceJobsResponse
 * //   jobSummaryList: [ // ServiceJobSummaryList // required
 * //     { // ServiceJobSummary
 * //       latestAttempt: { // LatestServiceJobAttempt
 * //         serviceResourceId: { // ServiceResourceId
 * //           name: "TrainingJobArn", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: Number("long"),
 * //       jobArn: "STRING_VALUE",
 * //       jobId: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       serviceJobType: "SAGEMAKER_TRAINING", // required
 * //       shareIdentifier: "STRING_VALUE",
 * //       status: "SUBMITTED" || "PENDING" || "RUNNABLE" || "SCHEDULED" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       startedAt: Number("long"),
 * //       stoppedAt: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceJobsCommandInput - {@link ListServiceJobsCommandInput}
 * @returns {@link ListServiceJobsCommandOutput}
 * @see {@link ListServiceJobsCommandInput} for command's `input` shape.
 * @see {@link ListServiceJobsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class ListServiceJobsCommand extends $Command
  .classBuilder<
    ListServiceJobsCommandInput,
    ListServiceJobsCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "ListServiceJobs", {})
  .n("BatchClient", "ListServiceJobsCommand")
  .sc(ListServiceJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceJobsRequest;
      output: ListServiceJobsResponse;
    };
    sdk: {
      input: ListServiceJobsCommandInput;
      output: ListServiceJobsCommandOutput;
    };
  };
}
