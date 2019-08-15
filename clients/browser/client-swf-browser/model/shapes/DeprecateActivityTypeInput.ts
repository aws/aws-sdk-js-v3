import { _ActivityType } from "./_ActivityType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeprecateActivityTypeInput: _Structure_ = {
  type: "structure",
  required: ["domain", "activityType"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    activityType: {
      shape: _ActivityType
    }
  }
};
