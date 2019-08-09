import { _UnmarshalledInputDestination } from "./_InputDestination";
import { _UnmarshalledMediaConnectFlow } from "./_MediaConnectFlow";
import { _UnmarshalledInputSource } from "./_InputSource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: Array<string>;

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: Array<_UnmarshalledInputDestination>;

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   *
   */
  InputClass?: "STANDARD" | "SINGLE_PIPELINE" | string;

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE inputs.
   *
   */
  InputSourceType?: "STATIC" | "DYNAMIC" | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: Array<_UnmarshalledMediaConnectFlow>;

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: Array<string>;

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: Array<_UnmarshalledInputSource>;

  /**
   * Placeholder documentation for InputState
   */
  State?:
    | "CREATING"
    | "DETACHED"
    | "ATTACHED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Placeholder documentation for InputType
   */
  Type?:
    | "UDP_PUSH"
    | "RTP_PUSH"
    | "RTMP_PUSH"
    | "RTMP_PULL"
    | "URL_PULL"
    | "MP4_FILE"
    | "MEDIACONNECT"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
