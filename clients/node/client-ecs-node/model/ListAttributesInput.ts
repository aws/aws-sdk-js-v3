import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttributesInput: _Structure_ = {
  type: "structure",
  required: ["targetType"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    targetType: {
      shape: {
        type: "string"
      }
    },
    attributeName: {
      shape: {
        type: "string"
      }
    },
    attributeValue: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
