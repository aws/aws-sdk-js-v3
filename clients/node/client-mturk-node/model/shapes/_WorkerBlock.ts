import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkerBlock: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
