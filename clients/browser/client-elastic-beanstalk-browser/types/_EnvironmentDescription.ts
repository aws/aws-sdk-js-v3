import {
  _EnvironmentResourcesDescription,
  _UnmarshalledEnvironmentResourcesDescription
} from "./_EnvironmentResourcesDescription";
import {
  _EnvironmentTier,
  _UnmarshalledEnvironmentTier
} from "./_EnvironmentTier";
import {
  _EnvironmentLink,
  _UnmarshalledEnvironmentLink
} from "./_EnvironmentLink";

/**
 * <p>Describes the properties of an environment.</p>
 */
export interface _EnvironmentDescription {
  /**
   * <p>The name of this environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ID of this environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the application associated with this environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The application version deployed in this environment.</p>
   */
  VersionLabel?: string;

  /**
   * <p> The name of the <code>SolutionStack</code> deployed with this environment. </p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the configuration template used to originally launch this environment.</p>
   */
  TemplateName?: string;

  /**
   * <p>Describes this environment.</p>
   */
  Description?: string;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the LoadBalancer. For single-instance environments, the IP address of the instance.</p>
   */
  EndpointURL?: string;

  /**
   * <p>The URL to the CNAME for this environment.</p>
   */
  CNAME?: string;

  /**
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: Date | string | number;

  /**
   * <p>The last modified date for this environment.</p>
   */
  DateUpdated?: Date | string | number;

  /**
   * <p>The current operational status of the environment:</p> <ul> <li> <p> <code>Launching</code>: Environment is in the process of initial deployment.</p> </li> <li> <p> <code>Updating</code>: Environment is in the process of updating its configuration settings or application version.</p> </li> <li> <p> <code>Ready</code>: Environment is available to have an action performed on it, such as update or terminate.</p> </li> <li> <p> <code>Terminating</code>: Environment is in the shut-down process.</p> </li> <li> <p> <code>Terminated</code>: Environment is not running.</p> </li> </ul>
   */
  Status?:
    | "Launching"
    | "Updating"
    | "Ready"
    | "Terminating"
    | "Terminated"
    | string;

  /**
   * <p>Indicates if there is an in-progress environment configuration update or application version deployment that you can cancel.</p> <p> <code>true:</code> There is an update in progress. </p> <p> <code>false:</code> There are no updates currently in progress. </p>
   */
  AbortableOperationInProgress?: boolean;

  /**
   * <p>Describes the health status of the environment. AWS Elastic Beanstalk indicates the failure levels for a running environment:</p> <ul> <li> <p> <code>Red</code>: Indicates the environment is not responsive. Occurs when three or more consecutive failures occur for an environment.</p> </li> <li> <p> <code>Yellow</code>: Indicates that something is wrong. Occurs when two consecutive failures occur for an environment.</p> </li> <li> <p> <code>Green</code>: Indicates the environment is healthy and fully functional.</p> </li> <li> <p> <code>Grey</code>: Default health for a new environment. The environment is not fully launched and health checks have not started or health checks are suspended during an <code>UpdateEnvironment</code> or <code>RestartEnvironment</code> request.</p> </li> </ul> <p> Default: <code>Grey</code> </p>
   */
  Health?: "Green" | "Yellow" | "Red" | "Grey" | string;

  /**
   * <p>Returns the health status of the application running in your environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
   */
  HealthStatus?:
    | "NoData"
    | "Unknown"
    | "Pending"
    | "Ok"
    | "Info"
    | "Warning"
    | "Degraded"
    | "Severe"
    | "Suspended"
    | string;

  /**
   * <p>The description of the AWS resources used by this environment.</p>
   */
  Resources?: _EnvironmentResourcesDescription;

  /**
   * <p>Describes the current tier of this environment.</p>
   */
  Tier?: _EnvironmentTier;

  /**
   * <p>A list of links to other environments in the same group.</p>
   */
  EnvironmentLinks?: Array<_EnvironmentLink> | Iterable<_EnvironmentLink>;

  /**
   * <p>The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.</p>
   */
  EnvironmentArn?: string;
}

export interface _UnmarshalledEnvironmentDescription
  extends _EnvironmentDescription {
  /**
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The last modified date for this environment.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The description of the AWS resources used by this environment.</p>
   */
  Resources?: _UnmarshalledEnvironmentResourcesDescription;

  /**
   * <p>Describes the current tier of this environment.</p>
   */
  Tier?: _UnmarshalledEnvironmentTier;

  /**
   * <p>A list of links to other environments in the same group.</p>
   */
  EnvironmentLinks?: Array<_UnmarshalledEnvironmentLink>;
}
