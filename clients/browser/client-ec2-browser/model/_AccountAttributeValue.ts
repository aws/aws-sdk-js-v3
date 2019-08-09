import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountAttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeValue: {
      shape: {
        type: "string"
      },
      locationName: "attributeValue"
    }
  }
};
