import { _UnmarshalledServiceQuota } from "./_ServiceQuota";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAWSDefaultServiceQuotasOutput shape
 */
export interface ListAWSDefaultServiceQuotasOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code> response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the quotas in the account with the AWS default values. </p>
   */
  Quotas?: Array<_UnmarshalledServiceQuota>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
