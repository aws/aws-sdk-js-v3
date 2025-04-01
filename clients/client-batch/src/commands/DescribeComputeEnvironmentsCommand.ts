// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeComputeEnvironmentsRequest, DescribeComputeEnvironmentsResponse } from "../models/models_0";
import {
  de_DescribeComputeEnvironmentsCommand,
  se_DescribeComputeEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComputeEnvironmentsCommand}.
 */
export interface DescribeComputeEnvironmentsCommandInput extends DescribeComputeEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComputeEnvironmentsCommand}.
 */
export interface DescribeComputeEnvironmentsCommandOutput
  extends DescribeComputeEnvironmentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your compute environments.</p>
 *          <p>If you're using an unmanaged compute environment, you can use the
 *         <code>DescribeComputeEnvironment</code> operation to determine the
 *         <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeComputeEnvironmentsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeComputeEnvironmentsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeComputeEnvironmentsRequest
 *   computeEnvironments: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComputeEnvironmentsResponse
 * //   computeEnvironments: [ // ComputeEnvironmentDetailList
 * //     { // ComputeEnvironmentDetail
 * //       computeEnvironmentName: "STRING_VALUE", // required
 * //       computeEnvironmentArn: "STRING_VALUE", // required
 * //       unmanagedvCpus: Number("int"),
 * //       ecsClusterArn: "STRING_VALUE",
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       type: "MANAGED" || "UNMANAGED",
 * //       state: "ENABLED" || "DISABLED",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "DELETED" || "VALID" || "INVALID",
 * //       statusReason: "STRING_VALUE",
 * //       computeResources: { // ComputeResource
 * //         type: "EC2" || "SPOT" || "FARGATE" || "FARGATE_SPOT", // required
 * //         allocationStrategy: "BEST_FIT" || "BEST_FIT_PROGRESSIVE" || "SPOT_CAPACITY_OPTIMIZED" || "SPOT_PRICE_CAPACITY_OPTIMIZED",
 * //         minvCpus: Number("int"),
 * //         maxvCpus: Number("int"), // required
 * //         desiredvCpus: Number("int"),
 * //         instanceTypes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         imageId: "STRING_VALUE",
 * //         subnets: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ec2KeyPair: "STRING_VALUE",
 * //         instanceRole: "STRING_VALUE",
 * //         tags: { // TagsMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         placementGroup: "STRING_VALUE",
 * //         bidPercentage: Number("int"),
 * //         spotIamFleetRole: "STRING_VALUE",
 * //         launchTemplate: { // LaunchTemplateSpecification
 * //           launchTemplateId: "STRING_VALUE",
 * //           launchTemplateName: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //           overrides: [ // LaunchTemplateSpecificationOverrideList
 * //             { // LaunchTemplateSpecificationOverride
 * //               launchTemplateId: "STRING_VALUE",
 * //               launchTemplateName: "STRING_VALUE",
 * //               version: "STRING_VALUE",
 * //               targetInstanceTypes: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         ec2Configuration: [ // Ec2ConfigurationList
 * //           { // Ec2Configuration
 * //             imageType: "STRING_VALUE", // required
 * //             imageIdOverride: "STRING_VALUE",
 * //             imageKubernetesVersion: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       serviceRole: "STRING_VALUE",
 * //       updatePolicy: { // UpdatePolicy
 * //         terminateJobsOnUpdate: true || false,
 * //         jobExecutionTimeoutMinutes: Number("long"),
 * //       },
 * //       eksConfiguration: { // EksConfiguration
 * //         eksClusterArn: "STRING_VALUE", // required
 * //         kubernetesNamespace: "STRING_VALUE", // required
 * //       },
 * //       containerOrchestrationType: "ECS" || "EKS",
 * //       uuid: "STRING_VALUE",
 * //       context: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeComputeEnvironmentsCommandInput - {@link DescribeComputeEnvironmentsCommandInput}
 * @returns {@link DescribeComputeEnvironmentsCommandOutput}
 * @see {@link DescribeComputeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeComputeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To describe a compute environment
 * ```javascript
 * // This example describes the P2OnDemand compute environment.
 * const input = {
 *   computeEnvironments: [
 *     "P2OnDemand"
 *   ]
 * };
 * const command = new DescribeComputeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   computeEnvironments: [
 *     {
 *       computeEnvironmentArn: "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
 *       computeEnvironmentName: "P2OnDemand",
 *       computeResources: {
 *         desiredvCpus: 48,
 *         ec2KeyPair: "id_rsa",
 *         instanceRole: "ecsInstanceRole",
 *         instanceTypes: [
 *           "p2"
 *         ],
 *         maxvCpus: 128,
 *         minvCpus: 0,
 *         securityGroupIds: [
 *           "sg-cf5093b2"
 *         ],
 *         subnets: [
 *           "subnet-220c0e0a",
 *           "subnet-1a95556d",
 *           "subnet-978f6dce"
 *         ],
 *         tags: {
 *           Name: "Batch Instance - P2OnDemand"
 *         },
 *         type: "EC2"
 *       },
 *       ecsClusterArn: "arn:aws:ecs:us-east-1:012345678910:cluster/P2OnDemand_Batch_2c06f29d-d1fe-3a49-879d-42394c86effc",
 *       serviceRole: "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
 *       state: "ENABLED",
 *       status: "VALID",
 *       statusReason: "ComputeEnvironment Healthy",
 *       type: "MANAGED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeComputeEnvironmentsCommand extends $Command
  .classBuilder<
    DescribeComputeEnvironmentsCommandInput,
    DescribeComputeEnvironmentsCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DescribeComputeEnvironments", {})
  .n("BatchClient", "DescribeComputeEnvironmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeComputeEnvironmentsCommand)
  .de(de_DescribeComputeEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComputeEnvironmentsRequest;
      output: DescribeComputeEnvironmentsResponse;
    };
    sdk: {
      input: DescribeComputeEnvironmentsCommandInput;
      output: DescribeComputeEnvironmentsCommandOutput;
    };
  };
}
