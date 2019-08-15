import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignTapePoolInput: _Structure_ = {
  type: "structure",
  required: ["TapeARN", "PoolId"],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    PoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
