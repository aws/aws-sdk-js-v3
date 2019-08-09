import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAvailableZonesOutput shape
 */
export interface ListAvailableZonesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
   */
  AZList?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
