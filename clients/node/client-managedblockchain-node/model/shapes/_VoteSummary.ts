import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VoteSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Vote: {
      shape: {
        type: "string"
      }
    },
    MemberName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
