// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOptimizationJobsRequest, ListOptimizationJobsResponse } from "../models/models_4";
import { de_ListOptimizationJobsCommand, se_ListOptimizationJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOptimizationJobsCommand}.
 */
export interface ListOptimizationJobsCommandInput extends ListOptimizationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListOptimizationJobsCommand}.
 */
export interface ListOptimizationJobsCommandOutput extends ListOptimizationJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the optimization jobs in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListOptimizationJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListOptimizationJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListOptimizationJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   OptimizationContains: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "INPROGRESS" || "COMPLETED" || "FAILED" || "STARTING" || "STOPPING" || "STOPPED",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListOptimizationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListOptimizationJobsResponse
 * //   OptimizationJobSummaries: [ // OptimizationJobSummaries // required
 * //     { // OptimizationJobSummary
 * //       OptimizationJobName: "STRING_VALUE", // required
 * //       OptimizationJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       OptimizationJobStatus: "INPROGRESS" || "COMPLETED" || "FAILED" || "STARTING" || "STOPPING" || "STOPPED", // required
 * //       OptimizationStartTime: new Date("TIMESTAMP"),
 * //       OptimizationEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       DeploymentInstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge", // required
 * //       OptimizationTypes: [ // OptimizationTypes // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOptimizationJobsCommandInput - {@link ListOptimizationJobsCommandInput}
 * @returns {@link ListOptimizationJobsCommandOutput}
 * @see {@link ListOptimizationJobsCommandInput} for command's `input` shape.
 * @see {@link ListOptimizationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListOptimizationJobsCommand extends $Command
  .classBuilder<
    ListOptimizationJobsCommandInput,
    ListOptimizationJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListOptimizationJobs", {})
  .n("SageMakerClient", "ListOptimizationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListOptimizationJobsCommand)
  .de(de_ListOptimizationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOptimizationJobsRequest;
      output: ListOptimizationJobsResponse;
    };
    sdk: {
      input: ListOptimizationJobsCommandInput;
      output: ListOptimizationJobsCommandOutput;
    };
  };
}
