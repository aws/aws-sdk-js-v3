import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaultStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OtherCount: {
      shape: {
        type: "integer"
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
