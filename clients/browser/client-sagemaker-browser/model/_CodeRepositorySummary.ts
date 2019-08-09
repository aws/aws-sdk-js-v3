import { _GitConfig } from "./_GitConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeRepositorySummary: _Structure_ = {
  type: "structure",
  required: [
    "CodeRepositoryName",
    "CodeRepositoryArn",
    "CreationTime",
    "LastModifiedTime"
  ],
  members: {
    CodeRepositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CodeRepositoryArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    GitConfig: {
      shape: _GitConfig
    }
  }
};
