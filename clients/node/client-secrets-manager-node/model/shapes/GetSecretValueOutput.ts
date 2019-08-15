import { _SecretVersionStagesType } from "./_SecretVersionStagesType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSecretValueOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
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
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
