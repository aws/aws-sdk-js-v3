import { _UnmarshalledAccountLimit } from "./_AccountLimit";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An account limit structure that contain a list of AWS CloudFormation account limits and their values.</p>
   */
  AccountLimits?: Array<_UnmarshalledAccountLimit>;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of limits. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
