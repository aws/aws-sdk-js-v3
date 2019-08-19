import { _InputDestinationRequest } from "./_InputDestinationRequest";
import { _MediaConnectFlowRequest } from "./_MediaConnectFlowRequest";
import { _InputSourceRequest } from "./_InputSourceRequest";
import { _InputVpcRequest } from "./_InputVpcRequest";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The name of the input
 */
export interface CreateInputInput {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?:
    | Array<_InputDestinationRequest>
    | Iterable<_InputDestinationRequest>;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   *
   */
  MediaConnectFlows?:
    | Array<_MediaConnectFlowRequest>
    | Iterable<_MediaConnectFlowRequest>;

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   *
   */
  RequestId?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   *
   */
  Sources?: Array<_InputSourceRequest> | Iterable<_InputSourceRequest>;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   *
   */
  Vpc?: _InputVpcRequest;

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
