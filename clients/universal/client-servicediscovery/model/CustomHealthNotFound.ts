import { Structure as _Structure_ } from "@aws-sdk/types";

export const CustomHealthNotFound: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "CustomHealthNotFound"
};
