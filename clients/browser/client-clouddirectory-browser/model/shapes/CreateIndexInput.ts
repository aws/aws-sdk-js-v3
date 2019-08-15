import { _AttributeKeyList } from "./_AttributeKeyList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIndexInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "OrderedIndexedAttributeList", "IsUnique"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
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
    }
  }
};
