import { _EC2TagFilter, _UnmarshalledEC2TagFilter } from "./_EC2TagFilter";
import { _TagFilter, _UnmarshalledTagFilter } from "./_TagFilter";
import {
  _AutoScalingGroup,
  _UnmarshalledAutoScalingGroup
} from "./_AutoScalingGroup";
import {
  _RevisionLocation,
  _UnmarshalledRevisionLocation
} from "./_RevisionLocation";
import { _TriggerConfig, _UnmarshalledTriggerConfig } from "./_TriggerConfig";
import {
  _AlarmConfiguration,
  _UnmarshalledAlarmConfiguration
} from "./_AlarmConfiguration";
import {
  _AutoRollbackConfiguration,
  _UnmarshalledAutoRollbackConfiguration
} from "./_AutoRollbackConfiguration";
import {
  _DeploymentStyle,
  _UnmarshalledDeploymentStyle
} from "./_DeploymentStyle";
import {
  _BlueGreenDeploymentConfiguration,
  _UnmarshalledBlueGreenDeploymentConfiguration
} from "./_BlueGreenDeploymentConfiguration";
import {
  _LoadBalancerInfo,
  _UnmarshalledLoadBalancerInfo
} from "./_LoadBalancerInfo";
import {
  _LastDeploymentInfo,
  _UnmarshalledLastDeploymentInfo
} from "./_LastDeploymentInfo";
import { _EC2TagSet, _UnmarshalledEC2TagSet } from "./_EC2TagSet";
import {
  _OnPremisesTagSet,
  _UnmarshalledOnPremisesTagSet
} from "./_OnPremisesTagSet";
import { _ECSService, _UnmarshalledECSService } from "./_ECSService";

/**
 * <p>Information about a deployment group.</p>
 */
export interface _DeploymentGroupInfo {
  /**
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * <p>The deployment group ID.</p>
   */
  deploymentGroupId?: string;

  /**
   * <p>The deployment group name.</p>
   */
  deploymentGroupName?: string;

  /**
   * <p>The deployment configuration name.</p>
   */
  deploymentConfigName?: string;

  /**
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.</p>
   */
  ec2TagFilters?: Array<_EC2TagFilter> | Iterable<_EC2TagFilter>;

  /**
   * <p>The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.</p>
   */
  onPremisesInstanceTagFilters?: Array<_TagFilter> | Iterable<_TagFilter>;

  /**
   * <p>A list of associated Auto Scaling groups.</p>
   */
  autoScalingGroups?: Array<_AutoScalingGroup> | Iterable<_AutoScalingGroup>;

  /**
   * <p>A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html">Create a Service Role for AWS CodeDeploy</a> in the <i>AWS CodeDeploy User Guide</i>.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>Information about the deployment group's target revision, including type and location.</p>
   */
  targetRevision?: _RevisionLocation;

  /**
   * <p>Information about triggers associated with the deployment group.</p>
   */
  triggerConfigurations?: Array<_TriggerConfig> | Iterable<_TriggerConfig>;

  /**
   * <p>A list of alarms associated with the deployment group.</p>
   */
  alarmConfiguration?: _AlarmConfiguration;

  /**
   * <p>Information about the automatic rollback configuration associated with the deployment group.</p>
   */
  autoRollbackConfiguration?: _AutoRollbackConfiguration;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: _DeploymentStyle;

  /**
   * <p>Information about blue/green deployment options for a deployment group.</p>
   */
  blueGreenDeploymentConfiguration?: _BlueGreenDeploymentConfiguration;

  /**
   * <p>Information about the load balancer to use in a deployment.</p>
   */
  loadBalancerInfo?: _LoadBalancerInfo;

  /**
   * <p>Information about the most recent successful deployment to the deployment group.</p>
   */
  lastSuccessfulDeployment?: _LastDeploymentInfo;

  /**
   * <p>Information about the most recent attempted deployment to the deployment group.</p>
   */
  lastAttemptedDeployment?: _LastDeploymentInfo;

  /**
   * <p>Information about groups of tags applied to an EC2 instance. The deployment group includes only EC2 instances identified by all of the tag groups. Cannot be used in the same call as ec2TagFilters.</p>
   */
  ec2TagSet?: _EC2TagSet;

  /**
   * <p>Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</p>
   */
  onPremisesTagSet?: _OnPremisesTagSet;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. </p>
   */
  ecsServices?: Array<_ECSService> | Iterable<_ECSService>;
}

export interface _UnmarshalledDeploymentGroupInfo extends _DeploymentGroupInfo {
  /**
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.</p>
   */
  ec2TagFilters?: Array<_UnmarshalledEC2TagFilter>;

  /**
   * <p>The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.</p>
   */
  onPremisesInstanceTagFilters?: Array<_UnmarshalledTagFilter>;

  /**
   * <p>A list of associated Auto Scaling groups.</p>
   */
  autoScalingGroups?: Array<_UnmarshalledAutoScalingGroup>;

  /**
   * <p>Information about the deployment group's target revision, including type and location.</p>
   */
  targetRevision?: _UnmarshalledRevisionLocation;

  /**
   * <p>Information about triggers associated with the deployment group.</p>
   */
  triggerConfigurations?: Array<_UnmarshalledTriggerConfig>;

  /**
   * <p>A list of alarms associated with the deployment group.</p>
   */
  alarmConfiguration?: _UnmarshalledAlarmConfiguration;

  /**
   * <p>Information about the automatic rollback configuration associated with the deployment group.</p>
   */
  autoRollbackConfiguration?: _UnmarshalledAutoRollbackConfiguration;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: _UnmarshalledDeploymentStyle;

  /**
   * <p>Information about blue/green deployment options for a deployment group.</p>
   */
  blueGreenDeploymentConfiguration?: _UnmarshalledBlueGreenDeploymentConfiguration;

  /**
   * <p>Information about the load balancer to use in a deployment.</p>
   */
  loadBalancerInfo?: _UnmarshalledLoadBalancerInfo;

  /**
   * <p>Information about the most recent successful deployment to the deployment group.</p>
   */
  lastSuccessfulDeployment?: _UnmarshalledLastDeploymentInfo;

  /**
   * <p>Information about the most recent attempted deployment to the deployment group.</p>
   */
  lastAttemptedDeployment?: _UnmarshalledLastDeploymentInfo;

  /**
   * <p>Information about groups of tags applied to an EC2 instance. The deployment group includes only EC2 instances identified by all of the tag groups. Cannot be used in the same call as ec2TagFilters.</p>
   */
  ec2TagSet?: _UnmarshalledEC2TagSet;

  /**
   * <p>Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</p>
   */
  onPremisesTagSet?: _UnmarshalledOnPremisesTagSet;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. </p>
   */
  ecsServices?: Array<_UnmarshalledECSService>;
}
