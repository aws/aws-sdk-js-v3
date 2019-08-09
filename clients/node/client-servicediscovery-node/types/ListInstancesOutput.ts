import { _UnmarshalledInstanceSummary } from "./_InstanceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListInstancesOutput shape
 */
export interface ListInstancesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the instances that are associated with the specified service.</p>
   */
  Instances?: Array<_UnmarshalledInstanceSummary>;

  /**
   * <p>If more than <code>MaxResults</code> instances match the specified criteria, you can submit another <code>ListInstances</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
