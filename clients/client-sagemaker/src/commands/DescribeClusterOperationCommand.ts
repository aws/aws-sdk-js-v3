// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeClusterOperationRequest, DescribeClusterOperationResponse } from "../models/models_2";
import { DescribeClusterOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeClusterOperationCommand}.
 */
export interface DescribeClusterOperationCommandInput extends DescribeClusterOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterOperationCommand}.
 */
export interface DescribeClusterOperationCommandOutput extends DescribeClusterOperationResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific operation for a given HyperPod cluster, such as a scaling operation or a deep health check. Use the <code>OperationId</code> returned by the <code>ListClusterOperations</code> operation to identify the operation to describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeClusterOperationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeClusterOperationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeClusterOperationRequest
 *   ClusterName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterOperationResponse
 * //   OperationId: "STRING_VALUE",
 * //   ClusterArn: "STRING_VALUE",
 * //   Type: "Scaling" || "DeepHealthCheck",
 * //   Status: "InProgress" || "Superseded" || "Done",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ScalingDetails: [ // ClusterOperationScalingDetailsList
 * //     { // ClusterOperationScalingDetails
 * //       InstanceGroupName: "STRING_VALUE",
 * //       Status: "InProgress" || "Superseded" || "Done",
 * //       Original: { // ClusterOperationScalingConfiguration
 * //         CurrentCount: Number("int"),
 * //         TargetCount: Number("int"),
 * //         MinCount: Number("int"),
 * //       },
 * //       Desired: {
 * //         CurrentCount: Number("int"),
 * //         TargetCount: Number("int"),
 * //         MinCount: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   DeepHealthCheckDetails: [ // DeepHealthCheckConfigurations
 * //     { // InstanceGroupHealthCheckConfiguration
 * //       InstanceGroupName: "STRING_VALUE", // required
 * //       InstanceIds: [ // InstanceIds
 * //         "STRING_VALUE",
 * //       ],
 * //       DeepHealthChecks: [ // DeepHealthChecks // required
 * //         "InstanceStress" || "InstanceConnectivity" || "MultiNodeTrainingValidation",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterOperationCommandInput - {@link DescribeClusterOperationCommandInput}
 * @returns {@link DescribeClusterOperationCommandOutput}
 * @see {@link DescribeClusterOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationCommandOutput} for command's `response` shape.
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
export class DescribeClusterOperationCommand extends command<DescribeClusterOperationCommandInput, DescribeClusterOperationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClusterOperation",
  DescribeClusterOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterOperationRequest;
      output: DescribeClusterOperationResponse;
    };
    sdk: {
      input: DescribeClusterOperationCommandInput;
      output: DescribeClusterOperationCommandOutput;
    };
  };
}
