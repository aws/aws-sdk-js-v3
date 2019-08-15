import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationAggregates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UtilizationPercentage: {
      shape: {
        type: "string"
      }
    },
    UtilizationPercentageInUnits: {
      shape: {
        type: "string"
      }
    },
    PurchasedHours: {
      shape: {
        type: "string"
      }
    },
    PurchasedUnits: {
      shape: {
        type: "string"
      }
    },
    TotalActualHours: {
      shape: {
        type: "string"
      }
    },
    TotalActualUnits: {
      shape: {
        type: "string"
      }
    },
    UnusedHours: {
      shape: {
        type: "string"
      }
    },
    UnusedUnits: {
      shape: {
        type: "string"
      }
    },
    OnDemandCostOfRIHoursUsed: {
      shape: {
        type: "string"
      }
    },
    NetRISavings: {
      shape: {
        type: "string"
      }
    },
    TotalPotentialRISavings: {
      shape: {
        type: "string"
      }
    },
    AmortizedUpfrontFee: {
      shape: {
        type: "string"
      }
    },
    AmortizedRecurringFee: {
      shape: {
        type: "string"
      }
    },
    TotalAmortizedFee: {
      shape: {
        type: "string"
      }
    }
  }
};
