import { _SizeConstraintSet } from "./_SizeConstraintSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSizeConstraintSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SizeConstraintSet: {
      shape: _SizeConstraintSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
