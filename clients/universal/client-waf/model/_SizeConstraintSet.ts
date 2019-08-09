import { _SizeConstraints } from "./_SizeConstraints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SizeConstraintSet: _Structure_ = {
  type: "structure",
  required: ["SizeConstraintSetId", "SizeConstraints"],
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
    },
    SizeConstraints: {
      shape: _SizeConstraints
    }
  }
};
