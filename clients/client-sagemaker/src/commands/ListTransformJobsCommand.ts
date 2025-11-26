// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTransformJobsRequest, ListTransformJobsResponse } from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTransformJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTransformJobsCommand}.
 */
export interface ListTransformJobsCommandInput extends ListTransformJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTransformJobsCommand}.
 */
export interface ListTransformJobsCommandOutput extends ListTransformJobsResponse, __MetadataBearer {}

/**
 * <p>Lists transform jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTransformJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTransformJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListTransformJobsRequest
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
 * const command = new ListTransformJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransformJobsResponse
 * //   TransformJobSummaries: [ // TransformJobSummaries // required
 * //     { // TransformJobSummary
 * //       TransformJobName: "STRING_VALUE", // required
 * //       TransformJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       TransformEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TransformJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransformJobsCommandInput - {@link ListTransformJobsCommandInput}
 * @returns {@link ListTransformJobsCommandOutput}
 * @see {@link ListTransformJobsCommandInput} for command's `input` shape.
 * @see {@link ListTransformJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListTransformJobsCommand extends $Command
  .classBuilder<
    ListTransformJobsCommandInput,
    ListTransformJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListTransformJobs", {})
  .n("SageMakerClient", "ListTransformJobsCommand")
  .sc(ListTransformJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTransformJobsRequest;
      output: ListTransformJobsResponse;
    };
    sdk: {
      input: ListTransformJobsCommandInput;
      output: ListTransformJobsCommandOutput;
    };
  };
}
