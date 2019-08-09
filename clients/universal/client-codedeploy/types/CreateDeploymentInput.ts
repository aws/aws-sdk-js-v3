import { _RevisionLocation } from "./_RevisionLocation";
import { _TargetInstances } from "./_TargetInstances";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a CreateDeployment operation.</p>
 */
export interface CreateDeploymentInput {
  /**
   * <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS account.</p>
   */
  applicationName: string;

  /**
   * <p>The name of the deployment group.</p>
   */
  deploymentGroupName?: string;

  /**
   * <p> The type and location of the revision to deploy. </p>
   */
  revision?: _RevisionLocation;

  /**
   * <p>The name of a deployment configuration associated with the IAM user or AWS account.</p> <p>If not specified, the value configured in the deployment group is used as the default. If the deployment group does not have a deployment configuration associated with it, CodeDeployDefault.OneAtATime is used by default.</p>
   */
  deploymentConfigName?: string;

  /**
   * <p>A comment about the deployment.</p>
   */
  description?: string;

  /**
   * <p> If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails, the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop. </p> <p> If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. </p> <p> During a deployment, the AWS CodeDeploy agent runs the scripts specified for ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. </p> <p> If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use <code>ignoreApplicationStopFailures</code> to specify that the ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored. </p>
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   * <p> Information about the instances that belong to the replacement environment in a blue/green deployment. </p>
   */
  targetInstances?: _TargetInstances;

  /**
   * <p>Configuration information for an automatic rollback that is added when a deployment is created.</p>
   */
  autoRollbackConfiguration?: _AutoRollbackConfiguration;

  /**
   * <p> Indicates whether to deploy to all instances or only to instances that are not running the latest application revision. </p>
   */
  updateOutdatedInstancesOnly?: boolean;

  /**
   * <p>Information about how AWS CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment.</p> <p>The fileExistsBehavior parameter takes any of the following values:</p> <ul> <li> <p>DISALLOW: The deployment fails. This is also the default behavior if no option is specified.</p> </li> <li> <p>OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.</p> </li> <li> <p>RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.</p> </li> </ul>
   */
  fileExistsBehavior?: "DISALLOW" | "OVERWRITE" | "RETAIN" | string;

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
