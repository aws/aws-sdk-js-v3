import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ByteMatchSetSummary: _Structure_ = {
  type: "structure",
  required: ["ByteMatchSetId", "Name"],
  members: {
    ByteMatchSetId: {
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
