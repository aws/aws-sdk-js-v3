import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlueInstanceTerminationOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    action: {
      shape: {
        type: "string"
      }
    },
    terminationWaitTimeInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
