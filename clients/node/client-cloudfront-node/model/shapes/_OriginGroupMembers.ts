import { _OriginGroupMemberList } from "./_OriginGroupMemberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginGroupMembers: _Structure_ = {
  type: "structure",
  required: ["Quantity", "Items"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _OriginGroupMemberList
    }
  }
};
