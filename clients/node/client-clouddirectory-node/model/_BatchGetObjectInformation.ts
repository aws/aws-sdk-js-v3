import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchGetObjectInformation: _Structure_ = {
  type: "structure",
  required: ["ObjectReference"],
  members: {
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
