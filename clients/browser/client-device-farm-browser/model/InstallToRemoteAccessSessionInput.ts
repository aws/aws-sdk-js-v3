import { Structure as _Structure_ } from "@aws-sdk/types";

export const InstallToRemoteAccessSessionInput: _Structure_ = {
  type: "structure",
  required: ["remoteAccessSessionArn", "appArn"],
  members: {
    remoteAccessSessionArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    appArn: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
