import { _ReservationPurchaseRecommendationMetadata } from "./_ReservationPurchaseRecommendationMetadata";
import { _ReservationPurchaseRecommendations } from "./_ReservationPurchaseRecommendations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservationPurchaseRecommendationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _ReservationPurchaseRecommendationMetadata
    },
    Recommendations: {
      shape: _ReservationPurchaseRecommendations
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
