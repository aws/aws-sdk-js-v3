import { _UnmarshalledActiveInstance } from "./_ActiveInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetInstancesOutput shape
 */
export interface DescribeFleetInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The running instances. This list is refreshed periodically and might be out of date.</p>
   */
  ActiveInstances?: Array<_UnmarshalledActiveInstance>;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
