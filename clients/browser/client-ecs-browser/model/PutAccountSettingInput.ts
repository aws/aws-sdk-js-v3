import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAccountSettingInput: _Structure_ = {
  type: "structure",
  required: ["name", "value"],
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
