import { _UnmarshalledDataflowEndpointListItem } from "./_DataflowEndpointListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListDataflowEndpointGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of dataflow endpoint groups.</p>
   */
  dataflowEndpointGroupList?: Array<_UnmarshalledDataflowEndpointListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
