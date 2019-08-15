import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceRecord: _Structure_ = {
  type: "structure",
  required: ["Name", "Type", "Value"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
