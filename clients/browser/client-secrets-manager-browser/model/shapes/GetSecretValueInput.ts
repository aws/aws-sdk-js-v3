import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSecretValueInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionId: {
      shape: {
        type: "string",
        min: 32
      }
    },
    VersionStage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
