import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStateMachineOutput: _Structure_ = {
  type: "structure",
  required: ["updateDate"],
  members: {
    updateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
