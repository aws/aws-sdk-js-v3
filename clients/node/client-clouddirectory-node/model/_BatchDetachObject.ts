import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetachObject: _Structure_ = {
  type: "structure",
  required: ["ParentReference", "LinkName"],
  members: {
    ParentReference: {
      shape: _ObjectReference
    },
    LinkName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BatchReferenceName: {
      shape: {
        type: "string"
      }
    }
  }
};
