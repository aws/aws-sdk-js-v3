import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLocationInput: _Structure_ = {
  type: "structure",
  required: ["LocationArn"],
  members: {
    LocationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
