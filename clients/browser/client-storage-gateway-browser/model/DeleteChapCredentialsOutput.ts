import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteChapCredentialsOutput: _Structure_ = {
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
