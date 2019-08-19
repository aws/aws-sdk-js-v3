import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApprovalResult: _Structure_ = {
  type: "structure",
  required: ["summary", "status"],
  members: {
    summary: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
