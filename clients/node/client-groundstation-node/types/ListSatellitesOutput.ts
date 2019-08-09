import { _UnmarshalledSatelliteListItem } from "./_SatelliteListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListSatellitesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   */
  nextToken?: string;

  /**
   * <p>List of satellites.</p>
   */
  satellites?: Array<_UnmarshalledSatelliteListItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
