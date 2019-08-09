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
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a CreateDeploymentGroup operation.</p>
 */
export interface CreateDeploymentGroupInput {
  /**
   * <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS account.</p>
   */
  applicationName: string;

  /**
   * <p>The name of a new deployment group for the specified application.</p>
   */
  deploymentGroupName: string;

  /**
   * <p>If specified, the deployment configuration name can be either one of the predefined configurations provided with AWS CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation.</p> <p>CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a configuration isn't specified for the deployment or deployment group.</p> <p>For more information about the predefined deployment configurations in AWS CodeDeploy, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html">Working with Deployment Groups in AWS CodeDeploy</a> in the AWS CodeDeploy User Guide.</p>
   */
  deploymentConfigName?: string;

  /**
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.</p>
   */
  ec2TagFilters?: Array<_EC2TagFilter> | Iterable<_EC2TagFilter>;

  /**
   * <p>The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags. Cannot be used in the same call as OnPremisesTagSet.</p>
   */
  onPremisesInstanceTagFilters?: Array<_TagFilter> | Iterable<_TagFilter>;

  /**
   * <p>A list of associated Amazon EC2 Auto Scaling groups.</p>
   */
  autoScalingGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A service role ARN that allows AWS CodeDeploy to act on the user's behalf when interacting with AWS services.</p>
   */
  serviceRoleArn: string;

  /**
   * <p>Information about triggers to create when the deployment group is created. For examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html">Create a Trigger for an AWS CodeDeploy Event</a> in the AWS CodeDeploy User Guide.</p>
   */
  triggerConfigurations?: Array<_TriggerConfig> | Iterable<_TriggerConfig>;

  /**
   * <p>Information to add about Amazon CloudWatch alarms when the deployment group is created.</p>
   */
  alarmConfiguration?: _AlarmConfiguration;

  /**
   * <p>Configuration information for an automatic rollback that is added when a deployment group is created.</p>
   */
  autoRollbackConfiguration?: _AutoRollbackConfiguration;

  /**
   * <p>Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.</p>
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
   * <p>Information about groups of tags applied to EC2 instances. The deployment group includes only EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.</p>
   */
  ec2TagSet?: _EC2TagSet;

  /**
   * <p> The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;:&lt;servicename&gt;</code>. </p>
   */
  ecsServices?: Array<_ECSService> | Iterable<_ECSService>;

  /**
   * <p>Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all of the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</p>
   */
  onPremisesTagSet?: _OnPremisesTagSet;

  /**
   * <p> The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. </p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
