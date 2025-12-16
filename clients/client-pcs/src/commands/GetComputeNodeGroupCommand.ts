// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetComputeNodeGroupRequest, GetComputeNodeGroupResponse } from "../models/models_0";
import type { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { GetComputeNodeGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComputeNodeGroupCommand}.
 */
export interface GetComputeNodeGroupCommandInput extends GetComputeNodeGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetComputeNodeGroupCommand}.
 */
export interface GetComputeNodeGroupCommandOutput extends GetComputeNodeGroupResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, GetComputeNodeGroupCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, GetComputeNodeGroupCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // GetComputeNodeGroupRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   computeNodeGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetComputeNodeGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeNodeGroupResponse
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
 * //     purchaseOption: "ONDEMAND" || "SPOT" || "CAPACITY_BLOCK",
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
 * @param GetComputeNodeGroupCommandInput - {@link GetComputeNodeGroupCommandInput}
 * @returns {@link GetComputeNodeGroupCommandOutput}
 * @see {@link GetComputeNodeGroupCommandInput} for command's `input` shape.
 * @see {@link GetComputeNodeGroupCommandOutput} for command's `response` shape.
 * @see {@link PCSClientResolvedConfig | config} for PCSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p> <p> <u>Examples</u> </p> <ul> <li> <p>The launch template instance profile doesn't pass <code>iam:PassRole</code> verification.</p> </li> <li> <p>There is a mismatch between the account ID and cluster ID.</p> </li> <li> <p>The cluster ID doesn't exist.</p> </li> <li> <p>The EC2 instance isn't present.</p> </li> </ul>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than 1 operation on the same resource at the same time.</p> <p> <u>Examples</u> </p> <ul> <li> <p>A cluster with the same name already exists.</p> </li> <li> <p>A cluster isn't in <code>ACTIVE</code> status.</p> </li> <li> <p>A cluster to delete is in an unstable state. For example, because it still has <code>ACTIVE</code> node groups or queues.</p> </li> <li> <p>A queue already exists in a cluster.</p> </li> </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>PCS can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found. The cluster, node group, or queue you're attempting to get, update, list, or delete doesn't exist.</p> <p> <u>Examples</u> </p>
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
export class GetComputeNodeGroupCommand extends $Command
  .classBuilder<
    GetComputeNodeGroupCommandInput,
    GetComputeNodeGroupCommandOutput,
    PCSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PCSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSParallelComputingService", "GetComputeNodeGroup", {})
  .n("PCSClient", "GetComputeNodeGroupCommand")
  .sc(GetComputeNodeGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComputeNodeGroupRequest;
      output: GetComputeNodeGroupResponse;
    };
    sdk: {
      input: GetComputeNodeGroupCommandInput;
      output: GetComputeNodeGroupCommandOutput;
    };
  };
}
