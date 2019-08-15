import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntitlementValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IntegerValue: {
      shape: {
        type: "integer"
      }
    },
    DoubleValue: {
      shape: {
        type: "float"
      }
    },
    BooleanValue: {
      shape: {
        type: "boolean"
      }
    },
    StringValue: {
      shape: {
        type: "string"
      }
    }
  }
};
