import { _UnmarshalledTaskSet } from "./_TaskSet";
import { _UnmarshalledFailure } from "./_Failure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTaskSetsOutput shape
 */
export interface DescribeTaskSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of task sets described.</p>
   */
  taskSets?: Array<_UnmarshalledTaskSet>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
