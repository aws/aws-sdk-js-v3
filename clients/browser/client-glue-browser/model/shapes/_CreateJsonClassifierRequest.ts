import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateJsonClassifierRequest: _Structure_ = {
  type: "structure",
  required: ["Name", "JsonPath"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JsonPath: {
      shape: {
        type: "string"
      }
    }
  }
};
