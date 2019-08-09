import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchAttachObject: _Structure_ = {
  type: "structure",
  required: ["ParentReference", "ChildReference", "LinkName"],
  members: {
    ParentReference: {
      shape: _ObjectReference
    },
    ChildReference: {
      shape: _ObjectReference
    },
    LinkName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
