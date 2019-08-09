import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTagOptionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Active: {
      shape: {
        type: "boolean"
      }
    }
  }
};
