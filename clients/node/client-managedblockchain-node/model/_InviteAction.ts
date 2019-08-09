import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InviteAction: _Structure_ = {
  type: "structure",
  required: ["Principal"],
  members: {
    Principal: {
      shape: {
        type: "string"
      }
    }
  }
};
