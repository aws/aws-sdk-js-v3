// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDeploymentGroupInput, UpdateDeploymentGroupOutput } from "../models/models_0";
import { UpdateDeploymentGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDeploymentGroupCommand}.
 */
export interface UpdateDeploymentGroupCommandInput extends UpdateDeploymentGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentGroupCommand}.
 */
export interface UpdateDeploymentGroupCommandOutput extends UpdateDeploymentGroupOutput, __MetadataBearer {}

/**
 * Changes information about a deployment group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, UpdateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, UpdateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // UpdateDeploymentGroupInput
 *   applicationName: "STRING_VALUE", // required
 *   currentDeploymentGroupName: "STRING_VALUE", // required
 *   newDeploymentGroupName: "STRING_VALUE",
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
 *   serviceRoleArn: "STRING_VALUE",
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
 *   ec2DeploymentOptions: { // EC2DeploymentOptions
 *     autoScalingGroupProcessesToSuspend: [ // AutoScalingGroupProcessesToSuspendList
 *       "Terminate" || "AZRebalance" || "InstanceRefresh" || "ScheduledActions",
 *     ],
 *   },
 *   terminationHookEnabled: true || false,
 * };
 * const command = new UpdateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeploymentGroupOutput
 * //   hooksNotCleanedUp: [ // AutoScalingGroupList
 * //     { // AutoScalingGroup
 * //       name: "STRING_VALUE",
 * //       hook: "STRING_VALUE",
 * //       terminationHook: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateDeploymentGroupCommandInput - {@link UpdateDeploymentGroupCommandInput}
 * @returns {@link UpdateDeploymentGroupCommandOutput}
 * @see {@link UpdateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link AlarmsLimitExceededException} (client fault)
 *
 * The maximum number of alarms for a deployment group (10) was exceeded.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *
 * The deployment configuration does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link DeploymentGroupAlreadyExistsException} (client fault)
 *
 * A deployment group with the specified name with the user or Amazon Web Services account already exists.
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *
 * The named deployment group with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *
 * The deployment group name was not specified.
 *
 * @throws {@link ECSServiceMappingLimitExceededException} (client fault)
 *
 * The Amazon ECS service is associated with more than one deployment groups. An Amazon ECS service can be associated with only one deployment group.
 *
 * @throws {@link InvalidAlarmConfigException} (client fault)
 *
 * The format of the alarm configuration is invalid. Possible causes include:
 *
 * - The alarm list is null.
 * - The alarm object is null.
 * - The alarm name is empty or null or exceeds the limit of 255 characters.
 * - Two alarms with the same name have been specified.
 * - The alarm configuration is enabled, but the alarm list is empty.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidAutoRollbackConfigException} (client fault)
 *
 * The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled, but an invalid triggering event type or no event types were listed.
 *
 * @throws {@link InvalidAutoScalingGroupException} (client fault)
 *
 * The Auto Scaling group was specified in an invalid format or does not exist.
 *
 * @throws {@link InvalidAutoScalingGroupProcessToSuspendException} (client fault)
 *
 * The `autoScalingGroupProcessesToSuspend` list in `ec2DeploymentOptions` contains a process that is not valid. Valid values are `Terminate`, `AZRebalance`, `InstanceRefresh`, and `ScheduledActions`. Process names are case sensitive.
 *
 * @throws {@link InvalidBlueGreenDeploymentConfigurationException} (client fault)
 *
 * The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see CreateDeploymentConfig.
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *
 * The deployment configuration name was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *
 * The deployment group name was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentStyleException} (client fault)
 *
 * An invalid deployment style was specified. Valid deployment types include "IN_PLACE" and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and "WITHOUT_TRAFFIC_CONTROL."
 *
 * @throws {@link InvalidEC2TagCombinationException} (client fault)
 *
 * A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of these data types can be used in a single call.
 *
 * @throws {@link InvalidEC2TagException} (client fault)
 *
 * The tag was specified in an invalid format.
 *
 * @throws {@link InvalidECSServiceException} (client fault)
 *
 * The Amazon ECS service identifier is not valid.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input was specified in an invalid format.
 *
 * @throws {@link InvalidLoadBalancerInfoException} (client fault)
 *
 * An invalid load balancer name, or no load balancer name, was specified.
 *
 * @throws {@link InvalidOnPremisesTagCombinationException} (client fault)
 *
 * A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * The tag was specified in an invalid format.
 *
 * @throws {@link InvalidTargetGroupPairException} (client fault)
 *
 * A target group pair associated with this deployment is not valid.
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *
 * The configuration that specifies how traffic is routed during a deployment is invalid.
 *
 * @throws {@link InvalidTriggerConfigException} (client fault)
 *
 * The trigger was specified in an invalid format.
 *
 * @throws {@link LifecycleHookLimitExceededException} (client fault)
 *
 * The limit for lifecycle hooks was exceeded.
 *
 * @throws {@link TagSetListLimitExceededException} (client fault)
 *
 * The number of tag groups included in the tag set list exceeded the maximum allowed limit of 3.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An API function was called too frequently.
 *
 * @throws {@link TriggerTargetsLimitExceededException} (client fault)
 *
 * The maximum allowed number of triggers was exceeded.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class UpdateDeploymentGroupCommand extends command<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDeploymentGroup",
  UpdateDeploymentGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentGroupInput;
      output: UpdateDeploymentGroupOutput;
    };
    sdk: {
      input: UpdateDeploymentGroupCommandInput;
      output: UpdateDeploymentGroupCommandOutput;
    };
  };
}
