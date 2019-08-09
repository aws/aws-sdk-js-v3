import { _UnmarshalledServiceQuota } from "./_ServiceQuota";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAWSDefaultServiceQuotaOutput shape
 */
export interface GetAWSDefaultServiceQuotaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the <a>ServiceQuota</a> object which contains all values for a quota.</p>
   */
  Quota?: _UnmarshalledServiceQuota;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
