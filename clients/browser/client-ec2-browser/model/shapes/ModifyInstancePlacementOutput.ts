import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstancePlacementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Return: {
      shape: {
        type: "boolean"
      },
      locationName: "return"
    }
  }
};
