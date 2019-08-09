import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProtectionStatusInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId"],
  members: {
    PolicyId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    MemberAccountId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
