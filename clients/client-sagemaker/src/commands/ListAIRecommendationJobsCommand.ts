// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAIRecommendationJobsRequest, ListAIRecommendationJobsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAIRecommendationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIRecommendationJobsCommand}.
 */
export interface ListAIRecommendationJobsCommandInput extends ListAIRecommendationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIRecommendationJobsCommand}.
 */
export interface ListAIRecommendationJobsCommandOutput extends ListAIRecommendationJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of AI recommendation jobs in your account. You can filter the results by name, status, and creation time, and sort the results. The response is paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAIRecommendationJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAIRecommendationJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListAIRecommendationJobsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAIRecommendationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIRecommendationJobsResponse
 * //   AIRecommendationJobs: [ // AIRecommendationJobSummaryList // required
 * //     { // AIRecommendationJobSummary
 * //       AIRecommendationJobName: "STRING_VALUE", // required
 * //       AIRecommendationJobArn: "STRING_VALUE", // required
 * //       AIRecommendationJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIRecommendationJobsCommandInput - {@link ListAIRecommendationJobsCommandInput}
 * @returns {@link ListAIRecommendationJobsCommandOutput}
 * @see {@link ListAIRecommendationJobsCommandInput} for command's `input` shape.
 * @see {@link ListAIRecommendationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListAIRecommendationJobsCommand extends $Command
  .classBuilder<
    ListAIRecommendationJobsCommandInput,
    ListAIRecommendationJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListAIRecommendationJobs", {})
  .n("SageMakerClient", "ListAIRecommendationJobsCommand")
  .sc(ListAIRecommendationJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIRecommendationJobsRequest;
      output: ListAIRecommendationJobsResponse;
    };
    sdk: {
      input: ListAIRecommendationJobsCommandInput;
      output: ListAIRecommendationJobsCommandOutput;
    };
  };
}
