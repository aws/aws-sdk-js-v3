import {
  _OutputDestination,
  _UnmarshalledOutputDestination
} from "./_OutputDestination";
import {
  _ChannelEgressEndpoint,
  _UnmarshalledChannelEgressEndpoint
} from "./_ChannelEgressEndpoint";
import {
  _InputAttachment,
  _UnmarshalledInputAttachment
} from "./_InputAttachment";
import {
  _InputSpecification,
  _UnmarshalledInputSpecification
} from "./_InputSpecification";

/**
 * Placeholder documentation for ChannelSummary
 */
export interface _ChannelSummary {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: "STANDARD" | "SINGLE_PIPELINE" | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   *
   */
  Destinations?: Array<_OutputDestination> | Iterable<_OutputDestination>;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?:
    | Array<_ChannelEgressEndpoint>
    | Iterable<_ChannelEgressEndpoint>;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: Array<_InputAttachment> | Iterable<_InputAttachment>;

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: _InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: "ERROR" | "WARNING" | "INFO" | "DEBUG" | "DISABLED" | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?:
    | "CREATING"
    | "CREATE_FAILED"
    | "IDLE"
    | "STARTING"
    | "RUNNING"
    | "RECOVERING"
    | "STOPPING"
    | "DELETING"
    | "DELETED"
    | "UPDATING"
    | "UPDATE_FAILED"
    | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledChannelSummary extends _ChannelSummary {
  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   *
   */
  Destinations?: Array<_UnmarshalledOutputDestination>;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: Array<_UnmarshalledChannelEgressEndpoint>;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: Array<_UnmarshalledInputAttachment>;

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: _UnmarshalledInputSpecification;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}
