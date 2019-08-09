import { _UnmarshalledEndpointGroup } from "./_EndpointGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEndpointGroupsOutput shape
 */
export interface ListEndpointGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of the endpoint groups associated with a listener.</p>
   */
  EndpointGroups?: Array<_UnmarshalledEndpointGroup>;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
