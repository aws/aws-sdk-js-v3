import { _UnmarshalledMissionProfileListItem } from "./_MissionProfileListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListMissionProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of mission profiles</p>
   */
  missionProfileList?: Array<_UnmarshalledMissionProfileListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
