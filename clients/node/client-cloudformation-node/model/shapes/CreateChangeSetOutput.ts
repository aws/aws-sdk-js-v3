import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateChangeSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
