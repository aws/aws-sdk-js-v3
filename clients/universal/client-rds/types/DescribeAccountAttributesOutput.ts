import { _UnmarshalledAccountQuota } from "./_AccountQuota";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>
 */
export interface DescribeAccountAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>AccountQuota</code> objects. Within this list, each quota has a name, a count of usage toward the quota maximum, and a maximum value for the quota.</p>
   */
  AccountQuotas?: Array<_UnmarshalledAccountQuota>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
