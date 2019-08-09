import { _UnmarshalledProfileData } from "./_ProfileData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchProfilesOutput shape
 */
export interface SearchProfilesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The profiles that meet the specified set of filter criteria, in sort order.</p>
   */
  Profiles?: Array<_UnmarshalledProfileData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of room profiles returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
