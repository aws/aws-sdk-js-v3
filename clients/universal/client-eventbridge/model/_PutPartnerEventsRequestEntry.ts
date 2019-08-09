import { _EventResourceList } from "./_EventResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PutPartnerEventsRequestEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Time: {
      shape: {
        type: "timestamp"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    Resources: {
      shape: _EventResourceList
    },
    DetailType: {
      shape: {
        type: "string"
      }
    },
    Detail: {
      shape: {
        type: "string"
      }
    }
  }
};
