import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectionStatusInput: _Structure_ = {
  type: "structure",
  required: ["Target"],
  members: {
    Target: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
