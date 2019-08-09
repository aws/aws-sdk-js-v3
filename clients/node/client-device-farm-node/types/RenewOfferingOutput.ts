import { _UnmarshalledOfferingTransaction } from "./_OfferingTransaction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a renewal offering.</p>
 */
export interface RenewOfferingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the status of the offering transaction for the renewal.</p>
   */
  offeringTransaction?: _UnmarshalledOfferingTransaction;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
