import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchAttachToIndex: _Structure_ = {
  type: "structure",
  required: ["IndexReference", "TargetReference"],
  members: {
    IndexReference: {
      shape: _ObjectReference
    },
    TargetReference: {
      shape: _ObjectReference
    }
  }
};
