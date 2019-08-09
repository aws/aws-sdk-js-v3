import { _UnmarshalledConstraintDetail } from "./_ConstraintDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConstraintOutput shape
 */
export interface DescribeConstraintOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the constraint.</p>
   */
  ConstraintDetail?: _UnmarshalledConstraintDetail;

  /**
   * <p>The constraint parameters.</p>
   */
  ConstraintParameters?: string;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: "AVAILABLE" | "CREATING" | "FAILED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
