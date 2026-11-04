// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterRequest, UpdateClusterResponse } from "../models/models_0";
import { UpdateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterResponse, __MetadataBearer {}

/**
 * Updates a cluster configuration. You can update the scheduler version, modify scheduler settings, and update accounting configuration for an existing cluster. For more information about updating the scheduler version, see [Updating the scheduler version on a cluster](https://docs.aws.amazon.com/pcs/latest/userguide/working-with_clusters_version_update.html) in the *PCS User Guide*.
 *
 * > **Note:** You can only update clusters that are in `ACTIVE`, `UPDATE_FAILED`, or `SUSPENDED` state. All associated resources (queues and compute node groups) must be in `ACTIVE` state before you can update the cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, UpdateClusterCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, UpdateClusterCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // UpdateClusterRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   slurmConfiguration: { // UpdateClusterSlurmConfigurationRequest
 *     scaleDownIdleTimeInSeconds: Number("int"),
 *     slurmCustomSettings: [ // SlurmCustomSettings
 *       { // SlurmCustomSetting
 *         parameterName: "STRING_VALUE", // required
 *         parameterValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     slurmdbdCustomSettings: [ // SlurmdbdCustomSettings
 *       { // SlurmdbdCustomSetting
 *         parameterName: "STRING_VALUE", // required
 *         parameterValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     cgroupCustomSettings: [ // CgroupCustomSettings
 *       { // CgroupCustomSetting
 *         parameterName: "STRING_VALUE", // required
 *         parameterValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     accounting: { // UpdateAccountingRequest
 *       defaultPurgeTimeInDays: Number("int"),
 *       mode: "STANDARD" || "NONE",
 *     },
 *     slurmRest: { // UpdateSlurmRestRequest
 *       mode: "STANDARD" || "NONE",
 *     },
 *   },
 *   scheduler: { // UpdateSchedulerRequest
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterResponse
 * //   cluster: { // Cluster
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED" || "SUSPENDING" || "SUSPENDED" || "RESUMING", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //     scheduler: { // Scheduler
 * //       type: "SLURM", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     size: "SMALL" || "MEDIUM" || "LARGE", // required
 * //     slurmConfiguration: { // ClusterSlurmConfiguration
 * //       scaleDownIdleTimeInSeconds: Number("int"),
 * //       slurmCustomSettings: [ // SlurmCustomSettings
 * //         { // SlurmCustomSetting
 * //           parameterName: "STRING_VALUE", // required
 * //           parameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       slurmdbdCustomSettings: [ // SlurmdbdCustomSettings
 * //         { // SlurmdbdCustomSetting
 * //           parameterName: "STRING_VALUE", // required
 * //           parameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       cgroupCustomSettings: [ // CgroupCustomSettings
 * //         { // CgroupCustomSetting
 * //           parameterName: "STRING_VALUE", // required
 * //           parameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       authKey: { // SlurmAuthKey
 * //         secretArn: "STRING_VALUE", // required
 * //         secretVersion: "STRING_VALUE", // required
 * //       },
 * //       jwtAuth: { // JwtAuth
 * //         jwtKey: { // JwtKey
 * //           secretArn: "STRING_VALUE", // required
 * //           secretVersion: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       accounting: { // Accounting
 * //         defaultPurgeTimeInDays: Number("int"),
 * //         mode: "STANDARD" || "NONE", // required
 * //       },
 * //       slurmRest: { // SlurmRest
 * //         mode: "STANDARD" || "NONE", // required
 * //       },
 * //     },
 * //     networking: { // Networking
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       networkType: "IPV4" || "IPV6",
 * //     },
 * //     endpoints: [ // Endpoints
 * //       { // Endpoint
 * //         type: "SLURMCTLD" || "SLURMDBD" || "SLURMRESTD", // required
 * //         privateIpAddress: "STRING_VALUE", // required
 * //         publicIpAddress: "STRING_VALUE",
 * //         ipv6Address: "STRING_VALUE",
 * //         port: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     errorInfo: [ // ErrorInfoList
 * //       { // ErrorInfo
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link PCSClientResolvedConfig | config} for PCSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action.
 *
 * Examples
 *
 * - The launch template instance profile doesn't pass `iam:PassRole` verification.
 * - There is a mismatch between the account ID and cluster ID.
 * - The cluster ID doesn't exist.
 * - The EC2 instance isn't present.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than 1 operation on the same resource at the same time.
 *
 * Examples
 *
 * - A cluster with the same name already exists.
 * - A cluster isn't in `ACTIVE` status.
 * - A cluster to delete is in an unstable state. For example, because it still has `ACTIVE` node groups or queues.
 * - A queue already exists in a cluster.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * PCS can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found. The cluster, node group, or queue you're attempting to get, update, list, or delete doesn't exist.
 *
 * Examples
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a request rate quota. Check the resource's request rate quota and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid.
 *
 * Examples
 *
 * - Your request contains malformed JSON or unsupported characters.
 * - The scheduler version isn't supported.
 * - There are networking related errors, such as network validation failure.
 * - AMI type is `CUSTOM` and the launch template doesn't define the AMI ID, or the AMI type is AL2 and the launch template defines the AMI.
 *
 * @throws {@link PCSServiceException}
 *
 * Base exception class for all service exceptions from PCS service.
 *
 * @public
 */
export class UpdateClusterCommand extends command<UpdateClusterCommandInput, UpdateClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCluster",
  UpdateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterRequest;
      output: UpdateClusterResponse;
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
