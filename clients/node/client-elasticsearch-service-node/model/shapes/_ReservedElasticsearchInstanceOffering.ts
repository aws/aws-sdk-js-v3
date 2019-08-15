import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedElasticsearchInstanceOffering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
