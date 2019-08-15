import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetachPolicy: _Structure_ = {
  type: "structure",
  required: ["PolicyReference", "ObjectReference"],
  members: {
    PolicyReference: {
      shape: _ObjectReference
    },
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
