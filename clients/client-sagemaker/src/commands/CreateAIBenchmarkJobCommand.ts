// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAIBenchmarkJobRequest, CreateAIBenchmarkJobResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAIBenchmarkJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIBenchmarkJobCommand}.
 */
export interface CreateAIBenchmarkJobCommandInput extends CreateAIBenchmarkJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIBenchmarkJobCommand}.
 */
export interface CreateAIBenchmarkJobCommandOutput extends CreateAIBenchmarkJobResponse, __MetadataBearer {}

/**
 * <p>Creates a benchmark job that runs performance benchmarks against inference infrastructure using a predefined AI workload configuration. The benchmark job measures metrics such as latency, throughput, and cost for your generative AI inference endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAIBenchmarkJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAIBenchmarkJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateAIBenchmarkJobRequest
 *   AIBenchmarkJobName: "STRING_VALUE", // required
 *   BenchmarkTarget: { // AIBenchmarkTarget Union: only one key present
 *     Endpoint: { // AIBenchmarkEndpoint
 *       Identifier: "STRING_VALUE", // required
 *       TargetContainerHostname: "STRING_VALUE",
 *       InferenceComponents: [ // AIBenchmarkInferenceComponentList
 *         { // AIBenchmarkInferenceComponent
 *           Identifier: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   OutputConfig: { // AIBenchmarkOutputConfig
 *     S3OutputLocation: "STRING_VALUE", // required
 *   },
 *   AIWorkloadConfigIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   NetworkConfig: { // AIBenchmarkNetworkConfig
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAIBenchmarkJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIBenchmarkJobResponse
 * //   AIBenchmarkJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAIBenchmarkJobCommandInput - {@link CreateAIBenchmarkJobCommandInput}
 * @returns {@link CreateAIBenchmarkJobCommandOutput}
 * @see {@link CreateAIBenchmarkJobCommandInput} for command's `input` shape.
 * @see {@link CreateAIBenchmarkJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class CreateAIBenchmarkJobCommand extends $Command
  .classBuilder<
    CreateAIBenchmarkJobCommandInput,
    CreateAIBenchmarkJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateAIBenchmarkJob", {})
  .n("SageMakerClient", "CreateAIBenchmarkJobCommand")
  .sc(CreateAIBenchmarkJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIBenchmarkJobRequest;
      output: CreateAIBenchmarkJobResponse;
    };
    sdk: {
      input: CreateAIBenchmarkJobCommandInput;
      output: CreateAIBenchmarkJobCommandOutput;
    };
  };
}
