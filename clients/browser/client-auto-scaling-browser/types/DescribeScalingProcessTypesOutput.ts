import { _UnmarshalledProcessType } from "./_ProcessType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingProcessTypesOutput shape
 */
export interface DescribeScalingProcessTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the process types.</p>
   */
  Processes?: Array<_UnmarshalledProcessType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
