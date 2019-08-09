import { _UnmarshalledFleetData } from "./_FleetData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetsOutput shape
 */
export interface DescribeFleetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the EC2 Fleets.</p>
   */
  Fleets?: Array<_UnmarshalledFleetData>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
