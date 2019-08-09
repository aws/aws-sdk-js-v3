import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRandomPasswordOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RandomPassword: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
