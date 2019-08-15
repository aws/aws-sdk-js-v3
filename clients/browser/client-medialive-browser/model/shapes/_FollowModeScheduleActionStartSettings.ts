import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FollowModeScheduleActionStartSettings: _Structure_ = {
  type: "structure",
  required: ["ReferenceActionName", "FollowPoint"],
  members: {
    FollowPoint: {
      shape: {
        type: "string"
      },
      locationName: "followPoint"
    },
    ReferenceActionName: {
      shape: {
        type: "string"
      },
      locationName: "referenceActionName"
    }
  }
};
