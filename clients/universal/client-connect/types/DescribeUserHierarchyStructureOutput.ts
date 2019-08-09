import { _UnmarshalledHierarchyStructure } from "./_HierarchyStructure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserHierarchyStructureOutput shape
 */
export interface DescribeUserHierarchyStructureOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>HierarchyStructure</code> object.</p>
   */
  HierarchyStructure?: _UnmarshalledHierarchyStructure;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
