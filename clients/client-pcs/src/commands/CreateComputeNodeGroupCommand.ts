// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComputeNodeGroupRequest, CreateComputeNodeGroupResponse } from "../models/models_0";
import { CreateComputeNodeGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateComputeNodeGroupCommand}.
 */
export interface CreateComputeNodeGroupCommandInput extends CreateComputeNodeGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateComputeNodeGroupCommand}.
 */
export interface CreateComputeNodeGroupCommandOutput extends CreateComputeNodeGroupResponse, __MetadataBearer {}

/**
 * Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that PCS launches in your account. You must already have a launch template before you call this API. For more information, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon Elastic Compute Cloud User Guide for Linux Instances*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, CreateComputeNodeGroupCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, CreateComputeNodeGroupCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // CreateComputeNodeGroupRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   computeNodeGroupName: "STRING_VALUE", // required
 *   amiId: "STRING_VALUE",
 *   subnetIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   purchaseOption: "ONDEMAND" || "SPOT" || "CAPACITY_BLOCK" || "INTERRUPTIBLE_CAPACITY_RESERVATION",
 *   customLaunchTemplate: { // CustomLaunchTemplate
 *     id: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   iamInstanceProfileArn: "STRING_VALUE", // required
 *   scalingConfiguration: { // ScalingConfigurationRequest
 *     minInstanceCount: Number("int"), // required
 *     maxInstanceCount: Number("int"), // required
 *   },
 *   instanceConfigs: [ // InstanceList // required
 *     { // InstanceConfig
 *       instanceType: "STRING_VALUE",
 *     },
 *   ],
 *   spotOptions: { // SpotOptions
 *     allocationStrategy: "lowest-price" || "capacity-optimized" || "price-capacity-optimized",
 *   },
 *   slurmConfiguration: { // ComputeNodeGroupSlurmConfigurationRequest
 *     scaleDownIdleTimeInSeconds: Number("int"),
 *     slurmCustomSettings: [ // SlurmCustomSettings
 *       { // SlurmCustomSetting
 *         parameterName: "STRING_VALUE", // required
 *         parameterValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     gresCustomSettings: [ // GresCustomSettings
 *       { // GresCustomSettingMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   nodeLifecycleActions: { // NodeLifecycleActionsRequest
 *     stages: { // NodeLifecycleStages
 *       nodeBootstrapped: [ // NodeLifecycleScriptList
 *         { // NodeLifecycleScript
 *           name: "STRING_VALUE", // required
 *           scriptSource: { // ScriptSource
 *             scriptLocation: "STRING_VALUE", // required
 *             s3VersionId: "STRING_VALUE",
 *             checksum: "STRING_VALUE",
 *           },
 *           arguments: [ // NodeLifecycleScriptArguments
 *             "STRING_VALUE",
 *           ],
 *           onError: "TERMINATE" || "STOP_SEQUENCE" || "CONTINUE",
 *           executionPolicy: "FIRST_BOOT_ONLY" || "EVERY_BOOT",
 *         },
 *       ],
 *       nodeReady: [
 *         {
 *           name: "STRING_VALUE", // required
 *           scriptSource: {
 *             scriptLocation: "STRING_VALUE", // required
 *             s3VersionId: "STRING_VALUE",
 *             checksum: "STRING_VALUE",
 *           },
 *           arguments: [
 *             "STRING_VALUE",
 *           ],
 *           onError: "TERMINATE" || "STOP_SEQUENCE" || "CONTINUE",
 *           executionPolicy: "FIRST_BOOT_ONLY" || "EVERY_BOOT",
 *         },
 *       ],
 *     },
 *     scriptCachingPolicy: "CACHE_ONCE" || "REFRESH_ON_REBOOT",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateComputeNodeGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateComputeNodeGroupResponse
 * //   computeNodeGroup: { // ComputeNodeGroup
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     clusterId: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED" || "DELETED" || "SUSPENDING" || "SUSPENDED" || "RESUMING", // required
 * //     amiId: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     purchaseOption: "ONDEMAND" || "SPOT" || "CAPACITY_BLOCK" || "INTERRUPTIBLE_CAPACITY_RESERVATION",
 * //     customLaunchTemplate: { // CustomLaunchTemplate
 * //       id: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     iamInstanceProfileArn: "STRING_VALUE", // required
 * //     scalingConfiguration: { // ScalingConfiguration
 * //       minInstanceCount: Number("int"), // required
 * //       maxInstanceCount: Number("int"), // required
 * //     },
 * //     instanceConfigs: [ // InstanceList // required
 * //       { // InstanceConfig
 * //         instanceType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     spotOptions: { // SpotOptions
 * //       allocationStrategy: "lowest-price" || "capacity-optimized" || "price-capacity-optimized",
 * //     },
 * //     slurmConfiguration: { // ComputeNodeGroupSlurmConfiguration
 * //       scaleDownIdleTimeInSeconds: Number("int"),
 * //       slurmCustomSettings: [ // SlurmCustomSettings
 * //         { // SlurmCustomSetting
 * //           parameterName: "STRING_VALUE", // required
 * //           parameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       gresCustomSettings: [ // GresCustomSettings
 * //         { // GresCustomSettingMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     nodeLifecycleActions: { // NodeLifecycleActions
 * //       stages: { // NodeLifecycleStages
 * //         nodeBootstrapped: [ // NodeLifecycleScriptList
 * //           { // NodeLifecycleScript
 * //             name: "STRING_VALUE", // required
 * //             scriptSource: { // ScriptSource
 * //               scriptLocation: "STRING_VALUE", // required
 * //               s3VersionId: "STRING_VALUE",
 * //               checksum: "STRING_VALUE",
 * //             },
 * //             arguments: [ // NodeLifecycleScriptArguments
 * //               "STRING_VALUE",
 * //             ],
 * //             onError: "TERMINATE" || "STOP_SEQUENCE" || "CONTINUE",
 * //             executionPolicy: "FIRST_BOOT_ONLY" || "EVERY_BOOT",
 * //           },
 * //         ],
 * //         nodeReady: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             scriptSource: {
 * //               scriptLocation: "STRING_VALUE", // required
 * //               s3VersionId: "STRING_VALUE",
 * //               checksum: "STRING_VALUE",
 * //             },
 * //             arguments: [
 * //               "STRING_VALUE",
 * //             ],
 * //             onError: "TERMINATE" || "STOP_SEQUENCE" || "CONTINUE",
 * //             executionPolicy: "FIRST_BOOT_ONLY" || "EVERY_BOOT",
 * //           },
 * //         ],
 * //       },
 * //       scriptCachingPolicy: "CACHE_ONCE" || "REFRESH_ON_REBOOT",
 * //     },
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
 * @param CreateComputeNodeGroupCommandInput - {@link CreateComputeNodeGroupCommandInput}
 * @returns {@link CreateComputeNodeGroupCommandOutput}
 * @see {@link CreateComputeNodeGroupCommandInput} for command's `input` shape.
 * @see {@link CreateComputeNodeGroupCommandOutput} for command's `response` shape.
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
export class CreateComputeNodeGroupCommand extends command<CreateComputeNodeGroupCommandInput, CreateComputeNodeGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateComputeNodeGroup",
  CreateComputeNodeGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComputeNodeGroupRequest;
      output: CreateComputeNodeGroupResponse;
    };
    sdk: {
      input: CreateComputeNodeGroupCommandInput;
      output: CreateComputeNodeGroupCommandOutput;
    };
  };
}
