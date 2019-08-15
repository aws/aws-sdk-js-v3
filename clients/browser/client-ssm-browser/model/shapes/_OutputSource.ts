import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputSourceId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    OutputSourceType: {
      shape: {
        type: "string"
      }
    }
  }
};
