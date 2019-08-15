import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageAttributeValue: _Structure_ = {
  type: "structure",
  required: ["DataType"],
  members: {
    DataType: {
      shape: {
        type: "string"
      }
    },
    StringValue: {
      shape: {
        type: "string"
      }
    },
    BinaryValue: {
      shape: {
        type: "blob"
      }
    }
  }
};
