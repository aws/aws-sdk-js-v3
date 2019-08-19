import { _UnmarshalledOfferingTransaction } from "./_OfferingTransaction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns the transaction log of the specified offerings.</p>
 */
export interface ListOfferingTransactionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The audit log of subscriptions you have purchased and modified through AWS Device Farm.</p>
   */
  offeringTransactions?: Array<_UnmarshalledOfferingTransaction>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
