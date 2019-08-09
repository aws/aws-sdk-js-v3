import { _UnmarshalledAvailabilityOptionsStatus } from "./_AvailabilityOptionsStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>
 */
export interface DescribeAvailabilityOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: _UnmarshalledAvailabilityOptionsStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
