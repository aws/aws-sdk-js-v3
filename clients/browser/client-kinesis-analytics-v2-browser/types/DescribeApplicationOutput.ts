import { _UnmarshalledApplicationDetail } from "./_ApplicationDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeApplicationOutput shape
 */
export interface DescribeApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides a description of the application, such as the application's Amazon Resource Name (ARN), status, and latest version.</p>
   */
  ApplicationDetail: _UnmarshalledApplicationDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
