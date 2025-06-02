// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateComputeNodeGroupRequest, CreateComputeNodeGroupResponse } from "../models/models_0";
import { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { de_CreateComputeNodeGroupCommand, se_CreateComputeNodeGroupCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more Amazon Web Services PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. Amazon Web Services PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that Amazon Web Services PCS launches in your account. You must already have a launch template before you call this API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, CreateComputeNodeGroupCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, CreateComputeNodeGroupCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * const client = new PCSClient(config);
 * const input = { // CreateComputeNodeGroupRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   computeNodeGroupName: "STRING_VALUE", // required
 *   amiId: "STRING_VALUE",
 *   subnetIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   purchaseOption: "ONDEMAND" || "SPOT",
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
 *     slurmCustomSettings: [ // SlurmCustomSettings
 *       { // SlurmCustomSetting
 *         parameterName: "STRING_VALUE", // required
 *         parameterValue: "STRING_VALUE", // required
 *       },
 *     ],
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
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED" || "DELETED" || "SUSPENDING" || "SUSPENDED", // required
 * //     amiId: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     purchaseOption: "ONDEMAND" || "SPOT",
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
 * //       slurmCustomSettings: [ // SlurmCustomSettings
 * //         { // SlurmCustomSetting
 * //           parameterName: "STRING_VALUE", // required
 * //           parameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
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
 *  <p>You don't have permission to perform the action.</p> <p> <u>Examples</u> </p> <ul> <li> <p>The launch template instance profile doesn't pass <code>iam:PassRole</code> verification.</p> </li> <li> <p>There is a mismatch between the account ID and cluster ID.</p> </li> <li> <p>The cluster ID doesn't exist.</p> </li> <li> <p>The EC2 instance isn't present.</p> </li> </ul>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than 1 operation on the same resource at the same time.</p> <p> <u>Examples</u> </p> <ul> <li> <p>A cluster with the same name already exists.</p> </li> <li> <p>A cluster isn't in <code>ACTIVE</code> status.</p> </li> <li> <p>A cluster to delete is in an unstable state. For example, because it still has <code>ACTIVE</code> node groups or queues.</p> </li> <li> <p>A queue already exists in a cluster.</p> </li> </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Web Services PCS can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found. The cluster, node group, or queue you're attempting to get, update, list, or delete doesn't exist.</p> <p> <u>Examples</u> </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account. To learn how to increase your service quota, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">Requesting a quota increase</a> in the <i>Service Quotas User Guide</i> </p> <p> <u>Examples</u> </p> <ul> <li> <p>The max number of clusters or queues has been reached for the account.</p> </li> <li> <p>The max number of compute node groups has been reached for the associated cluster.</p> </li> <li> <p>The total of <code>maxInstances</code> across all compute node groups has been reached for associated cluster.</p> </li> </ul>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. Check the resource's request rate quota and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid.</p> <p> <u>Examples</u> </p> <ul> <li> <p>Your request contains malformed JSON or unsupported characters.</p> </li> <li> <p>The scheduler version isn't supported.</p> </li> <li> <p>There are networking related errors, such as network validation failure.</p> </li> <li> <p>AMI type is <code>CUSTOM</code> and the launch template doesn't define the AMI ID, or the AMI type is AL2 and the launch template defines the AMI.</p> </li> </ul>
 *
 * @throws {@link PCSServiceException}
 * <p>Base exception class for all service exceptions from PCS service.</p>
 *
 *
 * @public
 */
export class CreateComputeNodeGroupCommand extends $Command
  .classBuilder<
    CreateComputeNodeGroupCommandInput,
    CreateComputeNodeGroupCommandOutput,
    PCSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PCSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSParallelComputingService", "CreateComputeNodeGroup", {})
  .n("PCSClient", "CreateComputeNodeGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateComputeNodeGroupCommand)
  .de(de_CreateComputeNodeGroupCommand)
  .build() {
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
