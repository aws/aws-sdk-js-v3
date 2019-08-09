import { _ObjectReference } from "./_ObjectReference";
import { _ObjectAttributeUpdateList } from "./_ObjectAttributeUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchUpdateObjectAttributes: _Structure_ = {
  type: "structure",
  required: ["ObjectReference", "AttributeUpdates"],
  members: {
    ObjectReference: {
      shape: _ObjectReference
    },
    AttributeUpdates: {
      shape: _ObjectAttributeUpdateList
    }
  }
};
