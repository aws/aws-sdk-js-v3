import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmProductInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Return: {
      shape: {
        type: "boolean"
      },
      locationName: "return"
    }
  }
};
