import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebACLSummary: _Structure_ = {
  type: "structure",
  required: ["WebACLId", "Name"],
  members: {
    WebACLId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
