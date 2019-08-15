import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSchemaAsJsonOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Document: {
      shape: {
        type: "string"
      }
    }
  }
};
