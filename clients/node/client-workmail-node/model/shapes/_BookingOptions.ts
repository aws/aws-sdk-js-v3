import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BookingOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoAcceptRequests: {
      shape: {
        type: "boolean"
      }
    },
    AutoDeclineRecurringRequests: {
      shape: {
        type: "boolean"
      }
    },
    AutoDeclineConflictingRequests: {
      shape: {
        type: "boolean"
      }
    }
  }
};
