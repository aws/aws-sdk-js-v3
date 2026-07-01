// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAIBenchmarkJobsRequest, ListAIBenchmarkJobsResponse } from "../models/models_3";
import { ListAIBenchmarkJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAIBenchmarkJobsCommand}.
 */
export interface ListAIBenchmarkJobsCommandInput extends ListAIBenchmarkJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIBenchmarkJobsCommand}.
 */
export interface ListAIBenchmarkJobsCommandOutput extends ListAIBenchmarkJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of AI benchmark jobs in your account. You can filter the results by name, status, and creation time, and sort the results. The response is paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAIBenchmarkJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAIBenchmarkJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListAIBenchmarkJobsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAIBenchmarkJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIBenchmarkJobsResponse
 * //   AIBenchmarkJobs: [ // AIBenchmarkJobSummaryList // required
 * //     { // AIBenchmarkJobSummary
 * //       AIBenchmarkJobName: "STRING_VALUE", // required
 * //       AIBenchmarkJobArn: "STRING_VALUE", // required
 * //       AIBenchmarkJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       AIWorkloadConfigName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIBenchmarkJobsCommandInput - {@link ListAIBenchmarkJobsCommandInput}
 * @returns {@link ListAIBenchmarkJobsCommandOutput}
 * @see {@link ListAIBenchmarkJobsCommandInput} for command's `input` shape.
 * @see {@link ListAIBenchmarkJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListAIBenchmarkJobsCommand extends command<ListAIBenchmarkJobsCommandInput, ListAIBenchmarkJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListAIBenchmarkJobs",
  ListAIBenchmarkJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIBenchmarkJobsRequest;
      output: ListAIBenchmarkJobsResponse;
    };
    sdk: {
      input: ListAIBenchmarkJobsCommandInput;
      output: ListAIBenchmarkJobsCommandOutput;
    };
  };
}
