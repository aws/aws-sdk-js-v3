import { _InstanceDetails } from "./_InstanceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationPurchaseRecommendationDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    InstanceDetails: {
      shape: _InstanceDetails
    },
    RecommendedNumberOfInstancesToPurchase: {
      shape: {
        type: "string"
      }
    },
    RecommendedNormalizedUnitsToPurchase: {
      shape: {
        type: "string"
      }
    },
    MinimumNumberOfInstancesUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    MinimumNormalizedUnitsUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    MaximumNumberOfInstancesUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    MaximumNormalizedUnitsUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    AverageNumberOfInstancesUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    AverageNormalizedUnitsUsedPerHour: {
      shape: {
        type: "string"
      }
    },
    AverageUtilization: {
      shape: {
        type: "string"
      }
    },
    EstimatedBreakEvenInMonths: {
      shape: {
        type: "string"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    },
    EstimatedMonthlySavingsAmount: {
      shape: {
        type: "string"
      }
    },
    EstimatedMonthlySavingsPercentage: {
      shape: {
        type: "string"
      }
    },
    EstimatedMonthlyOnDemandCost: {
      shape: {
        type: "string"
      }
    },
    EstimatedReservationCostForLookbackPeriod: {
      shape: {
        type: "string"
      }
    },
    UpfrontCost: {
      shape: {
        type: "string"
      }
    },
    RecurringStandardMonthlyCost: {
      shape: {
        type: "string"
      }
    }
  }
};
