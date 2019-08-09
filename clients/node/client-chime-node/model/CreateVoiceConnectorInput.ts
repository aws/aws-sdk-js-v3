import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVoiceConnectorInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RequireEncryption"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RequireEncryption: {
      shape: {
        type: "boolean"
      }
    }
  }
};
