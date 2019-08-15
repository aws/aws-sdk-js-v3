import { _LogSubscriptions } from "./_LogSubscriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLogSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogSubscriptions: {
      shape: _LogSubscriptions
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
