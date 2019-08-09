import { _UnmarshalledNetworkProfileData } from "./_NetworkProfileData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchNetworkProfilesOutput shape
 */
export interface SearchNetworkProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The network profiles that meet the specified set of filter criteria, in sort order. It is a list of NetworkProfileData objects. </p>
   */
  NetworkProfiles?: Array<_UnmarshalledNetworkProfileData>;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of network profiles returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
