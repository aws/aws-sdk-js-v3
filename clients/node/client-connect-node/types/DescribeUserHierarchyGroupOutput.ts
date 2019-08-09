import { _UnmarshalledHierarchyGroup } from "./_HierarchyGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserHierarchyGroupOutput shape
 */
export interface DescribeUserHierarchyGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a <code>HierarchyGroup</code> object.</p>
   */
  HierarchyGroup?: _UnmarshalledHierarchyGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
