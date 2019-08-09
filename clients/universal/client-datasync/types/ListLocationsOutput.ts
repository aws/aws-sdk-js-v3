import { _UnmarshalledLocationListEntry } from "./_LocationListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListLocationsResponse</p>
 */
export interface ListLocationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that contains a list of locations.</p>
   */
  Locations?: Array<_UnmarshalledLocationListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list of locations.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
