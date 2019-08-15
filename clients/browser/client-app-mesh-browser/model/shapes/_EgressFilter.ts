import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EgressFilter: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
