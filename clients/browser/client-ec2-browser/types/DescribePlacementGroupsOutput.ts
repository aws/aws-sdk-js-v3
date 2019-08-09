import { _UnmarshalledPlacementGroup } from "./_PlacementGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePlacementGroupsOutput shape
 */
export interface DescribePlacementGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the placement groups.</p>
   */
  PlacementGroups?: Array<_UnmarshalledPlacementGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
