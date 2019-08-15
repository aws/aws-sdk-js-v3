import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteContactInput: _Structure_ = {
  type: "structure",
  required: ["ContactArn"],
  members: {
    ContactArn: {
      shape: {
        type: "string"
      }
    }
  }
};
