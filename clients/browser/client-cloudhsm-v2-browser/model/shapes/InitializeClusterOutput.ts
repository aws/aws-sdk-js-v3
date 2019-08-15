import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitializeClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
