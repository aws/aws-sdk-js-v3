// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GreengrassV2ServiceException as __BaseException } from "./GreengrassV2ServiceException";

/**
 * @public
 * <p>You don't have permission to perform the action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these
 *       requests.</p>
 */
export interface AssociateClientDeviceWithCoreDeviceEntry {
  /**
   * @public
   * <p>The name of the IoT thing that represents the client device to associate.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 * <p>Contains an error that occurs from a request to associate a client device with a core
 *       device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these
 *       errors.</p>
 */
export interface AssociateClientDeviceWithCoreDeviceErrorEntry {
  /**
   * @public
   * <p>The name of the IoT thing whose associate request failed.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The error code for the request.</p>
   */
  code?: string;

  /**
   * @public
   * <p>A message that provides additional information about the error.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Contains information about a client device that is associated to a core device for cloud
 *       discovery.</p>
 */
export interface AssociatedClientDevice {
  /**
   * @public
   * <p>The name of the IoT thing that represents the associated client device.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The time that the client device was associated, expressed in ISO 8601 format.</p>
   */
  associationTimestamp?: Date;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your
   *       Amazon Web Services account in this Amazon Web Services Region.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * @public
   * <p>The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this
   *       Amazon Web Services Region.</p>
   */
  associatedAt?: string;
}

/**
 * @public
 * <p>IoT Greengrass can't process your request right now. Try again later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The amount of time to wait before you retry the request.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Contains information about a validation exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the exception field.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The message of the exception field.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the validation exception.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>The list of fields that failed to validate.</p>
   */
  fields?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * @public
 */
export interface BatchAssociateClientDeviceWithCoreDeviceRequest {
  /**
   * @public
   * <p>The list of client devices to associate.</p>
   */
  entries?: AssociateClientDeviceWithCoreDeviceEntry[];

  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateClientDeviceWithCoreDeviceResponse {
  /**
   * @public
   * <p>The list of any errors for the entries in the request. Each error entry contains the name
   *       of the IoT thing that failed to associate.</p>
   */
  errorEntries?: AssociateClientDeviceWithCoreDeviceErrorEntry[];
}

/**
 * @public
 * <p>The requested resource can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that isn't found.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that isn't found.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The amount of time to wait before you retry the request.</p>
   */
  retryAfterSeconds?: number;

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
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Contains a request to disassociate a client device from a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation consumes a list of these
 *       requests.</p>
 */
export interface DisassociateClientDeviceFromCoreDeviceEntry {
  /**
   * @public
   * <p>The name of the IoT thing that represents the client device to disassociate.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
  /**
   * @public
   * <p>The list of client devices to disassociate.</p>
   */
  entries?: DisassociateClientDeviceFromCoreDeviceEntry[];

  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 * <p>Contains an error that occurs from a request to disassociate a client device from a core
 *       device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html">BatchDisassociateClientDeviceWithCoreDevice</a> operation returns a list of these
 *       errors.</p>
 */
export interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
  /**
   * @public
   * <p>The name of the IoT thing whose disassociate request failed.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The error code for the request.</p>
   */
  code?: string;

  /**
   * @public
   * <p>A message that provides additional information about the error.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
  /**
   * @public
   * <p>The list of any errors for the entries in the request. Each error entry contains the name
   *       of the IoT thing that failed to disassociate.</p>
   */
  errorEntries?: DisassociateClientDeviceFromCoreDeviceErrorEntry[];
}

/**
 * @public
 */
export interface CancelDeploymentRequest {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface CancelDeploymentResponse {
  /**
   * @public
   * <p>A message that communicates if the cancel was successful.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that conflicts with the request.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that conflicts with the request.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const CloudComponentState = {
  DEPLOYABLE: "DEPLOYABLE",
  DEPRECATED: "DEPRECATED",
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  REQUESTED: "REQUESTED",
} as const;

/**
 * @public
 */
export type CloudComponentState = (typeof CloudComponentState)[keyof typeof CloudComponentState];

/**
 * @public
 * @enum
 */
export const VendorGuidance = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISCONTINUED: "DISCONTINUED",
} as const;

/**
 * @public
 */
export type VendorGuidance = (typeof VendorGuidance)[keyof typeof VendorGuidance];

/**
 * @public
 * <p>Contains the status of a component version in the IoT Greengrass service.</p>
 */
export interface CloudComponentStatus {
  /**
   * @public
   * <p>The state of the component version.</p>
   */
  componentState?: CloudComponentState;

  /**
   * @public
   * <p>A message that communicates details, such as errors, about the status of the component
   *       version.</p>
   */
  message?: string;

  /**
   * @public
   * <p>A dictionary of errors that communicate why the component version is in an error state.
   *       For example, if IoT Greengrass can't access an artifact for the component version, then
   *         <code>errors</code> contains the artifact's URI as a key, and the error message as the value
   *       for that key.</p>
   */
  errors?: Record<string, string>;

  /**
   * @public
   * <p>The vendor guidance state for the component version. This state indicates whether
   *       the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – This component version is available and recommended for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCONTINUED</code> – This component version has been discontinued by its publisher.
   *           You can deploy this component version, but we recommend that you use a different version of this component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> – This component version has been deleted by its publisher, so you can't
   *           deploy it. If you have any existing deployments that specify this component version, those deployments will fail.</p>
   *             </li>
   *          </ul>
   */
  vendorGuidance?: VendorGuidance;

  /**
   * @public
   * <p>A message that communicates details about the vendor guidance state
   *     of the component version. This message communicates why a component version is discontinued or deleted.</p>
   */
  vendorGuidanceMessage?: string;
}

/**
 * @public
 * <p>Contains information about a platform that a component supports.</p>
 */
export interface ComponentPlatform {
  /**
   * @public
   * <p>The friendly name of the platform. This name helps you identify the platform.</p>
   *          <p>If you omit this parameter, IoT Greengrass creates a friendly name from the <code>os</code> and
   *         <code>architecture</code> of the platform.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A dictionary of attributes for the platform. The IoT Greengrass Core software defines the
   *         <code>os</code> and <code>architecture</code> by default. You can specify additional
   *       platform attributes for a core device when you deploy the Greengrass nucleus component. For more
   *       information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html">Greengrass nucleus
   *         component</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  attributes?: Record<string, string>;
}

/**
 * @public
 * <p>Contains information about the latest version of a component.</p>
 */
export interface ComponentLatestVersion {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The time at which the component was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The description of the component version.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The publisher of the component version.</p>
   */
  publisher?: string;

  /**
   * @public
   * <p>The platforms that the component version supports.</p>
   */
  platforms?: ComponentPlatform[];
}

/**
 * @public
 * <p>Contains information about a component.</p>
 */
export interface Component {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The latest version of the component and its details.</p>
   */
  latestVersion?: ComponentLatestVersion;
}

/**
 * @public
 * <p>Contains information about a component that is a candidate to deploy to a Greengrass core
 *       device.</p>
 */
export interface ComponentCandidate {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The version requirements for the component's dependencies. Greengrass core devices get the
   *       version requirements from component recipes.</p>
   *          <p>IoT Greengrass V2 uses semantic version constraints. For more information, see <a href="https://semver.org/">Semantic Versioning</a>.</p>
   */
  versionRequirements?: Record<string, string>;
}

/**
 * @public
 * <p>Contains information about a deployment's update to a component's configuration on
 *       Greengrass core devices. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component
 *         configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 */
export interface ComponentConfigurationUpdate {
  /**
   * @public
   * <p>A serialized JSON string that contains the configuration object to merge to target
   *       devices. The core device merges this configuration with the component's existing
   *       configuration. If this is the first time a component deploys on a device, the core device
   *       merges this configuration with the component's default configuration. This means that the core
   *       device keeps it's existing configuration for keys and values that you don't specify in this
   *       object. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#merge-configuration-update">Merge configuration updates</a> in the <i>IoT Greengrass V2 Developer
   *       Guide</i>.</p>
   */
  merge?: string;

  /**
   * @public
   * <p>The list of configuration nodes to reset to default values on target devices. Use JSON
   *       pointers to specify each node to reset. JSON pointers start with a forward slash
   *         (<code>/</code>) and use forward slashes to separate the key for each level in the object.
   *       For more information, see the <a href="https://tools.ietf.org/html/rfc6901">JSON pointer
   *         specification</a> and <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#reset-configuration-update">Reset configuration updates</a> in the <i>IoT Greengrass V2 Developer
   *       Guide</i>.</p>
   */
  reset?: string[];
}

/**
 * @public
 * @enum
 */
export const ComponentDependencyType = {
  HARD: "HARD",
  SOFT: "SOFT",
} as const;

/**
 * @public
 */
export type ComponentDependencyType = (typeof ComponentDependencyType)[keyof typeof ComponentDependencyType];

/**
 * @public
 * <p>Contains information about a component dependency for a Lambda function component.</p>
 */
export interface ComponentDependencyRequirement {
  /**
   * @public
   * <p>The component version requirement for the component dependency.</p>
   *          <p>IoT Greengrass V2 uses semantic version constraints. For more information, see <a href="https://semver.org/">Semantic Versioning</a>.</p>
   */
  versionRequirement?: string;

  /**
   * @public
   * <p>The type of this dependency. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SOFT</code> – The component doesn't restart if the dependency changes
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HARD</code> – The component restarts if the dependency changes
   *           state.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>HARD</code>
   *          </p>
   */
  dependencyType?: ComponentDependencyType;
}

/**
 * @public
 * <p>Contains information about system resource limits that the IoT Greengrass Core software applies to a
 *       component's processes. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.</p>
 */
export interface SystemResourceLimits {
  /**
   * @public
   * <p>The maximum amount of RAM, expressed in kilobytes, that a component's processes can use on
   *       the core device.</p>
   */
  memory?: number;

  /**
   * @public
   * <p>The maximum amount of CPU time that a component's processes can use on the core device. A
   *       core device's total CPU time is equivalent to the device's number of CPU cores. For example,
   *       on a core device with 4 CPU cores, you can set this value to <code>2</code> to limit the
   *       component's processes to 50 percent usage of each CPU core. On a device with 1 CPU core, you
   *       can set this value to <code>0.25</code> to limit the component's processes to 25 percent usage
   *       of the CPU. If you set this value to a number greater than the number of CPU cores, the IoT Greengrass Core
   *       software doesn't limit the component's CPU usage.</p>
   */
  cpus?: number;
}

/**
 * @public
 * <p>Contains information system user and group that the IoT Greengrass Core software uses to run component
 *       processes on the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer
 *         Guide</i>.</p>
 */
export interface ComponentRunWith {
  /**
   * @public
   * <p>The POSIX system user and, optionally, group to use to run this component on Linux core
   *       devices. The user, and group if specified, must exist on each Linux core device. Specify the
   *       user and group separated by a colon (<code>:</code>) in the following format:
   *         <code>user:group</code>. The group is optional. If you don't specify a group, the IoT Greengrass Core
   *       software uses the primary user for the group.</p>
   *          <p>If you omit this parameter, the IoT Greengrass Core software uses the default system user and group that
   *       you configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a>.</p>
   */
  posixUser?: string;

  /**
   * @public
   * <p>The system resource limits to apply to this component's process on the core device. IoT Greengrass
   *       currently supports this feature on only Linux core devices.</p>
   *          <p>If you omit this parameter, the IoT Greengrass Core software uses the default system resource limits
   *       that you configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits">Configure system resource limits for components</a>.</p>
   */
  systemResourceLimits?: SystemResourceLimits;

  /**
   * @public
   * <p>The Windows user to use to run this component on Windows core devices. The user must exist
   *       on each Windows core device, and its name and password must be in the LocalSystem account's
   *       Credentials Manager instance.</p>
   *          <p>If you omit this parameter, the IoT Greengrass Core software uses the default Windows user that you
   *       configure on the Greengrass nucleus component. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a>.</p>
   */
  windowsUser?: string;
}

/**
 * @public
 * <p>Contains information about a component to deploy.</p>
 */
export interface ComponentDeploymentSpecification {
  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The configuration updates to deploy for the component. You can define
   *         <i>reset</i> updates and <i>merge</i> updates. A reset updates
   *       the keys that you specify to the default configuration for the component. A merge updates the
   *       core device's component configuration with the keys and values that you specify. The IoT Greengrass Core
   *       software applies reset updates before it applies merge updates. For more information, see
   *         <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html">Update component
   *         configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  configurationUpdate?: ComponentConfigurationUpdate;

  /**
   * @public
   * <p>The system user and group that the IoT Greengrass Core software uses to run component processes on the
   *       core device. If you omit this parameter, the IoT Greengrass Core software uses the system user and group
   *       that you configure for the core device. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user">Configure the user and group that run components</a> in the <i>IoT Greengrass V2 Developer
   *         Guide</i>.</p>
   */
  runWith?: ComponentRunWith;
}

/**
 * @public
 * <p>Contains information about a component version in a list.</p>
 */
export interface ComponentVersionListItem {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const ComponentVisibilityScope = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type ComponentVisibilityScope = (typeof ComponentVisibilityScope)[keyof typeof ComponentVisibilityScope];

/**
 * @public
 * <p>Contains information about an endpoint and port where client devices can connect to an
 *       MQTT broker on a Greengrass core device.</p>
 */
export interface ConnectivityInfo {
  /**
   * @public
   * <p>An ID for the connectivity information.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The IP address or DNS address where client devices can connect to an MQTT broker on the
   *       Greengrass core device.</p>
   */
  hostAddress?: string;

  /**
   * @public
   * <p>The port where the MQTT broker operates on the core device. This port is typically 8883,
   *       which is the default port for the MQTT broker component that runs on core devices.</p>
   */
  portNumber?: number;

  /**
   * @public
   * <p>Additional metadata to provide to client devices that connect to this core device.</p>
   */
  metadata?: string;
}

/**
 * @public
 * @enum
 */
export const CoreDeviceStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type CoreDeviceStatus = (typeof CoreDeviceStatus)[keyof typeof CoreDeviceStatus];

/**
 * @public
 * <p>Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass
 *       Core software.</p>
 */
export interface CoreDevice {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName?: string;

  /**
   * @public
   * <p>The status of the core device. Core devices can have the following
   *       statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state
   *           on the core device.</p>
   *             </li>
   *          </ul>
   */
  status?: CoreDeviceStatus;

  /**
   * @public
   * <p>The time at which the core device's status last updated, expressed in ISO 8601
   *       format.</p>
   */
  lastStatusUpdateTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const LambdaEventSourceType = {
  IOT_CORE: "IOT_CORE",
  PUB_SUB: "PUB_SUB",
} as const;

/**
 * @public
 */
export type LambdaEventSourceType = (typeof LambdaEventSourceType)[keyof typeof LambdaEventSourceType];

/**
 * @public
 * <p>Contains information about an event source for an Lambda function. The event source
 *       defines the topics on which this Lambda function subscribes to receive messages that run the
 *       function.</p>
 */
export interface LambdaEventSource {
  /**
   * @public
   * <p>The topic to which to subscribe to receive event messages.</p>
   */
  topic: string | undefined;

  /**
   * @public
   * <p>The type of event source. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUB_SUB</code> – Subscribe to local publish/subscribe messages. This
   *           event source type doesn't support MQTT wildcards (<code>+</code> and <code>#</code>) in
   *           the event source topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IOT_CORE</code> – Subscribe to Amazon Web Services IoT Core MQTT messages. This event source
   *           type supports MQTT wildcards (<code>+</code> and <code>#</code>) in the event source
   *           topic.</p>
   *             </li>
   *          </ul>
   */
  type: LambdaEventSourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const LambdaInputPayloadEncodingType = {
  BINARY: "binary",
  JSON: "json",
} as const;

/**
 * @public
 */
export type LambdaInputPayloadEncodingType =
  (typeof LambdaInputPayloadEncodingType)[keyof typeof LambdaInputPayloadEncodingType];

/**
 * @public
 * @enum
 */
export const LambdaFilesystemPermission = {
  RO: "ro",
  RW: "rw",
} as const;

/**
 * @public
 */
export type LambdaFilesystemPermission = (typeof LambdaFilesystemPermission)[keyof typeof LambdaFilesystemPermission];

/**
 * @public
 * <p>Contains information about a device that Linux processes in a container can access.</p>
 */
export interface LambdaDeviceMount {
  /**
   * @public
   * <p>The mount path for the device in the file system.</p>
   */
  path: string | undefined;

  /**
   * @public
   * <p>The permission to access the device: read/only (<code>ro</code>) or read/write
   *         (<code>rw</code>).</p>
   *          <p>Default: <code>ro</code>
   *          </p>
   */
  permission?: LambdaFilesystemPermission;

  /**
   * @public
   * <p>Whether or not to add the component's system user as an owner of the device.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  addGroupOwner?: boolean;
}

/**
 * @public
 * <p>Contains information about a volume that Linux processes in a container can access. When
 *       you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the
 *       container.</p>
 */
export interface LambdaVolumeMount {
  /**
   * @public
   * <p>The path to the physical volume in the file system.</p>
   */
  sourcePath: string | undefined;

  /**
   * @public
   * <p>The path to the logical volume in the file system.</p>
   */
  destinationPath: string | undefined;

  /**
   * @public
   * <p>The permission to access the volume: read/only (<code>ro</code>) or read/write
   *         (<code>rw</code>).</p>
   *          <p>Default: <code>ro</code>
   *          </p>
   */
  permission?: LambdaFilesystemPermission;

  /**
   * @public
   * <p>Whether or not to add the IoT Greengrass user group as an owner of the volume.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  addGroupOwner?: boolean;
}

/**
 * @public
 * <p>Contains information about a container in which Lambda functions run on Greengrass core
 *       devices.</p>
 */
export interface LambdaContainerParams {
  /**
   * @public
   * <p>The memory size of the container, expressed in kilobytes.</p>
   *          <p>Default: <code>16384</code> (16 MB)</p>
   */
  memorySizeInKB?: number;

  /**
   * @public
   * <p>Whether or not the container can read information from the device's <code>/sys</code>
   *       folder.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  mountROSysfs?: boolean;

  /**
   * @public
   * <p>The list of volumes that the container can access.</p>
   */
  volumes?: LambdaVolumeMount[];

  /**
   * @public
   * <p>The list of system devices that the container can access.</p>
   */
  devices?: LambdaDeviceMount[];
}

/**
 * @public
 * @enum
 */
export const LambdaIsolationMode = {
  GREENGRASS_CONTAINER: "GreengrassContainer",
  NO_CONTAINER: "NoContainer",
} as const;

/**
 * @public
 */
export type LambdaIsolationMode = (typeof LambdaIsolationMode)[keyof typeof LambdaIsolationMode];

/**
 * @public
 * <p>Contains parameters for a Linux process that contains an Lambda function.</p>
 */
export interface LambdaLinuxProcessParams {
  /**
   * @public
   * <p>The isolation mode for the process that contains the Lambda function. The process can run
   *       in an isolated runtime environment inside the IoT Greengrass container, or as a regular process outside
   *       any container.</p>
   *          <p>Default: <code>GreengrassContainer</code>
   *          </p>
   */
  isolationMode?: LambdaIsolationMode;

  /**
   * @public
   * <p>The parameters for the container in which the Lambda function runs.</p>
   */
  containerParams?: LambdaContainerParams;
}

/**
 * @public
 * <p>Contains parameters for a Lambda function that runs on IoT Greengrass.</p>
 */
export interface LambdaExecutionParameters {
  /**
   * @public
   * <p>The list of event sources to which to subscribe to receive work messages. The Lambda
   *       function runs when it receives a message from an event source. You can subscribe this function
   *       to local publish/subscribe messages and Amazon Web Services IoT Core MQTT messages.</p>
   */
  eventSources?: LambdaEventSource[];

  /**
   * @public
   * <p>The maximum size of the message queue for the Lambda function component. The IoT Greengrass core
   *       stores messages in a FIFO (first-in-first-out) queue until it can run the Lambda function to
   *       consume each message.</p>
   */
  maxQueueSize?: number;

  /**
   * @public
   * <p>The maximum number of instances that a non-pinned Lambda function can run at the same
   *       time.</p>
   */
  maxInstancesCount?: number;

  /**
   * @public
   * <p>The maximum amount of time in seconds that a non-pinned Lambda function can idle before the
   *       IoT Greengrass Core software stops its process.</p>
   */
  maxIdleTimeInSeconds?: number;

  /**
   * @public
   * <p>The maximum amount of time in seconds that the Lambda function can process a work
   *       item.</p>
   */
  timeoutInSeconds?: number;

  /**
   * @public
   * <p>The interval in seconds at which a pinned (also known as long-lived) Lambda function
   *       component sends status updates to the Lambda manager component.</p>
   */
  statusTimeoutInSeconds?: number;

  /**
   * @public
   * <p>Whether or not the Lambda function is pinned, or long-lived.</p>
   *          <ul>
   *             <li>
   *                <p>A pinned Lambda function starts when IoT Greengrass starts and keeps running in its own
   *           container.</p>
   *             </li>
   *             <li>
   *                <p>A non-pinned Lambda function starts only when it receives a work item and exists after
   *           it idles for <code>maxIdleTimeInSeconds</code>. If the function has multiple work items,
   *           the IoT Greengrass Core software creates multiple instances of the function.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  pinned?: boolean;

  /**
   * @public
   * <p>The encoding type that the Lambda function supports.</p>
   *          <p>Default: <code>json</code>
   *          </p>
   */
  inputPayloadEncodingType?: LambdaInputPayloadEncodingType;

  /**
   * @public
   * <p>The list of arguments to pass to the Lambda function when it runs.</p>
   */
  execArgs?: string[];

  /**
   * @public
   * <p>The map of environment variables that are available to the Lambda function when it
   *       runs.</p>
   */
  environmentVariables?: Record<string, string>;

  /**
   * @public
   * <p>The parameters for the Linux process that contains the Lambda function.</p>
   */
  linuxProcessParams?: LambdaLinuxProcessParams;
}

/**
 * @public
 * <p>Contains information about an Lambda function to import to create a component.</p>
 */
export interface LambdaFunctionRecipeSource {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function. The ARN must include the version of the function to
   *       import. You can't use version aliases like <code>$LATEST</code>.</p>
   */
  lambdaArn: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   *          <p>Defaults to the name of the Lambda function.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   *          <p>Defaults to the version of the Lambda function as a semantic version. For example, if your
   *       function version is <code>3</code>, the component version becomes <code>3.0.0</code>.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The platforms that the component version supports.</p>
   */
  componentPlatforms?: ComponentPlatform[];

  /**
   * @public
   * <p>The component versions on which this Lambda function component depends.</p>
   */
  componentDependencies?: Record<string, ComponentDependencyRequirement>;

  /**
   * @public
   * <p>The system and runtime parameters for the Lambda function as it runs on the Greengrass core
   *       device.</p>
   */
  componentLambdaParameters?: LambdaExecutionParameters;
}

/**
 * @public
 */
export interface CreateComponentVersionRequest {
  /**
   * @public
   * <p>The recipe to use to create the component. The recipe defines the component's metadata,
   *       parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p>
   *          <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>
   */
  inlineRecipe?: Uint8Array;

  /**
   * @public
   * <p>The parameters to create a component from a Lambda function.</p>
   *          <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>
   */
  lambdaFunction?: LambdaFunctionRecipeSource;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent.
   *     Idempotency means that the request is successfully processed only once, even if you send the request multiple times.
   *     When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service
   *     returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for
   *     idempotent requests for up to 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateComponentVersionResponse {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName: string | undefined;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion: string | undefined;

  /**
   * @public
   * <p>The time at which the component was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp: Date | undefined;

  /**
   * @public
   * <p>The status of the component version in IoT Greengrass V2. This status
   *       is different from the status of the component on a core device.</p>
   */
  status: CloudComponentStatus | undefined;
}

/**
 * @public
 * <p>The request is already in progress. This exception occurs when you use a client token for
 *       multiple requests while IoT Greengrass is still processing an earlier request that uses the same client
 *       token.</p>
 */
export class RequestAlreadyInProgressException extends __BaseException {
  readonly name: "RequestAlreadyInProgressException" = "RequestAlreadyInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestAlreadyInProgressException, __BaseException>) {
    super({
      name: "RequestAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestAlreadyInProgressException.prototype);
  }
}

/**
 * @public
 * <p>Your request exceeds a service quota. For example, you might have the maximum number of
 *       components that you can create.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that exceeds the service quota.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that exceeds the service quota.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  quotaCode: string | undefined;

  /**
   * @public
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  serviceCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
  }
}

/**
 * @public
 * @enum
 */
export const DeploymentComponentUpdatePolicyAction = {
  NOTIFY_COMPONENTS: "NOTIFY_COMPONENTS",
  SKIP_NOTIFY_COMPONENTS: "SKIP_NOTIFY_COMPONENTS",
} as const;

/**
 * @public
 */
export type DeploymentComponentUpdatePolicyAction =
  (typeof DeploymentComponentUpdatePolicyAction)[keyof typeof DeploymentComponentUpdatePolicyAction];

/**
 * @public
 * <p>Contains information about a deployment's policy that defines when components are safe to
 *       update.</p>
 *          <p>Each component on a device can report whether or not it's ready to update. After a
 *       component and its dependencies are ready, they can apply the update in the deployment. You can
 *       configure whether or not the deployment notifies components of an update and waits for a
 *       response. You specify the amount of time each component has to respond to the update
 *       notification.</p>
 */
export interface DeploymentComponentUpdatePolicy {
  /**
   * @public
   * <p>The amount of time in seconds that each component on a device has to report that it's safe
   *       to update. If the component waits for longer than this timeout, then the deployment proceeds
   *       on the device.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   */
  timeoutInSeconds?: number;

  /**
   * @public
   * <p>Whether or not to notify components and wait for components to become safe to update.
   *       Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOTIFY_COMPONENTS</code> – The deployment notifies each component before
   *           it stops and updates that component. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetocomponentupdates">SubscribeToComponentUpdates</a> IPC operation to receive these notifications. Then,
   *           components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-defercomponentupdate">DeferComponentUpdate</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create
   *             deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_NOTIFY_COMPONENTS</code> – The deployment doesn't notify components
   *           or wait for them to be safe to update.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>NOTIFY_COMPONENTS</code>
   *          </p>
   */
  action?: DeploymentComponentUpdatePolicyAction;
}

/**
 * @public
 * <p>Contains information about how long a component on a core device can validate its
 *       configuration updates before it times out. Components can use the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates">SubscribeToValidateConfigurationUpdates</a> IPC operation to receive notifications when
 *       a deployment specifies a configuration update. Then, components can respond with the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport">SendConfigurationValidityReport</a> IPC operation. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create
 *         deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 */
export interface DeploymentConfigurationValidationPolicy {
  /**
   * @public
   * <p>The amount of time in seconds that a component can validate its configuration updates. If
   *       the validation time exceeds this timeout, then the deployment proceeds for the device.</p>
   *          <p>Default: <code>30</code>
   *          </p>
   */
  timeoutInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const DeploymentFailureHandlingPolicy = {
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type DeploymentFailureHandlingPolicy =
  (typeof DeploymentFailureHandlingPolicy)[keyof typeof DeploymentFailureHandlingPolicy];

/**
 * @public
 * <p>Contains information about policies that define how a deployment updates components and
 *       handles failure.</p>
 */
export interface DeploymentPolicies {
  /**
   * @public
   * <p>The failure handling policy for the configuration deployment. This policy defines what to
   *       do if the deployment fails.</p>
   *          <p>Default: <code>ROLLBACK</code>
   *          </p>
   */
  failureHandlingPolicy?: DeploymentFailureHandlingPolicy;

  /**
   * @public
   * <p>The component update policy for the configuration deployment. This policy defines when
   *       it's safe to deploy the configuration to devices.</p>
   */
  componentUpdatePolicy?: DeploymentComponentUpdatePolicy;

  /**
   * @public
   * <p>The configuration validation policy for the configuration deployment. This policy defines
   *       how long each component has to validate its configure updates.</p>
   */
  configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
}

/**
 * @public
 * @enum
 */
export const IoTJobAbortAction = {
  CANCEL: "CANCEL",
} as const;

/**
 * @public
 */
export type IoTJobAbortAction = (typeof IoTJobAbortAction)[keyof typeof IoTJobAbortAction];

/**
 * @public
 * @enum
 */
export const IoTJobExecutionFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type IoTJobExecutionFailureType = (typeof IoTJobExecutionFailureType)[keyof typeof IoTJobExecutionFailureType];

/**
 * @public
 * <p>Contains criteria that define when and how to cancel a job.</p>
 *          <p>The deployment stops if the following conditions are true:</p>
 *          <ol>
 *             <li>
 *                <p>The number of things that receive the deployment exceeds the
 *             <code>minNumberOfExecutedThings</code>.</p>
 *             </li>
 *             <li>
 *                <p>The percentage of failures with type <code>failureType</code> exceeds the
 *             <code>thresholdPercentage</code>.</p>
 *             </li>
 *          </ol>
 */
export interface IoTJobAbortCriteria {
  /**
   * @public
   * <p>The type of job deployment failure that can cancel a job.</p>
   */
  failureType: IoTJobExecutionFailureType | undefined;

  /**
   * @public
   * <p>The action to perform when the criteria are met.</p>
   */
  action: IoTJobAbortAction | undefined;

  /**
   * @public
   * <p>The minimum percentage of <code>failureType</code> failures that occur before the job can
   *       cancel.</p>
   *          <p>This parameter supports up to two digits after the decimal (for example, you can specify
   *         <code>10.9</code> or <code>10.99</code>, but not <code>10.999</code>).</p>
   */
  thresholdPercentage: number | undefined;

  /**
   * @public
   * <p>The minimum number of things that receive the configuration before the job can
   *       cancel.</p>
   */
  minNumberOfExecutedThings: number | undefined;
}

/**
 * @public
 * <p>Contains a list of criteria that define when and how to cancel a configuration
 *       deployment.</p>
 */
export interface IoTJobAbortConfig {
  /**
   * @public
   * <p>The list of criteria that define when and how to cancel the configuration
   *       deployment.</p>
   */
  criteriaList: IoTJobAbortCriteria[] | undefined;
}

/**
 * @public
 * <p>Contains information about criteria to meet before a job increases its rollout rate.
 *       Specify either <code>numberOfNotifiedThings</code> or
 *       <code>numberOfSucceededThings</code>.</p>
 */
export interface IoTJobRateIncreaseCriteria {
  /**
   * @public
   * <p>The number of devices to receive the job notification before the rollout rate
   *       increases.</p>
   */
  numberOfNotifiedThings?: number;

  /**
   * @public
   * <p>The number of devices to successfully run the configuration job before the rollout rate
   *       increases.</p>
   */
  numberOfSucceededThings?: number;
}

/**
 * @public
 * <p>Contains information about an exponential rollout rate for a configuration deployment
 *       job.</p>
 */
export interface IoTJobExponentialRolloutRate {
  /**
   * @public
   * <p>The minimum number of devices that receive a pending job notification, per minute, when
   *       the job starts. This parameter defines the initial rollout rate of the job.</p>
   */
  baseRatePerMinute: number | undefined;

  /**
   * @public
   * <p>The exponential factor to increase the rollout rate for the job.</p>
   *          <p>This parameter supports up to one digit after the decimal (for example, you can specify
   *         <code>1.5</code>, but not <code>1.55</code>).</p>
   */
  incrementFactor: number | undefined;

  /**
   * @public
   * <p>The criteria to increase the rollout rate for the job.</p>
   */
  rateIncreaseCriteria: IoTJobRateIncreaseCriteria | undefined;
}

/**
 * @public
 * <p>Contains information about the rollout configuration for a job. This configuration defines
 *       the rate at which the job deploys a configuration to a fleet of target devices.</p>
 */
export interface IoTJobExecutionsRolloutConfig {
  /**
   * @public
   * <p>The exponential rate to increase the job rollout rate.</p>
   */
  exponentialRate?: IoTJobExponentialRolloutRate;

  /**
   * @public
   * <p>The maximum number of devices that receive a pending job notification, per minute.</p>
   */
  maximumPerMinute?: number;
}

/**
 * @public
 * <p>Contains information about the timeout configuration for a job.</p>
 */
export interface IoTJobTimeoutConfig {
  /**
   * @public
   * <p>The amount of time, in minutes, that devices have to complete the job. The timer starts
   *       when the job status is set to <code>IN_PROGRESS</code>. If the job status doesn't change to a
   *       terminal state before the time expires, then the job status is set to
   *       <code>TIMED_OUT</code>.</p>
   *          <p>The timeout interval must be between 1 minute and 7 days (10080 minutes).</p>
   */
  inProgressTimeoutInMinutes?: number;
}

/**
 * @public
 * <p>Contains information about an IoT job configuration.</p>
 */
export interface DeploymentIoTJobConfiguration {
  /**
   * @public
   * <p>The rollout configuration for the job. This configuration defines the rate at which the
   *       job rolls out to the fleet of target devices.</p>
   */
  jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;

  /**
   * @public
   * <p>The stop configuration for the job. This configuration defines when and how to stop a job
   *       rollout.</p>
   */
  abortConfig?: IoTJobAbortConfig;

  /**
   * @public
   * <p>The timeout configuration for the job. This configuration defines the amount of time each
   *       device has to complete the job.</p>
   */
  timeoutConfig?: IoTJobTimeoutConfig;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  deploymentName?: string;

  /**
   * @public
   * <p>The components to deploy. This is a dictionary, where each key is the name of a component,
   *         and each key's value is the version and configuration to deploy for that component.</p>
   */
  components?: Record<string, ComponentDeploymentSpecification>;

  /**
   * @public
   * <p>The job configuration for the deployment configuration. The job configuration specifies
   *       the rollout, timeout, and stop configurations for the deployment configuration.</p>
   */
  iotJobConfiguration?: DeploymentIoTJobConfiguration;

  /**
   * @public
   * <p>The deployment policies for the deployment. These policies define how the deployment
   *       updates components and handles failure.</p>
   */
  deploymentPolicies?: DeploymentPolicies;

  /**
   * @public
   * <p>The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.</p>
   */
  parentTargetArn?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent.
   *     Idempotency means that the request is successfully processed only once, even if you send the request multiple times.
   *     When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service
   *     returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for
   *     idempotent requests for up to 8 hours.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The ID of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobId?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobArn?: string;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreDeviceRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * <p>Contains information about a deployment.</p>
 */
export interface Deployment {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.</p>
   */
  targetArn?: string;

  /**
   * @public
   * <p>The revision number of the deployment.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  deploymentName?: string;

  /**
   * @public
   * <p>The time at which the deployment was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  deploymentStatus?: DeploymentStatus;

  /**
   * @public
   * <p>Whether or not the deployment is the latest revision for its target.</p>
   */
  isLatestForTarget?: boolean;

  /**
   * @public
   * <p>The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.</p>
   */
  parentTargetArn?: string;
}

/**
 * @public
 * @enum
 */
export const DeploymentHistoryFilter = {
  ALL: "ALL",
  LATEST_ONLY: "LATEST_ONLY",
} as const;

/**
 * @public
 */
export type DeploymentHistoryFilter = (typeof DeploymentHistoryFilter)[keyof typeof DeploymentHistoryFilter];

/**
 * @public
 */
export interface DescribeComponentRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentResponse {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The time at which the component was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The publisher of the component version.</p>
   */
  publisher?: string;

  /**
   * @public
   * <p>The description of the component version.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the component version in IoT Greengrass V2. This status
   *       is different from the status of the component on a core device.</p>
   */
  status?: CloudComponentStatus;

  /**
   * @public
   * <p>The platforms that the component version supports.</p>
   */
  platforms?: ComponentPlatform[];

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountRequest {}

/**
 * @public
 */
export interface DisassociateServiceRoleFromAccountResponse {
  /**
   * @public
   * <p>The time when the service role was disassociated from IoT Greengrass for your Amazon Web Services account in this
   *       Amazon Web Services Region.</p>
   */
  disassociatedAt?: string;
}

/**
 * @public
 * @enum
 */
export const EffectiveDeploymentExecutionStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type EffectiveDeploymentExecutionStatus =
  (typeof EffectiveDeploymentExecutionStatus)[keyof typeof EffectiveDeploymentExecutionStatus];

/**
 * @public
 * <p>Contains all error-related information for the deployment record. The status details will
 *       be null if the deployment is in a success state.</p>
 *          <note>
 *             <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and
 *           <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus
 *         versions.</p>
 *          </note>
 */
export interface EffectiveDeploymentStatusDetails {
  /**
   * @public
   * <p>Contains an ordered list of short error codes that range from the most generic error to
   *       the most specific one. The error codes describe the reason for failure whenever the
   *         <code>coreDeviceExecutionStatus</code> is in a failed state. The response will be an empty
   *       list if there is no error.</p>
   */
  errorStack?: string[];

  /**
   * @public
   * <p>Contains tags which describe the error. You can use the error types to classify errors to
   *       assist with remediating the failure. The response will be an empty list if there is no
   *       error.</p>
   */
  errorTypes?: string[];
}

/**
 * @public
 * <p>Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.</p>
 */
export interface EffectiveDeployment {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  deploymentName: string | undefined;

  /**
   * @public
   * <p>The ID of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobId?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobArn?: string;

  /**
   * @public
   * <p>The description of the deployment job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>The status of the deployment job on the Greengrass core device.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> – The deployment job is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code> – The deployment job is in the job queue and waiting to
   *           run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The deployment failed. For more information, see the
   *             <code>statusDetails</code> field.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – The deployment to an IoT thing was completed
   *           successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMED_OUT</code> – The deployment didn't complete in the allotted time.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code> – The deployment was canceled by the user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> – The deployment was rejected. For more information, see
   *           the <code>statusDetails</code> field.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> – The deployment to an IoT thing group was completed
   *           successfully.</p>
   *             </li>
   *          </ul>
   */
  coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatus | undefined;

  /**
   * @public
   * <p>The reason code for the update, if the job was updated.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>The time at which the deployment was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp: Date | undefined;

  /**
   * @public
   * <p>The time at which the deployment job was last modified, expressed in ISO 8601
   *       format.</p>
   */
  modifiedTimestamp: Date | undefined;

  /**
   * @public
   * <p>The status details that explain why a deployment has an error. This response will be null
   *       if the deployment is in a success state.</p>
   */
  statusDetails?: EffectiveDeploymentStatusDetails;
}

/**
 * @public
 * @enum
 */
export const RecipeOutputFormat = {
  JSON: "JSON",
  YAML: "YAML",
} as const;

/**
 * @public
 */
export type RecipeOutputFormat = (typeof RecipeOutputFormat)[keyof typeof RecipeOutputFormat];

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * @public
   * <p>The format of the recipe.</p>
   */
  recipeOutputFormat?: RecipeOutputFormat;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * @public
   * <p>The format of the recipe.</p>
   */
  recipeOutputFormat: RecipeOutputFormat | undefined;

  /**
   * @public
   * <p>The recipe of the component version.</p>
   */
  recipe: Uint8Array | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetComponentVersionArtifactRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version. Specify the ARN of a public or a Lambda component version.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the artifact.</p>
   *          <p>You can use the <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html">GetComponent</a> operation to
   *       download the component recipe, which includes the URI of the artifact. The artifact name is
   *       the section of the URI after the scheme. For example, in the artifact URI
   *         <code>greengrass:SomeArtifact.zip</code>, the artifact name is
   *       <code>SomeArtifact.zip</code>.</p>
   */
  artifactName: string | undefined;
}

/**
 * @public
 */
export interface GetComponentVersionArtifactResponse {
  /**
   * @public
   * <p>The URL of the artifact.</p>
   */
  preSignedUrl: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoResponse {
  /**
   * @public
   * <p>The connectivity information for the core device.</p>
   */
  connectivityInfo?: ConnectivityInfo[];

  /**
   * @public
   * <p>A message about the connectivity information request.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface GetCoreDeviceRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDeviceResponse {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName?: string;

  /**
   * @public
   * <p>The version of the IoT Greengrass Core software that the core device runs. This version is equivalent to
   *       the version of the Greengrass nucleus component that runs on the core device. For more information,
   *       see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html">Greengrass nucleus
   *         component</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  coreVersion?: string;

  /**
   * @public
   * <p>The operating system platform that the core device runs.</p>
   */
  platform?: string;

  /**
   * @public
   * <p>The computer architecture of the core device.</p>
   */
  architecture?: string;

  /**
   * @public
   * <p>The status of the core device. The core device status can be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state
   *           on the core device.</p>
   *             </li>
   *          </ul>
   */
  status?: CoreDeviceStatus;

  /**
   * @public
   * <p>The time at which the core device's status last updated, expressed in ISO 8601
   *       format.</p>
   */
  lastStatusUpdateTimestamp?: Date;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.</p>
   */
  targetArn?: string;

  /**
   * @public
   * <p>The revision number of the deployment.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId?: string;

  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  deploymentName?: string;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  deploymentStatus?: DeploymentStatus;

  /**
   * @public
   * <p>The ID of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobId?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT job that applies the deployment to target devices.</p>
   */
  iotJobArn?: string;

  /**
   * @public
   * <p>The components to deploy. This is a dictionary, where each key is the name of a component,
   *         and each key's value is the version and configuration to deploy for that component.</p>
   */
  components?: Record<string, ComponentDeploymentSpecification>;

  /**
   * @public
   * <p>The deployment policies for the deployment. These policies define how the deployment
   *       updates components and handles failure.</p>
   */
  deploymentPolicies?: DeploymentPolicies;

  /**
   * @public
   * <p>The job configuration for the deployment configuration. The job configuration specifies
   *       the rollout, timeout, and stop configurations for the deployment configuration.</p>
   */
  iotJobConfiguration?: DeploymentIoTJobConfiguration;

  /**
   * @public
   * <p>The time at which the deployment was created, expressed in ISO 8601 format.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>Whether or not the deployment is the latest revision for its target.</p>
   */
  isLatestForTarget?: boolean;

  /**
   * @public
   * <p>The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.</p>
   */
  parentTargetArn?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetServiceRoleForAccountRequest {}

/**
 * @public
 */
export interface GetServiceRoleForAccountResponse {
  /**
   * @public
   * <p>The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this
   *       Amazon Web Services Region.</p>
   */
  associatedAt?: string;

  /**
   * @public
   * <p>The ARN of the service role that is associated with IoT Greengrass for your Amazon Web Services account in this
   *       Amazon Web Services Region.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface ListClientDevicesAssociatedWithCoreDeviceRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListClientDevicesAssociatedWithCoreDeviceResponse {
  /**
   * @public
   * <p>A list that describes the client devices that are associated with the core device.</p>
   */
  associatedClientDevices?: AssociatedClientDevice[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * @public
   * <p>The scope of the components to list.</p>
   *          <p>Default: <code>PRIVATE</code>
   *          </p>
   */
  scope?: ComponentVisibilityScope;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * @public
   * <p>A list that summarizes each component.</p>
   */
  components?: Component[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentVersionsRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListComponentVersionsResponse {
  /**
   * @public
   * <p>A list of versions that exist for the component.</p>
   */
  componentVersions?: ComponentVersionListItem[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDevicesRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IoT thing group by which to filter. If you specify this parameter,
   *       the list includes only core devices that have successfully deployed a deployment that targets
   *       the thing group. When you remove a core device from a thing group, the list continues to
   *       include that core device.</p>
   */
  thingGroupArn?: string;

  /**
   * @public
   * <p>The core device status by which to filter. If you specify this parameter, the list
   *       includes only core devices that have this status. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> – The IoT Greengrass Core software and all components run on the core device without issue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code> – The IoT Greengrass Core software or a component is in a failed state
   *           on the core device.</p>
   *             </li>
   *          </ul>
   */
  status?: CoreDeviceStatus;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCoreDevicesResponse {
  /**
   * @public
   * <p>A list that summarizes each core device.</p>
   */
  coreDevices?: CoreDevice[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group.</p>
   */
  targetArn?: string;

  /**
   * @public
   * <p>The filter for the list of deployments. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all deployments.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST_ONLY</code> – The list includes only the latest revision of each
   *           deployment.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>LATEST_ONLY</code>
   *          </p>
   */
  historyFilter?: DeploymentHistoryFilter;

  /**
   * @public
   * <p>The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.</p>
   */
  parentTargetArn?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * @public
   * <p>A list that summarizes each deployment.</p>
   */
  deployments?: Deployment[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEffectiveDeploymentsRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEffectiveDeploymentsResponse {
  /**
   * @public
   * <p>A list that summarizes each deployment on the core device.</p>
   */
  effectiveDeployments?: EffectiveDeployment[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const InstalledComponentTopologyFilter = {
  ALL: "ALL",
  ROOT: "ROOT",
} as const;

/**
 * @public
 */
export type InstalledComponentTopologyFilter =
  (typeof InstalledComponentTopologyFilter)[keyof typeof InstalledComponentTopologyFilter];

/**
 * @public
 */
export interface ListInstalledComponentsRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  coreDeviceThingName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The filter for the list of components. Choose from the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all components installed on the core
   *           device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROOT</code> – The list includes only <i>root</i>
   *           components, which are components that you specify in a deployment. When you choose this
   *           option, the list doesn't include components that the core device installs as dependencies
   *           of other components.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>ROOT</code>
   *          </p>
   */
  topologyFilter?: InstalledComponentTopologyFilter;
}

/**
 * @public
 * @enum
 */
export const InstalledComponentLifecycleState = {
  BROKEN: "BROKEN",
  ERRORED: "ERRORED",
  FINISHED: "FINISHED",
  INSTALLED: "INSTALLED",
  NEW: "NEW",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type InstalledComponentLifecycleState =
  (typeof InstalledComponentLifecycleState)[keyof typeof InstalledComponentLifecycleState];

/**
 * @public
 * <p>Contains information about a component on a Greengrass core device.</p>
 */
export interface InstalledComponent {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The lifecycle state of the component.</p>
   */
  lifecycleState?: InstalledComponentLifecycleState;

  /**
   * @public
   * <p>A detailed response about the lifecycle state of the component that explains the reason
   *       why a component has an error or is broken.</p>
   */
  lifecycleStateDetails?: string;

  /**
   * @public
   * <p>Whether or not the component is a root component.</p>
   */
  isRoot?: boolean;

  /**
   * @public
   * <p>The status of how current the data is.</p>
   *          <p>This response is based off of component state changes. The status reflects component
   *       disruptions and deployments. If a component only sees a configuration update during a
   *       deployment, it might not undergo a state change and this status would not be updated.</p>
   */
  lastStatusChangeTimestamp?: Date;

  /**
   * @public
   * <p>The last time the Greengrass core device sent a message containing a component's state to the
   *       Amazon Web Services Cloud.</p>
   *          <p>A component does not need to see a state change for this field to update.</p>
   */
  lastReportedTimestamp?: Date;

  /**
   * @public
   * <p>The most recent deployment source that brought the component to the Greengrass core device. For
   *       a thing group deployment or thing deployment, the source will be the The ID of the deployment. and for
   *       local deployments it will be <code>LOCAL</code>.</p>
   *          <note>
   *             <p>Any deployment will attempt to reinstall currently broken components on the device,
   *         which will update the last installation source.</p>
   *          </note>
   */
  lastInstallationSource?: string;

  /**
   * @public
   * <p>The status codes that indicate the reason for failure whenever the
   *         <code>lifecycleState</code> has an error or is in a broken state.</p>
   *          <note>
   *             <p>Greengrass nucleus v2.8.0 or later is required to get an accurate
   *           <code>lifecycleStatusCodes</code> response. This response can be inaccurate in earlier
   *         Greengrass nucleus versions.</p>
   *          </note>
   */
  lifecycleStatusCodes?: string[];
}

/**
 * @public
 */
export interface ListInstalledComponentsResponse {
  /**
   * @public
   * <p>A list that summarizes each component on the core device.</p>
   *          <note>
   *             <p>Greengrass nucleus v2.7.0 or later is required to get an accurate
   *           <code>lastStatusChangeTimestamp</code> response. This response can be inaccurate in
   *         earlier Greengrass nucleus versions.</p>
   *          </note>
   *          <note>
   *             <p>Greengrass nucleus v2.8.0 or later is required to get an accurate
   *           <code>lastInstallationSource</code> and <code>lastReportedTimestamp</code> response. This
   *         response can be inaccurate or null in earlier Greengrass nucleus versions.</p>
   *          </note>
   */
  installedComponents?: InstalledComponent[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ResolveComponentCandidatesRequest {
  /**
   * @public
   * <p>The platform to use to resolve compatible components.</p>
   */
  platform?: ComponentPlatform;

  /**
   * @public
   * <p>The list of components to resolve.</p>
   */
  componentCandidates?: ComponentCandidate[];
}

/**
 * @public
 * <p>Contains information about a component version that is compatible to run on a Greengrass core
 *       device.</p>
 */
export interface ResolvedComponentVersion {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the component version.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  componentName?: string;

  /**
   * @public
   * <p>The version of the component.</p>
   */
  componentVersion?: string;

  /**
   * @public
   * <p>The recipe of the component version.</p>
   */
  recipe?: Uint8Array;

  /**
   * @public
   * <p>The vendor guidance state for the component version. This state indicates whether
   *       the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – This component version is available and recommended for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISCONTINUED</code> – This component version has been discontinued by its publisher.
   *           You can deploy this component version, but we recommend that you use a different version of this component.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> – This component version has been deleted by its publisher, so you can't
   *           deploy it. If you have any existing deployments that specify this component version, those deployments will fail.</p>
   *             </li>
   *          </ul>
   */
  vendorGuidance?: VendorGuidance;

  /**
   * @public
   * <p>A message that communicates details about the vendor guidance state
   *     of the component version. This message communicates why a component version is discontinued or deleted.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface ResolveComponentCandidatesResponse {
  /**
   * @public
   * <p>A list of components that meet the requirements that you specify in the request. This list
   *       includes each component's recipe that you can use to install the component.</p>
   */
  resolvedComponentVersions?: ResolvedComponentVersion[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more
   *       information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your
   *         resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of keys for tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateConnectivityInfoRequest {
  /**
   * @public
   * <p>The name of the core device. This is also the name of the IoT thing.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>The connectivity information for the core device.</p>
   */
  connectivityInfo: ConnectivityInfo[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * @public
   * <p>The new version of the connectivity information for the core device.</p>
   */
  version?: string;

  /**
   * @public
   * <p>A message about the connectivity information update request.</p>
   */
  message?: string;
}
