import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyInput: _Structure_ = {
  type: "structure",
  required: ["Content", "Description", "Name", "Type"],
  members: {
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
