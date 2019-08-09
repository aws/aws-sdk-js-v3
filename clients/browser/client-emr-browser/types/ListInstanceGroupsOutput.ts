import { _UnmarshalledInstanceGroup } from "./_InstanceGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of instance groups for the cluster and given filters.</p>
   */
  InstanceGroups?: Array<_UnmarshalledInstanceGroup>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
