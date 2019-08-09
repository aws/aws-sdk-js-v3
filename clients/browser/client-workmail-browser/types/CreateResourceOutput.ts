import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResourceOutput shape
 */
export interface CreateResourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the new resource.</p>
   */
  ResourceId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
