import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: ["eventName"],
  members: {
    eventName: {
      shape: {
        type: "string"
      }
    },
    condition: {
      shape: {
        type: "string"
      }
    },
    actions: {
      shape: _Actions
    }
  }
};
