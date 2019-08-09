import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the action.</p>
   */
  Status: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
