import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveCaseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    initialCaseStatus: {
      shape: {
        type: "string"
      }
    },
    finalCaseStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
