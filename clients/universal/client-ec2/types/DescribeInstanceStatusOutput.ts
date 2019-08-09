import { _UnmarshalledInstanceStatus } from "./_InstanceStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstanceStatusOutput shape
 */
export interface DescribeInstanceStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the status of the instances.</p>
   */
  InstanceStatuses?: Array<_UnmarshalledInstanceStatus>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
