import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFilterOutput shape
 */
export interface CreateFilterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the successfully created filter.</p>
   */
  Name: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
