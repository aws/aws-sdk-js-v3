import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSecretVersionStageInput: _Structure_ = {
  type: "structure",
  required: ["SecretId", "VersionStage"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionStage: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RemoveFromVersionId: {
      shape: {
        type: "string",
        min: 32
      }
    },
    MoveToVersionId: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
