// smithy-typescript generated code
import type {
  CloudComponentState,
  ComponentDependencyType,
  ComponentVisibilityScope,
  CoreDeviceStatus,
  DeploymentComponentUpdatePolicyAction,
  DeploymentFailureHandlingPolicy,
  DeploymentHistoryFilter,
  DeploymentStatus,
  EffectiveDeploymentExecutionStatus,
  InstalledComponentLifecycleState,
  InstalledComponentTopologyFilter,
  IotEndpointType,
  IoTJobAbortAction,
  IoTJobExecutionFailureType,
  LambdaEventSourceType,
  LambdaFilesystemPermission,
  LambdaInputPayloadEncodingType,
  LambdaIsolationMode,
  RecipeOutputFormat,
  S3EndpointType,
  VendorGuidance,
} from "./enums";

/**
 * Contains a request to associate a client device with a core device. The [BatchAssociateClientDeviceWithCoreDevice](https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html) operation consumes a list of these requests.
 *
 * @public
 */
export interface AssociateClientDeviceWithCoreDeviceEntry {
  /**
   * The name of the IoT thing that represents the client device to associate.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * Contains an error that occurs from a request to associate a client device with a core device. The [BatchAssociateClientDeviceWithCoreDevice](https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html) operation returns a list of these errors.
 *
 * @public
 */
export interface AssociateClientDeviceWithCoreDeviceErrorEntry {
  /**
   * The name of the IoT thing whose associate request failed.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The error code for the request.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A message that provides additional information about the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains information about a client device that is associated to a core device for cloud discovery.
 *
 * @public
 */
export interface AssociatedClientDevice {
  /**
   * The name of the IoT thing that represents the associated client device.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The time that the client device was associated, expressed in ISO 8601 format.
   *
   * @public
   */
  associationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountRequest {
  /**
   * The Amazon Resource Name (ARN) of the service role to associate with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceRoleToAccountResponse {
  /**
   * The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *
   * @public
   */
  associatedAt?: string | undefined;
}

/**
 * Contains information about a validation exception field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the exception field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message of the exception field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateClientDeviceWithCoreDeviceRequest {
  /**
   * The list of client devices to associate.
   *
   * @public
   */
  entries?: AssociateClientDeviceWithCoreDeviceEntry[] | undefined;

  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateClientDeviceWithCoreDeviceResponse {
  /**
   * The list of any errors for the entries in the request. Each error entry contains the name of the IoT thing that failed to associate.
   *
   * @public
   */
  errorEntries?: AssociateClientDeviceWithCoreDeviceErrorEntry[] | undefined;
}

/**
 * Contains a request to disassociate a client device from a core device. The [BatchDisassociateClientDeviceWithCoreDevice](https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html) operation consumes a list of these requests.
 *
 * @public
 */
export interface DisassociateClientDeviceFromCoreDeviceEntry {
  /**
   * The name of the IoT thing that represents the client device to disassociate.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
  /**
   * The list of client devices to disassociate.
   *
   * @public
   */
  entries?: DisassociateClientDeviceFromCoreDeviceEntry[] | undefined;

  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;
}

/**
 * Contains an error that occurs from a request to disassociate a client device from a core device. The [BatchDisassociateClientDeviceWithCoreDevice](https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceWithCoreDevice.html) operation returns a list of these errors.
 *
 * @public
 */
export interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
  /**
   * The name of the IoT thing whose disassociate request failed.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The error code for the request.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A message that provides additional information about the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
  /**
   * The list of any errors for the entries in the request. Each error entry contains the name of the IoT thing that failed to disassociate.
   *
   * @public
   */
  errorEntries?: DisassociateClientDeviceFromCoreDeviceErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelDeploymentRequest {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface CancelDeploymentResponse {
  /**
   * A message that communicates if the cancel was successful.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains the status of a component version in the IoT Greengrass service.
 *
 * @public
 */
export interface CloudComponentStatus {
  /**
   * The state of the component version.
   *
   * @public
   */
  componentState?: CloudComponentState | undefined;

  /**
   * A message that communicates details, such as errors, about the status of the component version.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A dictionary of errors that communicate why the component version is in an error state. For example, if IoT Greengrass can't access an artifact for the component version, then `errors` contains the artifact's URI as a key, and the error message as the value for that key.
   *
   * @public
   */
  errors?: Record<string, string> | undefined;

  /**
   * The vendor guidance state for the component version. This state indicates whether the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:
   *
   * - `ACTIVE` – This component version is available and recommended for use.
   * - `DISCONTINUED` – This component version has been discontinued by its publisher. You can deploy this component version, but we recommend that you use a different version of this component.
   * - `DELETED` – This component version has been deleted by its publisher, so you can't deploy it. If you have any existing deployments that specify this component version, those deployments will fail.
   *
   * @public
   */
  vendorGuidance?: VendorGuidance | undefined;

  /**
   * A message that communicates details about the vendor guidance state of the component version. This message communicates why a component version is discontinued or deleted.
   *
   * @public
   */
  vendorGuidanceMessage?: string | undefined;
}

/**
 * Contains information about a platform that a component supports.
 *
 * @public
 */
export interface ComponentPlatform {
  /**
   * The friendly name of the platform. This name helps you identify the platform.
   *
   * If you omit this parameter, IoT Greengrass creates a friendly name from the `os` and `architecture` of the platform.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A dictionary of attributes for the platform. The IoT Greengrass Core software defines the `os` and `architecture` by default. You can specify additional platform attributes for a core device when you deploy the Greengrass nucleus component. For more information, see the [Greengrass nucleus component](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * Contains information about the latest version of a component.
 *
 * @public
 */
export interface ComponentLatestVersion {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The time at which the component was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * The description of the component version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The publisher of the component version.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * The platforms that the component version supports.
   *
   * @public
   */
  platforms?: ComponentPlatform[] | undefined;
}

/**
 * Contains information about a component.
 *
 * @public
 */
export interface Component {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The latest version of the component and its details.
   *
   * @public
   */
  latestVersion?: ComponentLatestVersion | undefined;
}

/**
 * Contains information about a component that is a candidate to deploy to a Greengrass core device.
 *
 * @public
 */
export interface ComponentCandidate {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The version requirements for the component's dependencies. Greengrass core devices get the version requirements from component recipes.
   *
   * IoT Greengrass V2 uses semantic version constraints. For more information, see [Semantic Versioning](https://semver.org/).
   *
   * @public
   */
  versionRequirements?: Record<string, string> | undefined;
}

/**
 * Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see [Update component configurations](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html) in the *IoT Greengrass V2 Developer Guide*.
 *
 * @public
 */
export interface ComponentConfigurationUpdate {
  /**
   * A serialized JSON string that contains the configuration object to merge to target devices. The core device merges this configuration with the component's existing configuration. If this is the first time a component deploys on a device, the core device merges this configuration with the component's default configuration. This means that the core device keeps it's existing configuration for keys and values that you don't specify in this object. For more information, see [Merge configuration updates](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#merge-configuration-update) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  merge?: string | undefined;

  /**
   * The list of configuration nodes to reset to default values on target devices. Use JSON pointers to specify each node to reset. JSON pointers start with a forward slash (`/`) and use forward slashes to separate the key for each level in the object. For more information, see the [JSON pointer specification](https://tools.ietf.org/html/rfc6901) and [Reset configuration updates](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#reset-configuration-update) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  reset?: string[] | undefined;
}

/**
 * Contains information about a component dependency for a Lambda function component.
 *
 * @public
 */
export interface ComponentDependencyRequirement {
  /**
   * The component version requirement for the component dependency.
   *
   * IoT Greengrass V2 uses semantic version constraints. For more information, see [Semantic Versioning](https://semver.org/).
   *
   * @public
   */
  versionRequirement?: string | undefined;

  /**
   * The type of this dependency. Choose from the following options:
   *
   * - `SOFT` – The component doesn't restart if the dependency changes state.
   * - `HARD` – The component restarts if the dependency changes state.
   *
   * Default: `HARD`
   *
   * @public
   */
  dependencyType?: ComponentDependencyType | undefined;
}

/**
 * Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see [Configure system resource limits for components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits).
 *
 * @public
 */
export interface SystemResourceLimits {
  /**
   * The maximum amount of RAM, expressed in kilobytes, that a component's processes can use on the core device.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The maximum amount of CPU time that a component's processes can use on the core device. A core device's total CPU time is equivalent to the device's number of CPU cores. For example, on a core device with 4 CPU cores, you can set this value to `2` to limit the component's processes to 50 percent usage of each CPU core. On a device with 1 CPU core, you can set this value to `0.25` to limit the component's processes to 25 percent usage of the CPU. If you set this value to a number greater than the number of CPU cores, the IoT Greengrass Core software doesn't limit the component's CPU usage.
   *
   * @public
   */
  cpus?: number | undefined;
}

/**
 * Contains information system user and group that the IoT Greengrass Core software uses to run component processes on the core device. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user) in the *IoT Greengrass V2 Developer Guide*.
 *
 * @public
 */
export interface ComponentRunWith {
  /**
   * The POSIX system user and, optionally, group to use to run this component on Linux core devices. The user, and group if specified, must exist on each Linux core device. Specify the user and group separated by a colon (`:`) in the following format: `user:group`. The group is optional. If you don't specify a group, the IoT Greengrass Core software uses the primary user for the group.
   *
   * If you omit this parameter, the IoT Greengrass Core software uses the default system user and group that you configure on the Greengrass nucleus component. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user).
   *
   * @public
   */
  posixUser?: string | undefined;

  /**
   * The system resource limits to apply to this component's process on the core device. IoT Greengrass currently supports this feature on only Linux core devices.
   *
   * If you omit this parameter, the IoT Greengrass Core software uses the default system resource limits that you configure on the Greengrass nucleus component. For more information, see [Configure system resource limits for components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits).
   *
   * @public
   */
  systemResourceLimits?: SystemResourceLimits | undefined;

  /**
   * The Windows user to use to run this component on Windows core devices. The user must exist on each Windows core device, and its name and password must be in the LocalSystem account's Credentials Manager instance.
   *
   * If you omit this parameter, the IoT Greengrass Core software uses the default Windows user that you configure on the Greengrass nucleus component. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user).
   *
   * @public
   */
  windowsUser?: string | undefined;
}

/**
 * Contains information about a component to deploy.
 *
 * @public
 */
export interface ComponentDeploymentSpecification {
  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion: string | undefined;

  /**
   * The configuration updates to deploy for the component. You can define *reset* updates and *merge* updates. A reset updates the keys that you specify to the default configuration for the component. A merge updates the core device's component configuration with the keys and values that you specify. The IoT Greengrass Core software applies reset updates before it applies merge updates. For more information, see [Update component configurations](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  configurationUpdate?: ComponentConfigurationUpdate | undefined;

  /**
   * The system user and group that the IoT Greengrass Core software uses to run component processes on the core device. If you omit this parameter, the IoT Greengrass Core software uses the system user and group that you configure for the core device. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  runWith?: ComponentRunWith | undefined;
}

/**
 * Contains information about a component version in a list.
 *
 * @public
 */
export interface ComponentVersionListItem {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device.
 *
 * @public
 */
export interface ConnectivityInfo {
  /**
   * An ID for the connectivity information.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The IP address or DNS address where client devices can connect to an MQTT broker on the Greengrass core device.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The port where the MQTT broker operates on the core device. This port is typically 8883, which is the default port for the MQTT broker component that runs on core devices.
   *
   * @public
   */
  portNumber?: number | undefined;

  /**
   * Additional metadata to provide to client devices that connect to this core device.
   *
   * @public
   */
  metadata?: string | undefined;
}

/**
 * Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
 *
 * @public
 */
export interface CoreDevice {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName?: string | undefined;

  /**
   * The status of the core device. Core devices can have the following statuses:
   *
   * - `HEALTHY` – The IoT Greengrass Core software and all components run on the core device without issue.
   * - `UNHEALTHY` – The IoT Greengrass Core software or a component is in a failed state on the core device.
   *
   * @public
   */
  status?: CoreDeviceStatus | undefined;

  /**
   * The time at which the core device's status last updated, expressed in ISO 8601 format.
   *
   * @public
   */
  lastStatusUpdateTimestamp?: Date | undefined;

  /**
   * The operating system platform that the core device runs.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The computer architecture of the core device.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The runtime for the core device. The runtime can be:
   *
   * - `aws_nucleus_classic`
   * - `aws_nucleus_lite`
   *
   * @public
   */
  runtime?: string | undefined;
}

/**
 * Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
 *
 * @public
 */
export interface LambdaEventSource {
  /**
   * The topic to which to subscribe to receive event messages.
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The type of event source. Choose from the following options:
   *
   * - `PUB_SUB` – Subscribe to local publish/subscribe messages. This event source type doesn't support MQTT wildcards (`+` and `#`) in the event source topic.
   * - `IOT_CORE` – Subscribe to Amazon Web Services IoT Core MQTT messages. This event source type supports MQTT wildcards (`+` and `#`) in the event source topic.
   *
   * @public
   */
  type: LambdaEventSourceType | undefined;
}

/**
 * Contains information about a device that Linux processes in a container can access.
 *
 * @public
 */
export interface LambdaDeviceMount {
  /**
   * The mount path for the device in the file system.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The permission to access the device: read/only (`ro`) or read/write (`rw`).
   *
   * Default: `ro`
   *
   * @public
   */
  permission?: LambdaFilesystemPermission | undefined;

  /**
   * Whether or not to add the component's system user as an owner of the device.
   *
   * Default: `false`
   *
   * @public
   */
  addGroupOwner?: boolean | undefined;
}

/**
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
 *
 * @public
 */
export interface LambdaVolumeMount {
  /**
   * The path to the physical volume in the file system.
   *
   * @public
   */
  sourcePath: string | undefined;

  /**
   * The path to the logical volume in the file system.
   *
   * @public
   */
  destinationPath: string | undefined;

  /**
   * The permission to access the volume: read/only (`ro`) or read/write (`rw`).
   *
   * Default: `ro`
   *
   * @public
   */
  permission?: LambdaFilesystemPermission | undefined;

  /**
   * Whether or not to add the IoT Greengrass user group as an owner of the volume.
   *
   * Default: `false`
   *
   * @public
   */
  addGroupOwner?: boolean | undefined;
}

/**
 * Contains information about a container in which Lambda functions run on Greengrass core devices.
 *
 * @public
 */
export interface LambdaContainerParams {
  /**
   * The memory size of the container, expressed in kilobytes.
   *
   * Default: `16384` (16 MB)
   *
   * @public
   */
  memorySizeInKB?: number | undefined;

  /**
   * Whether or not the container can read information from the device's `/sys` folder.
   *
   * Default: `false`
   *
   * @public
   */
  mountROSysfs?: boolean | undefined;

  /**
   * The list of volumes that the container can access.
   *
   * @public
   */
  volumes?: LambdaVolumeMount[] | undefined;

  /**
   * The list of system devices that the container can access.
   *
   * @public
   */
  devices?: LambdaDeviceMount[] | undefined;
}

/**
 * Contains parameters for a Linux process that contains an Lambda function.
 *
 * @public
 */
export interface LambdaLinuxProcessParams {
  /**
   * The isolation mode for the process that contains the Lambda function. The process can run in an isolated runtime environment inside the IoT Greengrass container, or as a regular process outside any container.
   *
   * Default: `GreengrassContainer`
   *
   * @public
   */
  isolationMode?: LambdaIsolationMode | undefined;

  /**
   * The parameters for the container in which the Lambda function runs.
   *
   * @public
   */
  containerParams?: LambdaContainerParams | undefined;
}

/**
 * Contains parameters for a Lambda function that runs on IoT Greengrass.
 *
 * @public
 */
export interface LambdaExecutionParameters {
  /**
   * The list of event sources to which to subscribe to receive work messages. The Lambda function runs when it receives a message from an event source. You can subscribe this function to local publish/subscribe messages and Amazon Web Services IoT Core MQTT messages.
   *
   * @public
   */
  eventSources?: LambdaEventSource[] | undefined;

  /**
   * The maximum size of the message queue for the Lambda function component. The IoT Greengrass core stores messages in a FIFO (first-in-first-out) queue until it can run the Lambda function to consume each message.
   *
   * @public
   */
  maxQueueSize?: number | undefined;

  /**
   * The maximum number of instances that a non-pinned Lambda function can run at the same time.
   *
   * @public
   */
  maxInstancesCount?: number | undefined;

  /**
   * The maximum amount of time in seconds that a non-pinned Lambda function can idle before the IoT Greengrass Core software stops its process.
   *
   * @public
   */
  maxIdleTimeInSeconds?: number | undefined;

  /**
   * The maximum amount of time in seconds that the Lambda function can process a work item.
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * The interval in seconds at which a pinned (also known as long-lived) Lambda function component sends status updates to the Lambda manager component.
   *
   * @public
   */
  statusTimeoutInSeconds?: number | undefined;

  /**
   * Whether or not the Lambda function is pinned, or long-lived.
   *
   * - A pinned Lambda function starts when IoT Greengrass starts and keeps running in its own container.
   * - A non-pinned Lambda function starts only when it receives a work item and exists after it idles for `maxIdleTimeInSeconds`. If the function has multiple work items, the IoT Greengrass Core software creates multiple instances of the function.
   *
   * Default: `true`
   *
   * @public
   */
  pinned?: boolean | undefined;

  /**
   * The encoding type that the Lambda function supports.
   *
   * Default: `json`
   *
   * @public
   */
  inputPayloadEncodingType?: LambdaInputPayloadEncodingType | undefined;

  /**
   * The list of arguments to pass to the Lambda function when it runs.
   *
   * @public
   */
  execArgs?: string[] | undefined;

  /**
   * The map of environment variables that are available to the Lambda function when it runs.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The parameters for the Linux process that contains the Lambda function.
   *
   * @public
   */
  linuxProcessParams?: LambdaLinuxProcessParams | undefined;
}

/**
 * Contains information about an Lambda function to import to create a component.
 *
 * @public
 */
export interface LambdaFunctionRecipeSource {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Lambda function. The ARN must include the version of the function to import. You can't use version aliases like `$LATEST`.
   *
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * The name of the component.
   *
   * Defaults to the name of the Lambda function.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * Defaults to the version of the Lambda function as a semantic version. For example, if your function version is `3`, the component version becomes `3.0.0`.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The platforms that the component version supports.
   *
   * @public
   */
  componentPlatforms?: ComponentPlatform[] | undefined;

  /**
   * The component versions on which this Lambda function component depends.
   *
   * @public
   */
  componentDependencies?: Record<string, ComponentDependencyRequirement> | undefined;

  /**
   * The system and runtime parameters for the Lambda function as it runs on the Greengrass core device.
   *
   * @public
   */
  componentLambdaParameters?: LambdaExecutionParameters | undefined;
}

/**
 * @public
 */
export interface CreateComponentVersionRequest {
  /**
   * The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.
   *
   * You must specify either `inlineRecipe` or `lambdaFunction`.
   *
   * @public
   */
  inlineRecipe?: Uint8Array | undefined;

  /**
   * The parameters to create a component from a Lambda function.
   *
   * You must specify either `inlineRecipe` or `lambdaFunction`.
   *
   * @public
   */
  lambdaFunction?: LambdaFunctionRecipeSource | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentVersionResponse {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  componentName: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion: string | undefined;

  /**
   * The time at which the component was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp: Date | undefined;

  /**
   * The status of the component version in IoT Greengrass V2. This status is different from the status of the component on a core device.
   *
   * @public
   */
  status: CloudComponentStatus | undefined;
}

/**
 * Contains information about a deployment's policy that defines when components are safe to update.
 *
 * Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.
 *
 * @public
 */
export interface DeploymentComponentUpdatePolicy {
  /**
   * The amount of time in seconds that each component on a device has to report that it's safe to update. If the component waits for longer than this timeout, then the deployment proceeds on the device.
   *
   * Default: `60`
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;

  /**
   * Whether or not to notify components and wait for components to become safe to update. Choose from the following options:
   *
   * - `NOTIFY_COMPONENTS` – The deployment notifies each component before it stops and updates that component. Components can use the [SubscribeToComponentUpdates](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetocomponentupdates) IPC operation to receive these notifications. Then, components can respond with the [DeferComponentUpdate](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-defercomponentupdate) IPC operation. For more information, see [Create deployments](https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html) in the *IoT Greengrass V2 Developer Guide*.
   * - `SKIP_NOTIFY_COMPONENTS` – The deployment doesn't notify components or wait for them to be safe to update.
   *
   * Default: `NOTIFY_COMPONENTS`
   *
   * @public
   */
  action?: DeploymentComponentUpdatePolicyAction | undefined;
}

/**
 * Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the [SubscribeToValidateConfigurationUpdates](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates) IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the [SendConfigurationValidityReport](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport) IPC operation. For more information, see [Create deployments](https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html) in the *IoT Greengrass V2 Developer Guide*.
 *
 * @public
 */
export interface DeploymentConfigurationValidationPolicy {
  /**
   * The amount of time in seconds that a component can validate its configuration updates. If the validation time exceeds this timeout, then the deployment proceeds for the device.
   *
   * Default: `30`
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;
}

/**
 * Contains information about policies that define how a deployment updates components and handles failure.
 *
 * @public
 */
export interface DeploymentPolicies {
  /**
   * The failure handling policy for the configuration deployment. This policy defines what to do if the deployment fails.
   *
   * Default: `ROLLBACK`
   *
   * @public
   */
  failureHandlingPolicy?: DeploymentFailureHandlingPolicy | undefined;

  /**
   * The component update policy for the configuration deployment. This policy defines when it's safe to deploy the configuration to devices.
   *
   * @public
   */
  componentUpdatePolicy?: DeploymentComponentUpdatePolicy | undefined;

  /**
   * The configuration validation policy for the configuration deployment. This policy defines how long each component has to validate its configure updates.
   *
   * @public
   */
  configurationValidationPolicy?: DeploymentConfigurationValidationPolicy | undefined;
}

/**
 * Contains criteria that define when and how to cancel a job.
 *
 * The deployment stops if the following conditions are true:
 *
 * 1. The number of things that receive the deployment exceeds the `minNumberOfExecutedThings`.
 * 2. The percentage of failures with type `failureType` exceeds the `thresholdPercentage`.
 *
 * @public
 */
export interface IoTJobAbortCriteria {
  /**
   * The type of job deployment failure that can cancel a job.
   *
   * @public
   */
  failureType: IoTJobExecutionFailureType | undefined;

  /**
   * The action to perform when the criteria are met.
   *
   * @public
   */
  action: IoTJobAbortAction | undefined;

  /**
   * The minimum percentage of `failureType` failures that occur before the job can cancel.
   *
   * This parameter supports up to two digits after the decimal (for example, you can specify `10.9` or `10.99`, but not `10.999`).
   *
   * @public
   */
  thresholdPercentage: number | undefined;

  /**
   * The minimum number of things that receive the configuration before the job can cancel.
   *
   * @public
   */
  minNumberOfExecutedThings: number | undefined;
}

/**
 * Contains a list of criteria that define when and how to cancel a configuration deployment.
 *
 * @public
 */
export interface IoTJobAbortConfig {
  /**
   * The list of criteria that define when and how to cancel the configuration deployment.
   *
   * @public
   */
  criteriaList: IoTJobAbortCriteria[] | undefined;
}

/**
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either `numberOfNotifiedThings` or `numberOfSucceededThings`.
 *
 * @public
 */
export interface IoTJobRateIncreaseCriteria {
  /**
   * The number of devices to receive the job notification before the rollout rate increases.
   *
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * The number of devices to successfully run the configuration job before the rollout rate increases.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * Contains information about an exponential rollout rate for a configuration deployment job.
 *
 * @public
 */
export interface IoTJobExponentialRolloutRate {
  /**
   * The minimum number of devices that receive a pending job notification, per minute, when the job starts. This parameter defines the initial rollout rate of the job.
   *
   * @public
   */
  baseRatePerMinute: number | undefined;

  /**
   * The exponential factor to increase the rollout rate for the job.
   *
   * This parameter supports up to one digit after the decimal (for example, you can specify `1.5`, but not `1.55`).
   *
   * @public
   */
  incrementFactor: number | undefined;

  /**
   * The criteria to increase the rollout rate for the job.
   *
   * @public
   */
  rateIncreaseCriteria: IoTJobRateIncreaseCriteria | undefined;
}

/**
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
 *
 * @public
 */
export interface IoTJobExecutionsRolloutConfig {
  /**
   * The exponential rate to increase the job rollout rate.
   *
   * @public
   */
  exponentialRate?: IoTJobExponentialRolloutRate | undefined;

  /**
   * The maximum number of devices that receive a pending job notification, per minute.
   *
   * @public
   */
  maximumPerMinute?: number | undefined;
}

/**
 * Contains information about the timeout configuration for a job.
 *
 * @public
 */
export interface IoTJobTimeoutConfig {
  /**
   * The amount of time, in minutes, that devices have to complete the job. The timer starts when the job status is set to `IN_PROGRESS`. If the job status doesn't change to a terminal state before the time expires, then the job status is set to `TIMED_OUT`.
   *
   * The timeout interval must be between 1 minute and 7 days (10080 minutes).
   *
   * @public
   */
  inProgressTimeoutInMinutes?: number | undefined;
}

/**
 * Contains information about an IoT job configuration.
 *
 * @public
 */
export interface DeploymentIoTJobConfiguration {
  /**
   * The rollout configuration for the job. This configuration defines the rate at which the job rolls out to the fleet of target devices.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig | undefined;

  /**
   * The stop configuration for the job. This configuration defines when and how to stop a job rollout.
   *
   * @public
   */
  abortConfig?: IoTJobAbortConfig | undefined;

  /**
   * The timeout configuration for the job. This configuration defines the amount of time each device has to complete the job.
   *
   * @public
   */
  timeoutConfig?: IoTJobTimeoutConfig | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName?: string | undefined;

  /**
   * The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.
   *
   * @public
   */
  components?: Record<string, ComponentDeploymentSpecification> | undefined;

  /**
   * The job configuration for the deployment configuration. The job configuration specifies the rollout, timeout, and stop configurations for the deployment configuration.
   *
   * @public
   */
  iotJobConfiguration?: DeploymentIoTJobConfiguration | undefined;

  /**
   * The deployment policies for the deployment. These policies define how the deployment updates components and handles failure.
   *
   * @public
   */
  deploymentPolicies?: DeploymentPolicies | undefined;

  /**
   * The parent deployment's target [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) within a subdeployment.
   *
   * @public
   */
  parentTargetArn?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The ID of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCoreDeviceRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * Contains information about a deployment.
 *
 * @public
 */
export interface Deployment {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The revision number of the deployment.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName?: string | undefined;

  /**
   * The time at which the deployment was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * The status of the deployment.
   *
   * @public
   */
  deploymentStatus?: DeploymentStatus | undefined;

  /**
   * Whether or not the deployment is the latest revision for its target.
   *
   * @public
   */
  isLatestForTarget?: boolean | undefined;

  /**
   * The parent deployment's target [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) within a subdeployment.
   *
   * @public
   */
  parentTargetArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentResponse {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The time at which the component was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * The publisher of the component version.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * The description of the component version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the component version in IoT Greengrass V2. This status is different from the status of the component on a core device.
   *
   * @public
   */
  status?: CloudComponentStatus | undefined;

  /**
   * The platforms that the component version supports.
   *
   * @public
   */
  platforms?: ComponentPlatform[] | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * The time when the service role was disassociated from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *
   * @public
   */
  disassociatedAt?: string | undefined;
}

/**
 * Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.
 *
 * > **Note:** Greengrass nucleus v2.8.0 or later is required to get an accurate `errorStack` and `errorTypes` response. This field will not be returned for earlier Greengrass nucleus versions.
 *
 * @public
 */
export interface EffectiveDeploymentStatusDetails {
  /**
   * Contains an ordered list of short error codes that range from the most generic error to the most specific one. The error codes describe the reason for failure whenever the `coreDeviceExecutionStatus` is in a failed state. The response will be an empty list if there is no error.
   *
   * @public
   */
  errorStack?: string[] | undefined;

  /**
   * Contains tags which describe the error. You can use the error types to classify errors to assist with remediating the failure. The response will be an empty list if there is no error.
   *
   * @public
   */
  errorTypes?: string[] | undefined;
}

/**
 * Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.
 *
 * @public
 */
export interface EffectiveDeployment {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName: string | undefined;

  /**
   * The ID of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobArn?: string | undefined;

  /**
   * The description of the deployment job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the target IoT thing or thing group.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The status of the deployment job on the Greengrass core device.
   *
   * - `IN_PROGRESS` – The deployment job is running.
   * - `QUEUED` – The deployment job is in the job queue and waiting to run.
   * - `FAILED` – The deployment failed. For more information, see the `statusDetails` field.
   * - `COMPLETED` – The deployment to an IoT thing was completed successfully.
   * - `TIMED_OUT` – The deployment didn't complete in the allotted time.
   * - `CANCELED` – The deployment was canceled by the user.
   * - `REJECTED` – The deployment was rejected. For more information, see the `statusDetails` field.
   * - `SUCCEEDED` – The deployment to an IoT thing group was completed successfully.
   *
   * @public
   */
  coreDeviceExecutionStatus: EffectiveDeploymentExecutionStatus | undefined;

  /**
   * The reason code for the update, if the job was updated.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The time at which the deployment was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp: Date | undefined;

  /**
   * The time at which the deployment job was last modified, expressed in ISO 8601 format.
   *
   * @public
   */
  modifiedTimestamp: Date | undefined;

  /**
   * The status details that explain why a deployment has an error. This response will be null if the deployment is in a success state.
   *
   * @public
   */
  statusDetails?: EffectiveDeploymentStatusDetails | undefined;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * The format of the recipe.
   *
   * @public
   */
  recipeOutputFormat?: RecipeOutputFormat | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * The format of the recipe.
   *
   * @public
   */
  recipeOutputFormat: RecipeOutputFormat | undefined;

  /**
   * The recipe of the component version.
   *
   * @public
   */
  recipe: Uint8Array | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetComponentVersionArtifactRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version. Specify the ARN of a public or a Lambda component version.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the artifact.
   *
   * You can use the [GetComponent](https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html) operation to download the component recipe, which includes the URI of the artifact. The artifact name is the section of the URI after the scheme. For example, in the artifact URI `greengrass:SomeArtifact.zip`, the artifact name is `SomeArtifact.zip`.
   *
   * @public
   */
  artifactName: string | undefined;

  /**
   * Specifies the endpoint to use when getting Amazon S3 pre-signed URLs.
   *
   * All Amazon Web Services Regions except US East (N. Virginia) use `REGIONAL` in all cases. In the US East (N. Virginia) Region the default is `GLOBAL`, but you can change it to `REGIONAL` with this parameter.
   *
   * @public
   */
  s3EndpointType?: S3EndpointType | undefined;

  /**
   * Determines if the Amazon S3 URL returned is a FIPS pre-signed URL endpoint. Specify `fips` if you want the returned Amazon S3 pre-signed URL to point to an Amazon S3 FIPS endpoint. If you don't specify a value, the default is `standard`.
   *
   * @public
   */
  iotEndpointType?: IotEndpointType | undefined;
}

/**
 * @public
 */
export interface GetComponentVersionArtifactResponse {
  /**
   * The URL of the artifact.
   *
   * @public
   */
  preSignedUrl: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectivityInfoResponse {
  /**
   * The connectivity information for the core device.
   *
   * @public
   */
  connectivityInfo?: ConnectivityInfo[] | undefined;

  /**
   * A message about the connectivity information request.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDeviceRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 */
export interface GetCoreDeviceResponse {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName?: string | undefined;

  /**
   * The version of the IoT Greengrass Core software that the core device runs. This version is equivalent to the version of the Greengrass nucleus component that runs on the core device. For more information, see the [Greengrass nucleus component](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  coreVersion?: string | undefined;

  /**
   * The operating system platform that the core device runs.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The computer architecture of the core device.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The runtime for the core device. The runtime can be:
   *
   * - `aws_nucleus_classic`
   * - `aws_nucleus_lite`
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The status of the core device. The core device status can be:
   *
   * - `HEALTHY` – The IoT Greengrass Core software and all components run on the core device without issue.
   * - `UNHEALTHY` – The IoT Greengrass Core software or a component is in a failed state on the core device.
   *
   * @public
   */
  status?: CoreDeviceStatus | undefined;

  /**
   * The time at which the core device's status last updated, expressed in ISO 8601 format.
   *
   * @public
   */
  lastStatusUpdateTimestamp?: Date | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the target IoT thing or thing group.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The revision number of the deployment.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  deploymentName?: string | undefined;

  /**
   * The status of the deployment.
   *
   * @public
   */
  deploymentStatus?: DeploymentStatus | undefined;

  /**
   * The ID of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IoT job that applies the deployment to target devices.
   *
   * @public
   */
  iotJobArn?: string | undefined;

  /**
   * The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.
   *
   * @public
   */
  components?: Record<string, ComponentDeploymentSpecification> | undefined;

  /**
   * The deployment policies for the deployment. These policies define how the deployment updates components and handles failure.
   *
   * @public
   */
  deploymentPolicies?: DeploymentPolicies | undefined;

  /**
   * The job configuration for the deployment configuration. The job configuration specifies the rollout, timeout, and stop configurations for the deployment configuration.
   *
   * @public
   */
  iotJobConfiguration?: DeploymentIoTJobConfiguration | undefined;

  /**
   * The time at which the deployment was created, expressed in ISO 8601 format.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * Whether or not the deployment is the latest revision for its target.
   *
   * @public
   */
  isLatestForTarget?: boolean | undefined;

  /**
   * The parent deployment's target [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) within a subdeployment.
   *
   * @public
   */
  parentTargetArn?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * The time when the service role was associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *
   * @public
   */
  associatedAt?: string | undefined;

  /**
   * The ARN of the service role that is associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListClientDevicesAssociatedWithCoreDeviceRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClientDevicesAssociatedWithCoreDeviceResponse {
  /**
   * A list that describes the client devices that are associated with the core device.
   *
   * @public
   */
  associatedClientDevices?: AssociatedClientDevice[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * The scope of the components to list.
   *
   * Default: `PRIVATE`
   *
   * @public
   */
  scope?: ComponentVisibilityScope | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * A list that summarizes each component.
   *
   * @public
   */
  components?: Component[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentVersionsRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentVersionsResponse {
  /**
   * A list of versions that exist for the component.
   *
   * @public
   */
  componentVersions?: ComponentVersionListItem[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreDevicesRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IoT thing group by which to filter. If you specify this parameter, the list includes only core devices that have successfully deployed a deployment that targets the thing group. When you remove a core device from a thing group, the list continues to include that core device.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The core device status by which to filter. If you specify this parameter, the list includes only core devices that have this status. Choose one of the following options:
   *
   * - `HEALTHY` – The IoT Greengrass Core software and all components run on the core device without issue.
   * - `UNHEALTHY` – The IoT Greengrass Core software or a component is in a failed state on the core device.
   *
   * @public
   */
  status?: CoreDeviceStatus | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The runtime to be used by the core device. The runtime can be:
   *
   * - `aws_nucleus_classic`
   * - `aws_nucleus_lite`
   *
   * @public
   */
  runtime?: string | undefined;
}

/**
 * @public
 */
export interface ListCoreDevicesResponse {
  /**
   * A list that summarizes each core device.
   *
   * @public
   */
  coreDevices?: CoreDevice[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the target IoT thing or thing group.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The filter for the list of deployments. Choose one of the following options:
   *
   * - `ALL` – The list includes all deployments.
   * - `LATEST_ONLY` – The list includes only the latest revision of each deployment.
   *
   * Default: `LATEST_ONLY`
   *
   * @public
   */
  historyFilter?: DeploymentHistoryFilter | undefined;

  /**
   * The parent deployment's target [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) within a subdeployment.
   *
   * @public
   */
  parentTargetArn?: string | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * Default: `50`
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsResponse {
  /**
   * A list that summarizes each deployment.
   *
   * @public
   */
  deployments?: Deployment[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEffectiveDeploymentsRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEffectiveDeploymentsResponse {
  /**
   * A list that summarizes each deployment on the core device.
   *
   * @public
   */
  effectiveDeployments?: EffectiveDeployment[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstalledComponentsRequest {
  /**
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;

  /**
   * The maximum number of results to be returned per paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The filter for the list of components. Choose from the following options:
   *
   * - `ALL` – The list includes all components installed on the core device.
   * - `ROOT` – The list includes only *root* components, which are components that you specify in a deployment. When you choose this option, the list doesn't include components that the core device installs as dependencies of other components.
   *
   * Default: `ROOT`
   *
   * @public
   */
  topologyFilter?: InstalledComponentTopologyFilter | undefined;
}

/**
 * Contains information about a component on a Greengrass core device.
 *
 * @public
 */
export interface InstalledComponent {
  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The lifecycle state of the component.
   *
   * @public
   */
  lifecycleState?: InstalledComponentLifecycleState | undefined;

  /**
   * A detailed response about the lifecycle state of the component that explains the reason why a component has an error or is broken.
   *
   * @public
   */
  lifecycleStateDetails?: string | undefined;

  /**
   * Whether or not the component is a root component.
   *
   * @public
   */
  isRoot?: boolean | undefined;

  /**
   * The status of how current the data is.
   *
   * This response is based off of component state changes. The status reflects component disruptions and deployments. If a component only sees a configuration update during a deployment, it might not undergo a state change and this status would not be updated.
   *
   * @public
   */
  lastStatusChangeTimestamp?: Date | undefined;

  /**
   * The last time the Greengrass core device sent a message containing a component's state to the Amazon Web Services Cloud.
   *
   * A component does not need to see a state change for this field to update.
   *
   * @public
   */
  lastReportedTimestamp?: Date | undefined;

  /**
   * The most recent deployment source that brought the component to the Greengrass core device. For a thing group deployment or thing deployment, the source will be the ID of the last deployment that contained the component. For local deployments it will be `LOCAL`.
   *
   * > **Note:** Any deployment will attempt to reinstall currently broken components on the device, which will update the last installation source.
   *
   * @public
   */
  lastInstallationSource?: string | undefined;

  /**
   * The status codes that indicate the reason for failure whenever the `lifecycleState` has an error or is in a broken state.
   *
   * > **Note:** Greengrass nucleus v2.8.0 or later is required to get an accurate `lifecycleStatusCodes` response. This response can be inaccurate in earlier Greengrass nucleus versions.
   *
   * @public
   */
  lifecycleStatusCodes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListInstalledComponentsResponse {
  /**
   * A list that summarizes each component on the core device.
   *
   * > **Note:** Greengrass nucleus v2.7.0 or later is required to get an accurate `lastStatusChangeTimestamp` response. This response can be inaccurate in earlier Greengrass nucleus versions.
   *
   * > **Note:** Greengrass nucleus v2.8.0 or later is required to get an accurate `lastInstallationSource` and `lastReportedTimestamp` response. This response can be inaccurate or null in earlier Greengrass nucleus versions.
   *
   * @public
   */
  installedComponents?: InstalledComponent[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ResolveComponentCandidatesRequest {
  /**
   * The platform to use to resolve compatible components.
   *
   * @public
   */
  platform?: ComponentPlatform | undefined;

  /**
   * The list of components to resolve.
   *
   * @public
   */
  componentCandidates?: ComponentCandidate[] | undefined;
}

/**
 * Contains information about a component version that is compatible to run on a Greengrass core device.
 *
 * @public
 */
export interface ResolvedComponentVersion {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the component version.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  componentName?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  componentVersion?: string | undefined;

  /**
   * The recipe of the component version.
   *
   * @public
   */
  recipe?: Uint8Array | undefined;

  /**
   * The vendor guidance state for the component version. This state indicates whether the component version has any issues that you should consider before you deploy it. The vendor guidance state can be:
   *
   * - `ACTIVE` – This component version is available and recommended for use.
   * - `DISCONTINUED` – This component version has been discontinued by its publisher. You can deploy this component version, but we recommend that you use a different version of this component.
   * - `DELETED` – This component version has been deleted by its publisher, so you can't deploy it. If you have any existing deployments that specify this component version, those deployments will fail.
   *
   * @public
   */
  vendorGuidance?: VendorGuidance | undefined;

  /**
   * A message that communicates details about the vendor guidance state of the component version. This message communicates why a component version is discontinued or deleted.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ResolveComponentCandidatesResponse {
  /**
   * A list of components that meet the requirements that you specify in the request. This list includes each component's recipe that you can use to install the component.
   *
   * @public
   */
  resolvedComponentVersions?: ResolvedComponentVersion[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tag your resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the *IoT Greengrass V2 Developer Guide*.
   *
   * @public
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
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys for tags to remove from the resource.
   *
   * @public
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
   * The name of the core device. This is also the name of the IoT thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The connectivity information for the core device.
   *
   * @public
   */
  connectivityInfo: ConnectivityInfo[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityInfoResponse {
  /**
   * The new version of the connectivity information for the core device.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * A message about the connectivity information update request.
   *
   * @public
   */
  message?: string | undefined;
}
