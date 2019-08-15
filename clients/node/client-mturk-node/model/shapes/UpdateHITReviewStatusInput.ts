import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateHITReviewStatusInput: _Structure_ = {
  type: "structure",
  required: ["HITId"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Revert: {
      shape: {
        type: "boolean"
      }
    }
  }
};
