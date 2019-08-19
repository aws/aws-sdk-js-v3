import { _UnmarshalledRdsDbInstance } from "./_RdsDbInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeRdsDbInstances</code> request.</p>
 */
export interface DescribeRdsDbInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An a array of <code>RdsDbInstance</code> objects that describe the instances.</p>
   */
  RdsDbInstances?: Array<_UnmarshalledRdsDbInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
