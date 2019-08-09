import { _EC2TagFilter } from "./_EC2TagFilter";
import { _TagFilter } from "./_TagFilter";
import { _TriggerConfig } from "./_TriggerConfig";
import { _AlarmConfiguration } from "./_AlarmConfiguration";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { _DeploymentStyle } from "./_DeploymentStyle";
import { _BlueGreenDeploymentConfiguration } from "./_BlueGreenDeploymentConfiguration";
import { _LoadBalancerInfo } from "./_LoadBalancerInfo";
import { _EC2TagSet } from "./_EC2TagSet";
import { _ECSService } from "./_ECSService";
import { _OnPremisesTagSet } from "./_OnPremisesTagSet";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of an UpdateDeploymentGroup operation.</p>
 */
export interface UpdateDeploymentGroupInput {
  /**
   * <p>The application name that corresponds to the deployment group to update.</p>
   */
  applicationName: string;

  /**
   * <p>The current name of the deployment group.</p>
   */
  currentDeploymentGroupName: string;

  /**
   * <p>The new name of the deployment group, if you want to change it.</p>
   */
  newDeploymentGroupName?: string;

  /**
   * <p>The replacement deployment configuration name to use, if you want to change it.</p>
   */
  deploymentConfigName?: string;

  /**
   * <p>The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.</p>
   */
  ec2TagFilters?: Array<_EC2TagFilter> | Iterable<_EC2TagFilter>;

  /**
   * <p>The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names.</p>
   */
  onPremisesInstanceTagFilters?: Array<_TagFilter> | Iterable<_TagFilter>;

  /**
   * <p>The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them. To keep the Auto Scaling groups, enter their names. To remove Auto Scaling groups, do not enter any Auto Scaling group names.</p>
   */
  autoScalingGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A replacement ARN for the service role, if you want to change it.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>Information about triggers to change when the deployment group is updated. For examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html">Modify Triggers in an AWS CodeDeploy Deployment Group</a> in the AWS CodeDeploy User Guide.</p>
   */
  triggerConfigurations?: Array<_TriggerConfig> | Iterable<_TriggerConfig>;

  /**
   * <p>Information to add or change about Amazon CloudWatch alarms when the deployment group is updated.</p>
   */
  alarmConfiguration?: _AlarmConfiguration;

  /**
   * <p>Information for an automatic rollback configuration that is added or changed when a deployment group is updated.</p>
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
   * <p>Information about the load balancer used in a deployment.</p>
   */
  loadBalancerInfo?: _LoadBalancerInfo;

  /**
   * <p>Information about groups of tags applied to on-premises instances. The deployment group includes only EC2 instances identified by all the tag groups.</p>
   */
  ec2TagSet?: _EC2TagSet;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. </p>
   */
  ecsServices?: Array<_ECSService> | Iterable<_ECSService>;

  /**
   * <p>Information about an on-premises instance tag set. The deployment group includes only on-premises instances identified by all the tag groups.</p>
   */
  onPremisesTagSet?: _OnPremisesTagSet;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
