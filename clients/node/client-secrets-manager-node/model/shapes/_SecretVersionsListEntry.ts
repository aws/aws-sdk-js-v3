import { _SecretVersionStagesType } from "./_SecretVersionStagesType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecretVersionsListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VersionId: {
      shape: {
        type: "string",
        min: 32
      }
    },
    VersionStages: {
      shape: _SecretVersionStagesType
    },
    LastAccessedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
