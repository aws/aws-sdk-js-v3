import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedAttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StringValue: {
      shape: {
        type: "string"
      }
    },
    BinaryValue: {
      shape: {
        type: "blob"
      }
    },
    BooleanValue: {
      shape: {
        type: "boolean"
      }
    },
    NumberValue: {
      shape: {
        type: "string"
      }
    },
    DatetimeValue: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
