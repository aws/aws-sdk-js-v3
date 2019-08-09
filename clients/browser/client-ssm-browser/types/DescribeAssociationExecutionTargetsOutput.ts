import { _UnmarshalledAssociationExecutionTarget } from "./_AssociationExecutionTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssociationExecutionTargetsOutput shape
 */
export interface DescribeAssociationExecutionTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the execution.</p>
   */
  AssociationExecutionTargets?: Array<_UnmarshalledAssociationExecutionTarget>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
