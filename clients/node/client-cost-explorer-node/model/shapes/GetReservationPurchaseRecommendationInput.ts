import { _ServiceSpecification } from "./_ServiceSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservationPurchaseRecommendationInput: _Structure_ = {
  type: "structure",
  required: ["Service"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    Service: {
      shape: {
        type: "string"
      }
    },
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
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
