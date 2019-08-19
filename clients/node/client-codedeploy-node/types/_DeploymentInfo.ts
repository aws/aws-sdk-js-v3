import {
  _RevisionLocation,
  _UnmarshalledRevisionLocation
} from "./_RevisionLocation";
import {
  _ErrorInformation,
  _UnmarshalledErrorInformation
} from "./_ErrorInformation";
import {
  _DeploymentOverview,
  _UnmarshalledDeploymentOverview
} from "./_DeploymentOverview";
import {
  _AutoRollbackConfiguration,
  _UnmarshalledAutoRollbackConfiguration
} from "./_AutoRollbackConfiguration";
import { _RollbackInfo, _UnmarshalledRollbackInfo } from "./_RollbackInfo";
import {
  _DeploymentStyle,
  _UnmarshalledDeploymentStyle
} from "./_DeploymentStyle";
import {
  _TargetInstances,
  _UnmarshalledTargetInstances
} from "./_TargetInstances";
import {
  _BlueGreenDeploymentConfiguration,
  _UnmarshalledBlueGreenDeploymentConfiguration
} from "./_BlueGreenDeploymentConfiguration";
import {
  _LoadBalancerInfo,
  _UnmarshalledLoadBalancerInfo
} from "./_LoadBalancerInfo";

/**
 * <p>Information about a deployment.</p>
 */
export interface _DeploymentInfo {
  /**
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * <p> The deployment group name. </p>
   */
  deploymentGroupName?: string;

  /**
   * <p> The deployment configuration name. </p>
   */
  deploymentConfigName?: string;

  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p>Information about the application revision that was deployed to the deployment group before the most recent successful deployment.</p>
   */
  previousRevision?: _RevisionLocation;

  /**
   * <p>Information about the location of stored application artifacts and the service from which to retrieve them.</p>
   */
  revision?: _RevisionLocation;

  /**
   * <p>The current state of the deployment as a whole.</p>
   */
  status?:
    | "Created"
    | "Queued"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Stopped"
    | "Ready"
    | string;

  /**
   * <p>Information about any error associated with this deployment.</p>
   */
  errorInformation?: _ErrorInformation;

  /**
   * <p>A timestamp that indicates when the deployment was created.</p>
   */
  createTime?: Date | string | number;

  /**
   * <p>A timestamp that indicates when the deployment was deployed to the deployment group.</p> <p>In some cases, the reported value of the start time might be later than the complete time. This is due to differences in the clock settings of backend servers that participate in the deployment process.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>A timestamp that indicates when the deployment was complete.</p>
   */
  completeTime?: Date | string | number;

  /**
   * <p>A summary of the deployment status of the instances in the deployment.</p>
   */
  deploymentOverview?: _DeploymentOverview;

  /**
   * <p>A comment about the deployment.</p>
   */
  description?: string;

  /**
   * <p>The means by which the deployment was created:</p> <ul> <li> <p>user: A user created the deployment.</p> </li> <li> <p>autoscaling: Amazon EC2 Auto Scaling created the deployment.</p> </li> <li> <p>codeDeployRollback: A rollback process created the deployment.</p> </li> </ul>
   */
  creator?: "user" | "autoscaling" | "codeDeployRollback" | string;

  /**
   * <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if <code>ApplicationStop</code> fails, the deployment continues with DownloadBundle. If <code>BeforeBlockTraffic</code> fails, the deployment continues with <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment continues with <code>ApplicationStop</code>. </p> <p> If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. </p> <p> During a deployment, the AWS CodeDeploy agent runs the scripts specified for <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. </p> <p> If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use <code>ignoreApplicationStopFailures</code> to specify that the <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and <code>AfterBlockTraffic</code> failures should be ignored. </p>
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   * <p>Information about the automatic rollback configuration associated with the deployment.</p>
   */
  autoRollbackConfiguration?: _AutoRollbackConfiguration;

  /**
   * <p>Indicates whether only instances that are not running the latest application revision are to be deployed to.</p>
   */
  updateOutdatedInstancesOnly?: boolean;

  /**
   * <p>Information about a deployment rollback.</p>
   */
  rollbackInfo?: _RollbackInfo;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: _DeploymentStyle;

  /**
   * <p>Information about the instances that belong to the replacement environment in a blue/green deployment.</p>
   */
  targetInstances?: _TargetInstances;

  /**
   * <p>Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified. Otherwise, 'true' as soon as the termination wait period starts.</p>
   */
  instanceTerminationWaitTimeStarted?: boolean;

  /**
   * <p>Information about blue/green deployment options for this deployment.</p>
   */
  blueGreenDeploymentConfiguration?: _BlueGreenDeploymentConfiguration;

  /**
   * <p>Information about the load balancer used in the deployment.</p>
   */
  loadBalancerInfo?: _LoadBalancerInfo;

  /**
   * <p>Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.</p>
   */
  additionalDeploymentStatusInfo?: string;

  /**
   * <p>Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <ul> <li> <p>DISALLOW: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p>OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p>RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>
   */
  fileExistsBehavior?: "DISALLOW" | "OVERWRITE" | "RETAIN" | string;

  /**
   * <p>Messages that contain information about the status of a deployment.</p>
   */
  deploymentStatusMessages?: Array<string> | Iterable<string>;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;
}

export interface _UnmarshalledDeploymentInfo extends _DeploymentInfo {
  /**
   * <p>Information about the application revision that was deployed to the deployment group before the most recent successful deployment.</p>
   */
  previousRevision?: _UnmarshalledRevisionLocation;

  /**
   * <p>Information about the location of stored application artifacts and the service from which to retrieve them.</p>
   */
  revision?: _UnmarshalledRevisionLocation;

  /**
   * <p>Information about any error associated with this deployment.</p>
   */
  errorInformation?: _UnmarshalledErrorInformation;

  /**
   * <p>A timestamp that indicates when the deployment was created.</p>
   */
  createTime?: Date;

  /**
   * <p>A timestamp that indicates when the deployment was deployed to the deployment group.</p> <p>In some cases, the reported value of the start time might be later than the complete time. This is due to differences in the clock settings of backend servers that participate in the deployment process.</p>
   */
  startTime?: Date;

  /**
   * <p>A timestamp that indicates when the deployment was complete.</p>
   */
  completeTime?: Date;

  /**
   * <p>A summary of the deployment status of the instances in the deployment.</p>
   */
  deploymentOverview?: _UnmarshalledDeploymentOverview;

  /**
   * <p>Information about the automatic rollback configuration associated with the deployment.</p>
   */
  autoRollbackConfiguration?: _UnmarshalledAutoRollbackConfiguration;

  /**
   * <p>Information about a deployment rollback.</p>
   */
  rollbackInfo?: _UnmarshalledRollbackInfo;

  /**
   * <p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: _UnmarshalledDeploymentStyle;

  /**
   * <p>Information about the instances that belong to the replacement environment in a blue/green deployment.</p>
   */
  targetInstances?: _UnmarshalledTargetInstances;

  /**
   * <p>Information about blue/green deployment options for this deployment.</p>
   */
  blueGreenDeploymentConfiguration?: _UnmarshalledBlueGreenDeploymentConfiguration;

  /**
   * <p>Information about the load balancer used in the deployment.</p>
   */
  loadBalancerInfo?: _UnmarshalledLoadBalancerInfo;

  /**
   * <p>Messages that contain information about the status of a deployment.</p>
   */
  deploymentStatusMessages?: Array<string>;
}
