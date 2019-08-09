import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlInjectionMatchSetSummary: _Structure_ = {
  type: "structure",
  required: ["SqlInjectionMatchSetId", "Name"],
  members: {
    SqlInjectionMatchSetId: {
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
