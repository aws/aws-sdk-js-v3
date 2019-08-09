import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IPSetSummary: _Structure_ = {
  type: "structure",
  required: ["IPSetId", "Name"],
  members: {
    IPSetId: {
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
