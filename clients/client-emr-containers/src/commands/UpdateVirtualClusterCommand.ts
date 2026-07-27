// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVirtualClusterRequest, UpdateVirtualClusterResponse } from "../models/models_0";
import { UpdateVirtualCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVirtualClusterCommand}.
 */
export interface UpdateVirtualClusterCommandInput extends UpdateVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualClusterCommand}.
 */
export interface UpdateVirtualClusterCommandOutput extends UpdateVirtualClusterResponse, __MetadataBearer {}

/**
 * <p>Updates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, update, describe, list and delete virtual clusters. They do not consume any
 *          additional resource in your system. A single virtual cluster maps to a single Kubernetes
 *          namespace. Given this relationship, you can model virtual clusters the same way you model
 *          Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, UpdateVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, UpdateVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // UpdateVirtualClusterRequest
 *   id: "STRING_VALUE", // required
 *   schedulerConfiguration: { // SchedulerConfiguration
 *     maxInQueueJobRuns: Number("int"),
 *     maxConcurrentJobRuns: Number("int"),
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVirtualClusterResponse
 * //   virtualCluster: { // VirtualCluster
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     state: "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 * //     containerProvider: { // ContainerProvider
 * //       type: "EKS", // required
 * //       id: "STRING_VALUE", // required
 * //       info: { // ContainerInfo Union: only one key present
 * //         eksInfo: { // EksInfo
 * //           namespace: "STRING_VALUE",
 * //           nodeLabel: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     securityConfigurationId: "STRING_VALUE",
 * //     sessionEnabled: true || false,
 * //     schedulerConfiguration: { // SchedulerConfiguration
 * //       maxInQueueJobRuns: Number("int"),
 * //       maxConcurrentJobRuns: Number("int"),
 * //     },
 * //     schedulerStatus: { // SchedulerStatus
 * //       currentInQueueJobRuns: Number("int"),
 * //       currentConcurrentJobRuns: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVirtualClusterCommandInput - {@link UpdateVirtualClusterCommandInput}
 * @returns {@link UpdateVirtualClusterCommandOutput}
 * @see {@link UpdateVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class UpdateVirtualClusterCommand extends command<UpdateVirtualClusterCommandInput, UpdateVirtualClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVirtualCluster",
  UpdateVirtualCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVirtualClusterRequest;
      output: UpdateVirtualClusterResponse;
    };
    sdk: {
      input: UpdateVirtualClusterCommandInput;
      output: UpdateVirtualClusterCommandOutput;
    };
  };
}
