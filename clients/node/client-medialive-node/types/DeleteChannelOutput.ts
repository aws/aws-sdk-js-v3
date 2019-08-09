import { _UnmarshalledOutputDestination } from "./_OutputDestination";
import { _UnmarshalledChannelEgressEndpoint } from "./_ChannelEgressEndpoint";
import { _UnmarshalledEncoderSettings } from "./_EncoderSettings";
import { _UnmarshalledInputAttachment } from "./_InputAttachment";
import { _UnmarshalledInputSpecification } from "./_InputSpecification";
import { _UnmarshalledPipelineDetail } from "./_PipelineDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelOutput extends __aws_sdk_types.MetadataBearer {
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
  Destinations?: Array<_UnmarshalledOutputDestination>;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: Array<_UnmarshalledChannelEgressEndpoint>;

  /**
   * Encoder Settings
   */
  EncoderSettings?: _UnmarshalledEncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: Array<_UnmarshalledInputAttachment>;

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: _UnmarshalledInputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: "ERROR" | "WARNING" | "INFO" | "DEBUG" | "DISABLED" | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: Array<_UnmarshalledPipelineDetail>;

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
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
