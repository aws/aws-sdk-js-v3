// smithy-typescript generated code
import type {
  _InstanceType,
  ApplicationRevisionSortBy,
  AutoRollbackEvent,
  AutoScalingGroupProcess,
  BundleType,
  ComputePlatform,
  DeploymentCreator,
  DeploymentMode,
  DeploymentOption,
  DeploymentReadyAction,
  DeploymentStatus,
  DeploymentTargetType,
  DeploymentType,
  DeploymentWaitType,
  EC2TagFilterType,
  ErrorCode,
  FileExistsBehavior,
  GreenFleetProvisioningAction,
  InstanceAction,
  InstanceStatus,
  LifecycleErrorCode,
  LifecycleEventStatus,
  ListStateFilterAction,
  MinimumHealthyHostsPerZoneType,
  MinimumHealthyHostsType,
  OutdatedInstancesStrategy,
  RegistrationStatus,
  RevisionLocationType,
  SortOrder,
  StopStatus,
  TagFilterType,
  TargetFilterName,
  TargetLabel,
  TargetStatus,
  TrafficRoutingType,
  TriggerEventType,
} from "./enums";

/**
 * Information about a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Represents the input of, and adds tags to, an on-premises instance operation.
 *
 * @public
 */
export interface AddTagsToOnPremisesInstancesInput {
  /**
   * The tag key-value pairs to add to the on-premises instances.
   *
   * Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * The names of the on-premises instances to which to add tags.
   *
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * Information about an alarm.
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about alarms associated with a deployment or deployment group.
 *
 * @public
 */
export interface AlarmConfiguration {
  /**
   * Indicates whether the alarm configuration is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.
   *
   * - `true`: The deployment proceeds even if alarm status information can't be retrieved from Amazon CloudWatch.
   * - `false`: The deployment stops if alarm status information can't be retrieved from Amazon CloudWatch.
   *
   * @public
   */
  ignorePollAlarmFailure?: boolean | undefined;

  /**
   * A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.
   *
   * @public
   */
  alarms?: Alarm[] | undefined;
}

/**
 * Information about an application.
 *
 * @public
 */
export interface ApplicationInfo {
  /**
   * The application ID.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The application name.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The time at which the application was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * True if the user has authenticated with GitHub for the specified application. Otherwise, false.
   *
   * @public
   */
  linkedToGitHub?: boolean | undefined;

  /**
   * The name for a connection to a GitHub account.
   *
   * @public
   */
  gitHubAccountName?: string | undefined;

  /**
   * The destination platform type for deployment of the application (`Lambda` or `Server`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;
}

/**
 * A revision for an Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated `RawString` data type.
 *
 * @public
 */
export interface AppSpecContent {
  /**
   * The YAML-formatted or JSON-formatted revision string.
   *
   * For an Lambda deployment, the content includes a Lambda function name, the alias for its original version, and the alias for its replacement version. The deployment shifts traffic from the original version of the Lambda function to the replacement version.
   *
   * For an Amazon ECS deployment, the content includes the task name, information about the load balancer that serves traffic to the container, and more.
   *
   * For both types of deployments, the content can specify Lambda functions that run at specified hooks, such as `BeforeInstall`, during a deployment.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The SHA256 hash value of the revision content.
   *
   * @public
   */
  sha256?: string | undefined;
}

/**
 * Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
 *
 * @public
 */
export interface AutoRollbackConfiguration {
  /**
   * Indicates whether a defined automatic rollback configuration is currently enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The event type or types that trigger a rollback.
   *
   * @public
   */
  events?: AutoRollbackEvent[] | undefined;
}

/**
 * Information about an Auto Scaling group.
 *
 * @public
 */
export interface AutoScalingGroup {
  /**
   * The Auto Scaling group name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the launch hook that CodeDeploy installed into the Auto Scaling group.
   *
   * For more information about the launch hook, see [How Amazon EC2 Auto Scaling works with CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  hook?: string | undefined;

  /**
   * The name of the termination hook that CodeDeploy installed into the Auto Scaling group.
   *
   * For more information about the termination hook, see [Enabling termination deployments during Auto Scaling scale-in events](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  terminationHook?: string | undefined;
}

/**
 * Information about the location of application artifacts stored in GitHub.
 *
 * @public
 */
export interface GitHubLocation {
  /**
   * The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision.
   *
   * Specified as account/repository.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
   *
   * @public
   */
  commitId?: string | undefined;
}

/**
 * Information about the location of application artifacts stored in Amazon S3.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket where the application revision is stored.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The file type of the application revision. Must be one of the following:
   *
   * - `tar`: A tar archive file.
   * - `tgz`: A compressed tar archive file.
   * - `zip`: A zip archive file.
   * - `YAML`: A YAML-formatted file.
   * - `JSON`: A JSON-formatted file.
   *
   * @public
   */
  bundleType?: BundleType | undefined;

  /**
   * A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.
   *
   * If the version is not specified, the system uses the most recent version by default.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.
   *
   * If the ETag is not specified as an input parameter, ETag validation of the object is skipped.
   *
   * @public
   */
  eTag?: string | undefined;
}

/**
 * A revision for an Lambda deployment that is a YAML-formatted or JSON-formatted string. For Lambda deployments, the revision is the same as the AppSpec file.
 *
 * @deprecated RawString and String revision type are deprecated, use AppSpecContent type instead.
 * @public
 */
export interface RawString {
  /**
   * The YAML-formatted or JSON-formatted revision string. It includes information about which Lambda function to update and optional Lambda functions that validate deployment lifecycle events.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The SHA256 hash value of the revision content.
   *
   * @public
   */
  sha256?: string | undefined;
}

/**
 * Information about the location of an application revision.
 *
 * @public
 */
export interface RevisionLocation {
  /**
   * The type of application revision:
   *
   * - S3: An application revision stored in Amazon S3.
   * - GitHub: An application revision stored in GitHub (EC2/On-premises deployments only).
   * - String: A YAML-formatted or JSON-formatted string (Lambda deployments only).
   * - AppSpecContent: An `AppSpecContent` object that contains the contents of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML stored as a RawString.
   *
   * @public
   */
  revisionType?: RevisionLocationType | undefined;

  /**
   * Information about the location of a revision stored in Amazon S3.
   *
   * @public
   */
  s3Location?: S3Location | undefined;

  /**
   * Information about the location of application artifacts stored in GitHub.
   *
   * @public
   */
  gitHubLocation?: GitHubLocation | undefined;

  /**
   * Information about the location of an Lambda deployment revision stored as a RawString.
   *
   * @deprecated RawString and String revision type are deprecated, use AppSpecContent type instead.
   * @public
   */
  string?: RawString | undefined;

  /**
   * The content of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML and stored as a RawString.
   *
   * @public
   */
  appSpecContent?: AppSpecContent | undefined;
}

/**
 * Represents the input of a `BatchGetApplicationRevisions` operation.
 *
 * @public
 */
export interface BatchGetApplicationRevisionsInput {
  /**
   * The name of an CodeDeploy application about which to get revision information.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * An array of `RevisionLocation` objects that specify information to get about the application revisions, including type and location. The maximum number of `RevisionLocation` objects you can specify is 25.
   *
   * @public
   */
  revisions: RevisionLocation[] | undefined;
}

/**
 * Information about an application revision.
 *
 * @public
 */
export interface GenericRevisionInfo {
  /**
   * A comment about the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The deployment groups for which this is the current target revision.
   *
   * @public
   */
  deploymentGroups?: string[] | undefined;

  /**
   * When the revision was first used by CodeDeploy.
   *
   * @public
   */
  firstUsedTime?: Date | undefined;

  /**
   * When the revision was last used by CodeDeploy.
   *
   * @public
   */
  lastUsedTime?: Date | undefined;

  /**
   * When the revision was registered with CodeDeploy.
   *
   * @public
   */
  registerTime?: Date | undefined;
}

/**
 * Information about an application revision.
 *
 * @public
 */
export interface RevisionInfo {
  /**
   * Information about the location and type of an application revision.
   *
   * @public
   */
  revisionLocation?: RevisionLocation | undefined;

  /**
   * Information about an application revision, including usage details and associated deployment groups.
   *
   * @public
   */
  genericRevisionInfo?: GenericRevisionInfo | undefined;
}

/**
 * Represents the output of a `BatchGetApplicationRevisions` operation.
 *
 * @public
 */
export interface BatchGetApplicationRevisionsOutput {
  /**
   * The name of the application that corresponds to the revisions.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * Information about errors that might have occurred during the API call.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Additional information about the revisions, including the type and location.
   *
   * @public
   */
  revisions?: RevisionInfo[] | undefined;
}

/**
 * Represents the input of a `BatchGetApplications` operation.
 *
 * @public
 */
export interface BatchGetApplicationsInput {
  /**
   * A list of application names separated by spaces. The maximum number of application names you can specify is 100.
   *
   * @public
   */
  applicationNames: string[] | undefined;
}

/**
 * Represents the output of a `BatchGetApplications` operation.
 *
 * @public
 */
export interface BatchGetApplicationsOutput {
  /**
   * Information about the applications.
   *
   * @public
   */
  applicationsInfo?: ApplicationInfo[] | undefined;
}

/**
 * Represents the input of a `BatchGetDeploymentGroups` operation.
 *
 * @public
 */
export interface BatchGetDeploymentGroupsInput {
  /**
   * The name of an CodeDeploy application associated with the applicable user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The names of the deployment groups.
   *
   * @public
   */
  deploymentGroupNames: string[] | undefined;
}

/**
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
 *
 * @public
 */
export interface DeploymentReadyOption {
  /**
   * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
   *
   * - CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
   * - STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment. If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.
   *
   * @public
   */
  actionOnTimeout?: DeploymentReadyAction | undefined;

  /**
   * The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `actionOnTimeout`.
   *
   * @public
   */
  waitTimeInMinutes?: number | undefined;
}

/**
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
 *
 * @public
 */
export interface GreenFleetProvisioningOption {
  /**
   * The method used to add instances to a replacement environment.
   *
   * - `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
   * - `COPY_AUTO_SCALING_GROUP`: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.
   *
   * @public
   */
  action?: GreenFleetProvisioningAction | undefined;
}

/**
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. `BlueInstanceTerminationOption` does not apply to Lambda deployments.
 *
 * @public
 */
export interface BlueInstanceTerminationOption {
  /**
   * The action to take on instances in the original environment after a successful blue/green deployment.
   *
   * - `TERMINATE`: Instances are terminated after a specified wait time.
   * - `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
   *
   * @public
   */
  action?: InstanceAction | undefined;

  /**
   * For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
   *
   * For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set.
   *
   * The maximum setting is 2880 minutes (2 days).
   *
   * @public
   */
  terminationWaitTimeInMinutes?: number | undefined;
}

/**
 * Information about blue/green deployment options for a deployment group.
 *
 * @public
 */
export interface BlueGreenDeploymentConfiguration {
  /**
   * Information about whether to terminate instances in the original fleet during a blue/green deployment.
   *
   * @public
   */
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption | undefined;

  /**
   * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
   *
   * @public
   */
  deploymentReadyOption?: DeploymentReadyOption | undefined;

  /**
   * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
   *
   * @public
   */
  greenFleetProvisioningOption?: GreenFleetProvisioningOption | undefined;
}

/**
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
 *
 * @public
 */
export interface DeploymentStyle {
  /**
   * Indicates whether to run an in-place deployment or a blue/green deployment.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * Indicates whether to route deployment traffic behind a load balancer.
   *
   * @public
   */
  deploymentOption?: DeploymentOption | undefined;
}

/**
 * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
 *
 * @public
 */
export interface EC2DeploymentOptions {
  /**
   * The Amazon EC2 Auto Scaling processes to suspend during the deployment. CodeDeploy suspends these processes before it deploys to instances in an Auto Scaling group, and resumes them when the deployment succeeds, fails, or is stopped. Valid values are `Terminate`, `AZRebalance`, `InstanceRefresh`, and `ScheduledActions`.
   *
   * This parameter applies only to in-place deployments on the EC2/On-premises compute platform. If the list is empty, or if the deployment does not target instances in an Auto Scaling group, no processes are suspended.
   *
   * The service role for the deployment group must have permission to call `autoscaling:SuspendProcesses` and `autoscaling:ResumeProcesses` on the target Auto Scaling groups. If the processes cannot be suspended, the deployment fails before any instance is updated.
   *
   * If you suspend `ScheduledActions`, scheduled actions with a start time during the deployment are skipped and do not run after the process resumes.
   *
   * > **Note:** If CodeDeploy cannot resume the processes, the deployment fails and the processes stay suspended until you resume them with the Auto Scaling `ResumeProcesses` action. While `Terminate` is suspended, Auto Scaling does not replace unhealthy instances. If you suspend `Terminate`, configure a trigger that notifies you when a deployment fails.
   *
   * @public
   */
  autoScalingGroupProcessesToSuspend?: AutoScalingGroupProcess[] | undefined;
}

/**
 * Information about an EC2 tag filter.
 *
 * @public
 */
export interface EC2TagFilter {
  /**
   * The tag filter key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag filter value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The tag filter type:
   *
   * - `KEY_ONLY`: Key only.
   * - `VALUE_ONLY`: Value only.
   * - `KEY_AND_VALUE`: Key and value.
   *
   * @public
   */
  Type?: EC2TagFilterType | undefined;
}

/**
 * Information about groups of Amazon EC2 instance tags.
 *
 * @public
 */
export interface EC2TagSet {
  /**
   * A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   *
   * @public
   */
  ec2TagSetList?: EC2TagFilter[][] | undefined;
}

/**
 * Contains the service and cluster names used to identify an Amazon ECS deployment's target.
 *
 * @public
 */
export interface ECSService {
  /**
   * The name of the target Amazon ECS service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * The name of the cluster that the Amazon ECS service is associated with.
   *
   * @public
   */
  clusterName?: string | undefined;
}

/**
 * Information about the most recent attempted or successful deployment to a deployment group.
 *
 * @public
 */
export interface LastDeploymentInfo {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The status of the most recent deployment.
   *
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * A timestamp that indicates when the most recent deployment to the deployment group was complete.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A timestamp that indicates when the most recent deployment to the deployment group started.
   *
   * @public
   */
  createTime?: Date | undefined;
}

/**
 * Information about a Classic Load Balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.
 *
 * @public
 */
export interface ELBInfo {
  /**
   * For blue/green deployments, the name of the Classic Load Balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the Classic Load Balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
 *
 * @public
 */
export interface TargetGroupInfo {
  /**
   * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment are registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.
 *
 * @public
 */
export interface TrafficRoute {
  /**
   * The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
   *
   * @public
   */
  listenerArns?: string[] | undefined;
}

/**
 * Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.
 *
 * @public
 */
export interface TargetGroupPairInfo {
  /**
   * One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
   *
   * @public
   */
  targetGroups?: TargetGroupInfo[] | undefined;

  /**
   * The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
   *
   * @public
   */
  prodTrafficRoute?: TrafficRoute | undefined;

  /**
   * An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment.
   *
   * @public
   */
  testTrafficRoute?: TrafficRoute | undefined;
}

/**
 * Information about the Elastic Load Balancing load balancer or target group used in a deployment.
 *
 * You can use load balancers and target groups in combination. For example, if you have two Classic Load Balancers, and five target groups tied to an Application Load Balancer, you can specify the two Classic Load Balancers in `elbInfoList`, and the five target groups in `targetGroupInfoList`.
 *
 * @public
 */
export interface LoadBalancerInfo {
  /**
   * An array that contains information about the load balancers to use for load balancing in a deployment. If you're using Classic Load Balancers, specify those load balancers in this array.
   *
   * > **Note:** You can add up to 10 load balancers to the array.
   *
   * > **Note:** If you're using Application Load Balancers or Network Load Balancers, use the `targetGroupInfoList` array instead of this one.
   *
   * @public
   */
  elbInfoList?: ELBInfo[] | undefined;

  /**
   * An array that contains information about the target groups to use for load balancing in a deployment. If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.
   *
   * > **Note:** You can add up to 10 target groups to the array.
   *
   * > **Note:** If you're using Classic Load Balancers, use the `elbInfoList` array instead of this one.
   *
   * @public
   */
  targetGroupInfoList?: TargetGroupInfo[] | undefined;

  /**
   * The target group pair information. This is an array of `TargeGroupPairInfo` objects with a maximum size of one.
   *
   * @public
   */
  targetGroupPairInfoList?: TargetGroupPairInfo[] | undefined;
}

/**
 * Information about an on-premises instance tag filter.
 *
 * @public
 */
export interface TagFilter {
  /**
   * The on-premises instance tag filter key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The on-premises instance tag filter value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The on-premises instance tag filter type:
   *
   * - KEY_ONLY: Key only.
   * - VALUE_ONLY: Value only.
   * - KEY_AND_VALUE: Key and value.
   *
   * @public
   */
  Type?: TagFilterType | undefined;
}

/**
 * Information about groups of on-premises instance tags.
 *
 * @public
 */
export interface OnPremisesTagSet {
  /**
   * A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   *
   * @public
   */
  onPremisesTagSetList?: TagFilter[][] | undefined;
}

/**
 * Information about notification triggers for the deployment group.
 *
 * @public
 */
export interface TriggerConfig {
  /**
   * The name of the notification trigger.
   *
   * @public
   */
  triggerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
   *
   * @public
   */
  triggerTargetArn?: string | undefined;

  /**
   * The event type or types for which notifications are triggered.
   *
   * @public
   */
  triggerEvents?: TriggerEventType[] | undefined;
}

/**
 * Information about a deployment group.
 *
 * @public
 */
export interface DeploymentGroupInfo {
  /**
   * The application name.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The deployment group ID.
   *
   * @public
   */
  deploymentGroupId?: string | undefined;

  /**
   * The deployment group name.
   *
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * The deployment configuration name.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.
   *
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.
   *
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * A list of associated Auto Scaling groups.
   *
   * @public
   */
  autoScalingGroups?: AutoScalingGroup[] | undefined;

  /**
   * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to Amazon Web Services services on your behalf. For more information, see [Create a Service Role for CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * Information about the deployment group's target revision, including type and location.
   *
   * @public
   */
  targetRevision?: RevisionLocation | undefined;

  /**
   * Information about triggers associated with the deployment group.
   *
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * A list of alarms associated with the deployment group.
   *
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Information about the automatic rollback configuration associated with the deployment group.
   *
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
   *
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
   *
   * If this option is set to `UPDATE` or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.
   *
   * If this option is set to `IGNORE`, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
   *
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * Information about blue/green deployment options for a deployment group.
   *
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * Information about the load balancer to use in a deployment.
   *
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * Information about the most recent successful deployment to the deployment group.
   *
   * @public
   */
  lastSuccessfulDeployment?: LastDeploymentInfo | undefined;

  /**
   * Information about the most recent attempted deployment to the deployment group.
   *
   * @public
   */
  lastAttemptedDeployment?: LastDeploymentInfo | undefined;

  /**
   * Information about groups of tags applied to an Amazon EC2 instance. The deployment group includes only Amazon EC2 instances identified by all of the tag groups. Cannot be used in the same call as ec2TagFilters.
   *
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.
   *
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format `<clustername>:<servicename>`.
   *
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
   *
   * @public
   */
  ec2DeploymentOptions?: EC2DeploymentOptions | undefined;

  /**
   * Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
   *
   * For more information about the termination hook, see [How Amazon EC2 Auto Scaling works with CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * Represents the output of a `BatchGetDeploymentGroups` operation.
 *
 * @public
 */
export interface BatchGetDeploymentGroupsOutput {
  /**
   * Information about the deployment groups.
   *
   * @public
   */
  deploymentGroupsInfo?: DeploymentGroupInfo[] | undefined;

  /**
   * Information about errors that might have occurred during the API call.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Represents the input of a `BatchGetDeploymentInstances` operation.
 *
 * @public
 */
export interface BatchGetDeploymentInstancesInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The unique IDs of instances used in the deployment. The maximum number of instance IDs you can specify is 25.
   *
   * @public
   */
  instanceIds: string[] | undefined;
}

/**
 * Diagnostic information about executable scripts that are part of a deployment.
 *
 * @public
 */
export interface Diagnostics {
  /**
   * The associated error code:
   *
   * - Success: The specified script ran.
   * - ScriptMissing: The specified script was not found in the specified location.
   * - ScriptNotExecutable: The specified script is not a recognized executable file type.
   * - ScriptTimedOut: The specified script did not finish running in the specified time period.
   * - ScriptFailed: The specified script failed to run as expected.
   * - UnknownError: The specified script did not run for an unknown reason.
   *
   * @public
   */
  errorCode?: LifecycleErrorCode | undefined;

  /**
   * The name of the script.
   *
   * @public
   */
  scriptName?: string | undefined;

  /**
   * The message associated with the error.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The last portion of the diagnostic log.
   *
   * If available, CodeDeploy returns up to the last 4 KB of the diagnostic log.
   *
   * @public
   */
  logTail?: string | undefined;
}

/**
 * Information about a deployment lifecycle event.
 *
 * @public
 */
export interface LifecycleEvent {
  /**
   * The deployment lifecycle event name, such as `ApplicationStop`, `BeforeInstall`, `AfterInstall`, `ApplicationStart`, or `ValidateService`.
   *
   * @public
   */
  lifecycleEventName?: string | undefined;

  /**
   * Diagnostic information about the deployment lifecycle event.
   *
   * @public
   */
  diagnostics?: Diagnostics | undefined;

  /**
   * A timestamp that indicates when the deployment lifecycle event started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * A timestamp that indicates when the deployment lifecycle event ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The deployment lifecycle event status:
   *
   * - Pending: The deployment lifecycle event is pending.
   * - InProgress: The deployment lifecycle event is in progress.
   * - Succeeded: The deployment lifecycle event ran successfully.
   * - Failed: The deployment lifecycle event has failed.
   * - Skipped: The deployment lifecycle event has been skipped.
   * - Unknown: The deployment lifecycle event is unknown.
   *
   * @public
   */
  status?: LifecycleEventStatus | undefined;
}

/**
 * Information about an instance in a deployment.
 *
 * @deprecated InstanceSummary is deprecated, use DeploymentTarget instead.
 * @public
 */
export interface InstanceSummary {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The instance ID.
   *
   * @public
   */
  instanceId?: string | undefined;

  /**
   * The deployment status for this instance:
   *
   * - `Pending`: The deployment is pending for this instance.
   * - `In Progress`: The deployment is in progress for this instance.
   * - `Succeeded`: The deployment has succeeded for this instance.
   * - `Failed`: The deployment has failed for this instance.
   * - `Skipped`: The deployment has been skipped for this instance.
   * - `Unknown`: The deployment status is unknown for this instance.
   *
   * @deprecated InstanceStatus is deprecated, use TargetStatus instead.
   * @public
   */
  status?: InstanceStatus | undefined;

  /**
   * A timestamp that indicates when the instance information was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * A list of lifecycle events for this instance.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * Information about which environment an instance belongs to in a blue/green deployment.
   *
   * - BLUE: The instance is part of the original environment.
   * - GREEN: The instance is part of the replacement environment.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;
}

/**
 * Represents the output of a `BatchGetDeploymentInstances` operation.
 *
 * @public
 */
export interface BatchGetDeploymentInstancesOutput {
  /**
   * Information about the instance.
   *
   * @public
   */
  instancesSummary?: InstanceSummary[] | undefined;

  /**
   * Information about errors that might have occurred during the API call.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Represents the input of a `BatchGetDeployments` operation.
 *
 * @public
 */
export interface BatchGetDeploymentsInput {
  /**
   * A list of deployment IDs, separated by spaces. The maximum number of deployment IDs you can specify is 25.
   *
   * @public
   */
  deploymentIds: string[] | undefined;
}

/**
 * Information about the deployment status of the instances in the deployment.
 *
 * @public
 */
export interface DeploymentOverview {
  /**
   * The number of instances in the deployment in a pending state.
   *
   * @public
   */
  Pending?: number | undefined;

  /**
   * The number of instances in which the deployment is in progress.
   *
   * @public
   */
  InProgress?: number | undefined;

  /**
   * The number of instances in the deployment to which revisions have been successfully deployed.
   *
   * @public
   */
  Succeeded?: number | undefined;

  /**
   * The number of instances in the deployment in a failed state.
   *
   * @public
   */
  Failed?: number | undefined;

  /**
   * The number of instances in the deployment in a skipped state.
   *
   * @public
   */
  Skipped?: number | undefined;

  /**
   * The number of instances in a replacement environment ready to receive traffic in a blue/green deployment.
   *
   * @public
   */
  Ready?: number | undefined;
}

/**
 * Information about a deployment error.
 *
 * @public
 */
export interface ErrorInformation {
  /**
   * For more information, see [Error Codes for CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html) in the [CodeDeploy User Guide](https://docs.aws.amazon.com/codedeploy/latest/userguide).
   *
   * The error code:
   *
   * - APPLICATION_MISSING: The application was missing. This error code is most likely raised if the application is deleted after the deployment is created, but before it is started.
   * - DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is most likely raised if the deployment group is deleted after the deployment is created, but before it is started.
   * - HEALTH_CONSTRAINTS: The deployment failed on too many instances to be successfully deployed within the instance health constraints specified.
   * - HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed within the instance health constraints specified.
   * - IAM_ROLE_MISSING: The service role cannot be accessed.
   * - IAM_ROLE_PERMISSIONS: The service role does not have the correct permissions.
   * - INTERNAL_ERROR: There was an internal error.
   * - NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon EC2.
   * - NO_INSTANCES: No instances were specified, or no instances can be found.
   * - OVER_MAX_INSTANCES: The maximum number of instances was exceeded.
   * - THROTTLED: The operation was throttled because the calling account exceeded the throttling limits of one or more Amazon Web Services services.
   * - TIMEOUT: The deployment has timed out.
   * - REVISION_MISSING: The revision ID was missing. This error code is most likely raised if the revision is deleted after the deployment is created, but before it is started.
   *
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * An accompanying error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about deployments related to the specified deployment.
 *
 * @public
 */
export interface RelatedDeployments {
  /**
   * The deployment ID of the root deployment that triggered this deployment.
   *
   * @public
   */
  autoUpdateOutdatedInstancesRootDeploymentId?: string | undefined;

  /**
   * The deployment IDs of 'auto-update outdated instances' deployments triggered by this deployment.
   *
   * @public
   */
  autoUpdateOutdatedInstancesDeploymentIds?: string[] | undefined;
}

/**
 * Information about a deployment rollback.
 *
 * @public
 */
export interface RollbackInfo {
  /**
   * The ID of the deployment rollback.
   *
   * @public
   */
  rollbackDeploymentId?: string | undefined;

  /**
   * The deployment ID of the deployment that was underway and triggered a rollback deployment because it failed or was stopped.
   *
   * @public
   */
  rollbackTriggeringDeploymentId?: string | undefined;

  /**
   * Information that describes the status of a deployment rollback (for example, whether the deployment can't be rolled back, is in progress, failed, or succeeded).
   *
   * @public
   */
  rollbackMessage?: string | undefined;
}

/**
 * Information about the instances to be used in the replacement environment in a blue/green deployment.
 *
 * @public
 */
export interface TargetInstances {
  /**
   * The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as `ec2TagSet`.
   *
   * @public
   */
  tagFilters?: EC2TagFilter[] | undefined;

  /**
   * The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.
   *
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * Information about the groups of Amazon EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as `tagFilters`.
   *
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;
}

/**
 * Information about a deployment.
 *
 * @public
 */
export interface DeploymentInfo {
  /**
   * The application name.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The deployment group name.
   *
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * The deployment configuration name.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * Information about the application revision that was deployed to the deployment group before the most recent successful deployment.
   *
   * @public
   */
  previousRevision?: RevisionLocation | undefined;

  /**
   * Information about the location of stored application artifacts and the service from which to retrieve them.
   *
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * The current state of the deployment as a whole.
   *
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * Information about any error associated with this deployment.
   *
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * A timestamp that indicates when the deployment was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * A timestamp that indicates when the deployment was deployed to the deployment group.
   *
   * In some cases, the reported value of the start time might be later than the complete time. This is due to differences in the clock settings of backend servers that participate in the deployment process.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * A timestamp that indicates when the deployment was complete.
   *
   * @public
   */
  completeTime?: Date | undefined;

  /**
   * A summary of the deployment status of the instances in the deployment.
   *
   * @public
   */
  deploymentOverview?: DeploymentOverview | undefined;

  /**
   * A comment about the deployment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The means by which the deployment was created:
   *
   * - `user`: A user created the deployment.
   * - `autoscaling`: Amazon EC2 Auto Scaling created the deployment.
   * - `codeDeployRollback`: A rollback process created the deployment.
   * - `CodeDeployAutoUpdate`: An auto-update process created the deployment when it detected outdated Amazon EC2 instances.
   *
   * @public
   */
  creator?: DeploymentCreator | undefined;

  /**
   * If true, then if an `ApplicationStop`, `BeforeBlockTraffic`, or `AfterBlockTraffic` deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if `ApplicationStop` fails, the deployment continues with DownloadBundle. If `BeforeBlockTraffic` fails, the deployment continues with `BlockTraffic`. If `AfterBlockTraffic` fails, the deployment continues with `ApplicationStop`.
   *
   * If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
   *
   * During a deployment, the CodeDeploy agent runs the scripts specified for `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.
   *
   * If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use `ignoreApplicationStopFailures` to specify that the `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` failures should be ignored.
   *
   * @public
   */
  ignoreApplicationStopFailures?: boolean | undefined;

  /**
   * Information about the automatic rollback configuration associated with the deployment.
   *
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * Indicates whether only instances that are not running the latest application revision are to be deployed to.
   *
   * @public
   */
  updateOutdatedInstancesOnly?: boolean | undefined;

  /**
   * Information about a deployment rollback.
   *
   * @public
   */
  rollbackInfo?: RollbackInfo | undefined;

  /**
   * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
   *
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * Information about the instances that belong to the replacement environment in a blue/green deployment.
   *
   * @public
   */
  targetInstances?: TargetInstances | undefined;

  /**
   * Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified. Otherwise, 'true' as soon as the termination wait period starts.
   *
   * @public
   */
  instanceTerminationWaitTimeStarted?: boolean | undefined;

  /**
   * Information about blue/green deployment options for this deployment.
   *
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * Information about the load balancer used in the deployment.
   *
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.
   *
   * @deprecated AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.
   * @public
   */
  additionalDeploymentStatusInfo?: string | undefined;

  /**
   * Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.
   *
   * - `DISALLOW`: The deployment fails. This is also the default behavior if no option is specified.
   * - `OVERWRITE`: The version of the file from the application revision currently being deployed replaces the version already on the instance.
   * - `RETAIN`: The version of the file already on the instance is kept and used as part of the new deployment.
   *
   * @public
   */
  fileExistsBehavior?: FileExistsBehavior | undefined;

  /**
   * The deployment's type. Valid values are:
   *
   * - `STANDARD`: The deployment installed the specified revision.
   * - `RESTART`: The deployment restarted the application on the target instances using the revision from the deployment group's last successful deployment, without downloading a new revision.
   *
   * This field is absent for deployments created before `deploymentMode` existed, and for `STANDARD` deployments. An absent value must not be interpreted as `STANDARD`; it simply means no value was recorded either way.
   *
   * @public
   */
  deploymentMode?: DeploymentMode | undefined;

  /**
   * Messages that contain information about the status of a deployment.
   *
   * @public
   */
  deploymentStatusMessages?: string[] | undefined;

  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * The unique ID for an external resource (for example, a CloudFormation stack ID) that is linked to this deployment.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * Information about deployments related to the specified deployment.
   *
   * @public
   */
  relatedDeployments?: RelatedDeployments | undefined;

  /**
   * Information about alarms associated with a deployment or deployment group.
   *
   * @public
   */
  overrideAlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
   *
   * @public
   */
  ec2DeploymentOptions?: EC2DeploymentOptions | undefined;
}

/**
 * Represents the output of a `BatchGetDeployments` operation.
 *
 * @public
 */
export interface BatchGetDeploymentsOutput {
  /**
   * Information about the deployments.
   *
   * @public
   */
  deploymentsInfo?: DeploymentInfo[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The unique IDs of the deployment targets. The compute platform of the deployment determines the type of the targets and their formats. The maximum number of deployment target IDs you can specify is 25.
   *
   * - For deployments that use the EC2/On-premises compute platform, the target IDs are Amazon EC2 or on-premises instances IDs, and their target type is `instanceTarget`.
   * - For deployments that use the Lambda compute platform, the target IDs are the names of Lambda functions, and their target type is `instanceTarget`.
   * - For deployments that use the Amazon ECS compute platform, the target IDs are pairs of Amazon ECS clusters and services specified using the format `<clustername>:<servicename>`. Their target type is `ecsTarget`.
   * - For deployments that are deployed with CloudFormation, the target IDs are CloudFormation stack IDs. Their target type is `cloudFormationTarget`.
   *
   * @public
   */
  targetIds: string[] | undefined;
}

/**
 * Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
 *
 * @public
 */
export interface CloudFormationTarget {
  /**
   * The unique ID of an CloudFormation blue/green deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The unique ID of a deployment target that has a type of `CloudFormationTarget`.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The date and time when the target application was updated by an CloudFormation blue/green deployment.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The lifecycle events of the CloudFormation blue/green deployment to this target application.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * The status of an CloudFormation blue/green deployment's target application.
   *
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * The resource type for the CloudFormation blue/green deployment.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The percentage of production traffic that the target version of an CloudFormation blue/green deployment receives.
   *
   * @public
   */
  targetVersionWeight?: number | undefined;
}

/**
 * Information about a set of Amazon ECS tasks in an CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.
 *
 * @public
 */
export interface ECSTaskSet {
  /**
   * A unique ID of an `ECSTaskSet`.
   *
   * @public
   */
  identifer?: string | undefined;

  /**
   * The number of tasks in a task set. During a deployment that uses the Amazon ECS compute type, CodeDeploy instructs Amazon ECS to create a new task set and uses this value to determine how many tasks to create. After the updated task set is created, CodeDeploy shifts traffic to the new task set.
   *
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * The number of tasks in the task set that are in the `PENDING` status during an Amazon ECS deployment. A task in the `PENDING` state is preparing to enter the `RUNNING` state. A task set enters the `PENDING` status when it launches for the first time, or when it is restarted after being in the `STOPPED` state.
   *
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * The number of tasks in the task set that are in the `RUNNING` status during an Amazon ECS deployment. A task in the `RUNNING` state is running and ready for use.
   *
   * @public
   */
  runningCount?: number | undefined;

  /**
   * The status of the task set. There are three valid task set statuses:
   *
   * - `PRIMARY`: Indicates the task set is serving production traffic.
   * - `ACTIVE`: Indicates the task set is not serving production traffic.
   * - `DRAINING`: Indicates the tasks in the task set are being stopped and their corresponding targets are being deregistered from their target group.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The percentage of traffic served by this task set.
   *
   * @public
   */
  trafficWeight?: number | undefined;

  /**
   * The target group associated with the task set. The target group is used by CodeDeploy to manage traffic to a task set.
   *
   * @public
   */
  targetGroup?: TargetGroupInfo | undefined;

  /**
   * A label that identifies whether the ECS task set is an original target (`BLUE`) or a replacement target (`GREEN`).
   *
   * @public
   */
  taskSetLabel?: TargetLabel | undefined;
}

/**
 * Information about the target of an Amazon ECS deployment.
 *
 * @public
 */
export interface ECSTarget {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The unique ID of a deployment target that has a type of `ecsTarget`.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The date and time when the target Amazon ECS application was updated by a deployment.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The lifecycle events of the deployment to this target Amazon ECS application.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * The status an Amazon ECS deployment's target ECS application.
   *
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * The `ECSTaskSet` objects associated with the ECS target.
   *
   * @public
   */
  taskSetsInfo?: ECSTaskSet[] | undefined;
}

/**
 * A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.
 *
 * @public
 */
export interface InstanceTarget {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The unique ID of a deployment target that has a type of `instanceTarget`.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The status an EC2/On-premises deployment's target instance.
   *
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * The date and time when the target instance was updated by a deployment.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The lifecycle events of the deployment to this target instance.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * A label that identifies whether the instance is an original target (`BLUE`) or a replacement target (`GREEN`).
   *
   * @public
   */
  instanceLabel?: TargetLabel | undefined;
}

/**
 * Information about a Lambda function specified in a deployment.
 *
 * @public
 */
export interface LambdaFunctionInfo {
  /**
   * The name of a Lambda function.
   *
   * @public
   */
  functionName?: string | undefined;

  /**
   * The alias of a Lambda function. For more information, see [Lambda Function Aliases](https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html) in the *Lambda Developer Guide*.
   *
   * @public
   */
  functionAlias?: string | undefined;

  /**
   * The version of a Lambda function that production traffic points to.
   *
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * The version of a Lambda function that production traffic points to after the Lambda function is deployed.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * The percentage of production traffic that the target version of a Lambda function receives.
   *
   * @public
   */
  targetVersionWeight?: number | undefined;
}

/**
 * Information about the target Lambda function during an Lambda deployment.
 *
 * @public
 */
export interface LambdaTarget {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The unique ID of a deployment target that has a type of `lambdaTarget`.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The status an Lambda deployment's target Lambda function.
   *
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * The date and time when the target Lambda function was updated by a deployment.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The lifecycle events of the deployment to this target Lambda function.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * A `LambdaFunctionInfo` object that describes a target Lambda function.
   *
   * @public
   */
  lambdaFunctionInfo?: LambdaFunctionInfo | undefined;
}

/**
 * Information about the deployment target.
 *
 * @public
 */
export interface DeploymentTarget {
  /**
   * The deployment type that is specific to the deployment's compute platform or deployments initiated by a CloudFormation stack update.
   *
   * @public
   */
  deploymentTargetType?: DeploymentTargetType | undefined;

  /**
   * Information about the target for a deployment that uses the EC2/On-premises compute platform.
   *
   * @public
   */
  instanceTarget?: InstanceTarget | undefined;

  /**
   * Information about the target for a deployment that uses the Lambda compute platform.
   *
   * @public
   */
  lambdaTarget?: LambdaTarget | undefined;

  /**
   * Information about the target for a deployment that uses the Amazon ECS compute platform.
   *
   * @public
   */
  ecsTarget?: ECSTarget | undefined;

  /**
   * Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
   *
   * @public
   */
  cloudFormationTarget?: CloudFormationTarget | undefined;
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsOutput {
  /**
   * A list of target objects for a deployment. Each target object contains details about the target, such as its status and lifecycle events. The type of the target objects depends on the deployment' compute platform.
   *
   * - **EC2/On-premises**: Each target object is an Amazon EC2 or on-premises instance.
   * - **Lambda**: The target object is a specific version of an Lambda function.
   * - **Amazon ECS**: The target object is an Amazon ECS service.
   * - **CloudFormation**: The target object is an CloudFormation blue/green deployment.
   *
   * @public
   */
  deploymentTargets?: DeploymentTarget[] | undefined;
}

/**
 * Represents the input of a `BatchGetOnPremisesInstances` operation.
 *
 * @public
 */
export interface BatchGetOnPremisesInstancesInput {
  /**
   * The names of the on-premises instances about which to get information. The maximum number of instance names you can specify is 25.
   *
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * Information about an on-premises instance.
 *
 * @public
 */
export interface InstanceInfo {
  /**
   * The name of the on-premises instance.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The ARN of the IAM session associated with the on-premises instance.
   *
   * @public
   */
  iamSessionArn?: string | undefined;

  /**
   * The user ARN associated with the on-premises instance.
   *
   * @public
   */
  iamUserArn?: string | undefined;

  /**
   * The ARN of the on-premises instance.
   *
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * The time at which the on-premises instance was registered.
   *
   * @public
   */
  registerTime?: Date | undefined;

  /**
   * If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.
   *
   * @public
   */
  deregisterTime?: Date | undefined;

  /**
   * The tags currently associated with the on-premises instance.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Represents the output of a `BatchGetOnPremisesInstances` operation.
 *
 * @public
 */
export interface BatchGetOnPremisesInstancesOutput {
  /**
   * Information about the on-premises instances.
   *
   * @public
   */
  instanceInfos?: InstanceInfo[] | undefined;
}

/**
 * @public
 */
export interface ContinueDeploymentInput {
  /**
   * The unique ID of a blue/green deployment for which you want to start rerouting traffic to the replacement environment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The status of the deployment's waiting period. `READY_WAIT` indicates that the deployment is ready to start shifting traffic. `TERMINATION_WAIT` indicates that the traffic is shifted, but the original target is not terminated.
   *
   * @public
   */
  deploymentWaitType?: DeploymentWaitType | undefined;
}

/**
 * Represents the input of a `CreateApplication` operation.
 *
 * @public
 */
export interface CreateApplicationInput {
  /**
   * The name of the application. This name must be unique with the applicable user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Represents the output of a `CreateApplication` operation.
 *
 * @public
 */
export interface CreateApplicationOutput {
  /**
   * A unique application ID.
   *
   * @public
   */
  applicationId?: string | undefined;
}

/**
 * Represents the input of a `CreateDeployment` operation.
 *
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The name of the deployment group.
   *
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * The type and location of the revision to deploy.
   *
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * The name of a deployment configuration associated with the user or Amazon Web Services account.
   *
   * If not specified, the value configured in the deployment group is used as the default. If the deployment group does not have a deployment configuration associated with it, `CodeDeployDefault`.`OneAtATime` is used by default.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * A comment about the deployment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * If true, then if an `ApplicationStop`, `BeforeBlockTraffic`, or `AfterBlockTraffic` deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if `ApplicationStop` fails, the deployment continues with `DownloadBundle`. If `BeforeBlockTraffic` fails, the deployment continues with `BlockTraffic`. If `AfterBlockTraffic` fails, the deployment continues with `ApplicationStop`.
   *
   * If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
   *
   * During a deployment, the CodeDeploy agent runs the scripts specified for `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.
   *
   * If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use `ignoreApplicationStopFailures` to specify that the `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` failures should be ignored.
   *
   * @public
   */
  ignoreApplicationStopFailures?: boolean | undefined;

  /**
   * Information about the instances that belong to the replacement environment in a blue/green deployment.
   *
   * @public
   */
  targetInstances?: TargetInstances | undefined;

  /**
   * Configuration information for an automatic rollback that is added when a deployment is created.
   *
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * Indicates whether to deploy to all instances or only to instances that are not running the latest application revision.
   *
   * @public
   */
  updateOutdatedInstancesOnly?: boolean | undefined;

  /**
   * Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.
   *
   * The `fileExistsBehavior` parameter takes any of the following values:
   *
   * - DISALLOW: The deployment fails. This is also the default behavior if no option is specified.
   * - OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.
   * - RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.
   *
   * @public
   */
  fileExistsBehavior?: FileExistsBehavior | undefined;

  /**
   * The type of deployment to create. Valid values are:
   *
   * - `STANDARD`: Deploys the specified revision. This is the default behavior if `deploymentMode` is not specified.
   * - `RESTART`: Restarts the application on the target instances using the revision from the deployment group's last successful deployment, without downloading a new revision. `RESTART` is supported only for EC2/On-premises in-place deployments.
   *
   *   When `deploymentMode` is `RESTART`, the following apply:
   *
   *   - The call is rejected for Amazon ECS and Lambda deployments.
   *   - The `revision` parameter (including its `s3Location` and `gitHubLocation`) must not be specified, and is rejected if provided. The revision is resolved by the service from the deployment group's last successful deployment.
   *   - The `updateOutdatedInstancesOnly` parameter must not be set to `true`, and is rejected if provided.
   *
   * @public
   */
  deploymentMode?: DeploymentMode | undefined;

  /**
   * Allows you to specify information about alarms associated with a deployment. The alarm configuration that you specify here will override the alarm configuration at the deployment group level. Consider overriding the alarm configuration if you have set up alarms at the deployment group level that are causing deployment failures. In this case, you would call `CreateDeployment` to create a new deployment that uses a previous application revision that is known to work, and set its alarm configuration to turn off alarm polling. Turning off alarm polling ensures that the new deployment proceeds without being blocked by the alarm that was generated by the previous, failed, deployment.
   *
   * > **Note:** If you specify an `overrideAlarmConfiguration`, you need the `UpdateDeploymentGroup` IAM permission when calling `CreateDeployment`.
   *
   * @public
   */
  overrideAlarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
   *
   * @public
   */
  ec2DeploymentOptions?: EC2DeploymentOptions | undefined;
}

/**
 * Represents the output of a `CreateDeployment` operation.
 *
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * Information about the minimum number of healthy instances.
 *
 * @public
 */
export interface MinimumHealthyHosts {
  /**
   * The minimum healthy instance type:
   *
   * - `HOST_COUNT`: The minimum number of healthy instances as an absolute value.
   * - `FLEET_PERCENT`: The minimum number of healthy instances as a percentage of the total number of instances in the deployment.
   *
   * In an example of nine instances, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment is successful if six or more instances are deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instances at a time. The deployment is successful if four or more instances are deployed to successfully. Otherwise, the deployment fails.
   *
   * > **Note:** In a call to the `GetDeploymentConfig`, CodeDeployDefault.OneAtATime returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, CodeDeploy attempts to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment is still successful.
   *
   * For more information, see [CodeDeploy Instance Health](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  type?: MinimumHealthyHostsType | undefined;

  /**
   * The minimum healthy instance value.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 *
 * @public
 */
export interface TimeBasedCanary {
  /**
   * The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
   *
   * @public
   */
  canaryPercentage?: number | undefined;

  /**
   * The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
   *
   * @public
   */
  canaryInterval?: number | undefined;
}

/**
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 *
 * @public
 */
export interface TimeBasedLinear {
  /**
   * The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.
   *
   * @public
   */
  linearPercentage?: number | undefined;

  /**
   * The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.
   *
   * @public
   */
  linearInterval?: number | undefined;
}

/**
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
 *
 * @public
 */
export interface TrafficRoutingConfig {
  /**
   * The type of traffic shifting (`TimeBasedCanary` or `TimeBasedLinear`) used by a deployment configuration.
   *
   * @public
   */
  type?: TrafficRoutingType | undefined;

  /**
   * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
   *
   * @public
   */
  timeBasedCanary?: TimeBasedCanary | undefined;

  /**
   * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or Amazon ECS task sets are specified in the deployment's AppSpec file.
   *
   * @public
   */
  timeBasedLinear?: TimeBasedLinear | undefined;
}

/**
 * Information about the minimum number of healthy instances per Availability Zone.
 *
 * @public
 */
export interface MinimumHealthyHostsPerZone {
  /**
   * The `type` associated with the `MinimumHealthyHostsPerZone` option.
   *
   * @public
   */
  type?: MinimumHealthyHostsPerZoneType | undefined;

  /**
   * The `value` associated with the `MinimumHealthyHostsPerZone` option.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Configure the `ZonalConfig` object if you want CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an Amazon Web Services Region. By deploying to one Availability Zone at a time, you can expose your deployment to a progressively larger audience as confidence in the deployment's performance and viability grows. If you don't configure the `ZonalConfig` object, CodeDeploy deploys your application to a random selection of hosts across a Region.
 *
 * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide*.
 *
 * @public
 */
export interface ZonalConfig {
  /**
   * The period of time, in seconds, that CodeDeploy must wait after completing a deployment to the *first* Availability Zone. CodeDeploy will wait this amount of time before starting a deployment to the second Availability Zone. You might set this option if you want to allow extra bake time for the first Availability Zone. If you don't specify a value for `firstZoneMonitorDurationInSeconds`, then CodeDeploy uses the `monitorDurationInSeconds` value for the first Availability Zone.
   *
   * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  firstZoneMonitorDurationInSeconds?: number | undefined;

  /**
   * The period of time, in seconds, that CodeDeploy must wait after completing a deployment to an Availability Zone. CodeDeploy will wait this amount of time before starting a deployment to the next Availability Zone. Consider adding a monitor duration to give the deployment some time to prove itself (or 'bake') in one Availability Zone before it is released in the next zone. If you don't specify a `monitorDurationInSeconds`, CodeDeploy starts deploying to the next Availability Zone immediately.
   *
   * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  monitorDurationInSeconds?: number | undefined;

  /**
   * The number or percentage of instances that must remain available per Availability Zone during a deployment. This option works in conjunction with the `MinimumHealthyHosts` option. For more information, see [About the minimum number of healthy hosts per Availability Zone](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html#minimum-healthy-hosts-az) in the *CodeDeploy User Guide*.
   *
   * If you don't specify the `minimumHealthyHostsPerZone` option, then CodeDeploy uses a default value of `0` percent.
   *
   * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  minimumHealthyHostsPerZone?: MinimumHealthyHostsPerZone | undefined;
}

/**
 * Represents the input of a `CreateDeploymentConfig` operation.
 *
 * @public
 */
export interface CreateDeploymentConfigInput {
  /**
   * The name of the deployment configuration to create.
   *
   * @public
   */
  deploymentConfigName: string | undefined;

  /**
   * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
   *
   * The type parameter takes either of the following values:
   *
   * - HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.
   * - FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up fractional instances.
   *
   * The value parameter takes an integer.
   *
   * For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.
   *
   * @public
   */
  minimumHealthyHosts?: MinimumHealthyHosts | undefined;

  /**
   * The configuration that specifies how the deployment traffic is routed.
   *
   * @public
   */
  trafficRoutingConfig?: TrafficRoutingConfig | undefined;

  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * Configure the `ZonalConfig` object if you want CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an Amazon Web Services Region.
   *
   * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  zonalConfig?: ZonalConfig | undefined;
}

/**
 * Represents the output of a `CreateDeploymentConfig` operation.
 *
 * @public
 */
export interface CreateDeploymentConfigOutput {
  /**
   * A unique deployment configuration ID.
   *
   * @public
   */
  deploymentConfigId?: string | undefined;
}

/**
 * Represents the input of a `CreateDeploymentGroup` operation.
 *
 * @public
 */
export interface CreateDeploymentGroupInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The name of a new deployment group for the specified application.
   *
   * @public
   */
  deploymentGroupName: string | undefined;

  /**
   * If specified, the deployment configuration name can be either one of the predefined configurations provided with CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation.
   *
   * `CodeDeployDefault.OneAtATime` is the default deployment configuration. It is used if a configuration isn't specified for the deployment or deployment group.
   *
   * For more information about the predefined deployment configurations in CodeDeploy, see [Working with Deployment Configurations in CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.
   *
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags. Cannot be used in the same call as `OnPremisesTagSet`.
   *
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * A list of associated Amazon EC2 Auto Scaling groups.
   *
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on the user's behalf when interacting with Amazon Web Services services.
   *
   * @public
   */
  serviceRoleArn: string | undefined;

  /**
   * Information about triggers to create when the deployment group is created. For examples, see [Create a Trigger for an CodeDeploy Event](https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * Information to add about Amazon CloudWatch alarms when the deployment group is created.
   *
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Configuration information for an automatic rollback that is added when a deployment group is created.
   *
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
   *
   * If this option is set to `UPDATE` or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.
   *
   * If this option is set to `IGNORE`, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
   *
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.
   *
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * Information about blue/green deployment options for a deployment group.
   *
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * Information about the load balancer used in a deployment.
   *
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as `ec2TagFilters`.
   *
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format `<clustername>:<servicename>`.
   *
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all of the tag groups. Cannot be used in the same call as `onPremisesInstanceTagFilters`.
   *
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
   *
   * @public
   */
  ec2DeploymentOptions?: EC2DeploymentOptions | undefined;

  /**
   * This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see [Integrating CodeDeploy with Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html) in the *CodeDeploy User Guide*.
   *
   * Set `terminationHookEnabled` to `true` to have CodeDeploy install a termination hook into your Auto Scaling group when you create a deployment group. When this hook is installed, CodeDeploy will perform termination deployments.
   *
   * For information about termination deployments, see [Enabling termination deployments during Auto Scaling scale-in events](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable) in the *CodeDeploy User Guide*.
   *
   * For more information about Auto Scaling scale-in events, see the [Scale in](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html#as-lifecycle-scale-in) topic in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * Represents the output of a `CreateDeploymentGroup` operation.
 *
 * @public
 */
export interface CreateDeploymentGroupOutput {
  /**
   * A unique deployment group ID.
   *
   * @public
   */
  deploymentGroupId?: string | undefined;
}

/**
 * Represents the input of a `DeleteApplication` operation.
 *
 * @public
 */
export interface DeleteApplicationInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;
}

/**
 * Represents the input of a `DeleteDeploymentConfig` operation.
 *
 * @public
 */
export interface DeleteDeploymentConfigInput {
  /**
   * The name of a deployment configuration associated with the user or Amazon Web Services account.
   *
   * @public
   */
  deploymentConfigName: string | undefined;
}

/**
 * Represents the input of a `DeleteDeploymentGroup` operation.
 *
 * @public
 */
export interface DeleteDeploymentGroupInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The name of a deployment group for the specified application.
   *
   * @public
   */
  deploymentGroupName: string | undefined;
}

/**
 * Represents the output of a `DeleteDeploymentGroup` operation.
 *
 * @public
 */
export interface DeleteDeploymentGroupOutput {
  /**
   * If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon EC2 instances in the Auto Scaling group.
   *
   * @public
   */
  hooksNotCleanedUp?: AutoScalingGroup[] | undefined;
}

/**
 * Represents the input of a `DeleteGitHubAccount` operation.
 *
 * @public
 */
export interface DeleteGitHubAccountTokenInput {
  /**
   * The name of the GitHub account connection to delete.
   *
   * @public
   */
  tokenName?: string | undefined;
}

/**
 * Represents the output of a `DeleteGitHubAccountToken` operation.
 *
 * @public
 */
export interface DeleteGitHubAccountTokenOutput {
  /**
   * The name of the GitHub account connection that was deleted.
   *
   * @public
   */
  tokenName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdInput {
  /**
   * The unique ID of an external resource (for example, a CloudFormation stack ID) that is linked to one or more CodeDeploy resources.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdOutput {}

/**
 * Represents the input of a `DeregisterOnPremisesInstance` operation.
 *
 * @public
 */
export interface DeregisterOnPremisesInstanceInput {
  /**
   * The name of the on-premises instance to deregister.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * Represents the input of a `GetApplication` operation.
 *
 * @public
 */
export interface GetApplicationInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;
}

/**
 * Represents the output of a `GetApplication` operation.
 *
 * @public
 */
export interface GetApplicationOutput {
  /**
   * Information about the application.
   *
   * @public
   */
  application?: ApplicationInfo | undefined;
}

/**
 * Represents the input of a `GetApplicationRevision` operation.
 *
 * @public
 */
export interface GetApplicationRevisionInput {
  /**
   * The name of the application that corresponds to the revision.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * Information about the application revision to get, including type and location.
   *
   * @public
   */
  revision: RevisionLocation | undefined;
}

/**
 * Represents the output of a `GetApplicationRevision` operation.
 *
 * @public
 */
export interface GetApplicationRevisionOutput {
  /**
   * The name of the application that corresponds to the revision.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * Additional information about the revision, including type and location.
   *
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * General information about the revision.
   *
   * @public
   */
  revisionInfo?: GenericRevisionInfo | undefined;
}

/**
 * Represents the input of a `GetDeployment` operation.
 *
 * @public
 */
export interface GetDeploymentInput {
  /**
   * The unique ID of a deployment associated with the user or Amazon Web Services account.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * Represents the output of a `GetDeployment` operation.
 *
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * Information about the deployment.
   *
   * @public
   */
  deploymentInfo?: DeploymentInfo | undefined;
}

/**
 * Represents the input of a `GetDeploymentConfig` operation.
 *
 * @public
 */
export interface GetDeploymentConfigInput {
  /**
   * The name of a deployment configuration associated with the user or Amazon Web Services account.
   *
   * @public
   */
  deploymentConfigName: string | undefined;
}

/**
 * Information about a deployment configuration.
 *
 * @public
 */
export interface DeploymentConfigInfo {
  /**
   * The deployment configuration ID.
   *
   * @public
   */
  deploymentConfigId?: string | undefined;

  /**
   * The deployment configuration name.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * Information about the number or percentage of minimum healthy instances.
   *
   * @public
   */
  minimumHealthyHosts?: MinimumHealthyHosts | undefined;

  /**
   * The time at which the deployment configuration was created.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * The configuration that specifies how the deployment traffic is routed. Used for deployments with a Lambda or Amazon ECS compute platform only.
   *
   * @public
   */
  trafficRoutingConfig?: TrafficRoutingConfig | undefined;

  /**
   * Information about a zonal configuration.
   *
   * @public
   */
  zonalConfig?: ZonalConfig | undefined;
}

/**
 * Represents the output of a `GetDeploymentConfig` operation.
 *
 * @public
 */
export interface GetDeploymentConfigOutput {
  /**
   * Information about the deployment configuration.
   *
   * @public
   */
  deploymentConfigInfo?: DeploymentConfigInfo | undefined;
}

/**
 * Represents the input of a `GetDeploymentGroup` operation.
 *
 * @public
 */
export interface GetDeploymentGroupInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The name of a deployment group for the specified application.
   *
   * @public
   */
  deploymentGroupName: string | undefined;
}

/**
 * Represents the output of a `GetDeploymentGroup` operation.
 *
 * @public
 */
export interface GetDeploymentGroupOutput {
  /**
   * Information about the deployment group.
   *
   * @public
   */
  deploymentGroupInfo?: DeploymentGroupInfo | undefined;
}

/**
 * Represents the input of a `GetDeploymentInstance` operation.
 *
 * @public
 */
export interface GetDeploymentInstanceInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The unique ID of an instance in the deployment group.
   *
   * @public
   */
  instanceId: string | undefined;
}

/**
 * Represents the output of a `GetDeploymentInstance` operation.
 *
 * @public
 */
export interface GetDeploymentInstanceOutput {
  /**
   * Information about the instance.
   *
   * @deprecated InstanceSummary is deprecated, use DeploymentTarget instead.
   * @public
   */
  instanceSummary?: InstanceSummary | undefined;
}

/**
 * @public
 */
export interface GetDeploymentTargetInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The unique ID of a deployment target.
   *
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentTargetOutput {
  /**
   * A deployment target that contains information about a deployment such as its status, lifecycle events, and when it was last updated. It also contains metadata about the deployment target. The deployment target metadata depends on the deployment target's type (`instanceTarget`, `lambdaTarget`, or `ecsTarget`).
   *
   * @public
   */
  deploymentTarget?: DeploymentTarget | undefined;
}

/**
 * Represents the input of a `GetOnPremisesInstance` operation.
 *
 * @public
 */
export interface GetOnPremisesInstanceInput {
  /**
   * The name of the on-premises instance about which to get information.
   *
   * @public
   */
  instanceName: string | undefined;
}

/**
 * Represents the output of a `GetOnPremisesInstance` operation.
 *
 * @public
 */
export interface GetOnPremisesInstanceOutput {
  /**
   * Information about the on-premises instance.
   *
   * @public
   */
  instanceInfo?: InstanceInfo | undefined;
}

/**
 * Represents the input of a `ListApplicationRevisions` operation.
 *
 * @public
 */
export interface ListApplicationRevisionsInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The column name to use to sort the list results:
   *
   * - `registerTime`: Sort by the time the revisions were registered with CodeDeploy.
   * - `firstUsedTime`: Sort by the time the revisions were first used in a deployment.
   * - `lastUsedTime`: Sort by the time the revisions were last used in a deployment.
   *
   * If not specified or set to null, the results are returned in an arbitrary order.
   *
   * @public
   */
  sortBy?: ApplicationRevisionSortBy | undefined;

  /**
   * The order in which to sort the list results:
   *
   * - `ascending`: ascending order.
   * - `descending`: descending order.
   *
   * If not specified, the results are sorted in ascending order.
   *
   * If set to null, the results are sorted in an arbitrary order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * An Amazon S3 bucket name to limit the search for revisions.
   *
   * If set to null, all of the user's buckets are searched.
   *
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * A key prefix for the set of Amazon S3 objects to limit the search for revisions.
   *
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * Whether to list revisions based on whether the revision is the target revision of a deployment group:
   *
   * - `include`: List revisions that are target revisions of a deployment group.
   * - `exclude`: Do not list revisions that are target revisions of a deployment group.
   * - `ignore`: List all revisions.
   *
   * @public
   */
  deployed?: ListStateFilterAction | undefined;

  /**
   * An identifier returned from the previous `ListApplicationRevisions` call. It can be used to return the next set of applications in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a `ListApplicationRevisions` operation.
 *
 * @public
 */
export interface ListApplicationRevisionsOutput {
  /**
   * A list of locations that contain the matching revisions.
   *
   * @public
   */
  revisions?: RevisionLocation[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListApplications` operation.
 *
 * @public
 */
export interface ListApplicationsInput {
  /**
   * An identifier returned from the previous list applications call. It can be used to return the next set of applications in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a ListApplications operation.
 *
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * A list of application names.
   *
   * @public
   */
  applications?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list applications call to return the next set of applications in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListDeploymentConfigs` operation.
 *
 * @public
 */
export interface ListDeploymentConfigsInput {
  /**
   * An identifier returned from the previous `ListDeploymentConfigs` call. It can be used to return the next set of deployment configurations in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a `ListDeploymentConfigs` operation.
 *
 * @public
 */
export interface ListDeploymentConfigsOutput {
  /**
   * A list of deployment configurations, including built-in configurations such as `CodeDeployDefault.OneAtATime`.
   *
   * @public
   */
  deploymentConfigsList?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment configurations call to return the next set of deployment configurations in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListDeploymentGroups` operation.
 *
 * @public
 */
export interface ListDeploymentGroupsInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * An identifier returned from the previous list deployment groups call. It can be used to return the next set of deployment groups in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a `ListDeploymentGroups` operation.
 *
 * @public
 */
export interface ListDeploymentGroupsOutput {
  /**
   * The application name.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * A list of deployment group names.
   *
   * @public
   */
  deploymentGroups?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment groups call to return the next set of deployment groups in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListDeploymentInstances` operation.
 *
 * @public
 */
export interface ListDeploymentInstancesInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A subset of instances to list by status:
   *
   * - `Pending`: Include those instances with pending deployments.
   * - `InProgress`: Include those instances where deployments are still in progress.
   * - `Succeeded`: Include those instances with successful deployments.
   * - `Failed`: Include those instances with failed deployments.
   * - `Skipped`: Include those instances with skipped deployments.
   * - `Unknown`: Include those instances with deployments in an unknown state.
   *
   * @public
   */
  instanceStatusFilter?: InstanceStatus[] | undefined;

  /**
   * The set of instances in a blue/green deployment, either those in the original environment ("BLUE") or those in the replacement environment ("GREEN"), for which you want to view instance information.
   *
   * @public
   */
  instanceTypeFilter?: _InstanceType[] | undefined;
}

/**
 * Represents the output of a `ListDeploymentInstances` operation.
 *
 * @public
 */
export interface ListDeploymentInstancesOutput {
  /**
   * A list of instance IDs.
   *
   * @public
   */
  instancesList?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment instances call to return the next set of deployment instances in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a time range.
 *
 * @public
 */
export interface TimeRange {
  /**
   * The start time of the time range.
   *
   * > **Note:** Specify null to leave the start time open-ended.
   *
   * @public
   */
  start?: Date | undefined;

  /**
   * The end time of the time range.
   *
   * > **Note:** Specify null to leave the end time open-ended.
   *
   * @public
   */
  end?: Date | undefined;
}

/**
 * Represents the input of a `ListDeployments` operation.
 *
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * > **Note:** If `applicationName` is specified, then `deploymentGroupName` must be specified. If it is not specified, then `deploymentGroupName` must not be specified.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The name of a deployment group for the specified application.
   *
   * > **Note:** If `deploymentGroupName` is specified, then `applicationName` must be specified. If it is not specified, then `applicationName` must not be specified.
   *
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * The unique ID of an external resource for returning deployments linked to the external resource.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * A subset of deployments to list by status:
   *
   * - `Created`: Include created deployments in the resulting list.
   * - `Queued`: Include queued deployments in the resulting list.
   * - `In Progress`: Include in-progress deployments in the resulting list.
   * - `Succeeded`: Include successful deployments in the resulting list.
   * - `Failed`: Include failed deployments in the resulting list.
   * - `Stopped`: Include stopped deployments in the resulting list.
   *
   * @public
   */
  includeOnlyStatuses?: DeploymentStatus[] | undefined;

  /**
   * A time range (start and end) for returning a subset of the list of deployments.
   *
   * @public
   */
  createTimeRange?: TimeRange | undefined;

  /**
   * An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a `ListDeployments` operation.
 *
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * A list of deployment IDs.
   *
   * @public
   */
  deployments?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployments call to return the next set of deployments in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentTargetsInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * A token identifier returned from the previous `ListDeploymentTargets` call. It can be used to return the next set of deployment targets in the list.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A key used to filter the returned targets. The two valid values are:
   *
   * - `TargetStatus` - A `TargetStatus` filter string can be `Failed`, `InProgress`, `Pending`, `Ready`, `Skipped`, `Succeeded`, or `Unknown`.
   * - `ServerInstanceLabel` - A `ServerInstanceLabel` filter string can be `Blue` or `Green`.
   *
   * @public
   */
  targetFilters?: Partial<Record<TargetFilterName, string[]>> | undefined;
}

/**
 * @public
 */
export interface ListDeploymentTargetsOutput {
  /**
   * The unique IDs of deployment targets.
   *
   * @public
   */
  targetIds?: string[] | undefined;

  /**
   * If a large amount of information is returned, a token identifier is also returned. It can be used in a subsequent `ListDeploymentTargets` call to return the next set of deployment targets in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListGitHubAccountTokenNames` operation.
 *
 * @public
 */
export interface ListGitHubAccountTokenNamesInput {
  /**
   * An identifier returned from the previous `ListGitHubAccountTokenNames` call. It can be used to return the next set of names in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a `ListGitHubAccountTokenNames` operation.
 *
 * @public
 */
export interface ListGitHubAccountTokenNamesOutput {
  /**
   * A list of names of connections to GitHub accounts.
   *
   * @public
   */
  tokenNameList?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent `ListGitHubAccountTokenNames` call to return the next set of names in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `ListOnPremisesInstances` operation.
 *
 * @public
 */
export interface ListOnPremisesInstancesInput {
  /**
   * The registration status of the on-premises instances:
   *
   * - `Deregistered`: Include deregistered on-premises instances in the resulting list.
   * - `Registered`: Include registered on-premises instances in the resulting list.
   *
   * @public
   */
  registrationStatus?: RegistrationStatus | undefined;

  /**
   * The on-premises instance tags that are used to restrict the on-premises instance names returned.
   *
   * @public
   */
  tagFilters?: TagFilter[] | undefined;

  /**
   * An identifier returned from the previous list on-premises instances call. It can be used to return the next set of on-premises instances in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of the list on-premises instances operation.
 *
 * @public
 */
export interface ListOnPremisesInstancesOutput {
  /**
   * The list of matching on-premises instance names.
   *
   * @public
   */
  instanceNames?: string[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list on-premises instances call to return the next set of on-premises instances in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of a CodeDeploy resource. `ListTagsForResource` returns all the tags associated with the resource that is identified by the `ResourceArn`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An identifier returned from the previous `ListTagsForResource` call. It can be used to return the next set of applications in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A list of tags returned by `ListTagsForResource`. The tags are associated with the resource identified by the input `ResourceArn` parameter.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusInput {
  /**
   * The unique ID of a deployment. Pass this ID to a Lambda function that validates a deployment lifecycle event.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is specified in the `hooks` section of the AppSpec file.
   *
   * @public
   */
  lifecycleEventHookExecutionId?: string | undefined;

  /**
   * The result of a Lambda function that validates a deployment lifecycle event. The values listed in **Valid Values** are valid for lifecycle statuses in general; however, only `Succeeded` and `Failed` can be passed successfully in your API call.
   *
   * @public
   */
  status?: LifecycleEventStatus | undefined;
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusOutput {
  /**
   * The execution ID of the lifecycle event hook. A hook is specified in the `hooks` section of the deployment's AppSpec file.
   *
   * @public
   */
  lifecycleEventHookExecutionId?: string | undefined;
}

/**
 * Represents the input of a RegisterApplicationRevision operation.
 *
 * @public
 */
export interface RegisterApplicationRevisionInput {
  /**
   * The name of an CodeDeploy application associated with the user or Amazon Web Services account.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * A comment about the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the application revision to register, including type and location.
   *
   * @public
   */
  revision: RevisionLocation | undefined;
}

/**
 * Represents the input of the register on-premises instance operation.
 *
 * @public
 */
export interface RegisterOnPremisesInstanceInput {
  /**
   * The name of the on-premises instance to register.
   *
   * @public
   */
  instanceName: string | undefined;

  /**
   * The ARN of the IAM session to associate with the on-premises instance.
   *
   * @public
   */
  iamSessionArn?: string | undefined;

  /**
   * The ARN of the user to associate with the on-premises instance.
   *
   * @public
   */
  iamUserArn?: string | undefined;
}

/**
 * Represents the input of a `RemoveTagsFromOnPremisesInstances` operation.
 *
 * @public
 */
export interface RemoveTagsFromOnPremisesInstancesInput {
  /**
   * The tag key-value pairs to remove from the on-premises instances.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * The names of the on-premises instances from which to remove tags.
   *
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface SkipWaitTimeForInstanceTerminationInput {
  /**
   * The unique ID of a blue/green deployment for which you want to skip the instance termination wait time.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * Represents the input of a `StopDeployment` operation.
 *
 * @public
 */
export interface StopDeploymentInput {
  /**
   * The unique ID of a deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision.
   *
   * @public
   */
  autoRollbackEnabled?: boolean | undefined;
}

/**
 * Represents the output of a `StopDeployment` operation.
 *
 * @public
 */
export interface StopDeploymentOutput {
  /**
   * The status of the stop deployment operation:
   *
   * - Pending: The stop operation is pending.
   * - Succeeded: The stop operation was successful.
   *
   * @public
   */
  status?: StopStatus | undefined;

  /**
   * An accompanying status message.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of a resource, such as a CodeDeploy application or deployment group.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tags that `TagResource` associates with a resource. The resource is identified by the `ResourceArn` input parameter.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) that specifies from which resource to disassociate the tags with the keys in the `TagKeys` input parameter.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of keys of `Tag` objects. The `Tag` objects identified by the keys are disassociated from the resource specified by the `ResourceArn` input parameter.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * Represents the input of an `UpdateApplication` operation.
 *
 * @public
 */
export interface UpdateApplicationInput {
  /**
   * The current name of the application you want to change.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The new name to give the application.
   *
   * @public
   */
  newApplicationName?: string | undefined;
}

/**
 * Represents the input of an `UpdateDeploymentGroup` operation.
 *
 * @public
 */
export interface UpdateDeploymentGroupInput {
  /**
   * The application name that corresponds to the deployment group to update.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The current name of the deployment group.
   *
   * @public
   */
  currentDeploymentGroupName: string | undefined;

  /**
   * The new name of the deployment group, if you want to change it.
   *
   * @public
   */
  newDeploymentGroupName?: string | undefined;

  /**
   * The replacement deployment configuration name to use, if you want to change it.
   *
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.
   *
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.
   *
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them.
   *
   * - To keep the Auto Scaling groups, enter their names or do not specify this parameter.
   * - To remove Auto Scaling groups, specify a non-null empty list of Auto Scaling group names to detach all CodeDeploy-managed Auto Scaling lifecycle hooks. For examples, see [Amazon EC2 instances in an Amazon EC2 Auto Scaling group fail to launch and receive the error "Heartbeat Timeout"](https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html#troubleshooting-auto-scaling-heartbeat) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * A replacement ARN for the service role, if you want to change it.
   *
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * Information about triggers to change when the deployment group is updated. For examples, see [Edit a Trigger in a CodeDeploy Deployment Group](https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html) in the *CodeDeploy User Guide*.
   *
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * Information to add or change about Amazon CloudWatch alarms when the deployment group is updated.
   *
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * Information for an automatic rollback configuration that is added or changed when a deployment group is updated.
   *
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
   *
   * If this option is set to `UPDATE` or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.
   *
   * If this option is set to `IGNORE`, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
   *
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
   *
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * Information about blue/green deployment options for a deployment group.
   *
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * Information about the load balancer used in a deployment.
   *
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * Information about groups of tags applied to on-premises instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups.
   *
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format `<clustername>:<servicename>`.
   *
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * Information about an on-premises instance tag set. The deployment group includes only on-premises instances identified by all the tag groups.
   *
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during a deployment.
   *
   * @public
   */
  ec2DeploymentOptions?: EC2DeploymentOptions | undefined;

  /**
   * This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see [Integrating CodeDeploy with Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html) in the *CodeDeploy User Guide*.
   *
   * Set `terminationHookEnabled` to `true` to have CodeDeploy install a termination hook into your Auto Scaling group when you update a deployment group. When this hook is installed, CodeDeploy will perform termination deployments.
   *
   * For information about termination deployments, see [Enabling termination deployments during Auto Scaling scale-in events](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable) in the *CodeDeploy User Guide*.
   *
   * For more information about Auto Scaling scale-in events, see the [Scale in](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html#as-lifecycle-scale-in) topic in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * Represents the output of an `UpdateDeploymentGroup` operation.
 *
 * @public
 */
export interface UpdateDeploymentGroupOutput {
  /**
   * If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the Amazon Web Services account. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon Web Services account.
   *
   * @public
   */
  hooksNotCleanedUp?: AutoScalingGroup[] | undefined;
}
