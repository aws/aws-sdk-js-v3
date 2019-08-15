import { _SecretVersionStagesType } from "./_SecretVersionStagesType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSecretValueInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 32
      }
    },
    SecretBinary: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    SecretString: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    VersionStages: {
      shape: _SecretVersionStagesType
    }
  }
};
