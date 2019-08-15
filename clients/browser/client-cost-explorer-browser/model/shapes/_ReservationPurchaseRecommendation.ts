import { _ServiceSpecification } from "./_ServiceSpecification";
import { _ReservationPurchaseRecommendationDetails } from "./_ReservationPurchaseRecommendationDetails";
import { _ReservationPurchaseRecommendationSummary } from "./_ReservationPurchaseRecommendationSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationPurchaseRecommendation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountScope: {
      shape: {
        type: "string"
      }
    },
    LookbackPeriodInDays: {
      shape: {
        type: "string"
      }
    },
    TermInYears: {
      shape: {
        type: "string"
      }
    },
    PaymentOption: {
      shape: {
        type: "string"
      }
    },
    ServiceSpecification: {
      shape: _ServiceSpecification
    },
    RecommendationDetails: {
      shape: _ReservationPurchaseRecommendationDetails
    },
    RecommendationSummary: {
      shape: _ReservationPurchaseRecommendationSummary
    }
  }
};
