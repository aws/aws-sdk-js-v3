import { _UnmarshalledAdjustmentType } from "./_AdjustmentType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAdjustmentTypesOutput shape
 */
export interface DescribeAdjustmentTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy adjustment types.</p>
   */
  AdjustmentTypes?: Array<_UnmarshalledAdjustmentType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
