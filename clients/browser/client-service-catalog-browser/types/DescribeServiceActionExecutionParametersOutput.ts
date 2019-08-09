import { _UnmarshalledExecutionParameter } from "./_ExecutionParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServiceActionExecutionParametersOutput shape
 */
export interface DescribeServiceActionExecutionParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _ExecutionParameters shape
   */
  ServiceActionParameters?: Array<_UnmarshalledExecutionParameter>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
