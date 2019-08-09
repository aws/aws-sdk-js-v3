import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateConnectivityInfoOutput shape
 */
export interface UpdateConnectivityInfoOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A message about the connectivity info update request.
   */
  Message?: string;

  /**
   * The new version of the connectivity info.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
