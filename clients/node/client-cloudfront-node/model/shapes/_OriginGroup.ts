import { _OriginGroupFailoverCriteria } from "./_OriginGroupFailoverCriteria";
import { _OriginGroupMembers } from "./_OriginGroupMembers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginGroup: _Structure_ = {
  type: "structure",
  required: ["Id", "FailoverCriteria", "Members"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    FailoverCriteria: {
      shape: _OriginGroupFailoverCriteria
    },
    Members: {
      shape: _OriginGroupMembers
    }
  }
};
