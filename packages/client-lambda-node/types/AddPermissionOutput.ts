import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddPermissionOutput shape
 */
export interface AddPermissionOutput {
  /**
   * <p>The permission statement you specified in the request. The response returns the same as a string using a backslash ("\") as an escape character in the JSON.</p>
   */
  Statement?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
