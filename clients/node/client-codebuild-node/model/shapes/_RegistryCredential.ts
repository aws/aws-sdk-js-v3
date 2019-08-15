import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegistryCredential: _Structure_ = {
  type: "structure",
  required: ["credential", "credentialProvider"],
  members: {
    credential: {
      shape: {
        type: "string",
        min: 1
      }
    },
    credentialProvider: {
      shape: {
        type: "string"
      }
    }
  }
};
