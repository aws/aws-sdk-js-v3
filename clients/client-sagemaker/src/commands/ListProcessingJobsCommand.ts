// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProcessingJobsRequest, ListProcessingJobsResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListProcessingJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProcessingJobsCommand}.
 */
export interface ListProcessingJobsCommandInput extends ListProcessingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListProcessingJobsCommand}.
 */
export interface ListProcessingJobsCommandOutput extends ListProcessingJobsResponse, __MetadataBearer {}

/**
 * <p>Lists processing jobs that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListProcessingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListProcessingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListProcessingJobsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProcessingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListProcessingJobsResponse
 * //   ProcessingJobSummaries: [ // ProcessingJobSummaries // required
 * //     { // ProcessingJobSummary
 * //       ProcessingJobName: "STRING_VALUE", // required
 * //       ProcessingJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       ProcessingEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       ProcessingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       FailureReason: "STRING_VALUE",
 * //       ExitMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProcessingJobsCommandInput - {@link ListProcessingJobsCommandInput}
 * @returns {@link ListProcessingJobsCommandOutput}
 * @see {@link ListProcessingJobsCommandInput} for command's `input` shape.
 * @see {@link ListProcessingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListProcessingJobsCommand extends $Command
  .classBuilder<
    ListProcessingJobsCommandInput,
    ListProcessingJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListProcessingJobs", {})
  .n("SageMakerClient", "ListProcessingJobsCommand")
  .sc(ListProcessingJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProcessingJobsRequest;
      output: ListProcessingJobsResponse;
    };
    sdk: {
      input: ListProcessingJobsCommandInput;
      output: ListProcessingJobsCommandOutput;
    };
  };
}
