import { _UnmarshalledGroundStationData } from "./_GroundStationData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListGroundStationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of ground stations.</p>
   */
  groundStationList?: Array<_UnmarshalledGroundStationData>;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
