// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContainerInstancesRequest, DescribeContainerInstancesResponse } from "../models/models_0";
import { de_DescribeContainerInstancesCommand, se_DescribeContainerInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContainerInstancesCommand}.
 */
export interface DescribeContainerInstancesCommandInput extends DescribeContainerInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContainerInstancesCommand}.
 */
export interface DescribeContainerInstancesCommandOutput extends DescribeContainerInstancesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more container instances. Returns metadata about each container
 * 			instance requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DescribeContainerInstancesRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   include: [ // ContainerInstanceFieldList
 *     "TAGS" || "CONTAINER_INSTANCE_HEALTH",
 *   ],
 * };
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerInstancesResponse
 * //   containerInstances: [ // ContainerInstances
 * //     { // ContainerInstance
 * //       containerInstanceArn: "STRING_VALUE",
 * //       ec2InstanceId: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       version: Number("long"),
 * //       versionInfo: { // VersionInfo
 * //         agentVersion: "STRING_VALUE",
 * //         agentHash: "STRING_VALUE",
 * //         dockerVersion: "STRING_VALUE",
 * //       },
 * //       remainingResources: [ // Resources
 * //         { // Resource
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       registeredResources: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       agentConnected: true || false,
 * //       runningTasksCount: Number("int"),
 * //       pendingTasksCount: Number("int"),
 * //       agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       attachments: [ // Attachments
 * //         { // Attachment
 * //           id: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           details: [ // AttachmentDetails
 * //             { // KeyValuePair
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       healthStatus: { // ContainerInstanceHealthStatus
 * //         overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //         details: [ // InstanceHealthCheckResultList
 * //           { // InstanceHealthCheckResult
 * //             type: "CONTAINER_RUNTIME",
 * //             status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //             lastUpdated: new Date("TIMESTAMP"),
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeContainerInstancesCommandInput - {@link DescribeContainerInstancesCommandInput}
 * @returns {@link DescribeContainerInstancesCommandOutput}
 * @see {@link DescribeContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 * @public
 * @example To describe container instance
 * ```javascript
 * // This example provides a description of the specified container instance in your default region, using the container instance UUID as an identifier.
 * const input = {
 *   "cluster": "default",
 *   "containerInstances": [
 *     "f2756532-8f13-4d53-87c9-aed50dc94cd7"
 *   ]
 * };
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "containerInstances": [
 *     {
 *       "agentConnected": true,
 *       "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/default/f2756532-8f13-4d53-87c9-aed50dc94cd7",
 *       "ec2InstanceId": "i-807f3249",
 *       "pendingTasksCount": 0,
 *       "registeredResources": [
 *         {
 *           "name": "CPU",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 2048,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "MEMORY",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 3768,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "PORTS",
 *           "type": "STRINGSET",
 *           "doubleValue": 0,
 *           "integerValue": 0,
 *           "longValue": 0,
 *           "stringSetValue": [
 *             "2376",
 *             "22",
 *             "51678",
 *             "2375"
 *           ]
 *         }
 *       ],
 *       "remainingResources": [
 *         {
 *           "name": "CPU",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 1948,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "MEMORY",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 3668,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "PORTS",
 *           "type": "STRINGSET",
 *           "doubleValue": 0,
 *           "integerValue": 0,
 *           "longValue": 0,
 *           "stringSetValue": [
 *             "2376",
 *             "22",
 *             "80",
 *             "51678",
 *             "2375"
 *           ]
 *         }
 *       ],
 *       "runningTasksCount": 1,
 *       "status": "ACTIVE"
 *     }
 *   ],
 *   "failures": []
 * }
 * *\/
 * // example id: c8f439de-eb27-4269-8ca7-2c0a7ba75ab0
 * ```
 *
 */
export class DescribeContainerInstancesCommand extends $Command
  .classBuilder<
    DescribeContainerInstancesCommandInput,
    DescribeContainerInstancesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "DescribeContainerInstances", {})
  .n("ECSClient", "DescribeContainerInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContainerInstancesCommand)
  .de(de_DescribeContainerInstancesCommand)
  .build() {}
