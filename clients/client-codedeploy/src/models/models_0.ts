// smithy-typescript generated code
import {
  _InstanceType,
  ApplicationRevisionSortBy,
  AutoRollbackEvent,
  BundleType,
  ComputePlatform,
  DeploymentCreator,
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
 * <p>Information about a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Represents the input of, and adds tags to, an on-premises instance operation.</p>
 * @public
 */
export interface AddTagsToOnPremisesInstancesInput {
  /**
   * <p>The tag key-value pairs to add to the on-premises instances.</p>
   *          <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only
   *             tags are not allowed.</p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>The names of the on-premises instances to which to add tags.</p>
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * <p>Information about an alarm.</p>
 * @public
 */
export interface Alarm {
  /**
   * <p>The name of the alarm. Maximum length is 255 characters. Each alarm name can be used
   *             only once in a list of alarms.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Information about alarms associated with a deployment or deployment group.</p>
 * @public
 */
export interface AlarmConfiguration {
  /**
   * <p>Indicates whether the alarm configuration is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>Indicates whether a deployment should continue if information about the current state
   *             of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: The deployment proceeds even if alarm status information
   *                     can't be retrieved from Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: The deployment stops if alarm status information can't be
   *                     retrieved from Amazon CloudWatch.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ignorePollAlarmFailure?: boolean | undefined;

  /**
   * <p>A list of alarms configured for the deployment or deployment group. A maximum of 10
   *             alarms can be added.</p>
   * @public
   */
  alarms?: Alarm[] | undefined;
}

/**
 * <p>Information about an application.</p>
 * @public
 */
export interface ApplicationInfo {
  /**
   * <p>The application ID.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The application name.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The time at which the application was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>True if the user has authenticated with GitHub for the specified application.
   *             Otherwise, false.</p>
   * @public
   */
  linkedToGitHub?: boolean | undefined;

  /**
   * <p>The name for a connection to a GitHub account.</p>
   * @public
   */
  gitHubAccountName?: string | undefined;

  /**
   * <p>The destination platform type for deployment of the application (<code>Lambda</code> or <code>Server</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;
}

/**
 * <p> A revision for an Lambda or Amazon ECS deployment that is a
 *             YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the
 *             deprecated <code>RawString</code> data type. </p>
 * @public
 */
export interface AppSpecContent {
  /**
   * <p> The YAML-formatted or JSON-formatted revision string. </p>
   *          <p> For an Lambda deployment, the content includes a Lambda
   *             function name, the alias for its original version, and the alias for its replacement
   *             version. The deployment shifts traffic from the original version of the Lambda function to the replacement version. </p>
   *          <p> For an Amazon ECS deployment, the content includes the task name, information
   *             about the load balancer that serves traffic to the container, and more. </p>
   *          <p> For both types of deployments, the content can specify Lambda functions
   *             that run at specified hooks, such as <code>BeforeInstall</code>, during a deployment.
   *         </p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p> The SHA256 hash value of the revision content. </p>
   * @public
   */
  sha256?: string | undefined;
}

/**
 * <p>Information about a configuration for automatically rolling back to a previous version
 *             of an application revision when a deployment is not completed successfully.</p>
 * @public
 */
export interface AutoRollbackConfiguration {
  /**
   * <p>Indicates whether a defined automatic rollback configuration is currently
   *             enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The event type or types that trigger a rollback.</p>
   * @public
   */
  events?: AutoRollbackEvent[] | undefined;
}

/**
 * <p>Information about an Auto Scaling group.</p>
 * @public
 */
export interface AutoScalingGroup {
  /**
   * <p>The Auto Scaling group name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The name of the launch hook that CodeDeploy installed into the Auto Scaling group.</p>
   *          <p>For more information about the launch hook, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors">How Amazon EC2 Auto Scaling works with CodeDeploy</a> in the
   *                     <i>CodeDeploy User Guide</i>.</p>
   * @public
   */
  hook?: string | undefined;

  /**
   * <p>The name of the termination hook that CodeDeploy installed into the Auto Scaling group.</p>
   *          <p>For more information about the termination hook, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable">Enabling termination deployments during Auto Scaling scale-in events</a> in the
   *             <i>CodeDeploy User Guide</i>.</p>
   * @public
   */
  terminationHook?: string | undefined;
}

/**
 * <p>Information about the location of application artifacts stored in GitHub.</p>
 * @public
 */
export interface GitHubLocation {
  /**
   * <p>The GitHub account and repository pair that stores a reference to the commit that
   *             represents the bundled artifacts for the application revision. </p>
   *          <p>Specified as account/repository.</p>
   * @public
   */
  repository?: string | undefined;

  /**
   * <p>The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the
   *             application revision.</p>
   * @public
   */
  commitId?: string | undefined;
}

/**
 * <p>Information about the location of application artifacts stored in Amazon S3.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket where the application revision is
   *             stored.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The name of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The file type of the application revision. Must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tar</code>: A tar archive file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tgz</code>: A compressed tar archive file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zip</code>: A zip archive file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YAML</code>: A YAML-formatted file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code>: A JSON-formatted file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  bundleType?: BundleType | undefined;

  /**
   * <p>A specific version of the Amazon S3 object that represents the bundled
   *             artifacts for the application revision.</p>
   *          <p>If the version is not specified, the system uses the most recent version by
   *             default.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The ETag of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   *          <p>If the ETag is not specified as an input parameter, ETag validation of the object is
   *             skipped.</p>
   * @public
   */
  eTag?: string | undefined;
}

/**
 * <p>A revision for an Lambda deployment that is a YAML-formatted or
 *             JSON-formatted string. For Lambda deployments, the revision is the same
 *             as the AppSpec file.</p>
 *
 * @deprecated RawString and String revision type are deprecated, use AppSpecContent type instead.
 * @public
 */
export interface RawString {
  /**
   * <p>The YAML-formatted or JSON-formatted revision string. It includes information about
   *             which Lambda function to update and optional Lambda functions
   *             that validate deployment lifecycle events.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The SHA256 hash value of the revision content.</p>
   * @public
   */
  sha256?: string | undefined;
}

/**
 * <p>Information about the location of an application revision.</p>
 * @public
 */
export interface RevisionLocation {
  /**
   * <p>The type of application revision:</p>
   *          <ul>
   *             <li>
   *                <p>S3: An application revision stored in Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments
   *                     only).</p>
   *             </li>
   *             <li>
   *                <p>String: A YAML-formatted or JSON-formatted string (Lambda
   *                     deployments only).</p>
   *             </li>
   *             <li>
   *                <p>AppSpecContent: An <code>AppSpecContent</code> object that contains the
   *                     contents of an AppSpec file for an Lambda or Amazon ECS
   *                     deployment. The content is formatted as JSON or YAML stored as a
   *                     RawString.</p>
   *             </li>
   *          </ul>
   * @public
   */
  revisionType?: RevisionLocationType | undefined;

  /**
   * <p>Information about the location of a revision stored in Amazon S3. </p>
   * @public
   */
  s3Location?: S3Location | undefined;

  /**
   * <p>Information about the location of application artifacts stored in GitHub.</p>
   * @public
   */
  gitHubLocation?: GitHubLocation | undefined;

  /**
   * <p>Information about the location of an Lambda deployment revision stored
   *             as a RawString.</p>
   *
   * @deprecated RawString and String revision type are deprecated, use AppSpecContent type instead.
   * @public
   */
  string?: RawString | undefined;

  /**
   * <p> The content of an AppSpec file for an Lambda or Amazon ECS
   *             deployment. The content is formatted as JSON or YAML and stored as a RawString. </p>
   * @public
   */
  appSpecContent?: AppSpecContent | undefined;
}

/**
 * <p>Represents the input of a <code>BatchGetApplicationRevisions</code> operation.</p>
 * @public
 */
export interface BatchGetApplicationRevisionsInput {
  /**
   * <p>The name of an CodeDeploy application about which to get revision
   *             information.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>An array of <code>RevisionLocation</code> objects that specify information to get
   *             about the application revisions, including type and location. The maximum number of
   *                 <code>RevisionLocation</code> objects you can specify is 25.</p>
   * @public
   */
  revisions: RevisionLocation[] | undefined;
}

/**
 * <p>Information about an application revision.</p>
 * @public
 */
export interface GenericRevisionInfo {
  /**
   * <p>A comment about the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The deployment groups for which this is the current target revision.</p>
   * @public
   */
  deploymentGroups?: string[] | undefined;

  /**
   * <p>When the revision was first used by CodeDeploy.</p>
   * @public
   */
  firstUsedTime?: Date | undefined;

  /**
   * <p>When the revision was last used by CodeDeploy.</p>
   * @public
   */
  lastUsedTime?: Date | undefined;

  /**
   * <p>When the revision was registered with CodeDeploy.</p>
   * @public
   */
  registerTime?: Date | undefined;
}

/**
 * <p>Information about an application revision.</p>
 * @public
 */
export interface RevisionInfo {
  /**
   * <p>Information about the location and type of an application revision.</p>
   * @public
   */
  revisionLocation?: RevisionLocation | undefined;

  /**
   * <p>Information about an application revision, including usage details and associated
   *             deployment groups.</p>
   * @public
   */
  genericRevisionInfo?: GenericRevisionInfo | undefined;
}

/**
 * <p>Represents the output of a <code>BatchGetApplicationRevisions</code> operation.</p>
 * @public
 */
export interface BatchGetApplicationRevisionsOutput {
  /**
   * <p>The name of the application that corresponds to the revisions.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Additional information about the revisions, including the type and location.</p>
   * @public
   */
  revisions?: RevisionInfo[] | undefined;
}

/**
 * <p>Represents the input of a <code>BatchGetApplications</code> operation.</p>
 * @public
 */
export interface BatchGetApplicationsInput {
  /**
   * <p>A list of application names separated by spaces. The maximum number of application
   *             names you can specify is 100.</p>
   * @public
   */
  applicationNames: string[] | undefined;
}

/**
 * <p>Represents the output of a <code>BatchGetApplications</code> operation.</p>
 * @public
 */
export interface BatchGetApplicationsOutput {
  /**
   * <p>Information about the applications.</p>
   * @public
   */
  applicationsInfo?: ApplicationInfo[] | undefined;
}

/**
 * <p>Represents the input of a <code>BatchGetDeploymentGroups</code> operation.</p>
 * @public
 */
export interface BatchGetDeploymentGroupsInput {
  /**
   * <p>The name of an CodeDeploy application associated with the applicable user
   *             or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The names of the deployment groups.</p>
   * @public
   */
  deploymentGroupNames: string[] | undefined;
}

/**
 * <p>Information about how traffic is rerouted to instances in a replacement environment in
 *             a blue/green deployment.</p>
 * @public
 */
export interface DeploymentReadyOption {
  /**
   * <p>Information about when to reroute traffic from an original environment to a
   *             replacement environment in a blue/green deployment.</p>
   *          <ul>
   *             <li>
   *                <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately
   *                     after the new application revision is installed on the instances in the
   *                     replacement environment.</p>
   *             </li>
   *             <li>
   *                <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless
   *                     traffic rerouting is started using <a>ContinueDeployment</a>. If
   *                     traffic rerouting is not started before the end of the specified wait period,
   *                     the deployment status is changed to Stopped.</p>
   *             </li>
   *          </ul>
   * @public
   */
  actionOnTimeout?: DeploymentReadyAction | undefined;

  /**
   * <p>The number of minutes to wait before the status of a blue/green deployment is changed
   *             to Stopped if rerouting is not started manually. Applies only to the
   *                 <code>STOP_DEPLOYMENT</code> option for <code>actionOnTimeout</code>.</p>
   * @public
   */
  waitTimeInMinutes?: number | undefined;
}

/**
 * <p>Information about the instances that belong to the replacement environment in a
 *             blue/green deployment.</p>
 * @public
 */
export interface GreenFleetProvisioningOption {
  /**
   * <p>The method used to add instances to a replacement environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISCOVER_EXISTING</code>: Use instances that already exist or will be
   *                     created manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPY_AUTO_SCALING_GROUP</code>: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling
   *                     group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  action?: GreenFleetProvisioningAction | undefined;
}

/**
 * <p>Information about whether instances in the original environment are terminated when a
 *             blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not
 *             apply to Lambda deployments. </p>
 * @public
 */
export interface BlueInstanceTerminationOption {
  /**
   * <p>The action to take on instances in the original environment after a successful
   *             blue/green deployment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE</code>: Instances are terminated after a specified wait
   *                     time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KEEP_ALIVE</code>: Instances are left running after they are
   *                     deregistered from the load balancer and removed from the deployment
   *                     group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  action?: InstanceAction | undefined;

  /**
   * <p>For an Amazon EC2 deployment, the number of minutes to wait after a successful
   *             blue/green deployment before terminating instances from the original environment.</p>
   *          <p> For an Amazon ECS deployment, the number of minutes before deleting the
   *             original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts
   *             traffic from the original (blue) task set to a replacement (green) task set. </p>
   *          <p> The maximum setting is 2880 minutes (2 days). </p>
   * @public
   */
  terminationWaitTimeInMinutes?: number | undefined;
}

/**
 * <p>Information about blue/green deployment options for a deployment group.</p>
 * @public
 */
export interface BlueGreenDeploymentConfiguration {
  /**
   * <p>Information about whether to terminate instances in the original fleet during a
   *             blue/green deployment.</p>
   * @public
   */
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption | undefined;

  /**
   * <p>Information about the action to take when newly provisioned instances are ready to
   *             receive traffic in a blue/green deployment.</p>
   * @public
   */
  deploymentReadyOption?: DeploymentReadyOption | undefined;

  /**
   * <p>Information about how instances are provisioned for a replacement environment in a
   *             blue/green deployment.</p>
   * @public
   */
  greenFleetProvisioningOption?: GreenFleetProvisioningOption | undefined;
}

/**
 * <p>Information about the type of deployment, either in-place or blue/green, you want to
 *             run and whether to route deployment traffic behind a load balancer.</p>
 * @public
 */
export interface DeploymentStyle {
  /**
   * <p>Indicates whether to run an in-place deployment or a blue/green deployment.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>Indicates whether to route deployment traffic behind a load balancer.</p>
   * @public
   */
  deploymentOption?: DeploymentOption | undefined;
}

/**
 * <p>Information about an EC2 tag filter.</p>
 * @public
 */
export interface EC2TagFilter {
  /**
   * <p>The tag filter key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag filter value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The tag filter type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEY_ONLY</code>: Key only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VALUE_ONLY</code>: Value only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KEY_AND_VALUE</code>: Key and value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: EC2TagFilterType | undefined;
}

/**
 * <p>Information about groups of Amazon EC2 instance tags.</p>
 * @public
 */
export interface EC2TagSet {
  /**
   * <p>A list that contains other lists of Amazon EC2 instance tag groups. For an
   *             instance to be included in the deployment group, it must be identified by all of the tag
   *             groups in the list.</p>
   * @public
   */
  ec2TagSetList?: EC2TagFilter[][] | undefined;
}

/**
 * <p> Contains the service and cluster names used to identify an Amazon ECS
 *             deployment's target. </p>
 * @public
 */
export interface ECSService {
  /**
   * <p> The name of the target Amazon ECS service. </p>
   * @public
   */
  serviceName?: string | undefined;

  /**
   * <p> The name of the cluster that the Amazon ECS service is associated with.
   *         </p>
   * @public
   */
  clusterName?: string | undefined;
}

/**
 * <p>Information about the most recent attempted or successful deployment to a deployment
 *             group.</p>
 * @public
 */
export interface LastDeploymentInfo {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The status of the most recent deployment.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group was
   *             complete.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group
   *             started.</p>
   * @public
   */
  createTime?: Date | undefined;
}

/**
 * <p>Information about a Classic Load Balancer in Elastic Load Balancing to use in a
 *             deployment. Instances are registered directly with a load balancer, and traffic is
 *             routed to the load balancer.</p>
 * @public
 */
export interface ELBInfo {
  /**
   * <p>For blue/green deployments, the name of the Classic Load Balancer that is used to
   *             route traffic from original instances to replacement instances in a blue/green
   *             deployment. For in-place deployments, the name of the Classic Load Balancer that
   *             instances are deregistered from so they are not serving traffic during a deployment, and
   *             then re-registered with after the deployment is complete.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Information about a target group in Elastic Load Balancing to use in a deployment.
 *             Instances are registered as targets in a target group, and traffic is routed to the
 *             target group.</p>
 * @public
 */
export interface TargetGroupInfo {
  /**
   * <p>For blue/green deployments, the name of the target group that instances in the
   *             original environment are deregistered from, and instances in the replacement environment
   *             are registered with. For in-place deployments, the name of the target group that
   *             instances are deregistered from, so they are not serving traffic during a deployment,
   *             and then re-registered with after the deployment is complete. </p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p> Information about a listener. The listener contains the path used to route traffic
 *             that is received from the load balancer to a target group. </p>
 * @public
 */
export interface TrafficRoute {
  /**
   * <p> The Amazon Resource Name (ARN) of one listener. The listener identifies the route
   *             between a target group and a load balancer. This is an array of strings with a maximum
   *             size of one. </p>
   * @public
   */
  listenerArns?: string[] | undefined;
}

/**
 * <p> Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. </p>
 * @public
 */
export interface TargetGroupPairInfo {
  /**
   * <p> One pair of target groups. One is associated with the original task set. The second
   *             is associated with the task set that serves traffic after the deployment is complete.
   *         </p>
   * @public
   */
  targetGroups?: TargetGroupInfo[] | undefined;

  /**
   * <p> The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. </p>
   * @public
   */
  prodTrafficRoute?: TrafficRoute | undefined;

  /**
   * <p> An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a
   *             deployment. </p>
   * @public
   */
  testTrafficRoute?: TrafficRoute | undefined;
}

/**
 * <p>Information about the Elastic Load Balancing load balancer or target group used in a
 *             deployment.</p>
 *          <p>You can use load balancers and target groups in combination. For example, if you have
 *             two Classic Load Balancers, and five target groups tied to an Application Load Balancer,
 *             you can specify the two Classic Load Balancers in <code>elbInfoList</code>, and the five
 *             target groups in <code>targetGroupInfoList</code>.</p>
 * @public
 */
export interface LoadBalancerInfo {
  /**
   * <p>An array that contains information about the load balancers to use for load balancing
   *             in a deployment. If you're using Classic Load Balancers, specify those load balancers in
   *             this array. </p>
   *          <note>
   *             <p>You can add up to 10 load balancers to the array.</p>
   *          </note>
   *          <note>
   *             <p>If you're using Application Load Balancers or Network Load Balancers, use the
   *                     <code>targetGroupInfoList</code> array instead of this one.</p>
   *          </note>
   * @public
   */
  elbInfoList?: ELBInfo[] | undefined;

  /**
   * <p>An array that contains information about the target groups to use for load balancing
   *             in a deployment. If you're using Application Load Balancers and Network Load Balancers,
   *             specify their associated target groups in this array.</p>
   *          <note>
   *             <p>You can add up to 10 target groups to the array.</p>
   *          </note>
   *          <note>
   *             <p>If you're using Classic Load Balancers, use the <code>elbInfoList</code> array
   *                 instead of this one.</p>
   *          </note>
   * @public
   */
  targetGroupInfoList?: TargetGroupInfo[] | undefined;

  /**
   * <p> The target group pair information. This is an array of
   *                 <code>TargeGroupPairInfo</code> objects with a maximum size of one. </p>
   * @public
   */
  targetGroupPairInfoList?: TargetGroupPairInfo[] | undefined;
}

/**
 * <p>Information about an on-premises instance tag filter.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>The on-premises instance tag filter key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The on-premises instance tag filter value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The on-premises instance tag filter type:</p>
   *          <ul>
   *             <li>
   *                <p>KEY_ONLY: Key only.</p>
   *             </li>
   *             <li>
   *                <p>VALUE_ONLY: Value only.</p>
   *             </li>
   *             <li>
   *                <p>KEY_AND_VALUE: Key and value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: TagFilterType | undefined;
}

/**
 * <p>Information about groups of on-premises instance tags.</p>
 * @public
 */
export interface OnPremisesTagSet {
  /**
   * <p>A list that contains other lists of on-premises instance tag groups. For an instance
   *             to be included in the deployment group, it must be identified by all of the tag groups
   *             in the list.</p>
   * @public
   */
  onPremisesTagSetList?: TagFilter[][] | undefined;
}

/**
 * <p>Information about notification triggers for the deployment group.</p>
 * @public
 */
export interface TriggerConfig {
  /**
   * <p>The name of the notification trigger.</p>
   * @public
   */
  triggerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through
   *             which notifications about deployment or instance events are sent.</p>
   * @public
   */
  triggerTargetArn?: string | undefined;

  /**
   * <p>The event type or types for which notifications are triggered.</p>
   * @public
   */
  triggerEvents?: TriggerEventType[] | undefined;
}

/**
 * <p>Information about a deployment group.</p>
 * @public
 */
export interface DeploymentGroupInfo {
  /**
   * <p>The application name.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The deployment group ID.</p>
   * @public
   */
  deploymentGroupId?: string | undefined;

  /**
   * <p>The deployment group name.</p>
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * <p>The deployment configuration name.</p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2
   *             instances with any of the specified tags.</p>
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags.</p>
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>A list of associated Auto Scaling groups.</p>
   * @public
   */
  autoScalingGroups?: AutoScalingGroup[] | undefined;

  /**
   * <p>A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make
   *             calls to Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html">Create a
   *                 Service Role for CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.</p>
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * <p>Information about the deployment group's target revision, including type and
   *             location.</p>
   * @public
   */
  targetRevision?: RevisionLocation | undefined;

  /**
   * <p>Information about triggers associated with the deployment group.</p>
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * <p>A list of alarms associated with the deployment group.</p>
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>Information about the automatic rollback configuration associated with the deployment
   *             group.</p>
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *          <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *          <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * <p>Information about blue/green deployment options for a deployment group.</p>
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * <p>Information about the load balancer to use in a deployment.</p>
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * <p>Information about the most recent successful deployment to the deployment
   *             group.</p>
   * @public
   */
  lastSuccessfulDeployment?: LastDeploymentInfo | undefined;

  /**
   * <p>Information about the most recent attempted deployment to the deployment group.</p>
   * @public
   */
  lastAttemptedDeployment?: LastDeploymentInfo | undefined;

  /**
   * <p>Information about groups of tags applied to an Amazon EC2 instance. The
   *             deployment group includes only Amazon EC2 instances identified by all of the tag
   *             groups. Cannot be used in the same call as ec2TagFilters.</p>
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * <p>Information about groups of tags applied to an on-premises instance. The deployment
   *             group includes only on-premises instances identified by all the tag groups. Cannot be
   *             used in the same call as onPremisesInstanceTagFilters.</p>
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * <p>Indicates whether the deployment group was configured to have CodeDeploy
   *             install a termination hook into an Auto Scaling group.</p>
   *          <p>For more information about the termination hook, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors">How Amazon EC2 Auto Scaling works with CodeDeploy</a> in the
   *                     <i>CodeDeploy User Guide</i>.</p>
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * <p>Represents the output of a <code>BatchGetDeploymentGroups</code> operation.</p>
 * @public
 */
export interface BatchGetDeploymentGroupsOutput {
  /**
   * <p>Information about the deployment groups.</p>
   * @public
   */
  deploymentGroupsInfo?: DeploymentGroupInfo[] | undefined;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p> Represents the input of a <code>BatchGetDeploymentInstances</code> operation. </p>
 * @public
 */
export interface BatchGetDeploymentInstancesInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The unique IDs of instances used in the deployment. The maximum number of instance IDs
   *             you can specify is 25.</p>
   * @public
   */
  instanceIds: string[] | undefined;
}

/**
 * <p>Diagnostic information about executable scripts that are part of a deployment.</p>
 * @public
 */
export interface Diagnostics {
  /**
   * <p>The associated error code:</p>
   *          <ul>
   *             <li>
   *                <p>Success: The specified script ran.</p>
   *             </li>
   *             <li>
   *                <p>ScriptMissing: The specified script was not found in the specified
   *                     location.</p>
   *             </li>
   *             <li>
   *                <p>ScriptNotExecutable: The specified script is not a recognized executable file
   *                     type.</p>
   *             </li>
   *             <li>
   *                <p>ScriptTimedOut: The specified script did not finish running in the specified
   *                     time period.</p>
   *             </li>
   *             <li>
   *                <p>ScriptFailed: The specified script failed to run as expected.</p>
   *             </li>
   *             <li>
   *                <p>UnknownError: The specified script did not run for an unknown reason.</p>
   *             </li>
   *          </ul>
   * @public
   */
  errorCode?: LifecycleErrorCode | undefined;

  /**
   * <p>The name of the script.</p>
   * @public
   */
  scriptName?: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The last portion of the diagnostic log.</p>
   *          <p>If available, CodeDeploy returns up to the last 4 KB of the diagnostic
   *             log.</p>
   * @public
   */
  logTail?: string | undefined;
}

/**
 * <p>Information about a deployment lifecycle event.</p>
 * @public
 */
export interface LifecycleEvent {
  /**
   * <p>The deployment lifecycle event name, such as <code>ApplicationStop</code>,
   *                 <code>BeforeInstall</code>, <code>AfterInstall</code>,
   *             <code>ApplicationStart</code>, or <code>ValidateService</code>.</p>
   * @public
   */
  lifecycleEventName?: string | undefined;

  /**
   * <p>Diagnostic information about the deployment lifecycle event.</p>
   * @public
   */
  diagnostics?: Diagnostics | undefined;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The deployment lifecycle event status:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The deployment lifecycle event is pending.</p>
   *             </li>
   *             <li>
   *                <p>InProgress: The deployment lifecycle event is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded: The deployment lifecycle event ran successfully.</p>
   *             </li>
   *             <li>
   *                <p>Failed: The deployment lifecycle event has failed.</p>
   *             </li>
   *             <li>
   *                <p>Skipped: The deployment lifecycle event has been skipped.</p>
   *             </li>
   *             <li>
   *                <p>Unknown: The deployment lifecycle event is unknown.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: LifecycleEventStatus | undefined;
}

/**
 * <p>Information about an instance in a deployment.</p>
 *
 * @deprecated InstanceSummary is deprecated, use DeploymentTarget instead.
 * @public
 */
export interface InstanceSummary {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>The instance ID.</p>
   * @public
   */
  instanceId?: string | undefined;

  /**
   * <p>The deployment status for this instance:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: The deployment is pending for this instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>In Progress</code>: The deployment is in progress for this
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Succeeded</code>: The deployment has succeeded for this instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The deployment has failed for this instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Skipped</code>: The deployment has been skipped for this
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unknown</code>: The deployment status is unknown for this
   *                     instance.</p>
   *             </li>
   *          </ul>
   *
   * @deprecated InstanceStatus is deprecated, use TargetStatus instead.
   * @public
   */
  status?: InstanceStatus | undefined;

  /**
   * <p>A timestamp that indicates when the instance information was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>A list of lifecycle events for this instance.</p>
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * <p>Information about which environment an instance belongs to in a blue/green
   *             deployment.</p>
   *          <ul>
   *             <li>
   *                <p>BLUE: The instance is part of the original environment.</p>
   *             </li>
   *             <li>
   *                <p>GREEN: The instance is part of the replacement environment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  instanceType?: _InstanceType | undefined;
}

/**
 * <p>Represents the output of a <code>BatchGetDeploymentInstances</code> operation.</p>
 * @public
 */
export interface BatchGetDeploymentInstancesOutput {
  /**
   * <p>Information about the instance.</p>
   * @public
   */
  instancesSummary?: InstanceSummary[] | undefined;

  /**
   * <p>Information about errors that might have occurred during the API call.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p> Represents the input of a <code>BatchGetDeployments</code> operation. </p>
 * @public
 */
export interface BatchGetDeploymentsInput {
  /**
   * <p> A list of deployment IDs, separated by spaces. The maximum number of deployment IDs
   *             you can specify is 25.</p>
   * @public
   */
  deploymentIds: string[] | undefined;
}

/**
 * <p>Information about the deployment status of the instances in the deployment.</p>
 * @public
 */
export interface DeploymentOverview {
  /**
   * <p>The number of instances in the deployment in a pending state.</p>
   * @public
   */
  Pending?: number | undefined;

  /**
   * <p>The number of instances in which the deployment is in progress.</p>
   * @public
   */
  InProgress?: number | undefined;

  /**
   * <p>The number of instances in the deployment to which revisions have been successfully
   *             deployed.</p>
   * @public
   */
  Succeeded?: number | undefined;

  /**
   * <p>The number of instances in the deployment in a failed state.</p>
   * @public
   */
  Failed?: number | undefined;

  /**
   * <p>The number of instances in the deployment in a skipped state.</p>
   * @public
   */
  Skipped?: number | undefined;

  /**
   * <p>The number of instances in a replacement environment ready to receive traffic in a
   *             blue/green deployment.</p>
   * @public
   */
  Ready?: number | undefined;
}

/**
 * <p>Information about a deployment error.</p>
 * @public
 */
export interface ErrorInformation {
  /**
   * <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html">Error Codes for CodeDeploy</a> in the <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>.</p>
   *          <p>The error code:</p>
   *          <ul>
   *             <li>
   *                <p>APPLICATION_MISSING: The application was missing. This error code is most
   *                     likely raised if the application is deleted after the deployment is created, but
   *                     before it is started.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is
   *                     most likely raised if the deployment group is deleted after the deployment is
   *                     created, but before it is started.</p>
   *             </li>
   *             <li>
   *                <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be
   *                     successfully deployed within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed
   *                     within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p>
   *             </li>
   *             <li>
   *                <p>IAM_ROLE_PERMISSIONS: The service role does not have the
   *                     correct permissions.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_ERROR: There was an internal error.</p>
   *             </li>
   *             <li>
   *                <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon EC2.</p>
   *             </li>
   *             <li>
   *                <p>NO_INSTANCES: No instances were specified, or no instances can be
   *                     found.</p>
   *             </li>
   *             <li>
   *                <p>OVER_MAX_INSTANCES: The maximum number of instances was exceeded.</p>
   *             </li>
   *             <li>
   *                <p>THROTTLED: The operation was throttled because the calling account exceeded
   *                     the throttling limits of one or more Amazon Web Services services.</p>
   *             </li>
   *             <li>
   *                <p>TIMEOUT: The deployment has timed out.</p>
   *             </li>
   *             <li>
   *                <p>REVISION_MISSING: The revision ID was missing. This error code is most likely
   *                     raised if the revision is deleted after the deployment is created, but before it
   *                     is started.</p>
   *             </li>
   *          </ul>
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * <p>An accompanying error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about deployments related to the specified deployment.</p>
 * @public
 */
export interface RelatedDeployments {
  /**
   * <p>The deployment ID of the root deployment that triggered this deployment.</p>
   * @public
   */
  autoUpdateOutdatedInstancesRootDeploymentId?: string | undefined;

  /**
   * <p>The deployment IDs of 'auto-update outdated instances' deployments triggered by this
   *             deployment.</p>
   * @public
   */
  autoUpdateOutdatedInstancesDeploymentIds?: string[] | undefined;
}

/**
 * <p>Information about a deployment rollback.</p>
 * @public
 */
export interface RollbackInfo {
  /**
   * <p>The ID of the deployment rollback.</p>
   * @public
   */
  rollbackDeploymentId?: string | undefined;

  /**
   * <p>The deployment ID of the deployment that was underway and triggered a rollback
   *             deployment because it failed or was stopped.</p>
   * @public
   */
  rollbackTriggeringDeploymentId?: string | undefined;

  /**
   * <p>Information that describes the status of a deployment rollback (for example, whether
   *             the deployment can't be rolled back, is in progress, failed, or succeeded). </p>
   * @public
   */
  rollbackMessage?: string | undefined;
}

/**
 * <p>Information about the instances to be used in the replacement environment in a
 *             blue/green deployment.</p>
 * @public
 */
export interface TargetInstances {
  /**
   * <p>The tag filter key, type, and value used to identify Amazon EC2 instances in a
   *             replacement environment for a blue/green deployment. Cannot be used in the same call as
   *                 <code>ec2TagSet</code>.</p>
   * @public
   */
  tagFilters?: EC2TagFilter[] | undefined;

  /**
   * <p>The names of one or more Auto Scaling groups to identify a replacement
   *             environment for a blue/green deployment.</p>
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * <p>Information about the groups of Amazon EC2 instance tags that an instance must
   *             be identified by in order for it to be included in the replacement environment for a
   *             blue/green deployment. Cannot be used in the same call as
   *             <code>tagFilters</code>.</p>
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;
}

/**
 * <p>Information about a deployment.</p>
 * @public
 */
export interface DeploymentInfo {
  /**
   * <p>The application name.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p> The deployment group name. </p>
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * <p> The deployment configuration name. </p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p>Information about the application revision that was deployed to the deployment group
   *             before the most recent successful deployment.</p>
   * @public
   */
  previousRevision?: RevisionLocation | undefined;

  /**
   * <p>Information about the location of stored application artifacts and the service from
   *             which to retrieve them.</p>
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * <p>The current state of the deployment as a whole.</p>
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * <p>Information about any error associated with this deployment.</p>
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * <p>A timestamp that indicates when the deployment was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the deployment was deployed to the deployment
   *             group.</p>
   *          <p>In some cases, the reported value of the start time might be later than the complete
   *             time. This is due to differences in the clock settings of backend servers that
   *             participate in the deployment process.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the deployment was complete.</p>
   * @public
   */
  completeTime?: Date | undefined;

  /**
   * <p>A summary of the deployment status of the instances in the deployment.</p>
   * @public
   */
  deploymentOverview?: DeploymentOverview | undefined;

  /**
   * <p>A comment about the deployment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The means by which the deployment was created:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>user</code>: A user created the deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>autoscaling</code>: Amazon EC2 Auto Scaling created the deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>codeDeployRollback</code>: A rollback process created the
   *                     deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CodeDeployAutoUpdate</code>: An auto-update process created the
   *                     deployment when it detected outdated Amazon EC2 instances.</p>
   *             </li>
   *          </ul>
   * @public
   */
  creator?: DeploymentCreator | undefined;

  /**
   * <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or
   *                 <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then
   *             the deployment continues to the next deployment lifecycle event. For example, if
   *                 <code>ApplicationStop</code> fails, the deployment continues with DownloadBundle. If
   *                 <code>BeforeBlockTraffic</code> fails, the deployment continues with
   *                 <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment
   *             continues with <code>ApplicationStop</code>. </p>
   *          <p> If false or not specified, then if a lifecycle event fails during a deployment to an
   *             instance, that deployment fails. If deployment to that instance is part of an overall
   *             deployment and the number of healthy hosts is not less than the minimum number of
   *             healthy hosts, then a deployment to the next instance is attempted. </p>
   *          <p> During a deployment, the CodeDeploy agent runs the scripts specified for
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful
   *             deployment. (All other scripts are run from the AppSpec file in the current deployment.)
   *             If one of these scripts contains an error and does not run successfully, the deployment
   *             can fail. </p>
   *          <p> If the cause of the failure is a script from the last successful deployment that will
   *             never run successfully, create a new deployment and use
   *                 <code>ignoreApplicationStopFailures</code> to specify that the
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> failures should be ignored. </p>
   * @public
   */
  ignoreApplicationStopFailures?: boolean | undefined;

  /**
   * <p>Information about the automatic rollback configuration associated with the
   *             deployment.</p>
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * <p>Indicates whether only instances that are not running the latest application revision
   *             are to be deployed to.</p>
   * @public
   */
  updateOutdatedInstancesOnly?: boolean | undefined;

  /**
   * <p>Information about a deployment rollback.</p>
   * @public
   */
  rollbackInfo?: RollbackInfo | undefined;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * <p>Information about the instances that belong to the replacement environment in a
   *             blue/green deployment.</p>
   * @public
   */
  targetInstances?: TargetInstances | undefined;

  /**
   * <p>Indicates whether the wait period set for the termination of instances in the original
   *             environment has started. Status is 'false' if the KEEP_ALIVE option is specified.
   *             Otherwise, 'true' as soon as the termination wait period starts.</p>
   * @public
   */
  instanceTerminationWaitTimeStarted?: boolean | undefined;

  /**
   * <p>Information about blue/green deployment options for this deployment.</p>
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * <p>Information about the load balancer used in the deployment.</p>
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * <p>Provides information about the results of a deployment, such as whether instances in
   *             the original environment in a blue/green deployment were not terminated.</p>
   *
   * @deprecated AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead.
   * @public
   */
  additionalDeploymentStatusInfo?: string | undefined;

  /**
   * <p>Information about how CodeDeploy handles files that already exist in a
   *             deployment target location but weren't part of the previous successful
   *             deployment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISALLOW</code>: The deployment fails. This is also the default behavior
   *                     if no option is specified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERWRITE</code>: The version of the file from the application revision
   *                     currently being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETAIN</code>: The version of the file already on the instance is kept
   *                     and used as part of the new deployment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  fileExistsBehavior?: FileExistsBehavior | undefined;

  /**
   * <p>Messages that contain information about the status of a deployment.</p>
   * @public
   */
  deploymentStatusMessages?: string[] | undefined;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>The unique ID for an external resource (for example, a CloudFormation stack
   *             ID) that is linked to this deployment.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>Information about deployments related to the specified deployment.</p>
   * @public
   */
  relatedDeployments?: RelatedDeployments | undefined;

  /**
   * <p>Information about alarms associated with a deployment or deployment group.</p>
   * @public
   */
  overrideAlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * <p> Represents the output of a <code>BatchGetDeployments</code> operation. </p>
 * @public
 */
export interface BatchGetDeploymentsOutput {
  /**
   * <p> Information about the deployments. </p>
   * @public
   */
  deploymentsInfo?: DeploymentInfo[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p> The unique IDs of the deployment targets. The compute platform of the deployment
   *             determines the type of the targets and their formats. The maximum number of deployment
   *             target IDs you can specify is 25.</p>
   *          <ul>
   *             <li>
   *                <p> For deployments that use the EC2/On-premises compute platform, the target IDs
   *                     are Amazon EC2 or on-premises instances IDs, and their target type is
   *                         <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                <p> For deployments that use the Lambda compute platform, the
   *                     target IDs are the names of Lambda functions, and their target type
   *                     is <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                <p> For deployments that use the Amazon ECS compute platform, the target
   *                     IDs are pairs of Amazon ECS clusters and services specified using the
   *                     format <code><clustername>:<servicename></code>. Their target type
   *                     is <code>ecsTarget</code>. </p>
   *             </li>
   *             <li>
   *                <p> For deployments that are deployed with CloudFormation, the target IDs are
   *                         CloudFormation stack IDs. Their target type is
   *                         <code>cloudFormationTarget</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  targetIds: string[] | undefined;
}

/**
 * <p> Information about the target to be updated by an CloudFormation blue/green
 *             deployment. This target type is used for all deployments initiated by a CloudFormation stack update.</p>
 * @public
 */
export interface CloudFormationTarget {
  /**
   * <p>The unique ID of an CloudFormation blue/green deployment.</p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The unique ID of a deployment target that has a type
   *                 of <code>CloudFormationTarget</code>. </p>
   * @public
   */
  targetId?: string | undefined;

  /**
   * <p> The date and time when the target application was updated by an CloudFormation
   *             blue/green deployment. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The lifecycle events of the CloudFormation blue/green deployment to this target
   *             application. </p>
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * <p> The status of an CloudFormation blue/green deployment's target application.
   *         </p>
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * <p>The resource type for the CloudFormation blue/green deployment.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The percentage of production traffic that the target version of an CloudFormation
   *             blue/green deployment receives.</p>
   * @public
   */
  targetVersionWeight?: number | undefined;
}

/**
 * <p> Information about a set of Amazon ECS tasks in an CodeDeploy
 *             deployment. An Amazon ECS task set includes details such as the desired number
 *             of tasks, how many tasks are running, and whether the task set serves production
 *             traffic. An CodeDeploy application that uses the Amazon ECS compute
 *             platform deploys a containerized application in an Amazon ECS service as a task
 *             set. </p>
 * @public
 */
export interface ECSTaskSet {
  /**
   * <p> A unique ID of an <code>ECSTaskSet</code>. </p>
   * @public
   */
  identifer?: string | undefined;

  /**
   * <p> The number of tasks in a task set. During a deployment that uses the Amazon ECS compute type, CodeDeploy instructs Amazon ECS to create a new task set and
   *             uses this value to determine how many tasks to create. After the updated task set is
   *             created, CodeDeploy shifts traffic to the new task set. </p>
   * @public
   */
  desiredCount?: number | undefined;

  /**
   * <p> The number of tasks in the task set that are in the <code>PENDING</code> status
   *             during an Amazon ECS deployment. A task in the <code>PENDING</code> state is
   *             preparing to enter the <code>RUNNING</code> state. A task set enters the
   *                 <code>PENDING</code> status when it launches for the first time, or when it is
   *             restarted after being in the <code>STOPPED</code> state. </p>
   * @public
   */
  pendingCount?: number | undefined;

  /**
   * <p> The number of tasks in the task set that are in the <code>RUNNING</code> status
   *             during an Amazon ECS deployment. A task in the <code>RUNNING</code> state is
   *             running and ready for use. </p>
   * @public
   */
  runningCount?: number | undefined;

  /**
   * <p> The status of the task set. There are three valid task set statuses: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIMARY</code>: Indicates the task set is serving production traffic.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: Indicates the task set is not serving production traffic.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAINING</code>: Indicates the tasks in the task set are being stopped and
   *                     their corresponding targets are being deregistered from their target group.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p> The percentage of traffic served by this task set. </p>
   * @public
   */
  trafficWeight?: number | undefined;

  /**
   * <p> The target group associated with the task set. The target group is used by CodeDeploy to manage traffic to a task set. </p>
   * @public
   */
  targetGroup?: TargetGroupInfo | undefined;

  /**
   * <p> A label that identifies whether the ECS task set is an original target
   *                 (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   * @public
   */
  taskSetLabel?: TargetLabel | undefined;
}

/**
 * <p> Information about the target of an Amazon ECS deployment. </p>
 * @public
 */
export interface ECSTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>ecsTarget</code>.
   *         </p>
   * @public
   */
  targetId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p> The date and time when the target Amazon ECS application was updated by a
   *             deployment. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The lifecycle events of the deployment to this target Amazon ECS application.
   *         </p>
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * <p> The status an Amazon ECS deployment's target ECS application. </p>
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * <p> The <code>ECSTaskSet</code> objects associated with the ECS target. </p>
   * @public
   */
  taskSetsInfo?: ECSTaskSet[] | undefined;
}

/**
 * <p> A target Amazon EC2 or on-premises instance during a deployment that uses the
 *             EC2/On-premises compute platform. </p>
 * @public
 */
export interface InstanceTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>instanceTarget</code>.
   *         </p>
   * @public
   */
  targetId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p> The status an EC2/On-premises deployment's target instance. </p>
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * <p> The date and time when the target instance was updated by a deployment. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The lifecycle events of the deployment to this target instance. </p>
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * <p> A label that identifies whether the instance is an original target
   *             (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   * @public
   */
  instanceLabel?: TargetLabel | undefined;
}

/**
 * <p> Information about a Lambda function specified in a deployment. </p>
 * @public
 */
export interface LambdaFunctionInfo {
  /**
   * <p> The name of a Lambda function. </p>
   * @public
   */
  functionName?: string | undefined;

  /**
   * <p> The alias of a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Lambda Function Aliases</a> in the <i>Lambda Developer
   *                 Guide</i>.</p>
   * @public
   */
  functionAlias?: string | undefined;

  /**
   * <p> The version of a Lambda function that production traffic points to.
   *         </p>
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * <p> The version of a Lambda function that production traffic points to after
   *             the Lambda function is deployed. </p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p> The percentage of production traffic that the target version of a Lambda
   *             function receives. </p>
   * @public
   */
  targetVersionWeight?: number | undefined;
}

/**
 * <p> Information about the target Lambda function during an Lambda deployment. </p>
 * @public
 */
export interface LambdaTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>lambdaTarget</code>.
   *         </p>
   * @public
   */
  targetId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p> The status an Lambda deployment's target Lambda function.
   *         </p>
   * @public
   */
  status?: TargetStatus | undefined;

  /**
   * <p> The date and time when the target Lambda function was updated by a
   *             deployment. </p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p> The lifecycle events of the deployment to this target Lambda function.
   *         </p>
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;

  /**
   * <p> A <code>LambdaFunctionInfo</code> object that describes a target Lambda
   *             function. </p>
   * @public
   */
  lambdaFunctionInfo?: LambdaFunctionInfo | undefined;
}

/**
 * <p> Information about the deployment target. </p>
 * @public
 */
export interface DeploymentTarget {
  /**
   * <p>The deployment type that is specific to the deployment's compute platform or
   *             deployments initiated by a CloudFormation stack update.</p>
   * @public
   */
  deploymentTargetType?: DeploymentTargetType | undefined;

  /**
   * <p> Information about the target for a deployment that uses the EC2/On-premises compute
   *             platform. </p>
   * @public
   */
  instanceTarget?: InstanceTarget | undefined;

  /**
   * <p> Information about the target for a deployment that uses the Lambda
   *             compute platform. </p>
   * @public
   */
  lambdaTarget?: LambdaTarget | undefined;

  /**
   * <p> Information about the target for a deployment that uses the Amazon ECS
   *             compute platform. </p>
   * @public
   */
  ecsTarget?: ECSTarget | undefined;

  /**
   * <p> Information about the target to be updated by an CloudFormation blue/green
   *             deployment. This target type is used for all deployments initiated by a CloudFormation stack update.</p>
   * @public
   */
  cloudFormationTarget?: CloudFormationTarget | undefined;
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsOutput {
  /**
   * <p> A list of target objects for a deployment. Each target object contains details about
   *             the target, such as its status and lifecycle events. The type of the target objects
   *             depends on the deployment' compute platform. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2/On-premises</b>: Each target object is an
   *                         Amazon EC2 or on-premises instance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Lambda</b>: The target object is a
   *                     specific version of an Lambda function. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon ECS</b>: The target object is an
   *                         Amazon ECS service. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CloudFormation</b>: The target object is
   *                     an CloudFormation blue/green deployment. </p>
   *             </li>
   *          </ul>
   * @public
   */
  deploymentTargets?: DeploymentTarget[] | undefined;
}

/**
 * <p>Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.</p>
 * @public
 */
export interface BatchGetOnPremisesInstancesInput {
  /**
   * <p>The names of the on-premises instances about which to get information. The maximum
   *             number of instance names you can specify is 25.</p>
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * <p>Information about an on-premises instance.</p>
 * @public
 */
export interface InstanceInfo {
  /**
   * <p>The name of the on-premises instance.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The ARN of the IAM session associated with the on-premises
   *             instance.</p>
   * @public
   */
  iamSessionArn?: string | undefined;

  /**
   * <p>The user ARN associated with the on-premises instance.</p>
   * @public
   */
  iamUserArn?: string | undefined;

  /**
   * <p>The ARN of the on-premises instance.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>The time at which the on-premises instance was registered.</p>
   * @public
   */
  registerTime?: Date | undefined;

  /**
   * <p>If the on-premises instance was deregistered, the time at which the on-premises
   *             instance was deregistered.</p>
   * @public
   */
  deregisterTime?: Date | undefined;

  /**
   * <p>The tags currently associated with the on-premises instance.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.</p>
 * @public
 */
export interface BatchGetOnPremisesInstancesOutput {
  /**
   * <p>Information about the on-premises instances.</p>
   * @public
   */
  instanceInfos?: InstanceInfo[] | undefined;
}

/**
 * @public
 */
export interface ContinueDeploymentInput {
  /**
   * <p> The unique ID of a blue/green deployment for which you want to start rerouting
   *             traffic to the replacement environment. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The status of the deployment's waiting period. <code>READY_WAIT</code> indicates that
   *             the deployment is ready to start shifting traffic. <code>TERMINATION_WAIT</code>
   *             indicates that the traffic is shifted, but the original target is not terminated.
   *         </p>
   * @public
   */
  deploymentWaitType?: DeploymentWaitType | undefined;
}

/**
 * <p>Represents the input of a <code>CreateApplication</code> operation.</p>
 * @public
 */
export interface CreateApplicationInput {
  /**
   * <p>The name of the application. This name must be unique with the applicable user or
   *                 Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p> The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p> The metadata that you apply to CodeDeploy applications to help you organize and
   *             categorize them. Each tag consists of a key and an optional value, both of which you
   *             define. </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a <code>CreateApplication</code> operation.</p>
 * @public
 */
export interface CreateApplicationOutput {
  /**
   * <p>A unique application ID.</p>
   * @public
   */
  applicationId?: string | undefined;
}

/**
 * <p>Represents the input of a <code>CreateDeployment</code> operation.</p>
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The name of the deployment group.</p>
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * <p> The type and location of the revision to deploy. </p>
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * <p>The name of a deployment configuration associated with the user or Amazon Web Services account.</p>
   *          <p>If not specified, the value configured in the deployment group is used as the default.
   *             If the deployment group does not have a deployment configuration associated with it,
   *                 <code>CodeDeployDefault</code>.<code>OneAtATime</code> is used by default.</p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p>A comment about the deployment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or
   *                 <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then
   *             the deployment continues to the next deployment lifecycle event. For example, if
   *                 <code>ApplicationStop</code> fails, the deployment continues with
   *                 <code>DownloadBundle</code>. If <code>BeforeBlockTraffic</code> fails, the
   *             deployment continues with <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code>
   *             fails, the deployment continues with <code>ApplicationStop</code>. </p>
   *          <p> If false or not specified, then if a lifecycle event fails during a deployment to an
   *             instance, that deployment fails. If deployment to that instance is part of an overall
   *             deployment and the number of healthy hosts is not less than the minimum number of
   *             healthy hosts, then a deployment to the next instance is attempted. </p>
   *          <p> During a deployment, the CodeDeploy agent runs the scripts specified for
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful
   *             deployment. (All other scripts are run from the AppSpec file in the current deployment.)
   *             If one of these scripts contains an error and does not run successfully, the deployment
   *             can fail. </p>
   *          <p> If the cause of the failure is a script from the last successful deployment that will
   *             never run successfully, create a new deployment and use
   *                 <code>ignoreApplicationStopFailures</code> to specify that the
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> failures should be ignored. </p>
   * @public
   */
  ignoreApplicationStopFailures?: boolean | undefined;

  /**
   * <p> Information about the instances that belong to the replacement environment in a
   *             blue/green deployment. </p>
   * @public
   */
  targetInstances?: TargetInstances | undefined;

  /**
   * <p>Configuration information for an automatic rollback that is added when a deployment is
   *             created.</p>
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * <p> Indicates whether to deploy to all instances or only to instances that are not
   *             running the latest application revision. </p>
   * @public
   */
  updateOutdatedInstancesOnly?: boolean | undefined;

  /**
   * <p>Information about how CodeDeploy handles files that already exist in a
   *             deployment target location but weren't part of the previous successful
   *             deployment.</p>
   *          <p>The <code>fileExistsBehavior</code> parameter takes any of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>DISALLOW: The deployment fails. This is also the default behavior if no option
   *                     is specified.</p>
   *             </li>
   *             <li>
   *                <p>OVERWRITE: The version of the file from the application revision currently
   *                     being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                <p>RETAIN: The version of the file already on the instance is kept and used as
   *                     part of the new deployment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  fileExistsBehavior?: FileExistsBehavior | undefined;

  /**
   * <p>Allows you to specify information about alarms associated with a deployment. The alarm
   *             configuration that you specify here will override the alarm configuration at the
   *             deployment group level. Consider overriding the alarm configuration if you have set up
   *             alarms at the deployment group level that are causing deployment failures. In this case,
   *             you would call <code>CreateDeployment</code> to create a new deployment that uses a
   *             previous application revision that is known to work, and set its alarm configuration to
   *             turn off alarm polling. Turning off alarm polling ensures that the new deployment
   *             proceeds without being blocked by the alarm that was generated by the previous, failed,
   *             deployment.</p>
   *          <note>
   *             <p>If you specify an <code>overrideAlarmConfiguration</code>, you need the
   *                     <code>UpdateDeploymentGroup</code>
   *                 IAM permission when calling <code>CreateDeployment</code>.</p>
   *          </note>
   * @public
   */
  overrideAlarmConfiguration?: AlarmConfiguration | undefined;
}

/**
 * <p> Represents the output of a <code>CreateDeployment</code> operation. </p>
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * <p>Information about the minimum number of healthy instances.</p>
 * @public
 */
export interface MinimumHealthyHosts {
  /**
   * <p>The minimum healthy instance type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOST_COUNT</code>: The minimum number of healthy instances as an
   *                     absolute value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FLEET_PERCENT</code>: The minimum number of healthy instances as a
   *                     percentage of the total number of instances in the deployment.</p>
   *             </li>
   *          </ul>
   *          <p>In an example of nine instances, if a HOST_COUNT of six is specified, deploy to up to
   *             three instances at a time. The deployment is successful if six or more instances are
   *             deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is
   *             specified, deploy to up to five instances at a time. The deployment is successful if
   *             four or more instances are deployed to successfully. Otherwise, the deployment
   *             fails.</p>
   *          <note>
   *             <p>In a call to the <code>GetDeploymentConfig</code>, CodeDeployDefault.OneAtATime
   *                 returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This
   *                 means a deployment to only one instance at a time. (You cannot set the type to
   *                 MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with
   *                 CodeDeployDefault.OneAtATime, CodeDeploy attempts to ensure that all
   *                 instances but one are kept in a healthy state during the deployment. Although this
   *                 allows one instance at a time to be taken offline for a new deployment, it also
   *                 means that if the deployment to the last instance fails, the overall deployment is
   *                 still successful.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html">CodeDeploy
   *                 Instance Health</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  type?: MinimumHealthyHostsType | undefined;

  /**
   * <p>The minimum healthy instance value.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>A configuration that shifts traffic from one version of a Lambda function
 *             or Amazon ECS task set to another in two increments. The original and target
 *                 Lambda function versions or ECS task sets are specified in the
 *             deployment's AppSpec file.</p>
 * @public
 */
export interface TimeBasedCanary {
  /**
   * <p>The percentage of traffic to shift in the first increment of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   * @public
   */
  canaryPercentage?: number | undefined;

  /**
   * <p>The number of minutes between the first and second traffic shifts of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   * @public
   */
  canaryInterval?: number | undefined;
}

/**
 * <p>A configuration that shifts traffic from one version of a Lambda function
 *             or ECS task set to another in equal increments, with an equal number of minutes between
 *             each increment. The original and target Lambda function versions or ECS task
 *             sets are specified in the deployment's AppSpec file.</p>
 * @public
 */
export interface TimeBasedLinear {
  /**
   * <p>The percentage of traffic that is shifted at the start of each increment of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   * @public
   */
  linearPercentage?: number | undefined;

  /**
   * <p>The number of minutes between each incremental traffic shift of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   * @public
   */
  linearInterval?: number | undefined;
}

/**
 * <p>The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment,
 *             or from one Amazon ECS task set to another during an Amazon ECS
 *             deployment.</p>
 * @public
 */
export interface TrafficRoutingConfig {
  /**
   * <p>The type of traffic shifting (<code>TimeBasedCanary</code> or
   *                 <code>TimeBasedLinear</code>) used by a deployment configuration.</p>
   * @public
   */
  type?: TrafficRoutingType | undefined;

  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function
   *             or ECS task set to another in two increments. The original and target Lambda
   *             function versions or ECS task sets are specified in the deployment's AppSpec
   *             file.</p>
   * @public
   */
  timeBasedCanary?: TimeBasedCanary | undefined;

  /**
   * <p>A configuration that shifts traffic from one version of a Lambda function
   *             or Amazon ECS task set to another in equal increments, with an equal number of
   *             minutes between each increment. The original and target Lambda function
   *             versions or Amazon ECS task sets are specified in the deployment's AppSpec
   *             file.</p>
   * @public
   */
  timeBasedLinear?: TimeBasedLinear | undefined;
}

/**
 * <p>Information about the minimum number of healthy instances per Availability
 *             Zone.</p>
 * @public
 */
export interface MinimumHealthyHostsPerZone {
  /**
   * <p>The <code>type</code> associated with the <code>MinimumHealthyHostsPerZone</code>
   *             option.</p>
   * @public
   */
  type?: MinimumHealthyHostsPerZoneType | undefined;

  /**
   * <p>The <code>value</code> associated with the <code>MinimumHealthyHostsPerZone</code>
   *             option.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Configure the <code>ZonalConfig</code> object if you want CodeDeploy to
 *             deploy your application to one <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones">Availability Zone</a> at a time, within an Amazon Web Services Region. By
 *             deploying to one Availability Zone at a time, you can expose your deployment to a
 *             progressively larger audience as confidence in the deployment's performance and
 *             viability grows. If you don't configure the <code>ZonalConfig</code> object, CodeDeploy deploys your application to a random selection of hosts across a
 *             Region.</p>
 *          <p>For more information about the zonal configuration feature, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config">zonal configuration</a> in the <i>CodeDeploy User
 *                 Guide</i>.</p>
 * @public
 */
export interface ZonalConfig {
  /**
   * <p>The period of time, in seconds, that CodeDeploy must wait after completing a
   *             deployment to the <i>first</i> Availability Zone. CodeDeploy will
   *             wait this amount of time before starting a deployment to the second Availability Zone.
   *             You might set this option if you want to allow extra bake time for the first
   *             Availability Zone. If you don't specify a value for
   *                 <code>firstZoneMonitorDurationInSeconds</code>, then CodeDeploy uses the
   *                 <code>monitorDurationInSeconds</code> value for the first Availability Zone.</p>
   *          <p>For more information about the zonal configuration feature, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config">zonal configuration</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  firstZoneMonitorDurationInSeconds?: number | undefined;

  /**
   * <p>The period of time, in seconds, that CodeDeploy must wait after completing a
   *             deployment to an Availability Zone. CodeDeploy will wait this amount of time
   *             before starting a deployment to the next Availability Zone. Consider adding a monitor
   *             duration to give the deployment some time to prove itself (or 'bake') in one
   *             Availability Zone before it is released in the next zone. If you don't specify a
   *                 <code>monitorDurationInSeconds</code>, CodeDeploy starts deploying to the
   *             next Availability Zone immediately.</p>
   *          <p>For more information about the zonal configuration feature, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config">zonal configuration</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  monitorDurationInSeconds?: number | undefined;

  /**
   * <p>The number or percentage of instances that must remain available per Availability Zone
   *             during a deployment. This option works in conjunction with the
   *                 <code>MinimumHealthyHosts</code> option. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html#minimum-healthy-hosts-az">About the minimum number of healthy hosts per Availability Zone</a> in the
   *                     <i>CodeDeploy User Guide</i>.</p>
   *          <p>If you don't specify the <code>minimumHealthyHostsPerZone</code> option, then CodeDeploy uses a default value of <code>0</code> percent.</p>
   *          <p>For more information about the zonal configuration feature, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config">zonal configuration</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  minimumHealthyHostsPerZone?: MinimumHealthyHostsPerZone | undefined;
}

/**
 * <p>Represents the input of a <code>CreateDeploymentConfig</code> operation.</p>
 * @public
 */
export interface CreateDeploymentConfigInput {
  /**
   * <p>The name of the deployment configuration to create.</p>
   * @public
   */
  deploymentConfigName: string | undefined;

  /**
   * <p>The minimum number of healthy instances that should be available at any time during
   *             the deployment. There are two parameters expected in the input: type and value.</p>
   *          <p>The type parameter takes either of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>HOST_COUNT: The value parameter represents the minimum number of healthy
   *                     instances as an absolute value.</p>
   *             </li>
   *             <li>
   *                <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy
   *                     instances as a percentage of the total number of instances in the deployment. If
   *                     you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up
   *                     fractional instances.</p>
   *             </li>
   *          </ul>
   *          <p>The value parameter takes an integer.</p>
   *          <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT
   *             and a value of 95.</p>
   * @public
   */
  minimumHealthyHosts?: MinimumHealthyHosts | undefined;

  /**
   * <p>The configuration that specifies how the deployment traffic is routed.</p>
   * @public
   */
  trafficRoutingConfig?: TrafficRoutingConfig | undefined;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>Configure the <code>ZonalConfig</code> object if you want CodeDeploy to
   *             deploy your application to one <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones">Availability Zone</a> at a time, within an Amazon Web Services Region.</p>
   *          <p>For more information about the zonal configuration feature, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config">zonal configuration</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  zonalConfig?: ZonalConfig | undefined;
}

/**
 * <p>Represents the output of a <code>CreateDeploymentConfig</code> operation.</p>
 * @public
 */
export interface CreateDeploymentConfigOutput {
  /**
   * <p>A unique deployment configuration ID.</p>
   * @public
   */
  deploymentConfigId?: string | undefined;
}

/**
 * <p>Represents the input of a <code>CreateDeploymentGroup</code> operation.</p>
 * @public
 */
export interface CreateDeploymentGroupInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The name of a new deployment group for the specified application.</p>
   * @public
   */
  deploymentGroupName: string | undefined;

  /**
   * <p>If specified, the deployment configuration name can be either one of the predefined
   *             configurations provided with CodeDeploy or a custom deployment configuration
   *             that you create by calling the create deployment configuration operation.</p>
   *          <p>
   *             <code>CodeDeployDefault.OneAtATime</code> is the default deployment configuration. It
   *             is used if a configuration isn't specified for the deployment or deployment
   *             group.</p>
   *          <p>For more information about the predefined deployment configurations in CodeDeploy, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html">Working with
   *                 Deployment Configurations in CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.</p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call
   *             as ec2TagSet.</p>
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags. Cannot be used in the same call as
   *                 <code>OnPremisesTagSet</code>.</p>
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>A list of associated Amazon EC2 Auto Scaling groups.</p>
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * <p>A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on
   *             the user's behalf when interacting with Amazon Web Services services.</p>
   * @public
   */
  serviceRoleArn: string | undefined;

  /**
   * <p>Information about triggers to create when the deployment group is created. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html">Create a Trigger for an
   *                     CodeDeploy Event</a> in the <i>CodeDeploy
   *                 User Guide</i>.</p>
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * <p>Information to add about Amazon CloudWatch alarms when the deployment group is
   *             created.</p>
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>Configuration information for an automatic rollback that is added when a deployment
   *             group is created.</p>
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *          <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *          <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * <p>Information about the type of deployment, in-place or blue/green, that you want to run
   *             and whether to route deployment traffic behind a load balancer.</p>
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * <p>Information about blue/green deployment options for a deployment group.</p>
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * <p>Information about the load balancer used in a deployment.</p>
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * <p>Information about groups of tags applied to Amazon EC2 instances. The
   *             deployment group includes only Amazon EC2 instances identified by all the tag
   *             groups. Cannot be used in the same call as <code>ec2TagFilters</code>.</p>
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only on-premises instances identified by all of the tag groups. Cannot be
   *             used in the same call as <code>onPremisesInstanceTagFilters</code>.</p>
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * <p> The metadata that you apply to CodeDeploy deployment groups to help you organize and
   *             categorize them. Each tag consists of a key and an optional value, both of which you
   *             define. </p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html">Integrating
   *                     CodeDeploy with Amazon EC2 Auto Scaling</a> in the <i>CodeDeploy User Guide</i>.</p>
   *          <p>Set <code>terminationHookEnabled</code> to <code>true</code> to have CodeDeploy install a termination hook into your Auto Scaling group when you create a
   *             deployment group. When this hook is installed, CodeDeploy will perform
   *             termination deployments.</p>
   *          <p>For information about termination deployments, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable">Enabling termination deployments during Auto Scaling scale-in events</a> in the
   *                     <i>CodeDeploy User Guide</i>.</p>
   *          <p>For more information about Auto Scaling scale-in events, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html#as-lifecycle-scale-in">Scale in</a> topic in the <i>Amazon EC2 Auto Scaling User
   *             Guide</i>.</p>
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * <p>Represents the output of a <code>CreateDeploymentGroup</code> operation.</p>
 * @public
 */
export interface CreateDeploymentGroupOutput {
  /**
   * <p>A unique deployment group ID.</p>
   * @public
   */
  deploymentGroupId?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteApplication</code> operation.</p>
 * @public
 */
export interface DeleteApplicationInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteDeploymentConfig</code> operation.</p>
 * @public
 */
export interface DeleteDeploymentConfigInput {
  /**
   * <p>The name of a deployment configuration associated with the user or Amazon Web Services account.</p>
   * @public
   */
  deploymentConfigName: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteDeploymentGroup</code> operation.</p>
 * @public
 */
export interface DeleteDeploymentGroupInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The name of a deployment group for the specified application.</p>
   * @public
   */
  deploymentGroupName: string | undefined;
}

/**
 * <p>Represents the output of a <code>DeleteDeploymentGroup</code> operation.</p>
 * @public
 */
export interface DeleteDeploymentGroupOutput {
  /**
   * <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, CodeDeploy successfully removed all
   *             corresponding Auto Scaling lifecycle event hooks from the Amazon EC2
   *             instances in the Auto Scaling group. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from
   *             the Amazon EC2 instances in the Auto Scaling group.</p>
   * @public
   */
  hooksNotCleanedUp?: AutoScalingGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteGitHubAccount</code> operation.</p>
 * @public
 */
export interface DeleteGitHubAccountTokenInput {
  /**
   * <p>The name of the GitHub account connection to delete.</p>
   * @public
   */
  tokenName?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DeleteGitHubAccountToken</code> operation.</p>
 * @public
 */
export interface DeleteGitHubAccountTokenOutput {
  /**
   * <p>The name of the GitHub account connection that was deleted.</p>
   * @public
   */
  tokenName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdInput {
  /**
   * <p>The unique ID of an external resource (for example, a CloudFormation stack
   *             ID) that is linked to one or more CodeDeploy resources.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdOutput {}

/**
 * <p>Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.</p>
 * @public
 */
export interface DeregisterOnPremisesInstanceInput {
  /**
   * <p>The name of the on-premises instance to deregister.</p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * <p>Represents the input of a <code>GetApplication</code> operation.</p>
 * @public
 */
export interface GetApplicationInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetApplication</code> operation.</p>
 * @public
 */
export interface GetApplicationOutput {
  /**
   * <p>Information about the application.</p>
   * @public
   */
  application?: ApplicationInfo | undefined;
}

/**
 * <p>Represents the input of a <code>GetApplicationRevision</code> operation.</p>
 * @public
 */
export interface GetApplicationRevisionInput {
  /**
   * <p>The name of the application that corresponds to the revision.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>Information about the application revision to get, including type and location.</p>
   * @public
   */
  revision: RevisionLocation | undefined;
}

/**
 * <p>Represents the output of a <code>GetApplicationRevision</code> operation.</p>
 * @public
 */
export interface GetApplicationRevisionOutput {
  /**
   * <p>The name of the application that corresponds to the revision.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>Additional information about the revision, including type and location.</p>
   * @public
   */
  revision?: RevisionLocation | undefined;

  /**
   * <p>General information about the revision.</p>
   * @public
   */
  revisionInfo?: GenericRevisionInfo | undefined;
}

/**
 * <p>Represents the input of a <code>GetDeployment</code> operation.</p>
 * @public
 */
export interface GetDeploymentInput {
  /**
   * <p> The unique ID of a deployment associated with the user or Amazon Web Services account.
   *         </p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetDeployment</code> operation.</p>
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * <p>Information about the deployment.</p>
   * @public
   */
  deploymentInfo?: DeploymentInfo | undefined;
}

/**
 * <p>Represents the input of a <code>GetDeploymentConfig</code> operation.</p>
 * @public
 */
export interface GetDeploymentConfigInput {
  /**
   * <p>The name of a deployment configuration associated with the user or Amazon Web Services account.</p>
   * @public
   */
  deploymentConfigName: string | undefined;
}

/**
 * <p>Information about a deployment configuration.</p>
 * @public
 */
export interface DeploymentConfigInfo {
  /**
   * <p>The deployment configuration ID.</p>
   * @public
   */
  deploymentConfigId?: string | undefined;

  /**
   * <p>The deployment configuration name.</p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p>Information about the number or percentage of minimum healthy instances.</p>
   * @public
   */
  minimumHealthyHosts?: MinimumHealthyHosts | undefined;

  /**
   * <p>The time at which the deployment configuration was created.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>The configuration that specifies how the deployment traffic is routed. Used for
   *             deployments with a Lambda or Amazon ECS compute platform
   *             only.</p>
   * @public
   */
  trafficRoutingConfig?: TrafficRoutingConfig | undefined;

  /**
   * <p>Information about a zonal configuration.</p>
   * @public
   */
  zonalConfig?: ZonalConfig | undefined;
}

/**
 * <p>Represents the output of a <code>GetDeploymentConfig</code> operation.</p>
 * @public
 */
export interface GetDeploymentConfigOutput {
  /**
   * <p>Information about the deployment configuration.</p>
   * @public
   */
  deploymentConfigInfo?: DeploymentConfigInfo | undefined;
}

/**
 * <p>Represents the input of a <code>GetDeploymentGroup</code> operation.</p>
 * @public
 */
export interface GetDeploymentGroupInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The name of a deployment group for the specified application.</p>
   * @public
   */
  deploymentGroupName: string | undefined;
}

/**
 * <p>Represents the output of a <code>GetDeploymentGroup</code> operation.</p>
 * @public
 */
export interface GetDeploymentGroupOutput {
  /**
   * <p>Information about the deployment group.</p>
   * @public
   */
  deploymentGroupInfo?: DeploymentGroupInfo | undefined;
}

/**
 * <p> Represents the input of a <code>GetDeploymentInstance</code> operation. </p>
 * @public
 */
export interface GetDeploymentInstanceInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p> The unique ID of an instance in the deployment group. </p>
   * @public
   */
  instanceId: string | undefined;
}

/**
 * <p> Represents the output of a <code>GetDeploymentInstance</code> operation. </p>
 * @public
 */
export interface GetDeploymentInstanceOutput {
  /**
   * <p> Information about the instance. </p>
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
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p> The unique ID of a deployment target. </p>
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentTargetOutput {
  /**
   * <p> A deployment target that contains information about a deployment such as its status,
   *             lifecycle events, and when it was last updated. It also contains metadata about the
   *             deployment target. The deployment target metadata depends on the deployment target's
   *             type (<code>instanceTarget</code>, <code>lambdaTarget</code>, or
   *             <code>ecsTarget</code>). </p>
   * @public
   */
  deploymentTarget?: DeploymentTarget | undefined;
}

/**
 * <p> Represents the input of a <code>GetOnPremisesInstance</code> operation. </p>
 * @public
 */
export interface GetOnPremisesInstanceInput {
  /**
   * <p> The name of the on-premises instance about which to get information. </p>
   * @public
   */
  instanceName: string | undefined;
}

/**
 * <p> Represents the output of a <code>GetOnPremisesInstance</code> operation. </p>
 * @public
 */
export interface GetOnPremisesInstanceOutput {
  /**
   * <p> Information about the on-premises instance. </p>
   * @public
   */
  instanceInfo?: InstanceInfo | undefined;
}

/**
 * <p> Represents the input of a <code>ListApplicationRevisions</code> operation. </p>
 * @public
 */
export interface ListApplicationRevisionsInput {
  /**
   * <p> The name of an CodeDeploy application associated with the user or Amazon Web Services account. </p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The column name to use to sort the list results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>registerTime</code>: Sort by the time the revisions were registered with
   *                         CodeDeploy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>firstUsedTime</code>: Sort by the time the revisions were first used in
   *                     a deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lastUsedTime</code>: Sort by the time the revisions were last used in a
   *                     deployment.</p>
   *             </li>
   *          </ul>
   *          <p> If not specified or set to null, the results are returned in an arbitrary order.
   *         </p>
   * @public
   */
  sortBy?: ApplicationRevisionSortBy | undefined;

  /**
   * <p> The order in which to sort the list results: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ascending</code>: ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>descending</code>: descending order.</p>
   *             </li>
   *          </ul>
   *          <p>If not specified, the results are sorted in ascending order.</p>
   *          <p>If set to null, the results are sorted in an arbitrary order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p> An Amazon S3 bucket name to limit the search for revisions. </p>
   *          <p> If set to null, all of the user's buckets are searched. </p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p> A key prefix for the set of Amazon S3 objects to limit the search for
   *             revisions. </p>
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * <p> Whether to list revisions based on whether the revision is the target revision of a
   *             deployment group: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>include</code>: List revisions that are target revisions of a deployment
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>exclude</code>: Do not list revisions that are target revisions of a
   *                     deployment group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ignore</code>: List all revisions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  deployed?: ListStateFilterAction | undefined;

  /**
   * <p>An identifier returned from the previous <code>ListApplicationRevisions</code> call.
   *             It can be used to return the next set of applications in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListApplicationRevisions</code> operation.</p>
 * @public
 */
export interface ListApplicationRevisionsOutput {
  /**
   * <p>A list of locations that contain the matching revisions.</p>
   * @public
   */
  revisions?: RevisionLocation[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListApplications</code> operation.</p>
 * @public
 */
export interface ListApplicationsInput {
  /**
   * <p>An identifier returned from the previous list applications call. It can be used to
   *             return the next set of applications in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a ListApplications operation.</p>
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * <p>A list of application names.</p>
   * @public
   */
  applications?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list applications call to return the next set of applications in
   *             the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListDeploymentConfigs</code> operation.</p>
 * @public
 */
export interface ListDeploymentConfigsInput {
  /**
   * <p>An identifier returned from the previous <code>ListDeploymentConfigs</code> call. It
   *             can be used to return the next set of deployment configurations in the list. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListDeploymentConfigs</code> operation.</p>
 * @public
 */
export interface ListDeploymentConfigsOutput {
  /**
   * <p>A list of deployment configurations, including built-in configurations such as
   *                 <code>CodeDeployDefault.OneAtATime</code>.</p>
   * @public
   */
  deploymentConfigsList?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment configurations call to return the next set of
   *             deployment configurations in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListDeploymentGroups</code> operation.</p>
 * @public
 */
export interface ListDeploymentGroupsInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>An identifier returned from the previous list deployment groups call. It can be used
   *             to return the next set of deployment groups in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListDeploymentGroups</code> operation.</p>
 * @public
 */
export interface ListDeploymentGroupsOutput {
  /**
   * <p>The application name.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>A list of deployment group names.</p>
   * @public
   */
  deploymentGroups?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment groups call to return the next set of deployment
   *             groups in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Represents the input of a <code>ListDeploymentInstances</code> operation. </p>
 * @public
 */
export interface ListDeploymentInstancesInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>An identifier returned from the previous list deployment instances call. It can be
   *             used to return the next set of deployment instances in the list.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A subset of instances to list by status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Pending</code>: Include those instances with pending deployments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InProgress</code>: Include those instances where deployments are still
   *                     in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Succeeded</code>: Include those instances with successful
   *                     deployments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Include those instances with failed deployments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Skipped</code>: Include those instances with skipped deployments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unknown</code>: Include those instances with deployments in an unknown
   *                     state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  instanceStatusFilter?: InstanceStatus[] | undefined;

  /**
   * <p>The set of instances in a blue/green deployment, either those in the original
   *             environment ("BLUE") or those in the replacement environment ("GREEN"), for which you
   *             want to view instance information.</p>
   * @public
   */
  instanceTypeFilter?: _InstanceType[] | undefined;
}

/**
 * <p>Represents the output of a <code>ListDeploymentInstances</code> operation.</p>
 * @public
 */
export interface ListDeploymentInstancesOutput {
  /**
   * <p>A list of instance IDs.</p>
   * @public
   */
  instancesList?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment instances call to return the next set of
   *             deployment instances in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a time range.</p>
 * @public
 */
export interface TimeRange {
  /**
   * <p>The start time of the time range.</p>
   *          <note>
   *             <p>Specify null to leave the start time open-ended.</p>
   *          </note>
   * @public
   */
  start?: Date | undefined;

  /**
   * <p>The end time of the time range.</p>
   *          <note>
   *             <p>Specify null to leave the end time open-ended.</p>
   *          </note>
   * @public
   */
  end?: Date | undefined;
}

/**
 * <p>Represents the input of a <code>ListDeployments</code> operation.</p>
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   *          <note>
   *             <p>If <code>applicationName</code> is specified, then
   *                     <code>deploymentGroupName</code> must be specified. If it is not specified, then
   *                     <code>deploymentGroupName</code> must not be specified. </p>
   *          </note>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The name of a deployment group for the specified application.</p>
   *          <note>
   *             <p>If <code>deploymentGroupName</code> is specified, then
   *                     <code>applicationName</code> must be specified. If it is not specified, then
   *                     <code>applicationName</code> must not be specified. </p>
   *          </note>
   * @public
   */
  deploymentGroupName?: string | undefined;

  /**
   * <p>The unique ID of an external resource for returning deployments linked to the external
   *             resource.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>A subset of deployments to list by status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Created</code>: Include created deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Queued</code>: Include queued deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>In Progress</code>: Include in-progress deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Succeeded</code>: Include successful deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Include failed deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code>: Include stopped deployments in the resulting
   *                     list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  includeOnlyStatuses?: DeploymentStatus[] | undefined;

  /**
   * <p>A time range (start and end) for returning a subset of the list of deployments.</p>
   * @public
   */
  createTimeRange?: TimeRange | undefined;

  /**
   * <p>An identifier returned from the previous list deployments call. It can be used to
   *             return the next set of deployments in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListDeployments</code> operation.</p>
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * <p>A list of deployment IDs.</p>
   * @public
   */
  deployments?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployments call to return the next set of deployments in
   *             the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentTargetsInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p> A token identifier returned from the previous <code>ListDeploymentTargets</code>
   *             call. It can be used to return the next set of deployment targets in the list. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> A key used to filter the returned targets. The two valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TargetStatus</code> - A <code>TargetStatus</code> filter string can be
   *                         <code>Failed</code>, <code>InProgress</code>, <code>Pending</code>,
   *                         <code>Ready</code>, <code>Skipped</code>, <code>Succeeded</code>, or
   *                         <code>Unknown</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ServerInstanceLabel</code> - A <code>ServerInstanceLabel</code> filter
   *                     string can be <code>Blue</code> or <code>Green</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  targetFilters?: Partial<Record<TargetFilterName, string[]>> | undefined;
}

/**
 * @public
 */
export interface ListDeploymentTargetsOutput {
  /**
   * <p> The unique IDs of deployment targets. </p>
   * @public
   */
  targetIds?: string[] | undefined;

  /**
   * <p> If a large amount of information is returned, a token identifier is also returned. It
   *             can be used in a subsequent <code>ListDeploymentTargets</code> call to return the next
   *             set of deployment targets in the list. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.</p>
 * @public
 */
export interface ListGitHubAccountTokenNamesInput {
  /**
   * <p>An identifier returned from the previous <code>ListGitHubAccountTokenNames</code>
   *             call. It can be used to return the next set of names in the list. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.</p>
 * @public
 */
export interface ListGitHubAccountTokenNamesOutput {
  /**
   * <p>A list of names of connections to GitHub accounts.</p>
   * @public
   */
  tokenNameList?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent <code>ListGitHubAccountTokenNames</code> call to return the next
   *             set of names in the list. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ListOnPremisesInstances</code> operation.</p>
 * @public
 */
export interface ListOnPremisesInstancesInput {
  /**
   * <p>The registration status of the on-premises instances:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Deregistered</code>: Include deregistered on-premises instances in the
   *                     resulting list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Registered</code>: Include registered on-premises instances in the
   *                     resulting list.</p>
   *             </li>
   *          </ul>
   * @public
   */
  registrationStatus?: RegistrationStatus | undefined;

  /**
   * <p>The on-premises instance tags that are used to restrict the on-premises instance names
   *             returned.</p>
   * @public
   */
  tagFilters?: TagFilter[] | undefined;

  /**
   * <p>An identifier returned from the previous list on-premises instances call. It can be
   *             used to return the next set of on-premises instances in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of the list on-premises instances operation.</p>
 * @public
 */
export interface ListOnPremisesInstancesOutput {
  /**
   * <p>The list of matching on-premises instance names.</p>
   * @public
   */
  instanceNames?: string[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list on-premises instances call to return the next set of
   *             on-premises instances in the list.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p> The ARN of a CodeDeploy resource. <code>ListTagsForResource</code> returns all the
   *             tags associated with the resource that is identified by the <code>ResourceArn</code>.
   *         </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An identifier returned from the previous <code>ListTagsForResource</code> call. It can
   *             be used to return the next set of applications in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p> A list of tags returned by <code>ListTagsForResource</code>. The tags are associated
   *             with the resource identified by the input <code>ResourceArn</code> parameter. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusInput {
  /**
   * <p> The unique ID of a deployment. Pass this ID to a Lambda function that
   *             validates a deployment lifecycle event. </p>
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * <p> The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is
   *             specified in the <code>hooks</code> section of the AppSpec file. </p>
   * @public
   */
  lifecycleEventHookExecutionId?: string | undefined;

  /**
   * <p>The result of a Lambda function that validates a deployment lifecycle
   *             event. The values listed in <b>Valid Values</b> are valid for
   *             lifecycle statuses in general; however, only <code>Succeeded</code> and
   *                 <code>Failed</code> can be passed successfully in your API call.</p>
   * @public
   */
  status?: LifecycleEventStatus | undefined;
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusOutput {
  /**
   * <p>The execution ID of the lifecycle event hook. A hook is specified in the
   *                 <code>hooks</code> section of the deployment's AppSpec file.</p>
   * @public
   */
  lifecycleEventHookExecutionId?: string | undefined;
}

/**
 * <p>Represents the input of a RegisterApplicationRevision operation.</p>
 * @public
 */
export interface RegisterApplicationRevisionInput {
  /**
   * <p>The name of an CodeDeploy application associated with the user or Amazon Web Services account.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>A comment about the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information about the application revision to register, including type and
   *             location.</p>
   * @public
   */
  revision: RevisionLocation | undefined;
}

/**
 * <p>Represents the input of the register on-premises instance operation.</p>
 * @public
 */
export interface RegisterOnPremisesInstanceInput {
  /**
   * <p>The name of the on-premises instance to register.</p>
   * @public
   */
  instanceName: string | undefined;

  /**
   * <p>The ARN of the IAM session to associate with the on-premises
   *             instance.</p>
   * @public
   */
  iamSessionArn?: string | undefined;

  /**
   * <p>The ARN of the user to associate with the on-premises instance.</p>
   * @public
   */
  iamUserArn?: string | undefined;
}

/**
 * <p>Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code>
 *             operation.</p>
 * @public
 */
export interface RemoveTagsFromOnPremisesInstancesInput {
  /**
   * <p>The tag key-value pairs to remove from the on-premises instances.</p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>The names of the on-premises instances from which to remove tags.</p>
   * @public
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface SkipWaitTimeForInstanceTerminationInput {
  /**
   * <p> The unique ID of a blue/green deployment for which you want to skip the instance
   *             termination wait time. </p>
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * <p> Represents the input of a <code>StopDeployment</code> operation. </p>
 * @public
 */
export interface StopDeploymentInput {
  /**
   * <p> The unique ID of a deployment. </p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p> Indicates, when a deployment is stopped, whether instances that have been updated
   *             should be rolled back to the previous version of the application revision. </p>
   * @public
   */
  autoRollbackEnabled?: boolean | undefined;
}

/**
 * <p> Represents the output of a <code>StopDeployment</code> operation. </p>
 * @public
 */
export interface StopDeploymentOutput {
  /**
   * <p>The status of the stop deployment operation:</p>
   *          <ul>
   *             <li>
   *                <p>Pending: The stop operation is pending.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded: The stop operation was successful.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: StopStatus | undefined;

  /**
   * <p>An accompanying status message.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p> The ARN of a resource, such as a CodeDeploy application or deployment group. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A list of tags that <code>TagResource</code> associates with a resource. The resource
   *             is identified by the <code>ResourceArn</code> input parameter. </p>
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
   * <p> The Amazon Resource Name (ARN) that specifies from which resource to disassociate the
   *             tags with the keys in the <code>TagKeys</code> input parameter. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A list of keys of <code>Tag</code> objects. The <code>Tag</code> objects identified
   *             by the keys are disassociated from the resource specified by the
   *                 <code>ResourceArn</code> input parameter. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Represents the input of an <code>UpdateApplication</code> operation.</p>
 * @public
 */
export interface UpdateApplicationInput {
  /**
   * <p>The current name of the application you want to change.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The new name to give the application.</p>
   * @public
   */
  newApplicationName?: string | undefined;
}

/**
 * <p>Represents the input of an <code>UpdateDeploymentGroup</code> operation.</p>
 * @public
 */
export interface UpdateDeploymentGroupInput {
  /**
   * <p>The application name that corresponds to the deployment group to update.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The current name of the deployment group.</p>
   * @public
   */
  currentDeploymentGroupName: string | undefined;

  /**
   * <p>The new name of the deployment group, if you want to change it.</p>
   * @public
   */
  newDeploymentGroupName?: string | undefined;

  /**
   * <p>The replacement deployment configuration name to use, if you want to change it.</p>
   * @public
   */
  deploymentConfigName?: string | undefined;

  /**
   * <p>The replacement set of Amazon EC2 tags on which to filter, if you want to
   *             change them. To keep the existing tags, enter their names. To remove tags, do not enter
   *             any tag names.</p>
   * @public
   */
  ec2TagFilters?: EC2TagFilter[] | undefined;

  /**
   * <p>The replacement set of on-premises instance tags on which to filter, if you want to
   *             change them. To keep the existing tags, enter their names. To remove tags, do not enter
   *             any tag names.</p>
   * @public
   */
  onPremisesInstanceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>The replacement list of Auto Scaling groups to be included in the deployment
   *             group, if you want to change them.</p>
   *          <ul>
   *             <li>
   *                <p>To keep the Auto Scaling groups, enter their names or do not specify this
   *                     parameter. </p>
   *             </li>
   *             <li>
   *                <p>To remove Auto Scaling groups, specify a non-null empty list of Auto Scaling group names to detach all CodeDeploy-managed Auto Scaling lifecycle hooks. For examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html#troubleshooting-auto-scaling-heartbeat">Amazon EC2 instances in an Amazon EC2 Auto Scaling group fail to
   *                         launch and receive the error "Heartbeat Timeout"</a> in the
   *                             <i>CodeDeploy User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * <p>A replacement ARN for the service role, if you want to change it.</p>
   * @public
   */
  serviceRoleArn?: string | undefined;

  /**
   * <p>Information about triggers to change when the deployment group is updated. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html">Edit a Trigger in a
   *                 CodeDeploy Deployment Group</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   * @public
   */
  triggerConfigurations?: TriggerConfig[] | undefined;

  /**
   * <p>Information to add or change about Amazon CloudWatch alarms when the deployment group
   *             is updated.</p>
   * @public
   */
  alarmConfiguration?: AlarmConfiguration | undefined;

  /**
   * <p>Information for an automatic rollback configuration that is added or changed when a
   *             deployment group is updated.</p>
   * @public
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration | undefined;

  /**
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *          <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *          <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   * @public
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | undefined;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   * @public
   */
  deploymentStyle?: DeploymentStyle | undefined;

  /**
   * <p>Information about blue/green deployment options for a deployment group.</p>
   * @public
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;

  /**
   * <p>Information about the load balancer used in a deployment.</p>
   * @public
   */
  loadBalancerInfo?: LoadBalancerInfo | undefined;

  /**
   * <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only Amazon EC2 instances identified by all the tag
   *             groups.</p>
   * @public
   */
  ec2TagSet?: EC2TagSet | undefined;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   * @public
   */
  ecsServices?: ECSService[] | undefined;

  /**
   * <p>Information about an on-premises instance tag set. The deployment group includes only
   *             on-premises instances identified by all the tag groups.</p>
   * @public
   */
  onPremisesTagSet?: OnPremisesTagSet | undefined;

  /**
   * <p>This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html">Integrating
   *                 CodeDeploy with Amazon EC2 Auto Scaling</a> in the <i>CodeDeploy User Guide</i>.</p>
   *          <p>Set <code>terminationHookEnabled</code> to <code>true</code> to have CodeDeploy install a termination hook into your Auto Scaling group when you update a
   *             deployment group. When this hook is installed, CodeDeploy will perform
   *             termination deployments.</p>
   *          <p>For information about termination deployments, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors-hook-enable">Enabling termination deployments during Auto Scaling scale-in events</a> in the
   *             <i>CodeDeploy User Guide</i>.</p>
   *          <p>For more information about Auto Scaling scale-in events, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html#as-lifecycle-scale-in">Scale in</a> topic in the <i>Amazon EC2 Auto Scaling User
   *                 Guide</i>.</p>
   * @public
   */
  terminationHookEnabled?: boolean | undefined;
}

/**
 * <p>Represents the output of an <code>UpdateDeploymentGroup</code> operation.</p>
 * @public
 */
export interface UpdateDeploymentGroupOutput {
  /**
   * <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, CodeDeploy successfully removed all
   *             corresponding Auto Scaling lifecycle event hooks from the Amazon Web Services account. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon Web Services account.</p>
   * @public
   */
  hooksNotCleanedUp?: AutoScalingGroup[] | undefined;
}
