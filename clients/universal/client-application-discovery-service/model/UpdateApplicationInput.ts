import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["configurationId"],
  members: {
    configurationId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
