import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface UpdateFleetAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique identifier for a fleet that was updated.</p>
   */
  FleetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
