// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MoveClusterNodesRequest, MoveClusterNodesResponse } from "../models/models_4";
import { MoveClusterNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MoveClusterNodesCommand}.
 */
export interface MoveClusterNodesCommandInput extends MoveClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link MoveClusterNodesCommand}.
 */
export interface MoveClusterNodesCommandOutput extends MoveClusterNodesResponse, __MetadataBearer {}

/**
 * <p>Moves running nodes from one instance group to another instance group. The target instance group can be in the same HyperPod cluster or in a different HyperPod cluster in the same account and Region. The underlying instances aren't terminated.</p> <p>Each node keeps its instance ID, its <code>NodeLogicalId</code>, its network interfaces and IP addresses, and its capacity. The node then joins the target instance group with the target's configuration and lifecycle scripts.</p> <important> <p>The move replaces the node's root Amazon Elastic Block Store (Amazon EBS) volume and secondary EBS volume, which deletes any data stored on them. Back up any data that you need before you move the node.</p> </important> <p>Specify the nodes to move with exactly one of <code>NodeIds</code>, <code>NodeLogicalIds</code>, or <code>InstanceCount</code>. The operation is asynchronous and returns after it accepts the nodes for the move. While a node moves, its status is <code>DetachInProgress</code> and then <code>AttachInProgress</code>. The node appears in the source cluster while it detaches. After HyperPod hands the node off to the target instance group, the node appears in the target cluster. To track the node, call <code>DescribeClusterNode</code> or <code>ListClusterNodes</code> on the source or target cluster.</p> <note> <p>Both clusters must be <code>InService</code>, use Amazon EKS orchestration, and use <code>Continuous</code> as the <code>NodeProvisioningMode</code>.</p> <p>The source and target instance groups must also use compatible configurations.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, MoveClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, MoveClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // MoveClusterNodesRequest
 *   SourceClusterArn: "STRING_VALUE", // required
 *   SourceInstanceGroupName: "STRING_VALUE", // required
 *   TargetClusterArn: "STRING_VALUE", // required
 *   TargetInstanceGroupName: "STRING_VALUE", // required
 *   InstanceCount: Number("int"),
 *   NodeIds: [ // MoveClusterNodeIds
 *     "STRING_VALUE",
 *   ],
 *   NodeLogicalIds: [ // MoveClusterNodeLogicalIds
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new MoveClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // MoveClusterNodesResponse
 * //   Successful: [ // MoveClusterNodeIds
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // MoveClusterNodesErrorList
 * //     { // MoveClusterNodesError
 * //       Code: "NodeIdNotFound" || "InvalidNodeStatus" || "NodeIdInUse" || "NodeInstanceTypeMismatch", // required
 * //       Message: "STRING_VALUE", // required
 * //       NodeId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SuccessfulNodeLogicalIds: [ // MoveClusterNodeLogicalIds
 * //     "STRING_VALUE",
 * //   ],
 * //   FailedNodeLogicalIds: [ // MoveClusterNodeLogicalIdsErrorList
 * //     { // MoveClusterNodeLogicalIdsError
 * //       Code: "NodeIdNotFound" || "InvalidNodeStatus" || "NodeIdInUse" || "NodeInstanceTypeMismatch", // required
 * //       Message: "STRING_VALUE", // required
 * //       NodeLogicalId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param MoveClusterNodesCommandInput - {@link MoveClusterNodesCommandInput}
 * @returns {@link MoveClusterNodesCommandOutput}
 * @see {@link MoveClusterNodesCommandInput} for command's `input` shape.
 * @see {@link MoveClusterNodesCommandOutput} for command's `response` shape.
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
export class MoveClusterNodesCommand extends command<MoveClusterNodesCommandInput, MoveClusterNodesCommandOutput>(
  _ep0,
  _mw0,
  "MoveClusterNodes",
  MoveClusterNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MoveClusterNodesRequest;
      output: MoveClusterNodesResponse;
    };
    sdk: {
      input: MoveClusterNodesCommandInput;
      output: MoveClusterNodesCommandOutput;
    };
  };
}
