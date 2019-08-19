import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyAttributeTypeDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    AttributeType: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    Cardinality: {
      shape: {
        type: "string"
      }
    }
  }
};
