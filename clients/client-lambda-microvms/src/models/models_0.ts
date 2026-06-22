// smithy-typescript generated code
import type {
  Architecture,
  BuildState,
  Capability,
  Chipset,
  HookState,
  MicrovmImageState,
  MicrovmImageVersionState,
  MicrovmImageVersionStatus,
  MicrovmState,
} from "./enums";

/**
 * <p>Configuration for Amazon CloudWatch Logs logging.</p>
 * @public
 */
export interface CloudWatchLogging {
  /**
   * <p>The name of the CloudWatch Logs log group to send logs to.</p>
   * @public
   */
  logGroup?: string | undefined;

  /**
   * <p>The name of the CloudWatch Logs log stream within the log group.</p>
   * @public
   */
  logStream?: string | undefined;
}

/**
 * <p>Contains the location of the code artifact for a MicroVM image.</p>
 * @public
 */
export type CodeArtifact =
  | CodeArtifact.UriMember
  | CodeArtifact.$UnknownMember;

/**
 * @public
 */
export namespace CodeArtifact {
  /**
   * <p>The URI of the code artifact, such as an Amazon S3 path or Amazon ECR image URI.</p>
   * @public
   */
  export interface UriMember {
    uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for the CPU architecture of a MicroVM.</p>
 * @public
 */
export interface CpuConfiguration {
  /**
   * <p>The CPU architecture.</p>
   * @public
   */
  architecture: Architecture | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * <p>Specifies a range of ports.</p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The starting port number of the range.</p>
   * @public
   */
  startPort: number | undefined;

  /**
   * <p>The ending port number of the range.</p>
   * @public
   */
  endPort: number | undefined;
}

/**
 * <p>Specifies which ports are accessible on a MicroVM. Only one of the port specification options can be set.</p>
 * @public
 */
export type PortSpecification =
  | PortSpecification.AllPortsMember
  | PortSpecification.PortMember
  | PortSpecification.RangeMember
  | PortSpecification.$UnknownMember;

/**
 * @public
 */
export namespace PortSpecification {
  /**
   * <p>A single port number.</p>
   * @public
   */
  export interface PortMember {
    port: number;
    range?: never;
    allPorts?: never;
    $unknown?: never;
  }

  /**
   * <p>A range of ports.</p>
   * @public
   */
  export interface RangeMember {
    port?: never;
    range: PortRange;
    allPorts?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that all ports are accessible.</p>
   * @public
   */
  export interface AllPortsMember {
    port?: never;
    range?: never;
    allPorts: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    port?: never;
    range?: never;
    allPorts?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    port: (value: number) => T;
    range: (value: PortRange) => T;
    allPorts: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateMicrovmAuthTokenRequest {
  /**
   * <p>The ID of the MicroVM to create an authentication token for.</p>
   * @public
   */
  microvmIdentifier: string | undefined;

  /**
   * <p>The duration in minutes before the authentication token expires. Maximum: 60 minutes.</p>
   * @public
   */
  expirationInMinutes: number | undefined;

  /**
   * <p>The list of port specifications that the authentication token grants access to on the MicroVM.</p>
   * @public
   */
  allowedPorts: PortSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmAuthTokenResponse {
  /**
   * <p>A map containing the authentication token. Use the value at key "X-aws-proxy-auth" as the header value when connecting to the MicroVM endpoint.</p>
   * @public
   */
  authToken: Record<string, string> | undefined;
}

/**
 * <p>Configuration for lifecycle hooks invoked during MicroVM events such as run, resume, suspend, and terminate.</p>
 * @public
 */
export interface MicrovmHooks {
  /**
   * <p>The path of the hook invoked when the MicroVM starts running.</p>
   * @public
   */
  run?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the run hook to complete.</p>
   * @public
   */
  runTimeoutInSeconds?: number | undefined;

  /**
   * <p>The path of the hook invoked when the MicroVM resumes from a suspended state.</p>
   * @public
   */
  resume?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the resume hook to complete.</p>
   * @public
   */
  resumeTimeoutInSeconds?: number | undefined;

  /**
   * <p>The path of the hook invoked when the MicroVM is suspended.</p>
   * @public
   */
  suspend?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the suspend hook to complete.</p>
   * @public
   */
  suspendTimeoutInSeconds?: number | undefined;

  /**
   * <p>The path of the hook invoked when the MicroVM is terminated.</p>
   * @public
   */
  terminate?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the terminate hook to complete.</p>
   * @public
   */
  terminateTimeoutInSeconds?: number | undefined;
}

/**
 * <p>Configuration for hooks invoked during MicroVM image build events such as ready and validate.</p>
 * @public
 */
export interface MicrovmImageHooks {
  /**
   * <p>The path of the hook invoked when the MicroVM image build is ready.</p>
   * @public
   */
  ready?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the ready hook to complete.</p>
   * @public
   */
  readyTimeoutInSeconds?: number | undefined;

  /**
   * <p>The path of the hook invoked to validate the MicroVM image build.</p>
   * @public
   */
  validate?: HookState | undefined;

  /**
   * <p>The maximum time in seconds for the validate hook to complete.</p>
   * @public
   */
  validateTimeoutInSeconds?: number | undefined;
}

/**
 * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
 * @public
 */
export interface Hooks {
  /**
   * <p>The port number on which the hooks listener runs.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The lifecycle hooks for MicroVM events.</p>
   * @public
   */
  microvmHooks?: MicrovmHooks | undefined;

  /**
   * <p>The hooks for MicroVM image build events.</p>
   * @public
   */
  microvmImageHooks?: MicrovmImageHooks | undefined;
}

/**
 * <p>Specifies that logging is disabled for the MicroVM.</p>
 * @public
 */
export interface LoggingDisabled {}

/**
 * <p>Configuration for MicroVM logging output. Specify exactly one: cloudWatch to enable CloudWatch logging, or disabled to turn off logging.</p>
 * @public
 */
export type Logging =
  | Logging.CloudWatchMember
  | Logging.DisabledMember
  | Logging.$UnknownMember;

/**
 * @public
 */
export namespace Logging {
  /**
   * <p>Specifies that logging is disabled.</p>
   * @public
   */
  export interface DisabledMember {
    disabled: LoggingDisabled;
    cloudWatch?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for sending logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  export interface CloudWatchMember {
    disabled?: never;
    cloudWatch: CloudWatchLogging;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    disabled?: never;
    cloudWatch?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    disabled: (value: LoggingDisabled) => T;
    cloudWatch: (value: CloudWatchLogging) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Resource requirements for a MicroVM.</p>
 * @public
 */
export interface Resources {
  /**
   * <p>The minimum amount of memory in MiB to allocate to the MicroVM.</p>
   * @public
   */
  minimumMemoryInMiB: number | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmImageRequest {
  /**
   * <p>The ARN of the Lambda-managed base MicroVM image to build upon. Use ListManagedMicrovmImages to discover available base images.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image to use.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM role assumed during the image build process. This role must have permissions to access the code artifact and any required resources.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>A description of the MicroVM image.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact containing the application code and metadata for the MicroVM image.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The name of the MicroVM image. Must be unique within the AWS account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the operation returns the successful response without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmImageResponse {
  /**
   * <p>The ARN of the created MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The name of the MicroVM image.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the MicroVM image.</p>
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * <p>The latest active version of the MicroVM image.</p>
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * <p>The latest failed version of the MicroVM image, if any.</p>
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * <p>The timestamp when the MicroVM image was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ARN of the base MicroVM image.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the MicroVM image.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact containing the application code and metadata for the MicroVM image.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the MicroVM image was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmShellAuthTokenRequest {
  /**
   * <p>The ID of the MicroVM to create a shell authentication token for.</p>
   * @public
   */
  microvmIdentifier: string | undefined;

  /**
   * <p>The duration in minutes before the shell authentication token expires.</p>
   * @public
   */
  expirationInMinutes: number | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmShellAuthTokenResponse {
  /**
   * <p>The generated shell authentication token key-value pairs for accessing the MicroVM.</p>
   * @public
   */
  authToken: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageInput {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image to delete.</p>
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageOutput {
  /**
   * <p>The identifier of the deleted MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The current state of the MicroVM image after deletion.</p>
   * @public
   */
  state: MicrovmImageState | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageVersionInput {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image to delete.</p>
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageVersionOutput {
  /**
   * <p>The identifier of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version that was deleted.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The current state of the MicroVM image version after deletion.</p>
   * @public
   */
  state: MicrovmImageVersionState | undefined;
}

/**
 * @public
 */
export interface GetMicrovmRequest {
  /**
   * <p>The ID of the MicroVM to retrieve.</p>
   * @public
   */
  microvmIdentifier: string | undefined;
}

/**
 * <p>Configuration that controls MicroVM auto-suspend and auto-resume behavior. Idle time is measured by inbound traffic through the MicroVM proxy endpoint — if no requests arrive within the configured duration, the MicroVM is suspended.</p>
 * @public
 */
export interface IdlePolicy {
  /**
   * <p>The maximum time in seconds that a MicroVM can remain idle before it is automatically suspended.</p>
   * @public
   */
  maxIdleDurationSeconds: number | undefined;

  /**
   * <p>The maximum time in seconds that a MicroVM can remain suspended before it is automatically terminated.</p>
   * @public
   */
  suspendedDurationSeconds: number | undefined;

  /**
   * <p>Indicates whether the MicroVM automatically resumes when it receives a request while suspended.</p>
   * @public
   */
  autoResumeEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface GetMicrovmResponse {
  /**
   * <p>The unique identifier of the MicroVM.</p>
   * @public
   */
  microvmId: string | undefined;

  /**
   * <p>The current lifecycle state of the MicroVM.</p>
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * <p>The HTTPS endpoint URL for communicating with the MicroVM. Include a valid authentication token in the X-aws-proxy-auth header when sending requests.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The ARN of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The ARN of the IAM execution role assumed by the MicroVM.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The idle policy configuration of the MicroVM, controlling auto-suspend and auto-resume behavior.</p>
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * <p>The maximum duration in seconds that the MicroVM can exist before being terminated by the platform.</p>
   * @public
   */
  maximumDurationInSeconds: number | undefined;

  /**
   * <p>The timestamp when the MicroVM first started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the MicroVM terminated.</p>
   * @public
   */
  terminatedAt?: Date | undefined;

  /**
   * <p>The reason for why the MicroVM is in the current state.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>The list of ingress network connectors configured for the MicroVM.</p>
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of egress network connectors configured for the MicroVM.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageInput {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image to retrieve.</p>
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageOutput {
  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The name of the MicroVM image.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the MicroVM image.</p>
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * <p>The latest active version of the MicroVM image.</p>
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * <p>The latest failed version of the MicroVM image, if any.</p>
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * <p>The timestamp when the MicroVM image was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the MicroVM image was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageBuildInput {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The unique identifier of the build to retrieve.</p>
   * @public
   */
  buildId: string | undefined;
}

/**
 * <p>Contains size information about a MicroVM image snapshot build.</p>
 * @public
 */
export interface SnapshotBuild {
  /**
   * <p>The size of the memory snapshot in bytes.</p>
   * @public
   */
  memorySnapshotSizeInBytes?: number | undefined;

  /**
   * <p>The size of the installed code in bytes.</p>
   * @public
   */
  codeInstallSizeInBytes?: number | undefined;

  /**
   * <p>The size of the disk snapshot in bytes.</p>
   * @public
   */
  diskSnapshotSizeInBytes?: number | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageBuildOutput {
  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The build request ID.</p>
   * @public
   */
  buildId: string | undefined;

  /**
   * <p>The current state of the build.</p>
   * @public
   */
  buildState: BuildState | undefined;

  /**
   * <p>The target CPU architecture for the build. Supported value: ARM_64.</p>
   * @public
   */
  architecture: Architecture | undefined;

  /**
   * <p>The target chipset for the build.</p>
   * @public
   */
  chipset: Chipset | undefined;

  /**
   * <p>The target chipset generation for the build.</p>
   * @public
   */
  chipsetGeneration: string | undefined;

  /**
   * <p>The reason for the build state, if applicable.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>The timestamp when the build was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The snapshot build details, including memory and disk snapshot sizes.</p>
   * @public
   */
  snapshotBuild?: SnapshotBuild | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageVersionInput {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image to retrieve.</p>
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageVersionOutput {
  /**
   * <p>The ARN of the base MicroVM image used.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact for this version.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for this version.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The current state of the version.</p>
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * <p>The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).</p>
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * <p>The timestamp when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the version was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The reason for the current state. For example, one or more builds failed.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>Key-value pairs associated with the version.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImagesInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a managed MicroVM image.</p>
 * @public
 */
export interface ManagedMicrovmImageSummary {
  /**
   * <p>The ARN of the managed MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The timestamp when the managed MicroVM image was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the managed MicroVM image was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImagesOutput {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of managed MicroVM images.</p>
   * @public
   */
  items: ManagedMicrovmImageSummary[] | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImageVersionsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier (ARN or ID) of the managed MicroVM image to list versions for.</p>
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * <p>Contains version information for a managed MicroVM image.</p>
 * @public
 */
export interface ManagedMicrovmImageVersion {
  /**
   * <p>The ARN of the managed MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the managed MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The timestamp when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the version was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImageVersionsOutput {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of managed MicroVM image versions.</p>
   * @public
   */
  items: ManagedMicrovmImageVersion[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageBuildsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image to list builds for.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>Filters builds by target CPU architecture.</p>
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * <p>Filters builds by target chipset.</p>
   * @public
   */
  chipset?: Chipset | undefined;

  /**
   * <p>Filters builds by target chipset generation.</p>
   * @public
   */
  chipsetGeneration?: string | undefined;
}

/**
 * <p>Contains summary information about a MicroVM image build.</p>
 * @public
 */
export interface MicrovmImageBuildSummary {
  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The build request ID.</p>
   * @public
   */
  buildId: string | undefined;

  /**
   * <p>The current state of the build.</p>
   * @public
   */
  buildState: BuildState | undefined;

  /**
   * <p>The target CPU architecture for the build. Supported value: ARM_64.</p>
   * @public
   */
  architecture: Architecture | undefined;

  /**
   * <p>The target chipset for the build.</p>
   * @public
   */
  chipset: Chipset | undefined;

  /**
   * <p>The target chipset generation for the build.</p>
   * @public
   */
  chipsetGeneration: string | undefined;

  /**
   * <p>The reason for the build state, if applicable.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>The timestamp when the build was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageBuildsOutput {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of MicroVM image builds.</p>
   * @public
   */
  items: MicrovmImageBuildSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImagesRequest {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters images whose name contains the specified string.</p>
   * @public
   */
  nameFilter?: string | undefined;
}

/**
 * <p>Contains summary information about a MicroVM image.</p>
 * @public
 */
export interface MicrovmImageSummary {
  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The name of the MicroVM image.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the MicroVM image.</p>
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * <p>The latest active version of the MicroVM image.</p>
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * <p>The latest failed version of the MicroVM image, if any.</p>
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * <p>The timestamp when the MicroVM image was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImagesResponse {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of MicroVM images.</p>
   * @public
   */
  items: MicrovmImageSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageVersionsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image to list versions for.</p>
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * <p>Contains summary information about a version of a MicroVM image.</p>
 * @public
 */
export interface MicrovmImageVersionSummary {
  /**
   * <p>The ARN of the base MicroVM image used.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact for this version.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for this version.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The current state of the version.</p>
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * <p>The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).</p>
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * <p>The timestamp when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the version was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The reason for the current state. For example, one or more builds failed.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>Key-value pairs associated with the version.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageVersionsOutput {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of MicroVM image versions.</p>
   * @public
   */
  items: MicrovmImageVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The ARN of the resource to list tags for.</p>
   * @public
   */
  Resource: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>The key-value pairs of tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMicrovmsRequest {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous call. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional filter to list only MicroVMs running the specified image.</p>
   * @public
   */
  imageIdentifier?: string | undefined;

  /**
   * <p>Optional filter to list only MicroVMs running the specified image version.</p>
   * @public
   */
  imageVersion?: string | undefined;
}

/**
 * <p>Contains summary information about a MicroVM instance.</p>
 * @public
 */
export interface MicrovmItem {
  /**
   * <p>The unique identifier of the MicroVM.</p>
   * @public
   */
  microvmId: string | undefined;

  /**
   * <p>The current lifecycle state of the MicroVM.</p>
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * <p>The ARN of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The timestamp when the MicroVM started.</p>
   * @public
   */
  startedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmsResponse {
  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of MicroVMs.</p>
   * @public
   */
  items: MicrovmItem[] | undefined;
}

/**
 * @public
 */
export interface ResumeMicrovmRequest {
  /**
   * <p>The ID of the MicroVM to resume.</p>
   * @public
   */
  microvmIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResumeMicrovmResponse {}

/**
 * @public
 */
export interface RunMicrovmRequest {
  /**
   * <p>The list of ingress network connectors to configure for the MicroVM.</p>
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of egress network connectors to configure for the MicroVM.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The identifier (ARN or ID) of the MicroVM image to run.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image to run.</p>
   * @public
   */
  imageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM role to be assumed by the MicroVM during execution.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>Configuration to control auto-suspend and auto-resume behavior.</p>
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * <p>The logging configuration for this MicroVM instance. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream application logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>Per-MicroVM initialization data delivered as the request body of the /run lifecycle hook. Use to pass tenant-specific configuration such as session IDs or secret references. Maximum: 16,384 bytes.</p>
   * @public
   */
  runHookPayload?: string | undefined;

  /**
   * <p>The maximum duration in seconds that the MicroVM can exist before being terminated by the platform. Valid range: 1–28,800 (8 hours).</p>
   * @public
   */
  maximumDurationInSeconds?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RunMicrovmResponse {
  /**
   * <p>The unique identifier of the MicroVM.</p>
   * @public
   */
  microvmId: string | undefined;

  /**
   * <p>The current lifecycle state of the MicroVM.</p>
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * <p>The HTTPS endpoint URL for communicating with the MicroVM. Include a valid authentication token in the X-aws-proxy-auth header when sending requests.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The ARN of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image used to run this MicroVM.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The ARN of the IAM execution role assumed by the MicroVM.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The idle policy configuration of the MicroVM.</p>
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * <p>The maximum duration in seconds that the MicroVM can exist.</p>
   * @public
   */
  maximumDurationInSeconds: number | undefined;

  /**
   * <p>The timestamp when the MicroVM first started.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the MicroVM terminated.</p>
   * @public
   */
  terminatedAt?: Date | undefined;

  /**
   * <p>The reason for why the MicroVM is in the current state.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>The list of ingress network connectors configured for the MicroVM.</p>
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of egress network connectors configured for the MicroVM.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;
}

/**
 * @public
 */
export interface SuspendMicrovmRequest {
  /**
   * <p>The ID of the MicroVM to suspend.</p>
   * @public
   */
  microvmIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SuspendMicrovmResponse {}

/**
 * @public
 */
export interface TerminateMicrovmRequest {
  /**
   * <p>The ID of the MicroVM to terminate.</p>
   * @public
   */
  microvmIdentifier: string | undefined;
}

/**
 * @public
 */
export interface TerminateMicrovmResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to tag.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>The key-value pairs of tags to add to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageRequest {
  /**
   * <p>The ARN of the base MicroVM image.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image to use.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the MicroVM image.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact containing the application code and metadata for the MicroVM image.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image to update.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageResponse {
  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The name of the MicroVM image.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current state of the MicroVM image.</p>
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * <p>The latest active version of the MicroVM image.</p>
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * <p>The latest failed version of the MicroVM image, if any.</p>
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * <p>The timestamp when the MicroVM image was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ARN of the base MicroVM image.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the MicroVM image.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact containing the application code and metadata for the MicroVM image.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the MicroVM image was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageVersionRequest {
  /**
   * <p>The unique identifier (ARN or ID) of the MicroVM image.</p>
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * <p>The version of the MicroVM image to update.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The new status to set for the MicroVM image version.</p>
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageVersionResponse {
  /**
   * <p>The ARN of the base MicroVM image used.</p>
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * <p>The specific version of the base MicroVM image.</p>
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * <p>The ARN of the IAM build role.</p>
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The code artifact for this version.</p>
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * <p>The logging configuration for this version.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The list of egress network connectors available to the MicroVM at runtime.</p>
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * <p>The list of supported CPU configurations for the MicroVM.</p>
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * <p>The resource requirements for the MicroVM.</p>
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * <p>Additional OS capabilities granted to the MicroVM runtime environment.</p>
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * <p>Lifecycle hook configuration for MicroVMs and MicroVM images.</p>
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * <p>Environment variables set in the MicroVM runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the MicroVM image.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The version of the MicroVM image.</p>
   * @public
   */
  imageVersion: string | undefined;

  /**
   * <p>The current state of the version.</p>
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * <p>The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).</p>
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * <p>The timestamp when the version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the version was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The reason for the current state. For example, one or more builds failed.</p>
   * @public
   */
  stateReason?: string | undefined;

  /**
   * <p>Key-value pairs associated with the version.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}
