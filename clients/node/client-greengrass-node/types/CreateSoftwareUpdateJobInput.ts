import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSoftwareUpdateJobInput shape
 */
export interface CreateSoftwareUpdateJobInput {
  /**
   * A client token used to correlate requests and responses.
   */
  AmznClientToken?: string;

  /**
   * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
   */
  S3UrlSignerRole: string;

  /**
   * The piece of software on the Greengrass core that will be updated.
   */
  SoftwareToUpdate: "core" | "ota_agent" | string;

  /**
   * The minimum level of log statements that should be logged by the OTA Agent during an update.
   */
  UpdateAgentLogLevel?:
    | "NONE"
    | "TRACE"
    | "DEBUG"
    | "VERBOSE"
    | "INFO"
    | "WARN"
    | "ERROR"
    | "FATAL"
    | string;

  /**
   * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
   */
  UpdateTargets: Array<string> | Iterable<string>;

  /**
   * The architecture of the cores which are the targets of an update.
   */
  UpdateTargetsArchitecture:
    | "armv7l"
    | "x86_64"
    | "aarch64"
    | "openwrt"
    | string;

  /**
   * The operating system of the cores which are the targets of an update.
   */
  UpdateTargetsOperatingSystem: "ubuntu" | "raspbian" | "amazon_linux" | string;

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
