import { _UnmarshalledOfferingPromotion } from "./_OfferingPromotion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOfferingPromotionsOutput shape
 */
export interface ListOfferingPromotionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the offering promotions.</p>
   */
  offeringPromotions?: Array<_UnmarshalledOfferingPromotion>;

  /**
   * <p>An identifier to be used in the next call to this operation, to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
