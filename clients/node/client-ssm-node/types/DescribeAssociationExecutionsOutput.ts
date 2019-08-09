import { _UnmarshalledAssociationExecution } from "./_AssociationExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssociationExecutionsOutput shape
 */
export interface DescribeAssociationExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the executions for the specified association ID.</p>
   */
  AssociationExecutions?: Array<_UnmarshalledAssociationExecution>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
