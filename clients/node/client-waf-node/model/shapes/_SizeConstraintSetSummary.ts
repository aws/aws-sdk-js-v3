import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SizeConstraintSetSummary: _Structure_ = {
  type: "structure",
  required: ["SizeConstraintSetId", "Name"],
  members: {
    SizeConstraintSetId: {
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
