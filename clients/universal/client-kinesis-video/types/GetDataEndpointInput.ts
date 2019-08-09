import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDataEndpointInput shape
 */
export interface GetDataEndpointInput {
  /**
   * <p>The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request. </p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the API action for which to get an endpoint.</p>
   */
  APIName:
    | "PUT_MEDIA"
    | "GET_MEDIA"
    | "LIST_FRAGMENTS"
    | "GET_MEDIA_FOR_FRAGMENT_LIST"
    | "GET_HLS_STREAMING_SESSION_URL"
    | "GET_DASH_STREAMING_SESSION_URL"
    | string;

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
