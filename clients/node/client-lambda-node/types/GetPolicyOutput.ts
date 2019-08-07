import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPolicyOutput shape
 */
export interface GetPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource policy associated with the specified function. The response returns the same as a string using a backslash ("\") as an escape character in the JSON.</p>
   */
  Policy?: string;

  /**
   * <p>Represents the latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
