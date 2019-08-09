import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IndexAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IndexedAttributes: {
      shape: _AttributeKeyAndValueList
    },
    ObjectIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
