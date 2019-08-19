import { _UnmarshalledConversionTask } from "./_ConversionTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConversionTasksOutput shape
 */
export interface DescribeConversionTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the conversion tasks.</p>
   */
  ConversionTasks?: Array<_UnmarshalledConversionTask>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
