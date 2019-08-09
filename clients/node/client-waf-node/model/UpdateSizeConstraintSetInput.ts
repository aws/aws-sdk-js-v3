import { _SizeConstraintSetUpdates } from "./_SizeConstraintSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSizeConstraintSetInput: _Structure_ = {
  type: "structure",
  required: ["SizeConstraintSetId", "ChangeToken", "Updates"],
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
    },
    Updates: {
      shape: _SizeConstraintSetUpdates
    }
  }
};
