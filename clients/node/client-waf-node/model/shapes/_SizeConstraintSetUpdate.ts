import { _SizeConstraint } from "./_SizeConstraint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SizeConstraintSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "SizeConstraint"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    SizeConstraint: {
      shape: _SizeConstraint
    }
  }
};
