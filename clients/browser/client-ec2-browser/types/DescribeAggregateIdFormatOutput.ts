import { _UnmarshalledIdFormat } from "./_IdFormat";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAggregateIdFormatOutput shape
 */
export interface DescribeAggregateIdFormatOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether all resource types in the Region are configured to use longer IDs. This value is only <code>true</code> if all users are configured to use longer IDs for all resources types in the Region.</p>
   */
  UseLongIdsAggregated?: boolean;

  /**
   * <p>Information about each resource's ID format.</p>
   */
  Statuses?: Array<_UnmarshalledIdFormat>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
