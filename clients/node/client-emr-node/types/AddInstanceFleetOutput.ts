import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddInstanceFleetOutput shape
 */
export interface AddInstanceFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
