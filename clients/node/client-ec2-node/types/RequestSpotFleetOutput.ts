import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of RequestSpotFleet.</p>
 */
export interface RequestSpotFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the Spot Fleet request.</p>
   */
  SpotFleetRequestId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
