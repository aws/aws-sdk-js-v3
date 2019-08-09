import { _QueryArgProfileConfig } from "./_QueryArgProfileConfig";
import { _ContentTypeProfileConfig } from "./_ContentTypeProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryptionSummary: _Structure_ = {
  type: "structure",
  required: ["Id", "LastModifiedTime"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    QueryArgProfileConfig: {
      shape: _QueryArgProfileConfig
    },
    ContentTypeProfileConfig: {
      shape: _ContentTypeProfileConfig
    }
  }
};
