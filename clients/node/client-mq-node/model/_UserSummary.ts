import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PendingChange: {
      shape: {
        type: "string"
      },
      locationName: "pendingChange"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    }
  }
};
