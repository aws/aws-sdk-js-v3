import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectionStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Target: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
