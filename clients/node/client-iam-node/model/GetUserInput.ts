import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
