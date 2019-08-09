import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorStateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stateName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
