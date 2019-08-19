import { _UnmarshalledOperatingSystem } from "./_OperatingSystem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <code>DescribeOperatingSystems</code> request.</p>
 */
export interface DescribeOperatingSystemsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains information in response to a <code>DescribeOperatingSystems</code> request.</p>
   */
  OperatingSystems?: Array<_UnmarshalledOperatingSystem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
