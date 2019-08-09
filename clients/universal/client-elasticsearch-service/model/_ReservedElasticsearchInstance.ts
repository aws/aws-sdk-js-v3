import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedElasticsearchInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservationName: {
      shape: {
        type: "string",
        min: 5
      }
    },
    ReservedElasticsearchInstanceId: {
      shape: {
        type: "string"
      }
    },
    ReservedElasticsearchInstanceOfferingId: {
      shape: {
        type: "string"
      }
    },
    ElasticsearchInstanceType: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    Duration: {
      shape: {
        type: "integer"
      }
    },
    FixedPrice: {
      shape: {
        type: "float"
      }
    },
    UsagePrice: {
      shape: {
        type: "float"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    },
    ElasticsearchInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    PaymentOption: {
      shape: {
        type: "string"
      }
    },
    RecurringCharges: {
      shape: _RecurringChargeList
    }
  }
};
