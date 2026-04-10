// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartClusterHealthCheckRequest, StartClusterHealthCheckResponse } from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartClusterHealthCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartClusterHealthCheckCommand}.
 */
export interface StartClusterHealthCheckCommandInput extends StartClusterHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link StartClusterHealthCheckCommand}.
 */
export interface StartClusterHealthCheckCommandOutput extends StartClusterHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Start deep health checks for a SageMaker HyperPod cluster. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeClusterNode.html">DescribeClusterNode</a> API to track progress of the deep health checks. The unhealthy nodes will be automatically rebooted or replaced. Please see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-eks-resiliency-node-labels.html"> Resilience-related Kubernetes labels by SageMaker HyperPod</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartClusterHealthCheckCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartClusterHealthCheckCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StartClusterHealthCheckRequest
 *   ClusterName: "STRING_VALUE", // required
 *   DeepHealthCheckConfigurations: [ // DeepHealthCheckConfigurations // required
 *     { // InstanceGroupHealthCheckConfiguration
 *       InstanceGroupName: "STRING_VALUE", // required
 *       InstanceIds: [ // InstanceIds
 *         "STRING_VALUE",
 *       ],
 *       DeepHealthChecks: [ // DeepHealthChecks // required
 *         "InstanceStress" || "InstanceConnectivity",
 *       ],
 *     },
 *   ],
 * };
 * const command = new StartClusterHealthCheckCommand(input);
 * const response = await client.send(command);
 * // { // StartClusterHealthCheckResponse
 * //   ClusterArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartClusterHealthCheckCommandInput - {@link StartClusterHealthCheckCommandInput}
 * @returns {@link StartClusterHealthCheckCommandOutput}
 * @see {@link StartClusterHealthCheckCommandInput} for command's `input` shape.
 * @see {@link StartClusterHealthCheckCommandOutput} for command's `response` shape.
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
export class StartClusterHealthCheckCommand extends $Command
  .classBuilder<
    StartClusterHealthCheckCommandInput,
    StartClusterHealthCheckCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "StartClusterHealthCheck", {})
  .n("SageMakerClient", "StartClusterHealthCheckCommand")
  .sc(StartClusterHealthCheck$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartClusterHealthCheckRequest;
      output: StartClusterHealthCheckResponse;
    };
    sdk: {
      input: StartClusterHealthCheckCommandInput;
      output: StartClusterHealthCheckCommandOutput;
    };
  };
}
