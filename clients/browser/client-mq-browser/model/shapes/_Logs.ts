import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Logs: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Audit: {
      shape: {
        type: "boolean"
      },
      locationName: "audit"
    },
    General: {
      shape: {
        type: "boolean"
      },
      locationName: "general"
    }
  }
};
