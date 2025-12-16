// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDeploymentGroupInput, CreateDeploymentGroupOutput } from "../models/models_0";
import { CreateDeploymentGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentGroupCommand}.
 */
export interface CreateDeploymentGroupCommandInput extends CreateDeploymentGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentGroupCommand}.
 */
export interface CreateDeploymentGroupCommandOutput extends CreateDeploymentGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a deployment group to which application revisions are deployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // CreateDeploymentGroupInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE", // required
 *   deploymentConfigName: "STRING_VALUE",
 *   ec2TagFilters: [ // EC2TagFilterList
 *     { // EC2TagFilter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *     },
 *   ],
 *   onPremisesInstanceTagFilters: [ // TagFilterList
 *     { // TagFilter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *     },
 *   ],
 *   autoScalingGroups: [ // AutoScalingGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   serviceRoleArn: "STRING_VALUE", // required
 *   triggerConfigurations: [ // TriggerConfigList
 *     { // TriggerConfig
 *       triggerName: "STRING_VALUE",
 *       triggerTargetArn: "STRING_VALUE",
 *       triggerEvents: [ // TriggerEventTypeList
 *         "DeploymentStart" || "DeploymentSuccess" || "DeploymentFailure" || "DeploymentStop" || "DeploymentRollback" || "DeploymentReady" || "InstanceStart" || "InstanceSuccess" || "InstanceFailure" || "InstanceReady",
 *       ],
 *     },
 *   ],
 *   alarmConfiguration: { // AlarmConfiguration
 *     enabled: true || false,
 *     ignorePollAlarmFailure: true || false,
 *     alarms: [ // AlarmList
 *       { // Alarm
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   autoRollbackConfiguration: { // AutoRollbackConfiguration
 *     enabled: true || false,
 *     events: [ // AutoRollbackEventsList
 *       "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 *     ],
 *   },
 *   outdatedInstancesStrategy: "UPDATE" || "IGNORE",
 *   deploymentStyle: { // DeploymentStyle
 *     deploymentType: "IN_PLACE" || "BLUE_GREEN",
 *     deploymentOption: "WITH_TRAFFIC_CONTROL" || "WITHOUT_TRAFFIC_CONTROL",
 *   },
 *   blueGreenDeploymentConfiguration: { // BlueGreenDeploymentConfiguration
 *     terminateBlueInstancesOnDeploymentSuccess: { // BlueInstanceTerminationOption
 *       action: "TERMINATE" || "KEEP_ALIVE",
 *       terminationWaitTimeInMinutes: Number("int"),
 *     },
 *     deploymentReadyOption: { // DeploymentReadyOption
 *       actionOnTimeout: "CONTINUE_DEPLOYMENT" || "STOP_DEPLOYMENT",
 *       waitTimeInMinutes: Number("int"),
 *     },
 *     greenFleetProvisioningOption: { // GreenFleetProvisioningOption
 *       action: "DISCOVER_EXISTING" || "COPY_AUTO_SCALING_GROUP",
 *     },
 *   },
 *   loadBalancerInfo: { // LoadBalancerInfo
 *     elbInfoList: [ // ELBInfoList
 *       { // ELBInfo
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *     targetGroupInfoList: [ // TargetGroupInfoList
 *       { // TargetGroupInfo
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *     targetGroupPairInfoList: [ // TargetGroupPairInfoList
 *       { // TargetGroupPairInfo
 *         targetGroups: [
 *           {
 *             name: "STRING_VALUE",
 *           },
 *         ],
 *         prodTrafficRoute: { // TrafficRoute
 *           listenerArns: [ // ListenerArnList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         testTrafficRoute: {
 *           listenerArns: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   ec2TagSet: { // EC2TagSet
 *     ec2TagSetList: [ // EC2TagSetList
 *       [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *         },
 *       ],
 *     ],
 *   },
 *   ecsServices: [ // ECSServiceList
 *     { // ECSService
 *       serviceName: "STRING_VALUE",
 *       clusterName: "STRING_VALUE",
 *     },
 *   ],
 *   onPremisesTagSet: { // OnPremisesTagSet
 *     onPremisesTagSetList: [ // OnPremisesTagSetList
 *       [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *         },
 *       ],
 *     ],
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   terminationHookEnabled: true || false,
 * };
 * const command = new CreateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentGroupOutput
 * //   deploymentGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentGroupCommandInput - {@link CreateDeploymentGroupCommandInput}
 * @returns {@link CreateDeploymentGroupCommandOutput}
 * @see {@link CreateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link AlarmsLimitExceededException} (client fault)
 *  <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *  <p>The deployment configuration does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link DeploymentGroupAlreadyExistsException} (client fault)
 *  <p>A deployment group with the specified name with the user or Amazon Web Services account
 *             already exists.</p>
 *
 * @throws {@link DeploymentGroupLimitExceededException} (client fault)
 *  <p> The deployment groups limit was exceeded.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link ECSServiceMappingLimitExceededException} (client fault)
 *  <p> The Amazon ECS service is associated with more than one deployment groups. An
 *             Amazon ECS service can be associated with only one deployment group. </p>
 *
 * @throws {@link InvalidAlarmConfigException} (client fault)
 *  <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *          <ul>
 *             <li>
 *                <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                <p>The alarm configuration is enabled, but the alarm list is empty.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidAutoRollbackConfigException} (client fault)
 *  <p>The automatic rollback configuration was specified in an invalid format. For example,
 *             automatic rollback is enabled, but an invalid triggering event type or no event types
 *             were listed.</p>
 *
 * @throws {@link InvalidAutoScalingGroupException} (client fault)
 *  <p>The Auto Scaling group was specified in an invalid format or does not
 *             exist.</p>
 *
 * @throws {@link InvalidBlueGreenDeploymentConfigurationException} (client fault)
 *  <p>The configuration for the blue/green deployment group was provided in an invalid
 *             format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentStyleException} (client fault)
 *  <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE"
 *             and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and
 *             "WITHOUT_TRAFFIC_CONTROL."</p>
 *
 * @throws {@link InvalidEC2TagCombinationException} (client fault)
 *  <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of
 *             these data types can be used in a single call.</p>
 *
 * @throws {@link InvalidEC2TagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link InvalidECSServiceException} (client fault)
 *  <p> The Amazon ECS service identifier is not valid. </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input was specified in an invalid format.</p>
 *
 * @throws {@link InvalidLoadBalancerInfoException} (client fault)
 *  <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 *
 * @throws {@link InvalidOnPremisesTagCombinationException} (client fault)
 *  <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet,
 *             but only one of these data types can be used in a single call.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTagsToAddException} (client fault)
 *  <p> The specified tags are not valid. </p>
 *
 * @throws {@link InvalidTargetGroupPairException} (client fault)
 *  <p> A target group pair associated with this deployment is not valid. </p>
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *  <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 * @throws {@link InvalidTriggerConfigException} (client fault)
 *  <p>The trigger was specified in an invalid format.</p>
 *
 * @throws {@link LifecycleHookLimitExceededException} (client fault)
 *  <p>The limit for lifecycle hooks was exceeded.</p>
 *
 * @throws {@link RoleRequiredException} (client fault)
 *  <p>The role ID was not specified.</p>
 *
 * @throws {@link TagSetListLimitExceededException} (client fault)
 *  <p>The number of tag groups included in the tag set list exceeded the maximum allowed
 *             limit of 3.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An API function was called too frequently.</p>
 *
 * @throws {@link TriggerTargetsLimitExceededException} (client fault)
 *  <p>The maximum allowed number of triggers was exceeded.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class CreateDeploymentGroupCommand extends $Command
  .classBuilder<
    CreateDeploymentGroupCommandInput,
    CreateDeploymentGroupCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "CreateDeploymentGroup", {})
  .n("CodeDeployClient", "CreateDeploymentGroupCommand")
  .sc(CreateDeploymentGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentGroupInput;
      output: CreateDeploymentGroupOutput;
    };
    sdk: {
      input: CreateDeploymentGroupCommandInput;
      output: CreateDeploymentGroupCommandOutput;
    };
  };
}
