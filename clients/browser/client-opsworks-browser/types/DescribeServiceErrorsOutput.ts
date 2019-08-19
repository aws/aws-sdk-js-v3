import { _UnmarshalledServiceError } from "./_ServiceError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeServiceErrors</code> request.</p>
 */
export interface DescribeServiceErrorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>ServiceError</code> objects that describe the specified service errors.</p>
   */
  ServiceErrors?: Array<_UnmarshalledServiceError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
