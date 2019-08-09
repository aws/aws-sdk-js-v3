import { _UnmarshalledBonusPayment } from "./_BonusPayment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBonusPaymentsOutput shape
 */
export interface ListBonusPaymentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of bonus payments on this page in the filtered results list, equivalent to the number of bonus payments being returned by this call. </p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>A successful request to the ListBonusPayments operation returns a list of BonusPayment objects. </p>
   */
  BonusPayments?: Array<_UnmarshalledBonusPayment>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
