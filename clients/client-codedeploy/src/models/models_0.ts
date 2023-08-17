// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeDeployServiceException as __BaseException } from "./CodeDeployServiceException";

/**
 * @public
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Represents the input of, and adds tags to, an on-premises instance operation.</p>
 */
export interface AddTagsToOnPremisesInstancesInput {
  /**
   * @public
   * <p>The tag key-value pairs to add to the on-premises instances.</p>
   *         <p>Keys and values are both required. Keys cannot be null or empty strings. Value-only
   *             tags are not allowed.</p>
   */
  tags: Tag[] | undefined;

  /**
   * @public
   * <p>The names of the on-premises instances to which to add tags.</p>
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 * <p>The maximum number of allowed on-premises instances in a single call was
 *             exceeded.</p>
 */
export class InstanceLimitExceededException extends __BaseException {
  readonly name: "InstanceLimitExceededException" = "InstanceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceLimitExceededException, __BaseException>) {
    super({
      name: "InstanceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>An on-premises instance name was not specified.</p>
 */
export class InstanceNameRequiredException extends __BaseException {
  readonly name: "InstanceNameRequiredException" = "InstanceNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNameRequiredException, __BaseException>) {
    super({
      name: "InstanceNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNameRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The specified on-premises instance is not registered.</p>
 */
export class InstanceNotRegisteredException extends __BaseException {
  readonly name: "InstanceNotRegisteredException" = "InstanceNotRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNotRegisteredException, __BaseException>) {
    super({
      name: "InstanceNotRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNotRegisteredException.prototype);
  }
}

/**
 * @public
 * <p>The on-premises instance name was specified in an invalid format.</p>
 */
export class InvalidInstanceNameException extends __BaseException {
  readonly name: "InvalidInstanceNameException" = "InvalidInstanceNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceNameException, __BaseException>) {
    super({
      name: "InvalidInstanceNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceNameException.prototype);
  }
}

/**
 * @public
 * <p>The tag was specified in an invalid format.</p>
 */
export class InvalidTagException extends __BaseException {
  readonly name: "InvalidTagException" = "InvalidTagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * @public
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>A tag was not specified.</p>
 */
export class TagRequiredException extends __BaseException {
  readonly name: "TagRequiredException" = "TagRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagRequiredException, __BaseException>) {
    super({
      name: "TagRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagRequiredException.prototype);
  }
}

/**
 * @public
 * <p>Information about an alarm.</p>
 */
export interface Alarm {
  /**
   * @public
   * <p>The name of the alarm. Maximum length is 255 characters. Each alarm name can be used
   *             only once in a list of alarms.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about alarms associated with a deployment or deployment group.</p>
 */
export interface AlarmConfiguration {
  /**
   * @public
   * <p>Indicates whether the alarm configuration is enabled.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>Indicates whether a deployment should continue if information about the current state
   *             of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>true</code>: The deployment proceeds even if alarm status information
   *                     can't be retrieved from Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>false</code>: The deployment stops if alarm status information can't be
   *                     retrieved from Amazon CloudWatch.</p>
   *             </li>
   *          </ul>
   */
  ignorePollAlarmFailure?: boolean;

  /**
   * @public
   * <p>A list of alarms configured for the deployment or deployment group. A maximum of 10
   *             alarms can be added.</p>
   */
  alarms?: Alarm[];
}

/**
 * @public
 * <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 */
export class AlarmsLimitExceededException extends __BaseException {
  readonly name: "AlarmsLimitExceededException" = "AlarmsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlarmsLimitExceededException, __BaseException>) {
    super({
      name: "AlarmsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlarmsLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>An application with the specified name with the IAM user or Amazon Web Services account already exists.</p>
 */
export class ApplicationAlreadyExistsException extends __BaseException {
  readonly name: "ApplicationAlreadyExistsException" = "ApplicationAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationAlreadyExistsException, __BaseException>) {
    super({
      name: "ApplicationAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p>The application does not exist with the IAM user or Amazon Web Services account.</p>
 */
export class ApplicationDoesNotExistException extends __BaseException {
  readonly name: "ApplicationDoesNotExistException" = "ApplicationDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationDoesNotExistException, __BaseException>) {
    super({
      name: "ApplicationDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationDoesNotExistException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ComputePlatform = {
  ECS: "ECS",
  LAMBDA: "Lambda",
  SERVER: "Server",
} as const;

/**
 * @public
 */
export type ComputePlatform = (typeof ComputePlatform)[keyof typeof ComputePlatform];

/**
 * @public
 * <p>Information about an application.</p>
 */
export interface ApplicationInfo {
  /**
   * @public
   * <p>The application ID.</p>
   */
  applicationId?: string;

  /**
   * @public
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>The time at which the application was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>True if the user has authenticated with GitHub for the specified application.
   *             Otherwise, false.</p>
   */
  linkedToGitHub?: boolean;

  /**
   * @public
   * <p>The name for a connection to a GitHub account.</p>
   */
  gitHubAccountName?: string;

  /**
   * @public
   * <p>The destination platform type for deployment of the application (<code>Lambda</code> or <code>Server</code>).</p>
   */
  computePlatform?: ComputePlatform | string;
}

/**
 * @public
 * <p>More applications were attempted to be created than are allowed.</p>
 */
export class ApplicationLimitExceededException extends __BaseException {
  readonly name: "ApplicationLimitExceededException" = "ApplicationLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationLimitExceededException, __BaseException>) {
    super({
      name: "ApplicationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The minimum number of required application names was not specified.</p>
 */
export class ApplicationNameRequiredException extends __BaseException {
  readonly name: "ApplicationNameRequiredException" = "ApplicationNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationNameRequiredException, __BaseException>) {
    super({
      name: "ApplicationNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationNameRequiredException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ApplicationRevisionSortBy = {
  FirstUsedTime: "firstUsedTime",
  LastUsedTime: "lastUsedTime",
  RegisterTime: "registerTime",
} as const;

/**
 * @public
 */
export type ApplicationRevisionSortBy = (typeof ApplicationRevisionSortBy)[keyof typeof ApplicationRevisionSortBy];

/**
 * @public
 * <p> A revision for an Lambda or Amazon ECS deployment that is a
 *             YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the
 *             deprecated <code>RawString</code> data type. </p>
 */
export interface AppSpecContent {
  /**
   * @public
   * <p> The YAML-formatted or JSON-formatted revision string. </p>
   *         <p> For an Lambda deployment, the content includes a Lambda
   *             function name, the alias for its original version, and the alias for its replacement
   *             version. The deployment shifts traffic from the original version of the Lambda function to the replacement version. </p>
   *         <p> For an Amazon ECS deployment, the content includes the task name, information
   *             about the load balancer that serves traffic to the container, and more. </p>
   *         <p> For both types of deployments, the content can specify Lambda functions
   *             that run at specified hooks, such as <code>BeforeInstall</code>, during a deployment.
   *         </p>
   */
  content?: string;

  /**
   * @public
   * <p> The SHA256 hash value of the revision content. </p>
   */
  sha256?: string;
}

/**
 * @public
 * <p> The specified ARN is not supported. For example, it might be an ARN for a resource
 *             that is not expected. </p>
 */
export class ArnNotSupportedException extends __BaseException {
  readonly name: "ArnNotSupportedException" = "ArnNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ArnNotSupportedException, __BaseException>) {
    super({
      name: "ArnNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ArnNotSupportedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AutoRollbackEvent = {
  DEPLOYMENT_FAILURE: "DEPLOYMENT_FAILURE",
  DEPLOYMENT_STOP_ON_ALARM: "DEPLOYMENT_STOP_ON_ALARM",
  DEPLOYMENT_STOP_ON_REQUEST: "DEPLOYMENT_STOP_ON_REQUEST",
} as const;

/**
 * @public
 */
export type AutoRollbackEvent = (typeof AutoRollbackEvent)[keyof typeof AutoRollbackEvent];

/**
 * @public
 * <p>Information about a configuration for automatically rolling back to a previous version
 *             of an application revision when a deployment is not completed successfully.</p>
 */
export interface AutoRollbackConfiguration {
  /**
   * @public
   * <p>Indicates whether a defined automatic rollback configuration is currently
   *             enabled.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The event type or types that trigger a rollback.</p>
   */
  events?: (AutoRollbackEvent | string)[];
}

/**
 * @public
 * <p>Information about an Auto Scaling group.</p>
 */
export interface AutoScalingGroup {
  /**
   * @public
   * <p>The Auto Scaling group name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An Auto Scaling lifecycle event hook name.</p>
   */
  hook?: string;
}

/**
 * @public
 * <p>Information about the location of application artifacts stored in GitHub.</p>
 */
export interface GitHubLocation {
  /**
   * @public
   * <p>The GitHub account and repository pair that stores a reference to the commit that
   *             represents the bundled artifacts for the application revision. </p>
   *         <p>Specified as account/repository.</p>
   */
  repository?: string;

  /**
   * @public
   * <p>The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the
   *             application revision.</p>
   */
  commitId?: string;
}

/**
 * @public
 * @enum
 */
export const RevisionLocationType = {
  AppSpecContent: "AppSpecContent",
  GitHub: "GitHub",
  S3: "S3",
  String: "String",
} as const;

/**
 * @public
 */
export type RevisionLocationType = (typeof RevisionLocationType)[keyof typeof RevisionLocationType];

/**
 * @public
 * @enum
 */
export const BundleType = {
  JSON: "JSON",
  Tar: "tar",
  TarGZip: "tgz",
  YAML: "YAML",
  Zip: "zip",
} as const;

/**
 * @public
 */
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/**
 * @public
 * <p>Information about the location of application artifacts stored in Amazon S3.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket where the application revision is
   *             stored.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The file type of the application revision. Must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>tar</code>: A tar archive file.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>tgz</code>: A compressed tar archive file.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>zip</code>: A zip archive file.</p>
   *             </li>
   *          </ul>
   */
  bundleType?: BundleType | string;

  /**
   * @public
   * <p>A specific version of the Amazon S3 object that represents the bundled
   *             artifacts for the application revision.</p>
   *         <p>If the version is not specified, the system uses the most recent version by
   *             default.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The ETag of the Amazon S3 object that represents the bundled artifacts for the
   *             application revision.</p>
   *         <p>If the ETag is not specified as an input parameter, ETag validation of the object is
   *             skipped.</p>
   */
  eTag?: string;
}

/**
 * @public
 * @deprecated
 *
 * <p>A revision for an Lambda deployment that is a YAML-formatted or
 *             JSON-formatted string. For Lambda deployments, the revision is the same
 *             as the AppSpec file.</p>
 */
export interface RawString {
  /**
   * @public
   * <p>The YAML-formatted or JSON-formatted revision string. It includes information about
   *             which Lambda function to update and optional Lambda functions
   *             that validate deployment lifecycle events.</p>
   */
  content?: string;

  /**
   * @public
   * <p>The SHA256 hash value of the revision content.</p>
   */
  sha256?: string;
}

/**
 * @public
 * <p>Information about the location of an application revision.</p>
 */
export interface RevisionLocation {
  /**
   * @public
   * <p>The type of application revision:</p>
   *         <ul>
   *             <li>
   *                 <p>S3: An application revision stored in Amazon S3.</p>
   *             </li>
   *             <li>
   *                 <p>GitHub: An application revision stored in GitHub (EC2/On-premises deployments
   *                     only).</p>
   *             </li>
   *             <li>
   *                 <p>String: A YAML-formatted or JSON-formatted string (Lambda
   *                     deployments only).</p>
   *             </li>
   *             <li>
   *                 <p>AppSpecContent: An <code>AppSpecContent</code> object that contains the
   *                     contents of an AppSpec file for an Lambda or Amazon ECS
   *                     deployment. The content is formatted as JSON or YAML stored as a
   *                     RawString.</p>
   *             </li>
   *          </ul>
   */
  revisionType?: RevisionLocationType | string;

  /**
   * @public
   * <p>Information about the location of a revision stored in Amazon S3. </p>
   */
  s3Location?: S3Location;

  /**
   * @public
   * <p>Information about the location of application artifacts stored in GitHub.</p>
   */
  gitHubLocation?: GitHubLocation;

  /**
   * @public
   * @deprecated
   *
   * <p>Information about the location of an Lambda deployment revision stored
   *             as a RawString.</p>
   */
  string?: RawString;

  /**
   * @public
   * <p> The content of an AppSpec file for an Lambda or Amazon ECS
   *             deployment. The content is formatted as JSON or YAML and stored as a RawString. </p>
   */
  appSpecContent?: AppSpecContent;
}

/**
 * @public
 * <p>Represents the input of a <code>BatchGetApplicationRevisions</code> operation.</p>
 */
export interface BatchGetApplicationRevisionsInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application about which to get revision
   *             information.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>An array of <code>RevisionLocation</code> objects that specify information to get
   *             about the application revisions, including type and location. The maximum number of
   *                 <code>RevisionLocation</code> objects you can specify is 25.</p>
   */
  revisions: RevisionLocation[] | undefined;
}

/**
 * @public
 * <p>Information about an application revision.</p>
 */
export interface GenericRevisionInfo {
  /**
   * @public
   * <p>A comment about the revision.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The deployment groups for which this is the current target revision.</p>
   */
  deploymentGroups?: string[];

  /**
   * @public
   * <p>When the revision was first used by CodeDeploy.</p>
   */
  firstUsedTime?: Date;

  /**
   * @public
   * <p>When the revision was last used by CodeDeploy.</p>
   */
  lastUsedTime?: Date;

  /**
   * @public
   * <p>When the revision was registered with CodeDeploy.</p>
   */
  registerTime?: Date;
}

/**
 * @public
 * <p>Information about an application revision.</p>
 */
export interface RevisionInfo {
  /**
   * @public
   * <p>Information about the location and type of an application revision.</p>
   */
  revisionLocation?: RevisionLocation;

  /**
   * @public
   * <p>Information about an application revision, including usage details and associated
   *             deployment groups.</p>
   */
  genericRevisionInfo?: GenericRevisionInfo;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchGetApplicationRevisions</code> operation.</p>
 */
export interface BatchGetApplicationRevisionsOutput {
  /**
   * @public
   * <p>The name of the application that corresponds to the revisions.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>Additional information about the revisions, including the type and location.</p>
   */
  revisions?: RevisionInfo[];
}

/**
 * @public
 * <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 */
export class BatchLimitExceededException extends __BaseException {
  readonly name: "BatchLimitExceededException" = "BatchLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchLimitExceededException, __BaseException>) {
    super({
      name: "BatchLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The application name was specified in an invalid format.</p>
 */
export class InvalidApplicationNameException extends __BaseException {
  readonly name: "InvalidApplicationNameException" = "InvalidApplicationNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApplicationNameException, __BaseException>) {
    super({
      name: "InvalidApplicationNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApplicationNameException.prototype);
  }
}

/**
 * @public
 * <p>The revision was specified in an invalid format.</p>
 */
export class InvalidRevisionException extends __BaseException {
  readonly name: "InvalidRevisionException" = "InvalidRevisionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRevisionException, __BaseException>) {
    super({
      name: "InvalidRevisionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRevisionException.prototype);
  }
}

/**
 * @public
 * <p>The revision ID was not specified.</p>
 */
export class RevisionRequiredException extends __BaseException {
  readonly name: "RevisionRequiredException" = "RevisionRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionRequiredException, __BaseException>) {
    super({
      name: "RevisionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionRequiredException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>BatchGetApplications</code> operation.</p>
 */
export interface BatchGetApplicationsInput {
  /**
   * @public
   * <p>A list of application names separated by spaces. The maximum number of application
   *             names you can specify is 100.</p>
   */
  applicationNames: string[] | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchGetApplications</code> operation.</p>
 */
export interface BatchGetApplicationsOutput {
  /**
   * @public
   * <p>Information about the applications.</p>
   */
  applicationsInfo?: ApplicationInfo[];
}

/**
 * @public
 * <p>Represents the input of a <code>BatchGetDeploymentGroups</code> operation.</p>
 */
export interface BatchGetDeploymentGroupsInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the applicable
   *                 IAM or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The names of the deployment groups.</p>
   */
  deploymentGroupNames: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentReadyAction = {
  CONTINUE_DEPLOYMENT: "CONTINUE_DEPLOYMENT",
  STOP_DEPLOYMENT: "STOP_DEPLOYMENT",
} as const;

/**
 * @public
 */
export type DeploymentReadyAction = (typeof DeploymentReadyAction)[keyof typeof DeploymentReadyAction];

/**
 * @public
 * <p>Information about how traffic is rerouted to instances in a replacement environment in
 *             a blue/green deployment.</p>
 */
export interface DeploymentReadyOption {
  /**
   * @public
   * <p>Information about when to reroute traffic from an original environment to a
   *             replacement environment in a blue/green deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately
   *                     after the new application revision is installed on the instances in the
   *                     replacement environment.</p>
   *             </li>
   *             <li>
   *                 <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless
   *                     traffic rerouting is started using <a>ContinueDeployment</a>. If
   *                     traffic rerouting is not started before the end of the specified wait period,
   *                     the deployment status is changed to Stopped.</p>
   *             </li>
   *          </ul>
   */
  actionOnTimeout?: DeploymentReadyAction | string;

  /**
   * @public
   * <p>The number of minutes to wait before the status of a blue/green deployment is changed
   *             to Stopped if rerouting is not started manually. Applies only to the
   *                 <code>STOP_DEPLOYMENT</code> option for <code>actionOnTimeout</code>.</p>
   */
  waitTimeInMinutes?: number;
}

/**
 * @public
 * @enum
 */
export const GreenFleetProvisioningAction = {
  COPY_AUTO_SCALING_GROUP: "COPY_AUTO_SCALING_GROUP",
  DISCOVER_EXISTING: "DISCOVER_EXISTING",
} as const;

/**
 * @public
 */
export type GreenFleetProvisioningAction =
  (typeof GreenFleetProvisioningAction)[keyof typeof GreenFleetProvisioningAction];

/**
 * @public
 * <p>Information about the instances that belong to the replacement environment in a
 *             blue/green deployment.</p>
 */
export interface GreenFleetProvisioningOption {
  /**
   * @public
   * <p>The method used to add instances to a replacement environment.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DISCOVER_EXISTING</code>: Use instances that already exist or will be
   *                     created manually.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COPY_AUTO_SCALING_GROUP</code>: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling
   *                     group.</p>
   *             </li>
   *          </ul>
   */
  action?: GreenFleetProvisioningAction | string;
}

/**
 * @public
 * @enum
 */
export const InstanceAction = {
  KEEP_ALIVE: "KEEP_ALIVE",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type InstanceAction = (typeof InstanceAction)[keyof typeof InstanceAction];

/**
 * @public
 * <p>Information about whether instances in the original environment are terminated when a
 *             blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not
 *             apply to Lambda deployments. </p>
 */
export interface BlueInstanceTerminationOption {
  /**
   * @public
   * <p>The action to take on instances in the original environment after a successful
   *             blue/green deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TERMINATE</code>: Instances are terminated after a specified wait
   *                     time.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KEEP_ALIVE</code>: Instances are left running after they are
   *                     deregistered from the load balancer and removed from the deployment
   *                     group.</p>
   *             </li>
   *          </ul>
   */
  action?: InstanceAction | string;

  /**
   * @public
   * <p>For an Amazon EC2 deployment, the number of minutes to wait after a successful
   *             blue/green deployment before terminating instances from the original environment.</p>
   *
   *         <p> For an Amazon ECS deployment, the number of minutes before deleting the
   *             original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts
   *             traffic from the original (blue) task set to a replacement (green) task set. </p>
   *
   *         <p> The maximum setting is 2880 minutes (2 days). </p>
   */
  terminationWaitTimeInMinutes?: number;
}

/**
 * @public
 * <p>Information about blue/green deployment options for a deployment group.</p>
 */
export interface BlueGreenDeploymentConfiguration {
  /**
   * @public
   * <p>Information about whether to terminate instances in the original fleet during a
   *             blue/green deployment.</p>
   */
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;

  /**
   * @public
   * <p>Information about the action to take when newly provisioned instances are ready to
   *             receive traffic in a blue/green deployment.</p>
   */
  deploymentReadyOption?: DeploymentReadyOption;

  /**
   * @public
   * <p>Information about how instances are provisioned for a replacement environment in a
   *             blue/green deployment.</p>
   */
  greenFleetProvisioningOption?: GreenFleetProvisioningOption;
}

/**
 * @public
 * @enum
 */
export const DeploymentOption = {
  WITHOUT_TRAFFIC_CONTROL: "WITHOUT_TRAFFIC_CONTROL",
  WITH_TRAFFIC_CONTROL: "WITH_TRAFFIC_CONTROL",
} as const;

/**
 * @public
 */
export type DeploymentOption = (typeof DeploymentOption)[keyof typeof DeploymentOption];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  BLUE_GREEN: "BLUE_GREEN",
  IN_PLACE: "IN_PLACE",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * <p>Information about the type of deployment, either in-place or blue/green, you want to
 *             run and whether to route deployment traffic behind a load balancer.</p>
 */
export interface DeploymentStyle {
  /**
   * @public
   * <p>Indicates whether to run an in-place deployment or a blue/green deployment.</p>
   */
  deploymentType?: DeploymentType | string;

  /**
   * @public
   * <p>Indicates whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentOption?: DeploymentOption | string;
}

/**
 * @public
 * @enum
 */
export const EC2TagFilterType = {
  KEY_AND_VALUE: "KEY_AND_VALUE",
  KEY_ONLY: "KEY_ONLY",
  VALUE_ONLY: "VALUE_ONLY",
} as const;

/**
 * @public
 */
export type EC2TagFilterType = (typeof EC2TagFilterType)[keyof typeof EC2TagFilterType];

/**
 * @public
 * <p>Information about an EC2 tag filter.</p>
 */
export interface EC2TagFilter {
  /**
   * @public
   * <p>The tag filter key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag filter value.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The tag filter type:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KEY_ONLY</code>: Key only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VALUE_ONLY</code>: Value only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KEY_AND_VALUE</code>: Key and value.</p>
   *             </li>
   *          </ul>
   */
  Type?: EC2TagFilterType | string;
}

/**
 * @public
 * <p>Information about groups of Amazon EC2 instance tags.</p>
 */
export interface EC2TagSet {
  /**
   * @public
   * <p>A list that contains other lists of Amazon EC2 instance tag groups. For an
   *             instance to be included in the deployment group, it must be identified by all of the tag
   *             groups in the list.</p>
   */
  ec2TagSetList?: EC2TagFilter[][];
}

/**
 * @public
 * <p> Contains the service and cluster names used to identify an Amazon ECS
 *             deployment's target. </p>
 */
export interface ECSService {
  /**
   * @public
   * <p> The name of the target Amazon ECS service. </p>
   */
  serviceName?: string;

  /**
   * @public
   * <p> The name of the cluster that the Amazon ECS service is associated with.
   *         </p>
   */
  clusterName?: string;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  BAKING: "Baking",
  CREATED: "Created",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  QUEUED: "Queued",
  READY: "Ready",
  STOPPED: "Stopped",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * <p>Information about the most recent attempted or successful deployment to a deployment
 *             group.</p>
 */
export interface LastDeploymentInfo {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The status of the most recent deployment.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * @public
   * <p>A timestamp that indicates when the most recent deployment to the deployment group was
   *             complete.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the most recent deployment to the deployment group
   *             started.</p>
   */
  createTime?: Date;
}

/**
 * @public
 * <p>Information about a load balancer in Elastic Load Balancing to use in a deployment.
 *             Instances are registered directly with a load balancer, and traffic is routed to the
 *             load balancer.</p>
 */
export interface ELBInfo {
  /**
   * @public
   * <p>For blue/green deployments, the name of the load balancer that is used to route
   *             traffic from original instances to replacement instances in a blue/green deployment. For
   *             in-place deployments, the name of the load balancer that instances are deregistered from
   *             so they are not serving traffic during a deployment, and then re-registered with after
   *             the deployment is complete.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about a target group in Elastic Load Balancing to use in a deployment.
 *             Instances are registered as targets in a target group, and traffic is routed to the
 *             target group.</p>
 */
export interface TargetGroupInfo {
  /**
   * @public
   * <p>For blue/green deployments, the name of the target group that instances in the
   *             original environment are deregistered from, and instances in the replacement environment
   *             are registered with. For in-place deployments, the name of the target group that
   *             instances are deregistered from, so they are not serving traffic during a deployment,
   *             and then re-registered with after the deployment is complete. </p>
   */
  name?: string;
}

/**
 * @public
 * <p> Information about a listener. The listener contains the path used to route traffic
 *             that is received from the load balancer to a target group. </p>
 */
export interface TrafficRoute {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of one listener. The listener identifies the route
   *             between a target group and a load balancer. This is an array of strings with a maximum
   *             size of one. </p>
   */
  listenerArns?: string[];
}

/**
 * @public
 * <p> Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. </p>
 */
export interface TargetGroupPairInfo {
  /**
   * @public
   * <p> One pair of target groups. One is associated with the original task set. The second
   *             is associated with the task set that serves traffic after the deployment is complete.
   *         </p>
   */
  targetGroups?: TargetGroupInfo[];

  /**
   * @public
   * <p> The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete. </p>
   */
  prodTrafficRoute?: TrafficRoute;

  /**
   * @public
   * <p> An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a
   *             deployment. </p>
   */
  testTrafficRoute?: TrafficRoute;
}

/**
 * @public
 * <p>Information about the Elastic Load Balancing load balancer or target group used in a
 *             deployment.</p>
 */
export interface LoadBalancerInfo {
  /**
   * @public
   * <p>An array that contains information about the load balancer to use for load balancing
   *             in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load
   *             Balancers.</p>
   *         <note>
   *             <p> Adding more than one load balancer to the array is not supported. </p>
   *         </note>
   */
  elbInfoList?: ELBInfo[];

  /**
   * @public
   * <p>An array that contains information about the target group to use for load balancing in
   *             a deployment. In Elastic Load Balancing, target groups are used with Application Load
   *             Balancers.</p>
   *         <note>
   *             <p> Adding more than one target group to the array is not supported. </p>
   *         </note>
   */
  targetGroupInfoList?: TargetGroupInfo[];

  /**
   * @public
   * <p> The target group pair information. This is an array of
   *                 <code>TargeGroupPairInfo</code> objects with a maximum size of one. </p>
   */
  targetGroupPairInfoList?: TargetGroupPairInfo[];
}

/**
 * @public
 * @enum
 */
export const TagFilterType = {
  KEY_AND_VALUE: "KEY_AND_VALUE",
  KEY_ONLY: "KEY_ONLY",
  VALUE_ONLY: "VALUE_ONLY",
} as const;

/**
 * @public
 */
export type TagFilterType = (typeof TagFilterType)[keyof typeof TagFilterType];

/**
 * @public
 * <p>Information about an on-premises instance tag filter.</p>
 */
export interface TagFilter {
  /**
   * @public
   * <p>The on-premises instance tag filter key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The on-premises instance tag filter value.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The on-premises instance tag filter type:</p>
   *         <ul>
   *             <li>
   *                 <p>KEY_ONLY: Key only.</p>
   *             </li>
   *             <li>
   *                 <p>VALUE_ONLY: Value only.</p>
   *             </li>
   *             <li>
   *                 <p>KEY_AND_VALUE: Key and value.</p>
   *             </li>
   *          </ul>
   */
  Type?: TagFilterType | string;
}

/**
 * @public
 * <p>Information about groups of on-premises instance tags.</p>
 */
export interface OnPremisesTagSet {
  /**
   * @public
   * <p>A list that contains other lists of on-premises instance tag groups. For an instance
   *             to be included in the deployment group, it must be identified by all of the tag groups
   *             in the list.</p>
   */
  onPremisesTagSetList?: TagFilter[][];
}

/**
 * @public
 * @enum
 */
export const OutdatedInstancesStrategy = {
  Ignore: "IGNORE",
  Update: "UPDATE",
} as const;

/**
 * @public
 */
export type OutdatedInstancesStrategy = (typeof OutdatedInstancesStrategy)[keyof typeof OutdatedInstancesStrategy];

/**
 * @public
 * @enum
 */
export const TriggerEventType = {
  DEPLOYMENT_FAILURE: "DeploymentFailure",
  DEPLOYMENT_READY: "DeploymentReady",
  DEPLOYMENT_ROLLBACK: "DeploymentRollback",
  DEPLOYMENT_START: "DeploymentStart",
  DEPLOYMENT_STOP: "DeploymentStop",
  DEPLOYMENT_SUCCESS: "DeploymentSuccess",
  INSTANCE_FAILURE: "InstanceFailure",
  INSTANCE_READY: "InstanceReady",
  INSTANCE_START: "InstanceStart",
  INSTANCE_SUCCESS: "InstanceSuccess",
} as const;

/**
 * @public
 */
export type TriggerEventType = (typeof TriggerEventType)[keyof typeof TriggerEventType];

/**
 * @public
 * <p>Information about notification triggers for the deployment group.</p>
 */
export interface TriggerConfig {
  /**
   * @public
   * <p>The name of the notification trigger.</p>
   */
  triggerName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through
   *             which notifications about deployment or instance events are sent.</p>
   */
  triggerTargetArn?: string;

  /**
   * @public
   * <p>The event type or types for which notifications are triggered.</p>
   */
  triggerEvents?: (TriggerEventType | string)[];
}

/**
 * @public
 * <p>Information about a deployment group.</p>
 */
export interface DeploymentGroupInfo {
  /**
   * @public
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>The deployment group ID.</p>
   */
  deploymentGroupId?: string;

  /**
   * @public
   * <p>The deployment group name.</p>
   */
  deploymentGroupName?: string;

  /**
   * @public
   * <p>The deployment configuration name.</p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes EC2
   *             instances with any of the specified tags.</p>
   */
  ec2TagFilters?: EC2TagFilter[];

  /**
   * @public
   * <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags.</p>
   */
  onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @public
   * <p>A list of associated Auto Scaling groups.</p>
   */
  autoScalingGroups?: AutoScalingGroup[];

  /**
   * @public
   * <p>A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make
   *             calls to Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html">Create a
   *                 Service Role for CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.</p>
   */
  serviceRoleArn?: string;

  /**
   * @public
   * <p>Information about the deployment group's target revision, including type and
   *             location.</p>
   */
  targetRevision?: RevisionLocation;

  /**
   * @public
   * <p>Information about triggers associated with the deployment group.</p>
   */
  triggerConfigurations?: TriggerConfig[];

  /**
   * @public
   * <p>A list of alarms associated with the deployment group.</p>
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   * @public
   * <p>Information about the automatic rollback configuration associated with the deployment
   *             group.</p>
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @public
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: DeploymentStyle;

  /**
   * @public
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *         <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *         <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | string;

  /**
   * @public
   * <p>Information about blue/green deployment options for a deployment group.</p>
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @public
   * <p>Information about the load balancer to use in a deployment.</p>
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @public
   * <p>Information about the most recent successful deployment to the deployment
   *             group.</p>
   */
  lastSuccessfulDeployment?: LastDeploymentInfo;

  /**
   * @public
   * <p>Information about the most recent attempted deployment to the deployment group.</p>
   */
  lastAttemptedDeployment?: LastDeploymentInfo;

  /**
   * @public
   * <p>Information about groups of tags applied to an Amazon EC2 instance. The
   *             deployment group includes only Amazon EC2 instances identified by all of the tag
   *             groups. Cannot be used in the same call as ec2TagFilters.</p>
   */
  ec2TagSet?: EC2TagSet;

  /**
   * @public
   * <p>Information about groups of tags applied to an on-premises instance. The deployment
   *             group includes only on-premises instances identified by all the tag groups. Cannot be
   *             used in the same call as onPremisesInstanceTagFilters.</p>
   */
  onPremisesTagSet?: OnPremisesTagSet;

  /**
   * @public
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: ComputePlatform | string;

  /**
   * @public
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   */
  ecsServices?: ECSService[];
}

/**
 * @public
 * <p>Represents the output of a <code>BatchGetDeploymentGroups</code> operation.</p>
 */
export interface BatchGetDeploymentGroupsOutput {
  /**
   * @public
   * <p>Information about the deployment groups.</p>
   */
  deploymentGroupsInfo?: DeploymentGroupInfo[];

  /**
   * @public
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>The deployment configuration does not exist with the IAM user or
 *                 Amazon Web Services account.</p>
 */
export class DeploymentConfigDoesNotExistException extends __BaseException {
  readonly name: "DeploymentConfigDoesNotExistException" = "DeploymentConfigDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentConfigDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p>The deployment group name was not specified.</p>
 */
export class DeploymentGroupNameRequiredException extends __BaseException {
  readonly name: "DeploymentGroupNameRequiredException" = "DeploymentGroupNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupNameRequiredException, __BaseException>) {
    super({
      name: "DeploymentGroupNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupNameRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The deployment group name was specified in an invalid format.</p>
 */
export class InvalidDeploymentGroupNameException extends __BaseException {
  readonly name: "InvalidDeploymentGroupNameException" = "InvalidDeploymentGroupNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentGroupNameException, __BaseException>) {
    super({
      name: "InvalidDeploymentGroupNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentGroupNameException.prototype);
  }
}

/**
 * @public
 * <p> Represents the input of a <code>BatchGetDeploymentInstances</code> operation. </p>
 */
export interface BatchGetDeploymentInstancesInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The unique IDs of instances used in the deployment. The maximum number of instance IDs
   *             you can specify is 25.</p>
   */
  instanceIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  BLUE: "Blue",
  GREEN: "Green",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const LifecycleErrorCode = {
  SCRIPT_FAILED: "ScriptFailed",
  SCRIPT_MISSING: "ScriptMissing",
  SCRIPT_NOT_EXECUTABLE: "ScriptNotExecutable",
  SCRIPT_TIMED_OUT: "ScriptTimedOut",
  SUCCESS: "Success",
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type LifecycleErrorCode = (typeof LifecycleErrorCode)[keyof typeof LifecycleErrorCode];

/**
 * @public
 * <p>Diagnostic information about executable scripts that are part of a deployment.</p>
 */
export interface Diagnostics {
  /**
   * @public
   * <p>The associated error code:</p>
   *         <ul>
   *             <li>
   *                 <p>Success: The specified script ran.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptMissing: The specified script was not found in the specified
   *                     location.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptNotExecutable: The specified script is not a recognized executable file
   *                     type.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptTimedOut: The specified script did not finish running in the specified
   *                     time period.</p>
   *             </li>
   *             <li>
   *                 <p>ScriptFailed: The specified script failed to run as expected.</p>
   *             </li>
   *             <li>
   *                 <p>UnknownError: The specified script did not run for an unknown reason.</p>
   *             </li>
   *          </ul>
   */
  errorCode?: LifecycleErrorCode | string;

  /**
   * @public
   * <p>The name of the script.</p>
   */
  scriptName?: string;

  /**
   * @public
   * <p>The message associated with the error.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The last portion of the diagnostic log.</p>
   *         <p>If available, CodeDeploy returns up to the last 4 KB of the diagnostic
   *             log.</p>
   */
  logTail?: string;
}

/**
 * @public
 * @enum
 */
export const LifecycleEventStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type LifecycleEventStatus = (typeof LifecycleEventStatus)[keyof typeof LifecycleEventStatus];

/**
 * @public
 * <p>Information about a deployment lifecycle event.</p>
 */
export interface LifecycleEvent {
  /**
   * @public
   * <p>The deployment lifecycle event name, such as <code>ApplicationStop</code>,
   *                 <code>BeforeInstall</code>, <code>AfterInstall</code>,
   *             <code>ApplicationStart</code>, or <code>ValidateService</code>.</p>
   */
  lifecycleEventName?: string;

  /**
   * @public
   * <p>Diagnostic information about the deployment lifecycle event.</p>
   */
  diagnostics?: Diagnostics;

  /**
   * @public
   * <p>A timestamp that indicates when the deployment lifecycle event started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the deployment lifecycle event ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The deployment lifecycle event status:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: The deployment lifecycle event is pending.</p>
   *             </li>
   *             <li>
   *                 <p>InProgress: The deployment lifecycle event is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The deployment lifecycle event ran successfully.</p>
   *             </li>
   *             <li>
   *                 <p>Failed: The deployment lifecycle event has failed.</p>
   *             </li>
   *             <li>
   *                 <p>Skipped: The deployment lifecycle event has been skipped.</p>
   *             </li>
   *             <li>
   *                 <p>Unknown: The deployment lifecycle event is unknown.</p>
   *             </li>
   *          </ul>
   */
  status?: LifecycleEventStatus | string;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  READY: "Ready",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @deprecated
 *
 * <p>Information about an instance in a deployment.</p>
 */
export interface InstanceSummary {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The instance ID.</p>
   */
  instanceId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The deployment status for this instance:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Pending</code>: The deployment is pending for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>In Progress</code>: The deployment is in progress for this
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Succeeded</code>: The deployment has succeeded for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: The deployment has failed for this instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Skipped</code>: The deployment has been skipped for this
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Unknown</code>: The deployment status is unknown for this
   *                     instance.</p>
   *             </li>
   *          </ul>
   */
  status?: InstanceStatus | string;

  /**
   * @public
   * <p>A timestamp that indicates when the instance information was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>A list of lifecycle events for this instance.</p>
   */
  lifecycleEvents?: LifecycleEvent[];

  /**
   * @public
   * <p>Information about which environment an instance belongs to in a blue/green
   *             deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>BLUE: The instance is part of the original environment.</p>
   *             </li>
   *             <li>
   *                 <p>GREEN: The instance is part of the replacement environment.</p>
   *             </li>
   *          </ul>
   */
  instanceType?: _InstanceType | string;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchGetDeploymentInstances</code> operation.</p>
 */
export interface BatchGetDeploymentInstancesOutput {
  /**
   * @public
   * <p>Information about the instance.</p>
   */
  instancesSummary?: InstanceSummary[];

  /**
   * @public
   * <p>Information about errors that might have occurred during the API call.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>The deployment with the IAM user or Amazon Web Services account does not
 *             exist.</p>
 */
export class DeploymentDoesNotExistException extends __BaseException {
  readonly name: "DeploymentDoesNotExistException" = "DeploymentDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p>At least one deployment ID must be specified.</p>
 */
export class DeploymentIdRequiredException extends __BaseException {
  readonly name: "DeploymentIdRequiredException" = "DeploymentIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentIdRequiredException, __BaseException>) {
    super({
      name: "DeploymentIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentIdRequiredException.prototype);
  }
}

/**
 * @public
 * @deprecated
 *
 * <p>The instance ID was not specified.</p>
 */
export class InstanceIdRequiredException extends __BaseException {
  readonly name: "InstanceIdRequiredException" = "InstanceIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceIdRequiredException, __BaseException>) {
    super({
      name: "InstanceIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceIdRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 */
export class InvalidComputePlatformException extends __BaseException {
  readonly name: "InvalidComputePlatformException" = "InvalidComputePlatformException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidComputePlatformException, __BaseException>) {
    super({
      name: "InvalidComputePlatformException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidComputePlatformException.prototype);
  }
}

/**
 * @public
 * <p>At least one of the deployment IDs was specified in an invalid format.</p>
 */
export class InvalidDeploymentIdException extends __BaseException {
  readonly name: "InvalidDeploymentIdException" = "InvalidDeploymentIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentIdException, __BaseException>) {
    super({
      name: "InvalidDeploymentIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentIdException.prototype);
  }
}

/**
 * @public
 * <p> Represents the input of a <code>BatchGetDeployments</code> operation. </p>
 */
export interface BatchGetDeploymentsInput {
  /**
   * @public
   * <p> A list of deployment IDs, separated by spaces. The maximum number of deployment IDs
   *             you can specify is 25.</p>
   */
  deploymentIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentCreator = {
  Autoscaling: "autoscaling",
  CloudFormation: "CloudFormation",
  CloudFormationRollback: "CloudFormationRollback",
  CodeDeploy: "CodeDeploy",
  CodeDeployAutoUpdate: "CodeDeployAutoUpdate",
  CodeDeployRollback: "codeDeployRollback",
  User: "user",
} as const;

/**
 * @public
 */
export type DeploymentCreator = (typeof DeploymentCreator)[keyof typeof DeploymentCreator];

/**
 * @public
 * <p>Information about the deployment status of the instances in the deployment.</p>
 */
export interface DeploymentOverview {
  /**
   * @public
   * <p>The number of instances in the deployment in a pending state.</p>
   */
  Pending?: number;

  /**
   * @public
   * <p>The number of instances in which the deployment is in progress.</p>
   */
  InProgress?: number;

  /**
   * @public
   * <p>The number of instances in the deployment to which revisions have been successfully
   *             deployed.</p>
   */
  Succeeded?: number;

  /**
   * @public
   * <p>The number of instances in the deployment in a failed state.</p>
   */
  Failed?: number;

  /**
   * @public
   * <p>The number of instances in the deployment in a skipped state.</p>
   */
  Skipped?: number;

  /**
   * @public
   * <p>The number of instances in a replacement environment ready to receive traffic in a
   *             blue/green deployment.</p>
   */
  Ready?: number;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AGENT_ISSUE: "AGENT_ISSUE",
  ALARM_ACTIVE: "ALARM_ACTIVE",
  APPLICATION_MISSING: "APPLICATION_MISSING",
  AUTOSCALING_VALIDATION_ERROR: "AUTOSCALING_VALIDATION_ERROR",
  AUTO_SCALING_CONFIGURATION: "AUTO_SCALING_CONFIGURATION",
  AUTO_SCALING_IAM_ROLE_PERMISSIONS: "AUTO_SCALING_IAM_ROLE_PERMISSIONS",
  CLOUDFORMATION_STACK_FAILURE: "CLOUDFORMATION_STACK_FAILURE",
  CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND: "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND",
  CUSTOMER_APPLICATION_UNHEALTHY: "CUSTOMER_APPLICATION_UNHEALTHY",
  DEPLOYMENT_GROUP_MISSING: "DEPLOYMENT_GROUP_MISSING",
  ECS_UPDATE_ERROR: "ECS_UPDATE_ERROR",
  ELASTIC_LOAD_BALANCING_INVALID: "ELASTIC_LOAD_BALANCING_INVALID",
  ELB_INVALID_INSTANCE: "ELB_INVALID_INSTANCE",
  HEALTH_CONSTRAINTS: "HEALTH_CONSTRAINTS",
  HEALTH_CONSTRAINTS_INVALID: "HEALTH_CONSTRAINTS_INVALID",
  HOOK_EXECUTION_FAILURE: "HOOK_EXECUTION_FAILURE",
  IAM_ROLE_MISSING: "IAM_ROLE_MISSING",
  IAM_ROLE_PERMISSIONS: "IAM_ROLE_PERMISSIONS",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ECS_SERVICE: "INVALID_ECS_SERVICE",
  INVALID_LAMBDA_CONFIGURATION: "INVALID_LAMBDA_CONFIGURATION",
  INVALID_LAMBDA_FUNCTION: "INVALID_LAMBDA_FUNCTION",
  INVALID_REVISION: "INVALID_REVISION",
  MANUAL_STOP: "MANUAL_STOP",
  MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION: "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION",
  MISSING_ELB_INFORMATION: "MISSING_ELB_INFORMATION",
  MISSING_GITHUB_TOKEN: "MISSING_GITHUB_TOKEN",
  NO_EC2_SUBSCRIPTION: "NO_EC2_SUBSCRIPTION",
  NO_INSTANCES: "NO_INSTANCES",
  OVER_MAX_INSTANCES: "OVER_MAX_INSTANCES",
  RESOURCE_LIMIT_EXCEEDED: "RESOURCE_LIMIT_EXCEEDED",
  REVISION_MISSING: "REVISION_MISSING",
  THROTTLED: "THROTTLED",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>Information about a deployment error.</p>
 */
export interface ErrorInformation {
  /**
   * @public
   * <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/error-codes.html">Error Codes for CodeDeploy</a> in the <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>.</p>
   *         <p>The error code:</p>
   *         <ul>
   *             <li>
   *                 <p>APPLICATION_MISSING: The application was missing. This error code is most
   *                     likely raised if the application is deleted after the deployment is created, but
   *                     before it is started.</p>
   *             </li>
   *             <li>
   *                 <p>DEPLOYMENT_GROUP_MISSING: The deployment group was missing. This error code is
   *                     most likely raised if the deployment group is deleted after the deployment is
   *                     created, but before it is started.</p>
   *             </li>
   *             <li>
   *                 <p>HEALTH_CONSTRAINTS: The deployment failed on too many instances to be
   *                     successfully deployed within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                 <p>HEALTH_CONSTRAINTS_INVALID: The revision cannot be successfully deployed
   *                     within the instance health constraints specified.</p>
   *             </li>
   *             <li>
   *                 <p>IAM_ROLE_MISSING: The service role cannot be accessed.</p>
   *             </li>
   *             <li>
   *                 <p>IAM_ROLE_PERMISSIONS: The service role does not have the
   *                     correct permissions.</p>
   *             </li>
   *             <li>
   *                 <p>INTERNAL_ERROR: There was an internal error.</p>
   *             </li>
   *             <li>
   *                 <p>NO_EC2_SUBSCRIPTION: The calling account is not subscribed to Amazon EC2.</p>
   *             </li>
   *             <li>
   *                 <p>NO_INSTANCES: No instances were specified, or no instances can be
   *                     found.</p>
   *             </li>
   *             <li>
   *                 <p>OVER_MAX_INSTANCES: The maximum number of instances was exceeded.</p>
   *             </li>
   *             <li>
   *                 <p>THROTTLED: The operation was throttled because the calling account exceeded
   *                     the throttling limits of one or more Amazon Web Services services.</p>
   *             </li>
   *             <li>
   *                 <p>TIMEOUT: The deployment has timed out.</p>
   *             </li>
   *             <li>
   *                 <p>REVISION_MISSING: The revision ID was missing. This error code is most likely
   *                     raised if the revision is deleted after the deployment is created, but before it
   *                     is started.</p>
   *             </li>
   *          </ul>
   */
  code?: ErrorCode | string;

  /**
   * @public
   * <p>An accompanying error message.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const FileExistsBehavior = {
  DISALLOW: "DISALLOW",
  OVERWRITE: "OVERWRITE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type FileExistsBehavior = (typeof FileExistsBehavior)[keyof typeof FileExistsBehavior];

/**
 * @public
 * <p>Information about deployments related to the specified deployment.</p>
 */
export interface RelatedDeployments {
  /**
   * @public
   * <p>The deployment ID of the root deployment that triggered this deployment.</p>
   */
  autoUpdateOutdatedInstancesRootDeploymentId?: string;

  /**
   * @public
   * <p>The deployment IDs of 'auto-update outdated instances' deployments triggered by this
   *             deployment.</p>
   */
  autoUpdateOutdatedInstancesDeploymentIds?: string[];
}

/**
 * @public
 * <p>Information about a deployment rollback.</p>
 */
export interface RollbackInfo {
  /**
   * @public
   * <p>The ID of the deployment rollback.</p>
   */
  rollbackDeploymentId?: string;

  /**
   * @public
   * <p>The deployment ID of the deployment that was underway and triggered a rollback
   *             deployment because it failed or was stopped.</p>
   */
  rollbackTriggeringDeploymentId?: string;

  /**
   * @public
   * <p>Information that describes the status of a deployment rollback (for example, whether
   *             the deployment can't be rolled back, is in progress, failed, or succeeded). </p>
   */
  rollbackMessage?: string;
}

/**
 * @public
 * <p>Information about the instances to be used in the replacement environment in a
 *             blue/green deployment.</p>
 */
export interface TargetInstances {
  /**
   * @public
   * <p>The tag filter key, type, and value used to identify Amazon EC2 instances in a
   *             replacement environment for a blue/green deployment. Cannot be used in the same call as
   *                 <code>ec2TagSet</code>.</p>
   */
  tagFilters?: EC2TagFilter[];

  /**
   * @public
   * <p>The names of one or more Auto Scaling groups to identify a replacement
   *             environment for a blue/green deployment.</p>
   */
  autoScalingGroups?: string[];

  /**
   * @public
   * <p>Information about the groups of Amazon EC2 instance tags that an instance must
   *             be identified by in order for it to be included in the replacement environment for a
   *             blue/green deployment. Cannot be used in the same call as
   *             <code>tagFilters</code>.</p>
   */
  ec2TagSet?: EC2TagSet;
}

/**
 * @public
 * <p>Information about a deployment.</p>
 */
export interface DeploymentInfo {
  /**
   * @public
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p> The deployment group name. </p>
   */
  deploymentGroupName?: string;

  /**
   * @public
   * <p> The deployment configuration name. </p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>Information about the application revision that was deployed to the deployment group
   *             before the most recent successful deployment.</p>
   */
  previousRevision?: RevisionLocation;

  /**
   * @public
   * <p>Information about the location of stored application artifacts and the service from
   *             which to retrieve them.</p>
   */
  revision?: RevisionLocation;

  /**
   * @public
   * <p>The current state of the deployment as a whole.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * @public
   * <p>Information about any error associated with this deployment.</p>
   */
  errorInformation?: ErrorInformation;

  /**
   * @public
   * <p>A timestamp that indicates when the deployment was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the deployment was deployed to the deployment
   *             group.</p>
   *         <p>In some cases, the reported value of the start time might be later than the complete
   *             time. This is due to differences in the clock settings of backend servers that
   *             participate in the deployment process.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>A timestamp that indicates when the deployment was complete.</p>
   */
  completeTime?: Date;

  /**
   * @public
   * <p>A summary of the deployment status of the instances in the deployment.</p>
   */
  deploymentOverview?: DeploymentOverview;

  /**
   * @public
   * <p>A comment about the deployment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The means by which the deployment was created:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>user</code>: A user created the deployment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>autoscaling</code>: Amazon EC2 Auto Scaling created the deployment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>codeDeployRollback</code>: A rollback process created the
   *                     deployment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CodeDeployAutoUpdate</code>: An auto-update process created the
   *                     deployment when it detected outdated Amazon EC2 instances.</p>
   *             </li>
   *          </ul>
   */
  creator?: DeploymentCreator | string;

  /**
   * @public
   * <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or
   *                 <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then
   *             the deployment continues to the next deployment lifecycle event. For example, if
   *                 <code>ApplicationStop</code> fails, the deployment continues with DownloadBundle. If
   *                 <code>BeforeBlockTraffic</code> fails, the deployment continues with
   *                 <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code> fails, the deployment
   *             continues with <code>ApplicationStop</code>. </p>
   *
   *         <p> If false or not specified, then if a lifecycle event fails during a deployment to an
   *             instance, that deployment fails. If deployment to that instance is part of an overall
   *             deployment and the number of healthy hosts is not less than the minimum number of
   *             healthy hosts, then a deployment to the next instance is attempted. </p>
   *
   *         <p> During a deployment, the CodeDeploy agent runs the scripts specified for
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful
   *             deployment. (All other scripts are run from the AppSpec file in the current deployment.)
   *             If one of these scripts contains an error and does not run successfully, the deployment
   *             can fail. </p>
   *
   *         <p> If the cause of the failure is a script from the last successful deployment that will
   *             never run successfully, create a new deployment and use
   *                 <code>ignoreApplicationStopFailures</code> to specify that the
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> failures should be ignored. </p>
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   * @public
   * <p>Information about the automatic rollback configuration associated with the
   *             deployment.</p>
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @public
   * <p>Indicates whether only instances that are not running the latest application revision
   *             are to be deployed to.</p>
   */
  updateOutdatedInstancesOnly?: boolean;

  /**
   * @public
   * <p>Information about a deployment rollback.</p>
   */
  rollbackInfo?: RollbackInfo;

  /**
   * @public
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: DeploymentStyle;

  /**
   * @public
   * <p>Information about the instances that belong to the replacement environment in a
   *             blue/green deployment.</p>
   */
  targetInstances?: TargetInstances;

  /**
   * @public
   * <p>Indicates whether the wait period set for the termination of instances in the original
   *             environment has started. Status is 'false' if the KEEP_ALIVE option is specified.
   *             Otherwise, 'true' as soon as the termination wait period starts.</p>
   */
  instanceTerminationWaitTimeStarted?: boolean;

  /**
   * @public
   * <p>Information about blue/green deployment options for this deployment.</p>
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @public
   * <p>Information about the load balancer used in the deployment.</p>
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @public
   * @deprecated
   *
   * <p>Provides information about the results of a deployment, such as whether instances in
   *             the original environment in a blue/green deployment were not terminated.</p>
   */
  additionalDeploymentStatusInfo?: string;

  /**
   * @public
   * <p>Information about how CodeDeploy handles files that already exist in a
   *             deployment target location but weren't part of the previous successful
   *             deployment.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DISALLOW</code>: The deployment fails. This is also the default behavior
   *                     if no option is specified.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>OVERWRITE</code>: The version of the file from the application revision
   *                     currently being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RETAIN</code>: The version of the file already on the instance is kept
   *                     and used as part of the new deployment.</p>
   *             </li>
   *          </ul>
   */
  fileExistsBehavior?: FileExistsBehavior | string;

  /**
   * @public
   * <p>Messages that contain information about the status of a deployment.</p>
   */
  deploymentStatusMessages?: string[];

  /**
   * @public
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: ComputePlatform | string;

  /**
   * @public
   * <p>The unique ID for an external resource (for example, a CloudFormation stack
   *             ID) that is linked to this deployment.</p>
   */
  externalId?: string;

  /**
   * @public
   * <p>Information about deployments related to the specified deployment.</p>
   */
  relatedDeployments?: RelatedDeployments;

  /**
   * @public
   * <p>Information about alarms associated with a deployment or deployment group.</p>
   */
  overrideAlarmConfiguration?: AlarmConfiguration;
}

/**
 * @public
 * <p> Represents the output of a <code>BatchGetDeployments</code> operation. </p>
 */
export interface BatchGetDeploymentsOutput {
  /**
   * @public
   * <p> Information about the deployments. </p>
   */
  deploymentsInfo?: DeploymentInfo[];
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique IDs of the deployment targets. The compute platform of the deployment
   *             determines the type of the targets and their formats. The maximum number of deployment
   *             target IDs you can specify is 25.</p>
   *         <ul>
   *             <li>
   *                 <p> For deployments that use the EC2/On-premises compute platform, the target IDs
   *                     are Amazon EC2 or on-premises instances IDs, and their target type is
   *                         <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                 <p> For deployments that use the Lambda compute platform, the
   *                     target IDs are the names of Lambda functions, and their target type
   *                     is <code>instanceTarget</code>. </p>
   *             </li>
   *             <li>
   *                 <p> For deployments that use the Amazon ECS compute platform, the target
   *                     IDs are pairs of Amazon ECS clusters and services specified using the
   *                     format <code><clustername>:<servicename></code>. Their target type
   *                     is <code>ecsTarget</code>. </p>
   *             </li>
   *             <li>
   *                 <p> For deployments that are deployed with CloudFormation, the target IDs are
   *                         CloudFormation stack IDs. Their target type is
   *                         <code>cloudFormationTarget</code>. </p>
   *             </li>
   *          </ul>
   */
  targetIds?: string[];
}

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  READY: "Ready",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * @public
 * <p> Information about the target to be updated by an CloudFormation blue/green
 *             deployment. This target type is used for all deployments initiated by a CloudFormation stack update.</p>
 */
export interface CloudFormationTarget {
  /**
   * @public
   * <p>The unique ID of an CloudFormation blue/green deployment.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique ID of a deployment target that has a type
   *                 of <code>CloudFormationTarget</code>. </p>
   */
  targetId?: string;

  /**
   * @public
   * <p> The date and time when the target application was updated by an CloudFormation
   *             blue/green deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The lifecycle events of the CloudFormation blue/green deployment to this target
   *             application. </p>
   */
  lifecycleEvents?: LifecycleEvent[];

  /**
   * @public
   * <p> The status of an CloudFormation blue/green deployment's target application.
   *         </p>
   */
  status?: TargetStatus | string;

  /**
   * @public
   * <p>The resource type for the CloudFormation blue/green deployment.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The percentage of production traffic that the target version of an CloudFormation
   *             blue/green deployment receives.</p>
   */
  targetVersionWeight?: number;
}

/**
 * @public
 * @enum
 */
export const DeploymentTargetType = {
  CLOUDFORMATION_TARGET: "CloudFormationTarget",
  ECS_TARGET: "ECSTarget",
  INSTANCE_TARGET: "InstanceTarget",
  LAMBDA_TARGET: "LambdaTarget",
} as const;

/**
 * @public
 */
export type DeploymentTargetType = (typeof DeploymentTargetType)[keyof typeof DeploymentTargetType];

/**
 * @public
 * @enum
 */
export const TargetLabel = {
  BLUE: "Blue",
  GREEN: "Green",
} as const;

/**
 * @public
 */
export type TargetLabel = (typeof TargetLabel)[keyof typeof TargetLabel];

/**
 * @public
 * <p> Information about a set of Amazon ECS tasks in an CodeDeploy
 *             deployment. An Amazon ECS task set includes details such as the desired number
 *             of tasks, how many tasks are running, and whether the task set serves production
 *             traffic. An CodeDeploy application that uses the Amazon ECS compute
 *             platform deploys a containerized application in an Amazon ECS service as a task
 *             set. </p>
 */
export interface ECSTaskSet {
  /**
   * @public
   * <p> A unique ID of an <code>ECSTaskSet</code>. </p>
   */
  identifer?: string;

  /**
   * @public
   * <p> The number of tasks in a task set. During a deployment that uses the Amazon ECS compute type, CodeDeploy instructs Amazon ECS to create a new task set and
   *             uses this value to determine how many tasks to create. After the updated task set is
   *             created, CodeDeploy shifts traffic to the new task set. </p>
   */
  desiredCount?: number;

  /**
   * @public
   * <p> The number of tasks in the task set that are in the <code>PENDING</code> status
   *             during an Amazon ECS deployment. A task in the <code>PENDING</code> state is
   *             preparing to enter the <code>RUNNING</code> state. A task set enters the
   *                 <code>PENDING</code> status when it launches for the first time, or when it is
   *             restarted after being in the <code>STOPPED</code> state. </p>
   */
  pendingCount?: number;

  /**
   * @public
   * <p> The number of tasks in the task set that are in the <code>RUNNING</code> status
   *             during an Amazon ECS deployment. A task in the <code>RUNNING</code> state is
   *             running and ready for use. </p>
   */
  runningCount?: number;

  /**
   * @public
   * <p> The status of the task set. There are three valid task set statuses: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>PRIMARY</code>: Indicates the task set is serving production traffic.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ACTIVE</code>: Indicates the task set is not serving production traffic.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DRAINING</code>: Indicates the tasks in the task set are being stopped and
   *                     their corresponding targets are being deregistered from their target group.
   *                 </p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * @public
   * <p> The percentage of traffic served by this task set. </p>
   */
  trafficWeight?: number;

  /**
   * @public
   * <p> The target group associated with the task set. The target group is used by CodeDeploy to manage traffic to a task set. </p>
   */
  targetGroup?: TargetGroupInfo;

  /**
   * @public
   * <p> A label that identifies whether the ECS task set is an original target
   *                 (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   */
  taskSetLabel?: TargetLabel | string;
}

/**
 * @public
 * <p> Information about the target of an Amazon ECS deployment. </p>
 */
export interface ECSTarget {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique ID of a deployment target that has a type of <code>ecsTarget</code>.
   *         </p>
   */
  targetId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   */
  targetArn?: string;

  /**
   * @public
   * <p> The date and time when the target Amazon ECS application was updated by a
   *             deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The lifecycle events of the deployment to this target Amazon ECS application.
   *         </p>
   */
  lifecycleEvents?: LifecycleEvent[];

  /**
   * @public
   * <p> The status an Amazon ECS deployment's target ECS application. </p>
   */
  status?: TargetStatus | string;

  /**
   * @public
   * <p> The <code>ECSTaskSet</code> objects associated with the ECS target. </p>
   */
  taskSetsInfo?: ECSTaskSet[];
}

/**
 * @public
 * <p> A target Amazon EC2 or on-premises instance during a deployment that uses the
 *             EC2/On-premises compute platform. </p>
 */
export interface InstanceTarget {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique ID of a deployment target that has a type of <code>instanceTarget</code>.
   *         </p>
   */
  targetId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   */
  targetArn?: string;

  /**
   * @public
   * <p> The status an EC2/On-premises deployment's target instance. </p>
   */
  status?: TargetStatus | string;

  /**
   * @public
   * <p> The date and time when the target instance was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The lifecycle events of the deployment to this target instance. </p>
   */
  lifecycleEvents?: LifecycleEvent[];

  /**
   * @public
   * <p> A label that identifies whether the instance is an original target
   *             (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   */
  instanceLabel?: TargetLabel | string;
}

/**
 * @public
 * <p> Information about a Lambda function specified in a deployment. </p>
 */
export interface LambdaFunctionInfo {
  /**
   * @public
   * <p> The name of a Lambda function. </p>
   */
  functionName?: string;

  /**
   * @public
   * <p> The alias of a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Lambda Function Aliases</a> in the <i>Lambda Developer
   *                 Guide</i>.</p>
   */
  functionAlias?: string;

  /**
   * @public
   * <p> The version of a Lambda function that production traffic points to.
   *         </p>
   */
  currentVersion?: string;

  /**
   * @public
   * <p> The version of a Lambda function that production traffic points to after
   *             the Lambda function is deployed. </p>
   */
  targetVersion?: string;

  /**
   * @public
   * <p> The percentage of production traffic that the target version of a Lambda
   *             function receives. </p>
   */
  targetVersionWeight?: number;
}

/**
 * @public
 * <p> Information about the target Lambda function during an Lambda deployment. </p>
 */
export interface LambdaTarget {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique ID of a deployment target that has a type of <code>lambdaTarget</code>.
   *         </p>
   */
  targetId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the target. </p>
   */
  targetArn?: string;

  /**
   * @public
   * <p> The status an Lambda deployment's target Lambda function.
   *         </p>
   */
  status?: TargetStatus | string;

  /**
   * @public
   * <p> The date and time when the target Lambda function was updated by a
   *             deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p> The lifecycle events of the deployment to this target Lambda function.
   *         </p>
   */
  lifecycleEvents?: LifecycleEvent[];

  /**
   * @public
   * <p> A <code>LambdaFunctionInfo</code> object that describes a target Lambda
   *             function. </p>
   */
  lambdaFunctionInfo?: LambdaFunctionInfo;
}

/**
 * @public
 * <p> Information about the deployment target. </p>
 */
export interface DeploymentTarget {
  /**
   * @public
   * <p>The deployment type that is specific to the deployment's compute platform or
   *             deployments initiated by a CloudFormation stack update.</p>
   */
  deploymentTargetType?: DeploymentTargetType | string;

  /**
   * @public
   * <p> Information about the target for a deployment that uses the EC2/On-premises compute
   *             platform. </p>
   */
  instanceTarget?: InstanceTarget;

  /**
   * @public
   * <p> Information about the target for a deployment that uses the Lambda
   *             compute platform. </p>
   */
  lambdaTarget?: LambdaTarget;

  /**
   * @public
   * <p> Information about the target for a deployment that uses the Amazon ECS
   *             compute platform. </p>
   */
  ecsTarget?: ECSTarget;

  /**
   * @public
   * <p> Information about the target to be updated by an CloudFormation blue/green
   *             deployment. This target type is used for all deployments initiated by a CloudFormation stack update.</p>
   */
  cloudFormationTarget?: CloudFormationTarget;
}

/**
 * @public
 */
export interface BatchGetDeploymentTargetsOutput {
  /**
   * @public
   * <p> A list of target objects for a deployment. Each target object contains details about
   *             the target, such as its status and lifecycle events. The type of the target objects
   *             depends on the deployment' compute platform. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>EC2/On-premises</b>: Each target object is an
   *                         Amazon EC2 or on-premises instance. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Lambda</b>: The target object is a
   *                     specific version of an Lambda function. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Amazon ECS</b>: The target object is an
   *                         Amazon ECS service. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>CloudFormation</b>: The target object is
   *                     an CloudFormation blue/green deployment. </p>
   *             </li>
   *          </ul>
   */
  deploymentTargets?: DeploymentTarget[];
}

/**
 * @public
 * <p>The specified deployment has not started.</p>
 */
export class DeploymentNotStartedException extends __BaseException {
  readonly name: "DeploymentNotStartedException" = "DeploymentNotStartedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentNotStartedException, __BaseException>) {
    super({
      name: "DeploymentNotStartedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentNotStartedException.prototype);
  }
}

/**
 * @public
 * <p> The provided target ID does not belong to the attempted deployment. </p>
 */
export class DeploymentTargetDoesNotExistException extends __BaseException {
  readonly name: "DeploymentTargetDoesNotExistException" = "DeploymentTargetDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentTargetDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p> A deployment target ID was not provided. </p>
 */
export class DeploymentTargetIdRequiredException extends __BaseException {
  readonly name: "DeploymentTargetIdRequiredException" = "DeploymentTargetIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetIdRequiredException, __BaseException>) {
    super({
      name: "DeploymentTargetIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetIdRequiredException.prototype);
  }
}

/**
 * @public
 * <p> The maximum number of targets that can be associated with an Amazon ECS or
 *                 Lambda deployment was exceeded. The target list of both types of
 *             deployments must have exactly one item. This exception does not apply to EC2/On-premises
 *             deployments. </p>
 */
export class DeploymentTargetListSizeExceededException extends __BaseException {
  readonly name: "DeploymentTargetListSizeExceededException" = "DeploymentTargetListSizeExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentTargetListSizeExceededException, __BaseException>) {
    super({
      name: "DeploymentTargetListSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentTargetListSizeExceededException.prototype);
  }
}

/**
 * @public
 * @deprecated
 *
 * <p>The specified instance does not exist in the deployment group.</p>
 */
export class InstanceDoesNotExistException extends __BaseException {
  readonly name: "InstanceDoesNotExistException" = "InstanceDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceDoesNotExistException, __BaseException>) {
    super({
      name: "InstanceDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p> The target ID provided was not valid. </p>
 */
export class InvalidDeploymentTargetIdException extends __BaseException {
  readonly name: "InvalidDeploymentTargetIdException" = "InvalidDeploymentTargetIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentTargetIdException, __BaseException>) {
    super({
      name: "InvalidDeploymentTargetIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentTargetIdException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.</p>
 */
export interface BatchGetOnPremisesInstancesInput {
  /**
   * @public
   * <p>The names of the on-premises instances about which to get information. The maximum
   *             number of instance names you can specify is 25.</p>
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 * <p>Information about an on-premises instance.</p>
 */
export interface InstanceInfo {
  /**
   * @public
   * <p>The name of the on-premises instance.</p>
   */
  instanceName?: string;

  /**
   * @public
   * <p>The ARN of the IAM session associated with the on-premises instance.</p>
   */
  iamSessionArn?: string;

  /**
   * @public
   * <p>The IAM user ARN associated with the on-premises instance.</p>
   */
  iamUserArn?: string;

  /**
   * @public
   * <p>The ARN of the on-premises instance.</p>
   */
  instanceArn?: string;

  /**
   * @public
   * <p>The time at which the on-premises instance was registered.</p>
   */
  registerTime?: Date;

  /**
   * @public
   * <p>If the on-premises instance was deregistered, the time at which the on-premises
   *             instance was deregistered.</p>
   */
  deregisterTime?: Date;

  /**
   * @public
   * <p>The tags currently associated with the on-premises instance.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.</p>
 */
export interface BatchGetOnPremisesInstancesOutput {
  /**
   * @public
   * <p>Information about the on-premises instances.</p>
   */
  instanceInfos?: InstanceInfo[];
}

/**
 * @public
 * <p>A bucket name is required, but was not provided.</p>
 */
export class BucketNameFilterRequiredException extends __BaseException {
  readonly name: "BucketNameFilterRequiredException" = "BucketNameFilterRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNameFilterRequiredException, __BaseException>) {
    super({
      name: "BucketNameFilterRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNameFilterRequiredException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DeploymentWaitType = {
  READY_WAIT: "READY_WAIT",
  TERMINATION_WAIT: "TERMINATION_WAIT",
} as const;

/**
 * @public
 */
export type DeploymentWaitType = (typeof DeploymentWaitType)[keyof typeof DeploymentWaitType];

/**
 * @public
 */
export interface ContinueDeploymentInput {
  /**
   * @public
   * <p> The unique ID of a blue/green deployment for which you want to start rerouting
   *             traffic to the replacement environment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The status of the deployment's waiting period. <code>READY_WAIT</code> indicates that
   *             the deployment is ready to start shifting traffic. <code>TERMINATION_WAIT</code>
   *             indicates that the traffic is shifted, but the original target is not terminated.
   *         </p>
   */
  deploymentWaitType?: DeploymentWaitType | string;
}

/**
 * @public
 * <p>The deployment is already complete.</p>
 */
export class DeploymentAlreadyCompletedException extends __BaseException {
  readonly name: "DeploymentAlreadyCompletedException" = "DeploymentAlreadyCompletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentAlreadyCompletedException, __BaseException>) {
    super({
      name: "DeploymentAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentAlreadyCompletedException.prototype);
  }
}

/**
 * @public
 * <p>The deployment does not have a status of Ready and can't continue yet.</p>
 */
export class DeploymentIsNotInReadyStateException extends __BaseException {
  readonly name: "DeploymentIsNotInReadyStateException" = "DeploymentIsNotInReadyStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentIsNotInReadyStateException, __BaseException>) {
    super({
      name: "DeploymentIsNotInReadyStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentIsNotInReadyStateException.prototype);
  }
}

/**
 * @public
 * <p>The specified deployment status doesn't exist or cannot be determined.</p>
 */
export class InvalidDeploymentStatusException extends __BaseException {
  readonly name: "InvalidDeploymentStatusException" = "InvalidDeploymentStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentStatusException, __BaseException>) {
    super({
      name: "InvalidDeploymentStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentStatusException.prototype);
  }
}

/**
 * @public
 * <p> The wait type is invalid. </p>
 */
export class InvalidDeploymentWaitTypeException extends __BaseException {
  readonly name: "InvalidDeploymentWaitTypeException" = "InvalidDeploymentWaitTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentWaitTypeException, __BaseException>) {
    super({
      name: "InvalidDeploymentWaitTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentWaitTypeException.prototype);
  }
}

/**
 * @public
 * <p>A call was submitted that is not supported for the specified deployment type.</p>
 */
export class UnsupportedActionForDeploymentTypeException extends __BaseException {
  readonly name: "UnsupportedActionForDeploymentTypeException" = "UnsupportedActionForDeploymentTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedActionForDeploymentTypeException, __BaseException>) {
    super({
      name: "UnsupportedActionForDeploymentTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedActionForDeploymentTypeException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>CreateApplication</code> operation.</p>
 */
export interface CreateApplicationInput {
  /**
   * @public
   * <p>The name of the application. This name must be unique with the applicable IAM or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p> The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: ComputePlatform | string;

  /**
   * @public
   * <p> The metadata that you apply to CodeDeploy applications to help you organize and
   *             categorize them. Each tag consists of a key and an optional value, both of which you
   *             define. </p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a <code>CreateApplication</code> operation.</p>
 */
export interface CreateApplicationOutput {
  /**
   * @public
   * <p>A unique application ID.</p>
   */
  applicationId?: string;
}

/**
 * @public
 * <p> The specified tags are not valid. </p>
 */
export class InvalidTagsToAddException extends __BaseException {
  readonly name: "InvalidTagsToAddException" = "InvalidTagsToAddException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagsToAddException, __BaseException>) {
    super({
      name: "InvalidTagsToAddException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagsToAddException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>CreateDeployment</code> operation.</p>
 */
export interface CreateDeploymentInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The name of the deployment group.</p>
   */
  deploymentGroupName?: string;

  /**
   * @public
   * <p> The type and location of the revision to deploy. </p>
   */
  revision?: RevisionLocation;

  /**
   * @public
   * <p>The name of a deployment configuration associated with the IAM user or
   *                 Amazon Web Services account.</p>
   *         <p>If not specified, the value configured in the deployment group is used as the default.
   *             If the deployment group does not have a deployment configuration associated with it,
   *                 <code>CodeDeployDefault</code>.<code>OneAtATime</code> is used by default.</p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p>A comment about the deployment.</p>
   */
  description?: string;

  /**
   * @public
   * <p> If true, then if an <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, or
   *                 <code>AfterBlockTraffic</code> deployment lifecycle event to an instance fails, then
   *             the deployment continues to the next deployment lifecycle event. For example, if
   *                 <code>ApplicationStop</code> fails, the deployment continues with
   *                 <code>DownloadBundle</code>. If <code>BeforeBlockTraffic</code> fails, the
   *             deployment continues with <code>BlockTraffic</code>. If <code>AfterBlockTraffic</code>
   *             fails, the deployment continues with <code>ApplicationStop</code>. </p>
   *
   *         <p> If false or not specified, then if a lifecycle event fails during a deployment to an
   *             instance, that deployment fails. If deployment to that instance is part of an overall
   *             deployment and the number of healthy hosts is not less than the minimum number of
   *             healthy hosts, then a deployment to the next instance is attempted. </p>
   *
   *         <p> During a deployment, the CodeDeploy agent runs the scripts specified for
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> in the AppSpec file from the previous successful
   *             deployment. (All other scripts are run from the AppSpec file in the current deployment.)
   *             If one of these scripts contains an error and does not run successfully, the deployment
   *             can fail. </p>
   *
   *         <p> If the cause of the failure is a script from the last successful deployment that will
   *             never run successfully, create a new deployment and use
   *                 <code>ignoreApplicationStopFailures</code> to specify that the
   *                 <code>ApplicationStop</code>, <code>BeforeBlockTraffic</code>, and
   *                 <code>AfterBlockTraffic</code> failures should be ignored. </p>
   */
  ignoreApplicationStopFailures?: boolean;

  /**
   * @public
   * <p> Information about the instances that belong to the replacement environment in a
   *             blue/green deployment. </p>
   */
  targetInstances?: TargetInstances;

  /**
   * @public
   * <p>Configuration information for an automatic rollback that is added when a deployment is
   *             created.</p>
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @public
   * <p> Indicates whether to deploy to all instances or only to instances that are not
   *             running the latest application revision. </p>
   */
  updateOutdatedInstancesOnly?: boolean;

  /**
   * @public
   * <p>Information about how CodeDeploy handles files that already exist in a
   *             deployment target location but weren't part of the previous successful
   *             deployment.</p>
   *         <p>The <code>fileExistsBehavior</code> parameter takes any of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>DISALLOW: The deployment fails. This is also the default behavior if no option
   *                     is specified.</p>
   *             </li>
   *             <li>
   *                 <p>OVERWRITE: The version of the file from the application revision currently
   *                     being deployed replaces the version already on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>RETAIN: The version of the file already on the instance is kept and used as
   *                     part of the new deployment.</p>
   *             </li>
   *          </ul>
   */
  fileExistsBehavior?: FileExistsBehavior | string;

  /**
   * @public
   * <p>Allows you to specify information about alarms associated with a deployment. The alarm
   *             configuration that you specify here will override the alarm configuration at the
   *             deployment group level. Consider overriding the alarm configuration if you have set up
   *             alarms at the deployment group level that are causing deployment failures. In this case,
   *             you would call <code>CreateDeployment</code> to create a new deployment that uses a
   *             previous application revision that is known to work, and set its alarm configuration to
   *             turn off alarm polling. Turning off alarm polling ensures that the new deployment
   *             proceeds without being blocked by the alarm that was generated by the previous, failed,
   *             deployment.</p>
   *         <note>
   *             <p>If you specify an <code>overrideAlarmConfiguration</code>, you need the
   *                     <code>UpdateDeploymentGroup</code> IAM permission when calling
   *                     <code>CreateDeployment</code>.</p>
   *         </note>
   */
  overrideAlarmConfiguration?: AlarmConfiguration;
}

/**
 * @public
 * <p> Represents the output of a <code>CreateDeployment</code> operation. </p>
 */
export interface CreateDeploymentOutput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;
}

/**
 * @public
 * <p>The named deployment group with the IAM user or Amazon Web Services account does not exist.</p>
 */
export class DeploymentGroupDoesNotExistException extends __BaseException {
  readonly name: "DeploymentGroupDoesNotExistException" = "DeploymentGroupDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupDoesNotExistException, __BaseException>) {
    super({
      name: "DeploymentGroupDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p>The number of allowed deployments was exceeded.</p>
 */
export class DeploymentLimitExceededException extends __BaseException {
  readonly name: "DeploymentLimitExceededException" = "DeploymentLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The description is too long.</p>
 */
export class DescriptionTooLongException extends __BaseException {
  readonly name: "DescriptionTooLongException" = "DescriptionTooLongException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescriptionTooLongException, __BaseException>) {
    super({
      name: "DescriptionTooLongException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DescriptionTooLongException.prototype);
  }
}

/**
 * @public
 * <p>The format of the alarm configuration is invalid. Possible causes include:</p>
 *         <ul>
 *             <li>
 *                 <p>The alarm list is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm object is null.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm name is empty or null or exceeds the limit of 255 characters.</p>
 *             </li>
 *             <li>
 *                 <p>Two alarms with the same name have been specified.</p>
 *             </li>
 *             <li>
 *                 <p>The alarm configuration is enabled, but the alarm list is empty.</p>
 *             </li>
 *          </ul>
 */
export class InvalidAlarmConfigException extends __BaseException {
  readonly name: "InvalidAlarmConfigException" = "InvalidAlarmConfigException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAlarmConfigException, __BaseException>) {
    super({
      name: "InvalidAlarmConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAlarmConfigException.prototype);
  }
}

/**
 * @public
 * <p>The automatic rollback configuration was specified in an invalid format. For example,
 *             automatic rollback is enabled, but an invalid triggering event type or no event types
 *             were listed.</p>
 */
export class InvalidAutoRollbackConfigException extends __BaseException {
  readonly name: "InvalidAutoRollbackConfigException" = "InvalidAutoRollbackConfigException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutoRollbackConfigException, __BaseException>) {
    super({
      name: "InvalidAutoRollbackConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutoRollbackConfigException.prototype);
  }
}

/**
 * @public
 * <p>The Auto Scaling group was specified in an invalid format or does not
 *             exist.</p>
 */
export class InvalidAutoScalingGroupException extends __BaseException {
  readonly name: "InvalidAutoScalingGroupException" = "InvalidAutoScalingGroupException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAutoScalingGroupException, __BaseException>) {
    super({
      name: "InvalidAutoScalingGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAutoScalingGroupException.prototype);
  }
}

/**
 * @public
 * <p>The deployment configuration name was specified in an invalid format.</p>
 */
export class InvalidDeploymentConfigNameException extends __BaseException {
  readonly name: "InvalidDeploymentConfigNameException" = "InvalidDeploymentConfigNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentConfigNameException, __BaseException>) {
    super({
      name: "InvalidDeploymentConfigNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentConfigNameException.prototype);
  }
}

/**
 * @public
 * <p>An invalid fileExistsBehavior option was specified to determine how CodeDeploy handles files or directories that already exist in a deployment
 *             target location, but weren't part of the previous successful deployment. Valid values
 *             include "DISALLOW," "OVERWRITE," and "RETAIN."</p>
 */
export class InvalidFileExistsBehaviorException extends __BaseException {
  readonly name: "InvalidFileExistsBehaviorException" = "InvalidFileExistsBehaviorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFileExistsBehaviorException, __BaseException>) {
    super({
      name: "InvalidFileExistsBehaviorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFileExistsBehaviorException.prototype);
  }
}

/**
 * @public
 * <p>The GitHub token is not valid.</p>
 */
export class InvalidGitHubAccountTokenException extends __BaseException {
  readonly name: "InvalidGitHubAccountTokenException" = "InvalidGitHubAccountTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGitHubAccountTokenException, __BaseException>) {
    super({
      name: "InvalidGitHubAccountTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGitHubAccountTokenException.prototype);
  }
}

/**
 * @public
 * <p>The IgnoreApplicationStopFailures value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 */
export class InvalidIgnoreApplicationStopFailuresValueException extends __BaseException {
  readonly name: "InvalidIgnoreApplicationStopFailuresValueException" =
    "InvalidIgnoreApplicationStopFailuresValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIgnoreApplicationStopFailuresValueException, __BaseException>) {
    super({
      name: "InvalidIgnoreApplicationStopFailuresValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIgnoreApplicationStopFailuresValueException.prototype);
  }
}

/**
 * @public
 * <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 */
export class InvalidLoadBalancerInfoException extends __BaseException {
  readonly name: "InvalidLoadBalancerInfoException" = "InvalidLoadBalancerInfoException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoadBalancerInfoException, __BaseException>) {
    super({
      name: "InvalidLoadBalancerInfoException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoadBalancerInfoException.prototype);
  }
}

/**
 * @public
 * <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling
 *             group was specified, the specified service role does not grant the appropriate
 *             permissions to Amazon EC2 Auto Scaling.</p>
 */
export class InvalidRoleException extends __BaseException {
  readonly name: "InvalidRoleException" = "InvalidRoleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
  }
}

/**
 * @public
 * <p>The target instance configuration is invalid. Possible causes include:</p>
 *         <ul>
 *             <li>
 *                 <p>Configuration data for target instances was entered for an in-place
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>The limit of 10 tags for a tag type was exceeded.</p>
 *             </li>
 *             <li>
 *                 <p>The combined length of the tag names exceeded the limit. </p>
 *             </li>
 *             <li>
 *                 <p>A specified tag is not currently applied to any instances.</p>
 *             </li>
 *          </ul>
 */
export class InvalidTargetInstancesException extends __BaseException {
  readonly name: "InvalidTargetInstancesException" = "InvalidTargetInstancesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetInstancesException, __BaseException>) {
    super({
      name: "InvalidTargetInstancesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetInstancesException.prototype);
  }
}

/**
 * @public
 * <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 */
export class InvalidTrafficRoutingConfigurationException extends __BaseException {
  readonly name: "InvalidTrafficRoutingConfigurationException" = "InvalidTrafficRoutingConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTrafficRoutingConfigurationException, __BaseException>) {
    super({
      name: "InvalidTrafficRoutingConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTrafficRoutingConfigurationException.prototype);
  }
}

/**
 * @public
 * <p>The UpdateOutdatedInstancesOnly value is invalid. For Lambda
 *             deployments, <code>false</code> is expected. For EC2/On-premises deployments,
 *                 <code>true</code> or <code>false</code> is expected.</p>
 */
export class InvalidUpdateOutdatedInstancesOnlyValueException extends __BaseException {
  readonly name: "InvalidUpdateOutdatedInstancesOnlyValueException" =
    "InvalidUpdateOutdatedInstancesOnlyValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUpdateOutdatedInstancesOnlyValueException, __BaseException>) {
    super({
      name: "InvalidUpdateOutdatedInstancesOnlyValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUpdateOutdatedInstancesOnlyValueException.prototype);
  }
}

/**
 * @public
 * <p>The named revision does not exist with the IAM user or Amazon Web Services account.</p>
 */
export class RevisionDoesNotExistException extends __BaseException {
  readonly name: "RevisionDoesNotExistException" = "RevisionDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionDoesNotExistException, __BaseException>) {
    super({
      name: "RevisionDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p>An API function was called too frequently.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const MinimumHealthyHostsType = {
  FLEET_PERCENT: "FLEET_PERCENT",
  HOST_COUNT: "HOST_COUNT",
} as const;

/**
 * @public
 */
export type MinimumHealthyHostsType = (typeof MinimumHealthyHostsType)[keyof typeof MinimumHealthyHostsType];

/**
 * @public
 * <p>Information about minimum healthy instance.</p>
 */
export interface MinimumHealthyHosts {
  /**
   * @public
   * <p>The minimum healthy instance type:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>HOST_COUNT</code>: The minimum number of healthy instances as an
   *                     absolute value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FLEET_PERCENT</code>: The minimum number of healthy instances as a
   *                     percentage of the total number of instances in the deployment.</p>
   *             </li>
   *          </ul>
   *         <p>In an example of nine instances, if a HOST_COUNT of six is specified, deploy to up to
   *             three instances at a time. The deployment is successful if six or more instances are
   *             deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is
   *             specified, deploy to up to five instances at a time. The deployment is successful if
   *             four or more instances are deployed to successfully. Otherwise, the deployment
   *             fails.</p>
   *         <note>
   *             <p>In a call to the <code>GetDeploymentConfig</code>, CodeDeployDefault.OneAtATime
   *                 returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This
   *                 means a deployment to only one instance at a time. (You cannot set the type to
   *                 MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with
   *                 CodeDeployDefault.OneAtATime, CodeDeploy attempts to ensure that all
   *                 instances but one are kept in a healthy state during the deployment. Although this
   *                 allows one instance at a time to be taken offline for a new deployment, it also
   *                 means that if the deployment to the last instance fails, the overall deployment is
   *                 still successful.</p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html">CodeDeploy
   *                 Instance Health</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   */
  type?: MinimumHealthyHostsType | string;

  /**
   * @public
   * <p>The minimum healthy instance value.</p>
   */
  value?: number;
}

/**
 * @public
 * <p>A configuration that shifts traffic from one version of a Lambda function
 *             or Amazon ECS task set to another in two increments. The original and target
 *                 Lambda function versions or ECS task sets are specified in the
 *             deployment's AppSpec file.</p>
 */
export interface TimeBasedCanary {
  /**
   * @public
   * <p>The percentage of traffic to shift in the first increment of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   */
  canaryPercentage?: number;

  /**
   * @public
   * <p>The number of minutes between the first and second traffic shifts of a
   *                 <code>TimeBasedCanary</code> deployment.</p>
   */
  canaryInterval?: number;
}

/**
 * @public
 * <p>A configuration that shifts traffic from one version of a Lambda function
 *             or ECS task set to another in equal increments, with an equal number of minutes between
 *             each increment. The original and target Lambda function versions or ECS task
 *             sets are specified in the deployment's AppSpec file.</p>
 */
export interface TimeBasedLinear {
  /**
   * @public
   * <p>The percentage of traffic that is shifted at the start of each increment of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   */
  linearPercentage?: number;

  /**
   * @public
   * <p>The number of minutes between each incremental traffic shift of a
   *                 <code>TimeBasedLinear</code> deployment.</p>
   */
  linearInterval?: number;
}

/**
 * @public
 * @enum
 */
export const TrafficRoutingType = {
  AllAtOnce: "AllAtOnce",
  TimeBasedCanary: "TimeBasedCanary",
  TimeBasedLinear: "TimeBasedLinear",
} as const;

/**
 * @public
 */
export type TrafficRoutingType = (typeof TrafficRoutingType)[keyof typeof TrafficRoutingType];

/**
 * @public
 * <p>The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment,
 *             or from one Amazon ECS task set to another during an Amazon ECS
 *             deployment.</p>
 */
export interface TrafficRoutingConfig {
  /**
   * @public
   * <p>The type of traffic shifting (<code>TimeBasedCanary</code> or
   *                 <code>TimeBasedLinear</code>) used by a deployment configuration.</p>
   */
  type?: TrafficRoutingType | string;

  /**
   * @public
   * <p>A configuration that shifts traffic from one version of a Lambda function
   *             or ECS task set to another in two increments. The original and target Lambda
   *             function versions or ECS task sets are specified in the deployment's AppSpec
   *             file.</p>
   */
  timeBasedCanary?: TimeBasedCanary;

  /**
   * @public
   * <p>A configuration that shifts traffic from one version of a Lambda function
   *             or Amazon ECS task set to another in equal increments, with an equal number of
   *             minutes between each increment. The original and target Lambda function
   *             versions or Amazon ECS task sets are specified in the deployment's AppSpec
   *             file.</p>
   */
  timeBasedLinear?: TimeBasedLinear;
}

/**
 * @public
 * <p>Represents the input of a <code>CreateDeploymentConfig</code> operation.</p>
 */
export interface CreateDeploymentConfigInput {
  /**
   * @public
   * <p>The name of the deployment configuration to create.</p>
   */
  deploymentConfigName: string | undefined;

  /**
   * @public
   * <p>The minimum number of healthy instances that should be available at any time during
   *             the deployment. There are two parameters expected in the input: type and value.</p>
   *         <p>The type parameter takes either of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>HOST_COUNT: The value parameter represents the minimum number of healthy
   *                     instances as an absolute value.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy
   *                     instances as a percentage of the total number of instances in the deployment. If
   *                     you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up
   *                     fractional instances.</p>
   *             </li>
   *          </ul>
   *         <p>The value parameter takes an integer.</p>
   *         <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT
   *             and a value of 95.</p>
   */
  minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   * @public
   * <p>The configuration that specifies how the deployment traffic is routed.</p>
   */
  trafficRoutingConfig?: TrafficRoutingConfig;

  /**
   * @public
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: ComputePlatform | string;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateDeploymentConfig</code> operation.</p>
 */
export interface CreateDeploymentConfigOutput {
  /**
   * @public
   * <p>A unique deployment configuration ID.</p>
   */
  deploymentConfigId?: string;
}

/**
 * @public
 * <p>A deployment configuration with the specified name with the IAM user or
 *                 Amazon Web Services account already exists.</p>
 */
export class DeploymentConfigAlreadyExistsException extends __BaseException {
  readonly name: "DeploymentConfigAlreadyExistsException" = "DeploymentConfigAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigAlreadyExistsException, __BaseException>) {
    super({
      name: "DeploymentConfigAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p>The deployment configurations limit was exceeded.</p>
 */
export class DeploymentConfigLimitExceededException extends __BaseException {
  readonly name: "DeploymentConfigLimitExceededException" = "DeploymentConfigLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentConfigLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The deployment configuration name was not specified.</p>
 */
export class DeploymentConfigNameRequiredException extends __BaseException {
  readonly name: "DeploymentConfigNameRequiredException" = "DeploymentConfigNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigNameRequiredException, __BaseException>) {
    super({
      name: "DeploymentConfigNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigNameRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The minimum healthy instance value was specified in an invalid format.</p>
 */
export class InvalidMinimumHealthyHostValueException extends __BaseException {
  readonly name: "InvalidMinimumHealthyHostValueException" = "InvalidMinimumHealthyHostValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMinimumHealthyHostValueException, __BaseException>) {
    super({
      name: "InvalidMinimumHealthyHostValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMinimumHealthyHostValueException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>CreateDeploymentGroup</code> operation.</p>
 */
export interface CreateDeploymentGroupInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The name of a new deployment group for the specified application.</p>
   */
  deploymentGroupName: string | undefined;

  /**
   * @public
   * <p>If specified, the deployment configuration name can be either one of the predefined
   *             configurations provided with CodeDeploy or a custom deployment configuration
   *             that you create by calling the create deployment configuration operation.</p>
   *         <p>
   *             <code>CodeDeployDefault.OneAtATime</code> is the default deployment configuration. It
   *             is used if a configuration isn't specified for the deployment or deployment
   *             group.</p>
   *         <p>For more information about the predefined deployment configurations in CodeDeploy, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html">Working with
   *                 Deployment Configurations in CodeDeploy</a> in the <i>CodeDeploy User Guide</i>.</p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p>The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call
   *             as ec2TagSet.</p>
   */
  ec2TagFilters?: EC2TagFilter[];

  /**
   * @public
   * <p>The on-premises instance tags on which to filter. The deployment group includes
   *             on-premises instances with any of the specified tags. Cannot be used in the same call as
   *                 <code>OnPremisesTagSet</code>.</p>
   */
  onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @public
   * <p>A list of associated Amazon EC2 Auto Scaling groups.</p>
   */
  autoScalingGroups?: string[];

  /**
   * @public
   * <p>A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on
   *             the user's behalf when interacting with Amazon Web Services services.</p>
   */
  serviceRoleArn: string | undefined;

  /**
   * @public
   * <p>Information about triggers to create when the deployment group is created. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-sns.html">Create a Trigger for an
   *                     CodeDeploy Event</a> in the <i>CodeDeploy
   *                 User Guide</i>.</p>
   */
  triggerConfigurations?: TriggerConfig[];

  /**
   * @public
   * <p>Information to add about Amazon CloudWatch alarms when the deployment group is
   *             created.</p>
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   * @public
   * <p>Configuration information for an automatic rollback that is added when a deployment
   *             group is created.</p>
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @public
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *         <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *         <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | string;

  /**
   * @public
   * <p>Information about the type of deployment, in-place or blue/green, that you want to run
   *             and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: DeploymentStyle;

  /**
   * @public
   * <p>Information about blue/green deployment options for a deployment group.</p>
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @public
   * <p>Information about the load balancer used in a deployment.</p>
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @public
   * <p>Information about groups of tags applied to Amazon EC2 instances. The
   *             deployment group includes only Amazon EC2 instances identified by all the tag
   *             groups. Cannot be used in the same call as <code>ec2TagFilters</code>.</p>
   */
  ec2TagSet?: EC2TagSet;

  /**
   * @public
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   */
  ecsServices?: ECSService[];

  /**
   * @public
   * <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only on-premises instances identified by all of the tag groups. Cannot be
   *             used in the same call as <code>onPremisesInstanceTagFilters</code>.</p>
   */
  onPremisesTagSet?: OnPremisesTagSet;

  /**
   * @public
   * <p> The metadata that you apply to CodeDeploy deployment groups to help you organize and
   *             categorize them. Each tag consists of a key and an optional value, both of which you
   *             define. </p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a <code>CreateDeploymentGroup</code> operation.</p>
 */
export interface CreateDeploymentGroupOutput {
  /**
   * @public
   * <p>A unique deployment group ID.</p>
   */
  deploymentGroupId?: string;
}

/**
 * @public
 * <p>A deployment group with the specified name with the IAM user or Amazon Web Services account already exists.</p>
 */
export class DeploymentGroupAlreadyExistsException extends __BaseException {
  readonly name: "DeploymentGroupAlreadyExistsException" = "DeploymentGroupAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupAlreadyExistsException, __BaseException>) {
    super({
      name: "DeploymentGroupAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p> The deployment groups limit was exceeded.</p>
 */
export class DeploymentGroupLimitExceededException extends __BaseException {
  readonly name: "DeploymentGroupLimitExceededException" = "DeploymentGroupLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentGroupLimitExceededException, __BaseException>) {
    super({
      name: "DeploymentGroupLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentGroupLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p> The Amazon ECS service is associated with more than one deployment groups. An
 *             Amazon ECS service can be associated with only one deployment group. </p>
 */
export class ECSServiceMappingLimitExceededException extends __BaseException {
  readonly name: "ECSServiceMappingLimitExceededException" = "ECSServiceMappingLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ECSServiceMappingLimitExceededException, __BaseException>) {
    super({
      name: "ECSServiceMappingLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ECSServiceMappingLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The configuration for the blue/green deployment group was provided in an invalid
 *             format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 */
export class InvalidBlueGreenDeploymentConfigurationException extends __BaseException {
  readonly name: "InvalidBlueGreenDeploymentConfigurationException" =
    "InvalidBlueGreenDeploymentConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlueGreenDeploymentConfigurationException, __BaseException>) {
    super({
      name: "InvalidBlueGreenDeploymentConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlueGreenDeploymentConfigurationException.prototype);
  }
}

/**
 * @public
 * <p>An invalid deployment style was specified. Valid deployment types include "IN_PLACE"
 *             and "BLUE_GREEN." Valid deployment options include "WITH_TRAFFIC_CONTROL" and
 *             "WITHOUT_TRAFFIC_CONTROL."</p>
 */
export class InvalidDeploymentStyleException extends __BaseException {
  readonly name: "InvalidDeploymentStyleException" = "InvalidDeploymentStyleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentStyleException, __BaseException>) {
    super({
      name: "InvalidDeploymentStyleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentStyleException.prototype);
  }
}

/**
 * @public
 * <p>A call was submitted that specified both Ec2TagFilters and Ec2TagSet, but only one of
 *             these data types can be used in a single call.</p>
 */
export class InvalidEC2TagCombinationException extends __BaseException {
  readonly name: "InvalidEC2TagCombinationException" = "InvalidEC2TagCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEC2TagCombinationException, __BaseException>) {
    super({
      name: "InvalidEC2TagCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEC2TagCombinationException.prototype);
  }
}

/**
 * @public
 * <p>The tag was specified in an invalid format.</p>
 */
export class InvalidEC2TagException extends __BaseException {
  readonly name: "InvalidEC2TagException" = "InvalidEC2TagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEC2TagException, __BaseException>) {
    super({
      name: "InvalidEC2TagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEC2TagException.prototype);
  }
}

/**
 * @public
 * <p> The Amazon ECS service identifier is not valid. </p>
 */
export class InvalidECSServiceException extends __BaseException {
  readonly name: "InvalidECSServiceException" = "InvalidECSServiceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidECSServiceException, __BaseException>) {
    super({
      name: "InvalidECSServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidECSServiceException.prototype);
  }
}

/**
 * @public
 * <p>The input was specified in an invalid format.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * @public
 * <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet,
 *             but only one of these data types can be used in a single call.</p>
 */
export class InvalidOnPremisesTagCombinationException extends __BaseException {
  readonly name: "InvalidOnPremisesTagCombinationException" = "InvalidOnPremisesTagCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOnPremisesTagCombinationException, __BaseException>) {
    super({
      name: "InvalidOnPremisesTagCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOnPremisesTagCombinationException.prototype);
  }
}

/**
 * @public
 * <p> A target group pair associated with this deployment is not valid. </p>
 */
export class InvalidTargetGroupPairException extends __BaseException {
  readonly name: "InvalidTargetGroupPairException" = "InvalidTargetGroupPairException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetGroupPairException, __BaseException>) {
    super({
      name: "InvalidTargetGroupPairException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetGroupPairException.prototype);
  }
}

/**
 * @public
 * <p>The trigger was specified in an invalid format.</p>
 */
export class InvalidTriggerConfigException extends __BaseException {
  readonly name: "InvalidTriggerConfigException" = "InvalidTriggerConfigException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTriggerConfigException, __BaseException>) {
    super({
      name: "InvalidTriggerConfigException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTriggerConfigException.prototype);
  }
}

/**
 * @public
 * <p>The limit for lifecycle hooks was exceeded.</p>
 */
export class LifecycleHookLimitExceededException extends __BaseException {
  readonly name: "LifecycleHookLimitExceededException" = "LifecycleHookLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecycleHookLimitExceededException, __BaseException>) {
    super({
      name: "LifecycleHookLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecycleHookLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The role ID was not specified.</p>
 */
export class RoleRequiredException extends __BaseException {
  readonly name: "RoleRequiredException" = "RoleRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RoleRequiredException, __BaseException>) {
    super({
      name: "RoleRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RoleRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The number of tag groups included in the tag set list exceeded the maximum allowed
 *             limit of 3.</p>
 */
export class TagSetListLimitExceededException extends __BaseException {
  readonly name: "TagSetListLimitExceededException" = "TagSetListLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagSetListLimitExceededException, __BaseException>) {
    super({
      name: "TagSetListLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagSetListLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The maximum allowed number of triggers was exceeded.</p>
 */
export class TriggerTargetsLimitExceededException extends __BaseException {
  readonly name: "TriggerTargetsLimitExceededException" = "TriggerTargetsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TriggerTargetsLimitExceededException, __BaseException>) {
    super({
      name: "TriggerTargetsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TriggerTargetsLimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteApplication</code> operation.</p>
 */
export interface DeleteApplicationInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteDeploymentConfig</code> operation.</p>
 */
export interface DeleteDeploymentConfigInput {
  /**
   * @public
   * <p>The name of a deployment configuration associated with the IAM user or
   *                 Amazon Web Services account.</p>
   */
  deploymentConfigName: string | undefined;
}

/**
 * @public
 * <p>The deployment configuration is still in use.</p>
 */
export class DeploymentConfigInUseException extends __BaseException {
  readonly name: "DeploymentConfigInUseException" = "DeploymentConfigInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeploymentConfigInUseException, __BaseException>) {
    super({
      name: "DeploymentConfigInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeploymentConfigInUseException.prototype);
  }
}

/**
 * @public
 * <p>An invalid operation was detected.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteDeploymentGroup</code> operation.</p>
 */
export interface DeleteDeploymentGroupInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The name of a deployment group for the specified application.</p>
   */
  deploymentGroupName: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>DeleteDeploymentGroup</code> operation.</p>
 */
export interface DeleteDeploymentGroupOutput {
  /**
   * @public
   * <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, CodeDeploy successfully removed all
   *             corresponding Auto Scaling lifecycle event hooks from the Amazon EC2
   *             instances in the Auto Scaling group. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from
   *             the Amazon EC2 instances in the Auto Scaling group.</p>
   */
  hooksNotCleanedUp?: AutoScalingGroup[];
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteGitHubAccount</code> operation.</p>
 */
export interface DeleteGitHubAccountTokenInput {
  /**
   * @public
   * <p>The name of the GitHub account connection to delete.</p>
   */
  tokenName?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>DeleteGitHubAccountToken</code> operation.</p>
 */
export interface DeleteGitHubAccountTokenOutput {
  /**
   * @public
   * <p>The name of the GitHub account connection that was deleted.</p>
   */
  tokenName?: string;
}

/**
 * @public
 * <p>No GitHub account connection exists with the named specified in the call.</p>
 */
export class GitHubAccountTokenDoesNotExistException extends __BaseException {
  readonly name: "GitHubAccountTokenDoesNotExistException" = "GitHubAccountTokenDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GitHubAccountTokenDoesNotExistException, __BaseException>) {
    super({
      name: "GitHubAccountTokenDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GitHubAccountTokenDoesNotExistException.prototype);
  }
}

/**
 * @public
 * <p>The call is missing a required GitHub account connection name.</p>
 */
export class GitHubAccountTokenNameRequiredException extends __BaseException {
  readonly name: "GitHubAccountTokenNameRequiredException" = "GitHubAccountTokenNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GitHubAccountTokenNameRequiredException, __BaseException>) {
    super({
      name: "GitHubAccountTokenNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GitHubAccountTokenNameRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The format of the specified GitHub account connection name is invalid.</p>
 */
export class InvalidGitHubAccountTokenNameException extends __BaseException {
  readonly name: "InvalidGitHubAccountTokenNameException" = "InvalidGitHubAccountTokenNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGitHubAccountTokenNameException, __BaseException>) {
    super({
      name: "InvalidGitHubAccountTokenNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGitHubAccountTokenNameException.prototype);
  }
}

/**
 * @public
 * <p>The API used does not support the deployment.</p>
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
  }
}

/**
 * @public
 * <p>The specified resource could not be validated.</p>
 */
export class ResourceValidationException extends __BaseException {
  readonly name: "ResourceValidationException" = "ResourceValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceValidationException, __BaseException>) {
    super({
      name: "ResourceValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdInput {
  /**
   * @public
   * <p>The unique ID of an external resource (for example, a CloudFormation stack
   *             ID) that is linked to one or more CodeDeploy resources.</p>
   */
  externalId?: string;
}

/**
 * @public
 */
export interface DeleteResourcesByExternalIdOutput {}

/**
 * @public
 * <p>Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.</p>
 */
export interface DeregisterOnPremisesInstanceInput {
  /**
   * @public
   * <p>The name of the on-premises instance to deregister.</p>
   */
  instanceName: string | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>GetApplication</code> operation.</p>
 */
export interface GetApplicationInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>GetApplication</code> operation.</p>
 */
export interface GetApplicationOutput {
  /**
   * @public
   * <p>Information about the application.</p>
   */
  application?: ApplicationInfo;
}

/**
 * @public
 * <p>Represents the input of a <code>GetApplicationRevision</code> operation.</p>
 */
export interface GetApplicationRevisionInput {
  /**
   * @public
   * <p>The name of the application that corresponds to the revision.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>Information about the application revision to get, including type and location.</p>
   */
  revision: RevisionLocation | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>GetApplicationRevision</code> operation.</p>
 */
export interface GetApplicationRevisionOutput {
  /**
   * @public
   * <p>The name of the application that corresponds to the revision.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>Additional information about the revision, including type and location.</p>
   */
  revision?: RevisionLocation;

  /**
   * @public
   * <p>General information about the revision.</p>
   */
  revisionInfo?: GenericRevisionInfo;
}

/**
 * @public
 * <p>Represents the input of a <code>GetDeployment</code> operation.</p>
 */
export interface GetDeploymentInput {
  /**
   * @public
   * <p> The unique ID of a deployment associated with the IAM user or Amazon Web Services account. </p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>GetDeployment</code> operation.</p>
 */
export interface GetDeploymentOutput {
  /**
   * @public
   * <p>Information about the deployment.</p>
   */
  deploymentInfo?: DeploymentInfo;
}

/**
 * @public
 * <p>Represents the input of a <code>GetDeploymentConfig</code> operation.</p>
 */
export interface GetDeploymentConfigInput {
  /**
   * @public
   * <p>The name of a deployment configuration associated with the IAM user or
   *                 Amazon Web Services account.</p>
   */
  deploymentConfigName: string | undefined;
}

/**
 * @public
 * <p>Information about a deployment configuration.</p>
 */
export interface DeploymentConfigInfo {
  /**
   * @public
   * <p>The deployment configuration ID.</p>
   */
  deploymentConfigId?: string;

  /**
   * @public
   * <p>The deployment configuration name.</p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p>Information about the number or percentage of minimum healthy instance.</p>
   */
  minimumHealthyHosts?: MinimumHealthyHosts;

  /**
   * @public
   * <p>The time at which the deployment configuration was created.</p>
   */
  createTime?: Date;

  /**
   * @public
   * <p>The destination platform type for the deployment (<code>Lambda</code>,
   *                 <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: ComputePlatform | string;

  /**
   * @public
   * <p>The configuration that specifies how the deployment traffic is routed. Used for
   *             deployments with a Lambda or Amazon ECS compute platform
   *             only.</p>
   */
  trafficRoutingConfig?: TrafficRoutingConfig;
}

/**
 * @public
 * <p>Represents the output of a <code>GetDeploymentConfig</code> operation.</p>
 */
export interface GetDeploymentConfigOutput {
  /**
   * @public
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfigInfo?: DeploymentConfigInfo;
}

/**
 * @public
 * <p>Represents the input of a <code>GetDeploymentGroup</code> operation.</p>
 */
export interface GetDeploymentGroupInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The name of a deployment group for the specified application.</p>
   */
  deploymentGroupName: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>GetDeploymentGroup</code> operation.</p>
 */
export interface GetDeploymentGroupOutput {
  /**
   * @public
   * <p>Information about the deployment group.</p>
   */
  deploymentGroupInfo?: DeploymentGroupInfo;
}

/**
 * @public
 * <p> Represents the input of a <code>GetDeploymentInstance</code> operation. </p>
 */
export interface GetDeploymentInstanceInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p> The unique ID of an instance in the deployment group. </p>
   */
  instanceId: string | undefined;
}

/**
 * @public
 * <p> Represents the output of a <code>GetDeploymentInstance</code> operation. </p>
 */
export interface GetDeploymentInstanceOutput {
  /**
   * @public
   * @deprecated
   *
   * <p> Information about the instance. </p>
   */
  instanceSummary?: InstanceSummary;
}

/**
 * @public
 */
export interface GetDeploymentTargetInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The unique ID of a deployment target. </p>
   */
  targetId?: string;
}

/**
 * @public
 */
export interface GetDeploymentTargetOutput {
  /**
   * @public
   * <p> A deployment target that contains information about a deployment such as its status,
   *             lifecycle events, and when it was last updated. It also contains metadata about the
   *             deployment target. The deployment target metadata depends on the deployment target's
   *             type (<code>instanceTarget</code>, <code>lambdaTarget</code>, or
   *             <code>ecsTarget</code>). </p>
   */
  deploymentTarget?: DeploymentTarget;
}

/**
 * @public
 * <p> Represents the input of a <code>GetOnPremisesInstance</code> operation. </p>
 */
export interface GetOnPremisesInstanceInput {
  /**
   * @public
   * <p> The name of the on-premises instance about which to get information. </p>
   */
  instanceName: string | undefined;
}

/**
 * @public
 * <p> Represents the output of a <code>GetOnPremisesInstance</code> operation. </p>
 */
export interface GetOnPremisesInstanceOutput {
  /**
   * @public
   * <p> Information about the on-premises instance. </p>
   */
  instanceInfo?: InstanceInfo;
}

/**
 * @public
 * <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 */
export class InvalidBucketNameFilterException extends __BaseException {
  readonly name: "InvalidBucketNameFilterException" = "InvalidBucketNameFilterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBucketNameFilterException, __BaseException>) {
    super({
      name: "InvalidBucketNameFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBucketNameFilterException.prototype);
  }
}

/**
 * @public
 * <p>The deployed state filter was specified in an invalid format.</p>
 */
export class InvalidDeployedStateFilterException extends __BaseException {
  readonly name: "InvalidDeployedStateFilterException" = "InvalidDeployedStateFilterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeployedStateFilterException, __BaseException>) {
    super({
      name: "InvalidDeployedStateFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeployedStateFilterException.prototype);
  }
}

/**
 * @public
 * <p>The specified key prefix filter was specified in an invalid format.</p>
 */
export class InvalidKeyPrefixFilterException extends __BaseException {
  readonly name: "InvalidKeyPrefixFilterException" = "InvalidKeyPrefixFilterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeyPrefixFilterException, __BaseException>) {
    super({
      name: "InvalidKeyPrefixFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeyPrefixFilterException.prototype);
  }
}

/**
 * @public
 * <p>The next token was specified in an invalid format.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * @public
 * <p>The column name to sort by is either not present or was specified in an invalid
 *             format.</p>
 */
export class InvalidSortByException extends __BaseException {
  readonly name: "InvalidSortByException" = "InvalidSortByException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortByException, __BaseException>) {
    super({
      name: "InvalidSortByException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortByException.prototype);
  }
}

/**
 * @public
 * <p>The sort order was specified in an invalid format.</p>
 */
export class InvalidSortOrderException extends __BaseException {
  readonly name: "InvalidSortOrderException" = "InvalidSortOrderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortOrderException, __BaseException>) {
    super({
      name: "InvalidSortOrderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortOrderException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ListStateFilterAction = {
  Exclude: "exclude",
  Ignore: "ignore",
  Include: "include",
} as const;

/**
 * @public
 */
export type ListStateFilterAction = (typeof ListStateFilterAction)[keyof typeof ListStateFilterAction];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ascending",
  Descending: "descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p> Represents the input of a <code>ListApplicationRevisions</code> operation. </p>
 */
export interface ListApplicationRevisionsInput {
  /**
   * @public
   * <p> The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account. </p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The column name to use to sort the list results:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>registerTime</code>: Sort by the time the revisions were registered with
   *                         CodeDeploy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>firstUsedTime</code>: Sort by the time the revisions were first used in
   *                     a deployment.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>lastUsedTime</code>: Sort by the time the revisions were last used in a
   *                     deployment.</p>
   *             </li>
   *          </ul>
   *         <p> If not specified or set to null, the results are returned in an arbitrary order.
   *         </p>
   */
  sortBy?: ApplicationRevisionSortBy | string;

  /**
   * @public
   * <p> The order in which to sort the list results: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ascending</code>: ascending order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>descending</code>: descending order.</p>
   *             </li>
   *          </ul>
   *         <p>If not specified, the results are sorted in ascending order.</p>
   *         <p>If set to null, the results are sorted in an arbitrary order.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * @public
   * <p> An Amazon S3 bucket name to limit the search for revisions. </p>
   *         <p> If set to null, all of the user's buckets are searched. </p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p> A key prefix for the set of Amazon S3 objects to limit the search for
   *             revisions. </p>
   */
  s3KeyPrefix?: string;

  /**
   * @public
   * <p> Whether to list revisions based on whether the revision is the target revision of a
   *             deployment group: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>include</code>: List revisions that are target revisions of a deployment
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>exclude</code>: Do not list revisions that are target revisions of a
   *                     deployment group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ignore</code>: List all revisions.</p>
   *             </li>
   *          </ul>
   */
  deployed?: ListStateFilterAction | string;

  /**
   * @public
   * <p>An identifier returned from the previous <code>ListApplicationRevisions</code> call.
   *             It can be used to return the next set of applications in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListApplicationRevisions</code> operation.</p>
 */
export interface ListApplicationRevisionsOutput {
  /**
   * @public
   * <p>A list of locations that contain the matching revisions.</p>
   */
  revisions?: RevisionLocation[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListApplications</code> operation.</p>
 */
export interface ListApplicationsInput {
  /**
   * @public
   * <p>An identifier returned from the previous list applications call. It can be used to
   *             return the next set of applications in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a ListApplications operation.</p>
 */
export interface ListApplicationsOutput {
  /**
   * @public
   * <p>A list of application names.</p>
   */
  applications?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list applications call to return the next set of applications in
   *             the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListDeploymentConfigs</code> operation.</p>
 */
export interface ListDeploymentConfigsInput {
  /**
   * @public
   * <p>An identifier returned from the previous <code>ListDeploymentConfigs</code> call. It
   *             can be used to return the next set of deployment configurations in the list. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListDeploymentConfigs</code> operation.</p>
 */
export interface ListDeploymentConfigsOutput {
  /**
   * @public
   * <p>A list of deployment configurations, including built-in configurations such as
   *                 <code>CodeDeployDefault.OneAtATime</code>.</p>
   */
  deploymentConfigsList?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment configurations call to return the next set of
   *             deployment configurations in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListDeploymentGroups</code> operation.</p>
 */
export interface ListDeploymentGroupsInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>An identifier returned from the previous list deployment groups call. It can be used
   *             to return the next set of deployment groups in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListDeploymentGroups</code> operation.</p>
 */
export interface ListDeploymentGroupsOutput {
  /**
   * @public
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>A list of deployment group names.</p>
   */
  deploymentGroups?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment groups call to return the next set of deployment
   *             groups in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An instance type was specified for an in-place deployment. Instance types are
 *             supported for blue/green deployments only.</p>
 */
export class InvalidDeploymentInstanceTypeException extends __BaseException {
  readonly name: "InvalidDeploymentInstanceTypeException" = "InvalidDeploymentInstanceTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeploymentInstanceTypeException, __BaseException>) {
    super({
      name: "InvalidDeploymentInstanceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeploymentInstanceTypeException.prototype);
  }
}

/**
 * @public
 * <p>The specified instance status does not exist.</p>
 */
export class InvalidInstanceStatusException extends __BaseException {
  readonly name: "InvalidInstanceStatusException" = "InvalidInstanceStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceStatusException, __BaseException>) {
    super({
      name: "InvalidInstanceStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceStatusException.prototype);
  }
}

/**
 * @public
 * <p>An invalid instance type was specified for instances in a blue/green deployment. Valid
 *             values include "Blue" for an original environment and "Green" for a replacement
 *             environment.</p>
 */
export class InvalidInstanceTypeException extends __BaseException {
  readonly name: "InvalidInstanceTypeException" = "InvalidInstanceTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInstanceTypeException, __BaseException>) {
    super({
      name: "InvalidInstanceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInstanceTypeException.prototype);
  }
}

/**
 * @public
 * <p> The target filter name is invalid. </p>
 */
export class InvalidTargetFilterNameException extends __BaseException {
  readonly name: "InvalidTargetFilterNameException" = "InvalidTargetFilterNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetFilterNameException, __BaseException>) {
    super({
      name: "InvalidTargetFilterNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetFilterNameException.prototype);
  }
}

/**
 * @public
 * <p> Represents the input of a <code>ListDeploymentInstances</code> operation. </p>
 */
export interface ListDeploymentInstancesInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>An identifier returned from the previous list deployment instances call. It can be
   *             used to return the next set of deployment instances in the list.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A subset of instances to list by status:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Pending</code>: Include those instances with pending deployments.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code>: Include those instances where deployments are still
   *                     in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Succeeded</code>: Include those instances with successful
   *                     deployments.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Include those instances with failed deployments.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Skipped</code>: Include those instances with skipped deployments.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Unknown</code>: Include those instances with deployments in an unknown
   *                     state.</p>
   *             </li>
   *          </ul>
   */
  instanceStatusFilter?: (InstanceStatus | string)[];

  /**
   * @public
   * <p>The set of instances in a blue/green deployment, either those in the original
   *             environment ("BLUE") or those in the replacement environment ("GREEN"), for which you
   *             want to view instance information.</p>
   */
  instanceTypeFilter?: (_InstanceType | string)[];
}

/**
 * @public
 * <p>Represents the output of a <code>ListDeploymentInstances</code> operation.</p>
 */
export interface ListDeploymentInstancesOutput {
  /**
   * @public
   * <p>A list of instance IDs.</p>
   */
  instancesList?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployment instances call to return the next set of
   *             deployment instances in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The external ID was specified in an invalid format.</p>
 */
export class InvalidExternalIdException extends __BaseException {
  readonly name: "InvalidExternalIdException" = "InvalidExternalIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExternalIdException, __BaseException>) {
    super({
      name: "InvalidExternalIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExternalIdException.prototype);
  }
}

/**
 * @public
 * <p>The specified time range was specified in an invalid format.</p>
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name: "InvalidTimeRangeException" = "InvalidTimeRangeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTimeRangeException, __BaseException>) {
    super({
      name: "InvalidTimeRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTimeRangeException.prototype);
  }
}

/**
 * @public
 * <p>Information about a time range.</p>
 */
export interface TimeRange {
  /**
   * @public
   * <p>The start time of the time range.</p>
   *         <note>
   *             <p>Specify null to leave the start time open-ended.</p>
   *         </note>
   */
  start?: Date;

  /**
   * @public
   * <p>The end time of the time range.</p>
   *         <note>
   *             <p>Specify null to leave the end time open-ended.</p>
   *         </note>
   */
  end?: Date;
}

/**
 * @public
 * <p>Represents the input of a <code>ListDeployments</code> operation.</p>
 */
export interface ListDeploymentsInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   *         <note>
   *             <p>If <code>applicationName</code> is specified, then
   *                     <code>deploymentGroupName</code> must be specified. If it is not specified, then
   *                     <code>deploymentGroupName</code> must not be specified. </p>
   *         </note>
   */
  applicationName?: string;

  /**
   * @public
   * <p>The name of a deployment group for the specified application.</p>
   *         <note>
   *             <p>If <code>deploymentGroupName</code> is specified, then
   *                     <code>applicationName</code> must be specified. If it is not specified, then
   *                     <code>applicationName</code> must not be specified. </p>
   *         </note>
   */
  deploymentGroupName?: string;

  /**
   * @public
   * <p>The unique ID of an external resource for returning deployments linked to the external
   *             resource.</p>
   */
  externalId?: string;

  /**
   * @public
   * <p>A subset of deployments to list by status:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Created</code>: Include created deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Queued</code>: Include queued deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>In Progress</code>: Include in-progress deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Succeeded</code>: Include successful deployments in the resulting
   *                     list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Include failed deployments in the resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code>: Include stopped deployments in the resulting
   *                     list.</p>
   *             </li>
   *          </ul>
   */
  includeOnlyStatuses?: (DeploymentStatus | string)[];

  /**
   * @public
   * <p>A time range (start and end) for returning a subset of the list of deployments.</p>
   */
  createTimeRange?: TimeRange;

  /**
   * @public
   * <p>An identifier returned from the previous list deployments call. It can be used to
   *             return the next set of deployments in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListDeployments</code> operation.</p>
 */
export interface ListDeploymentsOutput {
  /**
   * @public
   * <p>A list of deployment IDs.</p>
   */
  deployments?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list deployments call to return the next set of deployments in
   *             the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TargetFilterName = {
  SERVER_INSTANCE_LABEL: "ServerInstanceLabel",
  TARGET_STATUS: "TargetStatus",
} as const;

/**
 * @public
 */
export type TargetFilterName = (typeof TargetFilterName)[keyof typeof TargetFilterName];

/**
 * @public
 */
export interface ListDeploymentTargetsInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> A token identifier returned from the previous <code>ListDeploymentTargets</code>
   *             call. It can be used to return the next set of deployment targets in the list. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> A key used to filter the returned targets. The two valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>TargetStatus</code> - A <code>TargetStatus</code> filter string can be
   *                         <code>Failed</code>, <code>InProgress</code>, <code>Pending</code>,
   *                         <code>Ready</code>, <code>Skipped</code>, <code>Succeeded</code>, or
   *                         <code>Unknown</code>. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ServerInstanceLabel</code> - A <code>ServerInstanceLabel</code> filter
   *                     string can be <code>Blue</code> or <code>Green</code>. </p>
   *             </li>
   *          </ul>
   */
  targetFilters?: Record<string, string[]>;
}

/**
 * @public
 */
export interface ListDeploymentTargetsOutput {
  /**
   * @public
   * <p> The unique IDs of deployment targets. </p>
   */
  targetIds?: string[];

  /**
   * @public
   * <p> If a large amount of information is returned, a token identifier is also returned. It
   *             can be used in a subsequent <code>ListDeploymentTargets</code> call to return the next
   *             set of deployment targets in the list. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>ListGitHubAccountTokenNames</code> operation.</p>
 */
export interface ListGitHubAccountTokenNamesInput {
  /**
   * @public
   * <p>An identifier returned from the previous <code>ListGitHubAccountTokenNames</code>
   *             call. It can be used to return the next set of names in the list. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.</p>
 */
export interface ListGitHubAccountTokenNamesOutput {
  /**
   * @public
   * <p>A list of names of connections to GitHub accounts.</p>
   */
  tokenNameList?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent <code>ListGitHubAccountTokenNames</code> call to return the next
   *             set of names in the list. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The registration status was specified in an invalid format.</p>
 */
export class InvalidRegistrationStatusException extends __BaseException {
  readonly name: "InvalidRegistrationStatusException" = "InvalidRegistrationStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegistrationStatusException, __BaseException>) {
    super({
      name: "InvalidRegistrationStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegistrationStatusException.prototype);
  }
}

/**
 * @public
 * <p>The tag filter was specified in an invalid format.</p>
 */
export class InvalidTagFilterException extends __BaseException {
  readonly name: "InvalidTagFilterException" = "InvalidTagFilterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagFilterException, __BaseException>) {
    super({
      name: "InvalidTagFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagFilterException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  Deregistered: "Deregistered",
  Registered: "Registered",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * <p>Represents the input of a <code>ListOnPremisesInstances</code> operation.</p>
 */
export interface ListOnPremisesInstancesInput {
  /**
   * @public
   * <p>The registration status of the on-premises instances:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Deregistered</code>: Include deregistered on-premises instances in the
   *                     resulting list.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Registered</code>: Include registered on-premises instances in the
   *                     resulting list.</p>
   *             </li>
   *          </ul>
   */
  registrationStatus?: RegistrationStatus | string;

  /**
   * @public
   * <p>The on-premises instance tags that are used to restrict the on-premises instance names
   *             returned.</p>
   */
  tagFilters?: TagFilter[];

  /**
   * @public
   * <p>An identifier returned from the previous list on-premises instances call. It can be
   *             used to return the next set of on-premises instances in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the output of the list on-premises instances operation.</p>
 */
export interface ListOnPremisesInstancesOutput {
  /**
   * @public
   * <p>The list of matching on-premises instance names.</p>
   */
  instanceNames?: string[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list on-premises instances call to return the next set of
   *             on-premises instances in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p> The specified ARN is not in a valid format. </p>
 */
export class InvalidArnException extends __BaseException {
  readonly name: "InvalidArnException" = "InvalidArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p> The ARN of a CodeDeploy resource. <code>ListTagsForResource</code> returns all the
   *             tags associated with the resource that is identified by the <code>ResourceArn</code>.
   *         </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An identifier returned from the previous <code>ListTagsForResource</code> call. It can
   *             be used to return the next set of applications in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p> A list of tags returned by <code>ListTagsForResource</code>. The tags are associated
   *             with the resource identified by the input <code>ResourceArn</code> parameter. </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If a large amount of information is returned, an identifier is also returned. It can
   *             be used in a subsequent list application revisions call to return the next set of
   *             application revisions in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> The ARN of a resource is required, but was not found. </p>
 */
export class ResourceArnRequiredException extends __BaseException {
  readonly name: "ResourceArnRequiredException" = "ResourceArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnRequiredException, __BaseException>) {
    super({
      name: "ResourceArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnRequiredException.prototype);
  }
}

/**
 * @public
 * <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your
 *             AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are
 *             valid.</p>
 */
export class InvalidLifecycleEventHookExecutionIdException extends __BaseException {
  readonly name: "InvalidLifecycleEventHookExecutionIdException" = "InvalidLifecycleEventHookExecutionIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLifecycleEventHookExecutionIdException, __BaseException>) {
    super({
      name: "InvalidLifecycleEventHookExecutionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLifecycleEventHookExecutionIdException.prototype);
  }
}

/**
 * @public
 * <p>The result of a Lambda validation function that verifies a lifecycle event
 *             is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>
 */
export class InvalidLifecycleEventHookExecutionStatusException extends __BaseException {
  readonly name: "InvalidLifecycleEventHookExecutionStatusException" =
    "InvalidLifecycleEventHookExecutionStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLifecycleEventHookExecutionStatusException, __BaseException>) {
    super({
      name: "InvalidLifecycleEventHookExecutionStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLifecycleEventHookExecutionStatusException.prototype);
  }
}

/**
 * @public
 * <p>An attempt to return the status of an already completed lifecycle event
 *             occurred.</p>
 */
export class LifecycleEventAlreadyCompletedException extends __BaseException {
  readonly name: "LifecycleEventAlreadyCompletedException" = "LifecycleEventAlreadyCompletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecycleEventAlreadyCompletedException, __BaseException>) {
    super({
      name: "LifecycleEventAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecycleEventAlreadyCompletedException.prototype);
  }
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusInput {
  /**
   * @public
   * <p> The unique ID of a deployment. Pass this ID to a Lambda function that
   *             validates a deployment lifecycle event. </p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p> The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is
   *             specified in the <code>hooks</code> section of the AppSpec file. </p>
   */
  lifecycleEventHookExecutionId?: string;

  /**
   * @public
   * <p>The result of a Lambda function that validates a deployment lifecycle
   *             event. The values listed in <b>Valid Values</b> are valid for
   *             lifecycle statuses in general; however, only <code>Succeeded</code> and
   *                 <code>Failed</code> can be passed successfully in your API call.</p>
   */
  status?: LifecycleEventStatus | string;
}

/**
 * @public
 */
export interface PutLifecycleEventHookExecutionStatusOutput {
  /**
   * @public
   * <p>The execution ID of the lifecycle event hook. A hook is specified in the
   *                 <code>hooks</code> section of the deployment's AppSpec file.</p>
   */
  lifecycleEventHookExecutionId?: string;
}

/**
 * @public
 * <p>Represents the input of a RegisterApplicationRevision operation.</p>
 */
export interface RegisterApplicationRevisionInput {
  /**
   * @public
   * <p>The name of an CodeDeploy application associated with the IAM user or Amazon Web Services account.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>A comment about the revision.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information about the application revision to register, including type and
   *             location.</p>
   */
  revision: RevisionLocation | undefined;
}

/**
 * @public
 * <p>No IAM ARN was included in the request. You must use an IAM session ARN or IAM user ARN in the request.</p>
 */
export class IamArnRequiredException extends __BaseException {
  readonly name: "IamArnRequiredException" = "IamArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamArnRequiredException, __BaseException>) {
    super({
      name: "IamArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamArnRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The request included an IAM session ARN that has already been used to
 *             register a different instance.</p>
 */
export class IamSessionArnAlreadyRegisteredException extends __BaseException {
  readonly name: "IamSessionArnAlreadyRegisteredException" = "IamSessionArnAlreadyRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamSessionArnAlreadyRegisteredException, __BaseException>) {
    super({
      name: "IamSessionArnAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamSessionArnAlreadyRegisteredException.prototype);
  }
}

/**
 * @public
 * <p>The specified IAM user ARN is already registered with an on-premises
 *             instance.</p>
 */
export class IamUserArnAlreadyRegisteredException extends __BaseException {
  readonly name: "IamUserArnAlreadyRegisteredException" = "IamUserArnAlreadyRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamUserArnAlreadyRegisteredException, __BaseException>) {
    super({
      name: "IamUserArnAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamUserArnAlreadyRegisteredException.prototype);
  }
}

/**
 * @public
 * <p>An IAM user ARN was not specified.</p>
 */
export class IamUserArnRequiredException extends __BaseException {
  readonly name: "IamUserArnRequiredException" = "IamUserArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamUserArnRequiredException, __BaseException>) {
    super({
      name: "IamUserArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamUserArnRequiredException.prototype);
  }
}

/**
 * @public
 * <p>The specified on-premises instance name is already registered.</p>
 */
export class InstanceNameAlreadyRegisteredException extends __BaseException {
  readonly name: "InstanceNameAlreadyRegisteredException" = "InstanceNameAlreadyRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNameAlreadyRegisteredException, __BaseException>) {
    super({
      name: "InstanceNameAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNameAlreadyRegisteredException.prototype);
  }
}

/**
 * @public
 * <p>The IAM session ARN was specified in an invalid format.</p>
 */
export class InvalidIamSessionArnException extends __BaseException {
  readonly name: "InvalidIamSessionArnException" = "InvalidIamSessionArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIamSessionArnException, __BaseException>) {
    super({
      name: "InvalidIamSessionArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIamSessionArnException.prototype);
  }
}

/**
 * @public
 * <p>The IAM user ARN was specified in an invalid format.</p>
 */
export class InvalidIamUserArnException extends __BaseException {
  readonly name: "InvalidIamUserArnException" = "InvalidIamUserArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIamUserArnException, __BaseException>) {
    super({
      name: "InvalidIamUserArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIamUserArnException.prototype);
  }
}

/**
 * @public
 * <p>Both an IAM user ARN and an IAM session ARN were
 *             included in the request. Use only one ARN type.</p>
 */
export class MultipleIamArnsProvidedException extends __BaseException {
  readonly name: "MultipleIamArnsProvidedException" = "MultipleIamArnsProvidedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultipleIamArnsProvidedException, __BaseException>) {
    super({
      name: "MultipleIamArnsProvidedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultipleIamArnsProvidedException.prototype);
  }
}

/**
 * @public
 * <p>Represents the input of the register on-premises instance operation.</p>
 */
export interface RegisterOnPremisesInstanceInput {
  /**
   * @public
   * <p>The name of the on-premises instance to register.</p>
   */
  instanceName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM session to associate with the on-premises
   *             instance.</p>
   */
  iamSessionArn?: string;

  /**
   * @public
   * <p>The ARN of the IAM user to associate with the on-premises
   *             instance.</p>
   */
  iamUserArn?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code>
 *             operation.</p>
 */
export interface RemoveTagsFromOnPremisesInstancesInput {
  /**
   * @public
   * <p>The tag key-value pairs to remove from the on-premises instances.</p>
   */
  tags: Tag[] | undefined;

  /**
   * @public
   * <p>The names of the on-premises instances from which to remove tags.</p>
   */
  instanceNames: string[] | undefined;
}

/**
 * @public
 */
export interface SkipWaitTimeForInstanceTerminationInput {
  /**
   * @public
   * <p> The unique ID of a blue/green deployment for which you want to skip the instance
   *             termination wait time. </p>
   */
  deploymentId?: string;
}

/**
 * @public
 * <p> Represents the input of a <code>StopDeployment</code> operation. </p>
 */
export interface StopDeploymentInput {
  /**
   * @public
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p> Indicates, when a deployment is stopped, whether instances that have been updated
   *             should be rolled back to the previous version of the application revision. </p>
   */
  autoRollbackEnabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const StopStatus = {
  PENDING: "Pending",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type StopStatus = (typeof StopStatus)[keyof typeof StopStatus];

/**
 * @public
 * <p> Represents the output of a <code>StopDeployment</code> operation. </p>
 */
export interface StopDeploymentOutput {
  /**
   * @public
   * <p>The status of the stop deployment operation:</p>
   *         <ul>
   *             <li>
   *                 <p>Pending: The stop operation is pending.</p>
   *             </li>
   *             <li>
   *                 <p>Succeeded: The stop operation was successful.</p>
   *             </li>
   *          </ul>
   */
  status?: StopStatus | string;

  /**
   * @public
   * <p>An accompanying status message.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p> The ARN of a resource, such as a CodeDeploy application or deployment group. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p> A list of tags that <code>TagResource</code> associates with a resource. The resource
   *             is identified by the <code>ResourceArn</code> input parameter. </p>
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
   * @public
   * <p> The Amazon Resource Name (ARN) that specifies from which resource to disassociate the
   *             tags with the keys in the <code>TagKeys</code> input parameter. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p> A list of keys of <code>Tag</code> objects. The <code>Tag</code> objects identified
   *             by the keys are disassociated from the resource specified by the
   *                 <code>ResourceArn</code> input parameter. </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>Represents the input of an <code>UpdateApplication</code> operation.</p>
 */
export interface UpdateApplicationInput {
  /**
   * @public
   * <p>The current name of the application you want to change.</p>
   */
  applicationName?: string;

  /**
   * @public
   * <p>The new name to give the application.</p>
   */
  newApplicationName?: string;
}

/**
 * @public
 * <p>Represents the input of an <code>UpdateDeploymentGroup</code> operation.</p>
 */
export interface UpdateDeploymentGroupInput {
  /**
   * @public
   * <p>The application name that corresponds to the deployment group to update.</p>
   */
  applicationName: string | undefined;

  /**
   * @public
   * <p>The current name of the deployment group.</p>
   */
  currentDeploymentGroupName: string | undefined;

  /**
   * @public
   * <p>The new name of the deployment group, if you want to change it.</p>
   */
  newDeploymentGroupName?: string;

  /**
   * @public
   * <p>The replacement deployment configuration name to use, if you want to change it.</p>
   */
  deploymentConfigName?: string;

  /**
   * @public
   * <p>The replacement set of Amazon EC2 tags on which to filter, if you want to
   *             change them. To keep the existing tags, enter their names. To remove tags, do not enter
   *             any tag names.</p>
   */
  ec2TagFilters?: EC2TagFilter[];

  /**
   * @public
   * <p>The replacement set of on-premises instance tags on which to filter, if you want to
   *             change them. To keep the existing tags, enter their names. To remove tags, do not enter
   *             any tag names.</p>
   */
  onPremisesInstanceTagFilters?: TagFilter[];

  /**
   * @public
   * <p>The replacement list of Auto Scaling groups to be included in the deployment
   *             group, if you want to change them.</p>
   *         <ul>
   *             <li>
   *                 <p>To keep the Auto Scaling groups, enter their names or do not specify this
   *                     parameter. </p>
   *             </li>
   *             <li>
   *                 <p>To remove Auto Scaling groups, specify a non-null empty list of Auto Scaling group names to detach all CodeDeploy-managed Auto Scaling lifecycle hooks. For examples, see <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/codedeploy/latest/userguide/troubleshooting-auto-scaling.html#troubleshooting-auto-scaling-heartbeat">Amazon EC2 instances in an Amazon EC2 Auto Scaling group fail to
   *                         launch and receive the error "Heartbeat Timeout"</a> in the
   *                             <i>CodeDeploy User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  autoScalingGroups?: string[];

  /**
   * @public
   * <p>A replacement ARN for the service role, if you want to change it.</p>
   */
  serviceRoleArn?: string;

  /**
   * @public
   * <p>Information about triggers to change when the deployment group is updated. For
   *             examples, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/how-to-notify-edit.html">Edit a Trigger in a
   *                 CodeDeploy Deployment Group</a> in the <i>CodeDeploy User
   *                 Guide</i>.</p>
   */
  triggerConfigurations?: TriggerConfig[];

  /**
   * @public
   * <p>Information to add or change about Amazon CloudWatch alarms when the deployment group
   *             is updated.</p>
   */
  alarmConfiguration?: AlarmConfiguration;

  /**
   * @public
   * <p>Information for an automatic rollback configuration that is added or changed when a
   *             deployment group is updated.</p>
   */
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  /**
   * @public
   * <p>Indicates what happens when new Amazon EC2 instances are launched
   *             mid-deployment and do not receive the deployed application revision.</p>
   *         <p>If this option is set to <code>UPDATE</code> or is unspecified, CodeDeploy initiates
   *             one or more 'auto-update outdated instances' deployments to apply the deployed
   *             application revision to the new Amazon EC2 instances.</p>
   *         <p>If this option is set to <code>IGNORE</code>, CodeDeploy does not initiate a
   *             deployment to update the new Amazon EC2 instances. This may result in instances
   *             having different revisions.</p>
   */
  outdatedInstancesStrategy?: OutdatedInstancesStrategy | string;

  /**
   * @public
   * <p>Information about the type of deployment, either in-place or blue/green, you want to
   *             run and whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentStyle?: DeploymentStyle;

  /**
   * @public
   * <p>Information about blue/green deployment options for a deployment group.</p>
   */
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  /**
   * @public
   * <p>Information about the load balancer used in a deployment.</p>
   */
  loadBalancerInfo?: LoadBalancerInfo;

  /**
   * @public
   * <p>Information about groups of tags applied to on-premises instances. The deployment
   *             group includes only Amazon EC2 instances identified by all the tag
   *             groups.</p>
   */
  ec2TagSet?: EC2TagSet;

  /**
   * @public
   * <p> The target Amazon ECS services in the deployment group. This applies only to
   *             deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name
   *             pair using the format <code><clustername>:<servicename></code>. </p>
   */
  ecsServices?: ECSService[];

  /**
   * @public
   * <p>Information about an on-premises instance tag set. The deployment group includes only
   *             on-premises instances identified by all the tag groups.</p>
   */
  onPremisesTagSet?: OnPremisesTagSet;
}

/**
 * @public
 * <p>Represents the output of an <code>UpdateDeploymentGroup</code> operation.</p>
 */
export interface UpdateDeploymentGroupOutput {
  /**
   * @public
   * <p>If the output contains no data, and the corresponding deployment group contained at
   *             least one Auto Scaling group, CodeDeploy successfully removed all
   *             corresponding Auto Scaling lifecycle event hooks from the Amazon Web Services account. If the output contains data, CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the Amazon Web Services account.</p>
   */
  hooksNotCleanedUp?: AutoScalingGroup[];
}
