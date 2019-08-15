import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestCancelActivityTaskDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["activityId"],
  members: {
    activityId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
