// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAIBenchmarkJobRequest, DescribeAIBenchmarkJobResponse } from "../models/models_2";
import { DescribeAIBenchmarkJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAIBenchmarkJobCommand}.
 */
export interface DescribeAIBenchmarkJobCommandInput extends DescribeAIBenchmarkJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAIBenchmarkJobCommand}.
 */
export interface DescribeAIBenchmarkJobCommandOutput extends DescribeAIBenchmarkJobResponse, __MetadataBearer {}

/**
 * <p>Returns details of an AI benchmark job, including its status, configuration, target endpoint, and timing information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAIBenchmarkJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAIBenchmarkJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAIBenchmarkJobRequest
 *   AIBenchmarkJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAIBenchmarkJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAIBenchmarkJobResponse
 * //   AIBenchmarkJobName: "STRING_VALUE", // required
 * //   AIBenchmarkJobArn: "STRING_VALUE", // required
 * //   AIBenchmarkJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   FailureReason: "STRING_VALUE",
 * //   BenchmarkTarget: { // AIBenchmarkTarget Union: only one key present
 * //     Endpoint: { // AIBenchmarkEndpoint
 * //       Identifier: "STRING_VALUE", // required
 * //       TargetContainerHostname: "STRING_VALUE",
 * //       InferenceComponents: [ // AIBenchmarkInferenceComponentList
 * //         { // AIBenchmarkInferenceComponent
 * //           Identifier: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   OutputConfig: { // AIBenchmarkOutputResult
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     CloudWatchLogs: [ // AICloudWatchLogsList
 * //       { // AICloudWatchLogs
 * //         LogGroupArn: "STRING_VALUE",
 * //         LogStreamName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     MlflowConfig: { // AIMlflowConfig
 * //       MlflowResourceArn: "STRING_VALUE", // required
 * //       MlflowExperimentName: "STRING_VALUE",
 * //       MlflowRunName: "STRING_VALUE",
 * //     },
 * //   },
 * //   AIWorkloadConfigIdentifier: "STRING_VALUE", // required
 * //   RoleArn: "STRING_VALUE", // required
 * //   NetworkConfig: { // AIBenchmarkNetworkConfig
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
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
 * @param DescribeAIBenchmarkJobCommandInput - {@link DescribeAIBenchmarkJobCommandInput}
 * @returns {@link DescribeAIBenchmarkJobCommandOutput}
 * @see {@link DescribeAIBenchmarkJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAIBenchmarkJobCommandOutput} for command's `response` shape.
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
export class DescribeAIBenchmarkJobCommand extends command<DescribeAIBenchmarkJobCommandInput, DescribeAIBenchmarkJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAIBenchmarkJob",
  DescribeAIBenchmarkJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAIBenchmarkJobRequest;
      output: DescribeAIBenchmarkJobResponse;
    };
    sdk: {
      input: DescribeAIBenchmarkJobCommandInput;
      output: DescribeAIBenchmarkJobCommandOutput;
    };
  };
}
