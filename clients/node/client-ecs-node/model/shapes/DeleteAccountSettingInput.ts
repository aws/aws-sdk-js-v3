import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAccountSettingInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
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
