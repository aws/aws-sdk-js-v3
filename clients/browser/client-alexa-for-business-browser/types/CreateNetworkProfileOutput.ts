import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkProfileOutput shape
 */
export interface CreateNetworkProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
