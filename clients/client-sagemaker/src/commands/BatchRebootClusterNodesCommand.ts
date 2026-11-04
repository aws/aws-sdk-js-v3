// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchRebootClusterNodesRequest, BatchRebootClusterNodesResponse } from "../models/models_0";
import { BatchRebootClusterNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchRebootClusterNodesCommand}.
 */
export interface BatchRebootClusterNodesCommandInput extends BatchRebootClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link BatchRebootClusterNodesCommand}.
 */
export interface BatchRebootClusterNodesCommandOutput extends BatchRebootClusterNodesResponse, __MetadataBearer {}

/**
 * Reboots specific nodes within a SageMaker HyperPod cluster using a soft recovery mechanism. `BatchRebootClusterNodes` performs a graceful reboot of the specified nodes by calling the Amazon Elastic Compute Cloud `RebootInstances` API, which attempts to cleanly shut down the operating system before restarting the instance.
 *
 * This operation is useful for recovering from transient issues or applying certain configuration changes that require a restart.
 *
 * > **Note:**
 * >
 * > - Rebooting a node may cause temporary service interruption for workloads running on that node. Ensure your workloads can handle node restarts or use appropriate scheduling to minimize impact.
 * > - You can reboot up to 25 nodes in a single request.
 * > - For SageMaker HyperPod clusters using the Slurm workload manager, ensure rebooting nodes will not disrupt critical cluster operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, BatchRebootClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, BatchRebootClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // BatchRebootClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeIds: [ // ClusterNodeIds
 *     "STRING_VALUE",
 *   ],
 *   NodeLogicalIds: [ // ClusterNodeLogicalIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchRebootClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // BatchRebootClusterNodesResponse
 * //   Successful: [ // ClusterNodeIds
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // BatchRebootClusterNodesErrors
 * //     { // BatchRebootClusterNodesError
 * //       NodeId: "STRING_VALUE", // required
 * //       ErrorCode: "InstanceIdNotFound" || "InvalidInstanceStatus" || "InstanceIdInUse" || "InternalServerError", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   FailedNodeLogicalIds: [ // BatchRebootClusterNodeLogicalIdsErrors
 * //     { // BatchRebootClusterNodeLogicalIdsError
 * //       NodeLogicalId: "STRING_VALUE", // required
 * //       ErrorCode: "InstanceIdNotFound" || "InvalidInstanceStatus" || "InstanceIdInUse" || "InternalServerError", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SuccessfulNodeLogicalIds: [ // ClusterNodeLogicalIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchRebootClusterNodesCommandInput - {@link BatchRebootClusterNodesCommandInput}
 * @returns {@link BatchRebootClusterNodesCommandOutput}
 * @see {@link BatchRebootClusterNodesCommandInput} for command's `input` shape.
 * @see {@link BatchRebootClusterNodesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class BatchRebootClusterNodesCommand extends command<BatchRebootClusterNodesCommandInput, BatchRebootClusterNodesCommandOutput>(
  _ep0,
  _mw0,
  "BatchRebootClusterNodes",
  BatchRebootClusterNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchRebootClusterNodesRequest;
      output: BatchRebootClusterNodesResponse;
    };
    sdk: {
      input: BatchRebootClusterNodesCommandInput;
      output: BatchRebootClusterNodesCommandOutput;
    };
  };
}
