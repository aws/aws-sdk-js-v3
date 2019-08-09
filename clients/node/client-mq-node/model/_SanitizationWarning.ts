import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SanitizationWarning: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeName: {
      shape: {
        type: "string"
      },
      locationName: "attributeName"
    },
    ElementName: {
      shape: {
        type: "string"
      },
      locationName: "elementName"
    },
    Reason: {
      shape: {
        type: "string"
      },
      locationName: "reason"
    }
  }
};
