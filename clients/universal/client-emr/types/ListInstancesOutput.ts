import { _UnmarshalledInstance } from "./_Instance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This output contains the list of instances.</p>
 */
export interface ListInstancesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of instances for the cluster and given filters.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
