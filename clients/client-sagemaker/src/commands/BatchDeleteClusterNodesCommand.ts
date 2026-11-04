// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteClusterNodesRequest, BatchDeleteClusterNodesResponse } from "../models/models_0";
import { BatchDeleteClusterNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteClusterNodesCommand}.
 */
export interface BatchDeleteClusterNodesCommandInput extends BatchDeleteClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteClusterNodesCommand}.
 */
export interface BatchDeleteClusterNodesCommandOutput extends BatchDeleteClusterNodesResponse, __MetadataBearer {}

/**
 * Deletes specific nodes within a SageMaker HyperPod cluster. `BatchDeleteClusterNodes` accepts a cluster name and a list of node IDs.
 *
 * > **Important:**
 * >
 * > - To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see [Use the backup script provided by SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-operate-cli-command.html#sagemaker-hyperpod-operate-cli-command-update-cluster-software-backup).
 * > - If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the [UpdateClusterSoftware API](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateClusterSoftware.html). For more information about patching a cluster, see [Update the SageMaker HyperPod platform software of a cluster](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-operate-cli-command.html#sagemaker-hyperpod-operate-cli-command-update-cluster-software).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, BatchDeleteClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, BatchDeleteClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // BatchDeleteClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeIds: [ // ClusterNodeIds
 *     "STRING_VALUE",
 *   ],
 *   NodeLogicalIds: [ // ClusterNodeLogicalIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteClusterNodesResponse
 * //   Failed: [ // BatchDeleteClusterNodesErrorList
 * //     { // BatchDeleteClusterNodesError
 * //       Code: "NodeIdNotFound" || "InvalidNodeStatus" || "NodeIdInUse", // required
 * //       Message: "STRING_VALUE", // required
 * //       NodeId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Successful: [ // ClusterNodeIds
 * //     "STRING_VALUE",
 * //   ],
 * //   FailedNodeLogicalIds: [ // BatchDeleteClusterNodeLogicalIdsErrorList
 * //     { // BatchDeleteClusterNodeLogicalIdsError
 * //       Code: "NodeIdNotFound" || "InvalidNodeStatus" || "NodeIdInUse", // required
 * //       Message: "STRING_VALUE", // required
 * //       NodeLogicalId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SuccessfulNodeLogicalIds: [ // ClusterNodeLogicalIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteClusterNodesCommandInput - {@link BatchDeleteClusterNodesCommandInput}
 * @returns {@link BatchDeleteClusterNodesCommandOutput}
 * @see {@link BatchDeleteClusterNodesCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteClusterNodesCommandOutput} for command's `response` shape.
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
export class BatchDeleteClusterNodesCommand extends command<BatchDeleteClusterNodesCommandInput, BatchDeleteClusterNodesCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteClusterNodes",
  BatchDeleteClusterNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteClusterNodesRequest;
      output: BatchDeleteClusterNodesResponse;
    };
    sdk: {
      input: BatchDeleteClusterNodesCommandInput;
      output: BatchDeleteClusterNodesCommandOutput;
    };
  };
}
