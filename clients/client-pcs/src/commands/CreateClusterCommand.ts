// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * Creates a cluster in your account. PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action.
 *
 * > **Note:** It takes time for PCS to create the cluster. The cluster is in a `Creating` state until it is ready to use. There can only be 1 cluster in a `Creating` state per Amazon Web Services Region per Amazon Web Services account. `CreateCluster` fails with a `ServiceQuotaExceededException` if there is already a cluster in a `Creating` state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, CreateClusterCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, CreateClusterCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // CreateClusterRequest
 *   clusterName: "STRING_VALUE", // required
 *   scheduler: { // SchedulerRequest
 *     type: "SLURM", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   size: "SMALL" || "MEDIUM" || "LARGE", // required
 *   networking: { // NetworkingRequest
 *     subnetIds: [ // SubnetIdList
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIdList
 *       "STRING_VALUE",
 *     ],
 *     networkType: "IPV4" || "IPV6",
 *   },
 *   slurmConfiguration: { // ClusterSlurmConfigurationRequest
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
 *     accounting: { // AccountingRequest
 *       defaultPurgeTimeInDays: Number("int"),
 *       mode: "STANDARD" || "NONE", // required
 *     },
 *     slurmRest: { // SlurmRestRequest
 *       mode: "STANDARD" || "NONE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account. To learn how to increase your service quota, see [Requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html) in the *Service Quotas User Guide*
 *
 * Examples
 *
 * - The max number of clusters or queues has been reached for the account.
 * - The max number of compute node groups has been reached for the associated cluster.
 * - The total of `maxInstances` across all compute node groups has been reached for associated cluster.
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
export class CreateClusterCommand extends command<CreateClusterCommandInput, CreateClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCluster",
  CreateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
