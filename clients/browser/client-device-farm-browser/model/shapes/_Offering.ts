import { _RecurringCharges } from "./_RecurringCharges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Offering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 32
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    recurringCharges: {
      shape: _RecurringCharges
    }
  }
};
