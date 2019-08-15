import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginGroupMember: _Structure_ = {
  type: "structure",
  required: ["OriginId"],
  members: {
    OriginId: {
      shape: {
        type: "string"
      }
    }
  }
};
