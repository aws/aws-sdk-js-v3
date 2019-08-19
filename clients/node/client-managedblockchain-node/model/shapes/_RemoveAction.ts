import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemoveAction: _Structure_ = {
  type: "structure",
  required: ["MemberId"],
  members: {
    MemberId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
