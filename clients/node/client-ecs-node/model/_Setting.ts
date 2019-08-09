import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Setting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    principalArn: {
      shape: {
        type: "string"
      }
    }
  }
};
