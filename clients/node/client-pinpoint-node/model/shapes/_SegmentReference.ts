import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentReference: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    }
  }
};
