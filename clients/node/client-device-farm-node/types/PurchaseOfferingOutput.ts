import { _UnmarshalledOfferingTransaction } from "./_OfferingTransaction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of the purchase offering (e.g., success or failure).</p>
 */
export interface PurchaseOfferingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the offering transaction for the purchase result.</p>
   */
  offeringTransaction?: _UnmarshalledOfferingTransaction;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
