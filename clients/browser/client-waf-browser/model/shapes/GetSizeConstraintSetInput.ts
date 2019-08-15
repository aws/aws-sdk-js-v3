import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSizeConstraintSetInput: _Structure_ = {
  type: "structure",
  required: ["SizeConstraintSetId"],
  members: {
    SizeConstraintSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
