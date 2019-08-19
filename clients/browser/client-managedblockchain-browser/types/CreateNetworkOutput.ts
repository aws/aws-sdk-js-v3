import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkOutput shape
 */
export interface CreateNetworkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier for the network.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier for the first member within the network.</p>
   */
  MemberId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
