import { _AccountAttributeValueList } from "./_AccountAttributeValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeName: {
      shape: {
        type: "string"
      },
      locationName: "attributeName"
    },
    AttributeValues: {
      shape: _AccountAttributeValueList,
      locationName: "attributeValueSet"
    }
  }
};
