// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeploymentGroupInput, GetDeploymentGroupOutput } from "../models/models_0";
import { GetDeploymentGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentGroupCommand}.
 */
export interface GetDeploymentGroupCommandInput extends GetDeploymentGroupInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentGroupCommand}.
 */
export interface GetDeploymentGroupCommandOutput extends GetDeploymentGroupOutput, __MetadataBearer {}

/**
 * <p>Gets information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentGroupInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentGroupOutput
 * //   deploymentGroupInfo: { // DeploymentGroupInfo
 * //     applicationName: "STRING_VALUE",
 * //     deploymentGroupId: "STRING_VALUE",
 * //     deploymentGroupName: "STRING_VALUE",
 * //     deploymentConfigName: "STRING_VALUE",
 * //     ec2TagFilters: [ // EC2TagFilterList
 * //       { // EC2TagFilter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //       },
 * //     ],
 * //     onPremisesInstanceTagFilters: [ // TagFilterList
 * //       { // TagFilter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //       },
 * //     ],
 * //     autoScalingGroups: [ // AutoScalingGroupList
 * //       { // AutoScalingGroup
 * //         name: "STRING_VALUE",
 * //         hook: "STRING_VALUE",
 * //         terminationHook: "STRING_VALUE",
 * //       },
 * //     ],
 * //     serviceRoleArn: "STRING_VALUE",
 * //     targetRevision: { // RevisionLocation
 * //       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //       s3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //         version: "STRING_VALUE",
 * //         eTag: "STRING_VALUE",
 * //       },
 * //       gitHubLocation: { // GitHubLocation
 * //         repository: "STRING_VALUE",
 * //         commitId: "STRING_VALUE",
 * //       },
 * //       string: { // RawString
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //       appSpecContent: { // AppSpecContent
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //     },
 * //     triggerConfigurations: [ // TriggerConfigList
 * //       { // TriggerConfig
 * //         triggerName: "STRING_VALUE",
 * //         triggerTargetArn: "STRING_VALUE",
 * //         triggerEvents: [ // TriggerEventTypeList
 * //           "DeploymentStart" || "DeploymentSuccess" || "DeploymentFailure" || "DeploymentStop" || "DeploymentRollback" || "DeploymentReady" || "InstanceStart" || "InstanceSuccess" || "InstanceFailure" || "InstanceReady",
 * //         ],
 * //       },
 * //     ],
 * //     alarmConfiguration: { // AlarmConfiguration
 * //       enabled: true || false,
 * //       ignorePollAlarmFailure: true || false,
 * //       alarms: [ // AlarmList
 * //         { // Alarm
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     autoRollbackConfiguration: { // AutoRollbackConfiguration
 * //       enabled: true || false,
 * //       events: [ // AutoRollbackEventsList
 * //         "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 * //       ],
 * //     },
 * //     deploymentStyle: { // DeploymentStyle
 * //       deploymentType: "IN_PLACE" || "BLUE_GREEN",
 * //       deploymentOption: "WITH_TRAFFIC_CONTROL" || "WITHOUT_TRAFFIC_CONTROL",
 * //     },
 * //     outdatedInstancesStrategy: "UPDATE" || "IGNORE",
 * //     blueGreenDeploymentConfiguration: { // BlueGreenDeploymentConfiguration
 * //       terminateBlueInstancesOnDeploymentSuccess: { // BlueInstanceTerminationOption
 * //         action: "TERMINATE" || "KEEP_ALIVE",
 * //         terminationWaitTimeInMinutes: Number("int"),
 * //       },
 * //       deploymentReadyOption: { // DeploymentReadyOption
 * //         actionOnTimeout: "CONTINUE_DEPLOYMENT" || "STOP_DEPLOYMENT",
 * //         waitTimeInMinutes: Number("int"),
 * //       },
 * //       greenFleetProvisioningOption: { // GreenFleetProvisioningOption
 * //         action: "DISCOVER_EXISTING" || "COPY_AUTO_SCALING_GROUP",
 * //       },
 * //     },
 * //     loadBalancerInfo: { // LoadBalancerInfo
 * //       elbInfoList: [ // ELBInfoList
 * //         { // ELBInfo
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       targetGroupInfoList: [ // TargetGroupInfoList
 * //         { // TargetGroupInfo
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       targetGroupPairInfoList: [ // TargetGroupPairInfoList
 * //         { // TargetGroupPairInfo
 * //           targetGroups: [
 * //             {
 * //               name: "STRING_VALUE",
 * //             },
 * //           ],
 * //           prodTrafficRoute: { // TrafficRoute
 * //             listenerArns: [ // ListenerArnList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           testTrafficRoute: {
 * //             listenerArns: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     lastSuccessfulDeployment: { // LastDeploymentInfo
 * //       deploymentId: "STRING_VALUE",
 * //       status: "Created" || "Queued" || "InProgress" || "Baking" || "Succeeded" || "Failed" || "Stopped" || "Ready",
 * //       endTime: new Date("TIMESTAMP"),
 * //       createTime: new Date("TIMESTAMP"),
 * //     },
 * //     lastAttemptedDeployment: {
 * //       deploymentId: "STRING_VALUE",
 * //       status: "Created" || "Queued" || "InProgress" || "Baking" || "Succeeded" || "Failed" || "Stopped" || "Ready",
 * //       endTime: new Date("TIMESTAMP"),
 * //       createTime: new Date("TIMESTAMP"),
 * //     },
 * //     ec2TagSet: { // EC2TagSet
 * //       ec2TagSetList: [ // EC2TagSetList
 * //         [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //           },
 * //         ],
 * //       ],
 * //     },
 * //     onPremisesTagSet: { // OnPremisesTagSet
 * //       onPremisesTagSetList: [ // OnPremisesTagSetList
 * //         [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 * //           },
 * //         ],
 * //       ],
 * //     },
 * //     computePlatform: "Server" || "Lambda" || "ECS",
 * //     ecsServices: [ // ECSServiceList
 * //       { // ECSService
 * //         serviceName: "STRING_VALUE",
 * //         clusterName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     terminationHookEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentGroupCommandInput - {@link GetDeploymentGroupCommandInput}
 * @returns {@link GetDeploymentGroupCommandOutput}
 * @see {@link GetDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
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
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *  <p>The named deployment group with the user or Amazon Web Services account does not
 *             exist.</p>
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *  <p>The deployment group name was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *  <p>The deployment group name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class GetDeploymentGroupCommand extends $Command
  .classBuilder<
    GetDeploymentGroupCommandInput,
    GetDeploymentGroupCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "GetDeploymentGroup", {})
  .n("CodeDeployClient", "GetDeploymentGroupCommand")
  .sc(GetDeploymentGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentGroupInput;
      output: GetDeploymentGroupOutput;
    };
    sdk: {
      input: GetDeploymentGroupCommandInput;
      output: GetDeploymentGroupCommandOutput;
    };
  };
}
