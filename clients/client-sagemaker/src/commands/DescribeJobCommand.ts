// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeJobRequest, DescribeJobResponse } from "../models/models_3";
import { DescribeJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends DescribeJobResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about a job, including its current status, secondary status, configuration, and timestamps. Use <code>SecondaryStatus</code> for granular progress tracking and <code>SecondaryStatusTransitions</code> to see the full history of status changes with timestamps.</p> <p>The following operations are related to <code>DescribeJob</code>:</p> <ul> <li> <p> <code>CreateJob</code> </p> </li> <li> <p> <code>ListJobs</code> </p> </li> <li> <p> <code>StopJob</code> </p> </li> <li> <p> <code>DeleteJob</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeJobRequest
 *   JobName: "STRING_VALUE", // required
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobResponse
 * //   JobName: "STRING_VALUE", // required
 * //   JobArn: "STRING_VALUE", // required
 * //   RoleArn: "STRING_VALUE", // required
 * //   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 * //   JobConfigSchemaVersion: "STRING_VALUE", // required
 * //   JobConfigDocument: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"),
 * //   JobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting" || "DeleteFailed", // required
 * //   SecondaryStatus: "Starting" || "Downloading" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Interrupted" || "Failed" || "Completed" || "Restarting" || "Pending" || "Evaluating" || "Deleting" || "DeleteFailed", // required
 * //   SecondaryStatusTransitions: [ // JobSecondaryStatusTransitions // required
 * //     { // JobSecondaryStatusTransition
 * //       Status: "Starting" || "Downloading" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Interrupted" || "Failed" || "Completed" || "Restarting" || "Pending" || "Evaluating" || "Deleting" || "DeleteFailed", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailureReason: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeJobCommand extends command<DescribeJobCommandInput, DescribeJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeJob",
  DescribeJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobRequest;
      output: DescribeJobResponse;
    };
    sdk: {
      input: DescribeJobCommandInput;
      output: DescribeJobCommandOutput;
    };
  };
}
