import { _UnmarshalledReservationPurchaseRecommendationMetadata } from "./_ReservationPurchaseRecommendationMetadata";
import { _UnmarshalledReservationPurchaseRecommendation } from "./_ReservationPurchaseRecommendation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReservationPurchaseRecommendationOutput shape
 */
export interface GetReservationPurchaseRecommendationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.</p>
   */
  Metadata?: _UnmarshalledReservationPurchaseRecommendationMetadata;

  /**
   * <p>Recommendations for reservations to purchase.</p>
   */
  Recommendations?: Array<_UnmarshalledReservationPurchaseRecommendation>;

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
