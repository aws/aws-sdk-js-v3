// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeploymentInput, CreateDeploymentOutput } from "../models/models_0";
import { CreateDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentOutput, __MetadataBearer {}

/**
 * Deploys an application revision through the specified deployment group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // CreateDeploymentInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE",
 *   revision: { // RevisionLocation
 *     revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *       version: "STRING_VALUE",
 *       eTag: "STRING_VALUE",
 *     },
 *     gitHubLocation: { // GitHubLocation
 *       repository: "STRING_VALUE",
 *       commitId: "STRING_VALUE",
 *     },
 *     string: { // RawString
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *     appSpecContent: { // AppSpecContent
 *       content: "STRING_VALUE",
 *       sha256: "STRING_VALUE",
 *     },
 *   },
 *   deploymentConfigName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ignoreApplicationStopFailures: true || false,
 *   targetInstances: { // TargetInstances
 *     tagFilters: [ // EC2TagFilterList
 *       { // EC2TagFilter
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *       },
 *     ],
 *     autoScalingGroups: [ // AutoScalingGroupNameList
 *       "STRING_VALUE",
 *     ],
 *     ec2TagSet: { // EC2TagSet
 *       ec2TagSetList: [ // EC2TagSetList
 *         [
 *           {
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *           },
 *         ],
 *       ],
 *     },
 *   },
 *   autoRollbackConfiguration: { // AutoRollbackConfiguration
 *     enabled: true || false,
 *     events: [ // AutoRollbackEventsList
 *       "DEPLOYMENT_FAILURE" || "DEPLOYMENT_STOP_ON_ALARM" || "DEPLOYMENT_STOP_ON_REQUEST",
 *     ],
 *   },
 *   updateOutdatedInstancesOnly: true || false,
 *   fileExistsBehavior: "DISALLOW" || "OVERWRITE" || "RETAIN",
 *   deploymentMode: "STANDARD" || "RESTART",
 *   overrideAlarmConfiguration: { // AlarmConfiguration
 *     enabled: true || false,
 *     ignorePollAlarmFailure: true || false,
 *     alarms: [ // AlarmList
 *       { // Alarm
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   ec2DeploymentOptions: { // EC2DeploymentOptions
 *     autoScalingGroupProcessesToSuspend: [ // AutoScalingGroupProcessesToSuspendList
 *       "Terminate" || "AZRebalance" || "InstanceRefresh" || "ScheduledActions",
 *     ],
 *   },
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentOutput
 * //   deploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *
 * The named deployment group with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *
 * The deployment group name was not specified.
 *
 * @throws {@link DeploymentLimitExceededException} (client fault)
 *
 * The number of allowed deployments was exceeded.
 *
 * @throws {@link DescriptionTooLongException} (client fault)
 *
 * The description is too long.
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
 * @throws {@link InvalidComputePlatformException} (client fault)
 *
 * The computePlatform is invalid. The computePlatform should be `Lambda`, `Server`, or `ECS`.
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *
 * The deployment configuration name was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *
 * The deployment group name was specified in an invalid format.
 *
 * @throws {@link InvalidECSServiceException} (client fault)
 *
 * The Amazon ECS service identifier is not valid.
 *
 * @throws {@link InvalidFileExistsBehaviorException} (client fault)
 *
 * An invalid fileExistsBehavior option was specified to determine how CodeDeploy handles files or directories that already exist in a deployment target location, but weren't part of the previous successful deployment. Valid values include "DISALLOW," "OVERWRITE," and "RETAIN."
 *
 * @throws {@link InvalidGitHubAccountTokenException} (client fault)
 *
 * The GitHub token is not valid.
 *
 * @throws {@link InvalidIgnoreApplicationStopFailuresValueException} (client fault)
 *
 * The IgnoreApplicationStopFailures value is invalid. For Lambda deployments, `false` is expected. For EC2/On-premises deployments, `true` or `false` is expected.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input was specified in an invalid format.
 *
 * @throws {@link InvalidLoadBalancerInfoException} (client fault)
 *
 * An invalid load balancer name, or no load balancer name, was specified.
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *
 * The revision was specified in an invalid format.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.
 *
 * @throws {@link InvalidTargetInstancesException} (client fault)
 *
 * The target instance configuration is invalid. Possible causes include:
 *
 * - Configuration data for target instances was entered for an in-place deployment.
 * - The limit of 10 tags for a tag type was exceeded.
 * - The combined length of the tag names exceeded the limit.
 * - A specified tag is not currently applied to any instances.
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *
 * The configuration that specifies how traffic is routed during a deployment is invalid.
 *
 * @throws {@link InvalidUpdateOutdatedInstancesOnlyValueException} (client fault)
 *
 * The UpdateOutdatedInstancesOnly value is invalid. For Lambda deployments, `false` is expected. For EC2/On-premises deployments, `true` or `false` is expected.
 *
 * @throws {@link RevisionDoesNotExistException} (client fault)
 *
 * The named revision does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *
 * The revision ID was not specified.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An API function was called too frequently.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class CreateDeploymentCommand extends command<CreateDeploymentCommandInput, CreateDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeployment",
  CreateDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentInput;
      output: CreateDeploymentOutput;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
