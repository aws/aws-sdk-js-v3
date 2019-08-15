import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDetails: _Structure_ = {
  type: "structure",
  required: ["Message", "Code"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Code: {
      shape: {
        type: "string"
      }
    }
  }
};
