import { _UnmarshalledIdFormat } from "./_IdFormat";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIdentityIdFormatOutput shape
 */
export interface DescribeIdentityIdFormatOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the ID format for the resources.</p>
   */
  Statuses?: Array<_UnmarshalledIdFormat>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
