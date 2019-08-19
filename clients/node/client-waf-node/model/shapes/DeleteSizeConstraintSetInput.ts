import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSizeConstraintSetInput: _Structure_ = {
  type: "structure",
  required: ["SizeConstraintSetId", "ChangeToken"],
  members: {
    SizeConstraintSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
