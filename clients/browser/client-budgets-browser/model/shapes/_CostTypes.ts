import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CostTypes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IncludeTax: {
      shape: {
        type: "boolean"
      }
    },
    IncludeSubscription: {
      shape: {
        type: "boolean"
      }
    },
    UseBlended: {
      shape: {
        type: "boolean"
      }
    },
    IncludeRefund: {
      shape: {
        type: "boolean"
      }
    },
    IncludeCredit: {
      shape: {
        type: "boolean"
      }
    },
    IncludeUpfront: {
      shape: {
        type: "boolean"
      }
    },
    IncludeRecurring: {
      shape: {
        type: "boolean"
      }
    },
    IncludeOtherSubscription: {
      shape: {
        type: "boolean"
      }
    },
    IncludeSupport: {
      shape: {
        type: "boolean"
      }
    },
    IncludeDiscount: {
      shape: {
        type: "boolean"
      }
    },
    UseAmortized: {
      shape: {
        type: "boolean"
      }
    }
  }
};
