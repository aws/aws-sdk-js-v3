import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChapCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    InitiatorName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
