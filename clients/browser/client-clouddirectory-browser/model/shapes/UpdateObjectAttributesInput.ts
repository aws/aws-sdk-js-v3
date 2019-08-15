import { _ObjectReference } from "./_ObjectReference";
import { _ObjectAttributeUpdateList } from "./_ObjectAttributeUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateObjectAttributesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "ObjectReference", "AttributeUpdates"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    ObjectReference: {
      shape: _ObjectReference
    },
    AttributeUpdates: {
      shape: _ObjectAttributeUpdateList
    }
  }
};
