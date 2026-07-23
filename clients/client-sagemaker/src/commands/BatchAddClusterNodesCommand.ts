// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchAddClusterNodesRequest, BatchAddClusterNodesResponse } from "../models/models_0";
import { BatchAddClusterNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAddClusterNodesCommand}.
 */
export interface BatchAddClusterNodesCommandInput extends BatchAddClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link BatchAddClusterNodesCommand}.
 */
export interface BatchAddClusterNodesCommandOutput extends BatchAddClusterNodesResponse, __MetadataBearer {}

/**
 * <p>Adds nodes to a HyperPod cluster by incrementing the target count for one or more instance groups. This operation returns a unique <code>NodeLogicalId</code> for each node being added, which can be used to track the provisioning status of the node. This API provides a safer alternative to <code>UpdateCluster</code> for scaling operations by avoiding unintended configuration changes.</p> <note> <p>This API is only supported for clusters using <code>Continuous</code> as the <code>NodeProvisioningMode</code>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, BatchAddClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, BatchAddClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // BatchAddClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   NodesToAdd: [ // AddClusterNodeSpecificationList // required
 *     { // AddClusterNodeSpecification
 *       InstanceGroupName: "STRING_VALUE", // required
 *       IncrementTargetCountBy: Number("int"), // required
 *       AvailabilityZones: [ // ClusterAvailabilityZones
 *         "STRING_VALUE",
 *       ],
 *       InstanceTypes: [ // ClusterInstanceTypes
 *         "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchAddClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // BatchAddClusterNodesResponse
 * //   Successful: [ // NodeAdditionResultList // required
 * //     { // NodeAdditionResult
 * //       NodeLogicalId: "STRING_VALUE", // required
 * //       InstanceGroupName: "STRING_VALUE", // required
 * //       Status: "Running" || "Failure" || "Pending" || "ShuttingDown" || "SystemUpdating" || "DeepHealthCheckInProgress" || "NotFound", // required
 * //       AvailabilityZones: [ // ClusterAvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       InstanceTypes: [ // ClusterInstanceTypes
 * //         "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge",
 * //       ],
 * //     },
 * //   ],
 * //   Failed: [ // BatchAddClusterNodesErrorList // required
 * //     { // BatchAddClusterNodesError
 * //       InstanceGroupName: "STRING_VALUE", // required
 * //       ErrorCode: "InstanceGroupNotFound" || "InvalidInstanceGroupStatus" || "IncompatibleAvailabilityZones" || "IncompatibleInstanceTypes", // required
 * //       FailedCount: Number("int"), // required
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InstanceTypes: [
 * //         "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.p5.4xlarge" || "ml.p6e-gb200.36xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge" || "ml.trn2.3xlarge" || "ml.trn2.48xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.i3en.large" || "ml.i3en.xlarge" || "ml.i3en.2xlarge" || "ml.i3en.3xlarge" || "ml.i3en.6xlarge" || "ml.i3en.12xlarge" || "ml.i3en.24xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.r5d.16xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p6-b300.48xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.c6g.medium" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c7g.medium" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.c6a.large" || "ml.c6a.xlarge" || "ml.c6a.2xlarge" || "ml.c6a.4xlarge" || "ml.c6a.8xlarge" || "ml.c6a.12xlarge" || "ml.c6a.16xlarge" || "ml.c6a.24xlarge" || "ml.c6a.32xlarge" || "ml.c6a.48xlarge" || "ml.m6a.large" || "ml.m6a.xlarge" || "ml.m6a.2xlarge" || "ml.m6a.4xlarge" || "ml.m6a.8xlarge" || "ml.m6a.12xlarge" || "ml.m6a.16xlarge" || "ml.m6a.24xlarge" || "ml.m6a.32xlarge" || "ml.m6a.48xlarge" || "ml.m6g.medium" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m7g.medium" || "ml.m7g.large" || "ml.m7g.xlarge" || "ml.m7g.2xlarge" || "ml.m7g.4xlarge" || "ml.m7g.8xlarge" || "ml.m7g.12xlarge" || "ml.m7g.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge",
 * //       ],
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAddClusterNodesCommandInput - {@link BatchAddClusterNodesCommandInput}
 * @returns {@link BatchAddClusterNodesCommandOutput}
 * @see {@link BatchAddClusterNodesCommandInput} for command's `input` shape.
 * @see {@link BatchAddClusterNodesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class BatchAddClusterNodesCommand extends command<BatchAddClusterNodesCommandInput, BatchAddClusterNodesCommandOutput>(
  _ep0,
  _mw0,
  "BatchAddClusterNodes",
  BatchAddClusterNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAddClusterNodesRequest;
      output: BatchAddClusterNodesResponse;
    };
    sdk: {
      input: BatchAddClusterNodesCommandInput;
      output: BatchAddClusterNodesCommandOutput;
    };
  };
}
