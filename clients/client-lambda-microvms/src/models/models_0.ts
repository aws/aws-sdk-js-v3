// smithy-typescript generated code
import type {
  Architecture,
  BuildState,
  Capability,
  Chipset,
  HookState,
  ManagedMicrovmImageVersionStatus,
  MicrovmImageState,
  MicrovmImageVersionState,
  MicrovmImageVersionStatus,
  MicrovmState,
} from "./enums";

/**
 * Configuration for Amazon CloudWatch Logs logging.
 *
 * @public
 */
export interface CloudWatchLogging {
  /**
   * The name of the CloudWatch Logs log group to send logs to.
   *
   * @public
   */
  logGroup?: string | undefined;

  /**
   * The name of the CloudWatch Logs log stream within the log group.
   *
   * @public
   */
  logStream?: string | undefined;
}

/**
 * Contains the location of the code artifact for a MicroVM image.
 *
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
   * The URI of the code artifact in Amazon S3.
   *
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
 * Configuration for the CPU architecture of a MicroVM.
 *
 * @public
 */
export interface CpuConfiguration {
  /**
   * The CPU architecture.
   *
   * @public
   */
  architecture: Architecture | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * Specifies a range of ports.
 *
 * @public
 */
export interface PortRange {
  /**
   * The starting port number of the range.
   *
   * @public
   */
  startPort: number | undefined;

  /**
   * The ending port number of the range.
   *
   * @public
   */
  endPort: number | undefined;
}

/**
 * Specifies which ports are accessible on a MicroVM. Only one of the port specification options can be set.
 *
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
   * A single port number.
   *
   * @public
   */
  export interface PortMember {
    port: number;
    range?: never;
    allPorts?: never;
    $unknown?: never;
  }

  /**
   * A range of ports.
   *
   * @public
   */
  export interface RangeMember {
    port?: never;
    range: PortRange;
    allPorts?: never;
    $unknown?: never;
  }

  /**
   * Indicates that all ports are accessible.
   *
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
   * The ID of the MicroVM to create an authentication token for.
   *
   * @public
   */
  microvmIdentifier: string | undefined;

  /**
   * The duration in minutes before the authentication token expires. Maximum: 60 minutes.
   *
   * @public
   */
  expirationInMinutes: number | undefined;

  /**
   * The list of port specifications that the authentication token grants access to on the MicroVM.
   *
   * @public
   */
  allowedPorts: PortSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmAuthTokenResponse {
  /**
   * A map containing the authentication token. Use the value at key "X-aws-proxy-auth" as the header value when connecting to the MicroVM endpoint.
   *
   * @public
   */
  authToken: Record<string, string> | undefined;
}

/**
 * Configuration for lifecycle hooks invoked during MicroVM events such as run, resume, suspend, and terminate.
 *
 * @public
 */
export interface MicrovmHooks {
  /**
   * The path of the hook invoked when the MicroVM starts running.
   *
   * @public
   */
  run?: HookState | undefined;

  /**
   * The maximum time in seconds for the run hook to complete.
   *
   * @public
   */
  runTimeoutInSeconds?: number | undefined;

  /**
   * The path of the hook invoked when the MicroVM resumes from a suspended state.
   *
   * @public
   */
  resume?: HookState | undefined;

  /**
   * The maximum time in seconds for the resume hook to complete.
   *
   * @public
   */
  resumeTimeoutInSeconds?: number | undefined;

  /**
   * The path of the hook invoked when the MicroVM is suspended.
   *
   * @public
   */
  suspend?: HookState | undefined;

  /**
   * The maximum time in seconds for the suspend hook to complete.
   *
   * @public
   */
  suspendTimeoutInSeconds?: number | undefined;

  /**
   * The path of the hook invoked when the MicroVM is terminated.
   *
   * @public
   */
  terminate?: HookState | undefined;

  /**
   * The maximum time in seconds for the terminate hook to complete.
   *
   * @public
   */
  terminateTimeoutInSeconds?: number | undefined;
}

/**
 * Configuration for hooks invoked during MicroVM image build events such as ready and validate.
 *
 * @public
 */
export interface MicrovmImageHooks {
  /**
   * The path of the hook invoked when the MicroVM image build is ready.
   *
   * @public
   */
  ready?: HookState | undefined;

  /**
   * The maximum time in seconds for the ready hook to complete.
   *
   * @public
   */
  readyTimeoutInSeconds?: number | undefined;

  /**
   * The path of the hook invoked to validate the MicroVM image build.
   *
   * @public
   */
  validate?: HookState | undefined;

  /**
   * The maximum time in seconds for the validate hook to complete.
   *
   * @public
   */
  validateTimeoutInSeconds?: number | undefined;
}

/**
 * Lifecycle hook configuration for MicroVMs and MicroVM images.
 *
 * @public
 */
export interface Hooks {
  /**
   * The port number on which the hooks listener runs.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The lifecycle hooks for MicroVM events.
   *
   * @public
   */
  microvmHooks?: MicrovmHooks | undefined;

  /**
   * The hooks for MicroVM image build events.
   *
   * @public
   */
  microvmImageHooks?: MicrovmImageHooks | undefined;
}

/**
 * Specifies that logging is disabled for the MicroVM.
 *
 * @public
 */
export interface LoggingDisabled {}

/**
 * Configuration for MicroVM logging output. Specify exactly one: cloudWatch to enable CloudWatch logging, or disabled to turn off logging.
 *
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
   * Specifies that logging is disabled.
   *
   * @public
   */
  export interface DisabledMember {
    disabled: LoggingDisabled;
    cloudWatch?: never;
    $unknown?: never;
  }

  /**
   * Configuration for sending logs to Amazon CloudWatch Logs.
   *
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
 * Resource requirements for a MicroVM.
 *
 * @public
 */
export interface Resources {
  /**
   * The minimum amount of memory in MiB to allocate to the MicroVM.
   *
   * @public
   */
  minimumMemoryInMiB: number | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmImageRequest {
  /**
   * The ARN of the Lambda-managed base MicroVM image to build upon. Use ListManagedMicrovmImages to discover available base images.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image to use.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM role assumed during the image build process. This role must have permissions to access the code artifact and any required resources.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * A description of the MicroVM image.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact containing the application code and metadata for the MicroVM image.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The name of the MicroVM image. Must be unique within the AWS account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the operation returns the successful response without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmImageResponse {
  /**
   * The ARN of the created MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The name of the MicroVM image.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current state of the MicroVM image.
   *
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * The latest active version of the MicroVM image.
   *
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * The latest failed version of the MicroVM image, if any.
   *
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * The timestamp when the MicroVM image was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ARN of the base MicroVM image.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the MicroVM image.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact containing the application code and metadata for the MicroVM image.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp when the MicroVM image was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmShellAuthTokenRequest {
  /**
   * The ID of the MicroVM to create a shell authentication token for.
   *
   * @public
   */
  microvmIdentifier: string | undefined;

  /**
   * The duration in minutes before the shell authentication token expires.
   *
   * @public
   */
  expirationInMinutes: number | undefined;
}

/**
 * @public
 */
export interface CreateMicrovmShellAuthTokenResponse {
  /**
   * The generated shell authentication token key-value pairs for accessing the MicroVM.
   *
   * @public
   */
  authToken: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageInput {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image to delete.
   *
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageOutput {
  /**
   * The identifier of the deleted MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The current state of the MicroVM image after deletion.
   *
   * @public
   */
  state: MicrovmImageState | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageVersionInput {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image to delete.
   *
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrovmImageVersionOutput {
  /**
   * The identifier of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version that was deleted.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The current state of the MicroVM image version after deletion.
   *
   * @public
   */
  state: MicrovmImageVersionState | undefined;
}

/**
 * @public
 */
export interface GetMicrovmRequest {
  /**
   * The ID of the MicroVM to retrieve.
   *
   * @public
   */
  microvmIdentifier: string | undefined;
}

/**
 * Configuration that controls MicroVM auto-suspend and auto-resume behavior. Idle time is measured by inbound traffic through the MicroVM proxy endpoint — if no requests arrive within the configured duration, the MicroVM is suspended.
 *
 * @public
 */
export interface IdlePolicy {
  /**
   * The maximum time in seconds that a MicroVM can remain idle before it is automatically suspended.
   *
   * @public
   */
  maxIdleDurationSeconds: number | undefined;

  /**
   * The maximum time in seconds that a MicroVM can remain suspended before it is automatically terminated.
   *
   * @public
   */
  suspendedDurationSeconds: number | undefined;

  /**
   * Indicates whether the MicroVM automatically resumes when it receives a request while suspended.
   *
   * @public
   */
  autoResumeEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface GetMicrovmResponse {
  /**
   * The unique identifier of the MicroVM.
   *
   * @public
   */
  microvmId: string | undefined;

  /**
   * The current lifecycle state of the MicroVM.
   *
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * The HTTPS endpoint URL for communicating with the MicroVM. Include a valid authentication token in the X-aws-proxy-auth header when sending requests.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The ARN of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The ARN of the IAM execution role assumed by the MicroVM.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The idle policy configuration of the MicroVM, controlling auto-suspend and auto-resume behavior.
   *
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * The maximum duration in seconds that the MicroVM can exist before being terminated by the platform.
   *
   * @public
   */
  maximumDurationInSeconds: number | undefined;

  /**
   * The timestamp when the MicroVM first started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the MicroVM terminated.
   *
   * @public
   */
  terminatedAt?: Date | undefined;

  /**
   * The reason for why the MicroVM is in the current state.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * The list of ingress network connectors configured for the MicroVM.
   *
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * The list of egress network connectors configured for the MicroVM.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageInput {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image to retrieve.
   *
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageOutput {
  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The name of the MicroVM image.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current state of the MicroVM image.
   *
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * The latest active version of the MicroVM image.
   *
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * The latest failed version of the MicroVM image, if any.
   *
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * The timestamp when the MicroVM image was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * A set of key-value pairs that you can attach to the resource. Use tags to categorize resources for cost allocation, access control (ABAC), and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp when the MicroVM image was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageBuildInput {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The unique identifier of the build to retrieve.
   *
   * @public
   */
  buildId: string | undefined;
}

/**
 * Contains size information about a MicroVM image snapshot build.
 *
 * @public
 */
export interface SnapshotBuild {
  /**
   * The size of the memory snapshot in bytes.
   *
   * @public
   */
  memorySnapshotSizeInBytes?: number | undefined;

  /**
   * The size of the installed code in bytes.
   *
   * @public
   */
  codeInstallSizeInBytes?: number | undefined;

  /**
   * The size of the disk snapshot in bytes.
   *
   * @public
   */
  diskSnapshotSizeInBytes?: number | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageBuildOutput {
  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The build request ID.
   *
   * @public
   */
  buildId: string | undefined;

  /**
   * The current state of the build.
   *
   * @public
   */
  buildState: BuildState | undefined;

  /**
   * The target CPU architecture for the build. Supported value: ARM_64.
   *
   * @public
   */
  architecture: Architecture | undefined;

  /**
   * The target chipset for the build.
   *
   * @public
   */
  chipset: Chipset | undefined;

  /**
   * The target chipset generation for the build.
   *
   * @public
   */
  chipsetGeneration: string | undefined;

  /**
   * The reason for the build state, if applicable.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * The timestamp when the build was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The snapshot build details, including memory and disk snapshot sizes.
   *
   * @public
   */
  snapshotBuild?: SnapshotBuild | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageVersionInput {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image to retrieve.
   *
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface GetMicrovmImageVersionOutput {
  /**
   * The ARN of the base MicroVM image used.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact for this version.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for this version.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The current state of the version.
   *
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).
   *
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * The timestamp when the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the version was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The reason for the current state. For example, one or more builds failed.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * Key-value pairs associated with the version.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImagesInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a managed MicroVM image.
 *
 * @public
 */
export interface ManagedMicrovmImageSummary {
  /**
   * The ARN of the managed MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The timestamp when the managed MicroVM image was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the managed MicroVM image was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImagesOutput {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of managed MicroVM images.
   *
   * @public
   */
  items: ManagedMicrovmImageSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The ARN of the resource to list tags for.
   *
   * @public
   */
  Resource: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * The key-value pairs of tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMicrovmsRequest {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional filter to list only MicroVMs running the specified image.
   *
   * @public
   */
  imageIdentifier?: string | undefined;

  /**
   * Optional filter to list only MicroVMs running the specified image version.
   *
   * @public
   */
  imageVersion?: string | undefined;
}

/**
 * Contains summary information about a MicroVM instance.
 *
 * @public
 */
export interface MicrovmItem {
  /**
   * The unique identifier of the MicroVM.
   *
   * @public
   */
  microvmId: string | undefined;

  /**
   * The current lifecycle state of the MicroVM.
   *
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * The ARN of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The timestamp when the MicroVM started.
   *
   * @public
   */
  startedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmsResponse {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of MicroVMs.
   *
   * @public
   */
  items: MicrovmItem[] | undefined;
}

/**
 * @public
 */
export interface ResumeMicrovmRequest {
  /**
   * The ID of the MicroVM to resume.
   *
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
   * The list of ingress network connectors to configure for the MicroVM.
   *
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * The list of egress network connectors to configure for the MicroVM.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The identifier (ARN or ID) of the MicroVM image to run.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image to run.
   *
   * @public
   */
  imageVersion?: string | undefined;

  /**
   * The ARN of the IAM role to be assumed by the MicroVM during execution.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * Configuration to control auto-suspend and auto-resume behavior.
   *
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * The logging configuration for this MicroVM instance. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream application logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * Per-MicroVM initialization data delivered as the request body of the /run lifecycle hook. Use to pass tenant-specific configuration such as session IDs or secret references. Maximum: 16,384 bytes.
   *
   * @public
   */
  runHookPayload?: string | undefined;

  /**
   * The maximum duration in seconds that the MicroVM can exist before being terminated by the platform. Valid range: 1–28,800 (8 hours).
   *
   * @public
   */
  maximumDurationInSeconds?: number | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RunMicrovmResponse {
  /**
   * The unique identifier of the MicroVM.
   *
   * @public
   */
  microvmId: string | undefined;

  /**
   * The current lifecycle state of the MicroVM.
   *
   * @public
   */
  state: MicrovmState | undefined;

  /**
   * The HTTPS endpoint URL for communicating with the MicroVM. Include a valid authentication token in the X-aws-proxy-auth header when sending requests.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The ARN of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image used to run this MicroVM.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The ARN of the IAM execution role assumed by the MicroVM.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The idle policy configuration of the MicroVM.
   *
   * @public
   */
  idlePolicy?: IdlePolicy | undefined;

  /**
   * The maximum duration in seconds that the MicroVM can exist.
   *
   * @public
   */
  maximumDurationInSeconds: number | undefined;

  /**
   * The timestamp when the MicroVM first started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the MicroVM terminated.
   *
   * @public
   */
  terminatedAt?: Date | undefined;

  /**
   * The reason for why the MicroVM is in the current state.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * The list of ingress network connectors configured for the MicroVM.
   *
   * @public
   */
  ingressNetworkConnectors?: string[] | undefined;

  /**
   * The list of egress network connectors configured for the MicroVM.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;
}

/**
 * @public
 */
export interface SuspendMicrovmRequest {
  /**
   * The ID of the MicroVM to suspend.
   *
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
   * The ID of the MicroVM to terminate.
   *
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
export interface ListManagedMicrovmImageVersionsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier (ARN or ID) of the managed MicroVM image to list versions for.
   *
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * Contains version information for a managed MicroVM image.
 *
 * @public
 */
export interface ManagedMicrovmImageVersion {
  /**
   * The ARN of the managed MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the managed MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The lifecycle status of the managed MicroVM image version. Valid values: AVAILABLE (the version is available for use) or DEPRECATED (the version is deprecated; do not use it for new MicroVM images).
   *
   * @public
   */
  status?: ManagedMicrovmImageVersionStatus | undefined;

  /**
   * The timestamp when the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the version was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedMicrovmImageVersionsOutput {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of managed MicroVM image versions.
   *
   * @public
   */
  items: ManagedMicrovmImageVersion[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageBuildsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier (ARN or ID) of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image to list builds for.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * Filters builds by target CPU architecture.
   *
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * Filters builds by target chipset.
   *
   * @public
   */
  chipset?: Chipset | undefined;

  /**
   * Filters builds by target chipset generation.
   *
   * @public
   */
  chipsetGeneration?: string | undefined;
}

/**
 * Contains summary information about a MicroVM image build.
 *
 * @public
 */
export interface MicrovmImageBuildSummary {
  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The build request ID.
   *
   * @public
   */
  buildId: string | undefined;

  /**
   * The current state of the build.
   *
   * @public
   */
  buildState: BuildState | undefined;

  /**
   * The target CPU architecture for the build. Supported value: ARM_64.
   *
   * @public
   */
  architecture: Architecture | undefined;

  /**
   * The target chipset for the build.
   *
   * @public
   */
  chipset: Chipset | undefined;

  /**
   * The target chipset generation for the build.
   *
   * @public
   */
  chipsetGeneration: string | undefined;

  /**
   * The reason for the build state, if applicable.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * The timestamp when the build was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageBuildsOutput {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of MicroVM image builds.
   *
   * @public
   */
  items: MicrovmImageBuildSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImagesRequest {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters images whose name contains the specified string.
   *
   * @public
   */
  nameFilter?: string | undefined;
}

/**
 * Contains summary information about a MicroVM image.
 *
 * @public
 */
export interface MicrovmImageSummary {
  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The name of the MicroVM image.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current state of the MicroVM image.
   *
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * The latest active version of the MicroVM image.
   *
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * The latest failed version of the MicroVM image, if any.
   *
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * The timestamp when the MicroVM image was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImagesResponse {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of MicroVM images.
   *
   * @public
   */
  items: MicrovmImageSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageVersionsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous call. Use this token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier (ARN or ID) of the MicroVM image to list versions for.
   *
   * @public
   */
  imageIdentifier: string | undefined;
}

/**
 * Contains summary information about a version of a MicroVM image.
 *
 * @public
 */
export interface MicrovmImageVersionSummary {
  /**
   * The ARN of the base MicroVM image used.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact for this version.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for this version.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The current state of the version.
   *
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).
   *
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * The timestamp when the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the version was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The reason for the current state. For example, one or more builds failed.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * Key-value pairs associated with the version.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMicrovmImageVersionsOutput {
  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of MicroVM image versions.
   *
   * @public
   */
  items: MicrovmImageVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageRequest {
  /**
   * The ARN of the base MicroVM image.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image to use.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the MicroVM image.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact containing the application code and metadata for the MicroVM image.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The unique identifier (ARN or ID) of the MicroVM image to update.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageResponse {
  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The name of the MicroVM image.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current state of the MicroVM image.
   *
   * @public
   */
  state: MicrovmImageState | undefined;

  /**
   * The latest active version of the MicroVM image.
   *
   * @public
   */
  latestActiveImageVersion?: string | undefined;

  /**
   * The latest failed version of the MicroVM image, if any.
   *
   * @public
   */
  latestFailedImageVersion?: string | undefined;

  /**
   * The timestamp when the MicroVM image was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The ARN of the base MicroVM image.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the MicroVM image.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact containing the application code and metadata for the MicroVM image.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for build-time and runtime logs. Specify \{"cloudWatch": \{"logGroup": "..."\}\} to stream logs to a custom CloudWatch log group, or \{"disabled": \{\}\} to turn off logging.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The timestamp when the MicroVM image was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageVersionRequest {
  /**
   * The unique identifier (ARN or ID) of the MicroVM image.
   *
   * @public
   */
  imageIdentifier: string | undefined;

  /**
   * The version of the MicroVM image to update.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The new status to set for the MicroVM image version.
   *
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMicrovmImageVersionResponse {
  /**
   * The ARN of the base MicroVM image used.
   *
   * @public
   */
  baseImageArn: string | undefined;

  /**
   * The specific version of the base MicroVM image.
   *
   * @public
   */
  baseImageVersion?: string | undefined;

  /**
   * The ARN of the IAM build role.
   *
   * @public
   */
  buildRoleArn: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The code artifact for this version.
   *
   * @public
   */
  codeArtifact: CodeArtifact | undefined;

  /**
   * The logging configuration for this version.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The list of egress network connectors available to the MicroVM at runtime.
   *
   * @public
   */
  egressNetworkConnectors?: string[] | undefined;

  /**
   * The list of supported CPU configurations for the MicroVM.
   *
   * @public
   */
  cpuConfigurations?: CpuConfiguration[] | undefined;

  /**
   * The resource requirements for the MicroVM.
   *
   * @public
   */
  resources?: Resources[] | undefined;

  /**
   * Additional OS capabilities granted to the MicroVM runtime environment.
   *
   * @public
   */
  additionalOsCapabilities?: Capability[] | undefined;

  /**
   * Lifecycle hook configuration for MicroVMs and MicroVM images.
   *
   * @public
   */
  hooks?: Hooks | undefined;

  /**
   * Environment variables set in the MicroVM runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The ARN of the MicroVM image.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The version of the MicroVM image.
   *
   * @public
   */
  imageVersion: string | undefined;

  /**
   * The current state of the version.
   *
   * @public
   */
  state: MicrovmImageVersionState | undefined;

  /**
   * The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs).
   *
   * @public
   */
  status: MicrovmImageVersionStatus | undefined;

  /**
   * The timestamp when the version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the version was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The reason for the current state. For example, one or more builds failed.
   *
   * @public
   */
  stateReason?: string | undefined;

  /**
   * Key-value pairs associated with the version.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to tag.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * The key-value pairs of tags to add to the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to remove tags from.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
