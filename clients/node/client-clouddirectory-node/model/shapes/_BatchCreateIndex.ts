import { _AttributeKeyList } from "./_AttributeKeyList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchCreateIndex: _Structure_ = {
  type: "structure",
  required: ["OrderedIndexedAttributeList", "IsUnique"],
  members: {
    OrderedIndexedAttributeList: {
      shape: _AttributeKeyList
    },
    IsUnique: {
      shape: {
        type: "boolean"
      }
    },
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
